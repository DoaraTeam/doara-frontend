"use client";

import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/blocks/animated-slideshow";
import { Sparkles } from "lucide-react";

const SLIDES = [
  {
    id: "slide-1",
    title: "UI LIBRARY",
    imageUrl:
      "https://cdn.prod.website-files.com/689eeab877a57e90992371d1/689eeab877a57e9099237bfc_AD_4nXc-Lx9ApJZnuZX0mNl5c8IihVmyqiC2BJ43v-Pe0LIxvEhmxK8P-IAgaigAiKNBZg3LvbjZs82aQbz8E7jTud2Ea3xCqJLURnPAhgabBF-ERqSOFD9UE9MkDbciDtQRs8L4it7Z.png",
  },
  {
    id: "slide-2",
    title: "LANDING BULDER",
    imageUrl:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-6",
    title: "CV BUILDER",
    imageUrl: "https://www.myperfectresume.com/wp-content/uploads/2025/02/homepage-hero.png",
  },
  {
    id: "slide-3",
    title: "WEB/MOBILE DEVELOPMENT",
    imageUrl:
      "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-4",
    title: "SEO optimization",
    imageUrl:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function ServicesSection() {
  return (
    <HoverSlider className="min-h-svh p-6 md:px-12 bg-background text-foreground">
      <div className="max-w-7xl mx-auto py-20">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/20 border border-border/50 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore the wide range of services we offer to help you achieve your goals.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
          <div className="flex  flex-col space-y-2 md:space-y-4   ">
            {SLIDES.map((slide, index) => (
              <TextStaggerHover
                key={slide.title}
                index={index}
                className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
                text={slide.title}
              />
            ))}
          </div>
          <HoverSliderImageWrap>
            {SLIDES.map((slide, index) => (
              <div key={slide.id} className="  ">
                <HoverSliderImage
                  index={index}
                  imageUrl={slide.imageUrl}
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="size-full max-h-96 object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </HoverSliderImageWrap>
        </div>
      </div>
    </HoverSlider>
  );
}
