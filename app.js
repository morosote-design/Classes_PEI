/**
 * app.js
 * Logic for Multilingual Prepositions Review & Training.
 * Features:
 *  - Instant color marking on practice exercises (Green = correct, Orange = wrong).
 *  - Neutral selection on exams (no colors until submission).
 *  - Random sampling of 15 questions from the large question pool on every exam attempt.
 *  - Full 7-language support, including the new preposition "TO".
 */

const I18N = {
  en: {
    meta: { name: "English", chooseOpt: "choose…" },
    ui: {
      modalTitle: "English Prepositions: Review & Training",
      modalSub: "Select your reference language for explanations and feedback:",
      title: "Prepositions Review & Training",
      intro: "A targeted guide designed for ESL students to master essential English prepositions. Review beginner foundations (to, at, on, in, for), master time structures (before, after, during, while, since, until), and test your knowledge across 4 progressive level exams with randomized questions.",
      nav: ["Theory", "Common Traps", "Quick Summary", "Practice", "Level Exams"],
      sec1Title: "1. Theory & Core Rules",
      sec1Lead: "Mastering prepositions is all about identifying whether they express movement/destination, clock times, calendar days, general periods, isolated nouns, or full clauses.",
      secTrapsTitle: "⚠️ 4 Critical Traps to Avoid",
      secTrapsLead: "The four most frequent pitfalls English learners face and how to bypass them:",
      sec2Title: "2. Quick Summary Table",
      sec3Title: "3. Practice Exercises (Instant Feedback)",
      sec3Lead: "Choose a preposition in each sentence. It will turn GREEN if correct and ORANGE if wrong instantly. Practice until confident!",
      sec4Title: "4. Final Level Exams (Randomized Pool)",
      sec4Lead: "Choose an exam level below. Each exam dynamically selects 15 random questions from our question pool. Colors remain neutral until you submit for your final score.",
      tableHeaders: ["Preposition", "Main Use", "Structure / Followed by", "Example"],
      tableRows: [
        ["to", "Destination, movement & direction", "Place, person, or goal", "go to school / walk to the park / talk to me"],
        ["at", "Specific clock times & exact points", "Exact time / specific spot", "at 5:00 PM / at the bus stop / at night"],
        ["on", "Days, dates & surfaces", "Day of the week / specific date", "on Monday / on October 21st / on the desk"],
        ["in", "Months, years, seasons & enclosed spaces", "Larger periods / spaces", "in July / in 2026 / in Canada / in the room"],
        ["for", "Duration / length of time", "Quantity / number + time unit", "for 2 hours / for three days / for 5 years"],
        ["before", "Prior to an event", "noun, verb+ing, or clause", "before lunch / before sleeping / before I leave"],
        ["after", "Later than an event", "noun, verb+ing, or clause", "after class / after eating / after I graduate"],
        ["during", "Within a named event/period", "noun only (never subject+verb)", "during the film / during winter"],
        ["while", "Simultaneous ongoing action", "clause (subject+verb) or verb-ing", "while she was driving / while driving"],
        ["since", "From a past starting point", "specific starting point in past", "since 2020 / since Monday / since I moved"],
        ["until", "Continuing up to a point", "terminal time or clause", "until 6:00 PM / until you come back"]
      ],
      quickTip: "<b>Memory Rule (Destination vs. Location):</b> Use <b>TO</b> for movement toward a destination (<i>I go to school</i>). Use <b>AT</b> for a static exact point (<i>I am at school</i>) and <b>IN</b> for inside a city or country (<i>I am in Canada</i>).",
      tipLabel: "Pro Tip:",
      btnResetPractice: "Reset Practice",
      btnSubmitExam: "Submit Exam & See Score",
      btnRetryExam: "New Random Attempt",
      btnBack: "✕ Back to Exams",
      scoreText: (ok, total) => `Score: ${ok} out of ${total}`,
      correctPrefix: "✓ Correct! ",
      wrongMarked: (v) => `✗ Selected "${v}". `,
      unanswered: "✗ Unanswered. ",
      answerLabel: "Correct answer: ",
      yourErrors: "Questions to review",
      noErrors: "Outstanding! Perfect score with zero errors.",
      scoreMsgs: [
        "Flawless! You completely mastered this exam.",
        "Great job! Review just the few questions you missed.",
        "Passed! Review the explanations below and try another random attempt.",
        "Keep practicing! Revisit the theory section and retry the exam."
      ],
      cardBeg1Title: "Beginner 1",
      cardBeg1Desc: "15 randomized exercises covering To, At, On, In, Before, and After.",
      cardBeg2Title: "Beginner 2",
      cardBeg2Desc: "15 randomized exercises focusing on For, During, While, Since, and Until.",
      cardInt1Title: "Intermediate 1",
      cardInt1Desc: "15 randomized questions mixing destination (To), time, place, and During vs. For.",
      cardInt2Title: "Intermediate 2",
      cardInt2Desc: "15 randomized real-world sentences with Until vs. By, While + -ing, and mixed clauses.",
      btnStart: "Start Exam ➔"
    },
    traps: [
      {
        title: "1. TO vs. AT vs. IN (Movement vs. Static Position)",
        body: "<b>TO</b> implies <i>movement / destination</i>: I drive <b>to</b> work, go <b>to</b> bed, walk <b>to</b> the store.<br><b>AT</b> & <b>IN</b> are <i>static locations</i>: I am <b>at</b> work, I am <b>in</b> the classroom. (Note: with 'home', English omits 'to': <i>I go home</i>)."
      },
      {
        title: "2. AT vs. ON vs. IN (Time Pyramid)",
        body: "<b>AT</b> = Precise time (at 3:00, at midnight, at night).<br><b>ON</b> = Days and dates (on Monday, on October 21st, on my birthday).<br><b>IN</b> = Months, years, seasons & periods of day (in July, in 2026, in the morning)."
      },
      {
        title: "3. During vs. For («How long?» vs «When?»)",
        body: "<b>During</b> answers <i>when?</i> (named event: during the movie). <b>For</b> answers <i>how long?</i> (quantities/numbers: for 8 hours).<br>❌ <i>I slept during 8 hours.</i><br>✔️ <i>I slept <b>for</b> 8 hours.</i>"
      },
      {
        title: "4. Until vs. By (Continuous vs. Deadline)",
        body: "<b>Until</b> marks an action that continues without stopping up to that moment. <b>By</b> marks a deadline (finished at or before that hour).<br>✔️ <i>Wait <b>until</b> 5 pm.</i> (stay continuous).<br>✔️ <i>Finish <b>by</b> 5 pm.</i> (latest deadline)."
      }
    ],
    lessons: [
      {
        w: "to", meaning: "destination / movement toward", tl: ["Origin", "to", "Destination"],
        rule: "Used to indicate movement, direction, or a destination toward a person, place, or goal.",
        ex: [["I walk to school every morning.", "Destination."], ["She moved to Canada last year.", "Country destination."], ["Talk to me after the meeting.", "Direction of communication."]],
        tip: "Exception: Do not use 'to' with 'home': say 'go home', not 'go to home'."
      },
      {
        w: "at", meaning: "specific clock time / exact spot", tl: ["Exact Point", "at"],
        rule: "Used for precise clock hours, meal times, and specific locations.",
        ex: [["The class begins at 9:00 AM.", "Specific hour."], ["I usually sleep at night.", "Set phrase: at night."], ["Meet me at the bus station.", "Specific location."]],
        tip: "Notice set phrases: 'at night', 'at noon', 'at the weekend' (UK)."
      },
      {
        w: "on", meaning: "days, dates & surfaces", tl: ["Specific Day", "on"],
        rule: "Used for days of the week, calendar dates, and physical surfaces.",
        ex: [["We have English class on Monday.", "Day of the week."], ["My birthday is on March 15th.", "Specific date."], ["The book is on the desk.", "Physical surface."]],
        tip: "If a specific day is mentioned with a time of day, use 'on': 'on Friday morning'."
      },
      {
        w: "in", meaning: "months, years & enclosed spaces", tl: ["Broad Period", "in"],
        rule: "Used for larger periods (months, years, decades, seasons) and inside spaces.",
        ex: [["I was born in 1998.", "Year."], ["It snows a lot in January.", "Month."], ["She is studying in the library.", "Inside a building."]],
        tip: "Parts of the day use 'in': 'in the morning', 'in the afternoon', 'in the evening' (but 'at night')."
      },
      {
        w: "for", meaning: "duration / length of time", tl: ["Start", "Duration", "End"],
        rule: "States how long an activity lasts. Must be followed by a period with a number or quantity.",
        ex: [["I studied for three hours.", "Quantity of hours."], ["She has lived here for two years.", "Quantity of years."], ["Wait for ten minutes.", "Short duration."]],
        tip: "Always use 'for' (not 'during') when numbers of hours, days, or years appear."
      },
      {
        w: "before", meaning: "earlier than / prior to", tl: ["Event A", "Event B", "before"],
        rule: "Indicates that something happens first. Accepts nouns, verb+ing, or full clauses.",
        ex: [["Wash your hands before lunch.", "Wash first, lunch second."], ["Think before speaking.", "Think first, then speak."], ["Call me before you leave.", "Call prior to departure."]],
        tip: "Future clauses use present tense: 'before you leave', not 'before you will leave'."
      },
      {
        w: "after", meaning: "later than / following", tl: ["Event A", "Event B", "after"],
        rule: "The opposite of before. Shows that an action occurs following another event.",
        ex: [["We played football after school.", "School finished first, then we played."], ["After finishing, he went home.", "Finished first, then left."], ["I’ll rest after I eat.", "Eat first, rest second."]],
        tip: "Clauses referring to future time stay in simple present: 'after I finish'."
      },
      {
        w: "during", meaning: "within a period or event", tl: ["Start", "End", "during"],
        rule: "Tells us when something happens inside an event. Followed strictly by a noun, never a clause.",
        ex: [["I fell asleep during the movie.", "Fell asleep inside the film screening."], ["It rains a lot during winter.", "Throughout the winter season."], ["Please be quiet during the exam.", "Maintain silence for the test duration."]],
        tip: "Common error: 'during I study' (incorrect). Use 'while I study' or 'during the lesson'."
      },
      {
        w: "while", meaning: "at the same time as", tl: ["Action 1", "Action 2", "while"],
        rule: "Connects two actions happening at the same time. Followed by a clause (subject+verb) or -ing.",
        ex: [["I read while she cooks.", "Both reading and cooking happen together."], ["The phone rang while I was sleeping.", "Call interrupted sleep."], ["Don’t text while driving.", "Reduced clause."]],
        tip: "While frequently pairs with continuous tenses (e.g., was/were + verb-ing)."
      },
      {
        w: "since", meaning: "from a past starting point", tl: ["Past Point", "Now", "since"],
        rule: "Indicates the starting point of an action continuing into the present. Used with present perfect.",
        ex: [["I have lived here since 2018.", "Started in 2018 and still here."], ["She has been tired since Monday.", "Began on Monday."], ["We have been friends since childhood.", "Originated in childhood."]],
        tip: "'Since' = starting point (since 2018). 'For' = duration (for three years)."
      },
      {
        w: "until", meaning: "up to the point of", tl: ["Now", "End point", "until"],
        rule: "Marks the terminal point when an action or state ceases. Followed by a time, date, or clause.",
        ex: [["The shop is open until 9:00 PM.", "Continuously open up to 9:00 PM."], ["Wait here until I come back.", "Remain here up to arrival."], ["I didn’t sleep until midnight.", "Slept only once midnight arrived."]],
        tip: "In negative clauses ('not ... until'), it means 'not before': 'I didn't know until yesterday'."
      }
    ]
  },

  es: {
    meta: { name: "Español", chooseOpt: "elige…" },
    ui: {
      modalTitle: "English Prepositions: Review & Training",
      modalSub: "Elige tu idioma para ver explicaciones y correcciones:",
      title: "Repaso y Entrenamiento de Preposiciones",
      intro: "Guía diseñada especialmente para estudiantes de inglés. Repasa las bases (to, at, on, in, for), domina las estructuras de tiempo (before, after, during, while, since, until) y ponte a prueba con 4 exámenes de preguntas aleatorias.",
      nav: ["Teoría", "Trampas Clave", "Resumen Rápido", "Práctica", "Exámenes"],
      sec1Title: "1. Teoría y Reglas Fundamentales",
      sec1Lead: "El secreto para dominar las preposiciones es fijarte si indican movimiento o destino, horas exactas, días, periodos, sustantivos o frases completas.",
      secTrapsTitle: "⚠️ Las 4 Trampas más Frecuentes",
      secTrapsLead: "Los errores que confunden a la mayoría de los estudiantes y cómo evitarlos:",
      sec2Title: "2. Resumen Rápido",
      sec3Title: "3. Ejercicios de Práctica (Corrección Inmediata)",
      sec3Lead: "Elige la preposición en cada frase: se marcará en VERDE si es correcta y en NARANJO si no lo es. ¡Practica hasta dominarla!",
      sec4Title: "4. Exámenes Finales por Nivel (Preguntas Aleatorias)",
      sec4Lead: "Elige un examen. Cada intento selecciona 15 preguntas aleatorias del banco. En el examen las opciones elegidas NO cambian de color hasta que entregues para ver tu nota final.",
      tableHeaders: ["Preposición", "Uso Principal", "Estructura que sigue", "Ejemplo"],
      tableRows: [
        ["to", "Destino, movimiento y dirección", "Lugar, persona o meta", "go to school / walk to the park / talk to me"],
        ["at", "Horas exactas y lugares específicos", "Hora precisa / punto exacto", "at 5:00 PM / at the bus stop / at night"],
        ["on", "Días, fechas y superficies", "Día de la semana / fecha exacta", "on Monday / on October 21st / on the desk"],
        ["in", "Meses, años, estaciones y lugares cerrados", "Periodos amplios / espacios", "in July / in 2026 / in Canada / in the room"],
        ["for", "Duración / cantidad de tiempo", "Cifra / número + unidad de tiempo", "for 2 hours / for three days / for 5 years"],
        ["before", "Antes de un evento", "sustantivo, verbo+ing o frase", "before lunch / before sleeping / before I leave"],
        ["after", "Después de un evento", "sustantivo, verbo+ing o frase", "after class / after eating / after I graduate"],
        ["during", "Durante un evento/periodo", "solo sustantivo (nunca sujeto+verbo)", "during the film / during winter"],
        ["while", "Mientras (acción simultánea)", "frase (sujeto+verbo) o verbo-ing", "while she was driving / while driving"],
        ["since", "Desde (punto de inicio pasado)", "momento inicial en el pasado", "since 2020 / since Monday / since I moved"],
        ["until", "Hasta (acción continua)", "momento final o frase", "until 6:00 PM / until you come back"]
      ],
      quickTip: "<b>Destino vs. Ubicación:</b> Usa <b>TO</b> para movimiento hacia un lugar (<i>I go to school</i>). Usa <b>AT</b> para estar en un punto puntual (<i>I am at school</i>) e <b>IN</b> para estar dentro de una ciudad o país (<i>I am in Canada</i>).",
      tipLabel: "Consejo:",
      btnResetPractice: "Reiniciar práctica",
      btnSubmitExam: "Entregar examen y ver mi nota",
      btnRetryExam: "Nuevo intento aleatorio",
      btnBack: "✕ Volver a los exámenes",
      scoreText: (ok, total) => `Aciertos: ${ok} de ${total}`,
      correctPrefix: "✓ ¡Correcto! ",
      wrongMarked: (v) => `✗ Marcaste «${v}». `,
      unanswered: "✗ Sin responder. ",
      answerLabel: "Respuesta correcta: ",
      yourErrors: "Preguntas para repasar",
      noErrors: "¡Excelente! Puntaje perfecto sin ningún error.",
      scoreMsgs: [
        "¡Perfecto! Dominas totalmente este nivel.",
        "¡Muy bien! Revisa solo los pocos fallos que tuviste.",
        "Aprobado. Lee las explicaciones abajo y prueba otro examen aleatorio.",
        "Aún necesitas practicar. Repasa la teoría y vuelve a intentarlo."
      ],
      cardBeg1Title: "Beginner 1",
      cardBeg1Desc: "15 ejercicios aleatorios con To, At, On, In, Before y After.",
      cardBeg2Title: "Beginner 2",
      cardBeg2Desc: "15 ejercicios aleatorios con For, During, While, Since y Until.",
      cardInt1Title: "Intermedio 1",
      cardInt1Desc: "15 preguntas aleatorias mezclando destino (To), tiempo, lugar y During vs. For.",
      cardInt2Title: "Intermedio 2",
      cardInt2Desc: "15 frases reales con Until vs. By, While + -ing y oraciones compuestas.",
      btnStart: "Comenzar Examen ➔"
    },
    traps: [
      {
        title: "1. TO vs. AT vs. IN (Movimiento vs. Posición Estática)",
        body: "<b>TO</b> implica <i>movimiento o desplazamiento hacia un destino</i>: go <b>to</b> school, drive <b>to</b> work, walk <b>to</b> the park.<br><b>AT</b> e <b>IN</b> son <i>ubicaciones estáticas</i>: I am <b>at</b> work, I am <b>in</b> the classroom. (Ojo: con 'home' no se usa 'to': se dice <i>I go home</i>)."
      },
      {
        title: "2. AT vs. ON vs. IN (La Pirámide del Tiempo)",
        body: "<b>AT</b> = Horas precisas (at 3:00, at midnight, at night).<br><b>ON</b> = Días y fechas (on Monday, on October 21st, on my birthday).<br><b>IN</b> = Meses, años, estaciones y partes del día (in July, in 2026, in the morning)."
      },
      {
        title: "3. During vs. For («¿Cuándo?» vs «¿Cuánto tiempo?»)",
        body: "<b>During</b> responde a <i>¿cuándo?</i> (un evento con nombre: during the movie). <b>For</b> responde a <i>¿cuánto tiempo?</i> (números/duración: for 8 hours).<br>❌ <i>I slept during 8 hours.</i><br>✔️ <i>I slept <b>for</b> 8 hours.</i>"
      },
      {
        title: "4. Until vs. By (Acción continua vs. Fecha límite)",
        body: "<b>Until</b> indica que una acción continúa sin parar hasta esa hora. <b>By</b> es una fecha límite (terminar a más tardar a esa hora).<br>✔️ <i>Wait <b>until</b> 5 pm.</i> (espera de corrido).<br>✔️ <i>Finish <b>by</b> 5 pm.</i> (plazo máximo)."
      }
    ],
    lessons: [
      {
        w: "to", meaning: "a / hacia (destino o movimiento)", tl: ["Origen", "to", "Destino"],
        rule: "Indica movimiento, dirección o desplazamiento hacia un lugar, persona u objetivo.",
        ex: [["I walk to school every morning.", "Destino físico."], ["She moved to Canada last year.", "Hacia un país."], ["Talk to me after the meeting.", "Dirección hacia una persona."]],
        tip: "Excepción importante: con 'home' nunca uses 'to'. Di 'go home', jamás 'go to home'."
      },
      {
        w: "at", meaning: "a las (hora) / en (lugar específico)", tl: ["Punto Exacto", "at"],
        rule: "Se usa para horas de reloj exactas, comidas del día y puntos de ubicación precisos.",
        ex: [["The class begins at 9:00 AM.", "Hora exacta."], ["I usually sleep at night.", "Expresión fija: at night."], ["Meet me at the bus station.", "Lugar puntual."]],
        tip: "Expresiones clave: 'at night', 'at noon', 'at the weekend'."
      },
      {
        w: "on", meaning: "el (día/fecha) / sobre (superficie)", tl: ["Día Específico", "on"],
        rule: "Se usa para días de la semana, fechas con día y mes, y objetos sobre superficies.",
        ex: [["We have English class on Monday.", "Día de la semana."], ["My birthday is on March 15th.", "Fecha exacta."], ["The book is on the desk.", "Sobre el escritorio."]],
        tip: "Si mencionas el día junto a una parte del día, manda el día: 'on Friday morning'."
      },
      {
        w: "in", meaning: "en (mes, año o espacio cerrado)", tl: ["Periodo Amplio", "in"],
        rule: "Se usa para periodos largos (meses, años, estaciones) y dentro de espacios o ciudades.",
        ex: [["I was born in 1998.", "Año."], ["It snows a lot in January.", "Mes."], ["She is studying in the library.", "Dentro de un edificio."]],
        tip: "Partes del día usan 'in': 'in the morning', 'in the afternoon', 'in the evening' (pero 'at night')."
      },
      {
        w: "for", meaning: "por / durante (duración)", tl: ["Inicio", "Duración", "Fin"],
        rule: "Indica cuánto tiempo dura una actividad. Siempre va seguido de una cifra de tiempo.",
        ex: [["I studied for three hours.", "Cantidad de horas."], ["She has lived here for two years.", "Cantidad de años."], ["Wait for ten minutes.", "Cantidad de minutos."]],
        tip: "Si ves un número (hours, days, years), usa siempre 'for', nunca 'during'."
      },
      {
        w: "before", meaning: "antes de", tl: ["A", "B", "before"],
        rule: "Indica algo que ocurre primero. Acepta sustantivo, -ing o una frase completa.",
        ex: [["Wash your hands before lunch.", "Primero te lavas las manos."], ["Think before speaking.", "Piensa primero."], ["Call me before you leave.", "Llámame antes de salir."]],
        tip: "Con una frase futura, usa presente: «before you leave», no «before you will leave»."
      },
      {
        w: "after", meaning: "después de", tl: ["A", "B", "after"],
        rule: "Lo contrario de before. Indica lo que ocurre más tarde.",
        ex: [["We played football after school.", "Terminó la escuela y jugamos."], ["After finishing, he went home.", "Terminó y se fue a casa."], ["I’ll rest after I eat.", "Comeré y luego descansaré."]],
        tip: "Frases de futuro se quedan en presente: «after I finish»."
      },
      {
        w: "during", meaning: "durante (en un evento)", tl: ["inicio", "fin", "during"],
        rule: "Indica cuándo ocurre algo dentro de un evento o periodo con nombre. Solo admite sustantivos.",
        ex: [["I fell asleep during the movie.", "Durante la película."], ["It rains a lot during winter.", "A lo largo del invierno."], ["Please be quiet during the exam.", "Durante el examen."]],
        tip: "No digas «during I study» (error). Di «while I study» o «during the class»."
      },
      {
        w: "while", meaning: "mientras", tl: ["acción 1", "acción 2", "while"],
        rule: "Une dos acciones simultáneas. Va seguido de frase completa (sujeto+verbo) o de -ing.",
        ex: [["I read while she cooks.", "Dos acciones al mismo tiempo."], ["The phone rang while I was sleeping.", "Una acción interrumpe la otra."], ["Don’t text while driving.", "Forma abreviada con -ing."]],
        tip: "Suele usarse con pasado continuo (was/were + -ing)."
      },
      {
        w: "since", meaning: "desde", tl: ["pasado", "ahora", "since"],
        rule: "Marca el punto de inicio de algo que aún continúa en el presente. Se usa con present perfect.",
        ex: [["I have lived here since 2018.", "Vivo aquí desde 2018."], ["She has been tired since Monday.", "Desde el lunes."], ["We have been friends since childhood.", "Desde la niñez."]],
        tip: "Since = punto de inicio (since 2018). For = cantidad de tiempo (for three years)."
      },
      {
        w: "until", meaning: "hasta", tl: ["ahora", "fin", "until"],
        rule: "Marca el momento final en que una acción continua se detiene.",
        ex: [["The shop is open until 9:00 PM.", "Abierto continuamente hasta las 9."], ["Wait here until I come back.", "Espera hasta que vuelva."], ["I didn’t sleep until midnight.", "No dormí hasta la medianoche."]],
        tip: "En negativo («not ... until») significa que recién ocurrió en ese momento."
      }
    ]
  }
};

