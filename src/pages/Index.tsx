import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { MethodSection } from "@/components/MethodSection";
import { CoachSection } from "@/components/CoachSection";
import { ConsultSection } from "@/components/ConsultSection";
import { MicroStepsSection } from "@/components/MicroStepsSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { BookingSection } from "@/components/BookingSection";
import { InnerConversationsSection } from "@/components/InnerConversationsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <MethodSection />
      <CoachSection />
      <ConsultSection />
      <MicroStepsSection />
      <UseCasesSection />
      <TestimonialsSection />
      <DifferenceSection />
      <InnerConversationsSection />
      <FAQSection />
      <BookingSection />
      <CTASection />
      <BackToTop />
    </div>
  );
};

export default Index;
