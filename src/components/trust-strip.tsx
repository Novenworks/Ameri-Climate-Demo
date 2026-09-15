const items = [
  { label: "Family business", value: "Since 2011" },
  { label: "Based in", value: "Yucaipa, CA" },
  { label: "Focus", value: "Commercial HVAC" },
  { label: "CSLB", value: "#958444 · Active" },
  { label: "Classifications", value: "C-20 HVAC · B" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Verified credentials"
      className="border-y border-[var(--steel)] bg-[var(--paper)]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[var(--steel)] sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <div key={item.label} className="bg-[var(--paper)] px-4 py-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {item.label}
            </p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--navy)]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
