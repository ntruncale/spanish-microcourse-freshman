#!/usr/bin/env node
/* Write the teacher folder (private) from build/course.json. Run scripts/build.js first.

   teacher/course-overview.md       every module: page, completion code, Blackbaud name, calendar
   teacher/blackbaud-setup-checklist.md
   teacher/answer-keys/mNN.md       every activity's answers, common snags, fact-check notes
   teacher/blackbaud/mNN-check.md   the Blackbaud assessment for each module
   teacher/blackbaud-import/        all quizzes as CSV (one file and one per module); scripts/export_xlsx.py adds a spreadsheet
   teacher/audio-clips.csv          every audio file and its text, for replacing clips with real recordings

   Usage: node scripts/build.js && node scripts/teacher.js && python3 scripts/export_xlsx.py */
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const Text = require(path.join(ROOT, "docs/assets/course.js"));
const { units, modules, checks, pages } = JSON.parse(fs.readFileSync(path.join(ROOT, "build/course.json"), "utf8"));
const speech = JSON.parse(fs.readFileSync(path.join(ROOT, "build/speech.json"), "utf8"));
const OUT = path.join(ROOT, "teacher");
const SITE = "https://ntruncale.github.io/spanish-microcourse-freshman/";
for (const d of ["", "answer-keys", "blackbaud", "blackbaud-import", "blackbaud-import/csv"]) fs.mkdirSync(path.join(OUT, d), { recursive: true });

const key = (m) => "m" + String(m.num).padStart(2, "0");
// Markup in module text → Markdown: {{shown|spoken}} → shown, ((clue)) → (clue), HTML tags dropped.
const md = (s) => String(s == null ? "" : s).replace(/\{\{(.+?)\}\}/g, (_, x) => x.split("|")[0]).replace(/\(\((.*?)\)\)/g, "($1)").replace(/<[^>]+>/g, "").replace(/\s*\n\s*\n\s*/g, " ").trim();
const plain = (s) => Text.plain(md(s));
const assessment = (m) => `M${m.num} Check: ${Text.plain(m.title)}`;
const required = (m) => m.tasks.filter((t) => !t.optional && t.type !== "speak");
const LETTERS = "ABCDEF";

