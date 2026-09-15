import Image from "next/image";

export function SecondaryCapabilities() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--red)]">
            Licensed scope
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--navy)]">
            Heating. Ventilation. Air conditioning.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink)]">
            CSLB classifies the company C-20 for warm-air heating, ventilating, and air-conditioning,
            with a B general building classification. The live site describes project-based
            commercial HVAC work — not a list of residential tune-up packages.
          </p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src="/assets/first-party/gallery-2C5A1622.jpg"
            alt="Through-wall guest-room HVAC units on a hospitality building"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
