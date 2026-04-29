export type ProjectType = "retainer" | "one-off" | "exploring";

export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  projectType: ProjectType;
  services: string[];
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: "retainer", label: "Retainer" },
  { value: "one-off", label: "One-off Project" },
  { value: "exploring", label: "Just Exploring" },
];

export const SERVICE_OPTIONS = [
  "Analytics",
  "Content Strategy",
  "Design",
  "SEO",
  "Email Marketing",
  "Social Media",
] as const;

export const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  company: "",
  projectType: "retainer",
  services: [],
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = data.name.trim();
  if (!name) errors.name = "Please enter your name";
  else if (name.length < 2) errors.name = "Name is too short";
  else if (name.length > 80) errors.name = "Name is too long";

  const email = data.email.trim();
  if (!email) errors.email = "Please enter your email";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address";

  const company = data.company.trim();
  if (company && company.length > 120) errors.company = "Too long";
  else if (company && !URL_RE.test(company) && company.length < 2) {
    errors.company = "Enter a company name or website";
  }

  const message = data.message.trim();
  if (!message) errors.message = "Please tell us about your project";
  else if (message.length < 10) errors.message = "A bit more detail helps us reply well";
  else if (message.length > 2000) errors.message = "Message is too long";

  return errors;
}
