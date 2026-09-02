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
 * You can have any number of questions and any number of options per question.
 */
window.QUIZ = {
  title: "Sample Quiz",
  questions: [
    {
      question: "Can GitHub Pages run server-side code?",
      options: [
        "Yes, it runs Node.js",
        "Yes, but only PHP",
        "No, it only serves static files",
        "Only on paid plans",
      ],
      answer: 2,
      explanation:
        "GitHub Pages is static hosting only. It serves HTML/CSS/JS to the browser — there is no server runtime. Dynamic behaviour must run client-side in JavaScript.",
    },
    {
      question: "Which language runs quiz logic in a static web app?",
      options: ["Python", "JavaScript", "Ruby", "Go"],
      answer: 1,
      explanation:
        "In a browser-only app, JavaScript handles all the interactivity.",
    },
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyperlink Text Markup Logic",
        "Home Tool Markup Language",
      ],
      answer: 0,
    },
    {
      question: "Which of these is a valid CSS unit?",
      options: ["px", "kg", "sec-of-arc", "watts"],
      answer: 0,
      explanation: "px (pixels) is a length unit in CSS.",
    },
  ],
};
