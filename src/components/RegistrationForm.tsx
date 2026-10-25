import { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router';
import {
  Send,
  Loader2,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { PROGRAMMES, ProgrammeOptionName, BRAND_INFO } from '../data/duoData';
import {
  RegistrationFormValues,
  RegistrationFieldErrors,
  RegistrationSuccessResponse,
  validateRegistrationForm,
  submitRegistration,
} from '../services/registrationService';
import FormField from './FormField';
import SubmissionStatus from './SubmissionStatus';

interface RegistrationFormProps {
  preselectedProgramme?: ProgrammeOptionName | '';
}

export default function RegistrationForm({ preselectedProgramme = '' }: RegistrationFormProps) {
  const [values, setValues] = useState<RegistrationFormValues>({
    fullName: '',
    mobileNumber: '+91 ',
    email: '',
    programme: preselectedProgramme,
    preferredContact: 'WhatsApp',
    additionalInfo: '',
    privacyConsent: false,
    websiteUrl: '',
  });

  const [fieldErrors, setFieldErrors] = useState<RegistrationFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<RegistrationSuccessResponse | null>(
    null
  );

  // Sync preselected programme when navigating from Programme cards
  useEffect(() => {
    if (preselectedProgramme) {
      setValues((prev) => ({ ...prev, programme: preselectedProgramme }));
      setFieldErrors((prev) => ({ ...prev, programme: undefined }));
    }
  }, [preselectedProgramme]);

  const handleFieldChange = <K extends keyof RegistrationFormValues>(
    field: K,
    value: RegistrationFormValues[K]
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (formError) {
      setFormError(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setFormError(null);

    const validation = validateRegistrationForm(values);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      setFormError('Please check the highlighted form fields before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitRegistration(values);
      if (result.ok) {
        setSubmissionSuccess(result);
        setFieldErrors({});
        setFormError(null);
      } else {
        setFormError(result.error);
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmissionSuccess(null);
    setFormError(null);
    setFieldErrors({});
    setValues({
      fullName: '',
      mobileNumber: '+91 ',
      email: '',
      programme: preselectedProgramme || '',
      preferredContact: 'WhatsApp',
      additionalInfo: '',
      privacyConsent: false,
      websiteUrl: '',
    });
  };

  if (submissionSuccess) {
    return <SubmissionStatus result={submissionSuccess} onReset={handleResetForm} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-hairline p-6 sm:p-10 space-y-7"
    >
      <div className="border-b border-hairline pb-5 space-y-2">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze">
          Programme Enquiry & Registration
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl text-charcoal font-normal">
          Register Directly with DUO
        </h2>
        <p className="text-sm text-stone leading-relaxed">
          Complete the form below to register for your chosen programme. Fields marked with{' '}
          <span className="text-bronze font-mono">*</span> are required.
        </p>
      </div>

      {/* Honeypot anti-spam field (hidden from assistive tech and human visitors) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="duo-website-url">Website</label>
        <input
          id="duo-website-url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.websiteUrl}
          onChange={(e) => handleFieldChange('websiteUrl', e.target.value)}
        />
      </div>

      {/* 1. Full Name */}
      <FormField
        id="reg-full-name"
        label="1. Full Name"
        required
        error={fieldErrors.fullName}
      >
        <input
          id="reg-full-name"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          value={values.fullName}
          onChange={(e) => handleFieldChange('fullName', e.target.value)}
          aria-invalid={Boolean(fieldErrors.fullName)}
          aria-describedby={fieldErrors.fullName ? 'reg-full-name-error' : undefined}
          placeholder="Enter your full name"
          className="w-full bg-ivory/60 border border-hairline px-4 py-3 text-sm text-charcoal placeholder:text-stone/60 focus:bg-white focus:border-bronze focus:outline-none transition-colors"
        />
      </FormField>

      {/* 2. Mobile Number with Country Code & 3. Email Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          id="reg-mobile-number"
          label="2. Mobile Number (with Country Code)"
          required
          hint="Include your country code, e.g. +91 98765 43210"
          error={fieldErrors.mobileNumber}
        >
          <input
            id="reg-mobile-number"
            name="mobileNumber"
            type="tel"
            required
            autoComplete="tel"
            value={values.mobileNumber}
            onChange={(e) => handleFieldChange('mobileNumber', e.target.value)}
            aria-invalid={Boolean(fieldErrors.mobileNumber)}
            aria-describedby={
              fieldErrors.mobileNumber
                ? 'reg-mobile-number-error'
                : 'reg-mobile-number-hint'
            }
            placeholder="+91 98765 43210"
            className="w-full bg-ivory/60 border border-hairline px-4 py-3 text-sm text-charcoal placeholder:text-stone/60 focus:bg-white focus:border-bronze focus:outline-none transition-colors"
          />
        </FormField>

        <FormField
          id="reg-email"
          label="3. Email Address"
          required={false}
          hint="Optional — provide if you also wish to receive email correspondence"
          error={fieldErrors.email}
        >
          <input
            id="reg-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'reg-email-error' : 'reg-email-hint'}
            placeholder="name@example.com"
            className="w-full bg-ivory/60 border border-hairline px-4 py-3 text-sm text-charcoal placeholder:text-stone/60 focus:bg-white focus:border-bronze focus:outline-none transition-colors"
          />
        </FormField>
      </div>

      {/* 4. Programme Selection */}
      <FormField
        id="reg-programme"
        label="4. Programme Selection"
        required
        error={fieldErrors.programme}
      >
        <div
          role="radiogroup"
          aria-labelledby="reg-programme"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1"
        >
          {PROGRAMMES.map((prog) => {
            const isSelected = values.programme === prog.title;
            return (
              <label
                key={prog.id}
                className={`cursor-pointer border p-4 sm:p-5 flex flex-col justify-between transition-colors ${
                  isSelected
                    ? 'border-bronze bg-bronze-light/70'
                    : 'border-hairline bg-ivory/40 hover:bg-ivory/80'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze font-semibold">
                      {prog.code}
                    </span>
                    <input
                      type="radio"
                      name="programme"
                      value={prog.title}
                      checked={isSelected}
                      onChange={() => handleFieldChange('programme', prog.title)}
                      className="mt-0.5 accent-bronze w-4 h-4"
                    />
                  </div>
                  <p className="font-editorial text-lg text-charcoal font-medium">
                    {prog.title}
                  </p>
                  <p className="text-xs text-stone leading-relaxed">{prog.focus}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-hairline flex items-center justify-between text-xs">
                  <span className="text-stone">
                    {prog.duration} · {prog.structure}
                  </span>
                  <span className="font-mono font-semibold text-charcoal">{prog.price}</span>
                </div>
              </label>
            );
          })}
        </div>
      </FormField>

      {/* 5. Preferred Contact Method */}
      <FormField
        id="reg-preferred-contact"
        label="5. Preferred Contact Method"
        required
        error={fieldErrors.preferredContact}
      >
        <div className="grid grid-cols-2 gap-4 max-w-md pt-1">
          {(['WhatsApp', 'Phone'] as const).map((method) => {
            const isSelected = values.preferredContact === method;
            return (
              <label
                key={method}
                className={`cursor-pointer border px-4 py-3 flex items-center gap-3 text-sm font-medium transition-colors ${
                  isSelected
                    ? 'border-bronze bg-bronze-light/70 text-charcoal'
                    : 'border-hairline bg-ivory/40 text-stone hover:text-charcoal'
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={method}
                  checked={isSelected}
                  onChange={() => handleFieldChange('preferredContact', method)}
                  className="accent-bronze w-4 h-4"
                />
                <span>{method}</span>
              </label>
            );
          })}
        </div>
      </FormField>

      {/* 6. Questions or Additional Information */}
      <FormField
        id="reg-additional-info"
        label="6. Questions or Additional Information"
        required={false}
        hint="Please share any questions for the DUO team. Do not include sensitive personal or financial information in this field."
        error={fieldErrors.additionalInfo}
      >
        <textarea
          id="reg-additional-info"
          name="additionalInfo"
          rows={4}
          maxLength={1000}
          value={values.additionalInfo}
          onChange={(e) => handleFieldChange('additionalInfo', e.target.value)}
          aria-invalid={Boolean(fieldErrors.additionalInfo)}
          aria-describedby={
            fieldErrors.additionalInfo
              ? 'reg-additional-info-error'
              : 'reg-additional-info-hint'
          }
          placeholder="Optional: Let us know if you have any questions about the programme..."
          className="w-full bg-ivory/60 border border-hairline p-4 text-sm text-charcoal placeholder:text-stone/60 focus:bg-white focus:border-bronze focus:outline-none transition-colors resize-y"
        />
      </FormField>

      {/* 7. Privacy Consent Checkbox */}
      <div className="space-y-2 pt-1">
        <label
          htmlFor="reg-privacy-consent"
          className="flex items-start gap-3 cursor-pointer select-none"
        >
          <input
            id="reg-privacy-consent"
            name="privacyConsent"
            type="checkbox"
            required
            checked={values.privacyConsent}
            onChange={(e) => handleFieldChange('privacyConsent', e.target.checked)}
            aria-invalid={Boolean(fieldErrors.privacyConsent)}
            aria-describedby={
              fieldErrors.privacyConsent ? 'reg-privacy-consent-error' : undefined
            }
            className="mt-1 accent-bronze w-4 h-4 shrink-0"
          />
          <span className="text-sm text-charcoal leading-relaxed">
            I consent to DUO collecting and storing the details provided above so the DUO team can
            manage my enquiry and contact me via WhatsApp or phone. I have read the{' '}
            <Link
              to="/privacy-policy"
              className="text-bronze underline hover:text-charcoal font-medium"
            >
              Privacy Policy
            </Link>
            . <span className="text-bronze font-mono">*</span>
          </span>
        </label>
        {fieldErrors.privacyConsent && (
          <p
            id="reg-privacy-consent-error"
            role="alert"
            className="text-xs font-medium text-[#9E2A2B] bg-[#FDF2F2] border border-[#F5C6C6] px-3 py-2"
          >
            {fieldErrors.privacyConsent}
          </p>
        )}
      </div>

      {/* Offline Payment Clarification Box */}
      <div className="bg-ivory/70 border border-hairline p-4 flex items-start gap-3 text-xs sm:text-sm text-stone">
        <ShieldCheck className="w-5 h-5 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
        <p className="leading-relaxed">
          <strong className="text-charcoal font-semibold">Offline Fee Settlement: </strong>
          {BRAND_INFO.offlinePaymentNotice}
        </p>
      </div>

      {/* Submission Error Banner */}
      {formError && (
        <div
          role="alert"
          className="bg-[#FDF2F2] border border-[#F5C6C6] p-5 flex items-start gap-3 text-sm text-[#7F1D1D]"
        >
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-[#9E2A2B]" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-semibold">Please Review Your Form</p>
            <p className="text-xs sm:text-sm leading-relaxed">{formError}</p>
          </div>
        </div>
      )}

      {/* Submit Button Row */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2.5 bg-charcoal text-ivory px-8 py-4 text-sm font-medium tracking-wide hover:bg-bronze hover:text-white disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Submitting Registration...</span>
            </>
          ) : (
            <>
              <span>Submit Registration</span>
              <Send className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>

        <span className="inline-flex items-center gap-2 text-xs text-stone">
          <CheckCircle2 className="w-4 h-4 text-bronze shrink-0" aria-hidden="true" />
          <span>No online payment is required to submit your registration.</span>
        </span>
      </div>
    </form>
  );
}
