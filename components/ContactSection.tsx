'use client';

import { useState } from 'react';
import { Phone, ChevronDown, CheckCircle2, Send } from 'lucide-react';
import { siteConfig } from '@/lib/site';

// Solid icons to match the mockup (lucide only has outline versions)
function MailSolidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="3" fill="currentColor" />
      <path d="M4.5 8l7.5 5.5L19.5 8" stroke="#00102a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinSolidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="currentColor"
      />
      <circle cx="12" cy="9" r="2.7" fill="#00102a" />
    </svg>
  );
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="18" cy="5" r="3" fill="currentColor" />
      <circle cx="6" cy="12" r="3" fill="currentColor" />
      <circle cx="18" cy="19" r="3" fill="currentColor" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

/* ---------- shared classes ----------
   On desktop (lg+) sizes use clamp(min, dvh-based, max) so the whole section
   shrinks on short screens and never grows past 100dvh. */

const cardClass =
  'flex-1 flex items-center rounded-2xl border-[1.5px] border-primary/80 bg-[#00102a]/70 backdrop-blur-md px-5 py-3.5 sm:px-6 lg:py-[1.2dvh] xl:px-8 ' +
  'shadow-[0_0_16px_rgba(6,161,255,0.3),inset_0_0_14px_rgba(6,161,255,0.08)] ' +
  'hover:border-accent hover:shadow-[0_0_26px_rgba(63,203,248,0.45)] transition-all duration-300';

const rowClass = 'flex items-center gap-5 lg:gap-6 xl:gap-10 w-full';
const iconBox = 'w-10 sm:w-11 lg:w-12 shrink-0 flex justify-center text-accent';
const iconClass =
  'w-9 h-9 lg:w-[clamp(28px,4.4dvh,40px)] lg:h-[clamp(28px,4.4dvh,40px)] drop-shadow-[0_0_8px_rgba(63,203,248,0.55)]';
const labelClass =
  'block text-accent text-[13px] lg:text-[clamp(12px,1.7dvh,15px)] font-medium leading-tight';
const valueClass =
  'text-ink font-medium text-[15px] lg:text-[clamp(14px,2dvh,18px)] leading-snug mt-1';
const subClass =
  'text-ink/80 text-xs lg:text-[clamp(11px,1.5dvh,14px)] mt-1 font-normal';

const fieldLabel =
  'block text-[13px] lg:text-[clamp(12px,1.55dvh,14px)] font-medium text-ink mb-1.5 lg:mb-[0.7dvh]';
const fieldClass =
  'w-full rounded-[10px] border border-primary/70 bg-[#000814]/80 px-3.5 py-2 lg:py-[clamp(6px,1dvh,10px)] text-[13px] lg:text-[clamp(12px,1.55dvh,14px)] text-ink placeholder:text-ink/50 ' +
  'focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all';

