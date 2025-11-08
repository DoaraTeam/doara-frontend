"use client";
import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Dribbble, Globe } from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function HoverFooter() {
  const t = useTranslations("HoverFooter");

  // Footer link data
  const footerLinks = [
    {
      key: "aboutUs",
      links: [
        { key: "companyHistory", href: "#" },
        { key: "meetTheTeam", href: "#" },
        { key: "employeeHandbook", href: "#" },
        { key: "careers", href: "#" },
      ],
    },
    {
      key: "helpfulLinks",
      links: [
        { key: "faqs", href: "#" },
        { key: "support", href: "#" },
        { key: "liveChat", href: "#", pulse: true },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      key: "email",
      icon: <Mail size={18} className="text-primary" />,
      href: "mailto:doara-support@gmail.com",
    },
    {
      key: "phone",
      icon: <Phone size={18} className="text-primary" />,
      href: "tel:+918637373116",
    },
    {
      key: "address",
      icon: <MapPin size={18} className="text-primary" />,
    },
  ];

  // Social media icons
  const socialLinks = [
    { key: "facebook", icon: <Facebook size={20} />, href: "#" },
    { key: "instagram", icon: <Instagram size={20} />, href: "#" },
    { key: "twitter", icon: <Twitter size={20} />, href: "#" },
    { key: "dribbble", icon: <Dribbble size={20} />, href: "#" },
    { key: "globe", icon: <Globe size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-muted/10 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/doara-logo.png" height="40" width="40" alt={t("brandName")} />
              <span className="text-[#29A9D6] text-3xl font-bold">{t("brandName")}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("brandDescription")}</p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.key}>
              <h4 className="text-foreground text-lg font-semibold mb-6">
                {t(`links.${section.key}.title`)}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.key} className="relative">
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t(`links.${section.key}.links.${link.key}`)}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-foreground text-lg font-semibold mb-6">{t("contactTitle")}</h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.key} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t(`contactInfo.${item.key}.text`)}
                    </a>
                  ) : (
                    <span className="text-muted-foreground hover:text-primary transition-colors">
                      {t(`contactInfo.${item.key}.text`)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-muted-foreground">
            {socialLinks.map(({ key, icon, href }) => (
              <a
                key={key}
                href={href}
                aria-label={t(`socialLinks.${key}`)}
                className="hover:text-primary transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-muted-foreground">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text={t("textHover")} className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
