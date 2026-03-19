// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LLgHcxUHN6ZPN7q15lLAwqUHArSg5gthz5Ud5gCeQ+5jKnCW8m88cs8TT8SFfje8cvZt7NxPEp8cVPnY3NCKPqBKJX05992w2YF53h2NUQWIDfNVy04FOk7AcRSSDRDSSU/Z9rOVF4YiLm8KxFK3d/8ezvii0ZJ7j12D8se5ewnQ3nmJpsRa3aTMeuzle5ZwvoRZRO822niZ6ukRlibmTgNZrfwUXLaXNOmIwyoc85ur0BczzaRk1lUFbGIEDqZmiLEPu5z+MsPoZFw3+zenhGfvn5ri3grutDNwHi6QC2eXaD/WKZV6+b7vZ9NWTqkectrxCJlEhQe+BIJ/QcUbOpBZ0Srfs+8Gs9Da++eZ0fN581irqMHjtkYgZoEEOOzMGx0xqe0FmWuV6h4PceRkgR1XfO7/Cc/6wRRuMGgSZUNLsLDUxIkqJkTfQjX7zwJYFpKSES5SICGpAXJvyooCIUXjLAuvx7Ii6DMG/04evpydFhEPHPqULbKLpBBKxQ5j0cGCmfhzl5jvlBD2mYkIK8itHoob8Dbl6JROwJujWl+/qY8MBiNAJ5TGCljYrSapb3mjwTy8K7AvSjRlZbEvMgR0FzlrqReywuSWdLq0EvyQ9MXtdG4AUpzg6SYtFOPvFUiDZ4KyS4dyEkB8vNnAniR1xFmQx4WAvg==';
  const _INTEGRITY_HASH = '598990bccc80fbad8053a844398b38a536bc9f1178abcf93b717d8519f533faf';
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
