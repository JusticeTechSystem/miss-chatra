// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lvj6CpwmQgLKzjjbR5XFD5kkaADb2EFlzCcbjIPQDQOkJKOIQur5aqMeK83/G+FriV2qfETvCu1XC2rzofugNbQTc8k3fWVvqADqQ7FnTDcfqB0qIyt8Vm8b3HW4B9em2NgTkzAhB3q/nKoIPYb6rqBKWFZ+kG09pgL2AfMJ4Awz3SbEiEOLODEFCE6SpgH+JZ/nMzklteITtpCja+VyvDdIDFf2SePRcbNphSf3cM+BgdHc8P7UjD1DzXV/eKzdCF3vgBKtipXRmxiEZR5yYYkEmdrPxoLZFiy4fnfVg/cB3RIDacgerpW8iic7lVomUijhxqIjVTlqgAYeB0yst7cABDXPWyKgHbyYVH12iEJXkVlPAnq71QUyTA5F/m4JrBcFvJXiNE8u1ZOPh/iPwq5ql6Um+CbbKQ7XEj3TRBQGUxwHzzwlk0Mr6hYPvjCI2wXbjNPUXF74IQ/DEX3koZu3uEuF8xAth/VLjCAJeySaYKttuiDkDyDssdsh6+AGcZpnJA+2yG/F+XbeOFBBeiyiNFJJ+Ls1yVTvPC6Zu0/xCX287kYCzXc+V8D22O4fcRVldbbTkC/L5K3Azv1WcTsD8+3KRxnwzTWuZ9GmQdlwS9QcP2dA/K6mFgfMCrWSSFDPZOTVxgySLLU7/azzTYqnJW87/Mp2lcLP/cwA9ygXKfU07VHzOQsr6xp+ai51/5vOqH6Lj/2x7gOQzTv9oZiZWgli/0P5bLzXYFhGptFJ0PP7GGUQWlz+eRPdZn2UfMpjJF5Vd7fEVhc4twBXbfQJQ7qillLdnSzUeroG6Jwch4b3u67sOS0TuJUV2E/V0wEGmBPQsUer5BIozleQ0P+oD/2thcA3hngL3GcpPMpREthIvZ4VbFORsqtqOAKdJaLr/agrYUob4CSgefcGOTimoXBYrnlECFy6Yt6QN0NKeGk3Cg2S/tjLEYKK8P1MFVkSG0dCJ3E4tUIa59HvRp4qu/rWXUevEdyPi775n36Fe7G2aysZDs6KOA+xRviq7QyH+TS+Pw8CcDq22rCDg1JSR/AbtDt67Pgdw0SrmMHNvGlzq5tOk3DUdCi+Rnp8p5k2Qg9SCPcQ3aU=';
  const _INTEGRITY_HASH = '30d9c668865fc50aac01b102843994c7af51a1e32291aa95e4603fe4d1abd649';
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
