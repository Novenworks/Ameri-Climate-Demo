import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { SecondaryCapabilities } from "@/components/secondary-capabilities";
import { ServiceArea } from "@/components/service-area";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustStrip } from "@/components/trust-strip";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Capabilities />
        <Work />
        <About />
        <Process />
        <SecondaryCapabilities />
        <ServiceArea />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
