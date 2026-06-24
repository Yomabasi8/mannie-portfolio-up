import ClientsHero from "../components/ClientsHero";
import ClientShowcase from "../components/ClientShowcase";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientShowcase />
      <Testimonials />
      <CTA />
    </>
  );
}
