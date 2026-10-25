import { useState, useEffect, ChangeEvent } from 'react';
import { Phone, Mail, ExternalLink, ImagePlus, CheckCircle2, RotateCcw } from 'lucide-react';
import { FounderData } from '../data/duoData';

interface FounderProfileProps {
  founder: FounderData;
  compact?: boolean;
}

export default function FounderProfile({ founder, compact = false }: FounderProfileProps) {
  const storageKey = `duo_founder_photo_${founder.id}`;
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  });
  const [staticPhotoLoaded, setStaticPhotoLoaded] = useState(true);

  useEffect(() => {
    setStaticPhotoLoaded(true);
  }, [founder.expectedPhotoPath]);

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result || '');
      setCustomPhoto(dataUrl);
      try {
        localStorage.setItem(storageKey, dataUrl);
      } catch {
        // Ignore quota errors
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClearPhoto = () => {
    setCustomPhoto(null);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // Ignore storage errors
    }
  };

  const activePhoto = customPhoto || (staticPhotoLoaded ? founder.expectedPhotoPath : null);

  return (
    <article className="bg-white border border-hairline flex flex-col justify-between">
      <div className="p-6 sm:p-8 space-y-6">
        {/* Authentic Portrait Frame */}
        <div className="relative aspect-[4/4.5] w-full bg-ivory border border-hairline overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
          {activePhoto ? (
            <>
              <img
                src={activePhoto}
                alt={`Portrait of ${founder.name}, Co-Founder of DUO`}
                onError={() => {
                  if (!customPhoto) {
                    setStaticPhotoLoaded(false);
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {customPhoto && (
                <button
                  type="button"
                  onClick={handleClearPhoto}
                  className="absolute top-3 right-3 bg-charcoal/85 text-ivory px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5 hover:bg-charcoal transition-colors"
                  title="Reset to default portrait"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reset Photo</span>
                </button>
              )}
            </>
          ) : (
            <div className="space-y-3 max-w-xs">
              <div className="w-16 h-16 mx-auto rounded-full border border-bronze/60 bg-white flex items-center justify-center">
                <span className="font-editorial text-2xl text-charcoal font-medium">
                  {founder.initials}
                </span>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze">
                  Authentic Founder Portrait Slot
                </p>
                <p className="text-xs text-stone leading-relaxed">
                  Reserved for the official photograph of <strong className="text-charcoal">{founder.name}</strong>{' '}
                  (<code className="font-mono text-[11px]">{founder.expectedPhotoPath}</code>).
                </p>
              </div>
              {!compact && (
                <div className="pt-1">
                  <label className="inline-flex items-center gap-1.5 cursor-pointer bg-white border border-hairline px-3 py-1.5 text-xs font-medium text-charcoal hover:border-bronze transition-colors">
                    <ImagePlus className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
                    <span>Preview Official Portrait</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="sr-only"
                      aria-label={`Upload authentic photograph for ${founder.name}`}
                    />
                  </label>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Founder Name & Headline */}
        <div className="space-y-1.5 border-b border-hairline pb-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-bronze">
            Co-Founder · DUO
          </p>
          <h3 className="font-editorial text-2xl sm:text-3xl text-charcoal font-normal">
            {founder.name}
          </h3>
          <p className="text-sm font-medium text-stone">{founder.headline}</p>
        </div>

        {/* Verified Biographical Facts Only */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-stone">
            Background & Experience
          </h4>
          <ul className="space-y-2.5">
            {founder.facts.map((fact) => (
              <li key={fact} className="flex items-start gap-2.5 text-sm text-charcoal leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Clickable Contact Links */}
      <div className="px-6 sm:px-8 py-5 bg-ivory/60 border-t border-hairline space-y-2.5 text-sm">
        <p className="text-xs font-mono uppercase tracking-[0.15em] text-stone">
          Direct Contact
        </p>
        <div className="flex flex-col gap-2">
          <a
            href={founder.phoneHref}
            className="inline-flex items-center gap-2.5 text-charcoal hover:text-bronze font-medium transition-colors w-fit"
          >
            <Phone className="w-4 h-4 text-bronze shrink-0" aria-hidden="true" />
            <span>{founder.phoneDisplay}</span>
          </a>
          <a
            href={founder.emailHref}
            className="inline-flex items-center gap-2.5 text-charcoal hover:text-bronze font-medium transition-colors w-fit"
          >
            <Mail className="w-4 h-4 text-bronze shrink-0" aria-hidden="true" />
            <span>{founder.email}</span>
          </a>
          {founder.linkedInUrl && (
            <a
              href={founder.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-charcoal hover:text-bronze font-medium transition-colors w-fit"
            >
              <ExternalLink className="w-4 h-4 text-bronze shrink-0" aria-hidden="true" />
              <span>{founder.linkedInLabel || founder.linkedInUrl}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
