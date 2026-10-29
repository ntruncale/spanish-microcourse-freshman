module.exports = {
  num: 4, unit: 1, slug: "m04-numeros-fechas", minutes: 45,
  title: "Los números y las fechas",
  subtitle: "Numbers 0–100, days of the week, months, and dates",
  lede: "Numbers, days and months let you give your age, your phone number and your birthday. Some of them need accent marks, so watch closely.",
  recap: "Last time you learned greetings, introductions and the subject pronouns, including when to use **tú** and when to use **usted**.",
  context: {
    title: "El Grito de Dolores",
    place: "Dolores Hidalgo, México",
    text: `Before dawn on **September 16, 1810**, a priest named **Miguel Hidalgo** rang the church bell in the small town of Dolores, Mexico. When the townspeople gathered, he called on them to rise up against Spanish rule. His speech became known as **el Grito de Dolores**, "the Cry of Dolores," and it started Mexico's War of Independence.

Every year on the night of September 15, the president of Mexico rings that same bell in Mexico City and repeats the *grito* to a huge crowd. The next day, {{el dieciséis de septiembre}}, is Mexico's Independence Day.

Notice how the date is said in Spanish: the day comes first, then the month, and the month is written with a **lowercase** letter: {{el dieciséis de septiembre de mil ochocientos diez|el dieciséis de septiembre de mil ochocientos diez}}.`
  },
  learn: [
    {
      title: "Numbers 0–30",
      text: `Numbers 16–29 are written as one word. Watch the accent marks on **dieciséis**, **veintidós**, **veintitrés** and **veintiséis**.`,
      table: {
        rows: [
          ["0 {{cero}}", "6 {{seis}}", "12 {{doce}}", "18 {{dieciocho}}", "24 {{veinticuatro}}", "30 {{treinta}}"],
          ["1 {{uno}}", "7 {{siete}}", "13 {{trece}}", "19 {{diecinueve}}", "25 {{veinticinco}}", ""],
          ["2 {{dos}}", "8 {{ocho}}", "14 {{catorce}}", "20 {{veinte}}", "26 {{veintiséis}}", ""],
          ["3 {{tres}}", "9 {{nueve}}", "15 {{quince}}", "21 {{veintiuno}}", "27 {{veintisiete}}", ""],
          ["4 {{cuatro}}", "10 {{diez}}", "16 {{dieciséis}}", "22 {{veintidós}}", "28 {{veintiocho}}", ""],
          ["5 {{cinco}}", "11 {{once}}", "17 {{diecisiete}}", "23 {{veintitrés}}", "29 {{veintinueve}}", ""]
        ]
      }
    },
    {
      title: "Numbers 31–100",
      text: `From 31 on, numbers are three words joined by **y** (*and*): {{treinta y uno}}, {{cuarenta y cinco}}, {{noventa y nueve}}. 100 is {{cien}}.

Before a masculine noun, *uno* becomes **un** (and *veintiuno* becomes **veintiún**): {{veintiún años}}. Before a feminine noun it's **una**: {{treinta y una sillas}}.`,
      table: {
        rows: [
          ["30 {{treinta}}", "50 {{cincuenta}}", "70 {{setenta}}", "90 {{noventa}}"],
          ["40 {{cuarenta}}", "60 {{sesenta}}", "80 {{ochenta}}", "100 {{cien}}"]
        ]
      },
      tip: "*Sesenta* (60) and *setenta* (70) are easy to mix up. **Se**senta has the *s* of **se**is; **se**tenta has the *t* of sie**t**e."
    },
    {
      title: "Days, months and dates",
      text: `Days and months are **not capitalized** in Spanish. The week starts on Monday. To say *on Monday*, use **el**: {{el lunes}}. For *on Mondays* (every Monday), use **los**: {{los lunes}}.

A date is **el** + number + **de** + month: {{el cuatro de julio}}. The first of the month is usually **el primero**: {{el primero de mayo}}.`,
      flash: [
        ["lunes", "Monday"], ["martes", "Tuesday"], ["miércoles", "Wednesday"], ["jueves", "Thursday"], ["viernes", "Friday"], ["sábado", "Saturday"], ["domingo", "Sunday"],
        ["enero", "January"], ["febrero", "February"], ["marzo", "March"], ["abril", "April"], ["mayo", "May"], ["junio", "June"],
        ["julio", "July"], ["agosto", "August"], ["septiembre", "September"], ["octubre", "October"], ["noviembre", "November"], ["diciembre", "December"]
      ],
      examples: [
        ["¿Qué día es hoy? Hoy es jueves.", "What day is today? Today is Thursday."],
        ["¿Cuál es la fecha de hoy? Es el diez de octubre.", "What's today's date? It's October 10th."],
        ["Mi cumpleaños es el veintidós de marzo.", "My birthday is March 22nd."],
        ["Tengo catorce años.", "I'm fourteen years old."]
      ]
    }
  ],
  tasks: [
    {
      id: "t1", type: "listen", title: "Which number?",
      intro: "Listen to each number and choose it.",
      questions: [
        { say: "quince", choices: [["5", false], ["15", true], ["50", false], ["55", false]] },
        { say: "sesenta y siete", choices: [["67", true], ["76", false], ["57", false], ["77", false]] },
        { say: "veintitrés", choices: [["13", false], ["20", false], ["23", true], ["32", false]] },
        { say: "noventa y cuatro", choices: [["14", false], ["49", false], ["84", false], ["94", true]] },
        { say: "setenta", choices: [["16", false], ["60", false], ["70", true], ["17", false]] },
        { say: "doce", choices: [["2", false], ["10", false], ["12", true], ["20", false]] }
      ],
      hints: ["Tap 🐢 to hear it slowly.", "*Se*senta = 60 (like *seis*); *se*tenta = 70 (like *siete*)."]
    },
    {
      id: "t2", type: "cloze", title: "Write the numbers",
      intro: "Write each number as a word. Watch the accent marks.",
      pick: 8,
      items: [
        { s: "16 = [dieciséis]", say: "dieciséis" }, { s: "22 = [veintidós]", say: "veintidós" }, { s: "14 = [catorce]", say: "catorce" }, { s: "35 = [treinta y cinco]", say: "treinta y cinco" },
        { s: "11 = [once]", say: "once" }, { s: "48 = [cuarenta y ocho]", say: "cuarenta y ocho" }, { s: "26 = [veintiséis]", say: "veintiséis" }, { s: "100 = [cien]", say: "cien" },
        { s: "70 = [setenta]", say: "setenta" }, { s: "23 = [veintitrés]", say: "veintitrés" }
      ],
      hints: ["16–29 are one word: *dieci-*, *veinti-*.", "Numbers that end in a stressed **-dós**, **-trés** or **-séis** need an accent mark.", "From 31 on: tens + **y** + ones, as three words."]
    },
    {
      id: "t3", type: "match", title: "Days and months",
      intro: "Tap a Spanish word (you'll hear it), then its English meaning.",
      pairs: [["lunes", "Monday"], ["miércoles", "Wednesday"], ["jueves", "Thursday"], ["sábado", "Saturday"], ["domingo", "Sunday"], ["enero", "January"], ["junio", "June"], ["julio", "July"], ["septiembre", "September"], ["diciembre", "December"]],
      hints: ["*Junio* (June) and *julio* (July) look alike. *Junio* has an **n** like *June*; *julio* has an **l** like *July*."]
    },
    {
      id: "t4", type: "errors", title: "Fix the dates",
      intro: "Each sentence has one mistake. Tap the wrong word, then type it correctly.",
      items: [
        { s: "Hoy es Martes.", bad: "Martes", fix: "martes", why: "Days of the week are lowercase." },
        { s: "Mi cumpleaños es el cinco de Abril.", bad: "Abril", fix: "abril", why: "Months are lowercase." },
        { s: "No hay clases el domingos.", bad: "el", fix: "los", why: "*Every Sunday* (plural) is **los domingos**." },
        { s: "Tengo dieciseis años.", bad: "dieciseis", fix: "dieciséis" },
        { s: "Mi hermana tiene veintidos años.", bad: "veintidos", fix: "veintidós" }
      ],
      hints: ["Look at capital letters first.", "Numbers ending in a stressed *-dós*, *-trés* or *-séis* need an accent mark."]
    },
    {
      id: "t5", type: "dictation", title: "Listen and write the date",
      intro: "Write each date in Spanish, with words for the numbers.",
      pick: 4,
      items: ["el doce de octubre", "el primero de enero", "el veinticinco de diciembre", "el catorce de febrero", "el cuatro de julio", "el treinta y uno de agosto"],
      hints: ["The pattern is *el* + number + *de* + month.", "Months are lowercase."]
    },
    {
      id: "t6", type: "translate", title: "Say it in Spanish",
      intro: "Translate. Write numbers as words.",
      items: [
        { en: "Today is Friday.", es: ["hoy es viernes"] },
        { en: "My birthday is May 3rd.", es: ["mi cumpleaños es el tres de mayo"] },
        { en: "I'm fifteen years old.", es: ["[yo] tengo quince años"], why: "Age uses **tengo** … **años**: *I have … years*." },
        { en: "On Saturdays I don't have school.", es: ["los sábados no tengo {clases|escuela|colegio|clase}"] }
      ],
      hints: ["*My birthday* = *mi cumpleaños* (with ñ).", "Age: **Tengo** + number + **años**.", "*On Saturdays* (every Saturday) = **los sábados**."]
    },
    {
      id: "s1", type: "speak", title: "Count out loud",
      intro: "Say each one. Record and compare.",
      items: [{ s: "Mi número de teléfono es cinco, setenta, veintiséis, cuarenta y ocho, noventa." }, { s: "Hoy es el dieciséis de septiembre." }, { s: "Tengo catorce años." }]
    }
  ],
  build: {
    heading: "Mis fechas importantes",
    prompt: `Write **5 or more sentences** about dates that matter to you: your birthday, a family member's birthday, a holiday, and what day today is. Write every number **as a word**, and remember that days and months are lowercase.`,
    model: `{{Hoy es miércoles, el diez de octubre.}} {{Mi cumpleaños es el veintidós de marzo.}} {{Tengo catorce años.}} {{El cumpleaños de mi mamá es el primero de junio.}} {{Mi día favorito es el sábado.}} {{El Día de Acción de Gracias es en noviembre.}}`,
    placeholder: "Hoy es…",
    reqs: [
      { t: "At least 5 sentences", sentences: 5 },
      { t: "Today's day: **Hoy es…**", any: ["hoy es"] },
      { t: "Your birthday: **Mi cumpleaños es…**", any: ["mi cumpleaños es"] },
      { t: "A date with **el … de** + month", re: "\\bel\\s+\\p{L}+(\\s+y\\s+\\p{L}+)?\\s+de\\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)\\b", min: 2 },
      { t: "Your age with **tengo … años**", re: "\\btengo\\s+[\\p{L}\\s]+años\\b" },
      { t: "No numerals: write numbers as words", re: "^[^0-9]*$" }
    ]
  },
  reflect: {
    q: "Mexicans remember *el dieciséis de septiembre* every year. Which date matters most to your family, and why? How does your family remember it or celebrate it?",
    placeholder: "A date that matters to my family is…"
  },
  further: {
    id: "x1", type: "quiz", title: "Challenge: math in Spanish",
    questions: [
      { q: "{{veinte más quince}} (+) = ?", choices: [["treinta y cinco", true], ["veinticinco", false], ["cuarenta y cinco", false], ["treinta", false]] },
      { q: "{{cien menos treinta}} (−) = ?", choices: [["setenta", true], ["sesenta", false], ["ochenta", false], ["noventa", false]] },
      { q: "{{once por seis}} (×) = ?", choices: [["sesenta y seis", true], ["setenta y seis", false], ["diecisiete", false], ["cincuenta y seis", false]] },
      { q: "{{noventa entre tres}} (÷) = ?", choices: [["treinta", true], ["trece", false], ["treinta y tres", false], ["noventa y tres", false]] }
    ]
  },
  culture: "**¿Sabías?** In Spanish-speaking countries, dates are written day first: **16/9/1810** means September 16, 1810. So 4/7 is the 4th of July in Spain, but April 7 in the United States.",
  teacher: {
    snags: [
      ["Task 1", "Mixes 60 and 70", "Which one sounds like *seis*? Which like *siete*?"],
      ["Task 2", "Writes *veinte y dos*", "16–29 are written as one word."],
      ["Build", "The *no numerals* line won't check", "Find any digit (like 15) and write it as a word."]
    ],
    factcheck: "Miguel Hidalgo y Costilla issued the Grito de Dolores in the early morning of September 16, 1810. The president reenacts the Grito on the night of September 15 from the National Palace, ringing the original bell (moved to Mexico City in 1896)."
  }
};
