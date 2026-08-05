const symbols = [
  { text: "template<>", top: "12%", left: "8%", delay: "0s", slow: false },
  { text: "constexpr", top: "22%", left: "82%", delay: "1.2s", slow: true },
  { text: "::", top: "68%", left: "6%", delay: "0.6s", slow: false },
  { text: "->", top: "40%", left: "92%", delay: "2s", slow: true },
  { text: "{ }", top: "80%", left: "88%", delay: "0.3s", slow: false },
  { text: "nullptr", top: "58%", left: "48%", delay: "1.6s", slow: true },
];

export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-void" />

      {/* grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />

      {/* glow blobs */}
      <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-radial-glow opacity-70 animate-pulse-glow" />
      <div className="absolute bottom-0 right-[-10%] h-[420px] w-[420px] rounded-full bg-radial-glow opacity-40 animate-pulse-glow [animation-delay:2s]" />

      {/* faint floating c++ tokens, hidden on small screens to keep mobile light */}
      <div className="hidden sm:block">
        {symbols.map((s) => (
          <span
            key={s.text}
            className={`absolute select-none font-mono text-xs text-lilac/[0.09] ${
              s.slow ? "animate-float-slow" : "animate-float"
            }`}
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          >
            {s.text}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />
    </div>
  );
}
