/*
 * Quiz content.
 *
 * Edit this file to change the quiz. Each question is an object:
 *   {
 *     question: "The question text",
 *     options:  ["Option A", "Option B", "Option C", "Option D"],
 *     answer:   2,            // index (0-based) of the correct option
 *     explanation: "..."      // optional; shown in small text in the
 *                             // end-of-quiz review
 *   }
 *
 * Questions and options are shown in the order listed below — nothing is
 * randomized. You can have any number of questions and options per question.
 */
window.QUIZ = {
  title: "Skotland-quiz",
  questions: [
    {
      question: "Hvilket universitet er Skotlands ældste?",
      options: ["University of Glasgow", "University of Edinburgh", "University of Aberdeen", "University of St Andrews"],
      answer: 3,
      explanation: "University of St Andrews blev grundlagt i 1413 og er det ældste i Skotland og det tredjeældste i den engelsktalende verden.",
    },
    {
      question: "Kong Jakob 2. forbød i 1457 skotterne at spille golf. Hvad var begrundelsen?",
      options: ["Det ødelagde kongens græsplæner", "Det var for dyrt for almuen", "Det distraherede mændene fra at øve bueskydning", "Præsterne mente, det var syndigt"],
      answer: 2,
      explanation: "En lov fra det skotske parlament forbød golf (og fodbold), fordi det tog tid fra den bueskydningstræning, landet havde brug for militært.",
    },
    {
      question: "Hvorfor affyres en kanon fra Edinburgh Castle hver dag kl. 13 (bortset fra søndag)?",
      options: ["For at skibe i havnen kunne stille deres ure", "For at fejre sejren over England", "For at skræmme mågerne væk", "For at markere starten på frokostpausen"],
      answer: 0,
      explanation: "The One O'Clock Gun har lydt siden 1861 som et tidssignal, så skibe på Firth of Forth kunne indstille deres kronometre.",
    },
    {
      question: "Hvad er Skotlands mest kendte nationalret?",
      options: ["Black pudding", "Cullen skink", "Fish and chips", "Haggis"],
      answer: 3,
      explanation: "Haggis laves traditionelt af fårets indmad krydret og kogt i en mave — og fejres især til Burns Night.",
    },
    {
      question: "Ved de skotske Highland Games kaster man med en 'caber'. Hvad er en caber?",
      options: ["En stor sten", "En smedehammer", "Et fad whisky", "En træstamme"],
      answer: 3,
      explanation: "En caber er en tung træstamme, som kastes, så den vipper og lander lodret — det handler om teknik, ikke længde.",
    },
    {
      question: "Hvad kaldes det skotske flag med det hvide skråkors på blå bund?",
      options: ["Union Jack", "The Dragon", "The Saltire", "The Red Hand"],
      answer: 2,
      explanation: "The Saltire (Skt. Andreas-korset) regnes for et af verdens ældste nationalflag stadig i brug.",
    },
    {
      question: "Hvilken orange sodavand er så populær, at den ofte kaldes Skotlands \"anden nationaldrik\" (efter whisky)?",
      options: ["Tizer", "Vimto", "Lucozade", "Irn-Bru"],
      answer: 3,
      explanation: "Irn-Bru er et af de få lande-sodavand i verden, der har solgt mere end Coca-Cola på hjemmemarkedet.",
    },
    {
      question: "Hvilken kaloriebombe opstod angiveligt i en skotsk fish and chips-butik?",
      options: ["Friteret Mars-bar", "Friteret Snickers", "Friteret Twix", "Friteret Bounty"],
      answer: 0,
      explanation: "Den friterede Mars-bar dukkede op i 1990'erne i en butik i Aberdeenshire og blev et skotsk kultfænomen.",
    },
    {
      question: "Hvilken sø er Skotlands største målt på overfladeareal?",
      options: ["Loch Ness", "Loch Morar", "Loch Awe", "Loch Lomond"],
      answer: 3,
      explanation: "Loch Lomond er størst på areal. Loch Ness rummer dog mest vand, og Loch Morar er dybest.",
    },
    {
      question: "Hvilken by regnes som golfsportens vugge og har en verdensberømt bane?",
      options: ["Perth", "St Andrews", "Falkirk", "Ayr"],
      answer: 1,
      explanation: "The Old Course i St Andrews har været spillet siden 1400-tallet og kaldes golfsportens hjem.",
    },
    {
      question: "Det ternede stof, der bl.a. bruges til kilts, kaldes?",
      options: ["Tartan", "Tweed", "Paisley", "Argyle"],
      answer: 0,
      explanation: "Tartan er det ternede mønster; hver klan har traditionelt sit eget.",
    },
    {
      question: "Hvilken skotskfødte skuespiller var den første, der spillede James Bond på film?",
      options: ["Roger Moore", "Michael Caine", "Sean Connery", "David Niven"],
      answer: 2,
      explanation: "Sean Connery fra Edinburgh spillede Bond første gang i Dr. No (1962).",
    },
  ],
};
