module.exports = {
  num: 24, unit: 5, slug: "m24-progresivo", minutes: 40,
  title: "El presente progresivo",
  subtitle: "What's happening right now: estoy hablando, estamos comiendo",
  lede: "To say what's happening at this very moment, Spanish uses *estar* plus a verb ending in *-ando* or *-iendo*, like English *-ing*.",
  recap: "Last time you learned reflexive verbs for your daily routine: **me levanto, te duchas, se acuesta**.",
  context: {
    title: "Estamos bien en el refugio",
    place: "Mina San José, Desierto de Atacama, Chile",
    text: `On **August 5, 2010**, a copper and gold mine collapsed in the Atacama Desert of Chile, trapping **33 miners** about 700 meters (2,300 feet) underground. For 17 days, no one knew if they were alive.

On August 22, rescuers drilled a narrow hole down to the mine. When they pulled the drill back up, a note was taped to it, written in red letters: {{Estamos bien en el refugio los treinta y tres|Estamos bien en el refugio los treinta y tres.}} *We are fine in the shelter, the 33 of us.* All of Chile celebrated.

Engineers from many countries worked together to drill a rescue shaft. On **October 13**, after 69 days underground, the miners were pulled up one by one in a narrow capsule. Millions watched live as reporters said: {{Están subiendo al primer minero. ¡Está saliendo!}} *They're bringing up the first miner. He's coming out!*`
  },
  learn: [
    {
      title: "Estar + -ando / -iendo",
      text: `Use a form of **estar** and the **gerund** (the *-ing* form). For -ar verbs, add **-ando** to the stem. For -er and -ir verbs, add **-iendo**. The gerund never changes for the subject.`,
      table: {
        head: ["Infinitive", "Gerund", "Example"],
        rows: [
          ["hablar", "{{habl**ando**|hablando}}", "{{Estoy hablando por teléfono.}}"],
          ["comer", "{{com**iendo**|comiendo}}", "{{¿Qué estás comiendo?}}"],
          ["escribir", "{{escrib**iendo**|escribiendo}}", "{{Ella está escribiendo un correo.}}"],
          ["trabajar", "{{trabaj**ando**|trabajando}}", "{{Los rescatistas están trabajando.}}"]
        ]
      }
    },
    {
      title: "Gerunds with a twist",
      text: `- When the stem ends in a **vowel**, *-iendo* becomes **-yendo**: {{leyendo}} (leer), {{oyendo}} (oír), {{trayendo}} (traer), {{construyendo}} (construir).
- **-ir** stem-changing verbs change **e → i** or **o → u** in the gerund: {{pidiendo}} (pedir), {{sirviendo}} (servir), {{diciendo}} (decir), {{siguiendo}} (seguir), {{durmiendo}} (dormir), {{muriendo}} (morir).
- **-ar** and **-er** stem-changers don't change: {{pensando}}, {{queriendo}}, {{volviendo}}, {{jugando}}.`
    },
    {
      title: "When to use it, and pronouns",
      text: `Use the progressive for what's happening **right now**. Spanish often uses the simple present where English uses *-ing*, especially for plans: {{Mañana salgo para Chile.}} (*I'm leaving for Chile tomorrow.*), not *estoy saliendo*.

Reflexive and object pronouns can go **before estar** or **attached** to the gerund. When you attach one, add an accent mark to keep the stress: {{Me estoy duchando.}} = {{Estoy duchándome.}}`,
      examples: [
        ["¿Qué estás haciendo?", "What are you doing?"],
        ["Estoy estudiando para el examen.", "I'm studying for the test."],
        ["Mis hermanos están durmiendo.", "My brothers are sleeping."],
        ["Estamos viendo el partido.", "We're watching the game."]
      ]
    }
  ],
  tasks: [
    {
      id: "t1", type: "cloze", title: "Make the gerund",
      intro: "Write the gerund (*-ando* or *-iendo*) of each verb.",
      pick: 9,
      items: [
        { s: "hablar → [hablando]", say: "hablando" }, { s: "comer → [comiendo]", say: "comiendo" }, { s: "vivir → [viviendo]", say: "viviendo" },
        { s: "leer → [leyendo]", say: "leyendo" }, { s: "pedir → [pidiendo]", say: "pidiendo" }, { s: "dormir → [durmiendo]", say: "durmiendo" },
        { s: "jugar → [jugando]", say: "jugando" }, { s: "decir → [diciendo]", say: "diciendo" }, { s: "traer → [trayendo]", say: "trayendo" },
        { s: "hacer → [haciendo]", say: "haciendo" }, { s: "servir → [sirviendo]", say: "sirviendo" }
      ],
      hints: ["-ar → **-ando**; -er / -ir → **-iendo**.", "A vowel before the ending (*le-er, tra-er*) → **-yendo**.", "-ir stem-changers: *pedir → pidiendo*, *dormir → durmiendo*."]
    },
    {
      id: "t2", type: "select", title: "Choose the right form",
      intro: "Choose the form of *estar* or the gerund that fits.",
      items: [
        { s: "Yo {estoy|está|estás} leyendo." }, { s: "Mis padres {están|estamos|está} cocinando." }, { s: "¿Qué {estás|estoy|está} haciendo tú?" },
        { s: "Nosotros estamos {comiendo|comendo|comando} pizza." }, { s: "El bebé está {durmiendo|dormiendo|duermiendo}." }, { s: "Ella está {leyendo|leiendo|leendo} un libro." },
        { s: "Los meseros están {sirviendo|serviendo|servando} la comida." }, { s: "Estoy {jugando|juegando|jugiendo} al fútbol." }
      ],
      hints: ["*Estar* changes for the subject; the gerund doesn't."]
    },
    {
      id: "t3", type: "listen", title: "¿Qué están haciendo?",
      intro: "Listen. What is happening right now?",
      questions: [
        { say: "Shh, mi hermanito está durmiendo.", choices: [["The little brother is sleeping.", true], ["The little brother is eating.", false], ["The little brother is crying.", false], ["The little brother is playing.", false]] },
        { say: "Estamos viendo una película en la sala.", choices: [["They're watching a movie in the living room.", true], ["They're making a movie.", false], ["They're reading in the living room.", false], ["They're cleaning the living room.", false]] },
        { say: "Mi papá está preparando la cena y mi mamá está poniendo la mesa.", q: "What is the mother doing?", choices: [["setting the table", true], ["making dinner", false], ["washing dishes", false], ["eating", false]] },
        { say: "¿Me estás escuchando? ¡Te estoy hablando!", choices: [["Are you listening to me? I'm talking to you!", true], ["Are you calling me? I'm waiting!", false], ["Are you watching me? I'm dancing!", false], ["Are you writing? I'm reading!", false]] }
      ],
      hints: ["Find the gerund (-ando, -iendo) and think about its infinitive."]
    },
    {
      id: "t4", type: "cloze", title: "Right now…",
      intro: "Write the form of *estar* and the gerund of the verb in parentheses.",
      items: [
        "Yo [estoy] [estudiando] ((estudiar)) en la biblioteca.", "Mi hermana [está] [escribiendo] ((escribir)) un poema.", "Nosotros [estamos] [corriendo] ((correr)) en el parque.",
        "Los mineros [están] [saliendo] ((salir)) de la mina.", "¿Tú [estás] [oyendo] ((oír)) la música?", "Mis abuelos [están] [durmiendo] ((dormir)) la siesta."
      ],
      hints: ["*Oír* → **oyendo**; *dormir* → **durmiendo**."]
    },
    {
      id: "t5", type: "order", title: "Build the sentences",
      intro: "Tap the words in order.",
      items: [
        { en: "I'm reading a book.", es: "Estoy leyendo un libro.", alt: ["Yo estoy leyendo un libro."] },
        { en: "What are you (tú) doing?", es: "¿Qué estás haciendo?", alt: ["¿Qué estás haciendo tú?"] },
        { en: "The rescuers are working.", es: "Los rescatistas están trabajando." },
        { en: "We're watching the game.", es: "Estamos viendo el partido.", extra: ["vemos"], alt: ["Nosotros estamos viendo el partido."] }
      ],
      hints: ["*Estar* + gerund. The pieces stay together: *estoy leyendo*."]
    },
    {
      id: "t6", type: "errors", title: "Fix the mistakes",
      intro: "Tap the wrong word, then type the correct one.",
      items: [
        { s: "Estoy comer una manzana.", bad: "comer", fix: "comiendo" },
        { s: "Ella está leiendo.", bad: "leiendo", fix: "leyendo" },
        { s: "Nosotros estamos dormiendo.", bad: "dormiendo", fix: "durmiendo" },
        { s: "Ellos está jugando.", bad: "está", fix: "están" },
        { s: "Estoy pediendo una pizza.", bad: "pediendo", fix: "pidiendo" }
      ],
      hints: ["Check the form of *estar* and the gerund."]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Listen, record, compare.",
      items: [{ s: "Estamos bien en el refugio los treinta y tres." }, { s: "¿Qué estás haciendo? Estoy estudiando." }]
    }
  ],
  build: {
    heading: "¿Qué está pasando?",
    prompt: `Imagine you're a reporter describing a scene **live**: your school cafeteria, a big game, your kitchen at dinnertime, or a rescue. Write **at least 6 sentences** about what different people are doing right now. Use the progressive (**estar** + *-ando* / *-iendo*) at least **five times**, including at least one gerund with a twist (*-yendo*, or an -ir stem change).`,
    model: `{{Estoy en la cafetería de mi escuela.}} {{Mis amigos están comiendo pizza.}} {{Una chica está leyendo un libro.}} {{Dos chicos están hablando de fútbol.}} {{La profesora está sirviendo el almuerzo.}} {{¡Y yo estoy escribiendo este reportaje!}}`,
    placeholder: "Estoy en…",
    reqs: [
      { t: "At least 6 sentences", sentences: 6 },
      { t: "Five progressives (**estar** + gerund)", re: "\\b(estoy|estás|está|estamos|estáis|están)\\s+\\p{L}+(ando|iendo|yendo|ándo\\p{L}+|iéndo\\p{L}+)\\b", min: 5 },
      { t: "A gerund with a twist", any: ["leyendo", "oyendo", "trayendo", "cayendo", "construyendo", "creyendo", "pidiendo", "sirviendo", "diciendo", "siguiendo", "repitiendo", "durmiendo", "muriendo", "vistiendo", "sintiendo", "prefiriendo", "compitiendo", "riendo", "sonriendo"] }
    ]
  },
  reflect: {
    q: "The 33 miners survived because hundreds of people they had never met were working for them at the surface. Right now, who might be working for *you* without you seeing it (at home, at school, in your town)? How could you thank them?",
    placeholder: "Right now, someone is…"
  },
  further: {
    id: "x1", type: "translate", title: "Challenge: translate",
    items: [
      { en: "She's sleeping.", es: ["[ella] está durmiendo"] },
      { en: "We're asking for help.", es: ["[nosotros] estamos pidiendo ayuda", "[nosotras] estamos pidiendo ayuda"] },
      { en: "I'm taking a shower.", es: ["[yo] me estoy duchando", "[yo] estoy duchándome", "[yo] me estoy bañando", "[yo] estoy bañándome"] },
      { en: "They're bringing the food.", es: ["[ellos] están trayendo la comida", "[ellas] están trayendo la comida"] }
    ],
    hints: ["If you attach *me* to the gerund, add an accent: *duchándome*."]
  },
  culture: "**¿Sabías?** The rescue capsule that brought the 33 miners up was named **Fénix 2** (*Phoenix*). It was built by the Chilean Navy with help from NASA.",
  teacher: {
    snags: [
      ["Task 1", "*leiendo*", "A vowel before the ending: *-yendo*."],
      ["Task 1", "*dormiendo*", "-ir stem-changers: o → u in the gerund."],
      ["Task 4", "Conjugates the second verb", "After *estar*, use the gerund (-ando, -iendo)."]
    ],
    factcheck: "Copiapó (San José) mine collapse: August 5, 2010; miners found alive August 22 with the note \"Estamos bien en el refugio los 33\"; rescue completed October 13, 2010 (69 days) using the Fénix 2 capsule, built by the Chilean Navy with NASA input. Depth: about 700 m."
  }
};
