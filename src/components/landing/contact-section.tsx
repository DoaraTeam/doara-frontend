import { ContactCard } from "@/components/blocks/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("ContactSection");

  const contactInfo = [
    {
      key: "email",
      icon: MailIcon,
    },
    {
      key: "phone",
      icon: PhoneIcon,
    },
    {
      key: "address",
      icon: MapPinIcon,
      className: "col-span-2",
    },
  ];

  return (
    <main className="relative flex size-full min-h-screen w-full items-center justify-center p-4">
      <div className="mx-auto max-w-5xl">
        <ContactCard
          title={t("title")}
          description={t("description")}
          contactInfo={contactInfo.map((info) => ({
            icon: info.icon,
            label: t(`contactInfo.${info.key}.label`),
            value: t(`contactInfo.${info.key}.value`),
            className: info.className,
          }))}
        >
          <form action="" className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label>{t("form.name")}</Label>
              <Input type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>{t("form.email")}</Label>
              <Input type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>{t("form.phone")}</Label>
              <Input type="phone" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>{t("form.message")}</Label>
              <Textarea />
            </div>
            <Button className="w-full" type="button">
              {t("form.submit")}
            </Button>
          </form>
        </ContactCard>
      </div>
    </main>
  );
}