let CURRENT_LANG = "en";
let ACTIVE_EXAM_KEY = null;
let ACTIVE_EXAM_QUESTIONS = [];

function setLanguage(lang) {
  if (!I18N[lang]) lang = "en";
  CURRENT_LANG = lang;
  document.documentElement.lang = lang;
  document.getElementById("langSelect").value = lang;
  document.getElementById("langModal").classList.add("hidden");
  renderUI();
}

function renderUI() {
  const data = I18N[CURRENT_LANG] || I18N["en"];
  const ui = data.ui;

  document.getElementById("modalMainTitle").textContent = ui.modalTitle;
  document.getElementById("modalSub").textContent = ui.modalSub;
  document.getElementById("ui-title").textContent = ui.title;
  document.getElementById("ui-intro").textContent = ui.intro;

  document.getElementById("nav-teoria").textContent = ui.nav[0];
  document.getElementById("nav-trampas").textContent = ui.nav[1];
  document.getElementById("nav-resumen").textContent = ui.nav[2];
  document.getElementById("nav-ejercicios").textContent = ui.nav[3];
  document.getElementById("nav-examen").textContent = ui.nav[4];

  document.getElementById("ui-sec1-title").textContent = ui.sec1Title;
  document.getElementById("ui-sec1-lead").textContent = ui.sec1Lead;
  document.getElementById("ui-sec-traps-title").textContent = ui.secTrapsTitle;
  document.getElementById("ui-sec-traps-lead").textContent = ui.secTrapsLead;
  document.getElementById("ui-sec2-title").textContent = ui.sec2Title;
  document.getElementById("ui-sec3-title").textContent = ui.sec3Title;
  document.getElementById("ui-sec3-lead").textContent = ui.sec3Lead;
  document.getElementById("ui-sec4-title").textContent = ui.sec4Title;
  document.getElementById("ui-sec4-lead").textContent = ui.sec4Lead;

  document.getElementById("exReset").textContent = ui.btnResetPractice;
  document.getElementById("qzSubmitBtn").textContent = ui.btnSubmitExam;
  document.getElementById("qzRetryBtn").textContent = ui.btnRetryExam;
  document.getElementById("btnBackExams").textContent = ui.btnBack;
  document.getElementById("ui-tip-box").innerHTML = ui.quickTip;

  document.getElementById("lbl-b1").textContent = ui.cardBeg1Title;
  document.getElementById("desc-b1").textContent = ui.cardBeg1Desc;
  document.getElementById("btn-start-b1").textContent = ui.btnStart;

  document.getElementById("lbl-b2").textContent = ui.cardBeg2Title;
  document.getElementById("desc-b2").textContent = ui.cardBeg2Desc;
  document.getElementById("btn-start-b2").textContent = ui.btnStart;

  document.getElementById("lbl-i1").textContent = ui.cardInt1Title;
  document.getElementById("desc-i1").textContent = ui.cardInt1Desc;
  document.getElementById("btn-start-i1").textContent = ui.btnStart;

  document.getElementById("lbl-i2").textContent = ui.cardInt2Title;
  document.getElementById("desc-i2").textContent = ui.cardInt2Desc;
  document.getElementById("btn-start-i2").textContent = ui.btnStart;

  document.getElementById("trapsContainer").innerHTML = data.traps.map(t => `
    <div class="trap-card">
      <h3>${t.title}</h3>
      <p>${t.body}</p>
    </div>
  `).join("");

  document.getElementById("tableHeader").innerHTML = ui.tableHeaders.map(h => `<th>${h}</th>`).join("");
  document.getElementById("tableBody").innerHTML = ui.tableRows.map(r => `
    <tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>
  `).join("");

  document.getElementById("lessons").innerHTML = data.lessons.map(l => `
    <article class="lesson" id="l-${l.w}">
      <h3>${l.w} <small>= ${l.meaning}</small></h3>
      <p class="rule">${l.rule}</p>
      <div class="tl"><b>${l.tl[0]}</b><i></i><em>${l.tl[1]}</em>${l.tl[2]?`<i></i><b>${l.tl[2]}</b>`:""}</div>
      <ul>${l.ex.map(e => `<li>${e[0]} <span>— ${e[1]}</span></li>`).join("")}</ul>
      <div class="tip"><b>${ui.tipLabel}</b> ${l.tip}</div>
    </article>
  `).join("");

  // Build Practice with instant color feedback
  buildPracticeList();

  if (ACTIVE_EXAM_KEY && ACTIVE_EXAM_QUESTIONS.length > 0) {
    renderActiveExamQuestions();
  }
}

