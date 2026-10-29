module.exports = {
  num: 5, unit: 1, slug: "m05-hora-tiempo", minutes: 45,
  title: "La hora y el tiempo",
  subtitle: "Telling time and talking about the weather",
  lede: "¿Qué hora es? ¿Qué tiempo hace? Two of the most useful questions in any language, and two patterns that work differently from English.",
  recap: "Last time you learned numbers 0–100, the days of the week, the months, and how to say a date: **el cuatro de julio**.",
  context: {
    title: "Las doce uvas",
    place: "La Puerta del Sol, Madrid",
    text: `On New Year's Eve, thousands of people crowd into **la Puerta del Sol**, a famous square in the center of Madrid, and millions more watch on TV. Everyone holds **twelve grapes**. As the big clock on the old post office strikes midnight, people eat one grape with each of the twelve chimes, one for good luck in each month of the new year.

The custom became popular around **1909**, when farmers near Alicante had a huge grape harvest and needed to sell it. Now *las doce uvas* are eaten across Spain and much of Latin America. It's harder than it sounds: the chimes come about three seconds apart!

When the clock finishes, people cheer {{¡Feliz Año Nuevo!}} and say what time it is: {{Son las doce en punto.}}`
  },
  learn: [
    {
      title: "¿Qué hora es? What time is it?",
      text: `Use **Es la una** for one o'clock (*una* is singular) and **Son las…** for every other hour. Add minutes with **y** (*and*), and before the next hour use **menos** (*minus*).`,
      table: {
        head: ["Time", "Spanish"],
        rows: [
          ["1:00", "{{Es la una.}}"],
          ["2:00", "{{Son las dos.}}"],
          ["3:05", "{{Son las tres y cinco.}}"],
          ["4:15", "{{Son las cuatro y cuarto.}} (*a quarter*) or {{Son las cuatro y quince.}}"],
          ["5:30", "{{Son las cinco y media.}} (*half*) or {{Son las cinco y treinta.}}"],
          ["6:45", "{{Son las siete menos cuarto.}} or {{Son las seis y cuarenta y cinco.}}"],
          ["8:50", "{{Son las nueve menos diez.}}"],
          ["12:00", "{{Es mediodía.}} (noon) · {{Es medianoche.}} (midnight)"]
        ],
        caption: "Add {{de la mañana}} (a.m.), {{de la tarde}} (afternoon) or {{de la noche}} (evening, night). **En punto** means *exactly, on the dot*."
      }
    },
    {
      title: "¿A qué hora? At what time?",
      text: `To say *at* a time, use **a la** or **a las**.`,
      examples: [
        ["¿A qué hora es la clase de español?", "At what time is Spanish class?"],
        ["Es a las nueve y media.", "It's at nine thirty."],
        ["Almuerzo a la una.", "I eat lunch at one."],
        ["El partido es a las siete de la tarde.", "The game is at seven in the evening."]
      ],
      tip: "Don't mix them up: **Son las ocho** = *It is eight o'clock.* **A las ocho** = *At eight o'clock.*"
    },
    {
      title: "¿Qué tiempo hace? What's the weather like?",
      text: `Many weather expressions use **hace** (literally *it makes*). Rain and snow have their own verbs.`,
      flash: [
        ["Hace calor.", "It's hot."], ["Hace frío.", "It's cold."], ["Hace sol.", "It's sunny."], ["Hace viento.", "It's windy."],
        ["Hace fresco.", "It's cool."], ["Hace buen tiempo.", "The weather is nice."], ["Hace mal tiempo.", "The weather is bad."], ["Llueve.", "It's raining."],
        ["Nieva.", "It's snowing."], ["Está nublado.", "It's cloudy."], ["la primavera", "spring"], ["el verano", "summer"], ["el otoño", "fall"], ["el invierno", "winter"]
      ],
      tip: "Use **mucho** for *very*: {{Hace mucho frío.}} (*It's very cold.*) Not *muy*, because *frío* here is a noun: *it makes much cold*."
    }
  ],
  tasks: [
    {
      id: "t1", type: "listen", title: "What time is it?",
      intro: "Listen and choose the time you hear.",
      questions: [
        { say: "Son las tres y cuarto.", choices: [["3:15", true], ["3:30", false], ["3:45", false], ["4:15", false]] },
        { say: "Es la una y media.", choices: [["1:15", false], ["1:30", true], ["12:30", false], ["2:30", false]] },
        { say: "Son las ocho menos diez.", choices: [["7:50", true], ["8:10", false], ["8:50", false], ["10:08", false]] },
        { say: "Son las once en punto.", choices: [["1:00", false], ["10:00", false], ["11:00", true], ["11:30", false]] },
        { say: "Son las seis y veinte de la tarde.", choices: [["2:06 p.m.", false], ["6:20 a.m.", false], ["6:20 p.m.", true], ["7:20 p.m.", false]] }
      ],
      hints: ["**menos** means *before* the hour: *las ocho menos diez* is 10 minutes before 8.", "**cuarto** = 15 minutes; **media** = 30 minutes."]
    },
    {
      id: "t2", type: "select", title: "Es or son? A la or a las?",
      intro: "Choose the right word or phrase.",
      items: [
        { s: "{Es|Son} la una y diez.", why: "*La una* is singular, so **es**." },
        { s: "{Son|Es} las cinco de la tarde." },
        { s: "La clase de arte es {a las|a la|las} nueve." },
        { s: "Almuerzo {a la|a las|la} una." },
        { s: "Son las dos y {media|medio|mitad}." },
        { s: "¿{Qué|Cuál|Cómo} hora es?" },
        { s: "En el invierno hace mucho {frío|calor|sol}.", en: "In the winter it's very cold." },
        { s: "Hoy {llueve|hace lluvia|es lluvia}.", en: "Today it's raining." }
      ],
      hints: ["Only *one o'clock* uses **es la**. All other hours use **son las**.", "*At* a time: **a la una**, **a las dos**, **a las tres**…"]
    },
    {
      id: "t3", type: "cloze", title: "Write the time",
      intro: "Complete each time in words.",
      items: [
        { s: "2:15 → Son las [dos] y [cuarto|quince].", say: "Son las dos y cuarto." },
        { s: "7:30 → Son las [siete] y [media|treinta].", say: "Son las siete y media." },
        { s: "1:10 → [Es] la una y diez.", say: "Es la una y diez." },
        { s: "9:50 → Son las [diez] menos [diez].", say: "Son las diez menos diez." },
        { s: "12:00 p.m. → Es [mediodía].", say: "Es mediodía." },
        { s: "4:00 → Son las cuatro en [punto].", say: "Son las cuatro en punto." }
      ],
      hints: ["For 9:50, think *ten minutes before ten*.", "*Noon* = *mediodía* (with an accent on the í)."]
    },
    {
      id: "t4", type: "match", title: "The weather",
      intro: "Tap a Spanish phrase (you'll hear it), then its meaning.",
      pairs: [["Hace calor.", "It's hot."], ["Hace frío.", "It's cold."], ["Hace viento.", "It's windy."], ["Llueve.", "It's raining."], ["Nieva.", "It's snowing."], ["Está nublado.", "It's cloudy."], ["Hace buen tiempo.", "The weather is nice."], ["el otoño", "fall"], ["el verano", "summer"]],
      hints: ["*Nieve* is snow; *nieva* means *it's snowing*.", "*Verano* is summer; *invierno* is winter."]
    },
    {
      id: "t5", type: "errors", title: "Fix the mistakes",
      intro: "Tap the wrong word in each sentence, then type the correct word.",
      items: [
        { s: "Es las tres de la tarde.", bad: "Es", fix: "Son", why: "*Las tres* is plural." },
        { s: "Son la una y cuarto.", bad: "Son", fix: "Es" },
        { s: "Hoy está calor.", bad: "está", fix: "hace", why: "Heat, cold, sun and wind use **hace**." },
        { s: "La clase es a la dos.", bad: "la", fix: "las" },
        { s: "Hace muy frío.", bad: "muy", fix: "mucho", why: "With *hace* + noun, use **mucho**." }
      ],
      hints: ["*Es la* only for one o'clock.", "*Hace* + *frío* / *calor* / *sol* / *viento*."]
    },
    {
      id: "t6", type: "translate", title: "Say it in Spanish",
      intro: "Translate. Write numbers as words.",
      items: [
        { en: "It's two thirty.", es: ["son las dos y {media|treinta}"] },
        { en: "It's very hot today.", es: ["hoy hace mucho calor", "hace mucho calor hoy"] },
        { en: "The game is at eight.", es: ["el partido es a las ocho"] },
        { en: "It's cloudy and it's raining.", es: ["está nublado y llueve"] },
        { en: "In the spring it's cool.", es: ["en [la] primavera hace fresco"] }
      ],
      hints: ["*At eight* = *a las ocho*.", "*Cloudy* uses **está**: *está nublado*."]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Listen, record, compare.",
      items: [{ s: "¿Qué hora es? Son las siete menos cuarto." }, { s: "Hoy hace sol, pero hace mucho viento." }, { s: "¡Feliz Año Nuevo!" }]
    }
  ],
  build: {
    heading: "El tiempo y mi día",
    prompt: `Write a short weather report for today, then give **two times** in your day (for example, when school starts and when you eat lunch). Write at least **5 sentences**, and write all numbers as words.`,
    model: `{{Hoy es lunes.}} {{Hace fresco y está nublado, pero no llueve.}} {{En el otoño hace mucho viento aquí.}} {{Las clases empiezan a las ocho menos cuarto.}} {{Almuerzo a las doce y media.}} {{Ahora son las tres de la tarde.}}`,
    placeholder: "Hoy hace…",
    reqs: [
      { t: "At least 5 sentences", sentences: 5 },
      { t: "Two weather expressions", any: ["hace calor", "hace frío", "hace sol", "hace viento", "hace fresco", "hace buen tiempo", "hace mal tiempo", "hace mucho calor", "hace mucho frío", "hace mucho viento", "hace mucho sol", "llueve", "nieva", "está nublado"], min: 2 },
      { t: "A season", any: ["primavera", "verano", "otoño", "invierno"] },
      { t: "Two times with **a la / a las**", re: "\\ba\\s+las?\\s+\\p{L}+", min: 2 },
      { t: "No numerals: write numbers as words", re: "^[^0-9]*$" }
    ]
  },
  reflect: {
    q: "At midnight on New Year's Eve, a whole country stops for twelve seconds to eat grapes and hope for the year ahead. St. Ignatius asked people to stop twice a day for a short prayer called the *Examen*. When in your day could you stop for one minute to notice what's going well? What would you notice today?",
    placeholder: "A good time for me to pause is…"
  },
  further: {
    id: "x1", type: "dictation", title: "Challenge: write the times",
    intro: "Write each time you hear, in words.",
    items: ["Son las diez y veinticinco.", "Es la una menos cuarto.", "Son las doce y media de la noche.", "Son las cinco menos veinte."]
  },
  culture: "**¿Sabías?** Spain uses the same time zone as Germany and France, even though it's far to the west. That's one reason Spaniards eat dinner late: often at **las nueve** or **las diez de la noche**.",
  teacher: {
    snags: [
      ["Task 1", "Reads *las ocho menos diez* as 8:10", "*Menos* means *minus*. Ten minutes *before* eight is…?"],
      ["Task 2", "Picks *son* for *la una*", "Is *one* singular or plural?"],
      ["Task 5", "Doesn't see the *muy / mucho* mistake", "Read the last tip in Idea 3."]
    ],
    factcheck: "The Puerta del Sol clock is on the Real Casa de Correos. Grape-eating at New Year's is documented in Madrid in the 1880s and became widespread after the large 1909 Alicante harvest. Spain has used Central European Time since 1940."
  }
};
