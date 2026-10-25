import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProgrammeCard from '../components/ProgrammeCard';
import CustomisedCourseSection from '../components/CustomisedCourseSection';
import FounderProfile from '../components/FounderProfile';
import {
  BRAND_INFO,
  FOCUS_AREAS,
  PROGRAMMES,
  TRAINING_OBJECTIVES,
  FOUNDERS,
} from '../data/duoData';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* A. WHAT DUO OFFERS */}
      <section
        aria-labelledby="what-duo-offers-heading"
        className="py-16 sm:py-24 border-b border-hairline bg-ivory"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
                Core Areas of Focus
              </span>
              <h2
                id="what-duo-offers-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal"
              >
                What DUO Offers
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-stone leading-relaxed">
                Structured coaching and practical skill-building across six interconnected areas of
                personal and professional development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_AREAS.map((area) => (
              <div
                key={area.number}
                className="bg-white border border-hairline p-6 sm:p-8 flex flex-col justify-between hover:border-bronze/70 transition-colors"
              >
                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-bronze font-semibold block">
                    {area.number}
                  </span>
                  <h3 className="font-editorial text-2xl text-charcoal font-normal">
                    {area.title}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B. PROGRAMME PREVIEW */}
      <section
        aria-labelledby="programme-preview-heading"
        className="py-16 sm:py-24 border-b border-hairline bg-ivory-deep/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
                Training Programmes
              </span>
              <h2
                id="programme-preview-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal"
              >
                Choose Your Training Format
              </h2>
              <p className="text-sm sm:text-base text-stone leading-relaxed">
                Whether you are looking for a focused 3-day motivational and speaking intensive or a
                comprehensive 3-month personality development curriculum, DUO offers two clearly
                structured paths.
              </p>
            </div>
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-bronze border-b border-charcoal hover:border-bronze pb-1 w-fit transition-colors"
            >
              <span>Compare Both Programmes in Detail</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROGRAMMES.map((programme) => (
              <ProgrammeCard key={programme.id} programme={programme} mode="preview" />
            ))}
          </div>

          <CustomisedCourseSection />

          {/* Offline Payment Note */}
          <div className="bg-white border border-hairline p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 text-xs sm:text-sm text-stone">
              <ShieldCheck className="w-5 h-5 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
              <p>{BRAND_INFO.offlinePaymentNotice}</p>
            </div>
            <Link
              to="/programmes#comparison"
              className="text-xs font-mono uppercase tracking-wider text-charcoal hover:text-bronze underline shrink-0"
            >
              View Comparison Table →
            </Link>
          </div>
        </div>
      </section>

      {/* C. WHY CHOOSE DUO (Training Objectives, Not Guaranteed Outcomes) */}
      <section
        aria-labelledby="why-choose-duo-heading"
        className="py-16 sm:py-24 border-b border-hairline bg-ivory"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
                Training Objectives
              </span>
              <h2
                id="why-choose-duo-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal"
              >
                Why Choose DUO
              </h2>
              <p className="text-sm sm:text-base text-stone leading-relaxed">
                Every DUO session is guided by five core training objectives designed to support
                steady, practical self-development.
              </p>
              <div className="bg-white border-l-2 border-bronze p-4 text-xs text-stone leading-relaxed">
                <strong className="text-charcoal font-semibold block mb-1">
                  A Note on Training Objectives
                </strong>
                These themes represent the focus areas and learning objectives of our training
                sessions. Individual progress depends on active participation and consistent personal
                practice.
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {TRAINING_OBJECTIVES.map((obj, index) => (
                <div
                  key={obj.code}
                  className={`bg-white border border-hairline p-6 space-y-3 ${
                    index === TRAINING_OBJECTIVES.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-bronze font-medium">{obj.code}</span>
                    <Compass className="w-4 h-4 text-bronze/70" aria-hidden="true" />
                  </div>
                  <h3 className="font-editorial text-xl text-charcoal font-normal">{obj.title}</h3>
                  <p className="text-sm text-stone leading-relaxed">{obj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* D. MEET THE FOUNDERS */}
      <section
        aria-labelledby="meet-founders-heading"
        className="py-16 sm:py-24 border-b border-hairline bg-ivory-deep/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
                Leadership & Mentorship
              </span>
              <h2
                id="meet-founders-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal"
              >
                Meet the Founders
              </h2>
              <p className="text-sm sm:text-base text-stone leading-relaxed">
                DUO brings together decades of real-world experience in automotive training, design,
                historic conservation, and soft-skills development in Bengaluru.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-bronze border-b border-charcoal hover:border-bronze pb-1 w-fit transition-colors"
            >
              <span>Read More About DUO & Contact Details</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FOUNDERS.map((founder) => (
              <FounderProfile key={founder.id} founder={founder} compact />
            ))}
          </div>
        </div>
      </section>

      {/* E. FINAL CALL TO ACTION */}
      <section aria-labelledby="final-cta-heading" className="py-16 sm:py-24 bg-charcoal text-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-bronze">
            {BRAND_INFO.name} · {BRAND_INFO.tagline}
          </span>
          <h2
            id="final-cta-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal max-w-3xl mx-auto leading-tight"
          >
            Ready to begin your personality development and communication training?
          </h2>
          <p className="text-sm sm:text-base text-ivory/75 max-w-2xl mx-auto leading-relaxed">
            Explore our 3-Day Motivational Crash Course (₹6,000) and 3-Month Personality Development
            Course (₹30,000), or register directly online. No online payment is required when
            submitting your registration.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
            <Link
              to="/programmes"
              className="inline-flex items-center justify-center gap-2.5 bg-ivory text-charcoal px-7 py-4 text-sm font-medium hover:bg-bronze hover:text-white transition-colors"
            >
              <span>Explore Programmes</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2.5 border border-ivory/30 text-ivory px-7 py-4 text-sm font-medium hover:border-bronze hover:bg-bronze hover:text-white transition-colors"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
