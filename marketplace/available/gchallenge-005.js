// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'p6zQzQTd51GfWN+BNDSlV5sk8WOStLWjXTVXJU5C1Knr00J4QPp8FR8CPUAN+n5oqSat1WHtLkUB9K/MUBDIn7kXvLRVO4MRUZL+SrODpxcBYc3F8pcYxDy1UZ1RT54JlWlw1FXM/S9U/JdnmJ8CUsfjAN+SB5uiMx8C7yRithM+6JGhQQm1qXjvMttvOohuc9xzC/ocjlgNY+v3rQcdfTIOZi8M3Mveh29Dhy+8UsnKHzaQ/thRa4pzWCaZJLTg2Pg7XIuYfKUGPYxwPebo7+qv3MZAT++JhqTIfiNgOJ2cmd5v9bmUuqEc0HZeDVaBZUTrI90dv/xzDyxIbKPhifQDhU+zOh3iCTSQW5QijZJc+GUYdAk8NNvT4mYLoQcNoMhA8+9nPSVRiNAgi6Xz42Y55KD4qecsBCrvVEQDAhyu1lut7i7v0byPyP8oYZK/q/4SsPPSh2+XTZAiJFcLHbosqzsoo6G4svoE7C98Bvvkvwh8D0WaZqsVABl1MHKd+J05xq8zVKrp0t+BLNduPF16K655tT3ZNh0/3rRf+FkciCKUB7n5DKif8YTzPvOuoAo1dYBooOdz8nT7F6xOPMU3+Khsf8r3o+vfk9ch9CBSxRhM7OB2aeYUyQJQwasEwlLv2gLgOm3WGaqRPcU4t0ax5m2yhlXZzPxUf/dxpqRB';
  const _INTEGRITY_HASH = '61473c0c796f32db9df0a57d919b9c9bb20684def6445c163b247e369f65a86a';
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
