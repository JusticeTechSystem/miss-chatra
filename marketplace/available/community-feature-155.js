// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Vl3c+yHjwyMoRbu2hc06SVT6hWB5gSgyDu6ljNOdx3ChCe06myXtWiIbTy9NCceNDPtW4F6FJXsdvCOCYo+e1hw43nL/N7eOkP/n2qM77Fk9ddEJg3BSWyQCHH1in8wfrxL7cM+hhzwzbKhHyB/DNw5e9BjtdjuhUHYg6O7glfO3rpCcZ+lc6M3DKRp8axGSKjclgYGiZQ9SyfXB0KEixCPcYYvTxbRIYLpBY7e5HwNEWAWxOVtpHlDjYK28KONslT42KDiJxJvaPsAwBOJwIYV+2XiGhSq6lp2nH9HFod0mHaULRopzdiuBwDZ/FZnaC0CkFfcnkbuaj0nd72SBFMTooQDmHUhItzgeT9uppwa4Cia5lVhs9ISrN7vGfIqcBzniW9qbWtAqzRSA/gPTkUmkk6oV+Kmi2ini8jxFq4qCdHhGrlieBGCPaJc2yvxN3gJ6zzuojGyt+1yTfb2s3nJkEFRvKvKpq0mgGfDYijUn9SlDjulLgssFXzWR81yFnMuSleH/34WZhIZElOpKIy9fv6lqSqJrN90gKsjNIpsW+EudGnHQCN4TehXLSdERPuxlKU7OTtwpoopBWTOW71XQDxH76EiGIPi4pFKo6WNsFLExZ8FTYJeN4gMgTN2a1TBdG0BtFpGvIdMyNcVTmXbtwwPxqcsKtJN3FYVmyXZgqE8+IKD29WCG9PJsxEZUHW3QgBmWPStGAu3kkJIh9gJvvDFh/ozEcI6oEjkrRjtRkwg/+Zk/OA+z';
  const _INTEGRITY_HASH = '3e53638c0cadbaeb333336cd66bf6a4020d7bca492d1e5d041f752cbdba3019f';
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
