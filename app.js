/**
 * app.js
 * Handles translations, rendering of theory, traps, summary, warm-up exercises,
 * and handles exam loading, grading with only 4 focused options per question.
 */

const I18N = {
  en: {
    meta: { name: "English", chooseOpt: "choose…" },
    ui: {
      modalTitle: "English Prepositions: Review & Training",
      modalSub: "Select your reference language for explanations and feedback:",
      title: "Prepositions Review & Training",
      intro: "A targeted guide designed for ESL students to master essential English prepositions. Review beginner foundations (at, on, in, for), master time structures (before, after, during, while, since, until), and test your knowledge across 4 progressive level exams.",
      nav: ["Theory", "Common Traps", "Quick Summary", "Warm-up", "Level Exams"],
      sec1Title: "1. Theory & Core Rules",
      sec1Lead: "Mastering prepositions is all about identifying whether they are followed by specific clock times, calendar days, general periods, isolated nouns, or full clauses.",
      secTrapsTitle: "⚠️ 4 Critical Traps to Avoid",
      secTrapsLead: "The four most frequent pitfalls English learners face and how to bypass them:",
      sec2Title: "2. Quick Summary Table",
      sec3Title: "3. Warm-up Exercises",
      sec3Lead: "Choose the correct preposition in each sentence and click 'Check Answers'. Practice until you feel confident.",
      sec4Title: "4. Final Level Exams (60 Questions Total)",
      sec4Lead: "Choose an exam level below. Each exam features 15 distinct questions with automatic grading and detailed error feedback.",
      tableHeaders: ["Preposition", "Main Use", "Structure / Followed by", "Example"],
      tableRows: [
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
      quickTip: "<b>Memory Rule (Pyramid of At, On, In):</b> <b>IN</b> is big (year, month, country). <b>ON</b> is smaller (specific day, date, street). <b>AT</b> is exact (precise hour, exact address).",
      tipLabel: "Pro Tip:",
      btnCheck: "Check Answers",
      btnReset: "Reset",
      btnSubmitExam: "Submit Exam & See Score",
      btnRetryExam: "Reset Answers",
      btnBack: "✕ Back to Exams",
      scoreText: (ok, total) => `Score: ${ok} out of ${total}`,
      correctPrefix: "✓ Correct! ",
      wrongMarked: (v) => `✗ You selected "${v}". `,
      unanswered: "✗ Unanswered. ",
      answerLabel: "Correct answer: ",
      yourErrors: "Questions to review",
      noErrors: "Outstanding! Perfect score with zero errors.",
      scoreMsgs: [
        "Flawless! You completely mastered this exam.",
        "Great job! Review just the few questions you missed.",
        "Passed! Review the explanations below and try another test.",
        "Keep practicing! Revisit the theory section and retry the exam."
      ],
      cardBeg1Title: "Beginner 1",
      cardBeg1Desc: "15 fundamental exercises covering At, On, In, Before, and After.",
      cardBeg2Title: "Beginner 2",
      cardBeg2Desc: "15 exercises focusing on For, During, While, Since, and Until.",
      cardInt1Title: "Intermediate 1",
      cardInt1Desc: "15 challenging questions mixing time, place, and during vs. for traps.",
      cardInt2Title: "Intermediate 2",
      cardInt2Desc: "15 real-world sentences with until vs. by, while + -ing, and mixed clauses.",
      btnStart: "Start Exam ➔"
    },
    traps: [
      {
        title: "1. AT vs. ON vs. IN (Time Pyramid)",
        body: "<b>AT</b> = Precise time (at 3:00, at midnight, at night).<br><b>ON</b> = Days and dates (on Monday, on October 21st, on my birthday).<br><b>IN</b> = Months, years, seasons & periods of day (in July, in 2026, in the morning)."
      },
      {
        title: "2. During vs. For («How long?» vs «When?»)",
        body: "<b>During</b> answers <i>when?</i> (named event: during the movie). <b>For</b> answers <i>how long?</i> (quantities/numbers: for 8 hours).<br>❌ <i>I slept during 8 hours.</i><br>✔️ <i>I slept <b>for</b> 8 hours.</i>"
      },
      {
        title: "3. Until vs. By (Continuous vs. Deadline)",
        body: "<b>Until</b> marks an action that continues without stopping up to that moment. <b>By</b> marks a deadline (finished at or before that hour).<br>✔️ <i>Wait <b>until</b> 5 pm.</i> (stay continuous).<br>✔️ <i>Finish <b>by</b> 5 pm.</i> (latest deadline)."
      },
      {
        title: "4. While + Verb-ing (Reduced Clauses)",
        body: "When both actions are done by the same subject, you can drop 'subject + be' and attach -ing directly:<br>✔️ <i>Be careful <b>while driving</b>.</i> (= while you are driving)."
      }
    ],
    lessons: [
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
      intro: "Guía diseñada especialmente para estudiantes de inglés. Repasa las bases indispensables (at, on, in, for), domina las estructuras de tiempo (before, after, during, while, since, until) y ponte a prueba con 4 exámenes divididos por nivel.",
      nav: ["Teoría", "Trampas Clave", "Resumen Rápido", "Calentamiento", "Exámenes"],
      sec1Title: "1. Teoría y Reglas Fundamentales",
      sec1Lead: "El secreto para dominar las preposiciones es fijarte si lo que viene después es una hora exacta, un día de calendario, un periodo general, un sustantivo o una frase completa.",
      secTrapsTitle: "⚠️ Las 4 Trampas más Frecuentes",
      secTrapsLead: "Los errores que confunden a la mayoría de los estudiantes y cómo evitarlos:",
      sec2Title: "2. Resumen Rápido",
      sec3Title: "3. Ejercicios de Calentamiento",
      sec3Lead: "Elige la preposición correcta en cada frase y pulsa «Comprobar». Practica hasta dominar la regla.",
      sec4Title: "4. Exámenes Finales por Nivel (60 Preguntas)",
      sec4Lead: "Elige un nivel a continuación. Cada examen tiene 15 preguntas independientes con 4 opciones enfocadas, calificación automática y explicación de cada error.",
      tableHeaders: ["Preposición", "Uso Principal", "Estructura que sigue", "Ejemplo"],
      tableRows: [
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
      quickTip: "<b>Pirámide de At, On, In:</b> <b>IN</b> es lo más amplio (año, mes, país). <b>ON</b> es intermedio (días, fechas, calles). <b>AT</b> es lo más preciso (horas de reloj, direcciones exactas).",
      tipLabel: "Consejo:",
      btnCheck: "Comprobar",
      btnReset: "Reiniciar",
      btnSubmitExam: "Entregar examen y ver mi nota",
      btnRetryExam: "Reiniciar respuestas",
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
        "Aprobado. Lee las explicaciones abajo y prueba otro examen.",
        "Aún necesitas practicar. Repasa la teoría y vuelve a intentarlo."
      ],
      cardBeg1Title: "Beginner 1",
      cardBeg1Desc: "15 ejercicios fundamentales con At, On, In, Before y After.",
      cardBeg2Title: "Beginner 2",
      cardBeg2Desc: "15 ejercicios enfocados en For, During, While, Since y Until.",
      cardInt1Title: "Intermedio 1",
      cardInt1Desc: "15 preguntas que combinan tiempo, lugar y la trampa During vs. For.",
      cardInt2Title: "Intermedio 2",
      cardInt2Desc: "15 frases reales con Until vs. By, While + -ing y oraciones compuestas.",
      btnStart: "Comenzar Examen ➔"
    },
    traps: [
      {
        title: "1. AT vs. ON vs. IN (La Pirámide)",
        body: "<b>AT</b> = Horas precisas (at 3:00, at midnight, at night).<br><b>ON</b> = Días y fechas (on Monday, on October 21st, on my birthday).<br><b>IN</b> = Meses, años, estaciones y partes del día (in July, in 2026, in the morning)."
      },
      {
        title: "2. During vs. For («¿Cuándo?» vs «¿Cuánto tiempo?»)",
        body: "<b>During</b> responde a <i>¿cuándo?</i> (un evento con nombre: during the movie). <b>For</b> responde a <i>¿cuánto tiempo?</i> (números: for 8 hours).<br>❌ <i>I slept during 8 hours.</i><br>✔️ <i>I slept <b>for</b> 8 hours.</i>"
      },
      {
        title: "3. Until vs. By (Acción continua vs. Fecha límite)",
        body: "<b>Until</b> indica que una acción continúa sin parar hasta esa hora. <b>By</b> es una fecha límite (terminar a más tardar a esa hora).<br>✔️ <i>Wait <b>until</b> 5 pm.</i> (espera de corrido).<br>✔️ <i>Finish <b>by</b> 5 pm.</i> (plazo máximo)."
      },
      {
        title: "4. While + Verbo en -ing (Sujeto omitido)",
        body: "Cuando la misma persona hace las dos cosas, se puede omitir el sujeto y conectar directo con -ing:<br>✔️ <i>Be careful <b>while driving</b>.</i> (= while you are driving)."
      }
    ],
    lessons: [
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

  // Modal & Titles
  document.getElementById("modalMainTitle").textContent = ui.modalTitle;
  document.getElementById("modalSub").textContent = ui.modalSub;
  document.getElementById("ui-title").textContent = ui.title;
  document.getElementById("ui-intro").textContent = ui.intro;

  // Nav
  document.getElementById("nav-teoria").textContent = ui.nav[0];
  document.getElementById("nav-trampas").textContent = ui.nav[1];
  document.getElementById("nav-resumen").textContent = ui.nav[2];
  document.getElementById("nav-ejercicios").textContent = ui.nav[3];
  document.getElementById("nav-examen").textContent = ui.nav[4];

  // Headings
  document.getElementById("ui-sec1-title").textContent = ui.sec1Title;
  document.getElementById("ui-sec1-lead").textContent = ui.sec1Lead;
  document.getElementById("ui-sec-traps-title").textContent = ui.secTrapsTitle;
  document.getElementById("ui-sec-traps-lead").textContent = ui.secTrapsLead;
  document.getElementById("ui-sec2-title").textContent = ui.sec2Title;
  document.getElementById("ui-sec3-title").textContent = ui.sec3Title;
  document.getElementById("ui-sec3-lead").textContent = ui.sec3Lead;
  document.getElementById("ui-sec4-title").textContent = ui.sec4Title;
  document.getElementById("ui-sec4-lead").textContent = ui.sec4Lead;

  // Buttons
  document.getElementById("exBtn").textContent = ui.btnCheck;
  document.getElementById("exReset").textContent = ui.btnReset;
  document.getElementById("qzSubmitBtn").textContent = ui.btnSubmitExam;
  document.getElementById("qzRetryBtn").textContent = ui.btnRetryExam;
  document.getElementById("btnBackExams").textContent = ui.btnBack;
  document.getElementById("ui-tip-box").innerHTML = ui.quickTip;

  // Exam Cards
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

  // Traps
  document.getElementById("trapsContainer").innerHTML = data.traps.map(t => `
    <div class="trap-card">
      <h3>${t.title}</h3>
      <p>${t.body}</p>
    </div>
  `).join("");

  // Summary Table
  document.getElementById("tableHeader").innerHTML = ui.tableHeaders.map(h => `<th>${h}</th>`).join("");
  document.getElementById("tableBody").innerHTML = ui.tableRows.map(r => `
    <tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>
  `).join("");

  // Lessons
  document.getElementById("lessons").innerHTML = data.lessons.map(l => `
    <article class="lesson" id="l-${l.w}">
      <h3>${l.w} <small>= ${l.meaning}</small></h3>
      <p class="rule">${l.rule}</p>
      <div class="tl"><b>${l.tl[0]}</b><i></i><em>${l.w}</em>${l.tl[1]?`<i></i><b>${l.tl[1]}</b>`:""}</div>
      <ul>${l.ex.map(e => `<li>${e[0]} <span>— ${e[1]}</span></li>`).join("")}</ul>
      <div class="tip"><b>${ui.tipLabel}</b> ${l.tip}</div>
    </article>
  `).join("");

  // Warm-up list
  buildExerciseList("ex", WARMUP_DATA, data.meta.chooseOpt);
  document.getElementById("exScore").textContent = "";

  if (ACTIVE_EXAM_KEY) {
    loadExam(ACTIVE_EXAM_KEY, false);
  }
}

/**
 * Builds list where EACH QUESTION has only its 4 specific options (item.opts)
 */
function buildExerciseList(containerId, items, chooseText) {
  document.getElementById(containerId).innerHTML = items.map((item, i) => {
    const parts = item.s.split("___");
    const optionsHtml = item.opts.map(opt => `<option value="${opt}">${opt}</option>`).join("");
    return `<li>
      <span>${parts[0]}<select aria-label="Question ${i+1}"><option value="">${chooseText}</option>${optionsHtml}</select>${parts[1]}</span>
      <span class="fb"></span>
    </li>`;
  }).join("");
}

function gradeList(containerId, items, showFeedback) {
  const data = I18N[CURRENT_LANG] || I18N["en"];
  const ui = data.ui;
  const listElements = [...document.querySelectorAll("#" + containerId + " li")];
  let ok = 0;
  const errs = [];

  listElements.forEach((li, i) => {
    const sel = li.querySelector("select");
    const val = sel.value;
    const isCorrect = val === items[i].a;
    const exp = items[i].exp;

    if (isCorrect) {
      ok++;
    } else {
      errs.push({
        num: i + 1,
        sentence: items[i].s.replace("___", "<b>" + items[i].a + "</b>"),
        val: val,
        why: exp
      });
    }

    if (showFeedback) {
      li.className = isCorrect ? "ok" : "bad";
      const fb = li.querySelector(".fb");
      if (isCorrect) {
        fb.innerHTML = ui.correctPrefix + exp;
      } else {
        const markedPart = val ? ui.wrongMarked(val) : ui.unanswered;
        fb.innerHTML = markedPart + ui.answerLabel + "<b>" + items[i].a + "</b>. " + exp;
      }
    }
  });

  return { ok, total: items.length, errs };
}

function resetList(containerId) {
  document.querySelectorAll("#" + containerId + " li").forEach(li => {
    li.className = "";
    li.querySelector("select").value = "";
    li.querySelector(".fb").textContent = "";
  });
}

// Warm-up buttons
document.getElementById("exBtn").onclick = () => {
  const data = I18N[CURRENT_LANG] || I18N["en"];
  const r = gradeList("ex", WARMUP_DATA, true);
  document.getElementById("exScore").textContent = data.ui.scoreText(r.ok, r.total);
};
document.getElementById("exReset").onclick = () => {
  resetList("ex");
  document.getElementById("exScore").textContent = "";
};

/* Exam Loading and Submission */
function loadExam(examKey, scrollToView = true) {
  ACTIVE_EXAM_KEY = examKey;
  const exam = EXAMS[examKey];
  const data = I18N[CURRENT_LANG] || I18N["en"];

  document.getElementById("examMenu").style.display = "none";
  const box = document.getElementById("activeExamBox");
  box.style.display = "block";

  document.getElementById("activeExamTitle").textContent = exam.title;
  buildExerciseList("activeQzList", exam.questions, data.meta.chooseOpt);
  document.getElementById("result").style.display = "none";

  if (scrollToView) {
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function closeExam() {
  ACTIVE_EXAM_KEY = null;
  document.getElementById("activeExamBox").style.display = "none";
  document.getElementById("examMenu").style.display = "grid";
  document.getElementById("result").style.display = "none";
}

document.getElementById("qzSubmitBtn").onclick = () => {
  if (!ACTIVE_EXAM_KEY) return;
  const exam = EXAMS[ACTIVE_EXAM_KEY];
  const data = I18N[CURRENT_LANG] || I18N["en"];
  const ui = data.ui;
  const r = gradeList("activeQzList", exam.questions, false);
  const total = r.total;
  const score = r.ok;
  const pct = Math.round((score / total) * 100);

  let msg = ui.scoreMsgs[3];
  if (score === total) msg = ui.scoreMsgs[0];
  else if (score >= 12) msg = ui.scoreMsgs[1];
  else if (score >= 9) msg = ui.scoreMsgs[2];

  const resBox = document.getElementById("result");
  resBox.style.display = "block";
  resBox.innerHTML = `
    <div class="big">${score}/${total}</div>
    <p><b>${msg}</b> (${pct}%)</p>
    ${r.errs.length 
      ? `<h3>${ui.yourErrors}</h3>` + r.errs.map(e => `
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
  resetList("activeQzList");
  document.getElementById("result").style.display = "none";
};

window.addEventListener("DOMContentLoaded", () => {
  renderUI();
});
