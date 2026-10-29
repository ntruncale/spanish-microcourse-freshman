module.exports = {
  num: 14, unit: 3, slug: "m14-tener", minutes: 45,
  title: "El verbo tener",
  subtitle: "Tener, tener expressions, tener que, and saying no",
  lede: "*Tener* means *to have*, but Spanish also uses it for age, hunger, thirst, fear and much more. It's one of the most useful verbs you'll learn.",
  recap: "Last time you learned the question words (**qué, quién, cuál, cuándo, dónde, cómo, cuánto, por qué**) and how to order a question.",
  context: {
    title: "Esclavo de los esclavos",
    place: "Cartagena de Indias, Colombia",
    text: `In the 1600s, Cartagena, on the Caribbean coast of Colombia, was one of the biggest ports in the Spanish slave trade. Ships arrived packed with enslaved African men, women and children who had crossed the ocean in terrible conditions.

A young Jesuit from Spain, **San Pedro Claver**, arrived in Cartagena in 1610 and spent nearly forty years among them. When a ship came in, he hurried to the docks with bread, water, fruit and medicine. He knew the people coming off those ships **tenían hambre, sed y miedo**: they were hungry, thirsty and afraid. He cared for the sick, learned to communicate through interpreters, and treated each person with dignity.

In **1622**, when he made his final vows as a Jesuit, he signed his name with a promise: *Petrus Claver, aethiopum semper servus*, "Peter Claver, servant of the Africans forever." Today he is the patron saint of human rights in Colombia.`
  },
  learn: [
    {
      title: "The forms of tener",
      text: `**Tener** is irregular: the *yo* form is **tengo**, and the stem changes to **tien-** in four forms.`,
      conj: [{ inf: "tener", en: "to have", forms: ["**tengo**", "t**ie**nes", "t**ie**ne", "tenemos", "tenéis", "t**ie**nen"] }],
      examples: [
        ["Tengo dos hermanos.", "I have two siblings."],
        ["¿Cuántos años tienes? Tengo catorce años.", "How old are you? I'm fourteen."],
        ["Mi escuela tiene una capilla.", "My school has a chapel."],
        ["Tenemos clase de español hoy.", "We have Spanish class today."]
      ],
      tip: "For age, English says *I am 14*. Spanish says *I have 14 years*: **Tengo catorce años.** Never *soy catorce*."
    },
    {
      title: "Tener expressions",
      text: `Many feelings that English describes with *to be* use **tener** + a noun in Spanish. Because they're nouns, *very* is **mucho** or **mucha**: {{Tengo mucha hambre.}}`,
      flash: [
        ["tener hambre", "to be hungry"], ["tener sed", "to be thirsty"], ["tener frío", "to be cold"], ["tener calor", "to be hot"], ["tener sueño", "to be sleepy"],
        ["tener miedo", "to be afraid"], ["tener prisa", "to be in a hurry"], ["tener razón", "to be right"], ["tener suerte", "to be lucky"], ["tener cuidado", "to be careful"],
        ["tener ganas de + infinitive", "to feel like (doing)"]
      ],
      tip: "**Hace frío** is the weather (*it's cold out*). **Tengo frío** is how *you* feel (*I'm cold*)."
    },
    {
      title: "Tener que, and saying no",
      text: `**Tener que** + infinitive means *to have to*: {{Tengo que estudiar.}} (*I have to study.*)

To make any sentence negative, put **no** before the verb: {{No tengo hambre.}} Spanish also uses *double negatives*, which are correct here (not in English!):`,
      examples: [
        ["No tengo nada.", "I don't have anything. (I have nothing.)"],
        ["No hay nadie en casa.", "There's nobody at home."],
        ["Nadie tiene la tarea.", "Nobody has the homework."],
        ["Nunca tengo tiempo.", "I never have time."],
        ["No tenemos clase nunca los domingos.", "We never have class on Sundays."]
      ],
      tip: "**nada** = nothing · **nadie** = nobody · **nunca** = never. If they come *after* the verb, put **no** before the verb."
    }
  ],
  tasks: [
    {
      id: "t1", type: "conj", title: "Conjugate tener",
      intro: "Write every form of *tener*.",
      verbs: [{ inf: "tener", en: "to have", forms: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"] }],
      hints: ["*Yo* is irregular: **tengo**.", "*Tú, él* and *ellos* change **e** to **ie**: *tienes, tiene, tienen*. Nosotros and vosotros don't change."]
    },
    {
      id: "t2", type: "match", title: "How do you feel?",
      intro: "Match each Spanish expression (tap to hear it) with the situation.",
      left: "Expresión", right: "Situación",
      pairs: [["Tengo hambre.", "I haven't eaten all day."], ["Tengo sed.", "I just ran a mile in the sun."], ["Tengo sueño.", "It's midnight and my eyes are closing."], ["Tengo frío.", "I forgot my coat in January."], ["Tengo miedo.", "There's a strange noise in the dark."], ["Tengo prisa.", "The bus leaves in one minute!"], ["Tengo razón.", "Two plus two is four, just like I said."], ["Tengo suerte.", "I found twenty dollars on the sidewalk."]],
      hints: ["Look at the flashcards in Idea 2."]
    },
    {
      id: "t3", type: "select", title: "Tener, ser or hacer?",
      intro: "Choose the right verb for each sentence.",
      items: [
        { s: "Yo {tengo|soy|hago} catorce años.", why: "Age uses **tener**." },
        { s: "En enero {hace|tiene|es} frío.", why: "Weather uses **hace**." },
        { s: "Me pongo un suéter porque {tengo|hace|soy} frío.", en: "I put on a sweater because I'm cold." },
        { s: "Mi hermana {tiene|es|hace} miedo de los perros." },
        { s: "Nosotros {tenemos|somos|hacemos} prisa." },
        { s: "Usted {tiene|es|hace} razón, profesor." },
        { s: "Ellos {tienen|son|hacen} mucha sed." },
        { s: "El perro {es|tiene|hace} muy grande.", why: "A description uses **ser**." }
      ],
      hints: ["Feelings like hunger, fear and being in a hurry use **tener**.", "*Hace* is for weather; *ser* is for what someone is like."]
    },
    {
      id: "t4", type: "cloze", title: "What do they have to do?",
      intro: "Write the form of *tener* in the first blank. Some sentences have a second blank for the infinitive.",
      items: [
        "Yo [tengo] que estudiar para el examen.", "Tú [tienes] que limpiar tu cuarto.", "Mi papá [tiene] que trabajar el sábado.",
        "Nosotros [tenemos] que [leer] ((read)) un libro.", "Mis amigos [tienen] que correr mucho.", "¿Vosotros [tenéis] que [escribir] ((write)) una carta?"
      ],
      hints: ["After **tener que**, the next verb is an **infinitive** (*-ar, -er, -ir*), not conjugated."]
    },
    {
      id: "t5", type: "listen", title: "What's wrong?",
      intro: "Listen to each person. What's going on?",
      questions: [
        { say: "Tengo mucha sed. ¿Hay agua?", choices: [["They want something to drink.", true], ["They want to sleep.", false], ["They're scared.", false], ["They're late.", false]] },
        { say: "¡Ay, tengo prisa! El autobús llega en un minuto.", choices: [["They're in a hurry for the bus.", true], ["They're hungry.", false], ["They lost the bus.", false], ["They're cold.", false]] },
        { say: "No tengo frío; tengo calor. Hace mucho sol.", choices: [["They're hot because it's sunny.", true], ["They're cold.", false], ["It's raining.", false], ["They're thirsty.", false]] },
        { say: "Mañana tenemos que trabajar, pero hoy no tenemos nada que hacer.", choices: [["They have nothing to do today.", true], ["They have to work today.", false], ["They never work.", false], ["They have a test tomorrow.", false]] }
      ],
      hints: ["Tap 🐢 to hear it slowly. Listen for the noun after *tengo*."]
    },
    {
      id: "t6", type: "translate", title: "Say it in Spanish",
      intro: "Translate. Use *tener*.",
      items: [
        { en: "Are you (tú) hungry?", es: ["¿[tú] tienes hambre?"] },
        { en: "I'm fifteen years old.", es: ["[yo] tengo quince años"] },
        { en: "They have to work.", es: ["[ellos] tienen que trabajar", "[ellas] tienen que trabajar"] },
        { en: "I don't have anything.", es: ["[yo] no tengo nada"], why: "Double negative: **no tengo nada**." },
        { en: "We're very sleepy.", es: ["[nosotros] tenemos mucho sueño", "[nosotras] tenemos mucho sueño"], why: "*Very* + a tener expression = **mucho / mucha**." }
      ],
      hints: ["*Sueño* is masculine: **mucho sueño**. *Hambre* is feminine: **mucha hambre**."]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Listen, record, compare.",
      items: [{ s: "¿Cuántos años tienes? Tengo catorce años." }, { s: "Tengo mucha hambre y un poco de sueño." }, { s: "No tengo nada que hacer." }]
    }
  ],
  build: {
    heading: "Mi semana",
    prompt: `Write **at least 5 sentences** about your week: what you have, what you have to do, and how you feel. Use at least **two forms of tener**, one **tener que** + infinitive, one **tener expression** (*hambre, sueño, prisa…*), and one **negative** sentence.`,
    model: `{{Tengo catorce años y tengo una semana muy ocupada.}} {{El lunes tengo que estudiar para un examen.}} {{Mis amigos y yo tenemos práctica de fútbol el miércoles.}} {{Después de la práctica siempre tengo mucha hambre.}} {{El viernes no tengo tarea.}}`,
    placeholder: "Esta semana tengo…",
    reqs: [
      { t: "At least 5 sentences", sentences: 5 },
      { t: "Two different forms of **tener**", any: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"], min: 2 },
      { t: "**tener que** + infinitive", re: "\\b(tengo|tienes|tiene|tenemos|tenéis|tienen)\\s+que\\s+\\p{L}+(ar|er|ir)\\b" },
      { t: "A **tener** expression", re: "\\b(tengo|tienes|tiene|tenemos|tenéis|tienen)\\s+(mucho\\s+|mucha\\s+|un\\s+poco\\s+de\\s+)?(hambre|sed|frío|calor|sueño|miedo|prisa|razón|suerte|cuidado|ganas)\\b" },
      { t: "A negative with **no** (or *nunca, nada, nadie*)", re: "\\b(no|nunca|nadie|nada)\\b" }
    ]
  },
  reflect: {
    q: "San Pedro Claver noticed that the people coming off the ships *tenían hambre, sed y miedo*, and he answered with bread, water and kindness. Who in your school or town might be \"hungry\" or \"afraid\" in some way, even if you can't see it at first? What is one thing you could do this week?",
    placeholder: "Someone who might need help is…"
  },
  further: {
    id: "x1", type: "errors", title: "Challenge: fix the mistakes",
    intro: "Tap the wrong word, then type the correct one.",
    items: [
      { s: "Soy quince años.", bad: "Soy", fix: "Tengo" },
      { s: "Tengo muy hambre.", bad: "muy", fix: "mucha" },
      { s: "Ella tene un perro.", bad: "tene", fix: "tiene" },
      { s: "No tengo algo.", bad: "algo", fix: "nada" },
      { s: "Tenemos que estudiamos.", bad: "estudiamos", fix: "estudiar" }
    ]
  },
  culture: "**¿Sabías?** September 9, the feast of San Pedro Claver, is Colombia's **National Day of Human Rights**. His body rests in the church named after him in the old walled city of Cartagena.",
  teacher: {
    snags: [
      ["Task 1", "*teno*, *tenes*", "*Tener* is irregular: *tengo, tienes…*"],
      ["Task 3", "Uses *hace* for *I'm cold*", "Is it the weather, or how a person feels?"],
      ["Task 6", "*muy hambre*", "*Hambre* is a noun: use *mucha*."],
      ["Context", "Students may have questions about the slave trade", "This is a good moment for the teacher to connect to the school's mission; the story focuses on Claver's care for each person."]
    ],
    factcheck: "Peter Claver (1580–1654), Catalan Jesuit, arrived in Cartagena in 1610, was ordained in 1616 and took final vows in 1622, signing \"Petrus Claver, aethiopum semper servus.\" Canonized 1888. Colombia's Día Nacional de los Derechos Humanos is September 9 (his feast). His remains are in the Iglesia de San Pedro Claver, Cartagena."
  }
};
