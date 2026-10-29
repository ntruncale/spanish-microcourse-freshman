# Español 9: Gramática

A self-paced Spanish grammar course for 9th graders who studied Spanish in middle school: **30 modules, one per week**, covering everything in a typical first-year high school Spanish course. Students work on iPads in the browser and record progress through Blackbaud assessments, the same way as the *Computer Science – Sophomore Year* course.

**Student site:** https://ntruncale.github.io/spanish-microcourse-freshman/ (GitHub Pages, served from the `docs/` folder)

## What's in each module

Every module follows the Ignatian Pedagogical Paradigm in seven steps: **Contexto** (a true story from the Spanish-speaking world), **Aprende** (three short grammar ideas), **Practica** (six self-checking activities), **Crea** (a short piece of writing), **Reflexiona**, **Evalúa** (the Blackbaud check) and **Más** (an optional challenge).

- **15 kinds of activities:** listening, dictation, fill-in-the-blank, tap-to-choose, conjugation grids, matching, sorting, sentence builders, translation, find-the-mistake, accent-mark placement, reading comprehension, cierto/falso, flashcards and optional speaking practice with recording.
- **Audio everywhere:** every 🔊 plays a clip in a Spain or Latin American voice (students choose), with a slow option. The clips are synthetic (Kokoro text-to-speech), and any clip can be replaced by a real recording with the same file name.
- **Accent marks:** yellow keys for á é í ó ú ü ñ ¿ ¡ under every Spanish text box. An answer that's right except for an accent turns yellow and says so.

## Folders

| Folder | What's in it | Public? |
|---|---|---|
| `content/` | The lessons: one file per module (`m01.js` … `m30.js`) and the unit list | Yes |
| `docs/` | The student site that GitHub Pages serves: pages, shared style and script, audio | Yes |
| `scripts/` | `build.js` (content → site), `make_audio.py` (audio clips), `teacher.js` + `export_xlsx.py` (teacher files) | Yes |
| `tests/` | A browser test that completes every activity in every module | Yes |
| `teacher-src/` | **Private:** completion codes and Blackbaud quizzes | **No** (git-ignored) |
| `teacher/` | **Private, generated:** answer keys, Blackbaud setups and import files, overview, checklist | **No** (git-ignored) |

The private folders are kept out of this public repository so students can't find the quiz answers. Keep them somewhere private (for example, a private repository like `cs-study-hall`, or a shared drive).

## Making changes

```bash
node scripts/build.js                 # check every module and rebuild docs/
python3 scripts/make_audio.py         # make audio for any new or changed Spanish text
node scripts/teacher.js && python3 scripts/export_xlsx.py   # rebuild the teacher files
node tests/run.js                     # test every module in a browser (needs Playwright)
```

Then commit and push `docs/` to publish.

## Settings

- **Vosotros** is taught and practiced. To turn it off everywhere, set `vosotros: false` at the top of `docs/assets/course.js`.
- **Colors and fonts** are at the top of `docs/assets/course.css`: Spanish flag red (#AA151B) and gold (#F1BF00), with azulejo blue.
