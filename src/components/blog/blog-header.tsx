"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";

export function BlogHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-4 z-[9999] mx-auto hidden w-full max-w-3xl flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg px-4 py-2">
        <Link className="z-50 flex items-center justify-center" href="/">
          <Image src="/images/doara-logo.png" height="20" width="20" alt="DOARA" priority />
          <span className="text-[#29A9D6] text-xl font-bold !ml-0 relative top-[2px]">oara</span>
        </Link>

        {/* <nav className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <Link
            href="/#features"
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="relative z-20">Features</span>
          </Link>
          <Link
            href="/#pricing"
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="relative z-20">Pricing</span>
          </Link>
          <Link
            href="/#testimonials"
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="relative z-20">Testimonials</span>
          </Link>
          <Link
            href="/#faq"
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="relative z-20">FAQ</span>
          </Link>
          <Link
            href="/blog"
            className="relative px-4 py-2 text-primary font-semibold transition-colors"
          >
            <span className="relative z-20">Blog</span>
          </Link>
        </nav> */}

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <Link className="flex items-center justify-center gap-2" href="/">
          <Image src="/images/doara-logo.png" height="20" width="20" alt="DOARA" priority />
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
              <span
                className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/#features"
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/#testimonials"
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/#faq"
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="text-left px-4 py-3 text-lg font-semibold text-primary transition-colors rounded-lg hover:bg-background/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
