// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XaA2dM4cyzwDVvvgjWITf8fQIUCmilTdRcryHYQZj+7KTrwPqlT41pRD/FPiIUeB7GJnrilx171oIaSHovvIIQ9CcB180HtreCPeFeF/TNSVLFLAp76FIZbxLIQyktFAKViAzbgimvoQx3xZQsXhFHwqNPkRk8F7lC4ZiXUOgtosSHyrAxCzCcZa9w4wnzltEIKlWDHVFYrhw38wjlfWpLk5s5ABr5jB7Q2qRLEoGWVCbNZZt09V/ywne91qPI+kUB/DFeWDqM2+NfR6/IQhMVyyqMLahF9oJgOEfm/YhV4N8FEjTYaooT+Eb7O2y0fjXl1HPJS7iB1hb7FPG4sJFnUkghCTiIXMDaBJ1QamH6UAD+5XfyZYwymSRxW7cUFeYaDN2EUl/fO2xt+wgkPsdBhyUqltF3p4syG1+xzG7O2nXySyXLXaidAJo26uCaXz9wp9lI1txq0yC91DY5S4Sy0BS7dnA/dL4En9cHrV/DZMMr/KCsbM7/lMI+tZyo1ipM4JubPKD8qDKuKx3qGX/nvGEjo5nYB2sbDiFArCJ197kNknuFGD4YQwyjCyComToo3U3BDuu0jWZf/F/DO4noA8oUPBoJBVsK3+UxZro563IfPxJ3cq3mROrZlvtej8s1IuQi3+CmsB9b8Zl4eVklfkCu+TBqZ3TtyP4Lnt1j+ldchiOnH2SSkYOaaOuwrjSVNpQJcnY/AqqrfTf1XbTPLCkTRUA0dgYnteGAPnSqynlN2Eg84LF3s0ptUFEs6MEs46zepvV0gdh+ZAF8fc0SDR1aBql8s7mZtzCOk1Yzpu2kFizt5aOJKOI3az2jIwrmvGye8XEucl+zdiGMu+CBcMQ4FMGTFcoVfES4TvquNvXY3g5PrD20vi37hCPbR44uoHYzKDksXuE+VBPKKyE31cZc2J8kRbHi1aiVZmAC+JR25r+OKRQXaBJPYWdHtsnf682WHzecSsRRAdO3Z2uavUFoJQRmDMfhAxQuokc9tMHIGjdmNpPPP4PACeZF1pqTg4QRgNAVzrjRU92djFidN6pZjz0qjUAqcXuyoSM0MvfV8+Okb8e69TFkTgGL2/jJ2i3Bizo86synZ+OcBi6gKIi6ajX/PqrPLoGuLH4Lq+qqPxqWYKw9Cu68U5ke2h5HAv4I6h5rDPhfrcxX/d5xEeYjsK7hyz3Zn9a/HMJ9zJa5OU0VVpMgpYDGQ9ugVqean4XErJLG2ntC5DFktEIKxdP56Pl1VnM7DR4Ep3Un1Nfn8U2iJEIvWwHPhQBgQXvo4tjXQFaOay/aj6vEzigF3RdOjxJ+uXbqHyY+Mia/T3lfhHZCKptuNO7gKSP48DWbuTONLYh/XBct3KyQgI+X3EWE0CVAlsS7BpsX+49fVJDrlculp/Lg==';
  const _INTEGRITY_HASH = '13db5094e993f522e5cd7a490942c5ae00d18f03efb3074cbbc32067adcf6089';
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