/* ---------- answer keys ---------- */
function chosenNote(t, list) { return t.pick && t.pick < list.length ? ` *(varies: each student gets ${t.pick} of these ${list.length})*` : ""; }
function choicesMd(choices) {
  return choices.map((c) => `- ${c[1] ? "**" + md(c[0]) + "** ✓" : md(c[0])}${c[1] && c[2] ? ` — ${md(c[2])}` : ""}`).join("\n");
}
function taskKey(t) {
  const items = t.items || [];
  const lines = [];
  switch (t.type) {
    case "mc":
      if (t.say) lines.push(`Audio: *${t.say}*`);
      lines.push(md(t.q || ""), choicesMd(t.choices));
      break;
    case "quiz": case "listen": case "read":
      if (t.passage) lines.push("**Passage:** " + md(t.passage));
      (t.questions || []).forEach((q, i) => {
        lines.push(`**${i + 1}.** ${q.say ? `Audio: *${q.say}* · ` : ""}${md(q.q || "What did you hear?")}`);
        lines.push(choicesMd(q.choices));
      });
      break;
    case "cloze":
      lines.push(chosenNote(t, items).trim());
      items.forEach((it, i) => {
        const s = Text.itemText(it);
        const filled = s.replace(/\[([^\]]+)\]/g, (_, a) => { const opts = a.split("|"); return "**" + opts[0] + "**" + (opts.length > 1 ? " (or " + opts.slice(1).join(", ") + ")" : ""); });
        lines.push(`${i + 1}. ${md(filled)}`);
      });
      break;
    case "select":
      items.forEach((it, i) => {
        const s = Text.itemText(it).replace(/\{([^}]+)\}/g, (_, a) => { const o = a.split("|"); return "**" + o[0] + "** ~~" + o.slice(1).join(" / ") + "~~"; });
        lines.push(`${i + 1}. ${md(s)}${it.en ? ` — *${md(it.en)}*` : ""}`);
      });
      break;
    case "conj":
      lines.push(chosenNote(t, t.verbs).trim());
      t.verbs.forEach((v) => {
        lines.push(`**${v.inf}** (${v.en || ""}): ` + Text.persons().filter((p) => v.forms[p.i] != null).map((p) => `${p.label.split(" / ")[0]} *${v.forms[p.i]}*`).join(" · "));
      });
      break;
    case "match":
      lines.push(chosenNote(t, t.pairs).trim());
      t.pairs.forEach((p) => lines.push(`- ${md(p[0])} = ${md(p[1])}`));
      break;
    case "sort":
      lines.push(chosenNote(t, items).trim());
      if (t.passage) lines.push("**Passage:** " + md(t.passage));
      t.cats.forEach((c, ci) => lines.push(`- **${md(c)}:** ` + items.filter((it) => it[1] === ci).map((it) => md(it[0])).join(" · ")));
      break;
    case "order":
      items.forEach((it, i) => lines.push(`${i + 1}. *${md(it.en)}* → **${it.es.replace(/_/g, " ")}**${it.alt ? " (also accepted: " + it.alt.join(" · ") + ")" : ""}${it.extra ? ` · tile that doesn't belong: *${it.extra.join(", ")}*` : ""}`));
      break;
    case "dictation":
      lines.push(chosenNote(t, items).trim());
      items.forEach((it, i) => lines.push(`${i + 1}. ${Text.itemText(it)}`));
      lines.push("Capital letters and punctuation aren't checked; accent marks and ñ are.");
      break;
    case "translate":
      items.forEach((it, i) => {
        const all = Text.accepted(it.es).map((a) => Text.pretty(a));
        lines.push(`${i + 1}. *${md(it.en)}* → **${all[0]}**` + (all.length > 1 ? ` · also accepted: ${all.slice(1, 6).join(" · ")}${all.length > 6 ? ` · and ${all.length - 6} more` : ""}` : ""));
      });
      lines.push("Capital letters and punctuation (including ¿ ¡) aren't checked; accent marks are.");
      break;
    case "errors":
      items.forEach((it, i) => lines.push(`${i + 1}. ${it.s} → wrong word **${Text.errorWords(it.s)[Text.errorIndex(it, Text.errorWords(it.s))].word}**, fix **${[].concat(it.fix).join(" / ")}** → *${Text.fixedSentence(it)}*`));
      break;
    case "accent":
      lines.push(chosenNote(t, items).trim());
      lines.push(items.map((it) => { const w = Text.itemText(it); return /[áéíóú]/i.test(w) ? `**${w}**` : `${w} (no accent)`; }).join(" · "));
      break;
    case "speak":
      lines.push("Optional; not checked. Students listen, record themselves and compare. " + items.map((it) => `*${Text.itemText(it)}*`).join(" · "));
      break;
  }
  return lines.filter(Boolean).join("\n\n");
}
function reqText(r) {
  const label = md(r.t);
  if (r.any) return `${label} — counts any of: ${r.any.slice(0, 12).join(", ")}${r.any.length > 12 ? ", …" : ""}${r.min > 1 ? ` (needs ${r.min} different)` : ""}`;
  return label;
}

modules.forEach((m, i) => {
  const k = key(m), c = checks[k];
  const out = [];
  out.push(`# M${m.num} ${Text.plain(m.title)}: Teacher answer key`, "");
  out.push(`**${md(m.subtitle)}** · Unidad ${m.unit}: ${units[m.unit - 1].es} · about ${m.minutes || 40} minutes`, "");
  out.push(`**Student page:** ${SITE}${pages[i]}`, "");
  out.push(`**Completion code:** \`${c.code}\` · **Blackbaud assessment:** ${assessment(m)}`, "");
  out.push(`**To finish:** ${required(m).length} activities + the Crea (Build) writing. The optional speaking practice and Go Further challenge don't count.`, "");
  out.push(`**Context story:** ${md(m.context.title)} (${m.context.place})`, "", "---", "");
  m.tasks.forEach((t, n) => {
    const opt = t.optional || t.type === "speak";
    out.push(`## ${opt ? "Optional" : "Task " + (n + 1)}: ${md(t.title)} *(${t.type})*`, "", taskKey(t), "");
  });
  out.push(`## Crea (Build): ${md(m.build.heading)}`, "", md(m.build.prompt), "", "Requirements, checked automatically as the student types:", ...m.build.reqs.map((r) => "- " + reqText(r)), "");
  if (m.build.model) out.push("**Model shown to students:** " + m.build.model.split(/\n+/).map(md).filter(Boolean).join(" "), "");
  out.push("The automatic check looks for the required words and patterns, not for perfect grammar. Skim the pasted writing in Blackbaud.", "");
  out.push("## Reflexiona (Reflect)", "", md(m.reflect.q), "");
  if (m.further && m.further.type) out.push(`## Go Further (optional): ${md(m.further.title)}`, "", taskKey(m.further), "");
  if (m.teacher && m.teacher.snags) {
    out.push("## Common snags", "", "| Where | What you'll see | Ask them |", "|---|---|---|");
    m.teacher.snags.forEach((s) => out.push(`| ${s.map(md).join(" | ")} |`));
    out.push("");
  }
  if (m.teacher && m.teacher.factcheck) out.push("## Fact check the Context story", "", md(m.teacher.factcheck), "");
  fs.writeFileSync(path.join(OUT, "answer-keys", k + ".md"), out.join("\n").replace(/\n{3,}/g, "\n\n"));
});

