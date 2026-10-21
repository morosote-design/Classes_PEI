/**
 * questions.js
 * Contains all Warm-up and Final Exam questions.
 * Each question has:
 *  - s: Sentence with "___"
 *  - a: Correct answer
 *  - opts: Exactly 4 hand-picked options (the correct answer + 3 classic distractors)
 *  - exp: Explanation
 */

const WARMUP_DATA = [
  { s: "Our English class starts ___ 9:00 AM.", a: "at", opts: ["at", "on", "in", "by"], exp: "Use 'at' for precise clock times (at 9:00 AM)." },
  { s: "I was born ___ Canada in 1999.", a: "in", opts: ["in", "at", "on", "to"], exp: "Use 'in' for countries, cities, and years (in Canada)." },
  { s: "We have an important quiz ___ Friday morning.", a: "on", opts: ["on", "in", "at", "for"], exp: "Use 'on' for specific days of the week (on Friday)." },
  { s: "She lived in Charlottetown ___ three years.", a: "for", opts: ["for", "during", "since", "in"], exp: "Use 'for' to describe duration with numbers of years/hours." },
  { s: "Brush your teeth ___ going to sleep.", a: "before", opts: ["before", "after", "while", "during"], exp: "Action sequence: first you brush your teeth, before sleeping." },
  { s: "Please turn off your cellphones ___ the presentation.", a: "during", opts: ["during", "while", "for", "in"], exp: "Followed by a noun event ('the presentation') without a verb: use 'during'." },
  { s: "The phone rang ___ I was making dinner.", a: "while", opts: ["while", "during", "for", "since"], exp: "Followed by a full clause with subject + verb ('I was making'): use 'while'." },
  { s: "I have known my classmate ___ last September.", a: "since", opts: ["since", "for", "from", "in"], exp: "Present perfect tense + past starting point (last September): use 'since'." },
  { s: "The library remains open ___ 10:00 PM tonight.", a: "until", opts: ["until", "since", "at", "by"], exp: "Continuous state continuing up to a closing point: use 'until'." },
  { s: "___ finishing the homework, we relaxed and watched a movie.", a: "after", opts: ["after", "before", "during", "until"], exp: "Subsequent action: after completing homework, we relaxed." }
];

