# Multiple Choice Quiz

A small, dependency-free HTML quiz app. All logic runs in the browser, so it
works perfectly on **GitHub Pages** (which is static-only — no server-side code).

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
  explanation: "Optional note shown after answering"
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
