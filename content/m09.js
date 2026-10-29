module.exports = {
  num: 9, unit: 2, slug: "m09-adjetivos", minutes: 45,
  title: "Los adjetivos",
  subtitle: "Describing people and things: agreement and position",
  lede: "Spanish adjectives change to match the noun they describe, and they usually come after it: *una casa azul*, a house blue.",
  recap: "Last time you learned the forms of **ser** (*soy, eres, es, somos, sois, son*) and used it for identity and origin.",
  context: {
    title: "La Casa Azul",
    place: "Coyoacán, Ciudad de México",
    text: `**Frida Kahlo** was born in **1907** in a bright blue house in Coyoacán, Mexico City, called **la Casa Azul**. At 18 she was badly hurt in a bus accident and spent months in bed. Her mother hung a mirror above the bed, and Frida began to paint the person she saw: herself.

About a third of her paintings are self-portraits. She painted her heavy eyebrows, her traditional Mexican dresses, flowers in her hair, monkeys and parrots, and sometimes her pain. She didn't try to look like anyone else. She once wrote, "I paint myself because I am so often alone and because I am the subject I know best."

Today the Casa Azul is a museum. Visitors describe it with adjectives: {{La casa es azul. Los cuadros son famosos. Frida es una artista valiente.}}`
  },
  learn: [
    {
      title: "Adjectives match their noun",
      text: `An adjective changes to match the **gender** (masculine or feminine) and **number** (singular or plural) of the noun it describes.`,
      table: {
        head: ["Adjective ends in…", "Masculine", "Feminine", "Plural"],
        rows: [
          ["**-o**: four forms", "{{alto}}", "{{alta}}", "{{altos}} · {{altas}}"],
          ["**-e**: two forms", "{{inteligente}}", "{{inteligente}}", "{{inteligentes}}"],
          ["a **consonant**: two forms", "{{azul}} · {{fácil}}", "{{azul}} · {{fácil}}", "{{azules}} · {{fáciles}}"],
          ["**-dor**, or a nationality: four forms", "{{trabajador}} · {{español}}", "{{trabajadora}} · {{española}}", "{{trabajadores}} · {{españolas}}"]
        ]
      },
      examples: [
        ["Frida es alta y valiente.", "Frida is tall and brave."],
        ["Los chicos son simpáticos.", "The boys are nice."],
        ["Las flores son amarillas.", "The flowers are yellow."]
      ],
      tip: "A mixed group gets the masculine plural: *Ana y Pedro son altos.*"
    },
    {
      title: "Where adjectives go",
      text: `Most adjectives come **after** the noun: {{una casa azul}}, {{un chico simpático}}. Words for *how many* come before: {{muchos libros}}, {{dos perros}}.

**Bueno** and **malo** can go before a noun. Before a masculine singular noun they drop the **-o**: {{un buen amigo}}, {{un mal día}}. **Grande** before a singular noun becomes **gran** and means *great*: {{una gran artista}} (a great artist) but {{una casa grande}} (a big house).`,
      tip: "Use **muy** for *very*: {{muy divertido}}."
    },
    {
      title: "Words to describe",
      text: `Tap each card to flip it.`,
      flash: [
        ["alto · bajo", "tall · short"], ["grande · pequeño", "big · small"], ["simpático · antipático", "nice · mean"], ["trabajador · perezoso", "hard-working · lazy"],
        ["divertido · aburrido", "fun · boring"], ["gracioso", "funny"], ["inteligente", "smart"], ["generoso", "generous"], ["valiente", "brave"], ["creativo", "creative"],
        ["tímido", "shy"], ["serio", "serious"], ["rojo · amarillo · azul", "red · yellow · blue"], ["verde · negro · blanco", "green · black · white"],
        ["morado · rosado", "purple · pink"], ["anaranjado · gris · marrón", "orange · gray · brown"]
      ]
    }
  ],
  tasks: [
    {
      id: "t1", type: "select", title: "Make it match",
      intro: "Choose the adjective that matches the noun.",
      items: [
        { s: "Frida es {creativa|creativo|creativas}." }, { s: "La Casa Azul es {bonita|bonito|bonitas}." }, { s: "Los cuadros son {famosos|famoso|famosas}." },
        { s: "Mis amigas son {simpáticas|simpáticos|simpática}." }, { s: "El perro es {pequeño|pequeña|pequeños}." }, { s: "Las flores son {amarillas|amarillos|amarilla}." },
        { s: "Diego es {trabajador|trabajadora|trabajadores}." }, { s: "Ellas son {inteligentes|inteligente|inteligentas}.", why: "Adjectives ending in **-e** add just **-s**." }
      ],
      hints: ["Find the noun or person first: masculine or feminine? one or more?", "*-e* adjectives have no *-a* form: *inteligente, inteligentes*."]
    },
    {
      id: "t2", type: "cloze", title: "Write the right form",
      intro: "Write the adjective in parentheses in the form that matches.",
      items: [
        "una casa [azul] ((azul))", "unos chicos [altos] ((alto))", "dos mujeres [españolas] ((español))", "los exámenes [fáciles] ((fácil))",
        "una profesora [trabajadora] ((trabajador))", "las camisas [verdes] ((verde))", "un [buen] amigo ((bueno))", "una [gran] artista ((grande, meaning great))"
      ],
      hints: ["Consonant endings add **-es** in the plural: *azul → azules*, *fácil → fáciles*.", "Before a masculine singular noun, *bueno* → **buen**. Before any singular noun, *grande* (great) → **gran**."]
    },
    {
      id: "t3", type: "match", title: "Opposites",
      intro: "Match each adjective with its opposite.",
      left: "Adjetivo", right: "Lo opuesto",
      pairs: [["alto", "bajo"], ["simpático", "antipático"], ["trabajador", "perezoso"], ["divertido", "aburrido"], ["grande", "pequeño"], ["bueno", "malo"], ["fácil", "difícil"], ["nuevo", "viejo"]],
      hints: ["The prefix **anti-** makes an opposite: *simpático / antipático*."]
    },
    {
      id: "t4", type: "order", title: "Build the sentences",
      intro: "Tap the words in order. Remember: most adjectives go after the noun.",
      items: [
        { en: "Frida is a famous artist.", es: "Frida es una artista famosa.", keepCase: true },
        { en: "My friends are very funny.", es: "Mis amigos son muy graciosos." },
        { en: "The yellow flowers are pretty.", es: "Las flores amarillas son bonitas." },
        { en: "He is a good friend.", es: "Es un buen amigo.", extra: ["bueno"], alt: ["Él es un buen amigo."] }
      ],
      hints: ["Noun first, then the adjective: *flores amarillas*.", "Before *amigo*, use **buen**, not *bueno*."]
    },
    {
      id: "t5", type: "listen", title: "Who is it?",
      intro: "Listen to each description and choose the best match.",
      questions: [
        { say: "Mi hermana es alta, morena y muy divertida.", choices: [["a tall, dark-haired, fun sister", true], ["a short, blond, serious sister", false], ["a tall, fun brother", false], ["a short, dark-haired, shy sister", false]] },
        { say: "Mis abuelos son simpáticos y generosos.", choices: [["nice, generous grandparents", true], ["mean, lazy grandparents", false], ["one nice grandfather", false], ["funny, young grandparents", false]] },
        { say: "El gato es pequeño, negro y un poco perezoso.", choices: [["a small, black, slightly lazy cat", true], ["a big, black, hard-working cat", false], ["a small, white, lazy dog", false], ["a small, gray, active cat", false]] },
        { say: "Mi profesor de arte es creativo pero serio.", choices: [["a creative but serious art teacher", true], ["a funny, creative art teacher", false], ["a serious math teacher", false], ["a creative but lazy art student", false]] }
      ],
      hints: ["Tap 🐢 to hear it slowly.", "*Moreno* means dark-haired; *rubio* means blond."]
    },
    {
      id: "t6", type: "errors", title: "Fix the agreement",
      intro: "Each sentence has one adjective that doesn't match. Tap it, then fix it.",
      items: [
        { s: "Las chicas son altos.", bad: "altos", fix: "altas" },
        { s: "Tengo un perro negra.", bad: "negra", fix: "negro" },
        { s: "Es una casa grande y blanco.", bad: "blanco", fix: "blanca" },
        { s: "Mis profesores son simpático.", bad: "simpático", fix: "simpáticos" },
        { s: "Es un bueno amigo.", bad: "bueno", fix: "buen" }
      ],
      hints: ["Look at the noun each adjective describes."]
    },
    {
      id: "s1", type: "speak", title: "Describe it",
      intro: "Listen, record, compare.",
      items: [{ s: "La Casa Azul es muy bonita." }, { s: "Mi mejor amigo es gracioso, inteligente y generoso." }]
    }
  ],
  build: {
    heading: "Un retrato con palabras",
    prompt: `Frida painted portraits. You'll write one. Describe **a person** (yourself, a friend, a family member or a famous person) in **at least 5 sentences**. Use at least **6 different adjectives**, including one plural adjective and one color.`,
    model: `{{Mi abuela se llama Rosa.}} {{Es baja y muy simpática.}} {{Es trabajadora y generosa.}} {{Tiene ojos marrones y una casa blanca con flores rojas.}} {{Sus perros son pequeños y divertidos.}} {{¡Es una gran persona!}}`,
    placeholder: "Mi amigo se llama…",
    reqs: [
      { t: "At least 5 sentences", sentences: 5 },
      { t: "At least 6 different adjectives", min: 6, any: ["alto", "alta", "altos", "altas", "bajo", "baja", "bajos", "bajas", "grande", "grandes", "gran", "pequeño", "pequeña", "pequeños", "pequeñas", "simpático", "simpática", "simpáticos", "simpáticas", "antipático", "antipática", "trabajador", "trabajadora", "trabajadores", "trabajadoras", "perezoso", "perezosa", "perezosos", "perezosas", "divertido", "divertida", "divertidos", "divertidas", "aburrido", "aburrida", "gracioso", "graciosa", "graciosos", "graciosas", "inteligente", "inteligentes", "generoso", "generosa", "generosos", "generosas", "valiente", "valientes", "creativo", "creativa", "creativos", "creativas", "tímido", "tímida", "tímidos", "tímidas", "serio", "seria", "serios", "serias", "bueno", "buena", "buenos", "buenas", "buen", "malo", "mala", "malos", "malas", "mal", "bonito", "bonita", "bonitos", "bonitas", "guapo", "guapa", "guapos", "guapas", "joven", "jóvenes", "viejo", "vieja", "viejos", "viejas", "moreno", "morena", "rubio", "rubia", "pelirrojo", "pelirroja", "fuerte", "fuertes", "amable", "amables", "paciente", "pacientes", "deportista", "famoso", "famosa", "famosos", "famosas", "rojo", "roja", "rojos", "rojas", "amarillo", "amarilla", "amarillos", "amarillas", "azul", "azules", "verde", "verdes", "negro", "negra", "negros", "negras", "blanco", "blanca", "blancos", "blancas", "morado", "morada", "rosado", "rosada", "anaranjado", "anaranjada", "gris", "grises", "marrón", "marrones"] },
      { t: "A plural adjective", any: ["altos", "altas", "bajos", "bajas", "grandes", "pequeños", "pequeñas", "simpáticos", "simpáticas", "trabajadores", "trabajadoras", "divertidos", "divertidas", "graciosos", "graciosas", "inteligentes", "generosos", "generosas", "valientes", "creativos", "creativas", "tímidos", "tímidas", "buenos", "buenas", "bonitos", "bonitas", "jóvenes", "famosos", "famosas", "rojos", "rojas", "amarillos", "amarillas", "azules", "verdes", "negros", "negras", "blancos", "blancas", "grises", "marrones", "amables", "fuertes", "serios", "serias", "perezosos", "perezosas", "viejos", "viejas", "guapos", "guapas"] },
      { t: "A color", any: ["rojo", "roja", "rojos", "rojas", "amarillo", "amarilla", "amarillos", "amarillas", "azul", "azules", "verde", "verdes", "negro", "negra", "negros", "negras", "blanco", "blanca", "blancos", "blancas", "morado", "morada", "morados", "moradas", "rosado", "rosada", "rosados", "rosadas", "anaranjado", "anaranjada", "gris", "grises", "marrón", "marrones"] },
      { t: "Use **es** or **son**", any: ["es", "son"] }
    ]
  },
  reflect: {
    q: "Frida Kahlo painted herself exactly as she was, including the parts other people might call flaws. Which three adjectives would you use to describe yourself? Is there something about you that people don't always see at first?",
    placeholder: "Three words that describe me are…"
  },
  further: {
    id: "x1", type: "translate", title: "Challenge: translate",
    items: [
      { en: "a big house", es: ["una casa grande"] },
      { en: "a great woman", es: ["una gran mujer"] },
      { en: "The blue books are easy.", es: ["los libros azules son fáciles"] },
      { en: "My sisters are very hard-working.", es: ["mis hermanas son muy trabajadoras"] }
    ],
    hints: ["*Great* = **gran** before the noun; *big* = **grande** after it."]
  },
  culture: "**¿Sabías?** Frida Kahlo's husband was **Diego Rivera**, who painted enormous murals. One of them, *Detroit Industry*, covers the walls of a room at the Detroit Institute of Arts.",
  teacher: {
    snags: [
      ["Task 1", "*inteligentas*", "Adjectives ending in *-e* don't have an *-a* form."],
      ["Task 2", "*azuls*, *fácils*", "Consonant endings add *-es*."],
      ["Task 4", "Puts the adjective before the noun", "Most adjectives go after the noun in Spanish."],
      ["Build", "Adjective count stays low", "Check accents (*simpático*, *tímido*) and agreement; only correctly spelled forms count."]
    ],
    factcheck: "Frida Kahlo: born July 6, 1907, in the Casa Azul, Coyoacán; 1925 bus accident; about 55 of her roughly 143 paintings are self-portraits; quote: \"I paint myself because I am so often alone and because I am the subject I know best.\" The Casa Azul opened as the Museo Frida Kahlo in 1958. Rivera's *Detroit Industry Murals* (1932–33) are at the DIA."
  }
};
