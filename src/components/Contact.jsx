import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Send, User, Mail, MessageSquare, Loader2,
  MapPin, Phone, Github, Linkedin, Twitter, Clock, Sparkles,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
//  EMAILJS CONFIG  ←  Replace these dummy values with your real credentials
//  Sign up FREE at: https://www.emailjs.com/
//  Then go to: Email Services → Add Service  &  Email Templates → Create Template
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_t51hdsq';      // e.g. "service_xxxxxxx"
const EMAILJS_TEMPLATE_ID = 'template_a3tni8f';    // e.g. "template_xxxxxxx"
const EMAILJS_PUBLIC_KEY = 'rx3VL-FHwHqdjRgwJ'; // Your EmailJS Public Key

// ─────────────────────────────────────────────────────────────────────────────
//  LEFT PANEL DATA
// ─────────────────────────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'bablukumar27489@gmail.com',
    href: 'mailto:bablukumar27489@gmail.com',
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'rgba(59,130,246,0.35)',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    gradient: 'from-violet-500 to-purple-400',
    glow: 'rgba(139,92,246,0.35)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
    gradient: 'from-orange-500 to-amber-400',
    glow: 'rgba(249,115,22,0.35)',
  },
];

const socials = [
  { icon: Github, href: 'https://github.com/BabluKumar091', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/bablu-kumar92/', label: 'LinkedIn' },
];

// ─────────────────────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      e.target.reset();
    } catch (err) {
      console.error('EmailJS Error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="relative overflow-hidden bg-[#0b0b0e] py-28 flex items-center min-h-screen"
    >
      {/* ── Ambient glow blobs ── */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-violet-700/10 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-700/5 blur-[120px]" />

      {/* ── Grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-300">
            <Sparkles size={11} />
            Let's Connect
          </div>
          <h2 className="text-5xl font-black text-white md:text-6xl">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Dream project, collaboration idea, or just a friendly hello — I'm all ears.
          </p>
        </motion.div>

        {/* ── Two-column card ── */}
        <div
          className="grid grid-cols-1 overflow-hidden rounded-3xl border border-white/[0.07] lg:grid-cols-5"
          style={{ boxShadow: '0 0 100px rgba(109,40,217,0.12), 0 0 40px rgba(0,0,0,0.5)' }}
        >

          {/* ══════════════════════════════════════
              LEFT — Contact Info Panel
          ══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#13111d] via-[#110f1a] to-[#0d0b15] p-10 lg:col-span-2"
          >
            {/* decorative circles */}
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-600/[0.08] blur-3xl" />
            <div className="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full bg-blue-500/[0.08] blur-2xl" />

            {/* ── Top text ── */}
            <div className="relative z-10">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400">
                Contact Information
              </p>
              <h3 className="mb-2 text-2xl font-extrabold text-white">
                Say Hello 👋
              </h3>
              <p className="mb-10 text-sm leading-relaxed text-gray-400">
                I’m currently looking for new opportunities to apply my skills and grow within a collaborative team. Whether you have a project in mind or just want to say hi, my inbox is always open!
              </p>

              {/* Info items */}
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href, gradient, glow }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                    className="group flex items-center gap-4"
                  >
                    {/* icon bubble */}
                    <div
                      className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
                      style={{ boxShadow: `0 0 18px ${glow}` }}
                    >
                      <Icon size={17} className="text-white" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-gray-300 transition-colors duration-200 group-hover:text-white"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-300">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Bottom — socials + badge ── */}
            <div className="relative z-10 mt-10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.12 }}
                    whileTap={{ scale: 0.93 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 hover:border-violet-500/40 hover:bg-violet-500/15 hover:text-white"
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════
              RIGHT — Contact Form
          ══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative flex items-center overflow-hidden bg-[#0f0e14] p-10 md:p-12 lg:col-span-3"
          >
            {/* top glow line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            {/* left divider line */}
            <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />

            <form ref={form} onSubmit={onSubmit} className="relative z-10 w-full space-y-5">

              {/* Name + Email row */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Your Name
                  </label>
                  <div className="group relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 transition-colors duration-200 group-focus-within:text-violet-400"
                      size={15}
                    />
                    <input
                      type="text"
                      name="Gmail"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-700 transition-all duration-200 focus:border-violet-500/50 focus:bg-violet-500/5 focus:outline-none focus:ring-1 focus:ring-violet-500/25"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Email Address
                  </label>
                  <div className="group relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 transition-colors duration-200 group-focus-within:text-violet-400"
                      size={15}
                    />
                    <input
                      type="email"
                      name="name"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-700 transition-all duration-200 focus:border-violet-500/50 focus:bg-violet-500/5 focus:outline-none focus:ring-1 focus:ring-violet-500/25"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Message
                </label>
                <div className="group relative">
                  <MessageSquare
                    className="absolute left-4 top-4 text-gray-600 transition-colors duration-200 group-focus-within:text-violet-400"
                    size={15}
                  />
                  <textarea
                    name="message"
                    required
                    placeholder="Tell me about your project, timeline, budget, or just say hello..."
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/[0.07] bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-700 transition-all duration-200 focus:border-violet-500/50 focus:bg-violet-500/5 focus:outline-none focus:ring-1 focus:ring-violet-500/25"
                  />
                </div>
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.015 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.975 }}
                className="group relative w-full overflow-hidden rounded-xl py-4 text-sm font-bold tracking-wide text-white disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #a855f7 100%)',
                  boxShadow: '0 0 40px rgba(139,92,246,0.3), 0 4px 15px rgba(0,0,0,0.4)',
                }}
              >
                {/* shimmer sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center justify-center gap-2.5">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending your message…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </span>
              </motion.button>

              {/* Success toast */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-sm text-emerald-400"
                >
                  <span className="text-base">🎉</span>
                  Message sent! I'll reply within 24 hours.
                </motion.div>
              )}

              {/* Error toast */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="rounded-xl border border-red-500/25 bg-red-500/10 p-4 text-center text-sm text-red-400"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <p className="text-center text-[11px] text-gray-700">
                🔒 Your information is private and will never be shared.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;