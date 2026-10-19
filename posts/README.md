# posts/

Every `.md` file in this folder (except this README) is one blog post on
`/desktop`. Add a file, push, and the site rebuilds.

```md
---
title: Welcome!                     # required
date: 2026-10-18                    # required, YYYY-MM-DD
snippet: A sentence for the list.   # optional, shown under the title
draft: true                         # optional, hides the post
---

The post itself, in Markdown.
```

Any Markdown works in the body: headings, lists, links, quotes, code blocks
and tables. For images, put the file in `public/blog/` and reference it as
`![Alt text](/blog/photo.jpg)`. Long posts scroll inside their window.

The list shows the title, date and snippet, newest first. Clicking a title
opens the full post in its own window.
