module.exports = {
  num: 21, unit: 4, slug: "m21-yo-irregular", minutes: 45,
  title: "El yo irregular; saber y conocer",
  subtitle: "Hago, pongo, salgo, sé, conozco… and two ways to say *to know*",
  lede: "Some verbs are regular in every form except *yo*. And Spanish has two verbs for *to know*: one for facts, one for people and places.",
  recap: "Last time you learned e → i verbs like **pedir** and **servir**, plus **decir** (*digo*) and **seguir** (*sigo*).",
  context: {
    title: "Sentir y gustar",
    place: "Roma, 1548",
    text: `In **1548**, Pope Paul III officially approved a small book written by Ignatius of Loyola: the **Spiritual Exercises**. It isn't a book to read straight through. It's a guide for a month of prayer, meant to help a person come to **know** God, and themselves, better.

Near the start, Ignatius gives advice to the person leading the retreat. He says: *No el mucho saber harta y satisface al ánima, sino el sentir y gustar de las cosas internamente.* "It isn't **knowing a lot** that fills and satisfies the soul, but feeling and tasting things deep inside."

Spanish has two verbs for *to know*, and Ignatius's idea fits them well. **Saber** is knowing facts: {{Sé la fecha.}} **Conocer** is knowing a person or place from experience: {{Conozco a mi abuela muy bien.}}`
  },
  learn: [
    {
      title: "Verbs with an irregular yo form",
      text: `These verbs are **regular** in every form except **yo**. Many of them end in **-go**.`,
      table: {
        head: ["Infinitive", "yo", "tú, él… (regular)"],
        rows: [
          ["{{hacer}} to do, make", "{{hago}}", "haces, hace, hacemos, hacéis, hacen"],
          ["{{poner}} to put", "{{pongo}}", "pones, pone, ponemos, ponéis, ponen"],
          ["{{salir}} to leave, go out", "{{salgo}}", "sales, sale, salimos, salís, salen"],
          ["{{traer}} to bring", "{{traigo}}", "traes, trae, traemos, traéis, traen"],
          ["{{oír}} to hear", "{{oigo}}", "oyes, oye, oímos, oís, oyen"],
          ["{{ver}} to see", "{{veo}}", "ves, ve, vemos, veis, ven"],
          ["{{dar}} to give", "{{doy}}", "das, da, damos, dais, dan"],
          ["{{saber}} to know (facts)", "{{sé}}", "sabes, sabe, sabemos, sabéis, saben"],
          ["{{conocer}} to know (people, places)", "{{conozco}}", "conoces, conoce, conocemos, conocéis, conocen"],
          ["{{conducir}} to drive", "{{conduzco}}", "conduces, conduce, conducimos, conducís, conducen"]
        ],
        caption: "You already know three more: **tengo**, **vengo** and **digo**. *Oír* is a little irregular in other forms too (*oyes, oye, oyen*)."
      },
      tip: "**Sé** (I know) has an accent; **se** (without one) is a different word you'll meet in Module 23."
    },
    {
      title: "Saber or conocer?",
      text: `Both mean *to know*, but they aren't interchangeable.`,
      table: {
        head: ["SABER", "CONOCER"],
        rows: [
          ["**facts and information**: {{Sé tu número.}}", "**people**: {{Conozco a Pablo.}}"],
          ["**how to do something** (+ infinitive): {{Sé nadar.}}", "**places**: {{Conocemos Madrid.}}"],
          ["**question words**: {{No sé dónde está.}}", "**being familiar with** something: {{¿Conoces esta canción?}}"]
        ]
      },
      tip: "When the direct object is a **person**, add **a** before it (the *personal a*): {{Conozco a tu hermano.}} {{Veo a mis amigos.}} Not for things: {{Veo la película.}}"
    },
    {
      title: "Useful expressions",
      examples: [
        ["Hago la tarea después de la cena.", "I do my homework after dinner."],
        ["Hago ejercicio todos los días.", "I exercise every day."],
        ["Pongo la mesa.", "I set the table."],
        ["Salgo de casa a las siete.", "I leave home at seven."],
        ["Salgo con mis amigos los viernes.", "I go out with my friends on Fridays."],
        ["Traigo el almuerzo a la escuela.", "I bring lunch to school."],
        ["¿Qué haces? No hago nada.", "What are you doing? I'm not doing anything."]
      ]
    }
  ],
  tasks: [
    {
      id: "t1", type: "cloze", title: "The yo form",
      intro: "Write the **yo** form of the verb in parentheses.",
      pick: 8,
      items: [
        "Yo [hago] ((hacer)) la tarea en la biblioteca.", "Yo [pongo] ((poner)) los libros en la mochila.", "Yo [salgo] ((salir)) de casa a las siete.", "Yo [traigo] ((traer)) mi almuerzo.",
        "Yo [veo] ((ver)) a mis abuelos los domingos.", "Yo [doy] ((dar)) un regalo a mi mamá.", "Yo no [sé] ((saber)) la respuesta.", "Yo [conozco] ((conocer)) a tu hermana.",
        "Yo no [conduzco] ((conducir)) todavía.", "Yo [oigo] ((oír)) música."
      ],
      hints: ["Many end in **-go**: *hago, pongo, salgo, traigo, oigo*.", "*Saber* → **sé** (with an accent). *Conocer* → **conozco**.", "*Dar* → **doy**, like *voy* and *estoy*."]
    },
    {
      id: "t2", type: "sort", title: "Saber or conocer?",
      intro: "Which verb would you use to *know*…",
      cats: ["saber", "conocer"], itemLang: "en",
      items: [["your best friend", 1], ["how to swim", 0], ["the answer to question 3", 0], ["New York City", 1], ["what time it is", 0], ["a famous singer (personally)", 1], ["how to play chess", 0], ["a good restaurant in town", 1], ["your teacher's name", 0], ["your grandmother", 1]],
      hints: ["**Saber**: facts, information, *how to*.", "**Conocer**: people, places, being familiar with."]
    },
    {
      id: "t3", type: "select", title: "Sé, sabes, conozco, conoces…",
      intro: "Choose the right verb and form.",
      items: [
        { s: "¿{Sabes|Conoces} nadar?" }, { s: "¿{Conoces|Sabes} a mi primo?" }, { s: "No {sé|conozco} dónde está la biblioteca." },
        { s: "Mis padres {conocen|saben} Puerto Rico muy bien." }, { s: "Nosotros {sabemos|conocemos} la fecha del examen." }, { s: "Yo {conozco|sé} a la directora." },
        { s: "¿Ustedes {saben|conocen} cocinar?" }, { s: "Ella {conoce|sabe} esta canción." }
      ],
      hints: ["*How to* + infinitive → **saber**.", "A person (with *a*) or a place → **conocer**."]
    },
    {
      id: "t4", type: "match", title: "Who's the yo?",
      intro: "Match each yo form (tap to hear it) with its infinitive.",
      left: "yo", right: "Infinitivo", leftLang: "es",
      pairs: [["hago", "hacer"], ["pongo", "poner"], ["salgo", "salir"], ["traigo", "traer"], ["sé", "saber"], ["conozco", "conocer"], ["doy", "dar"], ["oigo", "oír"], ["digo", "decir"]],
      hints: ["*Traigo* has an **i** that *traer* doesn't: tra-i-go."]
    },
    {
      id: "t5", type: "errors", title: "Fix the mistakes",
      intro: "Tap the wrong word, then type the correct form.",
      items: [
        { s: "Yo sabo hablar español.", bad: "sabo", fix: "sé" },
        { s: "Yo conoco a tu hermano.", bad: "conoco", fix: "conozco" },
        { s: "Yo hace la cama.", bad: "hace", fix: "hago" },
        { s: "No conozco dónde vive.", bad: "conozco", fix: "sé", why: "Information (*where he lives*) → **saber**." },
        { s: "Yo pono la mesa.", bad: "pono", fix: "pongo" }
      ],
      hints: ["Facts and *how to* → *saber*; people and places → *conocer*."]
    },
    {
      id: "t6", type: "translate", title: "Say it in Spanish",
      intro: "Translate.",
      items: [
        { en: "I know how to swim.", es: ["[yo] sé nadar"] },
        { en: "I know your sister.", es: ["[yo] conozco a tu hermana"], why: "A person → **conocer**, with the personal **a**." },
        { en: "I leave home at seven.", es: ["[yo] salgo de casa a las siete"] },
        { en: "I don't know where it is.", es: ["[yo] no sé dónde está"] },
        { en: "I'm bringing the pizza.", es: ["[yo] traigo la pizza"] }
      ],
      hints: ["*Sé* has an accent mark.", "Don't forget **a** before a person after *conocer*."]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Listen, record, compare.",
      items: [{ s: "Hago la tarea, pongo la mesa y salgo con mis amigos." }, { s: "No sé, pero conozco a alguien que sabe." }]
    }
  ],
  build: {
    heading: "Lo que hago, lo que sé",
    prompt: `Write **at least 6 sentences** about yourself. Describe your routine with at least **three irregular yo forms** (*hago, pongo, salgo, traigo, veo, doy…*). Then tell something you **know how to do** (*sé* + infinitive) and someone or someplace you **know** (*conozco*).`,
    model: `{{Salgo de casa a las siete y cuarto.}} {{Traigo mi almuerzo a la escuela.}} {{Después de la escuela hago la tarea.}} {{Por la noche pongo la mesa para la cena.}} {{Sé tocar el piano, pero no sé cantar.}} {{Conozco a todos los vecinos de mi calle.}}`,
    placeholder: "Salgo de casa a las…",
    reqs: [
      { t: "At least 6 sentences", sentences: 6 },
      { t: "Three irregular yo forms", any: ["hago", "pongo", "salgo", "traigo", "veo", "doy", "oigo", "conduzco", "tengo", "vengo", "digo", "sé", "conozco"], min: 3 },
      { t: "**sé** + infinitive", re: "\\bsé\\s+\\p{L}+(ar|er|ir)\\b" },
      { t: "**conozco**", any: ["conozco"] }
    ]
  },
  reflect: {
    q: "Ignatius said it isn't *knowing a lot* that satisfies us, but feeling and tasting things deep inside. Think of something you know a lot *about* (saber), and a person you really *know* (conocer). Which kind of knowing matters more to you, and why?",
    placeholder: "Something I know a lot about is… A person I really know is…"
  },
  further: {
    id: "x1", type: "quiz", title: "Challenge: the personal a",
    questions: [
      { q: "*Veo ___ película.*", choices: [["(nothing)", true, "A thing: no personal *a*."], ["a la", false], ["al", false], ["de la", false]] },
      { q: "*Veo ___ mi abuela.*", choices: [["a", true, "A person: **a**."], ["(nothing)", false], ["de", false], ["en", false]] },
      { q: "*Conozco ___ profesor.*", choices: [["al", true, "*a + el = al*"], ["a el", false], ["el", false], ["(nothing)", false]] }
    ]
  },
  culture: "**¿Sabías?** Spanish has a famous saying with *saber*: **Más sabe el diablo por viejo que por diablo**, \"The devil knows more because he's old than because he's the devil.\" It means experience is the best teacher.",
  teacher: {
    snags: [
      ["Task 1", "Writes *se* without the accent", "Yellow box: *sé* (I know) needs an accent."],
      ["Task 2", "*your teacher's name* → conocer", "A name is information. Which verb is for facts?"],
      ["Task 6", "*Conozco tu hermana*", "Use the personal *a* before a person."]
    ],
    factcheck: "Paul III approved the *Spiritual Exercises* with the brief *Pastoralis officii* on July 31, 1548. The quotation is from Annotation 2 of the *Exercises*: \"no el mucho saber harta y satisface al ánima, mas el sentir y gustar de las cosas internamente\" (original spelling uses *mas*; modern editions often print *sino*)."
  }
};
