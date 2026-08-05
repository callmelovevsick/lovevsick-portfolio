const entries = [
  { name: "api/", branch: "├── " },
  { name: "tools/", branch: "├── " },
  { name: "docs/", branch: "└── " },
];

export function LabDirectory() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface/60">
      <div className="border-b border-border bg-surface2/50 px-5 py-2.5 font-mono text-xs text-dim">
        lab/
      </div>
      <div className="p-5 font-mono text-sm">
        {entries.map((entry) => (
          <div
            key={entry.name}
            className="flex items-center justify-between border-b border-border/60 py-3 last:border-none"
          >
            <span className="text-muted">
              <span className="text-dim">{entry.branch}</span>
              {entry.name}
            </span>
            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-dim">
              soon
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
