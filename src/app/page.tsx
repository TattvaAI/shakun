import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import BrandMarquee from "@/components/BrandMarquee";
import ServicesSection from "@/components/ServicesSection";
import OwnerSection from "@/components/OwnerSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <BrandMarquee />
        <ServicesSection />
        <OwnerSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}
