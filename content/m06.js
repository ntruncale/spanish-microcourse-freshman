module.exports = {
  num: 6, unit: 2, slug: "m06-genero-numero", minutes: 40,
  title: "El género y el número",
  subtitle: "Masculine and feminine nouns, and making plurals",
  lede: "Every Spanish noun is either masculine or feminine, even a table or an apple. The ending usually tells you which, and a few simple rules make any noun plural.",
  recap: "In Unit 1 you learned the sounds and spelling of Spanish, greetings, numbers, dates, the time and the weather. Now you'll start building sentences, beginning with nouns.",
  context: {
    title: "El mercado de La Boqueria",
    place: "Barcelona, España",
    text: `Just off **La Rambla**, Barcelona's most famous street, is a huge iron-roofed market called **La Boqueria**. People have sold food at this spot since at least **1217**, when it was an open-air market outside the city walls.

Today it has about 300 stalls piled with fruit, fish, cheese, ham and spices. Shoppers point and ask: {{¿Cuánto cuestan las fresas?}} (*How much are the strawberries?*) The sellers call out what they have: {{¡Manzanas, naranjas, plátanos!}}

Listen to those words. **Manzana** (apple) is feminine. **Plátano** (banana) is masculine. Nobody thinks a banana is a boy or an apple is a girl. In Spanish, *masculine* and *feminine* are just two groups of words, and the group tells you which little words go with each one.`
  },
  learn: [
    {
      title: "Masculine or feminine? Look at the ending",
      text: `In this module, **el** marks a masculine noun and **la** marks a feminine one. (Both mean *the*; you'll learn more about them next module.)`,
      table: {
        head: ["Usually masculine", "Usually feminine"],
        rows: [
          ["ends in **-o**: {{el libro}}, {{el plátano}}", "ends in **-a**: {{la manzana}}, {{la mesa}}"],
          ["ends in **-ma** (from Greek): {{el problema}}, {{el idioma}}, {{el programa}}", "ends in **-ción** or **-sión**: {{la canción}}, {{la televisión}}"],
          ["ends in **-aje**: {{el viaje}}, {{el garaje}}", "ends in **-dad**, **-tad** or **-tud**: {{la ciudad}}, {{la libertad}}"],
          ["ends in **-or**: {{el color}}, {{el profesor}}", "ends in **-umbre**: {{la costumbre}}"]
        ],
        caption: "Other endings (like **-e** or **-l**) can go either way: {{el pan}}, {{la leche}}, {{el papel}}, {{la flor}}. Learn each noun together with *el* or *la*."
      },
      tip: "Some common words break the pattern. Memorize these: {{el día}}, {{el mapa}}, {{la mano}}, {{la foto}}, {{la moto}}, {{la radio}}."
    },
    {
      title: "People: the word changes, or only the article does",
      text: `For many people and animals, **-o** becomes **-a**, or **-a** is added to a consonant. Words ending in **-ista** or **-nte** stay the same; only *el* or *la* changes.`,
      table: {
        head: ["Masculine", "Feminine"],
        rows: [
          ["{{el chico}}", "{{la chica}}"],
          ["{{el profesor}}", "{{la profesora}}"],
          ["{{el gato}}", "{{la gata}}"],
          ["{{el estudiante}}", "{{la estudiante}}"],
          ["{{el artista}}", "{{la artista}}"]
        ]
      }
    },
    {
      title: "Making nouns plural",
      text: `- Ends in a **vowel**: add **-s**: {{manzana → manzanas|manzanas}}
- Ends in a **consonant**: add **-es**: {{ciudad → ciudades|ciudades}}, {{papel → papeles|papeles}}
- Ends in **-z**: change *z* to *c* and add **-es**: {{lápiz → lápices|lápices}}, {{luz → luces|luces}}
- Ends in an unstressed **-s**: no change: {{el lunes → los lunes|los lunes}}

Adding a syllable can move the stress rules (Module 2), so watch the accent marks: {{canción → canciones|canciones}} *loses* its accent, and {{examen → exámenes|exámenes}} *gains* one.`,
      tip: "A group with any male in it uses the masculine plural: *un chico y nueve chicas* = **los chicos**."
    }
  ],
  tasks: [
    {
      id: "t1", type: "sort", title: "Masculine or feminine?",
      intro: "Use the endings and the exceptions you just learned.",
      cats: ["masculino (el)", "femenino (la)"], speak: true, pick: 12,
      items: [["manzana", 1], ["queso", 0], ["plátano", 0], ["fresa", 1], ["ciudad", 1, "Words ending in **-dad** are feminine."], ["canción", 1, "Words ending in **-ción** are feminine."], ["problema", 0, "**-ma** words from Greek are masculine: *el problema*."], ["día", 0, "*Día* is an exception: **el día**."], ["mano", 1, "*Mano* is an exception: **la mano**."], ["mapa", 0, "*Mapa* is an exception: **el mapa**."], ["foto", 1, "*Foto* is short for *fotografía*: **la foto**."], ["viaje", 0, "**-aje** words are masculine."], ["libertad", 1], ["idioma", 0]],
      hints: ["**-o** masculine, **-a** feminine… mostly.", "Feminine endings: **-ción, -sión, -dad, -tad, -tud, -umbre**. Masculine: **-ma, -aje, -or**.", "Exceptions: *el día, el mapa, la mano, la foto*."]
    },
    {
      id: "t2", type: "cloze", title: "Make it plural",
      intro: "Write the plural. Watch the spelling changes and accent marks.",
      pick: 8,
      items: [
        { s: "el lápiz → los [lápices]", say: "los lápices" }, { s: "la canción → las [canciones]", say: "las canciones" }, { s: "el examen → los [exámenes]", say: "los exámenes" }, { s: "la ciudad → las [ciudades]", say: "las ciudades" },
        { s: "el papel → los [papeles]", say: "los papeles" }, { s: "la naranja → las [naranjas]", say: "las naranjas" }, { s: "el joven → los [jóvenes]", say: "los jóvenes" }, { s: "la luz → las [luces]", say: "las luces" }, { s: "el lunes → los [lunes]", say: "los lunes" }, { s: "el pez → los [peces]", say: "los peces" }
      ],
      hints: ["Vowel → add **-s**. Consonant → add **-es**.", "**z** → **c** + **-es**: *lápices*, *luces*, *peces*.", "*Canciones* loses the accent; *exámenes* and *jóvenes* gain one."]
    },
    {
      id: "t3", type: "match", title: "En el mercado",
      intro: "Tap a Spanish word (you'll hear it), then its meaning.",
      pairs: [["la manzana", "apple"], ["la naranja", "orange"], ["el queso", "cheese"], ["el pan", "bread"], ["la leche", "milk"], ["el pescado", "fish (food)"], ["el pollo", "chicken"], ["las uvas", "grapes"], ["el jamón", "ham"], ["la fresa", "strawberry"]],
      hints: ["*Pescado* is fish you eat; a live fish is *un pez*."]
    },
    {
      id: "t4", type: "select", title: "El or la?",
      intro: "Choose the word for *the* that matches each noun.",
      items: [
        { s: "{el|la} problema" }, { s: "{la|el} mano" }, { s: "{el|la} día" }, { s: "{la|el} canción" }, { s: "{el|la} mapa" },
        { s: "{la|el} ciudad" }, { s: "{el|la} estudiante ((Juan))" }, { s: "{la|el} estudiante ((Ana))" }, { s: "{la|el} foto" }, { s: "{el|la} viaje" }
      ],
      hints: ["The exceptions are the trap: *el día*, *el mapa*, *el problema*, *la mano*, *la foto*.", "For *estudiante*, only *el* / *la* shows if it's a boy or a girl."]
    },
    {
      id: "t5", type: "dictation", title: "Listen and write",
      intro: "Write each word or phrase, with the article.",
      pick: 4,
      items: ["las canciones", "los lápices", "la leche", "los exámenes", "las ciudades", "el problema"],
      hints: ["*Lápices* and *exámenes* have accent marks; *canciones* doesn't."]
    },
    {
      id: "t6", type: "errors", title: "Fix the shopping list",
      intro: "Each sentence has one wrong word. Tap it, then type the correct word.",
      items: [
        { s: "Necesito dos manzana.", bad: "manzana", fix: "manzanas" },
        { s: "Necesito tres lápizes.", bad: "lápizes", fix: "lápices", why: "*z* changes to *c* before *-es*." },
        { s: "Hay cuatro ciudads en el mapa.", bad: "ciudads", fix: "ciudades" },
        { s: "Los exámens son mañana.", bad: "exámens", fix: "exámenes" },
        { s: "Hay seis pez en el acuario.", bad: "pez", fix: "peces" }
      ],
      hints: ["Words ending in a consonant add **-es**, not just *-s*."]
    },
    {
      id: "s1", type: "speak", title: "En el mercado",
      intro: "Say what a seller might call out.",
      items: [{ s: "¡Manzanas, naranjas, plátanos!" }, { s: "¿Cuánto cuestan las fresas?" }, { s: "El queso y el jamón, por favor." }]
    }
  ],
  build: {
    heading: "Mi lista para el mercado",
    prompt: `You're shopping at La Boqueria. Write a list of **at least 3 sentences** that start with **Necesito…** (*I need…*). Use at least **five plural** nouns with numbers written as words, and at least one plural that ends in **-es**.`,
    model: `{{Necesito dos manzanas y seis naranjas.}} {{Necesito tres panes y dos quesos.}} {{También necesito doce uvas para el Año Nuevo.}} {{Y necesito cuatro limones.}}`,
    placeholder: "Necesito…",
    reqs: [
      { t: "At least 3 sentences with **Necesito**", re: "necesito", min: 3 },
      { t: "At least 5 plural nouns after a number", re: "\\b(dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|quince|veinte)\\s+\\p{L}+s\\b", min: 5 },
      { t: "A plural ending in **-es**", re: "\\b(dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|quince|veinte)\\s+\\p{L}+[^aeiouáéíóú\\s]es\\b" },
      { t: "No numerals: write numbers as words", re: "^[^0-9]*$" }
    ]
  },
  reflect: {
    q: "For 800 years, farmers, fishers and sellers have filled La Boqueria with food. Think about your last meal. How many people do you think helped bring it to your table? What would you want to say to them?",
    placeholder: "My last meal needed…"
  },
  further: {
    id: "x1", type: "quiz", title: "Challenge: tricky nouns",
    questions: [
      { q: "*El agua* (water) is actually feminine. Why does it use *el*?", choices: [["It starts with a stressed *a* sound, and *la agua* is hard to say", true, "In the plural it's **las aguas**, and it's **el agua fría** (feminine adjective)."], ["It's an exception to the -a rule, so it's masculine", false], ["Water is always masculine in every language", false], ["It's a mistake, but everyone says it", false]] },
      { q: "Which word is masculine?", choices: [["el sistema", true, "-ma words from Greek: *el sistema, el tema, el clima*."], ["la crema", false], ["la cama", false], ["la forma", false]] },
      { q: "What's the plural of *el sofá*?", choices: [["los sofás", true, "A stressed vowel usually just adds -s."], ["los sofaes", false], ["los sofá", false], ["las sofás", false]] }
    ]
  },
  culture: "**¿Sabías?** In Spain, a *tortilla* is a thick omelet made with potatoes and eggs. In Mexico, a *tortilla* is the flat corn or flour bread for tacos. Same word, very different food!",
  teacher: {
    snags: [
      ["Task 1", "Marks *día* and *mapa* feminine", "These are exceptions. Look at the tip under Idea 1."],
      ["Task 2", "Writes *lápizes*", "What happens to *z* before *-es*?"],
      ["Task 2", "Writes *canciónes*", "Adding a syllable moves the stress. Does *can-cio-nes* still need an accent?"],
      ["Build", "The *-es* line won't check", "Add a word that ends in a consonant, like *limón → limones* or *pan → panes*."]
    ],
    factcheck: "La Boqueria's history is usually traced to 1217, when stalls were set up near the old city gate; the current iron roof dates from 1914. About 300 stalls is the commonly cited figure. *El agua* rule: feminine nouns beginning with stressed *a-/ha-* take *el* in the singular."
  }
};
