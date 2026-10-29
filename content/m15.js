module.exports = {
  num: 15, unit: 3, slug: "m15-estar", minutes: 45,
  title: "El verbo estar",
  subtitle: "Where things are and how people feel",
  lede: "Spanish has a second verb for *to be*: *estar*. Use it to say where something is and how someone is feeling right now.",
  recap: "Last time you learned **tener** (*tengo, tienes, tiene…*), tener expressions like **tener hambre**, **tener que** + infinitive, and double negatives like **no tengo nada**.",
  context: {
    title: "El peregrino",
    place: "Montserrat y Manresa, Cataluña",
    text: `In March **1522**, a former soldier named **Íñigo de Loyola** climbed the mountain of **Montserrat**, near Barcelona. His leg had been shattered by a cannonball the year before, and while he recovered, reading about Jesus and the saints had changed his life. At the monastery on the mountain, he spent the night praying, laid his sword before the statue of Mary, and gave his fine clothes to a poor man.

He then walked down to the town of **Manresa**, planning to stay a few days. He stayed almost a year. He prayed for hours in a small cave above the river, noticed carefully how he felt (sometimes peaceful, sometimes sad or restless) and took notes. Those notes became the **Spiritual Exercises**, which Jesuits still use today.

He later called himself simply *el peregrino*, the pilgrim. You might describe that year like this: {{Ignacio está en Manresa. Está en una cueva. A veces está tranquilo y a veces está triste.}}`
  },
  learn: [
    {
      title: "The forms of estar",
      text: `**Estar** has an irregular *yo* form and **accent marks** on four forms.`,
      conj: [{ inf: "estar", en: "to be", forms: ["est**oy**", "est**ás**", "est**á**", "est**amos**", "est**áis**", "est**án**"] }],
      examples: [
        ["¿Dónde estás? Estoy en la biblioteca.", "Where are you? I'm in the library."],
        ["¿Cómo está usted? Estoy bien, gracias.", "How are you? I'm fine, thank you."],
        ["Mis padres están en el trabajo.", "My parents are at work."],
        ["Estamos muy contentos.", "We're very happy."]
      ],
      tip: "Without the accent, *esta* means *this*. **Está** (with an accent) means *is*."
    },
    {
      title: "Where is it? Location words",
      text: `Use **estar** for location: {{La capilla está cerca del gimnasio.}} Most location words end in **de**, and **de + el** becomes **del**.`,
      flash: [
        ["cerca de", "near"], ["lejos de", "far from"], ["al lado de", "next to"], ["delante de", "in front of"], ["detrás de", "behind"],
        ["encima de", "on top of"], ["debajo de", "under"], ["dentro de", "inside"], ["enfrente de", "across from"], ["entre", "between"],
        ["a la derecha de", "to the right of"], ["a la izquierda de", "to the left of"], ["en", "in, on, at"]
      ]
    },
    {
      title: "How are you? Feelings and conditions",
      text: `Use **estar** for how someone feels or a condition that can change. These adjectives agree with the person, like all adjectives: {{Ella está cansada.}} {{Ellos están cansados.}}`,
      flash: [
        ["contento", "happy"], ["triste", "sad"], ["cansado", "tired"], ["enfermo", "sick"], ["nervioso", "nervous"], ["aburrido", "bored"],
        ["enojado", "angry"], ["preocupado", "worried"], ["ocupado", "busy"], ["emocionado", "excited"], ["tranquilo", "calm"]
      ],
      tip: "Use **muy** for *very* with these adjectives: {{Estoy muy nervioso.}}"
    }
  ],
  tasks: [
    {
      id: "t1", type: "conj", title: "Conjugate estar",
      intro: "Write every form of *estar*. Don't forget the accent marks.",
      verbs: [{ inf: "estar", en: "to be", forms: ["estoy", "estás", "está", "estamos", "estáis", "están"] }],
      hints: ["*Yo* is **estoy**.", "*Tú, él, vosotros* and *ellos* forms have accents: **estás, está, estáis, están**."]
    },
    {
      id: "t2", type: "match", title: "¿Cómo estás?",
      intro: "Tap a Spanish word (you'll hear it), then its meaning.",
      pairs: [["cansado", "tired"], ["enfermo", "sick"], ["nervioso", "nervous"], ["aburrido", "bored"], ["enojado", "angry"], ["preocupado", "worried"], ["contento", "happy"], ["tranquilo", "calm"], ["ocupado", "busy"]],
      hints: ["Some look like English: *nervioso*, *tranquilo*, *ocupado*."]
    },
    {
      id: "t3", type: "select", title: "Make it agree",
      intro: "Choose the form of *estar* and the adjective that fit.",
      items: [
        { s: "Yo {estoy|está|estás} muy cansado." }, { s: "Mis amigas están {contentas|contentos|contenta}." }, { s: "¿Tú {estás|esta|está} enfermo?" },
        { s: "La profesora está {ocupada|ocupado|ocupadas}." }, { s: "Nosotros {estamos|están|estáis} en la cafetería." }, { s: "Los chicos están {aburridos|aburrido|aburridas}." },
        { s: "Usted {está|estás|estoy} preocupado, ¿no?" }, { s: "Ana y Luis están {nerviosos|nerviosas|nervioso}.", why: "A mixed group: masculine plural." }
      ],
      hints: ["The adjective matches the person: *ella está cansada*, *ellos están cansados*."]
    },
    {
      id: "t4", type: "cloze", title: "Where is it?",
      intro: "Complete each sentence with the location word in parentheses.",
      items: [
        "El libro está [encima] de la mesa. ((on top of))", "El perro está [debajo] de la cama. ((under))", "La capilla está [cerca] de la escuela. ((near))",
        "Mi casa está [lejos] del centro. ((far from))", "La mochila está [detrás] de la puerta. ((behind))", "El gimnasio está al [lado] de la cafetería. ((next to))",
        "El baño está a la [derecha] de la oficina. ((to the right of))", "Yo estoy [entre] mis dos hermanos. ((between))"
      ],
      hints: ["Check the flashcards in Idea 2.", "*Derecha* = right, *izquierda* = left."]
    },
    {
      id: "t5", type: "read", title: "Mi escuela",
      intro: "Read (and listen to) Marta's description of her school. Then answer the questions.",
      passage: `{{Mi escuela es grande. La entrada está enfrente de un parque.}} {{La capilla está a la izquierda de la entrada, y la oficina está a la derecha.}} {{La biblioteca está en el segundo piso, encima de la cafetería.}} {{El gimnasio está detrás de la escuela, lejos de las clases.}} {{Hoy estoy un poco nerviosa porque tenemos un examen, pero mis amigos están tranquilos.}}`,
      questions: [
        { q: "What is across from the entrance?", choices: [["a park", true], ["the chapel", false], ["the gym", false], ["the office", false]] },
        { q: "Where is the library?", choices: [["above the cafeteria", true], ["next to the gym", false], ["to the right of the entrance", false], ["below the cafeteria", false]] },
        { q: "Where is the gym?", choices: [["behind the school", true], ["in front of the park", false], ["near the classrooms", false], ["on the second floor", false]] },
        { q: "How does Marta feel today?", choices: [["a little nervous", true], ["very calm", false], ["sick", false], ["bored", false]] },
        { q: "How do her friends feel?", choices: [["calm", true], ["nervous", false], ["angry", false], ["tired", false]] }
      ],
      hints: ["*Encima de* = on top of / above. *Detrás de* = behind."]
    },
    {
      id: "t6", type: "translate", title: "Say it in Spanish",
      intro: "Translate. Use *estar*.",
      items: [
        { en: "Where is the chapel?", es: ["¿dónde está la capilla?"] },
        { en: "We're tired.", es: ["[nosotros] estamos cansados", "[nosotras] estamos cansadas"] },
        { en: "The gym is next to the cafeteria.", es: ["el gimnasio está al lado de la cafetería"] },
        { en: "My mom is worried.", es: ["mi {mamá|madre} está preocupada"] },
        { en: "Are you (tú) sick?", es: ["¿[tú] estás {enfermo|enferma}?"] }
      ],
      hints: ["Location and feelings both use **estar**.", "Check the accent marks: *está, estás, cafetería, mamá*."]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Listen, record, compare.",
      items: [{ s: "¿Dónde estás? Estoy en casa." }, { s: "Hoy estoy un poco cansada, pero estoy contenta." }]
    }
  ],
  build: {
    heading: "¿Dónde estoy? ¿Cómo estoy?",
    prompt: `Describe where things are in your school or your room, and how you and others feel today. Write **at least 5 sentences** using **two different forms of estar**, at least **three location words**, and at least **one feeling**.`,
    model: `{{Estoy en la biblioteca de mi escuela.}} {{La biblioteca está al lado de la capilla.}} {{Mi mochila está debajo de la mesa, y mis libros están encima.}} {{La cafetería está lejos de aquí.}} {{Hoy estoy un poco cansado, pero mis amigos están contentos.}}`,
    placeholder: "Estoy en…",
    reqs: [
      { t: "At least 5 sentences", sentences: 5 },
      { t: "Two different forms of **estar**", any: ["estoy", "estás", "está", "estamos", "estáis", "están"], min: 2 },
      { t: "Three location words", any: ["cerca de", "cerca del", "lejos de", "lejos del", "al lado de", "al lado del", "delante de", "delante del", "detrás de", "detrás del", "encima de", "encima del", "encima", "debajo de", "debajo del", "debajo", "dentro de", "enfrente de", "enfrente del", "entre", "a la derecha", "a la izquierda"], min: 3 },
      { t: "A feeling", any: ["contento", "contenta", "contentos", "contentas", "triste", "tristes", "cansado", "cansada", "cansados", "cansadas", "enfermo", "enferma", "enfermos", "enfermas", "nervioso", "nerviosa", "nerviosos", "nerviosas", "aburrido", "aburrida", "aburridos", "aburridas", "enojado", "enojada", "enojados", "enojadas", "preocupado", "preocupada", "preocupados", "preocupadas", "ocupado", "ocupada", "ocupados", "ocupadas", "emocionado", "emocionada", "emocionados", "emocionadas", "tranquilo", "tranquila", "tranquilos", "tranquilas", "bien", "mal"] }
    ]
  },
  reflect: {
    q: "In Manresa, Ignatius paid close attention to how he was feeling and asked himself *why*. Try it now: ¿Cómo estás hoy, de verdad? (How are you today, really?) What's one reason you feel that way?",
    placeholder: "Today I feel… because…",
    lang: "en"
  },
  further: {
    id: "x1", type: "errors", title: "Challenge: fix the mistakes",
    intro: "Tap the wrong word, then type the correct one.",
    items: [
      { s: "Ellos estan en clase.", bad: "estan", fix: "están" },
      { s: "Ella está cansado.", bad: "cansado", fix: "cansada" },
      { s: "Tú está triste.", bad: "está", fix: "estás" },
      { s: "Las chicas están contentos.", bad: "contentos", fix: "contentas" }
    ]
  },
  culture: "**¿Sabías?** Many people still walk *el Camino Ignaciano*, a pilgrimage route of about 650 kilometers (400 miles) that follows Ignatius's journey from Loyola to Manresa.",
  teacher: {
    snags: [
      ["Task 1", "Forgets the accents", "Yellow boxes mean only an accent is missing: *estás, está, estáis, están*."],
      ["Task 3", "Picks *contentos* for *mis amigas*", "Are *amigas* boys or girls?"],
      ["Task 5", "Mixes *encima* and *debajo*", "*Encima* = on top; *debajo* = underneath."]
    ],
    factcheck: "Ignatius went to Montserrat in March 1522 (vigil the night of March 24–25), left his sword and dagger at the altar of Our Lady, exchanged clothes with a poor man, and stayed in Manresa about eleven months (1522–1523), praying in a cave (la Cova de Sant Ignasi). He calls himself *el peregrino* in his *Autobiography*. The Camino Ignaciano is about 650 km, usually walked in 27 stages."
  }
};
