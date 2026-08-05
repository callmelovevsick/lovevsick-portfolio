import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { TechStack } from "@/components/about/TechStack";
import { Reveal } from "@/components/ui/Reveal";

export function ProfilePreview() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <div className="grid gap-10 sm:grid-cols-[1.1fr_1fr] sm:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-dim">
              whoami
            </p>
            <h2 className="mt-3 font-mono text-2xl text-bone sm:text-3xl">
              {profile.name}
            </h2>
            <p className="mt-1 font-mono text-sm text-muted">
              {profile.age} · {profile.role}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-muted">
              I like C++, systems, algorithms, programming languages,
              security, and building things from scratch.
            </p>

            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-dim">
              currently exploring
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-md border border-border bg-surface/60 px-2.5 py-1 font-mono text-xs text-lilac"
                >
                  {interest}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-violet transition-colors hover:text-violet-strong"
            >
              more about me
              <ArrowRight size={13} />
            </Link>
          </div>

          <TechStack />
        </div>
      </Reveal>
    </section>
  );
}
