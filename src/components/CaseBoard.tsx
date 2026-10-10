import cases from "@/lib/task4-cases.json";

export type Case = (typeof cases)[number];
export const CASES: Case[] = cases;

const pct = (p: number) => `${Math.round(p * 100)}%`;
const pattern = (p: string) => p.replaceAll("_", " ");

export function VerdictChip({ verdict }: { verdict: string }) {
  const fraud = verdict === "fraud";
  return (
    <span
      className={`rounded-full px-2 py-0.5 font-mono text-[9px] tracking-widest ${
        fraud ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
      }`}
    >
      {verdict.toUpperCase()}
    </span>
  );
}

// Compact board of real agent output (cases/*.json from the fraud-agent repo),
// used as Task 04's preview since its dashboard needs a live TigerGraph instance.
export function CaseBoardPreview({ rows = 6 }: { rows?: number }) {
  return (
    <div className="flex h-full flex-col bg-[#062a18] p-3 font-mono text-[10px] text-[#f5f1e4]">
      <div className="mb-2 flex justify-between tracking-widest text-[#f5d919]">
        <span>CASE BOARD</span>
        <span>{CASES.length} CASES · LIVE GSQL</span>
      </div>
      <div className="space-y-1.5">
        {CASES.slice(0, rows).map((c) => (
          <div key={c.id} className="flex items-center gap-2 rounded bg-white/5 px-2 py-1">
            <span className="w-14 shrink-0 text-[#f5d919]">{c.id}</span>
            <span className="flex-1 truncate opacity-80">{pattern(c.pattern)}</span>
            <span className="w-8 text-right">{pct(c.probability)}</span>
            <VerdictChip verdict={c.verdict} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CaseCard({ c }: { c: Case }) {
  return (
    <article className="flex flex-col rounded-2xl border-2 border-primary/30 bg-card/70 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-sm text-secondary">{c.id}</span>
        <VerdictChip verdict={c.verdict} />
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-3xl text-primary">{pct(c.probability)}</span>
        <span className="font-mono text-[10px] tracking-widest text-foreground/60">
          {pattern(c.pattern).toUpperCase()}
        </span>
      </div>
      <p className="mt-2 line-clamp-6 flex-1 text-xs leading-relaxed text-foreground/75" title={c.summary}>
        {c.summary}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {c.actions.map((a) => (
          <span
            key={a}
            className="rounded-md bg-accent/40 px-2 py-0.5 font-mono text-[9px] text-accent-foreground"
          >
            {a}
          </span>
        ))}
        {c.sar && (
          <span className="rounded-md bg-secondary/15 px-2 py-0.5 font-mono text-[9px] text-secondary">
            SAR FILED
          </span>
        )}
      </div>
      <p className="mt-3 font-mono text-[10px] text-foreground/50">
        EXPOSURE ${c.exposure.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </p>
    </article>
  );
}