/**
 * Builds Practice List:
 * - Each item triggers onchange:
 *   - Green if correct
 *   - Orange if wrong
 *   - Updates live practice counter
 */
function buildPracticeList() {
  const data = I18N[CURRENT_LANG] || I18N["en"];
  const chooseText = data.meta.chooseOpt;
  const container = document.getElementById("ex");

  container.innerHTML = WARMUP_DATA.map((item, i) => {
    const parts = item.s.split("___");
    const optionsHtml = item.opts.map(opt => `<option value="${opt}">${opt}</option>`).join("");
    return `<li id="p-item-${i}">
      <div class="q-row">
        <span class="q-num">${i+1}.</span>
        <span class="q-text">${parts[0]}</span>
        <select onchange="checkPracticeItem(${i}, this.value)" aria-label="Question ${i+1}">
          <option value="">${chooseText}</option>
          ${optionsHtml}
        </select>
        <span class="q-text">${parts[1]}</span>
      </div>
      <span class="fb" id="p-fb-${i}"></span>
    </li>`;
  }).join("");

  updatePracticeScore();
}

function checkPracticeItem(index, selectedVal) {
  const data = I18N[CURRENT_LANG] || I18N["en"];
  const ui = data.ui;
  const item = WARMUP_DATA[index];
  const li = document.getElementById(`p-item-${index}`);
  const fb = document.getElementById(`p-fb-${index}`);

  if (!selectedVal) {
    li.className = "";
    fb.textContent = "";
    updatePracticeScore();
    return;
  }

  if (selectedVal === item.a) {
    li.className = "practice-ok"; // GREEN
    fb.innerHTML = ui.correctPrefix + item.exp;
  } else {
    li.className = "practice-wrong"; // ORANGE
    fb.innerHTML = ui.wrongMarked(selectedVal) + ui.answerLabel + `<b>${item.a}</b>. ` + item.exp;
  }

  updatePracticeScore();
}

