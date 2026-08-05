import { profile } from "@/data/profile";

export function TechStack() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface/60 p-5 font-mono text-sm leading-relaxed sm:p-6">
      <p>
        <span className="text-lilac">std</span>
        <span className="text-dim">::</span>
        <span className="text-lilac">vector</span>
        <span className="text-dim">&lt;</span>
        <span className="text-lilac">std</span>
        <span className="text-dim">::</span>
        <span className="text-lilac">string</span>
        <span className="text-dim">&gt; </span>
        <span className="text-bone">stack</span>
        <span className="text-dim"> = {"{"}</span>
      </p>
      {profile.languages.map((lang, i) => (
        <p key={lang} className="pl-6 text-[#e7c8ff]">
          &quot;{lang}&quot;
          <span className="text-dim">
            {i < profile.languages.length - 1 ? "," : ""}
          </span>
        </p>
      ))}
      <p className="text-dim">{"};"}</p>
    </div>
  );
}
