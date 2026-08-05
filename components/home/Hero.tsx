import { ArrowRight, Sprout } from "lucide-react";
import { CodeEditorHero } from "@/components/code/CodeEditorHero";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center px-6 pb-24 pt-10 sm:pt-16">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-radial-glow opacity-60" />

      <CodeEditorHero />

      <p className="mt-8 font-mono text-sm text-muted">
        {profile.age} · developer · pentester · competitive programmer
      </p>

      <p className="mt-5 max-w-lg text-balance text-center text-base leading-relaxed text-muted sm:text-lg">
        {profile.tagline[0]}
        <br />
        {profile.tagline[1]}
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <MagneticButton
          href="/projects"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface2 px-5 py-2.5 font-mono text-sm text-bone hover:border-violet hover:shadow-[0_0_24px_-6px_var(--violet-glow)]"
        >
          explore projects
          <ArrowRight size={14} />
        </MagneticButton>
        <MagneticButton
          href="/garden"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 font-mono text-sm text-muted hover:border-border-strong hover:text-bone"
        >
          enter the garden
          <Sprout size={14} />
        </MagneticButton>
      </div>
    </section>
  );
}
