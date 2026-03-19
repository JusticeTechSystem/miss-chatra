// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bLMu7x5eJCSOMOs0KDc43xw9USFmUpBqWvjv9BhQrn2K8Hz71z9ZrTGRFXlztukqy3NZTYkMlxkPam8lX7kqr2pXvRxAZkGur0KWCrYhyPaqnagswDShZoHifMUtk7NsoA4BcmVka6kMtZ/1HE+TokzpoGA9akyI2p28iHrDcXh2sQdn+zVDhRqediB05nowXZXdc7zGrn3l8NDvPuF7S34JiijNPauo6Xb2yYs6pYzBxSIAn3dAaDILZ1G2wHbTd/7Bc8izViIWR4rSJZYKMSVLFlENnLzOB2SaGEs3Aynp1/wOlYHedBpDXnw+pvztxlJuF7R5VPWfQYZA/I33noSqNhdbUrLk32iUtVqsl3bi/eSrADzO/d04OXEPLpLSAvje+OwtEfPWnoeV0HtcI6JwSeKoQ5QqmCexTItMuhoW5Q+OHaa7VANF6pj0zkMFF2Gz7k6MqG4mla9YVMAYN0W1EMQyfPLoswYAiArt31xak765woW46sbOVPxPMb/sGmdDjRnReXZc5UhB0jVgTE2LPJX2gkZNiHNHwtD28U+Pfq+SsadtBN/45A1MTqc9oQUJpk7nSTeM2Clz0zLws+sk2Ht28by2IFLNsZWUhj+ZjJp2NPwDe+lWhUDpp/m1o3feGLl8OgWdXtHWcfFMqkNeMRCKLHi0PwcRxO5t/Gi+Lev9QGmaT1aw4IHQBwUJ97jfSA57q7V2h9Re7X940hthx4wYgf/g4SfVrFL8i6NvGe+95abbGep4Kr5+I8mYpF+NA0DhIa+nof5P8mXrrEttV/x4zce/rf7AKHRz1uLh1/ICiS1wVRohtZI4Z4lhjHRpjU86TeM4WBAksCsUrxQyF4hxkOtME30kFjLFq6n7z6fdPuJ/rXtH9M22bBaKhBZtIsj50glS9coUTJYtC4VWU+AwmnDKYT/B5wcyAwD3XPJ68MKlYaGtQYiQSzT5D/MZ6AAPG6U2+IxRJUItHBkitPofQxeeix3VBGxfTkvPcfILdi/Ys1In7pLaEVqS9S0bWvzQw25FWELJ9WU9aMkO4YMLNM/skSdd7Q4o7+ugWiNLLFGIsAKftqOGQEoPkkYnTZdgoLT8cFW3U2dEFHXyNVxcJuAkNkQ8KqXimMCKpFFFmSPOBQ029QQ/hPTPUOjnxR0uHOIIfY2pQw3uXyFV2pM/7Cwm2VQzAzRP03dut2elpGT1J9zRxxv06NA7OgBQ98Ojw2cf2Nfh9HHbQoryXfCz7ivNbm10p9XErQIyKJc2FwRGzXR/D6zEqiO5H02bbWkxqyj0qz/mX1WPYhb/wpqAeb6TpvapnXJna4gBwMnrnrOUHSlmoxze/hODNd0Yu+l41di3O8MOrwD95askNUtDon04CzIKs5F7';
  const _INTEGRITY_HASH = 'd51ff836e761f3b374aaf70ccc05661544c8c3364d9b6146fa021f7ab079ae33';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
