import Footer from "@/components/footer"
import Header from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowItWorks } from "@/components/how-it-works"
import { LeadCapture } from "@/components/lead-capture"
import { CTAContent } from "@/components/cta-content"

export default function BasixDigitalLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020540] via-[#060126] to-[#150259]">
      <Header />
      <Hero />
      <Solutions />
      <WhyChooseUs />
      <HowItWorks />
      <LeadCapture />
      <CTAContent />
      <Footer />
    </div>
  )
}
