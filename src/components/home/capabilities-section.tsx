import CapabilityCard, { type CapabilityItem } from "@/components/home/capability-card";
import CoreStackCard from "@/components/home/core-stack-card";
import SectionHeading from "@/components/home/section-heading";

type CapabilitiesSectionProps = {
  coreTitle: string;
  coreItems: string[];
  capabilities: CapabilityItem[];
};

export default function CapabilitiesSection({
  coreTitle,
  coreItems,
  capabilities,
}: CapabilitiesSectionProps) {
  return (
    <section id="capabilities" className="mt-24 space-y-10">
      <SectionHeading label="#capabilities" lineClassName="w-40 sm:w-72 flex-none" />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute left-6 top-6 h-16 w-16 border border-[var(--accent-border)] animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute left-14 top-14 h-16 w-16 border border-[var(--accent-border)] animate-[float_7s_ease-in-out_infinite]" />
          <div className="absolute right-8 top-28 h-24 w-24 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:12px_12px] opacity-70" />

          <CoreStackCard title={coreTitle} items={coreItems} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
