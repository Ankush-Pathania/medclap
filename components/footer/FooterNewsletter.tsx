"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Sparkles } from "lucide-react";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Newsletter signup:", email);
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <div className="lg:col-span-5">
      <div className="relative bg-cream/[0.04] border border-cream/10 rounded-3xl p-6 md:p-7 backdrop-blur-sm overflow-hidden">
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gold/15 blur-2xl pointer-events-none" />

        <div className="flex items-start justify-between mb-4 relative">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">
                The Inside List
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-[26px] font-extrabold tracking-tight leading-tight">
              Marketing tactics{" "}
              <span className="font-serif italic font-normal text-gold">
                that work.
              </span>
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-navy" strokeWidth={2.5} />
          </div>
        </div>

        <p className="text-[13.5px] text-cream/60 leading-relaxed mb-5">
          One short email a month. Real campaign breakdowns, conversion
          patterns, and the unsexy stuff that actually moves the needle. No
          fluff, ever.
        </p>

        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 bg-gold/15 border border-gold/30 rounded-full px-5 py-3.5"
          >
            <CheckCircle2 className="w-4 h-4 text-gold" strokeWidth={2.5} />
            <span className="text-[13.5px] font-bold text-cream">
              You&apos;re in. Watch your inbox.
            </span>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex items-center gap-1.5 bg-navy-deep/60 border border-cream/10 rounded-full pl-5 pr-1.5 py-1.5 focus-within:border-gold/60 transition-colors"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent text-cream placeholder:text-cream/35 text-[14px] focus:outline-none py-2"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="group flex-shrink-0 w-9 h-9 rounded-full bg-gold hover:bg-gold-soft flex items-center justify-center transition-all duration-300"
            >
              <Send
                className="w-3.5 h-3.5 text-navy transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </button>
          </form>
        )}

        <p className="text-[10.5px] text-cream/40 mt-3 leading-relaxed">
          Joined by 2,400+ founders & marketers. Unsubscribe in one click — no
          judgement.
        </p>
      </div>
    </div>
  );
}
