import HeroSection from "@/components/HeroSection";
import DemoVideoSection from "@/components/DemoVideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import QuoteForm from "@/components/QuoteForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DemoVideoSection />
      <FeaturesSection />
      <PricingSection />
      <QuoteForm />
    </main>
  );
};

export default Index;