/* ---------- Blackbaud checks ---------- */
function codeVariants(code) { const lc = code.toLowerCase(); return [code, code.replace("-", ""), lc, lc.replace("-", "")]; }
const csvRows = [];
const COLUMNS = ["Module", "Assessment name", "Question #", "Question type", "Points", "Required", "Question text", "Choice A", "Choice B", "Choice C", "Choice D", "Correct choice", "Correct answer", "Accepted answers", "Note for the teacher"];
modules.forEach((m) => {
  const k = key(m), c = checks[k], name = assessment(m);
  const out = [`# ${name} (Blackbaud assessment setup)`, "",
    "Same scoring as every module: completion code 5 pts, quiz questions 1 pt each, two required essay questions at 0 pts. Total 10, **pass = 9 or 10**.", "",
    "Suggested settings: no time limit; shuffle answer choices if Blackbaud offers it; allow retakes but don't show correct answers (or show answers and allow only 1–2 attempts). See `blackbaud-setup-checklist.md`, Part 3.", "", "---", "",
    "## Question A: Completion code (fill-in-the-blank / short answer, 5 pts)", "",
    `> Enter the completion code shown at the end of the module "${Text.plain(m.title)}."`, "",
    `**Answer:** \`${c.code}\`. If Blackbaud allows extra accepted answers, also add ${codeVariants(c.code).slice(1).map((v) => "`" + v + "`").join(", ")}.`, "",
    "## Quiz (multiple choice, 1 pt each)", ""];
  const rows = [];
  rows.push([`M${m.num}`, name, "A", "Fill in the blank", 5, "Yes", `Enter the completion code shown at the end of the module "${Text.plain(m.title)}."`, "", "", "", "", "", c.code, codeVariants(c.code).join(" | "), ""]);
  c.quiz.forEach((q, qi) => {
    out.push(`**${qi + 1}. ${q.q}**`);
    q.choices.forEach((ch, ci) => out.push(ci === q.answer ? `- **${LETTERS[ci]}. ${ch}** ✓` : `- ${LETTERS[ci]}. ${ch}`));
    out.push("");
    rows.push([`M${m.num}`, name, qi + 1, "Multiple choice", 1, "Yes", q.q, ...[0, 1, 2, 3].map((x) => q.choices[x] || ""), LETTERS[q.answer], q.choices[q.answer], "", ""]);
  });
  out.push("## Question B: Writing (essay / long answer, 0 pts, required)", "", `> Paste your writing from Step 4, "${md(m.build.heading)}." (In the module, tap "Copy my writing.")`, "",
    "The module already checked the requirements automatically. A quick skim is enough: is it in Spanish, and is it the student's own?", "",
    "## Question C: Reflection (essay / long answer, 0 pts, required)", "", `> ${md(m.reflect.q)} (2–4 sentences)`, "");
  rows.push([`M${m.num}`, name, "B", "Essay", 0, "Yes", `Paste your writing from Step 4, "${md(m.build.heading)}."`, "", "", "", "", "", "", "", "Required; 0 points. The module checks the requirements automatically."]);
  rows.push([`M${m.num}`, name, "C", "Essay", 0, "Yes", md(m.reflect.q) + " (2–4 sentences)", "", "", "", "", "", "", "", "Required; 0 points."]);
  fs.writeFileSync(path.join(OUT, "blackbaud", k + "-check.md"), out.join("\n"));
  writeCsv(path.join(OUT, "blackbaud-import/csv", k + ".csv"), rows);
  rows.forEach((r) => csvRows.push(r));
});
function csvCell(v) { v = String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }
function writeCsv(file, rows) { fs.writeFileSync(file, "﻿" + [COLUMNS].concat(rows).map((r) => r.map(csvCell).join(",")).join("\n") + "\n"); }
writeCsv(path.join(OUT, "blackbaud-import/all-quizzes.csv"), csvRows);
fs.writeFileSync(path.join(OUT, "blackbaud-import/README.md"), `# Blackbaud import files

- \`all-quizzes.csv\` (and \`all-quizzes.xlsx\`, with a sheet per module): every Blackbaud question for all 30 modules.
- \`csv/mNN.csv\`: the same questions, one file per module.

Each module has 8 rows: Question A (completion code, 5 pts), five multiple-choice questions (1 pt each), and two required essays (B and C, 0 pts).

These use the same columns as the Computer Science course's files. When you have Blackbaud's own import template, ask Claude to reformat all 30 to match it.

The right answers are spread across A, B, C and D (${(() => { const n = [0, 0, 0, 0]; Object.values(checks).forEach((c) => c.quiz.forEach((q) => n[q.answer]++)); return n.map((x, i) => LETTERS[i] + ": " + x).join(", "); })()}).
`);

