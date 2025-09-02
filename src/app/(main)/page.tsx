import Image from "next/image";
import "@/styles/typography.css";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import EmergencyServices from "@/components/EmergencyServices";
import SmartFeatures from "@/components/SmartFeatures";
import AutomotiveMarketplace from "@/components/AutomotiveMarketplace";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Overview Bar */}
      <ServicesOverview />
      
      {/* Emergency Services Section */}
      <EmergencyServices />
      
      {/* Smart Features Section */}
      <SmartFeatures />
      
      {/* Automotive Marketplace Section */}
      <AutomotiveMarketplace />
      
      {/* How It Works Section */}
      <HowItWorks />
    </div>
  );
}
