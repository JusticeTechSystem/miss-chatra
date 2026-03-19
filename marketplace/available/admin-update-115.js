// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3k/G8YTPb4ZipQMGNnpXMX9fDVl1nuHg3xzPBYb1i8jFegrZXSaGSTxYc/t1o0zDzkwoiUfU0vglub3onAOuKm845rFgo3lcpXtlxtrPV8F0AzIqJKknIhTFmQSBjhTlvc0BVlWlm+LPvkf+ezYLGnEO1WyZ5fEQ6m9hW6GhzYP0C8mBUg0YiauN7RlWS23cRAk/AI/38mfm+lCM11Pb7WSWaV+frDcoa9AK7GBH0QbZSsHPRWqUF/t+bi6B1gLUBzibX5yfvpfvEUvcfuUmC0wTsz0tmzI4hGBepjJnSpt4dotDIELkyPpLYt50yB+e1Cr+eNglILnu5cuTA4UvrbojyHrMFRFyFtiwuiSQ8nMwPFRpSK9r8SOouGcLqOQirqFwCVH7zgG8nj1cT+FSC+MwI3y40gHSg7Yu5Jwq8wddkuWWM58yr0WUNwWh2ZNIhglguoggV4LgItTc9VRmCnOW99EzZ1eEY9o4Cw+3BIClN3MKk+HRz4trLVtFWQ6zRjLqBKevk6e5XEEOx8REaPY+F3IjfHUcI088JnbgESBayxBbENzaMhDCza08pcySS20dO1F20kfF8mOEKvJExNF8CeO4SUor/OKEpyzCNjXmuVc5fSnbvBVVGOA7TF+PZplDklBSQFU5c1UkQ/bS8KZgmqcddlhrzhvSzghADy8xrUa8UVd/ZcRf3dWP7UL024f/J0Azm7ZLC4A4k21yXmFC0oXpOzikO/gzUp49AHji7wBwpwkgsFJrxs8X1vfBSnhYqphzOJFSEn1THbOw6uQgkMyuQ1SV14+zCw9bNFZsBz2muYcMNwMz1fEy0Wv5OC+9k02pTOZWoate+XJclc6daS9GdBZ7x/lmlLqjwzAYC/aQOXFpoQ7PELKDA9fpFyffh7UhM9Hs3wLdadkjMyDmEGkStQdTY/zYU+fjlBXOM6fRZvwQYwOvC4urreCJQjoHgO9pMyYKeYrCgMV4G5HDzTkv8alORwI+4dHRwCqzgvR8z+ySzY/eA4tUQZy6jw==';
  const _INTEGRITY_HASH = '8f769dd02cca6b5755453eeb69d5b4f8d9ad2215067b4add14fb38b1ba1119cb';
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
