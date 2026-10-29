module.exports = {
  num: 3, unit: 1, slug: "m03-saludos", minutes: 40,
  title: "Saludos y pronombres",
  subtitle: "Greetings, introductions, subject pronouns, tú and usted",
  lede: "Spanish has two ways to say \"you,\" and choosing the right one shows respect. Today you'll greet people, introduce yourself, and learn the subject pronouns.",
  recap: "Last time you learned the two stress rules, when to write an accent mark, and why Spanish questions start with **¿**.",
  context: {
    title: "Un saludo desde el balcón",
    place: "Ciudad del Vaticano · Chiclayo, Perú",
    text: `On **May 8, 2025**, a new pope stepped onto the balcony of St. Peter's Basilica: **León XIV**, born Robert Prevost in Chicago. He spoke to the crowd in Italian. Then, in the middle of his very first speech, he switched to Spanish to greet the people of **Chiclayo, Peru**, where he had served as a missionary and bishop for many years: {{Un saludo a todos.}}

His choice of language mattered. Speaking to people in their own language says, "I know you, and you matter to me."

The pope before him, **Francisco**, was the first Jesuit pope and came from Buenos Aires, Argentina. In Argentina, friends don't say *tú* for "you." They say **vos**. Spanish has several words for *you*, and picking the right one is part of greeting someone well.`
  },
  learn: [
    {
      title: "Hello and goodbye",
      text: `Tap a card to flip it and hear it.`,
      flash: [
        ["Hola", "Hello, hi"], ["Buenos días", "Good morning"], ["Buenas tardes", "Good afternoon"], ["Buenas noches", "Good evening, good night"],
        ["¿Qué tal?", "How's it going?"], ["¿Cómo estás?", "How are you? (to a friend)"], ["¿Cómo está usted?", "How are you? (formal)"], ["Bien, gracias. ¿Y tú?", "Fine, thanks. And you?"],
        ["Más o menos", "So-so"], ["Adiós", "Goodbye"], ["Hasta luego", "See you later"], ["Hasta mañana", "See you tomorrow"], ["Nos vemos", "See you"]
      ],
      tip: "*Buenos días* uses **buenos** because *día* is masculine (you'll learn why in Module 6). *Buenas tardes* and *buenas noches* use **buenas**."
    },
    {
      title: "Introducing yourself",
      examples: [
        ["¿Cómo te llamas?", "What's your name? (to a friend; literally \"How do you call yourself?\")"],
        ["Me llamo Sofía.", "My name is Sofía."],
        ["¿Cómo se llama usted?", "What's your name? (formal)"],
        ["Mucho gusto.", "Nice to meet you."],
        ["Encantado. Encantada.", "Delighted (to meet you). A boy says encantado; a girl says encantada."],
        ["Igualmente.", "Likewise."],
        ["Te presento a mi amigo Pablo.", "Let me introduce my friend Pablo."]
      ]
    },
    {
      title: "Subject pronouns, and four ways to say \"you\"",
      text: `**Subject pronouns** tell who is doing something. Use **tú** with friends, family, classmates and children. Use **usted** to show respect: teachers, older adults you don't know well, a doctor, a store clerk.`,
      table: {
        head: ["Singular", "", "Plural", ""],
        rows: [
          ["{{yo}}", "I", "{{nosotros}} / {{nosotras}}", "we (*-as* for an all-female group)"],
          ["{{tú}}", "you (informal)", "{{vosotros}} / {{vosotras}}", "you all (informal; used in Spain)"],
          ["{{usted}} (Ud.)", "you (formal)", "{{ustedes}} (Uds.)", "you all (formal everywhere; also informal in Latin America)"],
          ["{{él}}", "he", "{{ellos}}", "they (males, or a mixed group)"],
          ["{{ella}}", "she", "{{ellas}}", "they (all female)"]
        ],
        caption: "In Argentina, Uruguay and parts of Central America, friends say **vos** instead of *tú*. Spanish has no word for *it* as a subject; you just leave it out."
      },
      tip: "A mixed group of 10 girls and 1 boy is still **ellos** (or **nosotros**). The feminine plural is only for groups that are all female."
    }
  ],
  tasks: [
    {
      id: "t1", type: "match", title: "Greetings and goodbyes",
      intro: "Tap a Spanish phrase (you'll hear it), then tap its meaning.",
      pairs: [["Buenos días", "Good morning"], ["Buenas noches", "Good night"], ["Hasta mañana", "See you tomorrow"], ["Mucho gusto", "Nice to meet you"], ["¿Qué tal?", "How's it going?"], ["Más o menos", "So-so"], ["Igualmente", "Likewise"], ["Me llamo…", "My name is…"]],
      hints: ["*Mañana* means *tomorrow*.", "*Gusto* is related to *pleasure*: a pleasure to meet you."]
    },
    {
      id: "t2", type: "sort", title: "Tú or usted?",
      intro: "Which word for \"you\" would you use with each person?",
      cats: ["tú", "usted"], itemLang: "en",
      items: [["your best friend", 0], ["your school principal", 1], ["a new classmate", 0], ["a police officer", 1], ["your little brother", 0], ["your friend's grandmother, whom you just met", 1], ["your doctor", 1], ["your dog", 0], ["a waiter in a restaurant", 1], ["your cousin", 0]],
      hints: ["**Tú** is for friends, family, other teens and children (and pets!).", "**Usted** shows respect: adults in charge, older people you don't know well, people serving you."]
    },
    {
      id: "t3", type: "select", title: "Choose the pronoun", speak: false,
      intro: "Which subject pronoun replaces each person or group?",
      items: [
        { s: "María → {ella|él|ellas}" },
        { s: "Carlos y yo → {nosotros|ellos|vosotros}", why: "Any group that includes **yo** is *nosotros* (or *nosotras*)." },
        { s: "Ana y Sofía → {ellas|ellos|nosotras}" },
        { s: "Pedro y Ana → {ellos|ellas|ustedes}", why: "A mixed group is **ellos**." },
        { s: "el señor Gómez (talking about him) → {él|usted|ella}" },
        { s: "you and your friends, in Mexico → {ustedes|vosotros|ellos}", why: "In Latin America, *you all* is always **ustedes**." },
        { s: "you and your friends, in Madrid → {vosotros|ustedes|nosotros}", why: "In Spain, informal *you all* is **vosotros**." },
        { s: "your teacher (talking to her) → {usted|tú|ella}" }
      ],
      hints: ["Are you talking *to* the person (*tú*, *usted*) or *about* them (*él*, *ella*)?", "Mixed groups use the masculine form: **ellos**, **nosotros**."]
    },
    {
      id: "t4", type: "listen", title: "What would you answer?",
      intro: "Listen to what someone says to you. Choose the best reply.",
      questions: [
        { say: "¿Cómo te llamas?", q: "Choose the best reply.", choices: [["Me llamo Andrés.", true], ["Muy bien, gracias.", false, "That answers *How are you?*"], ["Hasta luego.", false], ["Igualmente.", false]] },
        { say: "Mucho gusto.", q: "Choose the best reply.", choices: [["Igualmente.", true, "*Likewise* is the perfect reply."], ["Me llamo Andrés.", false], ["Más o menos.", false], ["Buenas noches.", false]] },
        { say: "Buenos días, ¿cómo está usted?", q: "Choose the best reply.", choices: [["Muy bien, gracias. ¿Y usted?", true, "They used *usted*, so you answer with *usted* too."], ["Me llamo Andrés.", false], ["Hasta mañana.", false], ["Mucho gusto.", false]] },
        { say: "¿Qué tal?", q: "Choose the best reply.", choices: [["Bien, ¿y tú?", true], ["Encantada.", false], ["Adiós.", false], ["Me llamo Andrés.", false]] },
        { say: "Adiós, hasta mañana.", q: "Choose the best reply.", choices: [["Chao, nos vemos.", true, "*See you!*"], ["¿Qué tal?", false], ["Mucho gusto.", false], ["Buenos días.", false]] }
      ],
      hints: ["Tap 🐢 to hear it slowly.", "Match the kind of sentence: a question about your name, a greeting, or a goodbye?"]
    },
    {
      id: "t5", type: "cloze", title: "Complete the conversation",
      intro: "Daniel meets Sara on the first day of school. Fill in the missing words.",
      items: [
        "Daniel: ¡Hola! ¿Cómo te [llamas]?",
        "Sara: Me [llamo] Sara. ¿Y [tú]?",
        "Daniel: Me llamo Daniel. Mucho [gusto].",
        "Sara: [Igualmente|Encantada]. ¿Qué [tal]?",
        "Daniel: Muy [bien], gracias.",
        "Sara: Bueno, ¡hasta [luego|mañana]!"
      ],
      hints: ["*¿Cómo te llamas?* → *Me llamo…*", "*And you?* (informal) is *¿Y tú?*, with an accent on *tú*.", "*Mucho gusto* → *Igualmente* (or *Encantada*)."]
    },
    {
      id: "t6", type: "order", title: "Build the sentences",
      intro: "Tap the words in order.",
      items: [
        { en: "Good afternoon, how are you? (formal)", es: "Buenas tardes, ¿cómo está usted?", keepCase: true },
        { en: "My name is Luis.", es: "Me llamo Luis." },
        { en: "Let me introduce my friend Ana.", es: "Te presento a mi amiga Ana." },
        { en: "See you tomorrow.", es: "Hasta mañana." }
      ],
      hints: ["*How are you* (formal) is *cómo está usted*.", "*Let me introduce…* is *Te presento a…*"]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Practice a short introduction. Listen, record, compare.",
      items: [
        { s: "¡Hola! Me llamo Sofía. ¿Cómo te llamas?", en: "Hi! My name is Sofía. What's your name?" },
        { s: "Mucho gusto. Encantado.", en: "Nice to meet you. Delighted." },
        { s: "Buenas tardes, señora. ¿Cómo está usted?", en: "Good afternoon, ma'am. How are you?" }
      ]
    }
  ],
  build: {
    heading: "Un estudiante nuevo",
    prompt: `Write a short conversation (**at least 6 lines**) between you and a new student on the first day of school. Put each line on its own line, starting with the speaker's name. Include a greeting, names, *nice to meet you*, *how are you* and a goodbye.`,
    model: `{{Yo: ¡Hola! ¿Cómo te llamas?|¡Hola! ¿Cómo te llamas?}}

{{Marco: Me llamo Marco. ¿Y tú?|Me llamo Marco. ¿Y tú?}}

{{Yo: Me llamo Ella. Mucho gusto.|Me llamo Ella. Mucho gusto.}}

{{Marco: Igualmente. ¿Qué tal?|Igualmente. ¿Qué tal?}}

{{Yo: Muy bien, gracias. ¿Y tú?|Muy bien, gracias. ¿Y tú?}}

{{Marco: Bien. ¡Hasta luego!|Bien. ¡Hasta luego!}}`,
    placeholder: "Yo: ¡Hola!…",
    reqs: [
      { t: "At least 6 lines", lines: 6 },
      { t: "A greeting", any: ["hola", "buenos días", "buenas tardes", "buenas noches"] },
      { t: "Asking a name: **¿Cómo te llamas?**", any: ["cómo te llamas", "cómo se llama"] },
      { t: "**Me llamo…**", any: ["me llamo"] },
      { t: "*Nice to meet you*", any: ["mucho gusto", "encantado", "encantada", "igualmente"] },
      { t: "*How are you?*", any: ["cómo estás", "qué tal", "cómo está"] },
      { t: "A goodbye", any: ["adiós", "hasta luego", "hasta mañana", "nos vemos", "chao", "chau", "hasta pronto"] }
    ]
  },
  reflect: {
    q: "When Pope León XIV greeted Chiclayo in Spanish, he showed people that they mattered to him. Spanish also builds respect into the word *usted*. Think about a new student at your school. What could you say or do on their first day so they feel welcome?",
    placeholder: "On a new student's first day, I could…"
  },
  further: {
    id: "x1", type: "translate", title: "Challenge: translate the greetings",
    intro: "Write each one in Spanish.",
    items: [
      { en: "Good morning, Mr. Ruiz. How are you?", es: ["buenos días señor ruiz ¿cómo está [usted]?"] },
      { en: "Hi, Marta! How's it going?", es: ["¡hola marta! ¿qué tal?"] },
      { en: "My name is Javier. Nice to meet you.", es: ["me llamo javier {mucho gusto|encantado}"] },
      { en: "See you later!", es: ["¡hasta luego!", "¡nos vemos!"] }
    ],
    hints: ["Mr. = *señor*. With *señor*, use **usted**: *¿Cómo está usted?*"]
  },
  culture: "**¿Sabías?** In Spain, friends usually greet with **dos besos**, a light kiss on each cheek. In much of Latin America it's one kiss on the right cheek. Between men, a handshake or a hug is more common.",
  teacher: {
    snags: [
      ["Task 2", "Uses *tú* for every adult", "Would you call your principal by their first name? Then use *usted*."],
      ["Task 3", "Picks *ellas* for Pedro y Ana", "Is the group all female? If not, use the masculine plural."],
      ["Task 5", "Writes *tu* without the accent", "Here it means *you*, the person. Which form has the accent?"]
    ],
    factcheck: "Robert Prevost was elected May 8, 2025 and took the name Leo XIV; in his first address from the loggia he greeted the diocese of Chiclayo, Peru, in Spanish (\"…un saludo a todos y en modo particular a mi querida diócesis de Chiclayo, en el Perú…\"). He served in Peru as a missionary and as Bishop of Chiclayo (2015–2023). Pope Francis (Jorge Mario Bergoglio, Buenos Aires) was the first Jesuit pope; *voseo* is standard in Argentina."
  }
};
