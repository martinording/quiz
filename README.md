# Multiple Choice Quiz

A small, dependency-free HTML quiz app. All logic runs in the browser, so it
works perfectly on **GitHub Pages** (which is static-only — no server-side code).

A start screen is shown first; the quiz begins only when the player presses
**Start quiz**. Everything (app, questions, start screen) is delivered in the
initial page load, so a player who loses connection after the page loads can
still start and complete the quiz.

One question is shown at a time, with a **15-second countdown** shown as a bar
that retracts from full width to nothing (the countdown starts once the
question has finished sliding in). Tapping an option records the answer but
**does not advance** — every player stays on the question until the timer runs
out, so players who start together stay in sync. The chosen option is
acknowledged but **the correct answer is not revealed**. When the timer ends,
the card slides out and the next question slides in (no "Next" button); an
unanswered question simply counts as wrong.

At the end, after the score, each question and its correct answer are revealed
one per second. At the end a short
celebration animation plays, the final score counts up, and then every question
is revealed one by one, a second apart — each tinted green if the player got it
right or red if not, showing the correct answer (and their answer, if wrong)
plus any explanation in small text.

Because everything runs on each device independently, any number of people can
take the quiz at the same time from their own phones — there is no shared state
or backend to coordinate.

## Files

- `index.html` — the app (HTML, CSS, and JS in one file)
- `questions.js` — the quiz content; **edit this to make your own quiz**
- `README.md` — this file

## Try it locally

Just double-click `index.html`, or open it in a browser. No build step, no
server needed.

> The questions live in `questions.js` (loaded with a `<script>` tag) rather
> than a JSON file, so it works even when opened directly from disk. Browsers
> block `fetch()` of local files over `file://`, which would break a
> JSON-based approach when double-clicking.

## Add your own questions

Open `questions.js` and edit the `questions` array. Each question looks like:

```js
{
  question: "The question text",
  options:  ["Option A", "Option B", "Option C", "Option D"],
  answer:   2,                 // 0-based index of the correct option
  explanation: "Optional note, shown in small text in the end review"
}
```

You can have any number of questions, and any number of options per question.
Set the quiz `title` at the top of the same file.

## Deploy on GitHub Pages

1. Push these files to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Choose your branch and the `/ (root)` folder, then **Save**.
5. After a minute, your quiz is live at
   `https://<username>.github.io/<repo>/`.

## Why no backend?

GitHub Pages only serves static files — there is no server runtime (no Node,
PHP, Python, or database). A multiple-choice quiz doesn't need one: showing
questions, checking answers, and scoring all happen client-side in JavaScript.
If you ever need to *store* results centrally (e.g. a leaderboard), you'd add a
separate external API — but for the quiz itself, this is all you need.
