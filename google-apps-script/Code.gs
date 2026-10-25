/**
 * DUO — Official Website Registration Handler (Google Apps Script)
 *
 * Works whether opened via "Extensions -> Apps Script" inside your Google Sheet
 * OR as a standalone project (if standalone, paste your Sheet ID in SPREADSHEET_ID below).
 */

const SPREADSHEET_ID = ''; // Optional: Only needed if you created a standalone Apps Script outside the Sheet
const SHEET_NAME = 'Registrations'; // Falls back to the first tab (Sheet1) automatically if not found

const ALLOWED_PROGRAMMES = [
  '3-Day Motivational Crash Course',
  '3-Month Personality Development Course'
];

const ALLOWED_CONTACT_METHODS = ['WhatsApp', 'Phone'];

function getTargetSheet() {
  const ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!ss) {
    throw new Error(
      'Spreadsheet not found. Open Apps Script from inside your Google Sheet (Extensions -> Apps Script) or set SPREADSHEET_ID.'
    );
  }

  return ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
}

function doGet() {
  return createJsonResponse({
    ok: true,
    service: 'DUO Registration Endpoint',
    message: 'Webhook is active and ready to receive POST registrations.'
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch (lockErr) {
    return createJsonResponse({
      ok: false,
      code: 'SERVER_BUSY',
      error: 'The registration service is momentarily busy. Please try again.'
    });
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({
        ok: false,
        code: 'EMPTY_PAYLOAD',
        error: 'No registration data received.'
      });
    }

    const payload = JSON.parse(e.postData.contents);

    // Honeypot anti-bot check
    if (payload.websiteUrl && String(payload.websiteUrl).trim() !== '') {
      return createJsonResponse({
        ok: false,
        code: 'SPAM_REJECTED',
        error: 'Submission rejected.'
      });
    }

    const fullName = String(payload.fullName || '').trim();
    const mobileNumber = String(payload.mobileNumber || '').trim();
    const email = String(payload.email || '').trim();
    const programme = String(payload.programme || '').trim();
    const preferredContact = String(payload.preferredContact || '').trim();
    const additionalInfo = String(payload.additionalInfo || '').trim();
    const privacyConsent = Boolean(payload.privacyConsent);

    if (!fullName || fullName.length < 2) {
      return createJsonResponse({ ok: false, error: 'Full name is required.' });
    }
    if (!mobileNumber) {
      return createJsonResponse({ ok: false, error: 'Mobile number is required.' });
    }
    if (ALLOWED_PROGRAMMES.indexOf(programme) === -1) {
      return createJsonResponse({ ok: false, error: 'Invalid programme selected.' });
    }
    if (ALLOWED_CONTACT_METHODS.indexOf(preferredContact) === -1) {
      return createJsonResponse({ ok: false, error: 'Invalid preferred contact method.' });
    }
    if (!privacyConsent) {
      return createJsonResponse({ ok: false, error: 'Privacy consent is required.' });
    }

    const sheet = getTargetSheet();
    const now = new Date();
    const timeZone = 'Asia/Kolkata';
    const submittedAt = Utilities.formatDate(now, timeZone, 'yyyy-MM-dd HH:mm:ss');
    const datePart = Utilities.formatDate(now, timeZone, 'yyyyMMdd');
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    const registrationId = 'DUO-' + datePart + '-' + randomPart;

    const row = [
      registrationId,
      submittedAt,
      sanitizeCell(fullName),
      sanitizeCell(mobileNumber),
      sanitizeCell(email || '—'),
      sanitizeCell(programme),
      sanitizeCell(preferredContact),
      sanitizeCell(additionalInfo || '—'),
      privacyConsent ? 'Yes' : 'No',
      'New'
    ];

    sheet.appendRow(row);

    return createJsonResponse({
      ok: true,
      registrationId: registrationId,
      submittedAt: submittedAt,
      status: 'New'
    });
  } catch (err) {
    return createJsonResponse({
      ok: false,
      code: 'INTERNAL_ERROR',
      error: 'Could not save registration to Google Sheet. Please check script permissions.'
    });
  } finally {
    lock.releaseLock();
  }
}

function sanitizeCell(value) {
  const str = String(value || '');
  if (/^[=+\-@]/.test(str)) {
    return "'" + str;
  }
  return str;
}

function createJsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