const EXAMS = {
  beg1: {
    title: "Beginner 1: Foundations (At, On, In, Before, After)",
    questions: [
      { s: "The train departs promptly ___ 8:15 AM.", a: "at", opts: ["at", "on", "in", "by"], exp: "Exact clock time requires 'at'." },
      { s: "My family always gathers for dinner ___ Sundays.", a: "on", opts: ["on", "in", "at", "to"], exp: "Days of the week take 'on'." },
      { s: "School starts ___ September in North America.", a: "in", opts: ["in", "on", "at", "for"], exp: "Months of the year take 'in'." },
      { s: "Always wash your hands ___ eating your meal.", a: "before", opts: ["before", "after", "during", "while"], exp: "Wash first, eat second: 'before'." },
      { s: "___ dinner, we helped clean the dishes.", a: "after", opts: ["after", "before", "during", "while"], exp: "Dinner finished first, dishes cleaned second: 'after'." },
      { s: "He was born ___ July 14th.", a: "on", opts: ["on", "in", "at", "to"], exp: "Specific calendar date with a day takes 'on'." },
      { s: "I like to read quietly ___ night.", a: "at", opts: ["at", "in", "on", "during"], exp: "Set expression: 'at night'." },
      { s: "They moved into their new house ___ 2021.", a: "in", opts: ["in", "at", "on", "since"], exp: "Years take 'in'." },
      { s: "Turn off the stove ___ you leave the kitchen.", a: "before", opts: ["before", "after", "until", "while"], exp: "Turn off first, then exit: 'before'." },
      { s: "We rested for a few minutes ___ the gym workout.", a: "after", opts: ["after", "before", "during", "in"], exp: "Following the workout: 'after'." },
      { s: "Meet me ___ noon near the cafeteria.", a: "at", opts: ["at", "on", "in", "by"], exp: "Exact midpoint of day: 'at noon'." },
      { s: "I leave for work early ___ the morning.", a: "in", opts: ["in", "at", "on", "for"], exp: "Parts of the day take 'in the morning'." },
      { s: "Her graduation ceremony is ___ Saturday.", a: "on", opts: ["on", "in", "at", "by"], exp: "Day of the week takes 'on'." },
      { s: "Check your mirrors ___ changing lanes.", a: "before", opts: ["before", "after", "while", "during"], exp: "Action done prior to changing lanes: 'before'." },
      { s: "We went for an ice cream ___ the movie ended.", a: "after", opts: ["after", "before", "until", "during"], exp: "Event occurred subsequent to the movie: 'after'." }
    ]
  },

  beg2: {
    title: "Beginner 2: Time & Duration (For, During, While, Since, Until)",
    questions: [
      { s: "She has studied English ___ four months.", a: "for", opts: ["for", "during", "since", "in"], exp: "Duration with a number of months takes 'for'." },
      { s: "Don't speak loudly ___ the exam.", a: "during", opts: ["during", "while", "for", "at"], exp: "Followed by a noun event ('the exam') without a verb: 'during'." },
      { s: "Someone knocked on the door ___ I was taking a shower.", a: "while", opts: ["while", "during", "for", "since"], exp: "Clause with subject and verb ('I was taking'): 'while'." },
      { s: "I haven't seen my cousin ___ 2019.", a: "since", opts: ["since", "for", "from", "in"], exp: "Starting point in the past with present perfect: 'since'." },
      { s: "Please wait in this room ___ the doctor calls your name.", a: "until", opts: ["until", "since", "during", "while"], exp: "Wait continuously up to the moment called: 'until'." },
      { s: "He lived in Halifax ___ five years.", a: "for", opts: ["for", "during", "since", "in"], exp: "Quantity of years: 'for'." },
      { s: "I felt so cold ___ the winter.", a: "during", opts: ["during", "for", "while", "since"], exp: "Named season noun: 'during the winter'." },
      { s: "She listens to podcasts ___ she walks to school.", a: "while", opts: ["while", "during", "for", "until"], exp: "Simultaneous action with subject + verb: 'while'." },
      { s: "We have been good friends ___ elementary school.", a: "since", opts: ["since", "for", "during", "from"], exp: "Starting landmark in the past: 'since'." },
      { s: "The supermarket stays open ___ 11:00 PM.", a: "until", opts: ["until", "since", "at", "during"], exp: "Closing terminal hour: 'until'." },
      { s: "He slept ___ nine hours last night.", a: "for", opts: ["for", "during", "in", "since"], exp: "Duration of time with number of hours: 'for'." },
      { s: "Several passengers felt sick ___ the flight.", a: "during", opts: ["during", "while", "for", "since"], exp: "Noun event without a verb ('the flight'): 'during'." },
      { s: "Be quiet ___ the baby is sleeping.", a: "while", opts: ["while", "during", "for", "until"], exp: "Simultaneous ongoing action with clause: 'while'." },
      { s: "She has been feeling sick ___ Tuesday.", a: "since", opts: ["since", "for", "from", "on"], exp: "Specific day starting point: 'since'." },
      { s: "I stayed in bed ___ noon because I had no classes.", a: "until", opts: ["until", "since", "for", "during"], exp: "Continuous stay up to that time: 'until'." }
    ]
  },

  int1: {
    title: "Intermediate 1: Mixed Time & Pitfalls",
    questions: [
      { s: "I woke up three times ___ the night because of the storm.", a: "during", opts: ["during", "for", "while", "in"], exp: "Happened inside the timeframe of the night: 'during'." },
      { s: "He spoke on the phone ___ nearly an hour.", a: "for", opts: ["for", "during", "since", "in"], exp: "Describes length of time (an hour): 'for'." },
      { s: "The flight was delayed, so we waited ___ midnight.", a: "until", opts: ["until", "since", "during", "by"], exp: "Waited continuously up to midnight: 'until'." },
      { s: "She has been working at the hospital ___ she graduated.", a: "since", opts: ["since", "for", "during", "until"], exp: "Starting event clause with present perfect: 'since'." },
      { s: "Look both ways ___ crossing the street.", a: "before", opts: ["before", "after", "while", "during"], exp: "First look, then cross: 'before'." },
      { s: "The power went out ___ the thunderstorm.", a: "during", opts: ["during", "while", "for", "in"], exp: "Noun event without a verb ('the thunderstorm'): 'during'." },
      { s: "He burned his finger ___ he was cooking.", a: "while", opts: ["while", "during", "for", "since"], exp: "Simultaneous background action: 'while'." },
      { s: "Our final project is due ___ October 31st.", a: "on", opts: ["on", "in", "at", "until"], exp: "Specific calendar date requires 'on'." },
      { s: "I didn't hear the alarm ___ it was too late.", a: "until", opts: ["until", "since", "while", "during"], exp: "Negative 'not... until' structure: 'until'." },
      { s: "They stayed in Prince Edward Island ___ two weeks.", a: "for", opts: ["for", "during", "in", "since"], exp: "Quantity of weeks requires 'for'." },
      { s: "We can grab coffee ___ the meeting finishes.", a: "after", opts: ["after", "before", "during", "until"], exp: "Meeting finishes first, coffee follows: 'after'." },
      { s: "I always feel energized ___ the morning.", a: "in", opts: ["in", "on", "at", "for"], exp: "Part of the day takes 'in the morning'." },
      { s: "The store opens ___ 7:00 AM every day.", a: "at", opts: ["at", "on", "in", "by"], exp: "Exact clock hour: 'at'." },
      { s: "She received a promotion ___ only six months on the job.", a: "after", opts: ["after", "before", "during", "in"], exp: "Following that time span: 'after'." },
      { s: "The baby cried ___ the entire movie.", a: "during", opts: ["during", "while", "for", "in"], exp: "Noun phrase ('the entire movie'): 'during'." }
    ]
  },

  int2: {
    title: "Intermediate 2: Advanced Nuances & Complex Sentences",
    questions: [
      { s: "Never check text messages ___ driving.", a: "while", opts: ["while", "during", "before", "after"], exp: "Reduced clause with identical subject: 'while driving'." },
      { s: "He worked on the assignment ___ 3:00 AM before falling asleep.", a: "until", opts: ["until", "since", "at", "during"], exp: "Continuous ongoing work up to 3 AM: 'until'." },
      { s: "The manager will not be available ___ Thursday afternoon.", a: "until", opts: ["until", "since", "on", "during"], exp: "'Not... until' indicates unavailability continuing up to Thursday: 'until'." },
      { s: "She hasn't spoken to him ___ their argument last month.", a: "since", opts: ["since", "for", "during", "from"], exp: "Past starting event with present perfect: 'since'." },
      { s: "Please remain seated ___ the plane comes to a complete stop.", a: "until", opts: ["until", "while", "during", "since"], exp: "Continuous seated status: 'until'." },
      { s: "He slipped on the ice ___ walking to the bus stop.", a: "while", opts: ["while", "during", "for", "before"], exp: "Shortened clause ('while walking'): 'while'." },
      { s: "I have lived in this apartment ___ five years now.", a: "for", opts: ["for", "since", "during", "in"], exp: "Duration of time with number (five years): 'for'." },
      { s: "___ the end of the year, we must complete our tax documents.", a: "before", opts: ["before", "after", "during", "until"], exp: "Must happen prior to the end: 'before'." },
      { s: "I fell asleep ___ the lecture because the room was warm.", a: "during", opts: ["during", "while", "for", "in"], exp: "Noun event without a verb ('the lecture'): 'during'." },
      { s: "She looked very relaxed ___ her vacation.", a: "after", opts: ["after", "before", "during", "while"], exp: "Subsequent to returning from vacation: 'after'." },
      { s: "Our flight takes off ___ 6:45 PM sharp.", a: "at", opts: ["at", "on", "in", "by"], exp: "Exact time takes 'at'." },
      { s: "Canada Day is celebrated ___ July 1st.", a: "on", opts: ["on", "in", "at", "by"], exp: "Specific national holiday date: 'on'." },
      { s: "The festival takes place ___ the summer months.", a: "in", opts: ["in", "at", "on", "during"], exp: "Season/months take 'in'." },
      { s: "___ you were away, your package arrived in the mail.", a: "while", opts: ["while", "during", "since", "until"], exp: "Full clause of concurrent time: 'while'." },
      { s: "He has been playing the violin ___ he was six years old.", a: "since", opts: ["since", "for", "during", "from"], exp: "Landmark starting age with present perfect: 'since'." }
    ]
  }
};