const socialLink = 'text-accent hover:text-ink hover:scale-110 transition-all';
const socialIcon = 'w-5 h-5 lg:w-[clamp(18px,2.7dvh,24px)] lg:h-[clamp(18px,2.7dvh,24px)]';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="inquiry-form"
      aria-labelledby="contact-section-heading"
      // Never taller than one screen on desktop
      className="relative w-full max-w-[100vw] py-8 sm:py-10 lg:py-3 xl:py-4 lg:max-h-[100dvh] flex items-center bg-[#000613] overflow-hidden scroll-mt-20"
    >
      {/* Background ambient glowing curves */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[28rem] h-[28rem] pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(6, 161, 255, 0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[28rem] h-[28rem] pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(63, 203, 248, 0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.75fr] gap-8 lg:gap-5 xl:gap-7 items-stretch w-full">
          {/* ============ LEFT COLUMN: 4 contact cards ============ */}
          <div className="flex flex-col gap-3 lg:gap-[1.4dvh] w-full">
            {/* Phone */}
            <div className={cardClass}>
              <div className={rowClass}>
                <div className={iconBox}>
                  <Phone className={iconClass} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className={labelClass}>Phone Number</span>
                  <div className={valueClass}>
                    {siteConfig.phones.map((phone, i) => (
                      <span key={phone.tel}>
                        {i > 0 && (
                          <span className="mx-2 text-ink/60" aria-hidden="true">
                            |
                          </span>
                        )}
                        <a href={`tel:${phone.tel}`} className="hover:text-accent transition-colors">
                          {phone.display}
                        </a>
                      </span>
                    ))}
                  </div>
                  <p className={subClass}>Mon &ndash; Sat, 9:00 AM &ndash; 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className={cardClass}>
              <div className={rowClass}>
                <div className={iconBox}>
                  <MailSolidIcon className={iconClass} />
                </div>
                <div className="min-w-0">
                  <span className={labelClass}>Email Address</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className={`${valueClass} hover:text-accent transition-colors block break-all`}
                  >
                    {siteConfig.email}
                  </a>
                  <p className={subClass}>We reply within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Office */}
            <div className={cardClass}>
              <div className={rowClass}>
                <div className={iconBox}>
                  <PinSolidIcon className={iconClass} />
                </div>
                <div className="min-w-0">
                  <span className={labelClass}>Our Office</span>
                  <p className={valueClass}>{siteConfig.location}</p>
                  <p className={subClass}>Contact us for office address</p>
                </div>
              </div>
            </div>

            {/* Follow us */}
            <div className={cardClass}>
              <div className={rowClass}>
                <div className={iconBox}>
                  <ShareIcon className={iconClass} />
                </div>
                <div className="min-w-0">
                  <span className={`${labelClass} mb-2 lg:mb-[0.8dvh]`}>Follow Us</span>
                  <div className="flex items-center gap-5 xl:gap-8">
                    <a
                      href={siteConfig.socialLinks[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialLink}
                      aria-label="ASCO Facebook"
                    >
                      <FacebookIcon className={socialIcon} />
                    </a>
                    <a
                      href={siteConfig.socialLinks[1].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialLink}
                      aria-label="ASCO Instagram"
                    >
                      <InstagramIcon className={socialIcon} />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialLink}
                      aria-label="ASCO YouTube"
                    >
                      <YouTubeIcon className={socialIcon} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialLink}
                      aria-label="ASCO LinkedIn"
                    >
                      <LinkedInIcon className={socialIcon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============ VERTICAL GLOWING DIVIDER (desktop) ============ */}
          <div className="hidden lg:flex items-stretch justify-center px-1 xl:px-2" aria-hidden="true">
            <div className="w-[2px] h-full bg-gradient-to-b from-accent/20 via-accent to-accent/20 shadow-[0_0_12px_rgba(63,203,248,0.8)]" />
          </div>

          {/* ============ RIGHT COLUMN: form card ============ */}
          <div className="rounded-3xl border-[1.5px] border-primary/80 bg-[#000d24]/85 backdrop-blur-md p-5 sm:p-6 lg:px-7 lg:py-[2dvh] xl:px-8 shadow-[0_0_30px_rgba(6,161,255,0.28),inset_0_0_20px_rgba(6,161,255,0.06)] flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center gap-4 sm:gap-5 mb-4 lg:mb-[2dvh]">
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[clamp(52px,7.6dvh,70px)] lg:h-[clamp(52px,7.6dvh,70px)] rounded-full border-2 border-accent bg-[#000814]/90 flex items-center justify-center shrink-0 shadow-[0_0_22px_rgba(63,203,248,0.55),inset_0_0_14px_rgba(63,203,248,0.25)]"
                aria-hidden="true"
              >
                <Send className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[clamp(22px,3.5dvh,32px)] lg:h-[clamp(22px,3.5dvh,32px)] text-accent fill-current" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-accent text-[11px] sm:text-xs lg:text-[clamp(11px,1.45dvh,13px)] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                    SEND US A MESSAGE
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-accent/60 to-transparent" />
                </div>
                <h2
                  id="contact-section-heading"
                  className="font-heading font-semibold text-2xl sm:text-3xl lg:text-[clamp(1.4rem,3.4dvh,1.9rem)] text-ink leading-tight mt-1"
                >
                  How Can We Help You?
                </h2>
                <p className="text-ink/90 text-[13px] lg:text-[clamp(12px,1.55dvh,14px)] mt-1 leading-relaxed">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-10 h-10 text-accent mb-2.5 drop-shadow-[0_0_12px_rgba(63,203,248,0.6)]" />
                <h3 className="font-heading font-bold text-lg text-ink">Thank You!</h3>
                <p className="text-ink-muted text-xs mt-1 max-w-sm">
                  Your message has been received. Our sales and support team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 lg:space-y-[1.7dvh]">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 lg:gap-4">
                  <div>
                    <label htmlFor="form-name" className={fieldLabel}>
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="form-email" className={fieldLabel}>
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className={fieldClass}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="form-subject" className={fieldLabel}>
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="form-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`${fieldClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="Wholesale & Bulk Orders" className="bg-[#000d24] text-ink">
                        Wholesale & Bulk Orders
                      </option>
                      <option value="220V LED Rope Light Inquiry" className="bg-[#000d24] text-ink">
                        220V LED Rope Light Inquiry
                      </option>
                      <option value="LED Strip & Profile Channels" className="bg-[#000d24] text-ink">
                        LED Strip & Profile Channels
                      </option>
                      <option value="Commercial Batten & Tracklights" className="bg-[#000d24] text-ink">
                        Commercial Batten & Tracklights
                      </option>
                      <option value="Project Consultation" className="bg-[#000d24] text-ink">
                        Project / Architectural Consultation
                      </option>
                      <option value="General Inquiry" className="bg-[#000d24] text-ink">
                        General Inquiry
                      </option>
                    </select>
                    <ChevronDown
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="form-message" className={fieldLabel}>
                    Your Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    rows={2}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <div className="pt-0.5">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 lg:py-[clamp(8px,1.3dvh,12px)] px-6 rounded-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-[#000613] font-semibold text-[13px] lg:text-[clamp(12px,1.55dvh,14px)] tracking-wide shadow-[0_0_20px_rgba(6,161,255,0.45)] hover:shadow-[0_0_28px_rgba(63,203,248,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer group"
                  >
                    <Send className="w-4 h-4 fill-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Send Message</span>
                    <span aria-hidden="true" className="font-bold">&rarr;</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;