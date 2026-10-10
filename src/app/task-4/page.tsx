import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle, SiteChrome } from "@/components/SiteChrome";
import { CASES, CaseCard } from "@/components/CaseBoard";
import { HH_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Task 04 — TigerGraph Fraud Agent · Hacker House Goa 2026",
  description:
    "An agentic fraud investigator over the HHGOA_IEEE dataset that writes every case into TigerGraph as case memory.",
};

const task = HH_PROJECTS.find((p) => p.task === "04")!;

const fraud = CASES.filter((c) => c.verdict === "fraud").length;
const sars = CASES.filter((c) => c.sar).length;
const exposure = CASES.reduce((sum, c) => sum + c.exposure, 0);

const STATS = [
  { value: "590K", label: "TRANSACTIONS INDEXED" },
  { value: "5,565", label: "CLOSED CASES IN GRAPH MEMORY" },
  { value: `${CASES.length}`, label: "CASES INVESTIGATED" },
  { value: `${fraud} / ${CASES.length - fraud}`, label: "FRAUD / LEGITIMATE" },
  { value: `${sars}`, label: "SARS FILED" },
  { value: `$${Math.round(exposure).toLocaleString("en-US")}`, label: "EXPOSURE FLAGGED" },
];

const PIPELINE = [
  {
    title: "TRIGGER",
    body: "A case_pack.csv row arrives — risk score, customer report or analyst request.",
  },
  {
    title: "GATHER EVIDENCE",
    body: "Card velocity windows, shared-device rings, shared regions and customer history from a pandas index over the full ledger, plus a live GSQL traversal for similar closed cases.",
  },
  {
    title: "ASSESS",
    body: "Verdict, fraud probability and pattern, citing policy rules R1–R10 — rule-based, or Claude when an API key is set.",
  },
  {
    title: "ASK FOR MORE",
    body: "If one weak signal sits under 0.70, simulate VERIFY_WITH_CUSTOMER / STEP_UP_AUTH and reassess.",
  },
  {
    title: "ACT",
    body: "Next-best-actions routed auto / L1 / L2 under the bank's policy, and a SAR decision with the reason.",
  },
  {
    title: "REMEMBER",
    body: "Write the InvestigationCase and its edges into TigerGraph so the next investigation can find it.",
  },
];

export default function Task4() {
  return (
    <SiteChrome>
      <Link
        href="/"
        className="mt-6 inline-block font-mono text-[11px] tracking-widest text-secondary underline decoration-dotted underline-offset-4"
      >
        ← ALL PROJECTS
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="font-display text-sm text-secondary">TASK 04</span>
        <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[9px] tracking-widest text-accent-foreground">
          FINAL TASK
        </span>
      </div>
      <h1 className="mt-3 select-none font-display text-5xl leading-[0.9] tracking-tight text-primary [text-shadow:6px_6px_0_var(--color-secondary)] sm:text-7xl">
        TIGERGRAPH
        <br />
        FRAUD AGENT
      </h1>
      <p className="mt-5 max-w-2xl text-sm text-foreground/80 sm:text-base">{task.tagline}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={task.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-primary px-7 py-4 text-center font-display text-lg text-primary-foreground shadow-[6px_6px_0_0_var(--color-accent)] transition hover:-translate-y-0.5"
        >
          VIEW CODE ON GITHUB ↗
        </a>
        <a
          href={`${task.repo}#quickstart-end-to-end-from-a-fresh-clone`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border-2 border-primary bg-card px-7 py-4 text-center font-display text-lg text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
        >
          RUN IT YOURSELF ↗
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border-2 border-primary/30 bg-card/60 p-5 backdrop-blur-sm"
          >
            <div className="font-display text-3xl text-primary sm:text-4xl">{s.value}</div>
            <div className="mt-1 font-mono text-[10px] tracking-widest text-secondary">{s.label}</div>
          </div>
        ))}
      </div>

      <SectionTitle n="01" title="HOW ONE CASE RUNS" />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PIPELINE.map((step, i) => (
          <li
            key={step.title}
            className="rounded-2xl border-2 border-primary/30 bg-card/60 p-5 backdrop-blur-sm"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="font-display text-sm text-secondary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg tracking-tight text-primary">{step.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-foreground/75">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {task.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-accent/40 px-2 py-0.5 font-mono text-[10px] text-accent-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <SectionTitle n="02" title={`ALL ${CASES.length} CASES`} />
      <p className="-mt-3 mb-5 max-w-2xl font-mono text-[11px] leading-relaxed tracking-wide text-foreground/60">
        Real agent output from cases/*.json — verdict, confidence, the actions it chose and whether
        policy required a Suspicious Activity Report.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CASES.map((c) => (
          <CaseCard key={c.id} c={c} />
        ))}
      </div>
    </SiteChrome>
  );
}
