# Hacker House Goa 2026 — Task 4

A Next.js site that shows all my Hacker House Goa 2026 builds, ending with the
final task (Task 04, the TigerGraph fraud agent), plus my other deployed projects.
The UI is styled after [Frame in Goa](https://frame-my-goa-pic.vercel.app).

- `/` shows the four tasks and **More Builds**. Each card has a screenshot of the
  project's home page and links to its GitHub repo and live site.
- `/task-4` shows the final task: the pipeline, headline stats, and all 20
  investigated cases from the agent's real output.

| Task | Project | Code | Live |
| --- | --- | --- | --- |
| 01 | Frame in Goa | [repo](https://github.com/Saurabhyadav0/frame-my-goa-pic) | [live](https://frame-my-goa-pic.vercel.app) |
| 02 | Voice RAG | [repo](https://github.com/Saurabhyadav0/hh_rag_project) | [live](https://hh-rag-project.fly.dev) |
| 03 | Face → Chain | [repo](https://github.com/Saurabhyadav0/HHGOA_task3) | runs locally |
| 04 | TigerGraph Fraud Agent | [repo](https://github.com/Saurabhyadav0/tigergraph-fraud-agent) | runs locally (needs TigerGraph Savanna) |

## Where the content comes from

- Project data: `src/lib/projects.ts`
- Screenshots: `public/shots/`. Each one was captured from the project's live
  home page. Task 03 was captured from a local run of its Flask web app.
- Task 04 case data: `src/lib/task4-cases.json`, exported from the fraud agent's
  `cases/*.json`.

## Run

```sh
npm install
npm run dev     # http://localhost:3000
npm run build
```
