"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import { TestimonialsSection } from "@/components/landing/testimonials";
import { NewReleasePromo } from "@/components/landing/new-release-promo";
import { FAQSection } from "@/components/landing/faq-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { HoverFooter } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Preview } from "@/components/landing/project-show";
import { ServicesSection } from "@/components/landing/service-section";
import ContactSection from "@/components/landing/contact-section";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full relative bg-background">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0 opacity-70 dark:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(41, 169, 214, 0.22), transparent 60%), var(--background)",
        }}
      />

      {/* Header */}
      <Header isScrolled={isScrolled} />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Project Showcase Section */}
      <div id="showcase">
        <Preview />
      </div>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <NewReleasePromo />

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* contact section */}

      <div id="contact">
        <ContactSection />
      </div>

      {/* Hover Footer */}
      <HoverFooter />
    </div>
  );
}
