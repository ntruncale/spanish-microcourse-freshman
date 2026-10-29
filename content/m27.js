module.exports = {
  num: 27, unit: 5, slug: "m27-demostrativos", minutes: 45,
  title: "Los demostrativos y la ropa",
  subtitle: "This, that, that one over there; clothing, prices and numbers to 1,000",
  lede: "*Este, ese, aquel*: Spanish has three words for *this* and *that*, depending on how far away something is. Perfect for shopping.",
  recap: "Last time you compared things: **más alto que**, **tan grande como**, **el mejor**, **el más alto del mundo**.",
  context: {
    title: "Una tienda en A Coruña",
    place: "A Coruña, Galicia, España",
    text: `In **1975**, a shop called **Zara** opened on a street in A Coruña, a port city in northwest Spain. Its founder, Amancio Ortega, had started working at a shirt shop as a teenager. His idea was to make clothes quickly in local factories and change the designs every few weeks, instead of every season.

The company grew into one of the largest clothing sellers in the world, with stores in nearly a hundred countries. Fast fashion also raises hard questions about the people who sew our clothes and about how much clothing gets thrown away.

In any store, Spanish speakers point and compare: {{¿Te gusta esta camiseta? No, prefiero esa. ¿Y aquellos zapatos?}} *Do you like this T-shirt? No, I prefer that one. And those shoes over there?*`
  },
  learn: [
    {
      title: "This, that, and that over there",
      text: `**Demonstratives** go before a noun and match its gender and number.`,
      table: {
        head: ["", "Near me (this, these)", "Near you (that, those)", "Far from both (that, those over there)"],
        rows: [
          ["masc. sing.", "{{este suéter}}", "{{ese suéter}}", "{{aquel suéter}}"],
          ["fem. sing.", "{{esta falda}}", "{{esa falda}}", "{{aquella falda}}"],
          ["masc. pl.", "{{estos zapatos}}", "{{esos zapatos}}", "{{aquellos zapatos}}"],
          ["fem. pl.", "{{estas camisas}}", "{{esas camisas}}", "{{aquellas camisas}}"]
        ],
        caption: "Match them with **aquí** (here), **ahí** (there, near you) and **allí** (over there). Without a noun, they mean *this one, that one*: {{Prefiero esa.}} *Esto* and *eso* mean *this* and *that* for an idea or unknown thing: {{¿Qué es esto?}}"
      },
      tip: "Watch the masculine singular: **este** and **ese** end in **-e**, not *-o*. **Esta** (this) has no accent; **está** (is) does."
    },
    {
      title: "La ropa",
      flash: [
        ["la camisa", "shirt"], ["la camiseta", "T-shirt"], ["el suéter", "sweater"], ["la chaqueta", "jacket"], ["el abrigo", "coat"], ["los pantalones", "pants"],
        ["los jeans · los vaqueros", "jeans"], ["la falda", "skirt"], ["el vestido", "dress"], ["los zapatos", "shoes"], ["los tenis", "sneakers"], ["la gorra", "cap"],
        ["los calcetines", "socks"], ["el uniforme", "uniform"]
      ],
      examples: [
        ["¿Cuánto cuesta esta chaqueta?", "How much does this jacket cost?"],
        ["Cuesta cuarenta euros.", "It costs forty euros."],
        ["¿Qué talla usa usted?", "What size do you wear?"],
        ["Me queda grande.", "It's too big on me."],
        ["Llevo jeans y una camiseta.", "I'm wearing jeans and a T-shirt."]
      ]
    },
    {
      title: "Numbers to 1,000",
      text: `**100** is **cien** alone, but **ciento** before another number: {{ciento veinte}} (120). The hundreds from 200 agree with a feminine noun: {{doscientos dólares}}, {{doscientas personas}}.`,
      table: {
        rows: [
          ["100 {{cien}}", "200 {{doscientos}}", "300 {{trescientos}}", "400 {{cuatrocientos}}", "500 {{quinientos}}"],
          ["600 {{seiscientos}}", "700 {{setecientos}}", "800 {{ochocientos}}", "900 {{novecientos}}", "1000 {{mil}}"]
        ],
        caption: "Watch the irregular ones: **quinientos** (500), **setecientos** (700), **novecientos** (900). *A thousand* is just **mil**, never *un mil*."
      }
    }
  ],
  tasks: [
    {
      id: "t1", type: "select", title: "This, that, that over there",
      intro: "Choose the demonstrative that matches the noun and the distance.",
      items: [
        { s: "{Esta|Este|Estas} camiseta es bonita. ((here, near me))" }, { s: "{Esos|Esas|Ese} zapatos son caros. ((near you))" },
        { s: "{Aquella|Aquel|Aquellas} chaqueta es de cuero. ((far away))" }, { s: "¿Te gustan {estos|estas|este} pantalones? ((near me))" },
        { s: "{Ese|Esa|Eso} suéter es azul. ((near you))" }, { s: "{Aquellos|Aquellas|Aquel} vestidos son elegantes. ((far away))" },
        { s: "¿Qué es {esto|este|esta}? ((an unknown thing))" }, { s: "{Estas|Estos|Esta} gorras cuestan diez euros. ((near me))" }
      ],
      hints: ["Masculine singular ends in **-e**: *este, ese* (but *aquel*).", "*Pantalones* and *vestidos* are masculine plural; *gorras* is feminine plural."]
    },
    {
      id: "t2", type: "match", title: "La ropa",
      intro: "Tap a Spanish word (you'll hear it), then its meaning.",
      pairs: [["la camiseta", "T-shirt"], ["la chaqueta", "jacket"], ["el abrigo", "coat"], ["la falda", "skirt"], ["el vestido", "dress"], ["los calcetines", "socks"], ["la gorra", "cap"], ["los pantalones", "pants"], ["el suéter", "sweater"]],
      hints: ["*Camisa* is a shirt; *camiseta* (a little shirt) is a T-shirt."]
    },
    {
      id: "t3", type: "listen", title: "¿Cuánto cuesta?",
      intro: "Listen to each price and choose it.",
      questions: [
        { say: "Cuesta ciento veinte dólares.", choices: [["$102", false], ["$120", true], ["$220", false], ["$1,020", false]] },
        { say: "Cuestan quinientos euros.", choices: [["€50", false], ["€150", false], ["€500", true], ["€5,000", false]] },
        { say: "Son setecientos cincuenta dólares.", choices: [["$650", false], ["$715", false], ["$750", true], ["$770", false]] },
        { say: "Cuesta novecientos noventa y nueve pesos.", choices: [["$199", false], ["$909", false], ["$990", false], ["$999", true]] },
        { say: "Cuesta mil dólares.", choices: [["$100", false], ["$1,000", true], ["$1,100", false], ["$10,000", false]] }
      ],
      hints: ["*Quinientos* = 500, *setecientos* = 700, *novecientos* = 900."]
    },
    {
      id: "t4", type: "cloze", title: "Write the number",
      intro: "Write each number in words.",
      items: [
        { s: "100 = [cien]", say: "cien" }, { s: "150 = [ciento cincuenta]", say: "ciento cincuenta" }, { s: "200 = [doscientos]", say: "doscientos" },
        { s: "500 = [quinientos]", say: "quinientos" }, { s: "700 = [setecientos]", say: "setecientos" }, { s: "900 = [novecientos]", say: "novecientos" }, { s: "1000 = [mil]", say: "mil" }
      ],
      hints: ["Alone, 100 is **cien**; before more numbers it's **ciento**.", "The tricky ones: **quinientos**, **setecientos**, **novecientos**."]
    },
    {
      id: "t5", type: "read", title: "En la tienda",
      intro: "Read and listen to the conversation, then answer.",
      passage: `{{Dependiente: Buenas tardes. ¿Qué busca?|Buenas tardes. ¿Qué busca?}}

{{Marta: Busco una chaqueta para el invierno.|Busco una chaqueta para el invierno.}}

{{Dependiente: ¿Le gusta esta chaqueta negra? Cuesta ochenta euros.|¿Le gusta esta chaqueta negra? Cuesta ochenta euros.}}

{{Marta: Es bonita, pero prefiero aquella chaqueta roja. ¿Cuánto cuesta?|Es bonita, pero prefiero aquella chaqueta roja. ¿Cuánto cuesta?}}

{{Dependiente: Aquella cuesta sesenta euros.|Aquella cuesta sesenta euros.}}

{{Marta: ¡Perfecto! Me la llevo.|¡Perfecto! Me la llevo.}}`,
      questions: [
        { q: "What is Marta looking for?", choices: [["a winter jacket", true], ["a red dress", false], ["black shoes", false], ["a summer shirt", false]] },
        { q: "How much is the black jacket?", choices: [["€80", true], ["€60", false], ["€18", false], ["€90", false]] },
        { q: "Where is the red jacket?", choices: [["far from both of them (aquella)", true], ["in Marta's hands (esta)", false], ["near the clerk (esa)", false], ["it's not in the store", false]] },
        { q: "What does \"Me la llevo\" mean?", choices: [["I'll take it.", true], ["I'll bring it back.", false], ["It's too big.", false], ["I'll think about it.", false]] }
      ],
      hints: ["*Aquella* means *that one over there*."]
    },
    {
      id: "t6", type: "errors", title: "Fix the mistakes",
      intro: "Tap the wrong word, then type the correct one.",
      items: [
        { s: "Esto suéter es caro.", bad: "Esto", fix: "Este" },
        { s: "Me gustan esas pantalones.", bad: "esas", fix: "esos" },
        { s: "Aquel chaqueta es bonita.", bad: "Aquel", fix: "Aquella" },
        { s: "¿Te gustan estos camisetas?", bad: "estos", fix: "estas" },
        { s: "El abrigo cuesta ciento dólares.", bad: "ciento", fix: "cien", why: "Alone, 100 is **cien**." }
      ],
      hints: ["*Este, ese* (masc.) · *esta, esa* (fem.) · *aquel* (masc.) · *aquella* (fem.)."]
    },
    {
      id: "s1", type: "speak", title: "Shop out loud",
      intro: "Listen, record, compare.",
      items: [{ s: "¿Cuánto cuesta este suéter?" }, { s: "Prefiero aquellos zapatos negros." }]
    }
  ],
  build: {
    heading: "De compras",
    prompt: `You're shopping for an outfit for a special event. Write **at least 6 sentences** (or a conversation with a store clerk). Point at different items with **demonstratives** (at least **three**, including one form of *aquel*), name at least **three clothing items**, and give at least **two prices** in words.`,
    model: `{{Necesito ropa para la boda de mi prima.}} {{Me gusta mucho este vestido azul.}} {{Cuesta ochenta dólares.}} {{Esos zapatos negros son bonitos, pero son caros: cuestan ciento veinte dólares.}} {{¿Y aquella chaqueta blanca?}} {{¡Perfecto, me la llevo!}}`,
    placeholder: "Necesito ropa para…",
    reqs: [
      { t: "At least 6 sentences", sentences: 6 },
      { t: "Three demonstratives", any: ["este", "esta", "estos", "estas", "ese", "esa", "esos", "esas", "aquel", "aquella", "aquellos", "aquellas", "esto", "eso", "aquello"], min: 3 },
      { t: "A form of **aquel**", any: ["aquel", "aquella", "aquellos", "aquellas", "aquello"] },
      { t: "Three clothing items", any: ["camisa", "camisas", "camiseta", "camisetas", "suéter", "suéteres", "chaqueta", "chaquetas", "abrigo", "abrigos", "pantalones", "jeans", "vaqueros", "falda", "faldas", "vestido", "vestidos", "zapatos", "tenis", "gorra", "gorras", "calcetines", "uniforme", "corbata", "corbatas", "traje", "trajes", "botas", "sandalias", "bufanda", "guantes", "sombrero", "blusa", "blusas", "sudadera", "sudaderas", "pijama"], min: 3 },
      { t: "Two prices with **cuesta / cuestan**", re: "\\b(cuesta|cuestan)\\s+\\p{L}+", min: 2 },
      { t: "No numerals: write numbers as words", re: "^[^0-9]*$" }
    ]
  },
  reflect: {
    q: "Clothes today are cheaper and faster to make than ever, but someone, somewhere, still sews every shirt. Think about something you're wearing right now. Who might have made it? What could it mean to treat the people who make our things with dignity?",
    placeholder: "Something I'm wearing was probably made by…"
  },
  further: {
    id: "x1", type: "translate", title: "Challenge: translate",
    items: [
      { en: "How much does this shirt cost?", es: ["¿cuánto cuesta esta camisa?"] },
      { en: "I prefer those shoes. (near you)", es: ["[yo] prefiero esos zapatos"] },
      { en: "That jacket over there is very expensive.", es: ["aquella chaqueta es muy cara"] },
      { en: "It costs three hundred dollars.", es: ["cuesta trescientos dólares"] }
    ]
  },
  culture: "**¿Sabías?** Spain uses the **euro** (€). Mexico uses the **peso**, Peru the **sol**, Guatemala the **quetzal**, named after a brilliant green bird, and Panama and Ecuador use the U.S. dollar.",
  teacher: {
    snags: [
      ["Task 1", "*Esto suéter*", "Masculine singular is *este*. *Esto* is only for an idea or unknown thing, with no noun."],
      ["Task 3", "Hears *quinientos* as 50 or 5,000", "*Quinientos* = five hundred."],
      ["Task 4", "*cinco cientos*", "Some hundreds are irregular: *quinientos, setecientos, novecientos*."],
      ["Task 6", "*ciento dólares*", "100 by itself is *cien*; *ciento* only before another number (*ciento veinte*)."]
    ],
    factcheck: "The first Zara store opened in A Coruña in 1975 (Amancio Ortega; parent company Inditex). Inditex operates in roughly 90–100 markets. Currency details are current as of 2026 (Ecuador and Panama use the U.S. dollar; Panama also has the balboa)."
  }
};
