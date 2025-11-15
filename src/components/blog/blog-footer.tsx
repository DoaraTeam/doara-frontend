import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Facebook, Twitter, Dribbble, Github } from "lucide-react";

export function BlogFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/doara-logo.png" height="24" width="24" alt="DOARA" />
              <span className="text-[#29A9D6] text-2xl font-bold">DOARA</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Sharing knowledge, building community, and inspiring innovation through quality
              technical content.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Dribbble size={20} />
              </a>
            </div>
          </div>

          {/* Blog Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Blog</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  All Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/tag/frontend"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Frontend
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/tag/backend"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Backend
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/tag/devops"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#features"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@doara.com" className="hover:text-primary transition-colors">
                  contact@doara.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} DOARA. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
