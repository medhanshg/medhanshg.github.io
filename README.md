# Medhansh Gupta — personal portfolio

A static portfolio with a personal introduction, selected project stories, and a print-friendly experience page. Built with HTML, CSS, and a small JavaScript enhancement; no build step or dependencies.

## Local preview

From this directory, run:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Stop the server with Ctrl+C.

## Pages

- `index.html`: introduction, selected work, about, and contact.
- `portfolio.html`: project details and the original Editor Trees benchmark.
- `resume.html`: experience, education, skills, and Print / Save as PDF.
- `style.css`: shared layout, mobile breakpoints, keyboard focus, print, and reduced-motion styles.
- `script.js`: enables the browser's print dialog on the experience page.

Navigation and content work without JavaScript. Google Fonts are optional; local fallback fonts are provided. Contact links go to LinkedIn. No messages are collected or stored.

## Updating

Keep experience and education current in `resume.html`; mirror relevant changes in the homepage summary. Shared navigation and footer are intentionally present in each HTML page for reliable static rendering. Update all three when changing those links.

The Editor Trees speedup refers specifically to sorted insertion of 50,000 characters compared with the naive BST in the included benchmark. Internal company projects have descriptions rather than public demos.

## Verification

Checked all three pages for local files and anchor targets, image alt text, main landmarks, single primary headings, viewport metadata, and successful local HTTP responses. JavaScript syntax and Git whitespace checks passed. Browser visual QA was unavailable because the browser tool could not start; responsive and print layouts still need a visual review.

The repository targets GitHub Pages: https://medhanshg.github.io/. Local edits do not change the live site until committed and pushed through the repository's publishing workflow.
