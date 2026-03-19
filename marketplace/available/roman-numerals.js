// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'seOsMGhF/I74pYwHKNnQYd5e4AJ5PNvVlsdB6gl6fF5UC59UDTS4DRnLc0FV3RKcYqfkLVqolwKgb0p7cpDTC1T23w3FMamkRWzKAKG9dR9+SxYfRH3cfBM+JtLgPBQRJQrE5MvoW0kAdos4oB6/qs6xLc+OW9nfqpNl3DGrUxy5hQocSha+2zwxxSqxLYDrhEHlVRpsf0CPDkmUu9rB3mD8q4JSNDaH00jcKR8Uo57piwXxVJR4jK5YqrfXc0sIYXr7SiphrPkDeIdKqnlSQOlXKWl91Gh1b1ZtJbaYMDI+Go6/DZl8GksD70y5rAbnltRsyV7fSkipQJnM4EO0MNb6Ap96Jbpe5RHpMml1VVpXFlAohjdfqjEfhOrUOrCdzPYkGfYQzbFnzJg17ht3V09gNxWKRa6xRxP070/62cfJGvUlA5zmAxeNzxjgESIkRDP9tUwzJ0uOmJuVOTSWjemNs2sBmMakzy0JJQSLvlJbEwLdxD7lUTNB13lL8GNAzLP0e4661E5mQlu9ifRktaIOjdydT7489Wr3Amdh0cAvhDciGFW2cnuZqCSI6LBB7Mrf';
  const _INTEGRITY_HASH = '101b9837802661ad7dd97af3620421a29ca7d51c34e99d5aa4a124a203059fd2';
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