/* ---------- audio list ---------- */
writeCsvGeneric(path.join(OUT, "audio-clips.csv"), ["File (Spain voice)", "File (Latin America voice)", "Spanish text", "Modules"],
  speech.map((s) => [`docs/audio/es/${s.h}.mp3`, `docs/audio/la/${s.h}.mp3`, s.text, s.where.join(" ")]));
function writeCsvGeneric(file, cols, rows) { fs.writeFileSync(file, "﻿" + [cols].concat(rows).map((r) => r.map(csvCell).join(",")).join("\n") + "\n"); }

/* ---------- overview and checklist ---------- */
const calendar = [];
let week = 1;
units.forEach((u, ui) => {
  const ms = modules.filter((m) => m.unit === ui + 1);
  calendar.push(`| ${week}–${week + ms.length - 1} | Unidad ${ui + 1}: ${u.es} (M${ms[0].num}–M${ms[ms.length - 1].num}) |`);
  week += ms.length;
  calendar.push(`| ${week} | Flex week: catch-up, retakes, Masses, retreats, exams |`);
  week += 1;
});
const rowsOverview = modules.map((m, i) => `| ${m.num} | ${m.unit} | ${Text.plain(m.title)} | [${pages[i]}](${SITE}${pages[i]}) | \`${checks[key(m)].code}\` | ${assessment(m)} | ${required(m).length + 1} |`);
fs.writeFileSync(path.join(OUT, "course-overview.md"), `# Español 9 – Gramática: Course Overview for the Teacher

All 30 modules at a glance, with what you need to set up each Blackbaud assessment. Each module's answer key is in \`answer-keys/\` and its Blackbaud quiz in \`blackbaud/\`, named by module (for example \`answer-keys/m11.md\`, \`blackbaud/m11-check.md\`).

**Student site:** ${SITE}
Each module's link is the site address followed by its page name. For example, M1 is ${SITE}${pages[0]}

**Scoring for every module:** completion code 5 pts + 5 quiz questions at 1 pt each = 10 pts. **Pass = 9 or 10.** Two essay questions (the Crea writing and the reflection) are required but worth 0 points.

| # | Unit | Module | Page | Completion code | Blackbaud assessment name | Items to finish |
|---|---|---|---|---|---|---|
${rowsOverview.join("\n")}

"Items to finish" counts the required activities plus the Crea (Build) writing. Each module also has an optional speaking practice and an optional Go Further challenge.

## Suggested calendar (36 weeks, one module a week)

| Weeks | |
|---|---|
${calendar.join("\n")}

That's 30 module weeks plus 6 flex weeks, one after each unit. Move the flex weeks to match your school calendar.

## How the course works for students

- **Seven steps in every module**, following the Ignatian Pedagogical Paradigm like the Computer Science course: 1 Contexto (a short story from the Spanish-speaking world), 2 Aprende (three short grammar ideas with tables, examples, flashcards), 3 Practica (6 or 7 self-checking activities), 4 Crea (a short piece of writing with automatic requirement checks), 5 Reflexiona, 6 Evalúa (completion code and Blackbaud check), 7 Más (optional challenge).
- **Activity types** across the course: multiple choice, listening comprehension, dictation, fill-in-the-blank, tap-to-choose, conjugation grids, matching, sorting, sentence builders with word tiles, translation, find-and-fix-the-mistake, accent-mark placement, reading comprehension, cierto/falso, flashcards and optional speaking practice with recording.
- **Accent marks:** every box where students type Spanish has yellow keys for á é í ó ú ü ñ ¿ ¡ (plus ⇧ for capitals). An answer that is right except for an accent mark or ñ turns **yellow**, not red, and the student is told to fix the accent. Accent marks are required to finish.
- **Audio:** every 🔊 plays a clip in the student's chosen voice: **España** (Castilian pronunciation) or **Latinoamérica**. 🐢 plays it slowly. See "Audio" below.
- **Different problems for students sitting together:** answer choices, matching columns, sorting rows and word tiles are shuffled for each student, and many activities show each student a different subset of items (marked *(varies)* in the answer keys). Values stay the same if the student reloads; "Start over" gives new ones.
- **Progress** is saved in each iPad's browser, like the CS course. If a student clears Safari data or switches iPads, their checkmarks reset, but their Blackbaud submissions don't.

## Audio

The clips were made with **Kokoro**, an open-source text-to-speech voice model, not recorded by people. Two voices: a female voice with Spain pronunciation, and a male voice with Latin American pronunciation. They were checked by running every clip through a speech recognizer, but please listen to a sample before launch, especially single letters in M1 and the tongue twisters.

**To replace a clip with a real recording** (for example, by a native-speaking colleague or student): find its row in \`audio-clips.csv\`, record the same Spanish text, save it as an MP3 with the same file name in \`docs/audio/es/\` or \`docs/audio/la/\`, and publish. The page will play your recording instead. The audio script never overwrites an existing file.

If a clip is ever missing, the page falls back to the iPad's built-in Spanish voice.

## Vosotros

The course **teaches and practices vosotros**, which matches the Spain theme and most first-year textbooks. To drop it from every conjugation table and grid, change \`vosotros: true\` to \`vosotros: false\` at the top of \`docs/assets/course.js\`. (A few sentences elsewhere still use vosotros forms; their answer keys say so.)

## Fact checking

Every answer key ends with a "Fact check the Context story" note. The stories were written carefully, but please read these before launch.

## Shared files

- **Lesson content** is in \`content/mNN.js\` (one file per module). \`scripts/build.js\` turns it into the student site in \`docs/\`.
- **The look** (Spanish flag red and gold, with azulejo tile blue) is set at the top of \`docs/assets/course.css\`; the shared behavior is in \`docs/assets/course.js\`. A fix there updates every module. The Scranton Prep seal is reused from the CS course.
- **Private files:** completion codes and Blackbaud quizzes are in \`teacher-src/\`, and this \`teacher/\` folder is generated from them. Neither belongs in the public repository.
`);

