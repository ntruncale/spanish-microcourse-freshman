module.exports = {
  num: 8, unit: 2, slug: "m08-ser", minutes: 40,
  title: "El verbo ser",
  subtitle: "Who you are and where you're from",
  lede: "*Ser* is one of the two Spanish verbs for *to be*. You use it for identity: who someone is, where they're from, what they're like.",
  recap: "Last time you learned the articles: **el, la, los, las** (*the*) and **un, una, unos, unas** (*a, some*).",
  context: {
    title: "Soy boricua",
    place: "Carolina, Puerto Rico · Pittsburgh, Pensilvania",
    text: `**Roberto Clemente** was born in Carolina, Puerto Rico, in 1934. He played right field for the **Pittsburgh Pirates** for 18 seasons, won 12 Gold Gloves, and on **September 30, 1972**, got the 3,000th hit of his career.

Clemente was proud of who he was and where he came from. He spoke out when sportswriters mocked his accent, and he spent his winters running baseball clinics for kids in Puerto Rico. Puerto Ricans often call themselves **boricuas**, from *Borinquen*, the island's name before the Spanish arrived.

On December 31, 1972, an earthquake had just destroyed much of Managua, Nicaragua. Clemente was flying there with food and medicine when his plane crashed. He was 38. He once said: *"Any time you have an opportunity to make a difference in this world and you don't, you are wasting your time on Earth."* In Spanish you might describe him like this: {{Es de Puerto Rico. Es puertorriqueño. Es un héroe.}}`
  },
  learn: [
    {
      title: "The forms of ser",
      text: `**Ser** is irregular: its forms don't follow the *-ar* pattern, so memorize them.`,
      conj: [{ inf: "ser", en: "to be", forms: ["soy", "eres", "es", "somos", "sois", "son"] }],
      examples: [
        ["Yo soy estudiante.", "I'm a student."],
        ["¿Eres de aquí?", "Are you from here?"],
        ["Mi padre es de Colombia.", "My father is from Colombia."],
        ["Somos amigos.", "We're friends."],
        ["Ellos son de Pittsburgh.", "They're from Pittsburgh."]
      ]
    },
    {
      title: "When to use ser",
      text: `Use **ser** for things that describe *who or what* something is:`,
      table: {
        head: ["Use", "Example"],
        rows: [
          ["**Identity**: who someone is", "{{Soy Roberto.}} · {{Es mi hermana.}}"],
          ["**Origin**: where someone is from (*ser de*)", "{{Soy de Puerto Rico.}}"],
          ["**Nationality**", "{{Es puertorriqueño.}}"],
          ["**Job or role**", "{{Es beisbolista.}} · {{Son estudiantes.}}"],
          ["**Description**: what someone or something is like", "{{Es alto y simpático.}}"],
          ["**Time and dates**", "{{Son las dos.}} · {{Hoy es lunes.}}"],
          ["**What something is made of** (*ser de*)", "{{La mesa es de madera.}}"]
        ]
      },
      tip: "Next module adds more description words. In Module 15 you'll meet **estar**, the other *to be*, for location and feelings."
    },
    {
      title: "¿De dónde eres? Nationalities",
      text: `Ask {{¿De dónde eres?}} (*Where are you from?*) and answer {{Soy de…}}. Nationalities are **not capitalized** in Spanish, and most have a masculine and a feminine form.`,
      table: {
        head: ["Place", "Masculine", "Feminine"],
        rows: [
          ["Puerto Rico", "{{puertorriqueño}}", "{{puertorriqueña}}"],
          ["México", "{{mexicano}}", "{{mexicana}}"],
          ["España", "{{español}}", "{{española}}"],
          ["Colombia", "{{colombiano}}", "{{colombiana}}"],
          ["la República Dominicana", "{{dominicano}}", "{{dominicana}}"],
          ["Guatemala", "{{guatemalteco}}", "{{guatemalteca}}"],
          ["los Estados Unidos", "{{estadounidense}}", "{{estadounidense}}"],
          ["Canadá", "{{canadiense}}", "{{canadiense}}"]
        ],
        caption: "Words ending in **-e** (like *estadounidense*) are the same for everyone."
      }
    }
  ],
  tasks: [
    {
      id: "t1", type: "conj", title: "Conjugate ser",
      intro: "Write every form of *ser* from memory.",
      verbs: [{ inf: "ser", en: "to be", forms: ["soy", "eres", "es", "somos", "sois", "son"] }],
      hints: ["*Yo soy, tú eres…*", "The *nosotros* form is **somos**; *vosotros* is **sois** (no accent)."]
    },
    {
      id: "t2", type: "select", title: "Choose the form of ser",
      intro: "Tap the form that matches the subject.",
      items: [
        { s: "Yo {soy|es|eres} de Scranton." }, { s: "¿Tú {eres|es|soy} de Puerto Rico?" }, { s: "Roberto Clemente {es|son|eres} puertorriqueño." },
        { s: "Mi amiga y yo {somos|son|es} estudiantes." }, { s: "Ellos {son|somos|es} de Colombia." }, { s: "Usted {es|eres|son} profesor, ¿no?" },
        { s: "Vosotros {sois|son|somos} españoles." }, { s: "Las mesas {son|es|somos} de madera." }
      ],
      hints: ["*Mi amiga y yo* = nosotros. *Usted* uses the same form as *él*."]
    },
    {
      id: "t3", type: "match", title: "Countries and nationalities",
      intro: "Match each country with the nationality of a boy from there.",
      left: "País", right: "Nacionalidad", leftLang: "es",
      pairs: [["España", "español"], ["México", "mexicano"], ["Puerto Rico", "puertorriqueño"], ["Colombia", "colombiano"], ["los Estados Unidos", "estadounidense"], ["Guatemala", "guatemalteco"], ["Perú", "peruano"], ["Argentina", "argentino"]],
      hints: ["Most nationalities end in *-ano* or *-eño*. *Estadounidense* comes from *Estados Unidos*."]
    },
    {
      id: "t4", type: "cloze", title: "Complete the sentences",
      intro: "Write the correct form of *ser*.",
      items: [
        "Clemente [es] de Carolina, Puerto Rico.", "Nosotros [somos] aficionados de los Piratas.", "¿De dónde [eres] tú?", "Yo [soy] de Pensilvania.",
        "Mis abuelos [son] de la República Dominicana.", "Hoy [es] martes.", "[Son] las tres de la tarde.", "Tú y yo [somos] buenos amigos."
      ],
      hints: ["Time with *las* uses **son**; the day uses **es**.", "*Tú y yo* = nosotros."]
    },
    {
      id: "t5", type: "listen", title: "¿De dónde son?",
      intro: "Listen to each person. Choose the right answer.",
      questions: [
        { say: "Hola, me llamo Lucía. Soy de Bogotá. Soy colombiana.", q: "Where is Lucía from?", choices: [["Colombia", true], ["Bolivia", false], ["Cuba", false], ["Chile", false]] },
        { say: "Me llamo Diego. Mi familia y yo somos de Monterrey.", q: "Who is from Monterrey?", choices: [["Diego and his family", true], ["Only Diego", false], ["Only Diego's family", false], ["Diego's friend", false]] },
        { say: "Mis padres son de Puerto Rico, pero yo soy de Nueva York.", q: "Where is the speaker from?", choices: [["New York", true], ["Puerto Rico", false], ["New Jersey", false], ["Spain", false]] },
        { say: "Ella es mi profesora. Es española, de Sevilla.", q: "What do you learn about the teacher?", choices: [["She's from Seville, Spain", true], ["She's from Mexico", false], ["She's a student", false], ["She's the speaker's sister", false]] }
      ],
      hints: ["Tap 🐢 to hear it slowly.", "Listen for **de** + a place."]
    },
    {
      id: "t6", type: "order", title: "Build the sentences",
      intro: "Tap the words in order.",
      items: [
        { en: "We are from Pennsylvania.", es: "Somos de Pensilvania.", alt: ["Nosotros somos de Pensilvania."] },
        { en: "Roberto Clemente is Puerto Rican.", es: "Roberto Clemente es puertorriqueño.", keepCase: true },
        { en: "Are you from Mexico?", es: "¿Eres de México?", alt: ["¿Tú eres de México?"] },
        { en: "My friends are students.", es: "Mis amigos son estudiantes.", extra: ["es"] }
      ],
      hints: ["*Ser de* + place.", "*Mis amigos* is plural: **son**."]
    },
    {
      id: "s1", type: "speak", title: "Introduce yourself",
      intro: "Listen, record, compare.",
      items: [{ s: "Soy de Pensilvania. Soy estadounidense." }, { s: "¿De dónde eres?" }, { s: "Mis abuelos son de Italia." }]
    }
  ],
  build: {
    heading: "¿Quién soy?",
    prompt: `Write **at least 5 sentences** about who you are: your name, where you're from, your nationality, and where people in your family are from. Use at least **three different forms** of *ser* (for example *soy*, *es*, *son*, *somos*).`,
    model: `{{Me llamo Daniel.}} {{Soy de Scranton, Pensilvania.}} {{Soy estadounidense.}} {{Mi mamá es de Puerto Rico, y mi papá es de Nueva Jersey.}} {{Mis abuelos son de Italia.}} {{Somos una familia grande.}}`,
    placeholder: "Me llamo…",
    reqs: [
      { t: "At least 5 sentences", sentences: 5 },
      { t: "Where you're from: **Soy de…**", any: ["soy de"] },
      { t: "A nationality", any: ["estadounidense", "puertorriqueño", "puertorriqueña", "mexicano", "mexicana", "español", "española", "colombiano", "colombiana", "dominicano", "dominicana", "guatemalteco", "guatemalteca", "canadiense", "italiano", "italiana", "irlandés", "irlandesa", "polaco", "polaca", "cubano", "cubana", "peruano", "peruana", "argentino", "argentina", "salvadoreño", "salvadoreña", "hondureño", "hondureña", "venezolano", "venezolana", "ecuatoriano", "ecuatoriana", "chino", "china", "indio", "india", "alemán", "alemana", "inglés", "inglesa", "francés", "francesa", "filipino", "filipina", "coreano", "coreana", "vietnamita", "brasileño", "brasileña", "ucraniano", "ucraniana", "nigeriano", "nigeriana", "libanés", "libanesa"] },
      { t: "Three different forms of **ser**", any: ["soy", "eres", "es", "somos", "sois", "son"], min: 3 }
    ]
  },
  reflect: {
    q: "Roberto Clemente was proud of being *boricua*, and he used his fame to help others. What part of who you are (your family, your town, your culture, your faith) are you proud of? How could it help you make a difference for someone else?",
    placeholder: "I'm proud that I am…"
  },
  further: {
    id: "x1", type: "errors", title: "Challenge: fix the mistakes",
    intro: "Tap the wrong word, then type the correct one.",
    items: [
      { s: "Yo es de Ohio.", bad: "es", fix: "soy" },
      { s: "Ella es Mexicana.", bad: "Mexicana", fix: "mexicana", why: "Nationalities are lowercase." },
      { s: "Nosotros son estudiantes.", bad: "son", fix: "somos" },
      { s: "Mi mamá es español.", bad: "español", fix: "española", why: "A woman: **española**." }
    ]
  },
  culture: "**¿Sabías?** Puerto Ricans are U.S. citizens, and the island's official languages are Spanish and English. Major League Baseball celebrates **Roberto Clemente Day** every September, and every player on the Pirates wears his number, **21**.",
  teacher: {
    snags: [
      ["Task 1", "Writes *eres* for *usted*", "*Usted* goes with the *él / ella* form."],
      ["Task 4", "*Es las tres*", "*Las tres* is plural: *son*."],
      ["Build", "Nationality line won't check", "Write your nationality in lowercase with its accent (e.g., *estadounidense*, *irlandés*)."]
    ],
    factcheck: "Clemente: born August 18, 1934, Carolina, PR; Pirates 1955–1972; 12 Gold Gloves; 3,000th hit September 30, 1972; died December 31, 1972, in a plane crash en route to Managua with earthquake relief; Hall of Fame 1973. The quotation is widely attributed to him. MLB has held Roberto Clemente Day in September since 2002; since 2022 all Pirates (and many players league-wide) wear 21 that day."
  }
};
