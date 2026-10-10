import Image from "next/image";

// Browser-window frame around a project's home-page screenshot. Projects without a
// usable screenshot get a branded placeholder (or `children`, if given).
export function ProjectShot({
  name,
  image,
  url,
  children,
}: {
  name: string;
  image?: string;
  url?: string;
  children?: React.ReactNode;
}) {
  const host = url ? new URL(url).host : image ? "localhost" : "no live deploy";
  return (
    <div className="overflow-hidden rounded-xl border-2 border-primary/40 bg-card">
      <div className="flex items-center gap-1.5 border-b-2 border-primary/20 bg-primary/5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-secondary" />
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="ml-2 truncate font-mono text-[10px] tracking-wide text-primary/60">
          {host}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`${name} home page`}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          (children ?? (
            <div className="flex h-full items-center justify-center bg-primary p-6 text-center">
              <span className="font-display text-3xl leading-none text-primary-foreground [text-shadow:4px_4px_0_var(--color-secondary)]">
                {name.toUpperCase()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
