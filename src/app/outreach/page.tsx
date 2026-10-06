import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outreach brief | Ameri-Climate demo",
  robots: { index: false, follow: false },
};

const captures = [
  {
    file: "before-original-desktop.png",
    label: "BEFORE — live original site, desktop",
  },
  { file: "after-desktop.png", label: "AFTER — demo desktop" },
  { file: "after-mobile.png", label: "AFTER — demo mobile" },
  { file: "after-scroll.gif", label: "AFTER — scrolling GIF" },
  { file: "after-scroll.mp4", label: "AFTER — scrolling MP4" },
] as const;

export default function OutreachPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-[var(--navy)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--red)]">
        Operator only · noindex
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold">
        Ameri-Climate outreach brief
      </h1>
      <p className="mt-3 text-sm text-[var(--ink)]">
        Speculative Novenworks concept. Not a client engagement. Unlinked from the prospect-facing
        site.
      </p>

      <section className="mt-10 space-y-2 text-sm leading-relaxed">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">Snapshot</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Ameri-Climate — commercial HVAC, Yucaipa / Southern California</li>
          <li>
            Original:{" "}
            <a className="underline" href="https://www.ameri-climate.com/">
              https://www.ameri-climate.com/
            </a>
          </li>
          <li>Contact: (909) 730-8523 · info@ameri-climate.com · /contact</li>
          <li>
            GitHub:{" "}
            <a className="underline" href="https://github.com/Novenworks/Ameri-Climate-Demo">
              Novenworks/Ameri-Climate-Demo
            </a>
          </li>
          <li>
            Deployed:{" "}
            <a className="underline" href="https://ameri-climate-hvac-demo.vercel.app/">
              https://ameri-climate-hvac-demo.vercel.app/
            </a>
          </li>
          <li>CSLB #958444, current and active, C-20 and B (official lookup 2026-09-15)</li>
          <li>
            Agency: no visible web-design studio credit. Footer says “Powered by Squarespace.”
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
          Original-site observations
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            The homepage is mostly a short origin paragraph plus six project blurbs. Serious
            commercial work (hotels, county jobs, Vandenberg) is easy to miss.
          </li>
          <li>
            The About gallery holds rooftop, piping, duct, and hospitality jobsite photography that
            never appears in the homepage sales path.
          </li>
          <li>
            Project copy is stale in places (Morongo described as underway for January 2018) and
            does not pair names with photos.
          </li>
          <li>
            Conversion exists (form + phone) but the primary action is easy to treat as a brochure,
            not a bid conversation for commercial GCs or owners.
          </li>
          <li>
            Identity is a patriotic wordmark on a sparse Squarespace layout — it reads smaller than
            the CSLB-licensed commercial contractor behind it.
          </li>
        </ol>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
          Redesign improvements
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Hero uses first-party rooftop photography so the trade is visible immediately.</li>
          <li>Trust strip publishes verified CSLB status instead of leaving the license in the footer only.</li>
          <li>Services grouped for commercial buyers (hospitality, public-sector, project install).</li>
          <li>Named projects plus gallery photography, with captions that do not mislabel buildings.</li>
          <li>Clearer mobile conversion: sticky call path, large tap targets, work and contact in-page.</li>
        </ol>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
          Talking points
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            The gap is presentation, not invention: the current site undersells a commercial
            mechanical contractor that already lists hotels and an Air Force base.
          </li>
          <li>
            You already photographed the work. The concept simply puts those stills in the sales
            path.
          </li>
          <li>
            A GC or facilities buyer can now see what you do, where you’ve worked, that the license
            is current, and how to start a bid conversation.
          </li>
        </ol>
      </section>

      <section className="mt-10 space-y-2 text-sm leading-relaxed">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
          Personalization hooks
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Owner Joe DeMarco; Yucaipa origin; family business since 2011.</li>
          <li>Staybridge Suites Anaheim 2017 as a concrete hospitality proof point.</li>
          <li>Vandenberg clearance language — rare, and already on their site.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-2 text-sm leading-relaxed">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
          What not to say
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Do not say the current site is terrible, amateur, or that Squarespace is the problem.</li>
          <li>Do not attack a designer or invent an agency. None is named.</li>
          <li>Do not claim Novenworks was hired, or that this is the live Ameri-Climate site.</li>
          <li>Do not claim ownership of their photography or logo.</li>
          <li>Do not invent ROI, SEO rankings, lead volume, review stars, staff size, or warranties.</li>
          <li>Do not use the CSLB phone (909) 738-8523 as if it were the public site number.</li>
          <li>Do not say Morongo is still underway. Do not call TownePlace photos Staybridge.</li>
          <li>Do not list Vandenberg certifications that the site does not name.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 text-sm leading-relaxed">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
          Subject lines
        </h2>
        <ol className="list-decimal space-y-1 pl-5">
            <li>Joe, a homepage idea for Ameri-Climate that shows the hotel and base work</li>
            <li>Ameri-Climate homepage concept</li>
            <li>An idea for the Ameri-Climate site</li>
          </ol>
        <p className="text-xs opacity-70">
          Send to info@ameri-climate.com (published on ameri-climate.com homepage and /contact; verified 2026-10-06). Send the demo root URL, not this page.
        </p>
        <h3 className="pt-4 font-semibold">Cold email</h3>
        <pre className="whitespace-pre-wrap rounded-sm bg-[var(--paper)] p-4 text-[13px] leading-relaxed">
{`Hi Joe,

I was on ameri-climate.com. The business behind it is strong: commercial HVAC out of Yucaipa, hotel work across Southern California, and Air Force base work that needed clearances. What stood out is that the homepage is the logo and a phone number, so the hotel and base work never shows up in front of a facilities manager or general contractor.

I put together a concept homepage that puts those projects up front and makes calling the obvious next step:

https://ameri-climate-demo.vercel.app

It is an unsolicited demo. It is not on your domain, and the form does not send anything to you.

If you like it, I handle the work: the copy, the build, mobile polish, connecting your existing phone and email contact path, technical setup, and launch. You review and approve.

Want me to send over the full breakdown of what you get and what it costs?

Vincent
Novenworks`}
        </pre>
        <h3 className="pt-2 font-semibold">Follow-up</h3>
        <pre className="whitespace-pre-wrap rounded-sm bg-[var(--paper)] p-4 text-[13px] leading-relaxed">
{`Hi Joe,

Following up on the Ameri-Climate concept homepage: https://ameri-climate-demo.vercel.app

If it is not useful, tell me and I will take it down.

Want me to send over the full breakdown of what you get and what it costs?

Vincent`}
        </pre>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
          Capture package
        </h2>
        {captures.map((item) => (
          <figure key={item.file} className="border border-[var(--steel)] p-3">
            <figcaption className="mb-2 text-sm font-semibold">
              {item.label}{" "}
              <a className="font-normal underline" href={`/outreach/${item.file}`}>
                {item.file}
              </a>
            </figcaption>
            {item.file.endsWith(".mp4") ? (
              <video controls className="w-full max-w-xl" src={`/outreach/${item.file}`} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`/outreach/${item.file}`}
                alt={item.label}
                className="max-h-[480px] w-auto max-w-full border border-[var(--steel)]"
              />
            )}
          </figure>
        ))}
      </section>

      <p className="mt-10 text-sm">
        <Link className="underline" href="/">
          Prospect-facing homepage
        </Link>
      </p>
    </main>
  );
}
