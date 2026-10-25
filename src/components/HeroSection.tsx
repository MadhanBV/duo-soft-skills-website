import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/duoData';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 border border-hairline bg-white px-3.5 py-1.5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-bronze font-medium">
                {BRAND_INFO.name}
              </span>
              <span className="h-3 w-px bg-hairline" aria-hidden="true" />
              <span className="text-xs text-stone tracking-wide">
                {BRAND_INFO.tagline}
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.1] tracking-tight">
                Cultivate the confidence, clarity, and presence to speak and lead with purpose.
              </h1>
              <p className="text-base sm:text-lg text-stone max-w-2xl leading-relaxed">
                {BRAND_INFO.description}
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/programmes"
                className="inline-flex items-center justify-center gap-3 bg-charcoal text-ivory px-7 py-4 text-sm font-medium tracking-wide hover:bg-bronze hover:text-white transition-colors"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-charcoal border border-charcoal/25 px-7 py-4 text-sm font-medium tracking-wide hover:border-charcoal hover:bg-ivory-deep/50 transition-colors"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-4 h-4 text-bronze" aria-hidden="true" />
              </Link>
            </div>

            {/* Key Factual Highlights Strip */}
            <div className="pt-6 border-t border-hairline grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-charcoal">Two Structured Formats</p>
                  <p>3-Day Crash Course & 3-Month Course</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-charcoal">Personal Mentorship</p>
                  <p>Guided by Raghuvir Ojha & Mousumi Ojha</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-charcoal">Direct Registration</p>
                  <p>Online registration; offline fee settlement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Photography Composition */}
          <div className="lg:col-span-5">
            <div className="relative bg-white p-3 sm:p-4 border border-hairline shadow-xs">
              <div className="aspect-[4/5] w-full overflow-hidden bg-ivory-deep relative">
                <img
                  src="https://images.unsplash.com/photo-1573496546038-82f9c39f6365?w=1000&h=1250&fit=crop&auto=format&q=80"
                  alt="Interactive coaching and communication mentorship session in warm natural light"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-ivory/95 backdrop-blur-xs p-4 border border-hairline">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">
                    DUO Training Initiative · Bengaluru
                  </p>
                  <p className="font-editorial text-lg text-charcoal mt-0.5">
                    “Unlock Your Strength · Achieve Your Ultimate.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
