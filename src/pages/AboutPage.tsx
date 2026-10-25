import { Link } from 'react-router';
import { MapPin, Phone, Mail, ExternalLink, Info, ArrowRight } from 'lucide-react';
import FounderProfile from '../components/FounderProfile';
import {
  BRAND_INFO,
  FOUNDERS,
  FOCUS_AREAS,
  TRAINING_OBJECTIVES,
} from '../data/duoData';

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* Editorial Intro Section */}
      <section className="bg-ivory border-b border-hairline py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
                About {BRAND_INFO.name} · {BRAND_INFO.location}
              </span>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-charcoal font-normal leading-tight">
                {BRAND_INFO.tagline}
              </h1>
              <p className="text-base sm:text-lg text-stone leading-relaxed">
                {BRAND_INFO.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-hairline p-6 sm:p-8 space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-semibold">
                Who We Work With
              </h2>
              <p className="text-sm text-charcoal leading-relaxed">
                DUO is designed for students, graduates, job seekers, and individuals who want to
                strengthen their communication, personal confidence, personality, and professional
                presentation.
              </p>
              <div className="pt-3 border-t border-hairline flex items-center gap-2 text-xs text-stone">
                <MapPin className="w-4 h-4 text-bronze shrink-0" aria-hidden="true" />
                <span>Based in {BRAND_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section
        aria-labelledby="founders-section-heading"
        className="py-16 sm:py-20 border-b border-hairline bg-ivory-deep/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
              Founders
            </span>
            <h2
              id="founders-section-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal"
            >
              Raghuvir Ojha & Mousumi Ojha
            </h2>
            <p className="text-sm sm:text-base text-stone leading-relaxed">
              Learn directly from the founders of DUO. Authentic portrait frames below can be updated
              with official founder photographs at any time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FOUNDERS.map((founder) => (
              <FounderProfile key={founder.id} founder={founder} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus Areas & Training Objectives */}
      <section className="py-16 sm:py-20 border-b border-hairline bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze">
                Six Pillars
              </span>
              <h2 className="font-editorial text-3xl text-charcoal font-normal">
                Focus Areas at DUO
              </h2>
            </div>
            <div className="divide-y divide-hairline border-t border-b border-hairline bg-white">
              {FOCUS_AREAS.map((area) => (
                <div key={area.number} className="p-5 flex items-start gap-4">
                  <span className="font-mono text-xs text-bronze font-semibold mt-1">
                    {area.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-medium text-charcoal text-base">{area.title}</h3>
                    <p className="text-xs sm:text-sm text-stone leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze">
                Core Objectives
              </span>
              <h2 className="font-editorial text-3xl text-charcoal font-normal">
                Training Objectives
              </h2>
            </div>
            <div className="divide-y divide-hairline border-t border-b border-hairline bg-white">
              {TRAINING_OBJECTIVES.map((obj) => (
                <div key={obj.code} className="p-5 space-y-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-bronze">
                    {obj.code}
                  </span>
                  <h3 className="font-medium text-charcoal text-base">{obj.title}</h3>
                  <p className="text-xs sm:text-sm text-stone leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Official Contact Directory */}
      <section aria-labelledby="contact-directory-heading" className="pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
              Get in Touch
            </span>
            <h2
              id="contact-directory-heading"
              className="font-editorial text-3xl sm:text-4xl text-charcoal font-normal"
            >
              Official Contact Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS.map((founder) => (
              <div key={founder.id} className="bg-white border border-hairline p-6 space-y-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-bronze">
                    Co-Founder
                  </p>
                  <h3 className="font-editorial text-2xl text-charcoal mt-0.5">{founder.name}</h3>
                </div>
                <div className="space-y-2.5 text-sm">
                  <a
                    href={founder.phoneHref}
                    className="flex items-center gap-2.5 text-charcoal hover:text-bronze font-medium w-fit"
                  >
                    <Phone className="w-4 h-4 text-bronze" aria-hidden="true" />
                    <span>{founder.phoneDisplay}</span>
                  </a>
                  <a
                    href={founder.emailHref}
                    className="flex items-center gap-2.5 text-charcoal hover:text-bronze font-medium w-fit"
                  >
                    <Mail className="w-4 h-4 text-bronze" aria-hidden="true" />
                    <span>{founder.email}</span>
                  </a>
                  {founder.linkedInUrl && (
                    <a
                      href={founder.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-charcoal hover:text-bronze font-medium w-fit"
                    >
                      <ExternalLink className="w-4 h-4 text-bronze" aria-hidden="true" />
                      <span>{founder.linkedInLabel}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-white border border-hairline p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-wider text-bronze">
                  Location & Registration
                </p>
                <h3 className="font-editorial text-2xl text-charcoal">
                  {BRAND_INFO.location}
                </h3>
                <p className="text-xs sm:text-sm text-stone leading-relaxed">
                  To register for a programme, submit the online registration form and select whether
                  you prefer the DUO team to reach you via WhatsApp or phone.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 bg-charcoal text-ivory px-5 py-3 text-xs sm:text-sm font-medium hover:bg-bronze hover:text-white transition-colors"
                >
                  <span>Go to Registration Form</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Note on Official WhatsApp Link Policy */}
          <div className="bg-white border border-hairline p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-stone">
            <Info className="w-5 h-5 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              <strong className="text-charcoal font-semibold">WhatsApp Contact Note: </strong>
              Direct telephone (<code className="font-mono text-xs">tel:</code>), email (
              <code className="font-mono text-xs">mailto:</code>), and LinkedIn links are active
              above. Visitors can select <strong className="text-charcoal">WhatsApp</strong> or{' '}
              <strong className="text-charcoal">Phone</strong> as their preferred contact method on
              the registration form so the DUO team can message or call them directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
