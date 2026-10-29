"""Make an MP3 for every Spanish phrase in build/speech.json, in two voices.

  docs/audio/es/<id>.mp3   Spain (Castilian pronunciation, female voice)
  docs/audio/la/<id>.mp3   Latin America (seseo, male voice)

The clips are synthetic: they come from Kokoro, an open-source text-to-speech model
(https://github.com/thewh1teagle/kokoro-onnx), not from recordings of people.
To use a real recording instead, save it as an MP3 under the same file name;
teacher/audio-clips.csv lists every file name and its text. This script never
overwrites a file that already exists, so recordings are safe.

Setup (once):
  python3 -m venv ~/tts && . ~/tts/bin/activate && pip install kokoro-onnx soundfile
  download kokoro-v1.0.onnx and voices-v1.0.bin from the kokoro-onnx releases page into ~/tts
Usage:
  node scripts/build.js && python3 scripts/make_audio.py [--models ~/tts] [--prune]
  --prune deletes clips that no module uses any more.
"""
import argparse
import json
import pathlib
import subprocess
import sys
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
VOICES = {
    "es": {"voice": "ef_dora", "lang": "es"},      # Spain
    "la": {"voice": "em_alex", "lang": "es-419"},  # Latin America
}
SPEED = 0.88  # a little slower than natural, for learners


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--models", default=str(pathlib.Path.home() / "tts"))
    ap.add_argument("--prune", action="store_true")
    args = ap.parse_args()

    phrases = json.loads((ROOT / "build/speech.json").read_text(encoding="utf-8"))
    todo = [(p, v) for p in phrases for v in VOICES if not (ROOT / "docs/audio" / v / f"{p['h']}.mp3").exists()]
    print(f"{len(phrases)} phrases; {len(todo)} clips to make")
    if todo:
        import numpy as np
        import soundfile as sf
        from kokoro_onnx import Kokoro
        m = pathlib.Path(args.models)
        k = Kokoro(str(m / "kokoro-v1.0.onnx"), str(m / "voices-v1.0.bin"))
        for v in VOICES:
            (ROOT / "docs/audio" / v).mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory() as tmp:
            for n, (p, v) in enumerate(todo, 1):
                cfg = VOICES[v]
                samples, rate = k.create(p["text"], voice=cfg["voice"], speed=SPEED, lang=cfg["lang"])
                pad = np.zeros(int(rate * 0.12), dtype=samples.dtype)
                wav = pathlib.Path(tmp) / "clip.wav"
                sf.write(wav, np.concatenate([pad, samples, pad]), rate)
                out = ROOT / "docs/audio" / v / f"{p['h']}.mp3"
                subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", str(wav), "-ac", "1", "-ar", "24000",
                                "-codec:a", "libmp3lame", "-b:a", "48k", str(out)], check=True)
                if n % 50 == 0 or n == len(todo):
                    print(f"  {n}/{len(todo)}", flush=True)
    if args.prune:
        keep = {p["h"] for p in phrases}
        gone = 0
        for v in VOICES:
            for f in (ROOT / "docs/audio" / v).glob("*.mp3"):
                if f.stem not in keep:
                    f.unlink()
                    gone += 1
        print(f"pruned {gone} unused clips")


if __name__ == "__main__":
    sys.exit(main())
