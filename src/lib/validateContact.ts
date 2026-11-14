export const CONTACT_FIELDS = ["name", "email", "message"] as const;

export type ContactField = (typeof CONTACT_FIELDS)[number];
export type ContactValues = Record<ContactField, string>;
export type ErrorCode = "required" | "invalidEmail";
export type ContactErrors = Partial<Record<ContactField, ErrorCode>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  for (const field of CONTACT_FIELDS) {
    if (!values[field]) errors[field] = "required";
  }

  if (!errors.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = "invalidEmail";
  }

  return errors;
}
