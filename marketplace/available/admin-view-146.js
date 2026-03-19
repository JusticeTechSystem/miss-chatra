// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'joO+MqYrLi5l4pthlRjJJ+cDgCLLqsdAmKY6vkqM7g/QwYKDnL2YOtfqUSJgvC2+Jg/CKUxPGZwigsP2vXqHaqAro2L9zx2zERrnfSgCld3EwyeFzc4Kv1qosMUCxz2B7xfNPV7xlnK30+/2LLHyPJeUgs24ES9Pgny3zcLcSkLBIn72g1jMCrb6OdioObol++1H2A1f/7GIJYOxNreoOY09YTf7OX9REhK1oTRkJvBhXUc2JrsqqpL388CDN9wuiihmH9q3B139pp/aMA7k8qzRwqZeh1jEEEapnRXL3gfu3x8FVvCRV3M/L/zx8Gs1P/DD/InnCm9HzA1xor4XT5zReuc5uJVLFUoOJlZEGyvs9sFkefTOnUxvOTX2qOda3aykJgydsBbtrN6+WfGQbqgGpHrKfRFq5g0v+lJxFKnfiPe7zZTKG0OyvMB2Uoeo6dIA769nP7yp7l/l4Q0MQeU3aYqX/gb3E+N+dqfG9GBd6WSuhlgoSdofzULqcTMDCKlfLvh02ZN9q4QQivrHKRgjMOW7M6GGnHK6Szv5X2jFm2VUvbuyO5Xjt6jHEWUtcBmdvuR9DoV019xn4+ibySfojp2czl87C0HkzOU7JbEzLrvfEID1FMbUGndOZzet5x/oYdSnW5nnv1IleOwxwG5LpXmby/lb01WS2L0tFOj21nxAML/DXqEQ7RvRdVb6Kp5CQs7etrWUpP65w4D9+jKJ+qgdm5WsRM1MWMnS3dtqPOvMzLyXGMSBMVdxXgXNMRM28JcwdN4KxiJkPdAEltMIQnpc2SQfMxvEBjPCDAn196bo5QSkEnMPkTzaFRDvt5aOgu3OJX7ID2tcViq7ZySB2+QrQij6JVF2YcKCByqLY06VZxHUorNjlRA3WtIXRn/6cV4uAkQc/SQqLWlGcul3qiVrcdnOHV3tnnAUfsdrBnwZlGlYbiXRTv2Ppn9DVHs9BfKw0Lf1HHBrGUySRFLoZTV/AmSVSMsAO+GtLPV7dFU=';
  const _INTEGRITY_HASH = '92fd0e7bf756a2ab035c373ccf5c33a489ad52896fffee531f45c8d0a6bef844';
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
