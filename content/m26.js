module.exports = {
  num: 26, unit: 5, slug: "m26-comparaciones", minutes: 45,
  title: "Comparativos y superlativos",
  subtitle: "More than, less than, as … as, the most",
  lede: "Taller, faster, the best, the highest: comparing things in Spanish uses a few short words and a handful of irregular forms.",
  recap: "Last time you replaced nouns with direct object pronouns: **¿Ves el cuadro? Sí, lo veo.**",
  context: {
    title: "El techo de las Américas",
    place: "Argentina · Venezuela · Chile · Perú y Bolivia",
    text: `South America is a continent of records. **Aconcagua**, in Argentina, rises **6,961 meters** (22,838 feet). It's the highest mountain in the world outside of Asia, and climbers call it *el techo de las Américas*, the roof of the Americas.

In Venezuela, **el Salto Ángel** (Angel Falls) drops 979 meters (3,212 feet), the tallest uninterrupted waterfall on Earth, almost twenty times taller than Niagara Falls. In Chile, parts of the **Desierto de Atacama** have gone years without rain; it's the driest non-polar desert in the world. And between Peru and Bolivia, **el lago Titicaca** sits higher than almost any other large lake, at about 3,800 meters.

To describe these places, you need comparisons: {{El Aconcagua es más alto que el monte Whitney. El Salto Ángel es el salto de agua más alto del mundo.}}`
  },
  learn: [
    {
      title: "More, less, as … as",
      text: `The adjective still agrees with the noun it describes.`,
      table: {
        head: ["Pattern", "Example"],
        rows: [
          ["**más** + adjective + **que** (more … than)", "{{El Aconcagua es más alto que el monte Whitney.}} · {{Ana es más alta que Luis.}}"],
          ["**menos** + adjective + **que** (less … than)", "{{El río es menos ancho que el lago.}}"],
          ["**tan** + adjective + **como** (as … as)", "{{Mi hermana es tan inteligente como yo.}}"],
          ["**tanto / tanta / tantos / tantas** + noun + **como** (as much / many … as)", "{{Tengo tantos libros como tú.}}"]
        ],
        caption: "After *que* and *como*, use **yo** and **tú**: *más alto que yo*."
      }
    },
    {
      title: "Irregular comparisons",
      text: `Four common comparisons don't use *más*.`,
      table: {
        head: ["Adjective", "Comparative", "Example"],
        rows: [
          ["bueno (good)", "**mejor** (better)", "{{Este libro es mejor que la película.}}"],
          ["malo (bad)", "**peor** (worse)", "{{Hoy el tiempo es peor que ayer.}}"],
          ["viejo (old, for people's age)", "**mayor** (older)", "{{Mi hermano es mayor que yo.}}"],
          ["joven (young)", "**menor** (younger)", "{{Soy menor que mi prima.}}"]
        ],
        caption: "With numbers, *more than* is **más de**: {{Tengo más de cien canciones.}}"
      }
    },
    {
      title: "The most: superlatives and -ísimo",
      text: `For *the most* or *the least*, use **el / la / los / las** (+ noun) + **más / menos** + adjective + **de**: {{Es la montaña más alta de América.}} Note **de**, not *en*, for *in the*.

**El mejor**, **el peor**, **el mayor** and **el menor** work the same way: {{Es el mejor equipo de la liga.}}

To say *extremely*, add **-ísimo** to an adjective (dropping a final vowel): {{alto → altísimo|altísimo}}, {{rica → riquísima|riquísima}}, {{buenos → buenísimos|buenísimos}}.`
    }
  ],
  tasks: [
    {
      id: "t1", type: "select", title: "Complete the comparison",
      intro: "Choose the word that completes each sentence.",
      items: [
        { s: "El Aconcagua es más alto {que|como|de} el monte Whitney." }, { s: "Mi gato es tan grande {como|que|de} mi perro." },
        { s: "Tengo {tantos|tanto|tan} amigos como tú." }, { s: "El chocolate es {mejor|más bueno|bueno} que las verduras.", en: "Chocolate is better than vegetables." },
        { s: "Mi abuela es {mayor|más vieja que|menor} que mi abuelo.", en: "My grandmother is older than my grandfather." }, { s: "Es la ciudad más grande {del|en el|que el} país." },
        { s: "Hay más {de|que|como} veinte estudiantes en la clase." }, { s: "Mi hermana es {menor|más joven|joven} que yo.", en: "My sister is younger than me." }
      ],
      hints: ["*más … que*, *tan … como*.", "*Better* = **mejor**; *older* (people) = **mayor**; *younger* = **menor**.", "Superlative *in the* = **de**. More than a **number** = **más de**."]
    },
    {
      id: "t2", type: "cloze", title: "Write the comparison",
      intro: "Complete each sentence.",
      items: [
        "Ana tiene catorce años. Luis tiene doce. Ana es [mayor] que Luis.", "Luis es [menor] que Ana.", "El Salto Ángel es [más] alto [que] las cataratas del Niágara.",
        "Mi cuarto es [tan] grande [como] tu cuarto.", "Para mí, el fútbol es [mejor] que el béisbol.", "Es el lago [más] alto [del] mundo.", "¡Esta paella está [riquísima]! ((rica + -ísima))"
      ],
      hints: ["Age: **mayor** (older), **menor** (younger).", "*De + el = del*.", "*Rica* → **riquísima** (c → qu to keep the *k* sound)."]
    },
    {
      id: "t3", type: "read", title: "Récords de Sudamérica",
      intro: "Read and listen, then answer the questions.",
      passage: `{{El Aconcagua mide casi siete mil metros. Es la montaña más alta de las Américas.}} {{El Chimborazo, en Ecuador, es más bajo que el Aconcagua, pero su cima es el punto más lejano del centro de la Tierra.}} {{El río Amazonas es más largo que el río Misisipi y lleva más agua que cualquier otro río del mundo.}} {{El lago Titicaca es menos grande que el lago Superior, pero está mucho más alto.}}`,
      questions: [
        { q: "What is the highest mountain in the Americas?", choices: [["Aconcagua", true], ["Chimborazo", false], ["Everest", false], ["Whitney", false]] },
        { q: "What is special about Chimborazo?", choices: [["Its peak is the farthest point from Earth's center.", true], ["It's taller than Aconcagua.", false], ["It's the coldest mountain.", false], ["It's in Argentina.", false]] },
        { q: "Compared with the Mississippi, the Amazon is…", choices: [["longer, and carries more water", true], ["shorter", false], ["less long but wider", false], ["the same length", false]] },
        { q: "Compared with Lake Superior, Lake Titicaca is…", choices: [["smaller but much higher", true], ["bigger and higher", false], ["smaller and lower", false], ["the same size", false]] }
      ],
      hints: ["*Más lejano* = farther. *Menos grande* = less big."]
    },
    {
      id: "t4", type: "order", title: "Build the sentences",
      intro: "Tap the words in order.",
      items: [
        { en: "My brother is taller than me.", es: "Mi hermano es más alto que yo." },
        { en: "Spanish is as interesting as history.", es: "El español es tan interesante como la historia." },
        { en: "It's the best team in the league.", es: "Es el mejor equipo de la liga.", extra: ["en"] },
        { en: "I have more than fifty books.", es: "Tengo más de cincuenta libros.", extra: ["que"] }
      ],
      hints: ["*In the league* = **de la liga**. With numbers, **más de**."]
    },
    {
      id: "t5", type: "errors", title: "Fix the mistakes",
      intro: "Tap the wrong word, then type the correct one.",
      items: [
        { s: "Mi hermano es menor de yo.", bad: "de", fix: "que", why: "Comparisons use **que**: *menor que yo*." },
        { s: "Soy tan alto que mi padre.", bad: "que", fix: "como" },
        { s: "Ella es más alta como su madre.", bad: "como", fix: "que" },
        { s: "Es la montaña más alta en el mundo.", bad: "en", fix: "del", why: "*In the world* in a superlative: **del mundo**." },
        { s: "Tengo tanto libros como tú.", bad: "tanto", fix: "tantos" }
      ],
      hints: ["*más / menos … que* · *tan … como* · *tantos* + plural noun · superlatives use *de*."]
    },
    {
      id: "t6", type: "listen", title: "¿Quién es mayor?",
      intro: "Listen and answer.",
      questions: [
        { say: "Tengo dieciséis años y mi hermana tiene trece. Yo soy mayor.", q: "Who is older?", choices: [["the speaker", true], ["the sister", false], ["they're the same age", false], ["you can't tell", false]] },
        { say: "Mi perro es tan grande como mi gato.", q: "Which is bigger?", choices: [["They're the same size.", true], ["the dog", false], ["the cat", false], ["you can't tell", false]] },
        { say: "Para mí, la playa es mejor que la montaña.", q: "What does the speaker prefer?", choices: [["the beach", true], ["the mountains", false], ["both equally", false], ["neither", false]] },
        { say: "Es el día más frío del año.", q: "What is the speaker saying?", choices: [["It's the coldest day of the year.", true], ["It's colder than yesterday.", false], ["It's as cold as last year.", false], ["It's a cold year.", false]] }
      ]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Listen, record, compare.",
      items: [{ s: "El Aconcagua es la montaña más alta de las Américas." }, { s: "Mi hermano es mayor que yo, pero yo soy más alto." }]
    }
  ],
  build: {
    heading: "Comparaciones",
    prompt: `Compare two or three people, places or teams you know well (your siblings, two cities, two sports teams, two seasons). Write **at least 6 sentences**. Use **más … que**, **menos … que** or **tan … como**, at least one irregular form (**mejor, peor, mayor, menor**), and one **superlative** (*el más … de* or *-ísimo*).`,
    model: `{{Tengo dos hermanos, Sam y Leo.}} {{Sam es mayor que yo, pero Leo es menor.}} {{Sam es más alto que Leo.}} {{Leo es tan gracioso como Sam.}} {{Para mí, Leo es el mejor cocinero de la familia.}} {{¡Sus galletas son buenísimas!}}`,
    placeholder: "Tengo…",
    reqs: [
      { t: "At least 6 sentences", sentences: 6 },
      { t: "**más / menos … que** or **tan … como**", re: "\\b(más|menos)\\s+\\p{L}+\\s+que\\b|\\btan\\s+\\p{L}+\\s+como\\b" },
      { t: "An irregular form", any: ["mejor", "mejores", "peor", "peores", "mayor", "mayores", "menor", "menores"] },
      { t: "A superlative (*el / la … más … de*, or *-ísimo*)", re: "\\b(el|la|los|las)\\s+(\\p{L}+\\s+)?(más|menos)\\s+\\p{L}+\\s+(de|del)\\b|\\b(el|la|los|las)\\s+(mejor|mejores|peor|peores|mayor|menor)\\b|\\p{L}+ísim(o|a|os|as)\\b" }
    ]
  },
  reflect: {
    q: "It's easy to compare ourselves with other people: who's taller, faster, smarter, more popular. But no one else in the world is exactly like you. What is something about you that you'd never want to trade, even with someone who seems \"better\"?",
    placeholder: "Something about me I'd never trade is…"
  },
  further: {
    id: "x1", type: "translate", title: "Challenge: translate",
    items: [
      { en: "She's older than me.", es: ["[ella] es mayor que yo"] },
      { en: "This is the worst day of the year.", es: ["este es el peor día del año", "éste es el peor día del año"] },
      { en: "We have as many books as you (tú).", es: ["[nosotros] tenemos tantos libros como tú", "nosotras tenemos tantos libros como tú"] },
      { en: "The cake is extremely good!", es: ["¡el pastel está buenísimo!", "¡el pastel es buenísimo!", "¡la torta está buenísima!", "¡el pastel está riquísimo!"] }
    ]
  },
  culture: "**¿Sabías?** The city of **La Paz**, Bolivia, at about 3,600 meters, is the highest seat of government in the world. Visitors often drink *mate de coca* tea to help with altitude sickness.",
  teacher: {
    snags: [
      ["Task 1", "*más bueno*", "Which irregular word means *better*?"],
      ["Task 2", "*más alto del mundo* vs. *en el mundo*", "Superlatives use *de*."],
      ["Task 5", "*menor de yo*", "Comparisons use *que*; *de* is for numbers and superlatives."]
    ],
    factcheck: "Aconcagua 6,961 m (commonly cited; some surveys give 6,960–6,962). Angel Falls 979 m total, tallest uninterrupted waterfall (807 m single drop). Atacama: driest non-polar desert. Titicaca ~3,812 m, often called the highest navigable lake. Chimborazo's summit is the farthest point from Earth's center. La Paz ~3,640 m, highest seat of government."
  }
};
