module.exports = {
  num: 30, unit: 6, slug: "m30-preterito-irregular-repaso", minutes: 50,
  title: "El pretérito irregular y el repaso final",
  subtitle: "Fui, fue, hice, tuve, estuve… and a look back at the whole year",
  lede: "The most common verbs are irregular in the past too. Learn six of them, then put the whole year together in one last piece of writing.",
  recap: "Last time you learned the regular preterite: **hablé, hablaste, habló… comí, comiste, comió…** and the yo spelling changes **busqué, llegué, empecé**.",
  context: {
    title: "Una bala de cañón",
    place: "Pamplona y Loyola, España",
    text: `On **May 20, 1521**, a French army attacked the city of Pamplona, in northern Spain. A 30-year-old Basque soldier named **Íñigo de Loyola** convinced the few defenders not to surrender. During the battle, a **cannonball** shattered his right leg. The French soldiers admired his courage and carried him home to the family castle in Loyola.

His recovery took months. Bored in bed, he asked for adventure stories about knights. The only books in the house were a life of Christ and stories of the saints. He read them, and slowly he noticed something: dreams of fame left him empty, but dreams of serving God like the saints left him **peaceful and happy**. That discovery changed his life, and the lives of millions of students in Jesuit schools, including yours.

You can tell his story with the preterite: {{Fue soldado. Estuvo en Pamplona. Tuvo una herida grave. Leyó libros de santos. Hizo un cambio en su vida. Fue a Montserrat y a Manresa.}}`
  },
  learn: [
    {
      title: "Ir and ser: the same forms!",
      text: `In the preterite, **ir** and **ser** have **identical** forms. The sentence tells you which one it is. There are **no accent marks**.`,
      conj: [{ inf: "ir / ser", en: "went / was", forms: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"], caption: "*Fui a Madrid* (ir: I went). *Fue un día bonito* (ser: It was)." }],
      examples: [
        ["Fui al partido el sábado.", "I went to the game on Saturday. (ir)"],
        ["El partido fue increíble.", "The game was incredible. (ser)"],
        ["¿Adónde fuiste ayer?", "Where did you go yesterday? (ir)"]
      ]
    },
    {
      title: "Hacer, tener and estar",
      text: `These verbs change their stem and use special endings with **no accent marks**: **-e, -iste, -o, -imos, -isteis, -ieron**.`,
      conj: [
        { inf: "hacer", en: "to do, make", forms: ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"], caption: "*Hizo* is spelled with **z** to keep the sound." },
        { inf: "tener", en: "to have", forms: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"] },
        { inf: "estar", en: "to be", forms: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"] }
      ],
      tip: "Other verbs like these: **poder** → *pude*, **poner** → *puse*, **venir** → *vine*, **querer** → *quise*, **decir** → *dije* (*dijeron*). And **dar** and **ver** use -er endings without accents: *di, dio; vi, vio*."
    },
    {
      title: "Repaso: the year in one table",
      text: `Here are the big ideas from all 30 modules. If one looks unfamiliar, go back to that module before you take the final check.`,
      table: {
        head: ["Grammar", "Example", "Module"],
        rows: [
          ["Accent marks and ¿ ¡", "{{¿Cómo estás?}}", "2"],
          ["Gender, number, articles", "{{las canciones}} · {{un lápiz}}", "6–7"],
          ["Ser for identity and origin", "{{Soy de Pensilvania.}}", "8, 16"],
          ["Adjective agreement", "{{las flores amarillas}}", "9"],
          ["Regular present tense", "{{hablo, comes, viven}}", "11–12"],
          ["Tener and tener que", "{{Tengo que estudiar.}}", "14"],
          ["Estar for location and feelings", "{{Estoy cansada.}}", "15–16"],
          ["Ir a + infinitive", "{{Voy a viajar.}}", "17"],
          ["Stem-changing verbs", "{{quiero, puedo, pido}}", "18–20"],
          ["Gustar", "{{Me gustan los churros.}}", "22"],
          ["Reflexive verbs", "{{Me levanto a las siete.}}", "23"],
          ["Progressive", "{{Estoy leyendo.}}", "24"],
          ["Object pronouns", "{{Sí, lo veo.}}", "25"],
          ["Comparisons", "{{más alto que yo}}", "26"],
          ["Tú commands", "{{¡Haz la tarea!}}", "28"],
          ["Preterite", "{{Ayer comí paella. Fui a la playa.}}", "29–30"]
        ]
      }
    }
  ],
  tasks: [
    {
      id: "t1", type: "conj", title: "Irregular preterite",
      intro: "Write every form. No accent marks needed!",
      pick: 2,
      verbs: [
        { inf: "ir", en: "to go", forms: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"] },
        { inf: "hacer", en: "to do", forms: ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"] },
        { inf: "tener", en: "to have", forms: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"] },
        { inf: "estar", en: "to be", forms: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"] }
      ],
      hints: ["Endings: **-e, -iste, -o, -imos, -isteis, -ieron** (for *hacer, tener, estar*).", "*Ir*: **fui, fuiste, fue, fuimos, fuisteis, fueron**.", "*Hacer* → *hizo* (with z)."]
    },
    {
      id: "t2", type: "sort", title: "Ir or ser?",
      intro: "*Fue* can mean *went* or *was*. Which verb is it in each sentence?",
      cats: ["ir (went)", "ser (was)"], speak: true,
      items: [["Fui a Madrid en el verano.", 0], ["Fue un día muy bonito.", 1], ["Ignacio fue a Montserrat.", 0], ["Ignacio fue un soldado valiente.", 1], ["¿Fuiste a la fiesta?", 0], ["La fiesta fue en mi casa.", 1], ["Fuimos al cine.", 0], ["Ellos fueron mis profesores.", 1]],
      hints: ["*Fue* + **a** + a place usually means *went* (ir).", "*Fue* + a description or a person usually means *was* (ser)."]
    },
    {
      id: "t3", type: "cloze", title: "La historia de Ignacio",
      intro: "Write the preterite of the verb in parentheses.",
      items: [
        "En mil quinientos veintiuno, Ignacio [estuvo] ((estar)) en Pamplona.", "Una bala de cañón lo [hirió] ((herir)) en la pierna.", "[Tuvo] ((tener)) que volver a Loyola.",
        "En su cama, [leyó] ((leer)) libros de santos.", "[Fue] ((ir)) a Montserrat en mil quinientos veintidós.", "Allí [hizo] ((hacer)) una promesa.", "Sus amigos y él [fueron] ((ser)) los primeros jesuitas."
      ],
      hints: ["*Herir* (to wound) is an -ir stem-changer: **hirió**.", "*Leer* → **leyó**. *Hacer* → **hizo**."]
    },
    {
      id: "t4", type: "quiz", title: "Repaso: the whole year",
      intro: "One question from each unit. Go back to the module if you need to.",
      questions: [
        { q: "Which word needs an accent mark? (Module 2)", choices: [["lapiz → lápiz", true], ["mesa", false], ["reloj", false], ["examen", false]] },
        { q: "*Mi tía ___ enfermera y ___ en el hospital.* (Module 16)", choices: [["es / está", true], ["está / es", false], ["es / es", false], ["está / está", false]] },
        { q: "*A mis amigos les ___ los videojuegos.* (Module 22)", choices: [["gustan", true], ["gusta", false], ["gustamos", false], ["gusto", false]] },
        { q: "*Nosotros ___ (poder) ir mañana.* (Module 19)", choices: [["podemos", true], ["puedemos", false], ["pueden", false], ["podimos", false]] },
        { q: "*¿Ves a tus primos? Sí, ___ veo.* (Module 25)", choices: [["los", true], ["les", false], ["las", false], ["lo", false]] },
        { q: "*Ayer yo ___ (hacer) la tarea.* (Module 30)", choices: [["hice", true], ["hacé", false], ["hizo", false], ["hací", false]] }
      ],
      hints: ["Each question names the module where you learned it."]
    },
    {
      id: "t5", type: "translate", title: "Translate: the whole year",
      intro: "Translate. Each sentence uses grammar from a different unit.",
      items: [
        { en: "I'm fifteen years old and I'm from Scranton.", es: ["[yo] tengo quince años y soy de scranton"] },
        { en: "We're going to travel to Spain.", es: ["[nosotros] vamos a viajar a españa", "nosotras vamos a viajar a españa"] },
        { en: "She gets up at seven.", es: ["[ella] se levanta a las siete"] },
        { en: "Yesterday I went to the beach.", es: ["ayer [yo] fui a la playa", "[yo] fui a la playa ayer"] },
        { en: "Last week we were very busy.", es: ["la semana pasada [nosotros] estuvimos muy ocupados", "la semana pasada nosotras estuvimos muy ocupadas", "[nosotros] estuvimos muy ocupados la semana pasada"] }
      ],
      hints: ["Age: **tener**. Origin: **ser de**. Plans: **ir a** + infinitive.", "*Went* = **fui**. *We were* (busy, a condition) = **estuvimos**."]
    },
    {
      id: "t6", type: "listen", title: "Listen: what happened?",
      intro: "Listen and answer.",
      questions: [
        { say: "El verano pasado fui a Puerto Rico con mi familia. Fue un viaje fantástico.", q: "How was the trip?", choices: [["fantastic", true], ["boring", false], ["too short", false], ["expensive", false]] },
        { say: "Ayer tuve un examen de español y estuve muy nerviosa.", q: "How did the speaker feel?", choices: [["very nervous", true], ["very happy", false], ["tired", false], ["bored", false]] },
        { say: "Hicimos la tarea juntos y después fuimos al cine.", q: "What did they do after homework?", choices: [["went to the movies", true], ["went home", false], ["did more homework", false], ["went to the beach", false]] },
        { say: "¿Qué hiciste el fin de semana? ¿Fuiste al partido?", q: "What is the person asking?", choices: [["what you did last weekend, and if you went to the game", true], ["what you're doing this weekend", false], ["if you like soccer", false], ["where the game is", false]] }
      ],
      hints: ["*Fui / fue / fuimos* = went or was. *Tuve* = I had. *Estuve* = I was. *Hicimos* = we did."]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Listen, record, compare. You've come a long way since Module 1!",
      items: [{ s: "Fue soldado. Leyó libros de santos. Hizo un cambio en su vida." }, { s: "Este año aprendí mucho español." }]
    }
  ],
  build: {
    heading: "Mi año en español",
    prompt: `This is your final writing. In **at least 8 sentences**, tell about your year. Say who you are, something you **did** this year (preterite, including at least one irregular form like *fui, hice, tuve, estuve*), what you **like**, and what you're **going to do** this summer.`,
    model: `{{Me llamo Ana y soy de Scranton.}} {{Tengo quince años.}} {{Este año fui a una escuela nueva.}} {{Al principio estuve nerviosa, pero hice muchos amigos.}} {{Estudié español todas las semanas y aprendí mucho.}} {{Me gusta mucho leer y me encantan los churros.}} {{Mis amigos son simpáticos y divertidos.}} {{Este verano voy a trabajar en un campamento.}}`,
    placeholder: "Me llamo…",
    reqs: [
      { t: "At least 8 sentences", sentences: 8 },
      { t: "Who you are (**soy / me llamo / tengo … años**)", any: ["soy", "me llamo", "tengo"] },
      { t: "Four preterite verbs", re: "\\b(fui|fue|fuimos|fueron|hice|hizo|hicimos|tuve|tuvo|tuvimos|estuve|estuvo|estuvimos|\\p{L}+(é|ó|í|ió|aste|iste|aron|ieron))\\b", min: 4 },
      { t: "An irregular preterite (*fui, hice, tuve, estuve…*)", any: ["fui", "fuiste", "fue", "fuimos", "fueron", "hice", "hiciste", "hizo", "hicimos", "hicieron", "tuve", "tuviste", "tuvo", "tuvimos", "tuvieron", "estuve", "estuviste", "estuvo", "estuvimos", "estuvieron", "pude", "puse", "vine", "quise", "dije", "di", "vi"] },
      { t: "Something you like (**gusta / gustan / encanta**)", any: ["me gusta", "me gustan", "me encanta", "me encantan"] },
      { t: "A plan with **ir a** + infinitive", re: "\\b(voy|vas|va|vamos|van)\\s+a\\s+\\p{L}+(ar|er|ir)\\b" }
    ]
  },
  reflect: {
    q: "A cannonball changed Ignatius's plans, and what felt like a disaster became the start of something new. Look back over this whole year. What's one moment (in Spanish class or anywhere) that changed your plans or surprised you? What did you learn about yourself? Then look ahead: what do you want to do with your Spanish?",
    placeholder: "This year, one moment that surprised me was…"
  },
  further: {
    note: "**¡Felicidades!** You've finished all 30 modules of Español 9. Here's one last challenge, from Module 1: can you still hear the difference?",
    id: "x1", type: "dictation", title: "Challenge: the last dictation",
    intro: "Write each sentence you hear.",
    items: ["¡Felicidades! Terminaste el curso.", "Fuimos a España y comimos paella.", "El año que viene voy a estudiar más español.", "Gracias por todo."]
  },
  culture: "**¿Sabías?** Ignatius's family home, the **Casa Torre** in Loyola, is now part of a large basilica and sanctuary. Visitors can see the room where he recovered, called *la Capilla de la Conversión*.",
  teacher: {
    snags: [
      ["Task 1", "Adds accent marks (*hicé, tuvó*)", "These irregular forms have no accent marks."],
      ["Task 2", "Thinks *fue* always means *was*", "Is there an *a* + place after it?"],
      ["Task 3", "*herió*", "*Herir* is an e → i stem-changer in the él form of the preterite: *hirió* (like *pidió*, *sirvió*)."],
      ["Build", "Preterite count stays low", "Check accent marks on regular forms (*estudié, aprendí*)."]
    ],
    factcheck: "Ignatius was wounded defending Pamplona's fortress on May 20, 1521, and convalesced at Loyola, reading Ludolph of Saxony's *Vita Christi* and the *Flos Sanctorum* (Golden Legend) because the house had no romances of chivalry. The room in the Casa Torre is the Chapel of the Conversion."
  }
};