const checklistRows = modules.map((m, i) => `| M${m.num} ${Text.plain(m.title)} | [${pages[i]}](${SITE}${pages[i]}) | \`${checks[key(m)].code}\` | ☐ | ☐ | ☐ | ☐ | ☐ |`);
fs.writeFileSync(path.join(OUT, "blackbaud-setup-checklist.md"), `# Blackbaud Setup Checklist

For the teacher and the Blackbaud administrator. It follows the same steps as the Computer Science course. Plan on about **3–4 hours** with question import (7–8 hours by hand), plus the administrator's part.

Menu names differ a little between Blackbaud versions, so some labels below may not match your screen exactly.

---

## Part 1: For the Blackbaud administrator / registrar

- [ ] Create the class **Español 9 – Gramática**, with the teacher as owner.
  - Preferred: **one section with every participating freshman**, so there is one gradebook.
  - Otherwise: one section per study hall period.
- [ ] Load the roster (can wait until August).
- [ ] Set the grading to **Pass/Fail**: 9–10 points = Pass, 0–8 = Fail.
- [ ] Confirm topics can **link to an outside website**.
- [ ] Turn on **question import** for assessments, and note where the sample template is.
- [ ] Create a **test student account** and add it to the class.

## Part 2: For IT (student iPads)

- [ ] Allow \`ntruncale.github.io\` (the lesson pages and audio)
- [ ] Allow \`fonts.googleapis.com\` and \`fonts.gstatic.com\` (fonts; pages still work without them)
- [ ] Test on one student iPad, with the sound on: open ${SITE}${pages[0]}, tap a 🔊 button, and switch the voice between **España** and **Latinoamérica**.
- [ ] Optional: the speaking practice uses the microphone. Decide whether students may allow it (it's never required).

## Part 3: Decide the settings (once, for every assessment)

- [ ] **Retakes and answers.** Choose one, not both:
  - Allow retakes, but **don't show correct answers**, or
  - Show correct answers, but allow **only 1–2 attempts**.
- [ ] **Shuffle answer choices**, if Blackbaud offers it.
- [ ] **No time limit.**
- [ ] **When modules appear:** recommended: one unit at a time, with a flex week after each unit.
- [ ] Assignment type for the gradebook (for example, "Module Check").

## Part 4: Build and test M1 first

- [ ] Get the import template from Blackbaud's import screen and send it to Claude. All 30 quizzes will be reformatted to match.
- [ ] Topic **M1 El alfabeto y los sonidos**: a one-line instruction ("Open the module, finish every step, then take the check") and the link ${SITE}${pages[0]}
- [ ] Assessment **${assessment(modules[0])}**: import \`blackbaud-import/csv/m01.csv\` (or the reformatted file).
- [ ] Check the imported quiz: code question 5 pts; 5 multiple-choice at 1 pt with the right answers marked; essays B and C required at 0 pts; total 10.
- [ ] **Test as the student account:** finish the module on an iPad, enter the code, submit.
- [ ] Check your gradebook shows **Pass**, and that a wrong code does **not** pass.

## Part 5: All 30 modules

For each module: ① topic with link, ② assessment imported, ③ answers and points checked, ④ publish date set, ⑤ link tested as the student account.

| Module | Page | Code | ① | ② | ③ | ④ | ⑤ |
|---|---|---|---|---|---|---|---|
${checklistRows.join("\n")}

## Part 6: Before launch

- [ ] Roster loaded; spot-check that a few students can see the class.
- [ ] Fact-check notes in each answer key reviewed.
- [ ] Listened to a sample of audio clips in both voices (see "Audio" in \`course-overview.md\`).
- [ ] One full run-through of a module on a student iPad, on the school network, with headphones.

## During the year

- [ ] **Weekly:** check the gradebook; follow up with students **2 or more modules behind**.
- [ ] Skim the writing and reflection essays.
- [ ] "I finished but didn't get a code": the student probably switched iPads or cleared Safari. They redo the activities on one iPad.
- [ ] End of year: copy the class to next year, and consider asking Claude for **new completion codes**.
`);
console.log(`wrote teacher/: ${modules.length} answer keys, ${modules.length} Blackbaud checks, ${csvRows.length} quiz rows, ${speech.length} audio rows`);

