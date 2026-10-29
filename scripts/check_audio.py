"""Check that each audio clip says what it should, by transcribing it with Whisper (via sherpa-onnx).

Prints the clips whose transcript differs most from their text, for a person to listen to.
Speech recognizers are weak on single words and letters, so a flag means "listen to this", not "this is wrong".

Setup: pip install sherpa-onnx soundfile num2words; download sherpa-onnx-whisper-base from the
sherpa-onnx releases page. Usage: python3 scripts/check_audio.py --model DIR [--voice es|la] [--limit N]
"""
import argparse
import difflib
import json
import pathlib
import re
import subprocess
import unicodedata

import numpy as np
import sherpa_onnx
from num2words import num2words

ROOT = pathlib.Path(__file__).resolve().parent.parent


def norm(s):
    s = re.sub(r"\d+", lambda m: " " + num2words(int(m.group()), lang="es") + " ", s)
    s = unicodedata.normalize("NFD", s.lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-zñ ]+", " ", s).split()


def load(path):
    raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", str(path), "-f", "s16le", "-ac", "1", "-ar", "16000", "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--model", required=True)
    ap.add_argument("--voice", default="es")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--out", default=str(ROOT / "build" / "audio-check.json"))
    a = ap.parse_args()
    d = pathlib.Path(a.model)
    rec = sherpa_onnx.OfflineRecognizer.from_whisper(encoder=str(d / "base-encoder.int8.onnx"), decoder=str(d / "base-decoder.int8.onnx"),
                                                     tokens=str(d / "base-tokens.txt"), language="es", task="transcribe", num_threads=4)
    phrases = json.loads((ROOT / "build/speech.json").read_text(encoding="utf-8"))
    if a.limit:
        phrases = phrases[: a.limit]
    results = []
    for n, p in enumerate(phrases, 1):
        f = ROOT / "docs/audio" / a.voice / f"{p['h']}.mp3"
        if not f.exists():
            continue
        st = rec.create_stream()
        st.accept_waveform(16000, load(f))
        rec.decode_stream(st)
        heard = st.result.text.strip()
        want, got = norm(p["text"]), norm(heard)
        score = difflib.SequenceMatcher(None, " ".join(want), " ".join(got)).ratio()
        results.append({"h": p["h"], "text": p["text"], "heard": heard, "score": round(score, 3), "words": len(want), "where": p["where"]})
        if n % 200 == 0:
            print(f"  {n}/{len(phrases)}", flush=True)
    results.sort(key=lambda r: r["score"])
    pathlib.Path(a.out).write_text(json.dumps(results, ensure_ascii=False, indent=1), encoding="utf-8")
    multi = [r for r in results if r["words"] >= 3]
    print(f"{len(results)} clips checked ({a.voice}). Phrases of 3+ words: mean score {sum(r['score'] for r in multi) / max(1, len(multi)):.3f}")
    for r in multi[:40]:
        print(f"{r['score']:.2f}  {' '.join(r['where'])}  {r['text']}  →  {r['heard']}")


if __name__ == "__main__":
    main()
