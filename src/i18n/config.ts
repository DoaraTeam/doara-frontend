export const i18nConfig = {
  defaultLocale: "vi" as const,
  locales: ["vi", "en"] as const,
} as const;

export type Locale = (typeof i18nConfig.locales)[number];

export const localeNames: Record<Locale, string> = {
  vi: "vi",
  en: "en",
};

export const localeNamesInContext: Record<Locale, Record<Locale, string>> = {
  vi: {
    vi: "vi",
    en: "en",
  },
  en: {
    vi: "vi",
    en: "en",
  },
};

// export const localeFlags: Record<Locale, string> = {
//   vi: "🇻🇳",
//   en: "🇺🇸",
// };

export function isValidLocale(locale: string): locale is Locale {
  return i18nConfig.locales.includes(locale as Locale);
}

export function getValidLocale(locale: string | undefined): Locale {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return i18nConfig.defaultLocale;
}
