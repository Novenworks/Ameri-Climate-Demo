import Image from "next/image";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <Image
            src="/assets/first-party/logo-primary.png"
            alt=""
            width={280}
            height={105}
            className="h-10 w-auto mix-blend-screen"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {site.legalName}. Commercial heating, ventilation, and air conditioning contracting
            from Yucaipa across Southern California.
          </p>
        </div>
        <div className="text-sm text-white/80">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
            Contact
          </p>
          <p className="mt-3">
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <br />
            <a href={site.emailHref}>{site.email}</a>
          </p>
          <p className="mt-3">
            {site.addressLine}
            <br />
            {site.cityLine}
          </p>
          <p className="mt-3">{site.hours}</p>
        </div>
        <div className="text-sm text-white/80">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
            License
          </p>
          <p className="mt-3">
            CSLB #{site.cslb} · current and active
            <br />
            C-20 HVAC · B General Building
          </p>
          <p className="mt-3">
            <a className="underline underline-offset-4" href={site.cslbUrl}>
              Verify on CSLB
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs leading-relaxed text-white/55 md:px-6">
        Speculative website redesign by Novenworks. Ameri-Climate is not a Novenworks client.
        Business marks and photography remain property of their owners. This demo is not an official
        Ameri-Climate site.
      </div>
    </footer>
  );
}
