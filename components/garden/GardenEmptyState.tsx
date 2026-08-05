import { Sprout } from "lucide-react";

const GRID_SIZE = 48;

export function GardenEmptyState() {
  const cells = Array.from({ length: GRID_SIZE });

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface/60 p-8 sm:p-12">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-surface2 text-violet">
          <Sprout size={20} />
        </div>
        <p className="font-mono text-lg text-bone sm:text-xl">
          nothing planted yet.
        </p>
        <p className="mt-2 font-mono text-sm text-dim">
          the soil is ready.
        </p>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
          New notes, experiments and technical rabbit holes will appear here
          eventually.
        </p>
      </div>

      <div
        aria-hidden="true"
        className="mt-10 grid grid-cols-8 gap-2 sm:grid-cols-12"
      >
        {cells.map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-[3px] border border-border/70 bg-surface2/40"
            style={{
              opacity: 0.35 + ((i * 37) % 40) / 100,
            }}
          />
        ))}
      </div>
    </div>
  );
}
