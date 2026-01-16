export type ProjectItem = {
  name: string;
  summary: string;
  stack: string;
  badges: string[];
  tint: string;
};

type ProjectCardProps = {
  project: ProjectItem;
  delay?: number;
};

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <div
      className="group rounded-2xl border border-white/10 bg-[var(--panel)] p-5 shadow-[0_25px_60px_rgba(6,8,12,0.45)] animate-[fade-up_0.9s_ease-out] transition-transform duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={`relative h-28 rounded-xl border border-white/10 bg-gradient-to-br ${project.tint} opacity-90`}
      >
        <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
          featured
        </div>
        <div className="absolute bottom-3 left-3 text-sm font-semibold text-white">
          {project.name}
        </div>
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white/50">
        {project.stack}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-white">{project.name}</h3>
      <p className="text-xs text-white/60">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.badges.map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center gap-1 rounded-md border border-[var(--accent-border)] bg-[var(--accent-fade)] px-2 py-1 text-[11px] font-semibold text-white/80"
          >
            {badge}
            <span className="text-[10px]">-&gt;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
