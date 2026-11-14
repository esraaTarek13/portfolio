import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { WHATSAPP_NUMBER } from "@/config/contact";
import {
  CONTACT_FIELDS,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "@/lib/validateContact";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import FormField from "../molecules/FormField";

function readValues(form: HTMLFormElement): ContactValues {
  const data = new FormData(form);
  const read = (field: ContactField) => String(data.get(field) ?? "").trim();
  return { name: read("name"), email: read("email"), message: read("message") };
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<ContactErrors>({});

  const errorText = (field: ContactField) => {
    const code = errors[field];
    return code ? t(`contact.errors.${code}`) : undefined;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = readValues(form);
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    const firstInvalid = CONTACT_FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      const element = form.elements.namedItem(firstInvalid);
      if (element instanceof HTMLElement) element.focus();
      return;
    }

    window.open(
      buildWhatsAppUrl(WHATSAPP_NUMBER, values),
      "_blank",
      "noopener,noreferrer",
    );
    form.reset();
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-4">
      <FormField label={t("contact.fields.name")} error={errorText("name")}>
        {(control) => (
          <Input
            name="name"
            autoComplete="name"
            placeholder={t("contact.placeholders.name")}
            {...control}
          />
        )}
      </FormField>

      <FormField label={t("contact.fields.email")} error={errorText("email")}>
        {(control) => (
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t("contact.placeholders.email")}
            {...control}
          />
        )}
      </FormField>

      <FormField
        label={t("contact.fields.message")}
        error={errorText("message")}
      >
        {(control) => (
          <Textarea
            name="message"
            placeholder={t("contact.placeholders.message")}
            {...control}
          />
        )}
      </FormField>

      <Button type="submit" className="mt-5">{t("contact.submit")}</Button>
    </form>
  );
}
