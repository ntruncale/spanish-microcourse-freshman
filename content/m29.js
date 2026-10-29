module.exports = {
  num: 29, unit: 6, slug: "m29-preterito", minutes: 45,
  title: "El pretérito",
  subtitle: "Talking about the past: hablé, comí, viví",
  lede: "To tell what happened, Spanish uses the preterite tense. Regular verbs follow two sets of endings, and accent marks make all the difference: *hablo* (I speak) vs. *habló* (he spoke).",
  recap: "In Unit 5 you learned reflexive verbs, the progressive, object pronouns, comparisons, demonstratives and **tú** commands.",
  context: {
    title: "La primera vuelta al mundo",
    place: "Sanlúcar de Barrameda, España",
    text: `On **September 20, 1519**, five ships and about 240 sailors left Sanlúcar de Barrameda, in southern Spain, led by the Portuguese captain **Ferdinand Magellan** (*Fernando de Magallanes*). Their goal was to sail west to the Spice Islands.

They crossed the Atlantic, found a passage around the tip of South America, and sailed for months across the Pacific, so long that many sailors died of hunger and disease. Magellan himself was killed in a battle in the Philippines in 1521. A Basque sailor named **Juan Sebastián Elcano** took command of the last ship, the *Victoria*.

On **September 6, 1522**, the *Victoria* arrived back in Spain with only **18 men**. They were the first people to sail all the way around the world. Elcano could tell the king: {{Navegamos tres años. Cruzamos tres océanos. Volvimos a casa.}} *We sailed three years. We crossed three oceans. We came back home.*`
  },
  learn: [
    {
      title: "Regular -ar verbs",
      text: `Notice the **accent marks** on the *yo* and *él* forms. They change the meaning: {{hablo}} (I speak) vs. {{habló}} (he spoke).`,
      conj: [{ inf: "hablar", en: "to speak", forms: ["habl**é**", "habl**aste**", "habl**ó**", "habl**amos**", "habl**asteis**", "habl**aron**"] }],
      tip: "The **nosotros** form is the same as in the present: *hablamos* can mean *we speak* or *we spoke*. Context tells you which."
    },
    {
      title: "Regular -er and -ir verbs",
      text: `**-er** and **-ir** verbs share one set of endings in the preterite.`,
      conj: [
        { inf: "comer", en: "to eat", forms: ["com**í**", "com**iste**", "com**ió**", "com**imos**", "com**isteis**", "com**ieron**"] },
        { inf: "vivir", en: "to live", forms: ["viv**í**", "viv**iste**", "viv**ió**", "viv**imos**", "viv**isteis**", "viv**ieron**"] }
      ],
      tip: "Stem-changing **-ar** and **-er** verbs don't change in the preterite: {{pensé}}, {{volví}}, {{jugué}}."
    },
    {
      title: "Spelling changes and time words",
      text: `Only in the **yo** form, three endings change spelling to keep the sound (Module 1!):
- **-car → -qué**: {{busqué}}, {{toqué}}, {{saqué}}, {{practiqué}}
- **-gar → -gué**: {{llegué}}, {{jugué}}, {{pagué}}
- **-zar → -cé**: {{empecé}}, {{almorcé}}, {{crucé}}

When the stem ends in a vowel, *-ió* and *-ieron* become **-yó** and **-yeron**: {{leyó}}, {{leyeron}}, {{oyó}}, {{creyeron}}.`,
      flash: [
        ["ayer", "yesterday"], ["anoche", "last night"], ["anteayer", "the day before yesterday"], ["la semana pasada", "last week"],
        ["el año pasado", "last year"], ["el fin de semana pasado", "last weekend"], ["hace dos días", "two days ago"], ["una vez", "once"]
      ]
    }
  ],
  tasks: [
    {
      id: "t1", type: "conj", title: "Conjugate in the preterite",
      intro: "Write every preterite form. Don't forget the accent marks.",
      pick: 2,
      verbs: [
        { inf: "navegar", en: "to sail", forms: ["navegué", "navegaste", "navegó", "navegamos", "navegasteis", "navegaron"], note: "(-gar)" },
        { inf: "cruzar", en: "to cross", forms: ["crucé", "cruzaste", "cruzó", "cruzamos", "cruzasteis", "cruzaron"], note: "(-zar)" },
        { inf: "escribir", en: "to write", forms: ["escribí", "escribiste", "escribió", "escribimos", "escribisteis", "escribieron"] },
        { inf: "aprender", en: "to learn", forms: ["aprendí", "aprendiste", "aprendió", "aprendimos", "aprendisteis", "aprendieron"] },
        { inf: "buscar", en: "to look for", forms: ["busqué", "buscaste", "buscó", "buscamos", "buscasteis", "buscaron"], note: "(-car)" }
      ],
      hints: ["-ar: **-é, -aste, -ó, -amos, -asteis, -aron**.", "-er / -ir: **-í, -iste, -ió, -imos, -isteis, -ieron**.", "Spelling changes happen only in **yo**: *navegué, crucé, busqué*."]
    },
    {
      id: "t2", type: "listen", title: "Now or then?",
      intro: "Listen carefully to the stress and the ending. Is it the present or the past?",
      questions: [
        { say: "Hablo con mi abuela.", keepOrder: true, choices: [["present: I talk", true], ["past: he talked", false]] },
        { say: "Habló con mi abuela.", keepOrder: true, choices: [["present: I talk", false], ["past: he talked", true, "The stress at the end, **habló**, means the past."]] },
        { say: "Ayer comimos pizza.", keepOrder: true, choices: [["present: we eat", false], ["past: we ate", true, "*Comimos* could be either, but *ayer* tells you it's the past."]] },
        { say: "Estudié mucho anoche.", keepOrder: true, choices: [["present: I study", false], ["past: I studied", true]] },
        { say: "Mis primos viven en Chile.", keepOrder: true, choices: [["present: they live", true], ["past: they lived", false]] }
      ],
      hints: ["Past forms often end in a stressed vowel: **-é, -ó, -í, -ió**.", "Time words like *ayer* and *anoche* point to the past."]
    },
    {
      id: "t3", type: "select", title: "Choose the right form",
      intro: "Choose the preterite form that matches the subject.",
      items: [
        { s: "Ayer yo {estudié|estudió|estudio} para el examen." }, { s: "Elcano {llegó|llegué|llego} a España en mil quinientos veintidós." }, { s: "¿Tú {comiste|comió|comí} en la cafetería?" },
        { s: "Anoche nosotros {vimos|veímos|vemos} una película.", why: "*Ver*: **vimos** (no accent in the preterite of *ver*)." }, { s: "Mis padres {viajaron|viajamos|viajó} a México el año pasado." }, { s: "Yo {jugué|jugé|jugó} al fútbol el sábado." },
        { s: "Ella {leyó|leió|leyé} el libro en dos días." }, { s: "Yo {empecé|empezé|empezó} la tarea a las siete." }
      ],
      hints: ["Yo: **-é** (-ar) or **-í** (-er / -ir). Él: **-ó** or **-ió**.", "Spelling: *jugar → jugué*, *empezar → empecé*, *leer → leyó*."]
    },
    {
      id: "t4", type: "cloze", title: "El fin de semana pasado",
      intro: "Write the preterite form of the verb in parentheses.",
      items: [
        "El sábado yo [trabajé] ((trabajar)) en la tienda.", "Después, mi hermana y yo [comimos] ((comer)) en un restaurante.", "Mi padre [preparó] ((preparar)) la cena el domingo.",
        "Mis amigos [corrieron] ((correr)) en el parque.", "¿Tú [escribiste] ((escribir)) el ensayo?", "Yo [llegué] ((llegar)) a casa tarde.", "Mi abuela me [llamó] ((llamar)) por teléfono.", "Yo [toqué] ((tocar)) la guitarra en la misa."
      ],
      hints: ["Watch the yo spelling changes: *llegué*, *toqué*.", "Él / ella: **-ó** (-ar) or **-ió** (-er / -ir), with an accent."]
    },
    {
      id: "t5", type: "errors", title: "Fix the accent marks and spelling",
      intro: "Tap the wrong word, then type it correctly.",
      items: [
        { s: "Ayer yo hable con el profesor.", bad: "hable", fix: "hablé" },
        { s: "Magallanes murio en Filipinas.", bad: "murio", fix: "murió" },
        { s: "Yo llege tarde a clase.", bad: "llege", fix: "llegué" },
        { s: "Anoche ellos comieron pizza y bebió refrescos.", bad: "bebió", fix: "bebieron" },
        { s: "Yo practicé piano y busqé mi libro.", bad: "busqé", fix: "busqué" }
      ],
      hints: ["Preterite yo and él forms carry accents.", "*-gar → -gué*, *-car → -qué*."]
    },
    {
      id: "t6", type: "translate", title: "Say it in Spanish",
      intro: "Translate into the preterite.",
      items: [
        { en: "Yesterday I studied a lot.", es: ["ayer [yo] estudié mucho", "[yo] estudié mucho ayer"] },
        { en: "Last night we ate at home.", es: ["anoche [nosotros] comimos en casa", "[nosotros] comimos en casa anoche", "anoche nosotras comimos en casa"] },
        { en: "She wrote a letter.", es: ["[ella] escribió una carta"] },
        { en: "They arrived at eight.", es: ["[ellos] llegaron a las ocho", "[ellas] llegaron a las ocho"] },
        { en: "I played soccer last week.", es: ["[yo] jugué {al fútbol|fútbol} la semana pasada", "la semana pasada [yo] jugué {al fútbol|fútbol}"] }
      ],
      hints: ["*Last night* = **anoche**; *last week* = **la semana pasada**.", "*Jugar* → **jugué** in the yo form."]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Listen, record, compare.",
      items: [{ s: "Navegamos tres años. Cruzamos tres océanos. Volvimos a casa." }, { s: "Ayer estudié, comí con mi familia y escribí un correo." }]
    }
  ],
  build: {
    heading: "El fin de semana pasado",
    prompt: `Tell what you did last weekend (or on a special day you remember) in **at least 6 sentences**. Use at least **six different verbs in the preterite**, including at least one **-er/-ir** verb and at least one **time word** (*ayer, anoche, el sábado pasado…*).`,
    model: `{{El sábado pasado me levanté tarde.}} {{Por la mañana ayudé a mi papá en el jardín.}} {{Después mis amigos y yo jugamos al baloncesto.}} {{Por la tarde comí en casa de mis abuelos.}} {{Mi abuela preparó arroz con pollo.}} {{Anoche miré una película y escribí en mi diario.}}`,
    placeholder: "El sábado pasado…",
    reqs: [
      { t: "At least 6 sentences", sentences: 6 },
      { t: "Six preterite verbs", re: "\\b\\p{L}+(é|aste|ó|asteis|aron|í|iste|ió|isteis|ieron|yó|yeron)\\b", min: 6 },
      { t: "An -er or -ir verb in the preterite", re: "\\b\\p{L}+(í|iste|ió|imos|isteis|ieron|yó|yeron)\\b" },
      { t: "A time word", any: ["ayer", "anoche", "anteayer", "el sábado", "el domingo", "el viernes", "la semana pasada", "el fin de semana pasado", "el año pasado", "el sábado pasado", "el domingo pasado", "el verano pasado", "hace"] }
    ]
  },
  reflect: {
    q: "Only 18 of about 240 sailors came home, and the trip changed how the world understood itself. Looking back on this school year so far, what's one thing that happened that changed how you see something? (You can answer in English, or try a few sentences in Spanish in the past tense.)",
    placeholder: "This year, something that changed how I see things was…"
  },
  further: {
    id: "x1", type: "dictation", title: "Challenge: listen and write",
    intro: "Write each sentence in the past.",
    items: ["Llegué a la escuela a las siete.", "Ella leyó el libro.", "Comimos en un restaurante.", "Ellos viajaron a España.", "¿Escribiste la carta?"]
  },
  culture: "**¿Sabías?** King Charles I of Spain gave Elcano a coat of arms showing a globe with the Latin motto **Primus circumdedisti me**: \"You were the first to go around me.\"",
  teacher: {
    snags: [
      ["Task 1", "*navegé*, *cruzé*", "Spelling changes in yo: *-gué*, *-cé*."],
      ["Task 2", "Can't hear *hablo* vs. *habló*", "Use 🐢 and listen for where the stress falls."],
      ["Task 3", "*veímos*", "*Ver* is regular-ish but has no accents in the preterite: *vi, viste, vio, vimos, visteis, vieron*."]
    ],
    factcheck: "The Magellan–Elcano expedition left Sanlúcar de Barrameda September 20, 1519, with five ships and about 240–270 men; Magellan died at the Battle of Mactan, April 27, 1521; the *Victoria* reached Sanlúcar September 6, 1522, with 18 survivors (arriving in Seville September 8). Elcano's arms bore *Primus circumdedisti me*."
  }
};
