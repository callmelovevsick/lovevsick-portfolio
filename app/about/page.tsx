import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { TechStack } from "@/components/about/TechStack";

export const metadata: Metadata = {
  title: "about — lovevsick",
  description: "who lovevsick is, what they use, and what they're building.",
};

const sections = [
  { label: "what I do", body: profile.about.whatIDo },
  {
    label: "what I use",
    body: profile.about.whatIUse.join(" · "),
  },
  { label: "what I'm building", body: profile.about.whatImBuilding },
  { label: "what I'm learning", body: profile.about.whatImLearning },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          about/
        </p>
        <h1 className="mt-3 font-mono text-3xl text-bone sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-muted">
          {profile.age}
          <br />
          developer
          <br />
          pentester
          <br />
          competitive programmer
        </p>
      </Reveal>

      <div className="mt-12 space-y-10">
        {sections.map((section, i) => (
          <Reveal key={section.label} delay={i * 0.05}>
            <div className="border-l-2 border-border pl-5">
              <p className="font-mono text-xs uppercase tracking-widest text-violet">
                {section.label}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                {section.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-12">
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          languages/
        </p>
        <div className="mt-3 max-w-sm">
          <TechStack />
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mt-12">
        <p className="font-mono text-xs uppercase tracking-widest text-dim">
          interests/
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="rounded-md border border-border bg-surface/60 px-2.5 py-1 font-mono text-xs text-lilac"
            >
              {interest}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
