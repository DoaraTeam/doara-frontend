"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { type Locale, i18nConfig, localeNamesInContext } from "@/i18n/config";

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleLanguageChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale as Locale });
  }

  const currentLanguage = {
    name: localeNamesInContext[currentLocale as Locale][currentLocale as Locale],
  };

  return (
    <div className="flex items-center z-[999]">
      <Select value={currentLocale} onValueChange={handleLanguageChange}>
        <SelectTrigger className="border-none bg-transparent rounded-full px-2 py-1 hover:bg-muted/20 focus:ring-0">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <SelectValue>
              <span className="flex items-center gap-1">
                {/* <span>{currentLanguage.flag}</span> */}
                <span className="hidden sm:inline">{currentLanguage.name}</span>
              </span>
            </SelectValue>
          </div>
        </SelectTrigger>
        <SelectContent className="z-[9999]">
          {i18nConfig.locales.map((locale) => (
            <SelectItem key={locale} value={locale}>
              <div className="flex items-center gap-2">
                {/* <span>{localeFlags[locale]}</span> */}
                <span>{localeNamesInContext[currentLocale as Locale][locale]}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
