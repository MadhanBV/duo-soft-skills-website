import { ProgrammeOptionName } from '../data/duoData';

export type ContactMethodOption = 'WhatsApp' | 'Phone';

export interface RegistrationFormValues {
  fullName: string;
  mobileNumber: string;
  email: string;
  programme: ProgrammeOptionName | '';
  preferredContact: ContactMethodOption;
  additionalInfo: string;
  privacyConsent: boolean;
  /** Honeypot field — must remain empty for genuine human visitors */
  websiteUrl?: string;
}

export type RegistrationFieldErrors = Partial<Record<keyof RegistrationFormValues, string>>;

export interface RegistrationSuccessResponse {
  ok: true;
  registrationId: string;
  submittedAt: string;
  status: string;
  submittedData: {
    fullName: string;
    mobileNumber: string;
    email: string;
    programme: ProgrammeOptionName;
    preferredContact: ContactMethodOption;
    additionalInfo: string;
  };
}

export interface RegistrationFailureResponse {
  ok: false;
  code:
    | 'VALIDATION_ERROR'
    | 'RATE_LIMITED'
    | 'DUPLICATE_SUBMISSION'
    | 'NETWORK_ERROR'
    | 'SERVER_ERROR';
  error: string;
  fieldErrors?: RegistrationFieldErrors;
}

export type RegistrationResult = RegistrationSuccessResponse | RegistrationFailureResponse;

const DEFAULT_GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxEQo90bqzlkRm8i7zHutfEVBdTvC6mFL0CJMmfs0PbcMidVNbkF52x-u-XFlf2XxQC/exec';

const CLIENT_RATE_LIMIT_MS = 10000;
let lastSubmissionTimestamp = 0;

/**
 * Returns the configured Google Apps Script Web App endpoint.
 * Prioritizes `VITE_GOOGLE_SCRIPT_URL` from Vercel / .env, falling back to the deployed DUO Web App URL.
 */
export function getConfiguredEndpoint(): string {
  const envUrl = String(import.meta.env.VITE_GOOGLE_SCRIPT_URL || '').trim();
  if (envUrl && !envUrl.includes('YOUR_DEPLOYMENT_ID') && !envUrl.includes('YOUR_GOOGLE')) {
    return envUrl;
  }
  return DEFAULT_GOOGLE_SCRIPT_URL;
}

/**
 * Client-side field validation matching the Google Apps Script validation rules.
 */
export function validateRegistrationForm(values: RegistrationFormValues): {
  isValid: boolean;
  errors: RegistrationFieldErrors;
} {
  const errors: RegistrationFieldErrors = {};

  const fullName = values.fullName.trim();
  if (!fullName) {
    errors.fullName = 'Please enter your full name.';
  } else if (fullName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  } else if (fullName.length > 120) {
    errors.fullName = 'Full name must be 120 characters or fewer.';
  }

  const mobile = values.mobileNumber.trim();
  const compactMobile = mobile.replace(/[\s-]/g, '');
  if (!mobile) {
    errors.mobileNumber = 'Please enter your mobile number with country code (e.g. +91 98765 43210).';
  } else if (!mobile.startsWith('+')) {
    errors.mobileNumber = 'Please include your country code starting with + (for example, +91 for India).';
  } else if (!/^\+[1-9]\d{7,14}$/.test(compactMobile)) {
    errors.mobileNumber = 'Please enter a valid mobile number with country code (8 to 15 digits total).';
  }

  const email = values.email.trim();
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email) || email.length > 160) {
      errors.email = 'Please enter a valid email address or leave this optional field empty.';
    }
  }

  if (
    values.programme !== '3-Day Motivational Crash Course' &&
    values.programme !== '3-Month Personality Development Course'
  ) {
    errors.programme = 'Please select a programme to register for.';
  }

  if (values.preferredContact !== 'WhatsApp' && values.preferredContact !== 'Phone') {
    errors.preferredContact = 'Please select your preferred contact method.';
  }

  if (values.additionalInfo.trim().length > 1000) {
    errors.additionalInfo = 'Additional information must be 1,000 characters or fewer.';
  }

  if (!values.privacyConsent) {
    errors.privacyConsent = 'Please confirm that you have read and agree to the DUO Privacy Policy.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Submits the validated registration form to the deployed Google Apps Script Web App.
 */
export async function submitRegistration(
  values: RegistrationFormValues
): Promise<RegistrationResult> {
  // Honeypot anti-bot check
  if (values.websiteUrl && values.websiteUrl.trim() !== '') {
    return {
      ok: false,
      code: 'VALIDATION_ERROR',
      error: 'Unable to process submission.',
    };
  }

  const validation = validateRegistrationForm(values);
  if (!validation.isValid) {
    return {
      ok: false,
      code: 'VALIDATION_ERROR',
      error: 'Please review the highlighted fields and try again.',
      fieldErrors: validation.errors,
    };
  }

  const nowMs = Date.now();
  if (nowMs - lastSubmissionTimestamp < CLIENT_RATE_LIMIT_MS) {
    return {
      ok: false,
      code: 'RATE_LIMITED',
      error: 'Please wait a few seconds before submitting another registration.',
    };
  }
  lastSubmissionTimestamp = nowMs;

  const now = new Date();
  const datePart = now.toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const clientFallbackId = `DUO-${datePart}-${randomSuffix}`;
  const clientTimestamp = now.toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const cleanPayload = {
    fullName: values.fullName.trim(),
    mobileNumber: values.mobileNumber.trim(),
    email: values.email.trim(),
    programme: values.programme as ProgrammeOptionName,
    preferredContact: values.preferredContact,
    additionalInfo: values.additionalInfo.trim(),
    privacyConsent: values.privacyConsent,
    websiteUrl: values.websiteUrl || '',
  };

  const endpoint = getConfiguredEndpoint();

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(cleanPayload),
      redirect: 'follow',
    });

    if (!response.ok) {
      return {
        ok: false,
        code: 'SERVER_ERROR',
        error:
          'The registration service returned an unexpected status. Your entered details have been preserved — please try again.',
      };
    }

    const result = await response.json();

    if (
      result &&
      (result.ok === true || result.result === 'success' || result.status === 'success')
    ) {
      return {
        ok: true,
        registrationId: String(result.registrationId || clientFallbackId),
        submittedAt: String(result.submittedAt || clientTimestamp),
        status: String(result.status || 'New'),
        submittedData: {
          fullName: cleanPayload.fullName,
          mobileNumber: cleanPayload.mobileNumber,
          email: cleanPayload.email,
          programme: cleanPayload.programme,
          preferredContact: cleanPayload.preferredContact,
          additionalInfo: cleanPayload.additionalInfo,
        },
      };
    }

    return {
      ok: false,
      code: result?.code || 'SERVER_ERROR',
      error:
        result?.error ||
        'Could not confirm that your registration was saved to the sheet. Please review and try again.',
      fieldErrors: result?.fieldErrors,
    };
  } catch {
    return {
      ok: false,
      code: 'NETWORK_ERROR',
      error:
        'Could not reach the registration service. Please check your internet connection or verify that the Google Apps Script Web App access is set to "Anyone", then try again.',
    };
  }
}
