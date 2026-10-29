module.exports = {
  num: 25, unit: 5, slug: "m25-objeto-directo", minutes: 45,
  title: "Los pronombres de objeto directo",
  subtitle: "lo, la, los, las: \"Do you see it? Yes, I see it.\"",
  lede: "Instead of repeating a noun (*I see the painting, I like the painting*), Spanish replaces it with a short pronoun that goes before the verb: *la veo*.",
  recap: "Last time you learned the present progressive: **estoy hablando, estamos comiendo, está leyendo**.",
  context: {
    title: "Proteger el Prado",
    place: "Museo del Prado, Madrid",
    text: `The **Museo del Prado** in Madrid opened to the public on **November 19, 1819**. Today it holds one of the greatest art collections in the world, including works by Velázquez, Goya and El Greco.

During the Spanish Civil War (1936–1939), bombs fell on Madrid. To protect the museum's masterpieces, workers packed hundreds of paintings in wooden crates and loaded them onto trucks. They drove them to Valencia, then to Catalonia, and finally out of Spain to Geneva, Switzerland. When the war ended, the paintings came home.

People who helped described it simply: {{Las pinturas son muy importantes. Las protegemos. Las llevamos a Ginebra.}} *The paintings are very important. We protect them. We take them to Geneva.* That little word **las** means *them*, and it saves you from repeating *las pinturas* over and over.`
  },
  learn: [
    {
      title: "lo, la, los, las = it, them",
      text: `A **direct object** receives the action of the verb: *I see **the painting***. To avoid repeating it, use a pronoun that matches its **gender and number**. The pronoun goes **before** the conjugated verb.`,
      table: {
        head: ["Noun", "Pronoun", "Example"],
        rows: [
          ["el cuadro (m. sing.)", "**lo**", "{{¿Ves el cuadro? Sí, lo veo.}}"],
          ["la pintura (f. sing.)", "**la**", "{{¿Tienes la entrada? Sí, la tengo.}}"],
          ["los libros (m. pl.)", "**los**", "{{¿Lees los libros? Sí, los leo.}}"],
          ["las fotos (f. pl.)", "**las**", "{{¿Miras las fotos? No, no las miro.}}"]
        ]
      },
      tip: "*Lo* and *la* also mean *him* and *her*: {{¿Conoces a Juan? Sí, lo conozco.}} {{¿Ves a Ana? Sí, la veo.}}"
    },
    {
      title: "All the direct object pronouns",
      table: {
        head: ["Pronoun", "Meaning", "Example"],
        rows: [
          ["**me**", "me", "{{Mi mamá me llama.}} My mom calls me."],
          ["**te**", "you (tú)", "{{Te veo mañana.}} I'll see you tomorrow."],
          ["**lo / la**", "him, her, it, you (usted)", "{{La invito a la fiesta.}} I invite her to the party."],
          ["**nos**", "us", "{{El profesor nos ayuda.}} The teacher helps us."],
          ["**os**", "you all (vosotros)", "{{Os espero aquí.}} I'll wait for you all here."],
          ["**los / las**", "them, you all (ustedes)", "{{Los visito en el verano.}} I visit them in the summer."]
        ]
      }
    },
    {
      title: "Where the pronoun goes",
      text: `- **Before a conjugated verb**, and after *no*: {{No lo tengo.}} (*I don't have it.*)
- **Attached to an infinitive** or **before** the conjugated verb, either way: {{Voy a comprarlo.}} = {{Lo voy a comprar.}}
- **Attached to a gerund** (add an accent) or **before estar**: {{Estoy leyéndolo.}} = {{Lo estoy leyendo.}}`,
      tip: "Don't confuse the pronoun **la** (her, it) with the article **la** (the). The pronoun comes right before a verb: *la veo*. The article comes before a noun: *la pintura*."
    }
  ],
  tasks: [
    {
      id: "t1", type: "select", title: "Choose the pronoun",
      intro: "Which pronoun replaces the underlined object?",
      items: [
        { s: "¿Ves <u>el museo</u>? Sí, {lo|la|los|las} veo." }, { s: "¿Compras <u>las entradas</u>? Sí, {las|los|la|lo} compro." },
        { s: "¿Lees <u>los libros</u>? No, no {los|las|lo|la} leo." }, { s: "¿Tienes <u>la llave</u>? Sí, {la|lo|las|los} tengo." },
        { s: "¿Conoces a <u>Ana y a Rosa</u>? Sí, {las|los|la|lo} conozco." }, { s: "¿Ayudas a <u>tu abuelo</u>? Sí, {lo|la|los|le} ayudo." },
        { s: "¿<u>Me</u> llamas mañana? Sí, {te|me|lo} llamo." }, { s: "¿El profesor <u>os</u> ayuda? Sí, {nos|os|los} ayuda." }
      ],
      hints: ["Match the noun's gender and number: *el* → **lo**, *la* → **la**, *los* → **los**, *las* → **las**.", "If someone asks *¿Me llamas?* (will you call **me**?), you answer *Sí, **te** llamo* (I'll call **you**)."]
    },
    {
      id: "t2", type: "cloze", title: "Answer with a pronoun",
      intro: "Write the direct object pronoun in each answer.",
      items: [
        "¿Ves la pintura de Goya? — Sí, [la] veo.", "¿Tienes los boletos? — No, no [los] tengo.", "¿Quién prepara la cena? — Mi papá [la] prepara.",
        "¿Escuchas la radio? — Sí, [la] escucho todos los días.", "¿Haces la tarea? — Sí, voy a hacer[la] ahora.", "¿Conoces a Pedro? — Sí, [lo] conozco.",
        "¿Compras las flores? — Sí, [las] compro para mi mamá.", "¿Estás leyendo el libro? — Sí, estoy leyéndo[lo]."
      ],
      hints: ["*Hacerla*, *leyéndolo*: here the pronoun is attached to the end of the verb.", "*Pedro* is a man: **lo**."]
    },
    {
      id: "t3", type: "match", title: "Question and answer",
      intro: "Match each question (tap to hear it) with the right answer.",
      left: "Pregunta", right: "Respuesta",
      pairs: [["¿Ves el cuadro?", "Sí, lo veo."], ["¿Ves la estatua?", "Sí, la veo."], ["¿Tienes los mapas?", "No, no los tengo."], ["¿Compras las postales?", "Sí, las compro."], ["¿Me ayudas?", "Sí, te ayudo."], ["¿Nos llamas?", "Sí, los llamo."]],
      hints: ["*Cuadro* is masculine; *estatua* is feminine.", "*¿Nos llamas?* (will you call us?) → *Sí, los llamo* (I'll call you all)."]
    },
    {
      id: "t4", type: "order", title: "Build the answers",
      intro: "Tap the words in order.",
      items: [
        { en: "Yes, I see it. (the painting)", es: "Sí, la veo." },
        { en: "No, I don't have them. (the tickets)", es: "No, no los tengo." },
        { en: "I'm going to buy it. (the book)", es: "Voy a comprarlo.", alt: ["Lo voy a comprar."] },
        { en: "My parents call me every day.", es: "Mis padres me llaman todos los días.", alt: ["Todos los días mis padres me llaman."] }
      ],
      hints: ["The pronoun goes right before the conjugated verb, or attached to an infinitive.", "*No* comes before the pronoun: *no los tengo*."]
    },
    {
      id: "t5", type: "listen", title: "The right answer",
      intro: "Listen to each question and choose the answer with the right pronoun.",
      questions: [
        { say: "¿Tienes la mochila?", choices: [["Sí, la tengo.", true], ["Sí, lo tengo.", false], ["Sí, las tengo.", false], ["Sí, los tengo.", false]] },
        { say: "¿Ves a tus primos?", choices: [["Sí, los veo.", true], ["Sí, lo veo.", false], ["Sí, las veo.", false], ["Sí, la veo.", false]] },
        { say: "¿Me escuchas?", choices: [["Sí, te escucho.", true], ["Sí, me escucho.", false], ["Sí, lo escucho.", false], ["Sí, nos escucho.", false]] },
        { say: "¿Vas a comprar las entradas?", choices: [["Sí, voy a comprarlas.", true], ["Sí, voy a comprarlos.", false], ["Sí, voy a comprarla.", false], ["Sí, las voy comprar.", false]] }
      ],
      hints: ["Listen for the noun's gender and number."]
    },
    {
      id: "t6", type: "errors", title: "Fix the pronoun",
      intro: "Tap the wrong pronoun, then type the right one.",
      items: [
        { s: "¿El libro? Sí, la leo.", bad: "la", fix: "lo", at: 3 },
        { s: "¿Las fotos? Sí, los tengo.", bad: "los", fix: "las" },
        { s: "¿La película? No, no lo veo.", bad: "lo", fix: "la" },
        { s: "¿Me ayudas? Sí, me ayudo.", bad: "me", fix: "te", at: 3 },
        { s: "¿Los zapatos? Voy a comprarlas.", bad: "comprarlas", fix: "comprarlos" }
      ],
      hints: ["Match the pronoun to the noun in the question."]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Listen, record, compare.",
      items: [{ s: "¿Ves el cuadro? Sí, lo veo." }, { s: "Las pinturas son importantes. Las protegemos." }]
    }
  ],
  build: {
    heading: "Una visita al museo",
    prompt: `Write a conversation (**at least 6 lines**) between two friends visiting a museum. They ask each other questions about things they see, have or want to buy, and answer **with direct object pronouns**. Use the pronouns at least **four times**.`,
    model: `{{Ana: ¿Ves el cuadro de Velázquez?|¿Ves el cuadro de Velázquez?}}

{{Luis: Sí, lo veo. ¡Es enorme!|Sí, lo veo. ¡Es enorme!}}

{{Ana: ¿Tienes el mapa del museo?|¿Tienes el mapa del museo?}}

{{Luis: No, no lo tengo. Lo tiene tu hermana.|No, no lo tengo. Lo tiene tu hermana.}}

{{Ana: Me gustan las postales. ¿Las compramos?|Me gustan las postales. ¿Las compramos?}}

{{Luis: Sí, vamos a comprarlas.|Sí, vamos a comprarlas.}}`,
    placeholder: "Ana: ¿Ves…?",
    reqs: [
      { t: "At least 6 lines", lines: 6 },
      { t: "At least 2 questions", questions: 2 },
      { t: "Four direct object pronouns (*lo veo, las compro, comprarlo…*)", min: 4, re: "\\b(?:(?:lo|la|los|las|me|te|nos|os)\\s+(?:veo|ves|ve|vemos|ven|tengo|tienes|tiene|tenemos|tienen|compro|compras|compra|compramos|compran|leo|lees|lee|leemos|leen|quiero|quieres|quiere|queremos|quieren|conozco|conoces|conoce|conocemos|conocen|llevo|llevas|lleva|llevamos|llevan|busco|buscas|busca|buscamos|buscan|necesito|necesitas|necesita|necesitamos|necesitan|miro|miras|mira|miramos|miran|escucho|escuchas|escucha|escuchamos|escuchan|llamo|llamas|llama|llamamos|llaman|ayudo|ayudas|ayuda|ayudamos|ayudan|invito|invita|invitamos|visito|visita|visitamos|protegemos|protegen|hago|haces|hace|hacemos|hacen|pongo|pone|traigo|trae|prefiero|prefiere|como|come|bebo|bebe|uso|usa|pido|pide|sirvo|sirve|voy|vas|va|vamos|van|estoy|estás|está|estamos|están|puedo|puedes|puede|podemos|pueden)|\\p{L}+(?:ar|er|ir)(?:lo|la|los|las|me|te|nos)|\\p{L}+(?:ándo|iéndo|yéndo)(?:lo|la|los|las|me|te|nos))\\b" }
    ]
  },
  reflect: {
    q: "During a war, ordinary workers risked a lot to protect paintings that belonged to everyone. What is something (a place, a tradition, a person, a value) that you think is worth protecting? What can you do to protect it?",
    placeholder: "Something worth protecting is…"
  },
  further: {
    id: "x1", type: "translate", title: "Challenge: translate",
    items: [
      { en: "I don't have it. (the key)", es: ["[yo] no la tengo"] },
      { en: "We're going to visit them. (our cousins)", es: ["[nosotros] vamos a visitarlos", "[nosotros] los vamos a visitar", "nosotras vamos a visitarlos", "nosotras los vamos a visitar"] },
      { en: "She's reading it. (the book)", es: ["[ella] lo está leyendo", "[ella] está leyéndolo"] },
      { en: "Do you (tú) know her?", es: ["¿[tú] la conoces?"] }
    ],
    hints: ["Attached to a gerund, add an accent: *leyéndolo*."]
  },
  culture: "**¿Sabías?** Picasso's famous painting **Guernica** (1937), about the bombing of a Basque town, isn't in the Prado. It hangs a short walk away in the **Museo Reina Sofía**.",
  teacher: {
    snags: [
      ["Task 1", "Uses *le* for *tu abuelo*", "*Le* is for *to him* (indirect, Module 22). Here he's helped directly: *lo ayudo*. (Some speakers in Spain say *le ayudo*; the course teaches *lo*.)"],
      ["Task 2", "Writes the pronoun before *hacer* in item 5", "The blank is at the end of *hacer…*: attach it."],
      ["Task 6", "Can't find which *la* is wrong", "Tap the *la* in the answer, after *Sí*."]
    ],
    factcheck: "The Prado opened November 19, 1819. During the Civil War, the Junta del Tesoro Artístico evacuated works to Valencia (1936), then Catalonia (1938), and to Geneva in early 1939; they returned to Madrid in September 1939. *Guernica* has been at the Reina Sofía since 1992."
  }
};