/* ---------- blueprint ---------- */
const scope = modules.map((m) => `| ${m.num} | ${Text.plain(m.title)} | ${md(m.subtitle)} | ${md(m.context.title)} (${m.context.place.split(" · ")[0]}) |`);
fs.writeFileSync(path.join(OUT, "blueprint.md"), `# Español 9 – Gramática: Program Blueprint

**Audience:** 9th graders who studied Spanish in middle school (the school's World Languages courses begin in 10th grade) · **Format:** self-paced modules, **one per week**, 30 modules in a 36-week year · **Grading:** pass/fail · **Records:** Blackbaud gradebook · **Devices:** iPads, in the browser · **Built from:** the Computer Science – Sophomore Year course (same seven-step template, Blackbaud setup, saving, and completion codes)

## Goal

Give incoming freshmen a full first-year high school Spanish grammar sequence, so that by the time World Languages courses begin in 10th grade, they have practiced everything a typical Spanish 1 course covers: sounds and spelling, nouns and agreement, the present tense (regular, stem-changing and irregular), ser and estar, gustar, reflexives, the progressive, object pronouns, comparisons, commands and an introduction to the preterite. Vocabulary themes from a first-year course (greetings, numbers, dates, time, weather, school, family, food, places in town, sports, daily routine, clothing, chores) are woven into the grammar modules.

## Why it fits a Jesuit school

Every module follows the **Ignatian Pedagogical Paradigm**, like the CS course: Context → Experience → Reflection → Action → Evaluation. The Context stories come from across the Spanish-speaking world, and several connect to Jesuit history and to *cura personalis* and *men and women for others*: Ignatius at Pamplona, Montserrat and Manresa; Francis Xavier; Peter Claver in Cartagena; Pedro Arrupe; the Spiritual Exercises; Pope León XIV greeting Chiclayo.

## Scope and sequence

| # | Module | Grammar focus | Context story |
|---|---|---|---|
${scope.join("\n")}

## Every module uses the same template

| Step | IPP stage | What the student does | Time |
|---|---|---|---|
| Repaso | — | Reminder of last module | 1 min |
| 1. Contexto | Context | A true story from the Spanish-speaking world, with audio | 3 min |
| 2. Aprende | Experience | Three short grammar ideas: tables, examples and flashcards, all with audio | 8 min |
| 3. Practica | Experience | 6 self-checking activities (plus optional speaking practice) | 20 min |
| 4. Crea | Action | A short piece of writing, checked automatically against requirements | 8 min |
| 5. Reflexiona | Reflection | One Examen-style prompt | 3 min |
| 6. Evalúa | Evaluation | Blackbaud: completion code + 5 questions + writing + reflection | 4 min |
| 7. Más | — | Optional challenge for fast finishers | — |

About 45 minutes per module. Students can stop and continue later; progress is saved on the iPad.

**Pass rule (every module):** correct completion code + at least 4/5 on the quiz (scored 10 points; pass = 9+).

## Standards alignment (ACTFL World-Readiness Standards)

- **Interpretive communication:** listening activities, dictation and reading passages in every module, with Spain and Latin American voices.
- **Presentational communication (writing):** the Crea writing in every module, from a self-introduction in M1 to a year-in-review in M30.
- **Interpersonal communication:** *limited.* Students write dialogues and record themselves (optional), but a self-paced course can't replace conversation. Consider short in-person check-ins with a teacher or a heritage-speaking student, perhaps during the flex weeks.
- **Cultures and Connections:** the Context stories and *¿Sabías?* notes (history, art, geography, food, sports, faith).

Targets for the end of the year are roughly ACTFL **Novice High**: students can handle short, familiar sentences in the present and simple past. Check the targets against your department's Spanish 1 and Spanish 2 courses.

## Development timeline

**Status (October 2026): all 30 modules are built**, with lesson pages, audio in two voices, Blackbaud quizzes and answer keys.

| When | What | Who |
|---|---|---|
| Nov 2026 – Jan 2027 | Department chair reviews the scope and sequence and each module; fact-check the Context stories; listen to sample audio; decide on vosotros | World Languages chair |
| Feb – Apr 2027 | Pilot a unit with a few volunteer students; revise | Chair + Claude |
| May 2027 | Optional: record real voices for key clips (see \`course-overview.md\`, Audio) | Chair, colleagues, students |
| Jun 2027 | Set up the Blackbaud course and all 30 assessments | Teacher |
| Aug 2027 | IT checks on student iPads (audio!) | IT |
| Sept 2027 | **Launch** | |

## Decisions still open

- **Placement:** should finishing the course count toward placing a student into Spanish 2 in 10th grade? If so, consider adding an end-of-year placement test.
- **Vosotros:** taught and practiced by default (fits the Spain theme). One setting turns it off.
- **Supervision:** who answers questions during study hall? (The CS course uses senior helpers.)
- **Credit or transcript notation**, and what happens when a student falls behind.
- **Hosting:** the site is on GitHub Pages under a personal account; it should eventually belong to the school.
`);
// The list of clips to listen to first comes from scripts/check_audio.py and is kept with the private files.
const review = path.join(ROOT, "teacher-src/audio-review.md");
if (fs.existsSync(review)) fs.copyFileSync(review, path.join(OUT, "audio-review.md"));
console.log("wrote teacher/blueprint.md");
