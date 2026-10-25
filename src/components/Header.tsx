import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/duoData';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'About', to: '/about' },
  { label: 'Register', to: '/register' },
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-sm border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link
            to="/"
            className="group flex items-baseline gap-3.5 focus-visible:outline-2 focus-visible:outline-bronze"
            aria-label="DUO — Unlock Your Strength, Achieve Your Ultimate — Home"
          >
            <span className="font-editorial text-3xl sm:text-4xl font-medium tracking-tight text-charcoal">
              {BRAND_INFO.name}
            </span>
            <span className="hidden md:inline-block h-4 w-px bg-hairline self-center" aria-hidden="true" />
            <span className="hidden md:inline-block text-xs uppercase tracking-[0.16em] text-stone group-hover:text-charcoal transition-colors">
              Unlock Your Strength · Achieve Your Ultimate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `relative py-2 text-sm font-medium tracking-wide transition-colors ${
                        isActive
                          ? 'text-charcoal after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-bronze'
                          : 'text-stone hover:text-charcoal'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-charcoal text-ivory px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-bronze hover:text-white transition-colors duration-200"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="p-2.5 text-charcoal hover:bg-ivory-deep transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile navigation"
          className="md:hidden bg-ivory border-b border-hairline px-4 pt-3 pb-6 space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-bronze font-medium px-2">
            {BRAND_INFO.tagline}
          </p>
          <ul className="divide-y divide-hairline border-t border-b border-hairline">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3.5 px-2 text-base font-medium transition-colors ${
                      isActive ? 'text-charcoal font-semibold bg-ivory-deep/60' : 'text-stone hover:text-charcoal'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-bronze" aria-hidden="true">
                    →
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Link
              to="/register"
              className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-ivory px-5 py-3.5 text-sm font-medium tracking-wide hover:bg-bronze hover:text-white transition-colors"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
