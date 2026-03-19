// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iYN5JhMh09Dq01sVfEo5NsAUCm6mTzsxUb+jQq4tHHQP0fiuGCAkLG0ym3J+Gxx2X/J8cLwrjvf4YW+uS2vSMtbjXvoeFpLqm5nTXt/NfMy9/JtHR1ddTd0+OzHxblR3iP3SvuI+qpOoRFjF4w5KU0k8C9WTWGqi4wAOvLQs8pnfF3bmL5WDW9QwE+jiRr7C0N3GQ8xjq+GQOaANFPpSbqCts3ukIKtGdblVTLUntEAbzkq0g+fKWPz8HbzFEIOVP/qHjpxuo5/kDDxtsUB2lcx2DLdF7xR2T3W/qRmWrKO8+5fYDRUlYmPVKCNkBRtlHaHk4ix59Xi1BxCvAwjfcOijpM8s9aKuq2kCve8XpENbMoACFSxu1B7Hz6HMP6Og3o9m7vaPmgVcJ5VbvDCP5NGL0pz6CRZLIP1ymecjMF1JnbgJOkJD7+kKJGqARdOpYcAI/Bxgbi7cYOewvchbEiUZAjzRljVEpbBfQn3oPN9O+5d5alr8Rtk53DpI70oqeXZIM1rF3/ticxJtpk2tVhPS6jDNyt3boLK3y/l/oKmWXP3Y4IhFVNPFtEPr3+RcnA1ytzVglihUuLAnbdjabKbL0XNughvoehA/nic4/WajDKrymNJJBplWwlB3R/adqRMosDKelePufa3oKWm74YzOKcEV97ff3iPkRZAL/3j1rU4PzJWFoN2ZTdF6O/sSC99nsjp638O/nnutJxnHcdAa+pd+4i592uIy66A0Rg==';
  const _INTEGRITY_HASH = '88fdb1f28a5f9fdfad4aa6da2f54a428b55238c1a73fec294563c3b167baeabb';
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