function updatePracticeScore() {
  const data = I18N[CURRENT_LANG] || I18N["en"];
  const correctCount = document.querySelectorAll("#ex li.practice-ok").length;
  document.getElementById("exScore").textContent = data.ui.scoreText(correctCount, WARMUP_DATA.length);
}

document.getElementById("exReset").onclick = () => {
  document.querySelectorAll("#ex li").forEach(li => {
    li.className = "";
    const sel = li.querySelector("select");
    if (sel) sel.value = "";
    const fb = li.querySelector(".fb");
    if (fb) fb.textContent = "";
  });
  updatePracticeScore();
};

/**
 * EXAM CONTROLLER:
 * - Selects 15 random questions from the level pool on every load
 * - Selects are neutral (NO color marking until submitted)
 */
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function loadExam(examKey, scrollToView = true) {
  ACTIVE_EXAM_KEY = examKey;
  const pool = EXAMS_POOL[examKey] || [];
  // Sample 15 distinct random questions
  ACTIVE_EXAM_QUESTIONS = shuffleArray(pool).slice(0, 15);

  document.getElementById("examMenu").style.display = "none";
  const box = document.getElementById("activeExamBox");
  box.style.display = "block";

  const langData = I18N[CURRENT_LANG] || I18N["en"];
  const titleMap = {
    beg1: langData.ui.cardBeg1Title,
    beg2: langData.ui.cardBeg2Title,
    int1: langData.ui.cardInt1Title,
    int2: langData.ui.cardInt2Title
  };
  document.getElementById("activeExamTitle").textContent = titleMap[examKey] || "Exam";

  renderActiveExamQuestions();
  document.getElementById("result").style.display = "none";

  if (scrollToView) {
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderActiveExamQuestions() {
  const data = I18N[CURRENT_LANG] || I18N["en"];
  const chooseText = data.meta.chooseOpt;
  const container = document.getElementById("activeQzList");

  container.innerHTML = ACTIVE_EXAM_QUESTIONS.map((item, i) => {
    const parts = item.s.split("___");
    const optionsHtml = item.opts.map(opt => `<option value="${opt}">${opt}</option>`).join("");
    return `<li>
      <div class="q-row">
        <span class="q-num">${i+1}.</span>
        <span class="q-text">${parts[0]}</span>
        <select aria-label="Exam Question ${i+1}">
          <option value="">${chooseText}</option>
          ${optionsHtml}
        </select>
        <span class="q-text">${parts[1]}</span>
      </div>
      <span class="fb"></span>
    </li>`;
  }).join("");
}

function closeExam() {
  ACTIVE_EXAM_KEY = null;
  ACTIVE_EXAM_QUESTIONS = [];
  document.getElementById("activeExamBox").style.display = "none";
  document.getElementById("examMenu").style.display = "grid";
  document.getElementById("result").style.display = "none";
}

document.getElementById("qzSubmitBtn").onclick = () => {
  if (!ACTIVE_EXAM_KEY || ACTIVE_EXAM_QUESTIONS.length === 0) return;
  const data = I18N[CURRENT_LANG] || I18N["en"];
  const ui = data.ui;
  const listItems = [...document.querySelectorAll("#activeQzList li")];

  let ok = 0;
  const errs = [];

  listItems.forEach((li, i) => {
    const sel = li.querySelector("select");
    const val = sel.value;
    const item = ACTIVE_EXAM_QUESTIONS[i];
    const isCorrect = val === item.a;

    if (isCorrect) {
      ok++;
    } else {
      errs.push({
        num: i + 1,
        sentence: item.s.replace("___", `<b>${item.a}</b>`),
        val: val,
        why: item.exp
      });
    }
  });

  const total = ACTIVE_EXAM_QUESTIONS.length;
  const pct = Math.round((ok / total) * 100);

  let msg = ui.scoreMsgs[3];
  if (ok === total) msg = ui.scoreMsgs[0];
  else if (ok >= 12) msg = ui.scoreMsgs[1];
  else if (ok >= 9) msg = ui.scoreMsgs[2];

  const resBox = document.getElementById("result");
  resBox.style.display = "block";
  resBox.innerHTML = `
    <div class="big">${ok}/${total}</div>
    <p><b>${msg}</b> (${pct}%)</p>
    ${errs.length 
      ? `<h3>${ui.yourErrors}</h3>` + errs.map(e => `
          <div class="err">
            <b>Q${e.num}:</b> ${e.sentence}<br>
            ${e.val ? ui.wrongMarked(e.val) : ui.unanswered} ${e.why}
          </div>
        `).join("")
      : `<div class="good">${ui.noErrors}</div>`
    }
  `;
  resBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
};

document.getElementById("qzRetryBtn").onclick = () => {
  if (ACTIVE_EXAM_KEY) {
    loadExam(ACTIVE_EXAM_KEY, false);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  renderUI();
});
