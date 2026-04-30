"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import Field from "./Field";
import ProjectTypeToggle from "./ProjectTypeToggle";
import ServiceChips from "./ServiceChips";
import SuccessState from "./SuccessState";
import { fadeRight } from "./animations";
import {
  INITIAL_FORM_DATA,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "./types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update = <K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
    if (submitError) setSubmitError(null);
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const next = validateContactForm(formData);
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: ContactFormErrors;
      };

      if (!res.ok || !payload.ok) {
        if (payload.errors) {
          setErrors(payload.errors);
        } else {
          setSubmitError(
            "Something went wrong sending your message. Please try again or email us directly.",
          );
        }
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Couldn't reach the server. Check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setSubmitError(null);
    setSubmitted(false);
  };

  return (
    <motion.div
      className="lg:col-span-7"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeRight}
    >
      <div className="relative bg-navy rounded-3xl p-6 md:p-8 overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Floating gold accents */}
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold/15 pointer-events-none" />
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gold/20 pointer-events-none" />

        <AnimatePresence mode="wait">
          {submitted ? (
            <SuccessState
              key="success"
              firstName={formData.name.trim().split(" ")[0]}
              onReset={resetForm}
            />
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              noValidate
              className="relative space-y-5"
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Your name"
                  required
                  type="text"
                  autoComplete="name"
                  maxLength={80}
                  placeholder="Jane Doe"
                  value={formData.name}
                  error={errors.name}
                  onChange={(v) => update("name", v)}
                />
                <Field
                  label="Email"
                  required
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  error={errors.email}
                  onChange={(v) => update("email", v)}
                />
              </div>

              {/* Company */}
              <Field
                label="Company / Website"
                hint="optional"
                type="text"
                autoComplete="organization"
                maxLength={120}
                placeholder="company.com"
                value={formData.company}
                error={errors.company}
                onChange={(v) => update("company", v)}
              />

              {/* Project type */}
              <ProjectTypeToggle
                value={formData.projectType}
                onChange={(v) => update("projectType", v)}
              />

              {/* Services */}
              <ServiceChips
                selected={formData.services}
                onToggle={toggleService}
              />

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold text-cream uppercase tracking-[0.15em] mb-2">
                  Tell us about your project{" "}
                  <span className="text-gold">*</span>
                </label>
                <textarea
                  rows={5}
                  maxLength={2000}
                  placeholder="What are you trying to accomplish? Include any context, links, or timelines that would help us understand."
                  value={formData.message}
                  aria-invalid={!!errors.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`w-full bg-navy-deep/60 border rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-[14px] leading-relaxed focus:outline-none focus:bg-navy-deep transition-colors resize-none ${
                    errors.message
                      ? "border-gold/60 focus:border-gold"
                      : "border-cream/10 focus:border-gold/60"
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-gold/90 mt-1.5" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                {submitError && (
                  <p
                    className="text-[12px] text-gold/90 text-center mb-3"
                    role="alert"
                  >
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="group w-full inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-soft text-navy font-bold text-[15px] rounded-full py-4 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send message"}
                  <span className="w-7 h-7 rounded-full bg-navy flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:translate-x-0.5">
                    <Send
                      className="w-3 h-3 text-gold"
                      strokeWidth={2.5}
                    />
                  </span>
                </button>
                <p className="text-[11px] text-cream/40 text-center mt-3">
                  We respect your privacy — no spam, no shared data, no endless
                  drip campaigns.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
