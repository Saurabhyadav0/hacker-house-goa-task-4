"use client";

import { useState } from "react";
import type { Category, Project } from "@/lib/projects";
import { LinkPill } from "@/components/LinkPill";
import { ProjectShot } from "@/components/ProjectShot";

const FILTERS: ("ALL" | Category)[] = ["ALL", "AI", "FULL-STACK", "FRONTEND"];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const shown = filter === "ALL" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="inline-flex flex-wrap rounded-full border-2 border-primary p-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 font-mono text-xs tracking-widest transition ${
              filter === f ? "bg-accent text-accent-foreground" : "text-primary hover:bg-primary/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article
            key={p.repo}
            className="group hh-pop-in flex flex-col rounded-2xl border-2 border-primary/30 bg-card/70 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-[6px_6px_0_0_var(--color-accent)]"
          >
            <ProjectShot name={p.name} image={p.image} url={p.live} />
            <div className="mt-4 flex items-start justify-between gap-3">
              <h3 className="font-display text-xl leading-tight tracking-tight text-primary">
                {p.name.toUpperCase()}
              </h3>
              <span className="shrink-0 rounded-full bg-secondary/10 px-2.5 py-1 font-mono text-[9px] tracking-widest text-secondary">
                {p.category}
              </span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/75">{p.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-primary/25 px-2 py-0.5 font-mono text-[10px] text-primary/80"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <LinkPill href={p.repo} variant="outline">
                GITHUB ↗
              </LinkPill>
              {p.live && (
                <LinkPill href={p.live} variant="primary">
                  LIVE ↗
                </LinkPill>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
