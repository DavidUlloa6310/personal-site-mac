import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

const POSTS_DIR = path.join(process.cwd(), "posts");

// Code blocks are highlighted at build time, so no highlighter ships to the
// browser. Tag a block with its language (```python) for the best results.
const marked = new Marked(
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
);

// YAML parses `2026-10-18` into a Date; keep it as a plain "YYYY-MM-DD".
function normalizeDate(value, file) {
  const date = value instanceof Date ? value : new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`posts/${file} needs a date like 2026-10-18`);
  }
  return date.toISOString().slice(0, 10);
}

function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Reads every Markdown file in posts/ at build time, newest first. The YAML
// frontmatter holds the metadata and the body is rendered to HTML.
export function getPosts() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md") && file !== "README.md")
    .map((file) => {
      const source = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(source);

      if (!data.title) {
        throw new Error(`posts/${file} is missing a title`);
      }

      const date = normalizeDate(data.date, file);

      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title,
        date,
        displayDate: formatDate(date),
        snippet: data.snippet || null,
        draft: Boolean(data.draft),
        html: marked.parse(content),
      };
    })
    .filter((post) => !post.draft)
    .sort(
      (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title),
    );
}
