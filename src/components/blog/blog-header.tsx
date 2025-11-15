"use client";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

export function BlogHeader() {
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
        </div>
      </header>
    </>
  );
}
