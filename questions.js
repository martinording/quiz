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
      question: "Hvad hedder Skotlands højeste bjerg?",
      options: ["Cairn Gorm", "Ben Nevis", "Ben Macdui", "Schiehallion"],
      answer: 1,
      explanation: "Ben Nevis er 1.345 meter højt og ligger nær Fort William.",
    },
    {
      question: "Hvilket dyr er Skotlands officielle nationaldyr?",
      options: ["Kronhjorten", "Kongeørnen", "Enhjørningen", "Løven"],
      answer: 2,
      explanation: "Enhjørningen har været Skotlands heraldiske nationaldyr siden 1300-tallet.",
    },
    {
      question: "Hvad er Skotlands mest kendte nationalret?",
      options: ["Black pudding", "Cullen skink", "Fish and chips", "Haggis"],
      answer: 3,
      explanation: "Haggis laves traditionelt af fårets indmad krydret og kogt i en mave — og fejres især til Burns Night.",
    },
    {
      question: "Verdens korteste ruteflyvning findes i Skotland (mellem to øer i Orkney). Hvor lang tid tager den typisk?",
      options: ["Ca. 90 sekunder", "Ca. 10 minutter", "Ca. 25 minutter", "Ca. 45 minutter"],
      answer: 0,
      explanation: "Flyvningen mellem Westray og Papa Westray tager omkring halvandet minut — kortere med medvind.",
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
