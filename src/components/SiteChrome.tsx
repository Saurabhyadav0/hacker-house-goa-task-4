import Link from "next/link";
import { TropicalScenery } from "@/components/TropicalScenery";
import { GITHUB_PROFILE, SITE_REPO } from "@/lib/projects";

const MARQUEE_ITEMS = [
  "HACKER HOUSE GOA 2026",
  "BUILD. CODE. REPEAT.",
  "TASK 04 · FINAL TASK",
  "GOA · 28–31 OCT 2026",
  "CODE + LIVE LINKS",
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <TropicalScenery />

      <div className="relative z-10 w-full -rotate-1 border-y-2 border-primary bg-primary py-2 text-primary-foreground">
        <div className="hh-marquee-track flex w-max gap-8 whitespace-nowrap font-mono text-xs tracking-widest">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              {item} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-40 pt-6">
        <header className="flex flex-wrap items-center justify-between gap-3 pt-4 font-mono text-[11px] tracking-widest text-primary">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            HACKER HOUSE GOA 2026 · SAURABH YADAV
          </Link>
          <a
            href={SITE_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-primary px-3 py-1 transition hover:bg-primary hover:text-primary-foreground"
          >
            ★ THIS REPO ON GITHUB ↗
          </a>
        </header>
        {children}
      </div>

      <footer className="relative z-10 mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5 pb-8 pt-4 font-mono text-[11px] tracking-widest text-foreground/50">
        <span>SAURABH YADAV × HACKER HOUSE GOA 2026 — Build. Code. Repeat.</span>
        <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
          GITHUB · @SAURABHYADAV0 ↗
        </a>
      </footer>
    </main>
  );
}

export function SectionTitle({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-6 mt-16 flex items-center gap-3">
      <span className="font-display text-sm text-secondary">{n}</span>
      <h2 className="font-display text-2xl tracking-tight text-primary sm:text-3xl">{title}</h2>
    </div>
  );
}
