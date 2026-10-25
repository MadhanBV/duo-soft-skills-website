import { Link } from 'react-router';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, FOUNDERS } from '../data/duoData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory border-t border-charcoal">
      {/* Top Editorial Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/15">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-editorial text-4xl font-medium tracking-tight text-ivory">
                {BRAND_INFO.name}
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-bronze">
                Bengaluru
              </span>
            </div>
            <p className="font-editorial italic text-xl text-ivory/90">
              “{BRAND_INFO.tagline}”
            </p>
            <p className="text-sm text-ivory/75 leading-relaxed max-w-md">
              Personality development, soft-skills training, motivational coaching, and personal
              development for students, graduates, job seekers, and professionals.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-ivory/70">
              <MapPin className="w-4 h-4 text-bronze shrink-0" aria-hidden="true" />
              <span>{BRAND_INFO.location}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
              Navigation
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-ivory/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programmes" className="text-ivory/80 hover:text-white transition-colors">
                  Programmes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ivory/80 hover:text-white transition-colors">
                  About DUO
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-ivory/80 hover:text-white transition-colors">
                  Register Now
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-ivory/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
              Founders & Direct Contact
            </h2>
            <div className="space-y-5 text-sm">
              {FOUNDERS.map((founder) => (
                <div key={founder.id} className="space-y-1.5 border-l-2 border-bronze/50 pl-3.5">
                  <p className="font-medium text-ivory">{founder.name}</p>
                  <div className="flex flex-col gap-1 text-ivory/75 text-xs">
                    <a
                      href={founder.phoneHref}
                      className="inline-flex items-center gap-2 hover:text-white transition-colors w-fit"
                    >
                      <Phone className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
                      <span>{founder.phoneDisplay}</span>
                    </a>
                    <a
                      href={founder.emailHref}
                      className="inline-flex items-center gap-2 hover:text-white transition-colors w-fit"
                    >
                      <Mail className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
                      <span>{founder.email}</span>
                    </a>
                    {founder.linkedInUrl && (
                      <a
                        href={founder.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-white transition-colors w-fit"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
                        <span>LinkedIn Profile</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Offline Payment Reminder */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ivory/65">
          <p>© {currentYear} DUO. All rights reserved. Bengaluru, Karnataka, India.</p>
          <p className="inline-flex items-center gap-2 text-ivory/70">
            <ShieldCheck className="w-4 h-4 text-bronze shrink-0" aria-hidden="true" />
            <span>Registrations are submitted online; programme payments are handled offline.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
