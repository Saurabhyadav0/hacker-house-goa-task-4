import Link from "next/link";
import { SectionTitle, SiteChrome } from "@/components/SiteChrome";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectShot } from "@/components/ProjectShot";
import { LinkPill } from "@/components/LinkPill";
import { CaseBoardPreview } from "@/components/CaseBoard";
import { HH_PROJECTS, PROJECTS, SITE_REPO } from "@/lib/projects";

const liveCount = [...HH_PROJECTS, ...PROJECTS].filter((p) => p.live).length;

export default function Home() {
  return (
    <SiteChrome>
      {/* hero */}
      <h1 className="mt-6 select-none font-display text-6xl leading-[0.88] tracking-tight text-primary [text-shadow:6px_6px_0_var(--color-secondary)] sm:text-8xl">
        HACKER HOUSE
        <br />
        GOA 2026
      </h1>
      <p className="mt-5 max-w-xl text-sm text-foreground/80 sm:text-base">
        Four tasks, one beach, zero sleep. Every Hacker House Goa build — ending with the final
        task, an agentic fraud investigator on TigerGraph — plus everything else I&apos;ve shipped.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] tracking-widest text-secondary">
        <span className="rounded-full bg-secondary/10 px-3 py-1">01 FRAME</span>
        <span className="rounded-full bg-secondary/10 px-3 py-1">02 VOICE RAG</span>
        <span className="rounded-full bg-secondary/10 px-3 py-1">03 FACE → CHAIN</span>
        <span className="rounded-full bg-accent px-3 py-1 text-accent-foreground">
          04 FRAUD AGENT
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/task-4"
          className="rounded-xl bg-secondary px-7 py-4 text-center font-display text-lg text-secondary-foreground shadow-[6px_6px_0_0_var(--color-primary)] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_var(--color-primary)]"
        >
          SEE THE FINAL TASK · TASK 04 →
        </Link>
        <a
          href={SITE_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border-2 border-primary bg-card px-7 py-4 text-center font-display text-lg text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
        >
          VIEW ON GITHUB ↗
        </a>
      </div>

      {/* HH Goa tasks */}
      <SectionTitle n="01" title="THE FOUR TASKS" />
      <div className="grid gap-6 md:grid-cols-2">
        {HH_PROJECTS.map((p) => {
          const isFinal = p.task === "04";
          return (
            <article
              key={p.repo}
              className={`group flex flex-col rounded-2xl border-2 bg-card/60 p-5 backdrop-blur-sm transition hover:shadow-[8px_8px_0_0_var(--color-accent)] ${
                isFinal ? "border-secondary" : "border-primary/30 hover:border-primary"
              }`}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-display text-sm text-secondary">TASK {p.task}</span>
                {isFinal && (
                  <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[9px] tracking-widest text-accent-foreground">
                    FINAL TASK
                  </span>
                )}
                <span className="h-px flex-1 bg-primary/20" />
                <span className="font-mono text-[10px] tracking-widest text-primary/60">
                  {p.live ? "● LIVE" : "○ CODE ONLY"}
                </span>
              </div>
              <ProjectShot name={p.name} image={p.image} url={p.live}>
                {isFinal && <CaseBoardPreview />}
              </ProjectShot>
              <h3 className="mt-4 font-display text-2xl tracking-tight text-primary sm:text-3xl">
                {p.name.toUpperCase()}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.tagline}</p>
              <ul className="mt-4 space-y-1.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 font-mono text-[11px] text-foreground/70">
                    <span className="text-secondary">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-accent/40 px-2 py-0.5 font-mono text-[10px] text-accent-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3 pt-5">
                <LinkPill href={p.repo} variant="outline">
                  GITHUB ↗
                </LinkPill>
                {isFinal ? (
                  <Link
                    href="/task-4"
                    className="flex-1 rounded-xl bg-secondary px-4 py-2.5 text-center font-mono text-[11px] tracking-widest text-secondary-foreground transition hover:-translate-y-0.5"
                  >
                    OPEN TASK 04 →
                  </Link>
                ) : (
                  p.live && (
                    <LinkPill href={p.live} variant="secondary">
                      OPEN LIVE ↗
                    </LinkPill>
                  )
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* everything else */}
      <SectionTitle n="02" title="MORE BUILDS" />
      <p className="-mt-3 mb-5 font-mono text-[11px] tracking-widest text-foreground/60">
        {PROJECTS.length} PROJECTS · {liveCount} LIVE ACROSS THE PAGE · SCREENSHOTS FROM EACH HOME PAGE
      </p>
      <ProjectGrid projects={PROJECTS} />
    </SiteChrome>
  );
}
