module.exports = {
  num: 28, unit: 5, slug: "m28-mandatos", minutes: 45,
  title: "Los mandatos informales",
  subtitle: "Telling a friend what to do: habla, come, ven, haz, no corras",
  lede: "Clean your room! Come here! Don't run! A *tú* command tells a friend or family member what to do, and most of them are forms you already know.",
  recap: "Last time you learned **este, ese, aquel**, clothing words, and numbers up to **mil**.",
  context: {
    title: "¡Sí, se puede!",
    place: "Phoenix, Arizona",
    text: `In the 1960s and 70s, many farmworkers in California and Arizona worked long days in the fields for very low pay, often without clean water or bathrooms. **Dolores Huerta** and **César Chávez** organized them into a union, the United Farm Workers, to demand fair treatment, without violence.

In **1972**, Chávez went on a hunger strike in **Phoenix, Arizona**, to protest a new law against farmworkers' unions. When some people said, *No, no se puede* ("No, it can't be done"), Dolores Huerta answered: {{¡Sí, se puede!}} *Yes, it can be done!* The phrase became the union's motto, and millions of people have chanted it since.

Leaders and coaches use commands to encourage people: {{¡Trabaja! ¡Lucha! ¡Ven con nosotros! ¡No tengas miedo!}} *Work! Fight! Come with us! Don't be afraid!*`
  },
  learn: [
    {
      title: "Regular tú commands",
      text: `For an **affirmative tú command**, use the **él / ella** form of the present tense. Stem changes stay.`,
      table: {
        head: ["Infinitive", "él / ella form", "Command"],
        rows: [
          ["hablar", "habla", "{{¡Habla más despacio!}} Speak more slowly!"],
          ["comer", "come", "{{¡Come las verduras!}} Eat your vegetables!"],
          ["escribir", "escribe", "{{¡Escribe tu nombre!}} Write your name!"],
          ["cerrar (ie)", "cierra", "{{¡Cierra la puerta!}} Close the door!"],
          ["dormir (ue)", "duerme", "{{¡Duerme bien!}} Sleep well!"],
          ["pedir (i)", "pide", "{{¡Pide ayuda!}} Ask for help!"]
        ]
      },
      tip: "In writing, commands often have **¡ !**, and they don't need *tú*."
    },
    {
      title: "Eight irregular commands",
      text: `These eight are short and irregular. A memory trick: **Vin Diesel Has Ten Weapons, Packs Seven Swords** → *ven, di, haz, ten, ve, pon, sé, sal*.`,
      table: {
        head: ["Infinitive", "Command", "Example"],
        rows: [
          ["venir", "**ven**", "{{¡Ven aquí!}} Come here!"],
          ["decir", "**di**", "{{Di la verdad.}} Tell the truth."],
          ["hacer", "**haz**", "{{Haz la tarea.}} Do your homework."],
          ["tener", "**ten**", "{{Ten cuidado.}} Be careful."],
          ["ir", "**ve**", "{{Ve a tu cuarto.}} Go to your room."],
          ["poner", "**pon**", "{{Pon la mesa.}} Set the table."],
          ["ser", "**sé**", "{{Sé bueno.}} Be good."],
          ["salir", "**sal**", "{{Sal de la cocina.}} Get out of the kitchen."]
        ]
      },
      flash: [
        ["lavar los platos", "to wash the dishes"], ["sacar la basura", "to take out the trash"], ["hacer la cama", "to make the bed"], ["poner la mesa", "to set the table"],
        ["barrer el piso", "to sweep the floor"], ["limpiar el cuarto", "to clean the room"], ["pasar la aspiradora", "to vacuum"], ["cortar el césped", "to mow the lawn"]
      ]
    },
    {
      title: "Pronouns, and negative commands",
      text: `**Attach** pronouns to the end of an affirmative command. If that moves the stress, add an accent mark: {{¡Hazlo!}} (*Do it!*), {{¡Ponla aquí!}} (*Put it here!*), {{¡Levántate!}} (*Get up!*), {{¡Dímelo!}} (*Tell me!*).

**Negative** tú commands are different. Take the **yo** form, drop the **-o**, and add the "opposite" ending: **-es** for -ar verbs, **-as** for -er and -ir verbs.`,
      table: {
        head: ["Infinitive", "yo form", "Negative command"],
        rows: [
          ["hablar", "hablo", "{{¡No hables!}} Don't talk!"],
          ["comer", "como", "{{¡No comas eso!}} Don't eat that!"],
          ["hacer", "hago", "{{¡No hagas eso!}} Don't do that!"],
          ["tener", "tengo", "{{¡No tengas miedo!}} Don't be afraid!"],
          ["ir", "(irregular)", "{{¡No vayas!}} Don't go!"],
          ["ser", "(irregular)", "{{¡No seas malo!}} Don't be mean!"]
        ],
        caption: "In negative commands, pronouns go **before** the verb: {{¡No lo hagas!}} (*Don't do it!*)"
      }
    }
  ],
  tasks: [
    {
      id: "t1", type: "cloze", title: "Write the command",
      intro: "Write the affirmative **tú** command of the verb in parentheses.",
      items: [
        "¡[Lava] ((lavar)) los platos!", "¡[Saca] ((sacar)) la basura!", "¡[Barre] ((barrer)) el piso!", "¡[Limpia] ((limpiar)) tu cuarto!",
        "¡[Cierra] ((cerrar)) la ventana!", "¡[Escribe] ((escribir)) la carta!", "¡[Pide] ((pedir)) una pizza!", "¡[Duerme] ((dormir)) ocho horas!"
      ],
      hints: ["Use the **él / ella** form: *lava, come, escribe*.", "Stem changes stay: *cierra, pide, duerme*."]
    },
    {
      id: "t2", type: "match", title: "The irregular eight",
      intro: "Match each command (tap to hear it) with its infinitive.",
      left: "Mandato", right: "Infinitivo", leftLang: "es",
      pairs: [["ven", "venir"], ["di", "decir"], ["haz", "hacer"], ["ten", "tener"], ["ve", "ir"], ["pon", "poner"], ["sé", "ser"], ["sal", "salir"]],
      hints: ["*Ve* (go) comes from *ir*; *ven* (come) from *venir*."]
    },
    {
      id: "t3", type: "select", title: "Choose the command",
      intro: "Choose the right command for each situation.",
      items: [
        { s: "¡{Ven|Viene|Venir} aquí!", en: "Your little brother is far away." }, { s: "¡{Di|Dice|Dices} la verdad!", en: "A friend is lying." },
        { s: "¡{Haz|Hace|Haces} la cama!", en: "Your sister's room is a mess." }, { s: "¡{Ten|Tiene|Tienes} cuidado!", en: "It's icy outside." },
        { s: "¡{Pon|Pone|Pones} la mesa!", en: "Dinner is ready." }, { s: "¡No {tengas|tienes|ten} miedo!", en: "Your friend is nervous about a test." },
        { s: "¡No {comas|come|comes} eso!", en: "Your dog is eating your homework." }, { s: "¡No {vayas|ve|vas}!", en: "Your friend wants to go out in a storm." }
      ],
      hints: ["Affirmative irregulars: *ven, di, haz, ten, ve, pon, sé, sal*.", "Negative: *no* + yo form minus -o + **-es / -as**: *no comas, no tengas*. *Ir* → **no vayas**."]
    },
    {
      id: "t4", type: "listen", title: "Los quehaceres",
      intro: "A parent is giving out chores. Listen and answer.",
      questions: [
        { say: "Pablo, saca la basura, por favor.", q: "What does Pablo have to do?", choices: [["take out the trash", true], ["wash the dishes", false], ["make the bed", false], ["walk the dog", false]] },
        { say: "Sara, haz tu cama y limpia tu cuarto.", q: "What does Sara have to do?", choices: [["make her bed and clean her room", true], ["set the table", false], ["sweep the floor", false], ["do her homework", false]] },
        { say: "Luis, no juegues videojuegos ahora. Pon la mesa.", q: "What should Luis NOT do?", choices: [["play video games", true], ["set the table", false], ["eat dinner", false], ["go outside", false]] },
        { say: "Ana, ve a la tienda y compra leche.", q: "Where is Ana going?", choices: [["to the store", true], ["to school", false], ["to her room", false], ["to the park", false]] }
      ],
      hints: ["Listen for the command verbs: *saca, haz, limpia, pon, ve*."]
    },
    {
      id: "t5", type: "order", title: "Build the commands",
      intro: "Tap the words in order.",
      items: [
        { en: "Do it now!", es: "¡Hazlo ahora!", alt: ["¡Ahora hazlo!"] },
        { en: "Come here, please.", es: "Ven aquí, por_favor." },
        { en: "Don't be afraid!", es: "¡No tengas miedo!", extra: ["tienes"] },
        { en: "Get up now!", es: "¡Levántate ahora!", alt: ["¡Ahora levántate!"] }
      ],
      hints: ["Attach pronouns to affirmative commands: *hazlo, levántate*.", "Negative commands: *no tengas*."]
    },
    {
      id: "t6", type: "errors", title: "Fix the commands",
      intro: "Tap the wrong word, then type the correct command.",
      items: [
        { s: "¡Pone la mesa, por favor!", bad: "Pone", fix: "Pon" },
        { s: "¡Va a tu cuarto!", bad: "Va", fix: "Ve" },
        { s: "¡Dice la verdad!", bad: "Dice", fix: "Di" },
        { s: "¡Cerra la puerta!", bad: "Cerra", fix: "Cierra", why: "The stem change stays: **cierra**." },
        { s: "¡No hablas en clase!", bad: "hablas", fix: "hables", why: "Negative: *hablo* → **no hables**." }
      ],
      hints: ["Irregulars: *pon, ve, di*. Negative -ar verbs end in **-es**."]
    },
    {
      id: "s1", type: "speak", title: "Say it out loud",
      intro: "Listen, record, compare.",
      items: [{ s: "¡Sí, se puede!" }, { s: "Ven aquí y pon la mesa, por favor." }, { s: "¡No tengas miedo!" }]
    }
  ],
  build: {
    heading: "Consejos para un estudiante nuevo",
    prompt: `Write **at least 6 commands** giving advice to a student who will start at your school next year (or to a younger brother or sister). Use at least **two irregular** commands (*ven, di, haz, ten, ve, pon, sé, sal*), at least **one with an attached pronoun** (*hazlo, levántate…*) and at least **one negative** command.`,
    model: `{{Levántate temprano.}} {{Haz tu tarea todos los días.}} {{Ve a la biblioteca después de clase.}} {{Habla con los profesores si tienes preguntas.}} {{Ten paciencia con tus compañeros.}} {{No tengas miedo de hacer preguntas.}} {{¡Y sé tú mismo!}}`,
    placeholder: "Levántate temprano…",
    reqs: [
      { t: "At least 6 sentences", sentences: 6 },
      { t: "Two irregular commands", any: ["ven", "di", "haz", "ten", "ve", "pon", "sé", "sal", "hazlo", "hazla", "ponlo", "ponla", "dime", "dímelo", "tenlo"], min: 2 },
      { t: "A command with an attached pronoun", re: "\\b\\p{L}+(te|lo|la|los|las|me|nos)\\b", min: 1 },
      { t: "A negative command (*no* + -es / -as)", re: "\\bno\\s+(te\\s+|lo\\s+|la\\s+|me\\s+)?\\p{L}+(es|as)\\b" }
    ]
  },
  reflect: {
    q: "Dolores Huerta's *¡Sí, se puede!* gave people courage when others said it couldn't be done. If you could give one command to your younger self on the first day of high school, what would it be, and why?",
    placeholder: "To my younger self I would say…"
  },
  further: {
    id: "x1", type: "translate", title: "Challenge: translate",
    items: [
      { en: "Make your bed!", es: ["¡haz tu cama!", "¡haz la cama!"] },
      { en: "Tell me the truth.", es: ["dime la verdad"] },
      { en: "Don't eat that!", es: ["¡no comas eso!"] },
      { en: "Be patient!", es: ["¡ten paciencia!", "¡sé paciente!"] }
    ],
    hints: ["*Tell me* = *di* + *me* = **dime**."]
  },
  culture: "**¿Sabías?** In 2012, President Barack Obama awarded Dolores Huerta the **Presidential Medal of Freedom**. His 2008 campaign slogan, *Yes we can*, was inspired by her words.",
  teacher: {
    snags: [
      ["Task 1", "*Cerra*", "Stem changes stay in commands: *cierra*."],
      ["Task 3", "Uses *ve* for the negative (*no ve*)", "Negative commands take a different form: *no vayas*."],
      ["Build", "The attached-pronoun line marks words like *noche*", "The check is generous: it looks for words ending in *-te, -lo, -la…*. Make sure the student actually used a command like *levántate* or *hazlo*."]
    ],
    factcheck: "Dolores Huerta coined \"¡Sí, se puede!\" in 1972 during César Chávez's 24-day fast in Phoenix, protesting an Arizona anti-union law; it became the UFW motto. Huerta received the Presidential Medal of Freedom in 2012; Obama credited her phrase for \"Yes we can.\""
  }
};
