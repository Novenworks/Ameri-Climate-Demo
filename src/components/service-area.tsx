import Image from "next/image";

const places = [
  "Yucaipa (home base)",
  "Anaheim",
  "Mission Viejo",
  "Loma Linda",
  "Palmdale",
  "Morongo Basin",
  "Vandenberg",
  "Victorville (gallery)",
];

export function ServiceArea() {
  return (
    <section className="bg-[var(--paper)] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--red)]">
            Where the work already is
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--navy)] md:text-4xl">
            Southern California commercial projects, from a Yucaipa office.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink)]">
            First-party copy describes a commercial contractor throughout the Southern California
            region. The list below is only places the current site already names — or photographs —
            not a claimed service radius.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm font-semibold text-[var(--navy)]">
            {places.map((place) => (
              <li key={place} className="border-l-2 border-[var(--red)] pl-3 py-1">
                {place}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[280px] overflow-hidden">
          <Image
            src="/assets/first-party/victorville-2.jpg"
            alt="High-desert project building photographed for Ameri-Climate’s gallery"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
