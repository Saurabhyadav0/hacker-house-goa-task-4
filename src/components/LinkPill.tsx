const VARIANTS = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "border-2 border-primary/40 text-primary hover:border-accent",
};

export function LinkPill({
  href,
  variant,
  children,
}: {
  href: string;
  variant: keyof typeof VARIANTS;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex-1 rounded-xl px-4 py-2.5 text-center font-mono text-[11px] tracking-widest transition hover:-translate-y-0.5 ${VARIANTS[variant]}`}
    >
      {children}
    </a>
  );
}
