"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

const pricingPlans = [
  {
    key: "starter",
    price: "Free",
    popular: false,
  },
  {
    key: "pro",
    monthlyPrice: 29,
    annualPrice: 24,
    popular: true,
  },
  {
    key: "team",
    monthlyPrice: 99,
    annualPrice: 79,
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const t = useTranslations("PricingSection");

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/20 border border-border/50 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">{t("badgeLabel")}</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent mb-4">
            {t("title")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("description")}</p>

          {/* Monthly/Annual Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 p-1 bg-muted/20 rounded-full border border-border/50 backdrop-blur-sm w-fit mx-auto"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("toggleMonthly")}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                isAnnual
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("toggleAnnual")}
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                {t("saveBadge")}
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-transparent border-primary/30 shadow-lg shadow-primary/10"
                  : "bg-muted/20 border-border/50 hover:border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-medium px-4 py-2 rounded-full">
                    {t("mostPopular")}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t(`plans.${plan.key}.name`)}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  {plan.price ? (
                    <span className="text-4xl font-bold text-foreground">
                      {t(`plans.${plan.key}.price`)}
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-foreground">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground text-lg">
                        {t(isAnnual ? "pricePerYear" : "pricePerMonth")}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {t(`plans.${plan.key}.description`)}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {t
                  .raw(`plans.${plan.key}.features`)
                  .map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40"
                    : "bg-muted/30 text-foreground border border-border hover:bg-muted/50"
                }`}
              >
                {t(`plans.${plan.key}.cta`)}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">{t("bottomCtaDescription")}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {t("bottomCtaButton")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
