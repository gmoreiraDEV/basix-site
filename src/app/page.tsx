import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";
import { InterestForm } from "@/components/interest-form";
import { PricingSection } from "@/components/pricing-section";

export default function Page() {
  return (
    <main className="min-h-[100svh] w-full">
      <Hero />
      <PricingSection />
      <InterestForm />
      <FAQSection />
    </main>
  );
}
