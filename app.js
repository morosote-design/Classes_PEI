/**
 * app.js
 * Logic for Multilingual Prepositions Review & Training.
 * Fully supports all 7 languages: EN, ES, PT-BR, KO, ZH, JA, ML.
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
  },

  "pt-BR": {
    meta: { name: "Português", chooseOpt: "escolha…" },
    ui: {
      modalTitle: "English Prepositions: Review & Training",
      modalSub: "Escolha seu idioma para explicações e correções:",
      title: "Revisão e Treinamento de Preposições",
      intro: "Guia prático para dominar as preposições essenciais em inglês. Revise a base (to, at, on, in, for), domine o tempo (before, after, during, while, since, until) e teste seu conhecimento em 4 exames com questões aleatórias.",
      nav: ["Teoria", "Armadilhas", "Resumo", "Prática", "Exames"],
      sec1Title: "1. Teoria e Regras Principais",
      sec1Lead: "O segredo das preposições é observar se indicam movimento/destino, horas exatas, dias, períodos maiores ou orações completas.",
      secTrapsTitle: "⚠️ As 4 Armadilhas mais Comuns",
      secTrapsLead: "Erros clássicos e como evitá-los:",
      sec2Title: "2. Tabela de Resumo Rápido",
      sec3Title: "3. Exercícios de Prática (Correção Imediata)",
      sec3Lead: "Escolha a preposição: ficará VERDE se estiver correta e LARANJA se estiver errada. Pratique à vontade!",
      sec4Title: "4. Exames Finais por Nível (Questões Aleatórias)",
      sec4Lead: "Cada exame seleciona 15 questões aleatórias. No exame, as opções NÃO mudam de cor até você finalizar.",
      tableHeaders: ["Preposição", "Uso Principal", "Estrutura / O que vem depois", "Exemplo"],
      tableRows: [
        ["to", "Destino, movimento e direção", "Lugar, pessoa ou objetivo", "go to school / walk to the park / talk to me"],
        ["at", "Horas exatas e pontos específicos", "Hora precisa / local pontual", "at 5:00 PM / at the bus stop / at night"],
        ["on", "Dias, datas e superfícies", "Dia da semana / data específica", "on Monday / on October 21st / on the desk"],
        ["in", "Meses, anos, estações e locais fechados", "Períodos amplos / espaços", "in July / in 2026 / in Canada / in the room"],
        ["for", "Duração / quantidade de tempo", "Número + unidade de tempo", "for 2 hours / for three days / for 5 years"],
        ["before", "Antes de um evento", "substantivo, verbo+ing ou oração", "before lunch / before sleeping / before I leave"],
        ["after", "Depois de um evento", "substantivo, verbo+ing ou oração", "after class / after eating / after I graduate"],
        ["during", "Durante um evento/período", "apenas substantivo (sem verbo)", "during the film / during winter"],
        ["while", "Enquanto (ações simultâneas)", "oração (sujeito+verbo) ou verbo-ing", "while she was driving / while driving"],
        ["since", "Desde (ponto inicial passado)", "marco no passado", "since 2020 / since Monday / since I moved"],
        ["until", "Até (ação contínua)", "momento final ou oração", "until 6:00 PM / until you come back"]
      ],
      quickTip: "<b>Destino vs. Posição:</b> Use <b>TO</b> para movimento em direção a um destino (<i>I go to school</i>). Use <b>AT</b> para ponto fixo (<i>I am at school</i>) e <b>IN</b> para dentro de cidades/países (<i>I am in Canada</i>).",
      tipLabel: "Dica:",
      btnResetPractice: "Reiniciar prática",
      btnSubmitExam: "Enviar exame e ver nota",
      btnRetryExam: "Novo teste aleatório",
      btnBack: "✕ Voltar aos exames",
      scoreText: (ok, total) => `Acertos: ${ok} de ${total}`,
      correctPrefix: "✓ Correto! ",
      wrongMarked: (v) => `✗ Você marcou «${v}». `,
      unanswered: "✗ Sem resposta. ",
      answerLabel: "Resposta correta: ",
      yourErrors: "Questões para revisar",
      noErrors: "Parabéns! Nota máxima sem nenhum erro.",
      scoreMsgs: [
        "Perfeito! Você dominou completamente este nível.",
        "Muito bem! Revise apenas as poucas dúvidas que errou.",
        "Aprovado! Leia as explicações e faça outro teste aleatório.",
        "Precisa treinar mais. Revise a teoria e tente novamente."
      ],
      cardBeg1Title: "Beginner 1",
      cardBeg1Desc: "15 exercícios aleatórios com To, At, On, In, Before e After.",
      cardBeg2Title: "Beginner 2",
      cardBeg2Desc: "15 exercícios aleatórios focados em For, During, While, Since e Until.",
      cardInt1Title: "Intermediário 1",
      cardInt1Desc: "15 questões aleatórias misturando destino (To), tempo e During vs. For.",
      cardInt2Title: "Intermediário 2",
      cardInt2Desc: "15 frases com Until vs. By, While + -ing e orações completas.",
      btnStart: "Iniciar Exame ➔"
    },
    traps: [
      {
        title: "1. TO vs. AT vs. IN (Movimento vs. Posição Estática)",
        body: "<b>TO</b> indica <i>deslocamento/destino</i>: go <b>to</b> school, drive <b>to</b> work. <b>AT</b> e <b>IN</b> são <i>locais estáticos</i>: I am <b>at</b> work, I am <b>in</b> Canada. (Com 'home' não se usa 'to': <i>I go home</i>)."
      },
      {
        title: "2. AT vs. ON vs. IN (A Pirâmide)",
        body: "<b>AT</b> = Horas precisas (at 3:00, at night). <b>ON</b> = Dias e datas (on Monday, on October 21st). <b>IN</b> = Meses, anos, estações e turnos do dia (in July, in 2026, in the morning)."
      },
      {
        title: "3. During vs. For",
        body: "<b>During</b> responde a <i>quando?</i> (evento: during the movie). <b>For</b> responde a <i>quanto tempo?</i> (números: for 8 hours)."
      },
      {
        title: "4. Until vs. By",
        body: "<b>Until</b> indica ação que continua ininterrupta até o momento. <b>By</b> expressa prazo limite."
      }
    ],
    lessons: [
      { w: "to", meaning: "para / a (destino)", tl: ["Origem", "to", "Destino"], rule: "Indica movimento ou direção para um lugar ou pessoa.", ex: [["I walk to school.", "Destino."], ["She moved to Canada.", "País."], ["Talk to me.", "Direção."]], tip: "Não use 'to' com 'home': 'go home'." },
      { w: "at", meaning: "às (hora) / em (ponto exato)", tl: ["Ponto Exato", "at"], rule: "Para horários precisos no relógio e locais específicos.", ex: [["The class begins at 9:00 AM.", "Hora."], ["I sleep at night.", "Expressão."], ["Meet me at the bus station.", "Local."]], tip: "'at night', 'at noon'." },
      { w: "on", meaning: "em / no (dias e superfícies)", tl: ["Dia Específico", "on"], rule: "Para dias da semana, datas com dia e superfícies.", ex: [["Class on Monday.", "Dia."], ["Birthday on March 15th.", "Data."], ["Book on the desk.", "Mesa."]], tip: "'on Friday morning'." },
      { w: "in", meaning: "em (meses, anos, espaços)", tl: ["Período Amplo", "in"], rule: "Para meses, anos, estações e dentro de ambientes.", ex: [["Born in 1998.", "Ano."], ["Snow in January.", "Mês."], ["In the library.", "Lugar."]], tip: "'in the morning'." },
      { w: "for", meaning: "por / durante (duração)", tl: ["Início", "Duração", "Fim"], rule: "Indica quanto tempo dura uma ação com número.", ex: [["Studied for three hours.", "Horas."], ["Lived here for two years.", "Anos."], ["For ten minutes.", "Minutos."]], tip: "Com número use sempre 'for'." },
      { w: "before", meaning: "antes de", tl: ["A", "B", "before"], rule: "Indica algo anterior.", ex: [["Wash before lunch.", "Lavar antes."], ["Think before speaking.", "Pensar antes."], ["Call before you leave.", "Ligar antes."]], tip: "Futuro usa presente: 'before you leave'." },
      { w: "after", meaning: "depois de / após", tl: ["A", "B", "after"], rule: "Indica o que acontece mais tarde.", ex: [["Football after school.", "Depois da escola."], ["Went home after finishing.", "Depois de terminar."], ["Rest after I eat.", "Depois de comer."]], tip: "Presente no futuro: 'after I finish'." },
      { w: "during", meaning: "durante (em evento)", tl: ["início", "fim", "during"], rule: "Indica quando algo ocorre dentro de um evento. Só substantivo.", ex: [["Asleep during the movie.", "No filme."], ["Rains during winter.", "No inverno."], ["Quiet during the exam.", "No exame."]], tip: "Não use com verbo." },
      { w: "while", meaning: "enquanto", tl: ["ação 1", "ação 2", "while"], rule: "Conecta ações simultâneas com oração ou -ing.", ex: [["Read while she cooks.", "Ao mesmo tempo."], ["Rang while sleeping.", "Interrupção."], ["Don't text while driving.", "Forma reduzida."]], tip: "Comum com past continuous." },
      { w: "since", meaning: "desde", tl: ["passado", "agora", "since"], rule: "Ponto de início no passado até o presente.", ex: [["Lived here since 2018.", "Desde 2018."], ["Tired since Monday.", "Segunda."], ["Friends since childhood.", "Infância."]], tip: "Since = início. For = duração." },
      { w: "until", meaning: "até", tl: ["agora", "fim", "until"], rule: "Término de ação contínua.", ex: [["Open until 9:00 PM.", "Até 21h."], ["Wait until I come back.", "Até voltar."], ["Didn't sleep until midnight.", "Meia-noite."]], tip: "'until' foca na continuidade." }
    ]
  },

  ko: {
    meta: { name: "한국어", chooseOpt: "선택…" },
    ui: {
      modalTitle: "English Prepositions: Review & Training",
      modalSub: "설명과 해설을 볼 언어를 선택하세요:",
      title: "영어 전치사 핵심 복습 및 훈련",
      intro: "영어 학습자를 위한 맞춤형 전치사 마스터 코스입니다. 기초 전치사(to, at, on, in, for)부터 시간 전치사(before, after, during, while, since, until)까지 체계적으로 학습하고 무작위 문제 은행으로 4단계 레벨 시험을 치러보세요.",
      nav: ["핵심 이론", "자주 틀리는 함정", "요약 정리", "실전 연습", "레벨별 시험"],
      sec1Title: "1. 핵심 이론 및 기본 원칙",
      sec1Lead: "전치사가 목적지/이동을 나타내는지, 정확한 시각, 요일, 넓은 기간, 명사 또는 문장(절)과 결합하는지 구별하는 것이 핵심입니다.",
      secTrapsTitle: "⚠️ 학습자가 가장 많이 틀리는 4대 함정",
      secTrapsLead: "시험에서 자주 헷갈리는 포인트 정리:",
      sec2Title: "2. 빠른 요약 표",
      sec3Title: "3. 실전 연습문제 (실시간 피드백)",
      sec3Lead: "문장의 전치사를 선택하세요. 정답이면 즉시 초록색, 오답이면 주황색으로 표시됩니다!",
      sec4Title: "4. 레벨별 최종 시험 (무작위 15문항 출제)",
      sec4Lead: "원하는 시험을 선택하세요. 매 시도마다 15문항이 무작위로 추출됩니다. 시험 중에는 색상이 표시되지 않으며 최종 제출 시 점수가 산출됩니다.",
      tableHeaders: ["전치사", "주요 용도", "뒤에 오는 구조", "대표 예문"],
      tableRows: [
        ["to", "목적지, 이동 및 방향", "장소, 사람, 목표", "go to school / walk to the park / talk to me"],
        ["at", "정확한 시각 및 특정 지점", "정확한 시간 / 특정 장소", "at 5:00 PM / at the bus stop / at night"],
        ["on", "요일, 날짜 및 표면", "요일 / 특정한 날짜", "on Monday / on October 21st / on the desk"],
        ["in", "월, 연도, 계절 및 내부 공간", "넓은 기간 / 공간 내부", "in July / in 2026 / in Canada / in the room"],
        ["for", "기간 / 시간의 길이", "숫자 + 시간 단위", "for 2 hours / for three days / for 5 years"],
        ["before", "~하기 전에", "명사, -ing, 또는 절(주어+동사)", "before lunch / before sleeping / before I leave"],
        ["after", "~한 후에", "명사, -ing, 또는 절(주어+동사)", "after class / after eating / after I graduate"],
        ["during", "~동안에 (특정 기간/행사)", "명사만 (절 불가)", "during the film / during winter"],
        ["while", "~하는 동안에 (동시 진행)", "절(주어+동사) 또는 -ing", "while she was driving / while driving"],
        ["since", "~이래로 (과거 시작점)", "과거의 시작 시점", "since 2020 / since Monday / since I moved"],
        ["until", "~까지 (상태의 지속)", "종료 시점 또는 절", "until 6:00 PM / until you come back"]
      ],
      quickTip: "<b>목적지 vs 위치 구별:</b> 목적지로 향하는 이동에는 <b>TO</b> (<i>I go to school</i>), 정적인 특정 지점에는 <b>AT</b> (<i>I am at school</i>), 도시/국가 내부에는 <b>IN</b> (<i>I am in Canada</i>)을 씁니다.",
      tipLabel: "핵심 팁:",
      btnResetPractice: "연습 초기화",
      btnSubmitExam: "시험 제출 및 점수 확인",
      btnRetryExam: "새 무작위 시험 시작",
      btnBack: "✕ 시험 목록으로 돌아가기",
      scoreText: (ok, total) => `정답: ${ok} / ${total} 개`,
      correctPrefix: "✓ 정답입니다! ",
      wrongMarked: (v) => `✗ 선택한 답: "${v}". `,
      unanswered: "✗ 미입력. ",
      answerLabel: "정답: ",
      yourErrors: "틀린 문제 및 해설",
      noErrors: "완벽합니다! 만점을 기록하셨습니다.",
      scoreMsgs: [
        "만점입니다! 이 레벨을 완벽하게 마스터하셨습니다.",
        "매우 훌륭합니다! 틀린 문제만 간단히 복습하세요.",
        "합격입니다. 오답 해설을 읽고 새 무작위 시험도 풀어보세요.",
        "복습이 필요합니다. 이론 설명을 다시 읽고 재도전하세요."
      ],
      cardBeg1Title: "Beginner 1",
      cardBeg1Desc: "To, At, On, In, Before, After 무작위 15문항.",
      cardBeg2Title: "Beginner 2",
      cardBeg2Desc: "For, During, While, Since, Until 무작위 15문항.",
      cardInt1Title: "Intermediate 1",
      cardInt1Desc: "방향(To), 시간, 장소, During vs. For 무작위 15문항.",
      cardInt2Title: "Intermediate 2",
      cardInt2Desc: "Until vs. By, While + -ing 분사 구문 무작위 15문항.",
      btnStart: "시험 시작 ➔"
    },
    traps: [
      {
        title: "1. TO vs. AT vs. IN (이동 vs. 정적 위치)",
        body: "<b>TO</b>는 <i>목적지로의 이동</i>을 의미합니다: go <b>to</b> school, drive <b>to</b> work. 반면 <b>AT</b>과 <b>IN</b>은 <i>정적 위치</i>입니다: at work, in Canada. (단, home 앞에는 to를 쓰지 않습니다: <i>go home</i>)."
      },
      {
        title: "2. AT vs. ON vs. IN (시간 피라미드)",
        body: "<b>AT</b> = 시각 (at 3:00, at night). <b>ON</b> = 요일과 날짜 (on Monday, on October 21st). <b>IN</b> = 월, 연도, 계절 (in July, in 2026, in the morning)."
      },
      {
        title: "3. During vs. For (~동안)",
        body: "<b>During</b>은 <i>'언제?'</i>(행사 명사: during the movie). <b>For</b>는 <i>'얼마나 오래?'</i>(숫자 기간: for 8 hours)."
      },
      {
        title: "4. Until vs. By (~까지)",
        body: "<b>Until</b>은 동작의 <i>지속</i>, <b>By</b>는 <i>마감 기한</i>을 나타냅니다."
      }
    ],
    lessons: [
      { w: "to", meaning: "~로, ~에게 (목적지/이동)", tl: ["출발지", "to", "목적지"], rule: "사람, 장소, 목표를 향한 이동이나 방향을 나타냅니다.", ex: [["I walk to school.", "목적지."], ["She moved to Canada.", "국가."], ["Talk to me.", "사람."]], tip: "home 앞에는 to를 쓰지 않습니다: 'go home'." },
      { w: "at", meaning: "~에 (정확한 시각/지점)", tl: ["정확한 점", "at"], rule: "시계 시각, 특정 장소에 사용합니다.", ex: [["Class at 9:00 AM.", "시각."], ["Sleep at night.", "관용구."], ["At the bus station.", "장소."]], tip: "'at night', 'at noon'." },
      { w: "on", meaning: "~에 (요일/날짜/표면)", tl: ["특정한 날", "on"], rule: "요일, 날짜, 접촉 표면에 사용합니다.", ex: [["On Monday.", "요일."], ["On March 15th.", "날짜."], ["On the desk.", "표면."]], tip: "'on Friday morning'." },
      { w: "in", meaning: "~에 (월/연도/내부)", tl: ["넓은 기간", "in"], rule: "월, 연도, 계절, 내부 공간에 사용합니다.", ex: [["In 1998.", "연도."], ["In January.", "월."], ["In the library.", "내부."]], tip: "'in the morning'." },
      { w: "for", meaning: "~동안 (기간의 길이)", tl: ["시작", "기간", "끝"], rule: "숫자+시간 단위와 결합하여 지속 기간을 나타냅니다.", ex: [["For three hours.", "시간."], ["For two years.", "연도."], ["For ten minutes.", "분."]], tip: "숫자가 오면 항상 for를 씁니다." },
      { w: "before", meaning: "~하기 전에", tl: ["사건 A", "사건 B", "before"], rule: "먼저 일어나는 일.", ex: [["Wash before lunch.", "식사 전."], ["Think before speaking.", "생각 전."], ["Call before you leave.", "떠나기 전."]], tip: "미래 절도 현재시제: 'before you leave'." },
      { w: "after", meaning: "~한 후에", tl: ["사건 A", "사건 B", "after"], rule: "나중에 일어나는 일.", ex: [["After school.", "방과 후."], ["Home after finishing.", "종료 후."], ["Rest after I eat.", "식사 후."]], tip: "미래 표현도 현재시제: 'after I finish'." },
      { w: "during", meaning: "~동안에 (특정 기간)", tl: ["시작", "끝", "during"], rule: "특정 사건/기간 명사만 결합.", ex: [["During the movie.", "영화 중."], ["During winter.", "겨울철."], ["During the exam.", "시험 중."]], tip: "동사나 절은 올 수 없습니다." },
      { w: "while", meaning: "~하는 동안에 (동시 진행)", tl: ["행동 1", "행동 2", "while"], rule: "두 동작이 동시에 일어날 때 절이나 -ing 결합.", ex: [["Read while she cooks.", "동시."], ["Rang while sleeping.", "방해."], ["Don't text while driving.", "축약."]], tip: "진행형과 자주 결합합니다." },
      { w: "since", meaning: "~이래로, ~부터", tl: ["과거", "현재", "since"], rule: "과거 시작점부터 현재까지 이어짐.", ex: [["Since 2018.", "2018년부터."], ["Since Monday.", "월요일부터."], ["Since childhood.", "어릴 때부터."]], tip: "since는 시작점, for는 기간." },
      { w: "until", meaning: "~까지 (지속)", tl: ["현재", "종료", "until"], rule: "동작이나 상태가 끊이지 않고 지속됨.", ex: [["Open until 9:00 PM.", "9시까지."], ["Wait until I come back.", "올 때까지."], ["Didn't sleep until midnight.", "자정까지."]], tip: "상태의 지속을 나타냅니다." }
    ]
  },

  zh: {
    meta: { name: "中文", chooseOpt: "请选择…" },
    ui: {
      modalTitle: "English Prepositions: Review & Training",
      modalSub: "选择解析与界面的参考语言：",
      title: "英语介词核心复习与强化训练",
      intro: "专为英语学习者打造的介词精讲与实战平台。夯实基础（to, at, on, in, for），攻克核心时间介词（before, after, during, while, since, until），并通过4套随机题库的分级测试巩固掌握。",
      nav: ["语法精讲", "常见陷阱", "速查总结", "实战练习", "分级测验"],
      sec1Title: "1. 语法理论与核心准则",
      sec1Lead: "掌握介词的秘诀在于观察其表达的是移动目的地、精确时刻、日历日期、较长时间段、纯名词还是主谓从句。",
      secTrapsTitle: "⚠️ 学习者最易踩的4大陷阱",
      secTrapsLead: "直击扣分盲点，彻底理清疑难：",
      sec2Title: "2. 快速总结表",
      sec3Title: "3. 实战练习题 (即时反馈)",
      sec3Lead: "在每题中选择介词：选对即刻变绿，选错即刻变橙，并显示详细解析。练到熟练为止！",
      sec4Title: "4. 分级通关测试 (随机抽取15题)",
      sec4Lead: "请选择测试级别。每次点击都将从题库中随机抽取15题。答题过程中颜色保持中立，交卷后才会显示最终成绩与错题。",
      tableHeaders: ["介词", "核心用法", "后接语法成分", "典型例句"],
      tableRows: [
        ["to", "目的地、移动与方向", "地点、人物、目标", "go to school / walk to the park / talk to me"],
        ["at", "具体钟点和特定地点", "精确时刻 / 具体点位", "at 5:00 PM / at the bus stop / at night"],
        ["on", "星期、具体日期和表面", "星期几 / 包含几号的日期", "on Monday / on October 21st / on the desk"],
        ["in", "月份、年份、季节与封闭空间", "较长时间范围 / 空间内部", "in July / in 2026 / in Canada / in the room"],
        ["for", "持续时间长度", "数字 + 时间单位", "for 2 hours / for three days / for 5 years"],
        ["before", "在…之前", "名词、动名词(-ing) 或 句子", "before lunch / before sleeping / before I leave"],
        ["after", "在…之后", "名词、动名词(-ing) 或 句子", "after class / after eating / after I graduate"],
        ["during", "在…期间 (特定事件)", "纯名词（不可接从句）", "during the film / during winter"],
        ["while", "当…时 (同时进行)", "句子 (主谓) 或 动名词(-ing)", "while she was driving / while driving"],
        ["since", "自…以来 (过去起点)", "过去的起始时间点", "since 2020 / since Monday / since I moved"],
        ["until", "直到…为止 (持续动作)", "终止时间点 或 句子", "until 6:00 PM / until you come back"]
      ],
      quickTip: "<b>目的地 vs. 静态位置：</b>朝向目的地移动用 <b>TO</b> (<i>I go to school</i>)；处于某具体地点用 <b>AT</b> (<i>I am at school</i>)；处于城市/国家内部用 <b>IN</b> (<i>I am in Canada</i>)。",
      tipLabel: "名师点拨：",
      btnResetPractice: "重置练习",
      btnSubmitExam: "交卷并查看成绩",
      btnRetryExam: "换一批随机题再测",
      btnBack: "✕ 返回测试列表",
      scoreText: (ok, total) => `答对: ${ok} / ${total} 题`,
      correctPrefix: "✓ 正确！ ",
      wrongMarked: (v) => `✗ 您选择了 “${v}”。 `,
      unanswered: "✗ 未作答。 ",
      answerLabel: "正确答案：",
      yourErrors: "错题精析",
      noErrors: "太棒了！满分通过，零错误！",
      scoreMsgs: [
        "满分！你已经彻底掌握了本级别的知识点。",
        "非常出色！稍作复习错题即可。",
        "已及格！请仔细查看错题解析，可换一批题目再次挑战。",
        "还需继续努力。建议重新阅读理论解析后再试。"
      ],
      cardBeg1Title: "Beginner 1",
      cardBeg1Desc: "涵盖 To, At, On, In, Before, After 的随机15题。",
      cardBeg2Title: "Beginner 2",
      cardBeg2Desc: "聚焦 For, During, While, Since, Until 的随机15题。",
      cardInt1Title: "Intermediate 1",
      cardInt1Desc: "结合目的地(To)、时间、地点与 During vs. For 的随机15题。",
      cardInt2Title: "Intermediate 2",
      cardInt2Desc: "包含 Until vs. By 及 While + -ing 省略句的随机综合15题。",
      btnStart: "开始测试 ➔"
    },
    traps: [
      {
        title: "1. TO vs. AT vs. IN (位移 vs. 静态位置)",
        body: "<b>TO</b> 表示<i>朝向目的地的位移</i>：go <b>to</b> school, drive <b>to</b> work. <b>AT</b> 与 <b>IN</b> 表示<i>静态位置</i>：at work, in Canada. (注意：home 前不加 to，说 <i>go home</i>)。"
      },
      {
        title: "2. AT vs. ON vs. IN (时间金字塔)",
        body: "<b>AT</b> = 精确时刻 (at 3:00, at night). <b>ON</b> = 具体某天与日期 (on Monday, on October 21st). <b>IN</b> = 月份、年份、季节 (in July, in 2026, in the morning)."
      },
      {
        title: "3. During vs. For (在…期间 vs. 长达)",
        body: "<b>During</b> 回答 <i>when? (何时)</i>，接事件名词(during the movie)。<b>For</b> 回答 <i>how long? (多久)</i>，接数字时间段(for 8 hours)。"
      },
      {
        title: "4. Until vs. By (持续 vs. 截止)",
        body: "<b>Until</b> 强调动作持续不中断。<b>By</b> 强调在截止时刻前完成。"
      }
    ],
    lessons: [
      { w: "to", meaning: "到… / 向… (目的地)", tl: ["起点", "to", "目的地"], rule: "表示朝向地点、人物或目标的位移或方向。", ex: [["Walk to school.", "目的地。"], ["Moved to Canada.", "国家。"], ["Talk to me.", "人物。"]], tip: "home 前不加 to：'go home'。" },
      { w: "at", meaning: "在…点 (钟点/具体点)", tl: ["精准点", "at"], rule: "用于钟点时刻与精准地点。", ex: [["Class at 9:00 AM.", "时刻。"], ["Sleep at night.", "固定短语。"], ["At the bus station.", "地点。"]], tip: "'at night', 'at noon'。" },
      { w: "on", meaning: "在…天 (星期/日期/表面)", tl: ["具体某天", "on"], rule: "用于星期几、具体日期与表面。", ex: [["On Monday.", "星期。"], ["On March 15th.", "日期。"], ["On the desk.", "表面。"]], tip: "'on Friday morning'。" },
      { w: "in", meaning: "在…内 (月/年/空间)", tl: ["宽泛周期", "in"], rule: "用于月份、年份、季节及封闭空间内部。", ex: [["In 1998.", "年份。"], ["In January.", "月份。"], ["In the library.", "内部。"]], tip: "'in the morning'。" },
      { w: "for", meaning: "长达… (持续时长)", tl: ["起点", "时长", "终点"], rule: "后接数字加时间单位，表示动作持续长度。", ex: [["For three hours.", "小时。"], ["For two years.", "年数。"], ["For ten minutes.", "分钟。"]], tip: "只要有具体数字时长，一律用 for。" },
      { w: "before", meaning: "在…之前", tl: ["事件 A", "事件 B", "before"], rule: "表示时间在先。", ex: [["Wash before lunch.", "饭前。"], ["Think before speaking.", "言前。"], ["Call before you leave.", "走前。"]], tip: "从句用一般现在时替代将来时。" },
      { w: "after", meaning: "在…之后", tl: ["事件 A", "事件 B", "after"], rule: "表示动作在后。", ex: [["After school.", "放学后。"], ["Home after finishing.", "做完后。"], ["Rest after I eat.", "饭后。"]], tip: "从句用一般现在时。" },
      { w: "during", meaning: "在…期间 (特定事件)", tl: ["开始", "结束", "during"], rule: "后接纯事件名词。", ex: [["During the movie.", "电影期间。"], ["During winter.", "冬季。"], ["During the exam.", "考试期间。"]], tip: "绝不可接从句。" },
      { w: "while", meaning: "当…时 (同时发生)", tl: ["动作 1", "动作 2", "while"], rule: "连接同时发生的动作，接句子或-ing。", ex: [["Read while she cooks.", "同时。"], ["Rang while sleeping.", "打断。"], ["Don't text while driving.", "省略句。"]], tip: "常与进行时态连用。" },
      { w: "since", meaning: "自…以来", tl: ["起点", "现在", "since"], rule: "标明从过去起点延续至今，搭配现在完成时。", ex: [["Since 2018.", "自2018。"], ["Since Monday.", "自周一。"], ["Since childhood.", "自童年。"]], tip: "since = 起点；for = 时长。" },
      { w: "until", meaning: "直到…为止", tl: ["现在", "终止", "until"], rule: "表示动作持续进行直至终止时刻。", ex: [["Open until 9:00 PM.", "营业至9点。"], ["Wait until I come back.", "等至回来。"], ["Didn't sleep until midnight.", "直到午夜才睡。"]], tip: "强调动作的持续性。" }
    ]
  },

  ja: {
    meta: { name: "日本語", chooseOpt: "選択…" },
    ui: {
      modalTitle: "English Prepositions: Review & Training",
      modalSub: "解説やフィードバックを表示する言語を選択してください：",
      title: "英語前置詞 総復習＆トレーニング",
      intro: "英語学習者のための実践的マスターコース。基礎の型（to, at, on, in, for）から重要時間表現（before, after, during, while, since, until）まで体系的に学び、ランダム出題の4段階レベル別テストで実力を測定しましょう。",
      nav: ["基本理論", "落とし穴", "まとめ表", "実践練習", "レベル別テスト"],
      sec1Title: "1. 基本理論と重要ルール",
      sec1Lead: "前置詞攻略の鍵は、移動・目的地を表すか、時刻、曜日、広い期間、名詞のみ、主語＋動詞の節かを正しく見極めることです。",
      secTrapsTitle: "⚠️ 最も間違えやすい4大落とし穴",
      secTrapsLead: "日本人学習者がつまずきやすい重要ポイント：",
      sec2Title: "2. 早見まとめ表",
      sec3Title: "3. 実践練習（即時カラー判定）",
      sec3Lead: "選択肢を選ぶと、正解は即座に【緑色】、不正解は【オレンジ色】に変化して解説が表示されます。自信がつくまで練習しましょう！",
      sec4Title: "4. レベル別最終確認テスト（毎回ランダム15問）",
      sec4Lead: "各テストをクリックするたびに問題プールから15問がランダムに抽出されます。解答中は色が変化せず、最後に提出した時点で採点されます。",
      tableHeaders: ["前置詞", "主な用法", "後ろに続く構造", "例文"],
      tableRows: [
        ["to", "目的地・移動・方向", "場所・人・目標", "go to school / walk to the park / talk to me"],
        ["at", "特定の時刻・特定の地点", "正確な時刻 / ピンポイントの場所", "at 5:00 PM / at the bus stop / at night"],
        ["on", "曜日・特定の日付・表面", "曜日 / 日にち", "on Monday / on October 21st / on the desk"],
        ["in", "月・年・季節・空間の内部", "広めの期間 / 空間", "in July / in 2026 / in Canada / in the room"],
        ["for", "継続する期間の長さ", "数字 ＋ 時間の単位", "for 2 hours / for three days / for 5 years"],
        ["before", "〜の前に", "名詞、-ing、または節（主語+動詞）", "before lunch / before sleeping / before I leave"],
        ["after", "〜の後に", "名詞、-ing、または節（主語+動詞）", "after class / after eating / after I graduate"],
        ["during", "〜の間に（特定イベント）", "名詞のみ（節は不可）", "during the film / during winter"],
        ["while", "〜している間に（同時進行）", "節（主語 + 動詞）または -ing", "while she was driving / while driving"],
        ["since", "〜以来（過去の起点）", "過去の起点（年月や出来事）", "since 2020 / since Monday / since I moved"],
        ["until", "〜までずっと（継続）", "終了の時点または節", "until 6:00 PM / until you come back"]
      ],
      quickTip: "<b>目的地 vs 滞在場所：</b>目的地に向かう移動には <b>TO</b> (<i>I go to school</i>)、ピンポイントの滞在には <b>AT</b> (<i>I am at school</i>)、都市や国には <b>IN</b> (<i>I am in Canada</i>) を使います。",
      tipLabel: "ワンポイント：",
      btnResetPractice: "練習をリセット",
      btnSubmitExam: "テストを提出して採点",
      btnRetryExam: "別の問題で再挑戦",
      btnBack: "✕ テスト一覧に戻る",
      scoreText: (ok, total) => `正解数: ${ok} / ${total} 問`,
      correctPrefix: "✓ 正解です！ ",
      wrongMarked: (v) => `✗ あなたの選択: 「${v}」。 `,
      unanswered: "✗ 未回答。 ",
      answerLabel: "正解: ",
      yourErrors: "間違えた問題と解説",
      noErrors: "満点です！ミスはありませんでした。",
      scoreMsgs: [
        "完璧です！このレベルを完全に習得しています。",
        "素晴らしい成績です！間違えた問題だけ復習しましょう。",
        "合格です！解説を読んで別のランダム問題にも挑戦しましょう。",
        "復習が必要です。基本理論を見直して再挑戦してください。"
      ],
      cardBeg1Title: "Beginner 1",
      cardBeg1Desc: "To, At, On, In, Before, After からランダム15問。",
      cardBeg2Title: "Beginner 2",
      cardBeg2Desc: "For, During, While, Since, Until からランダム15問。",
      cardInt1Title: "Intermediate 1",
      cardInt1Desc: "方向(To)、時間、場所、During vs. For からランダム15問。",
      cardInt2Title: "Intermediate 2",
      cardInt2Desc: "Until vs. By や While + -ing 構文からランダム15問。",
      btnStart: "テスト開始 ➔"
    },
    traps: [
      {
        title: "1. TO vs. AT vs. IN (移動 vs. 滞在)",
        body: "<b>TO</b> は<i>目的地への移動</i>を表します：go <b>to</b> school, walk <b>to</b> the park. <b>AT</b> と <b>IN</b> は<i>滞在場所</i>です：at work, in Canada. (注意：home には to を付けず <i>go home</i> と言います)。"
      },
      {
        title: "2. AT vs. ON vs. IN (ピラミッド)",
        body: "<b>AT</b> = 特定の時刻 (at 3:00, at night). <b>ON</b> = 曜日と日付 (on Monday, on October 21st). <b>IN</b> = 月・年・季節 (in July, in 2026, in the morning)."
      },
      {
        title: "3. During vs. For (〜の間)",
        body: "<b>During</b>は <i>いつ？</i>（特定イベント: during the movie）。<b>For</b>は <i>どれくらいの長さ？</i>（数字: for 8 hours）。"
      },
      {
        title: "4. Until vs. By (継続 vs. 期限)",
        body: "<b>Until</b> は動作の継続、<b>By</b> は期限（遅くともその時まで）を表します。"
      }
    ],
    lessons: [
      { w: "to", meaning: "〜へ、〜に (目的地・移動)", tl: ["出発地", "to", "目的地"], rule: "場所、人、目標への移動や方向を示します。", ex: [["Walk to school.", "目的地。"], ["Moved to Canada.", "国。"], ["Talk to me.", "人。"]], tip: "home には to を付けません：'go home'。" },
      { w: "at", meaning: "〜時に / 〜の場所で", tl: ["ピンポイント", "at"], rule: "時計の時刻、特定の地点に使います。", ex: [["Class at 9:00 AM.", "時刻。"], ["Sleep at night.", "決まり文句。"], ["At the bus station.", "場所。"]], tip: "'at night', 'at noon'。" },
      { w: "on", meaning: "〜曜日に / 〜の上に", tl: ["特定の日", "on"], rule: "曜日、日付、表面に使います。", ex: [["On Monday.", "曜日。"], ["On March 15th.", "日付。"], ["On the desk.", "表面。"]], tip: "'on Friday morning'。" },
      { w: "in", meaning: "〜月に / 〜年の中に", tl: ["広い期間", "in"], rule: "月、年、季節、空間の内部に使います。", ex: [["In 1998.", "年。"], ["In January.", "月。"], ["In the library.", "内部。"]], tip: "'in the morning'。" },
      { w: "for", meaning: "〜の間（期間の長さ）", tl: ["始点", "期間", "終点"], rule: "数字＋時間単位が続き、継続する長さを示します。", ex: [["For three hours.", "時間。"], ["For two years.", "年数。"], ["For ten minutes.", "分数。"]], tip: "数字があれば必ず for を使います。" },
      { w: "before", meaning: "〜の前に", tl: ["出来事 A", "出来事 B", "before"], rule: "時間的に先に起こること。", ex: [["Wash before lunch.", "食事前。"], ["Think before speaking.", "発言前。"], ["Call before you leave.", "出発前。"]], tip: "未来の節でも現在形：「before you leave」。" },
      { w: "after", meaning: "〜の後に", tl: ["出来事 A", "出来事 B", "after"], rule: "後に起こる事柄を表します。", ex: [["After school.", "放課後。"], ["Home after finishing.", "完了後。"], ["Rest after I eat.", "食後。"]], tip: "未来も現在時制：「after I finish」。" },
      { w: "during", meaning: "〜の間に（特定行事）", tl: ["開始", "終了", "during"], rule: "特定の期間や行事の名詞のみが続きます。", ex: [["During the movie.", "映画中。"], ["During winter.", "冬中。"], ["During the exam.", "試験中。"]], tip: "節は続けられません。" },
      { w: "while", meaning: "〜している間に（同時進行）", tl: ["動作 1", "動作 2", "while"], rule: "2つの動作が同時に起こること。節または-ingが続きます。", ex: [["Read while she cooks.", "同時。"], ["Rang while sleeping.", "中断。"], ["Don't text while driving.", "省略。"]], tip: "進行形と好相性です。" },
      { w: "since", meaning: "〜以来、〜から", tl: ["起点", "現在", "since"], rule: "過去の起点から現在まで継続していること。", ex: [["Since 2018.", "2018年から。"], ["Since Monday.", "月曜から。"], ["Since childhood.", "幼少期から。"]], tip: "sinceは起点、forは長さ。" },
      { w: "until", meaning: "〜までずっと（継続）", tl: ["現在", "終了", "until"], rule: "動作や状態が継続して終わる時点を表します。", ex: [["Open until 9:00 PM.", "9時まで。"], ["Wait until I come back.", "戻るまで。"], ["Didn't sleep until midnight.", "真夜中まで。"]], tip: "動作の継続を表します。" }
    ]
  },

  ml: {
    meta: { name: "മലയാളം", chooseOpt: "തിരഞ്ഞെടുക്കൂ…" },
    ui: {
      modalTitle: "English Prepositions: Review & Training",
      modalSub: "വിശദീകരണങ്ങൾക്കുള്ള ഭാഷ തിരഞ്ഞെടുക്കുക:",
      title: "ഇംഗ്ലീഷ് പ്രെപോസിഷനുകൾ: പരിശീലന കോഴ്സ്",
      intro: "ഇംഗ്ലീഷ് പഠിതാക്കൾക്കായി തയ്യാറാക്കിയ പ്രെപോസിഷൻ ഗൈഡ്. അടിസ്ഥാന പദങ്ങൾ (to, at, on, in, for), സമയസൂചകങ്ങൾ (before, after, during, while, since, until) എന്നിവ പഠിച്ച് റാൻഡം ചോദ്യങ്ങൾ അടങ്ങിയ 4 പരീക്ഷകൾ എഴുതുക.",
      nav: ["നിയമങ്ങൾ", "പ്രധാന തെറ്റുകൾ", "ചുരുക്കപ്പട്ടിക", "പരിശീലനം", "പരീക്ഷകൾ"],
      sec1Title: "1. വ്യാകരണ നിയമങ്ങൾ",
      sec1Lead: "യാത്ര/ലക്ഷ്യമാണോ, കൃത്യ സമയമാണോ, ദിവസമാണോ, കാലയളവാണോ എന്ന് മനസ്സിലാക്കുകയാണ് പ്രധാനം.",
      secTrapsTitle: "⚠️ സാധാരണയായി വരുന്ന 4 തെറ്റുകൾ",
      secTrapsLead: "പഠിതാക്കൾക്ക് എപ്പോഴും തെറ്റുപറ്റുന്ന പ്രധാന കാര്യങ്ങൾ:",
      sec2Title: "2. ചുരുക്കപ്പട്ടിക",
      sec3Title: "3. പരിശീലന ചോദ്യങ്ങൾ (തത്സമയ ഫലം)",
      sec3Lead: "ഓരോ വാക്യത്തിലും തിരഞ്ഞെടുക്കുക: ശരിയാണെങ്കിൽ പച്ചനിറവും തെറ്റാണെങ്കിൽ ഓറഞ്ച് നിറവും കാണിക്കും!",
      sec4Title: "4. ഫൈനൽ പരീക്ഷകൾ (റാൻഡം 15 ചോദ്യങ്ങൾ)",
      sec4Lead: "ഓരോ തവണയും പൂളിൽ നിന്ന് 15 പുതിയ ചോദ്യങ്ങൾ ലഭിക്കും. പരീക്ഷ സമർപ്പിക്കുമ്പോൾ മാത്രമേ കളർ കാണിക്കൂ.",
      tableHeaders: ["വാക്ക്", "പ്രധാന ഉപയോഗം", "ശേഷം വരുന്നത്", "ഉദാഹരണം"],
      tableRows: [
        ["to", "ലക്ഷ്യസ്ഥാനം, ദിശ", "സ്ഥലം, വ്യക്തി, ലക്ഷ്യം", "go to school / walk to the park / talk to me"],
        ["at", "കൃത്യ സമയം, പ്രത്യേക സ്ഥലം", "കൃത്യമായ മണിക്കൂർ / സ്ഥലം", "at 5:00 PM / at the bus stop / at night"],
        ["on", "ദിവസങ്ങൾ, തീയതികൾ, ഉപരിതലം", "ആഴ്ചയിലെ ദിവസം / തീയതി", "on Monday / on October 21st / on the desk"],
        ["in", "മാസം, വർഷം, അടഞ്ഞ സ്ഥലം", "വലിയ കാലയളവ് / ഇടം", "in July / in 2026 / in Canada / in the room"],
        ["for", "സമയ ദൈർഘ്യം", "സംഖ്യ + സമയ യൂണിറ്റ്", "for 2 hours / for three days / for 5 years"],
        ["before", "മുമ്പ്", "നാമം, -ing ക്രിയ, അല്ലെങ്കിൽ വാക്യം", "before lunch / before sleeping / before I leave"],
        ["after", "ശേഷം", "നാമം, -ing ക്രിയ, അല്ലെങ്കിൽ വാക്യം", "after class / after eating / after I graduate"],
        ["during", "ആ സമയത്ത് (പ്രത്യേക സംഭവം)", "നാമം മാത്രം (ക്രിയ പാടില്ല)", "during the film / during winter"],
        ["while", "ചെയ്യുന്ന സമയത്ത്", "വാക്യം (Subject+Verb) അല്ലെങ്കിൽ -ing", "while she was driving / while driving"],
        ["since", "മുതൽ (തുടങ്ങിയ സമയം)", "ഭൂതകാലത്തിലെ തുടക്ക സമയം", "since 2020 / since Monday / since I moved"],
        ["until", "വരെ (തുടർച്ചയായ കാര്യം)", "അവസാന സമയം അല്ലെങ്കിൽ വാക്യം", "until 6:00 PM / until you come back"]
      ],
      quickTip: "<b>ലക്ഷ്യസ്ഥാനം vs സ്ഥാനം:</b> അങ്ങോട്ടേക്ക് പോകുന്നതിന് <b>TO</b> (<i>I go to school</i>). ഒരു സ്ഥലത്ത് നിൽക്കുന്നതിന് <b>AT</b> (<i>I am at school</i>), രാജ്യത്തിനുള്ളിലാണെങ്കിൽ <b>IN</b> (<i>I am in Canada</i>).",
      tipLabel: "പ്രത്യേകം ശ്രദ്ധിക്കുക:",
      btnResetPractice: "പരിശീലനം റീസെറ്റ് ചെയ്യുക",
      btnSubmitExam: "പരീക്ഷ സമർപ്പിക്കൂ & മാർക്ക് അറിയൂ",
      btnRetryExam: "പുതിയ റാൻഡം പരീക്ഷ",
      btnBack: "✕ പരീക്ഷാ ലിസ്റ്റിലേക്ക് മടങ്ങുക",
      scoreText: (ok, total) => `ലഭിച്ച മാർക്ക്: ${total}-ൽ ${ok}`,
      correctPrefix: "✓ ശരിയുത്തരം! ",
      wrongMarked: (v) => `✗ നിങ്ങൾ തിരഞ്ഞെടുത്തത് «${v}». `,
      unanswered: "✗ ഉത്തരമെഴുതിയില്ല. ",
      answerLabel: "ശരിയായ ഉത്തരം: ",
      yourErrors: "വന്ന തെറ്റുകൾ",
      noErrors: "അഭിനന്ദനങ്ങൾ! മുഴുവൻ മാർക്കും നേടി.",
      scoreMsgs: [
        "മികച്ചത്! നിങ്ങൾ ഈ ഭാഗം പൂർണ്ണമായി പഠിച്ചു.",
        "വളരെ നല്ലത്! തെറ്റിയ ചോദ്യങ്ങൾ മാത്രം ശ്രദ്ധിക്കുക.",
        "വിജയിച്ചു! വിശദീകരണം വായിച്ച് പുതിയ പരീക്ഷ എഴുതുക.",
        "കൂടുതൽ പരിശീലനം ആവശ്യമാണ്. വ്യാകരണം വീണ്ടും വായിക്കുക."
      ],
      cardBeg1Title: "Beginner 1",
      cardBeg1Desc: "To, At, On, In, Before, After എന്നിവയിൽ നിന്ന് റാൻഡം 15 ചോദ്യങ്ങൾ.",
      cardBeg2Title: "Beginner 2",
      cardBeg2Desc: "For, During, While, Since, Until എന്നിവയിൽ നിന്ന് റാൻഡം 15 ചോദ്യങ്ങൾ.",
      cardInt1Title: "Intermediate 1",
      cardInt1Desc: "To, സമയം, സ്ഥലം, During vs. For റാൻഡം 15 ചോദ്യങ്ങൾ.",
      cardInt2Title: "Intermediate 2",
      cardInt2Desc: "Until vs. By, While + -ing റാൻഡം 15 ചോദ്യങ്ങൾ.",
      btnStart: "പരീക്ഷ തുടങ്ങാം ➔"
    },
    traps: [
      {
        title: "1. TO vs. AT vs. IN (യാത്ര vs. സ്ഥാനം)",
        body: "<b>TO</b> ലക്ഷ്യസ്ഥാനത്തേക്കുള്ള യാത്രയെ കാണിക്കുന്നു: go <b>to</b> school. <b>AT</b> ഉം <b>IN</b> ഉം നിൽക്കുന്ന സ്ഥലമാണ്: at work, in Canada. ('home'നൊപ്പം to ഉപയോഗിക്കരുത്: <i>go home</i>)."
      },
      {
        title: "2. AT vs. ON vs. IN (പിരമിഡ്)",
        body: "<b>AT</b> = സമയം (at 3:00, at night). <b>ON</b> = ദിവസങ്ങളും തീയതികളും (on Monday). <b>IN</b> = മാസം, വർഷം (in July, in 2026)."
      },
      {
        title: "3. During vs. For",
        body: "<b>During</b> ഒരു സംഭവത്തെ കാണിക്കുന്നു (during the movie). എന്നാൽ സമയ ദൈർഘ്യത്തിന് <b>for</b> ഉപയോഗിക്കണം (for 8 hours)."
      },
      {
        title: "4. Until vs. By",
        body: "<b>Until</b> ഒരു കാര്യത്തിന്റെ തുടർച്ചയെയും <b>By</b> അവസാന സമയപരിധിയെയും കാണിക്കുന്നു."
      }
    ],
    lessons: [
      { w: "to", meaning: "~ലേക്ക്, ~യ്ക്ക് (ലക്ഷ്യസ്ഥാനം)", tl: ["തുടക്കം", "to", "ലക്ഷ്യം"], rule: "ഒരു സ്ഥലത്തേക്കോ വ്യക്തിയിലേക്കോ ഉള്ള ചലനം കാണിക്കുന്നു.", ex: [["Walk to school.", "സ്കൂളിലേക്ക്."], ["Moved to Canada.", "കാനഡയിലേക്ക്."], ["Talk to me.", "എന്നോട്."]], tip: "'home'നൊപ്പം to ഉപയോഗിക്കരുത്: 'go home'." },
      { w: "at", meaning: "കൃത്യ സമയത്ത് / സ്ഥലത്ത്", tl: ["കൃത്യ ബിന്ദു", "at"], rule: "ക്ലോക്കിലെ സമയം, കൃത്യമായ സ്ഥലം എന്നിവയ്ക്ക്.", ex: [["At 9:00 AM.", "സമയം."], ["At night.", "രാത്രി."], ["At the bus station.", "സ്ഥലം."]], tip: "'at night', 'at noon'." },
      { w: "on", meaning: "ദിവസങ്ങളിൽ / മേൽ", tl: ["നിശ്ചിത ദിവസം", "on"], rule: "ആഴ്ചയിലെ ദിവസങ്ങൾ, തീയതികൾ, ഉപരിതലം എന്നിവയ്ക്ക്.", ex: [["On Monday.", "തിങ്കൾ."], ["On March 15th.", "തീയതി."], ["On the desk.", "മേശപ്പുറത്ത്."]], tip: "'on Friday morning'." },
      { w: "in", meaning: "മാസത്തിൽ / വർഷത്തിൽ / ഉള്ളിൽ", tl: ["വിശാല കാലം", "in"], rule: "മാസം, വർഷം, അടഞ്ഞ മുറികൾ എന്നിവയ്ക്ക്.", ex: [["In 1998.", "വർഷം."], ["In January.", "മാസം."], ["In the library.", "കെട്ടിടം."]], tip: "'in the morning'." },
      { w: "for", meaning: "ഇത്ര സമയം കൊണ്ട്", tl: ["തുടക്കം", "ദൈർഘ്യം", "അവസാനം"], rule: "ഒരു കാര്യം എത്ര സമയം നീണ്ടുനിന്നു എന്ന് കാണിക്കാൻ.", ex: [["For three hours.", "മണിക്കൂർ."], ["For two years.", "വർഷം."], ["For ten minutes.", "മിനിറ്റ്."]], tip: "സംഖ്യകൾ വരുമ്പോൾ for ഉപയോഗിക്കുക." },
      { w: "before", meaning: "മുമ്പ്", tl: ["ആദ്യം", "രണ്ടാമത്", "before"], rule: "ആദ്യം സംഭവിക്കുന്ന കാര്യത്തിന്.", ex: [["Wash before lunch.", "ഭക്ഷണത്തിന് മുമ്പ്."], ["Think before speaking.", "സംസാരിക്കും മുമ്പ്."], ["Call before you leave.", "പോകും മുമ്പ്."]], tip: "ഭാവി വാക്യങ്ങളിലും present tense: 'before you leave'." },
      { w: "after", meaning: "ശേഷം", tl: ["ആദ്യം", "രണ്ടാമത്", "after"], rule: "പിന്നീട് നടക്കുന്ന കാര്യത്തെ സൂചിപ്പിക്കുന്നു.", ex: [["Football after school.", "സ്കൂൾ കഴിഞ്ഞ ശേഷം."], ["Home after finishing.", "തീർത്ത ശേഷം."], ["Rest after I eat.", "ഭക്ഷണ ശേഷം."]], tip: "ഭാവിയിലും present tense: 'after I finish'." },
      { w: "during", meaning: "ആ സമയത്ത് (ഇടയിൽ)", tl: ["തുടക്കം", "ഒടുക്കം", "during"], rule: "ഒരു സംഭവത്തിന്റെ ഇടയിൽ. നാമം മാത്രം.", ex: [["During the movie.", "സിനിമയ്ക്കിടയിൽ."], ["During winter.", "ശീതകാലത്ത്."], ["During the exam.", "പരീക്ഷയിൽ."]], tip: "നാമത്തോടൊപ്പം മാത്രം." },
      { w: "while", meaning: "ചെയ്യുന്ന സമയത്ത്", tl: ["കാര്യം 1", "കാര്യം 2", "while"], rule: "ഒരേ സമയം നടക്കുന്ന കാര്യങ്ങൾക്ക്.", ex: [["Read while she cooks.", "ഒരേ സമയം."], ["Rang while sleeping.", "തടസ്സം."], ["Don't text while driving.", "ചുരുക്ക രൂപം."]], tip: "Past continuousനൊപ്പം വരുന്നു." },
      { w: "since", meaning: "മുതൽ (തുടങ്ങിയ സമയം)", tl: ["തുടക്കം", "ഇപ്പോൾ", "since"], rule: "ഭൂതകാലത്തിൽ തുടങ്ങിയ നിശ്ചിത സമയം.", ex: [["Since 2018.", "2018 മുതൽ."], ["Since Monday.", "തിങ്കൾ മുതൽ."], ["Since childhood.", "കുട്ടിക്കാലം മുതൽ."]], tip: "since = തുടങ്ങിയ സമയം; for = എത്ര കാലം." },
      { w: "until", meaning: "വരെ (തുടർച്ച)", tl: ["ഇപ്പോൾ", "അവസാനം", "until"], rule: "ഒരു കാര്യം അവസാനിക്കുന്ന സമയം വ്യക്തമാക്കുന്നു.", ex: [["Open until 9:00 PM.", "9 മണി വരെ."], ["Wait until I come back.", "വരും വരെ."], ["Didn't sleep until midnight.", "അർദ്ധരാത്രി വരെ."]], tip: "തുടർച്ചയായ കാര്യങ്ങൾക്ക്." }
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
