// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'smNnKFH2hdvN7j68SgnykshSstLv4SORxhXlimp/erP5kK1tLiZyc4Z3lfUuLQJ4RfVxmlpCtNg4wB8AY1hOhyTnE/BXTwo4KJ1rloNazbhBCyfWQggqG/8UW/1Ds/0u5nDgQ3ui9XKn18NeJ0RXLqmBxPn/2KJZciH0ziSxZO1V4K4k1vUD0sKAIb+9WaFB0pREeePClmGi8d+WJFrUsnUBDNPVwWVEeK0r2r45dVImNtPPrVbIyaQywrwKE1xYIEcnb24LuHgYb5a3I6e4YJScezI+UR6mGsz34e8MpivOyQIS7ySPTeUVyUBgr7rXgivWFA9Z7XGDkDd25LH1+g/XxMZ8yDiGCuWRjmCroyrPIsk64YjqEdNZHsxPLm2kelZjLXdsX6fwXaHq1zgeMA6jbbX4O3YuqWlk9/fp1n5ABAJLkM/9TN/eWRkxyMHyMNlf1nyPaSwutItQiySA4KSeLopO+TG9qJtV1J3Dj+rIzH7Rz7YFSVjLrU92bEuFbroQhzSRqQ/S9dZKxKbsLCTV/AYsBUgKbbUehcdcB66KC/A9BLkZcf797zz3NgccJ5Q34GXiMvg67EROJSvRJqph9tIB3fEvIpyySALySossC/kpYOCp01ricMhlM8ocQcsIshr3ZYD9MHa285HO0bdQZ2aTaiEpTQiPdgdtoncmJHliy1DHcvF2DbMTqfd6jKFOaKvK4p4cQ6RCJ8gbZezt4UgxAfgQxZZ4RUm500HW39ccC0mHySBOM8T2NV3kztCIcvJ0ssUDVzVC45OrZwe1M/XBcY90Wg8I7TYUzaoV+QePsSXCuY2NOHcMYll73VBiQQDeqEGLzsvOobKrphzw5G5h+930PPJ3fyVJ1ClZ4XTv6fJ85Pg7qe8kl2kwn5W1gziMDIVI9EhOkbcWGuEWno6nimdmI9zW/UgSMdbz0qyfzB+7SVkI6DfQal87xgkJRQYRjjxgdOUlvS+Qn0UYP9+ohFNfNky5pb2DVlJAXUDeExAr52wGyNdRBPO14gSEEy7VIdlocXShC0cfZgyMLqsOGyrRlCUFPthPmMt29nVusqCe/uSFxS/Cn/wv/ambM0Shtrecp+YDIiPg7408VuW6hRk60JcaVp0yadYR5AENKOdcnFKYNw2mZalB7EjmmnJD0bo62lI91X3HY06M+lKvv0Cn4W+yUUbu6Ft8dsN7jg9Ydchmeepr+JFURMAaglXkbki9Z1z0kupTbLvWz35ciNUj/r0T+JeEo1gcLKOVDgUjZ7tor39YjYpm4GNWOnp0I0Y6/duQuswUsQlsST3ETHuWuvXDVC7gO8IQ4/Hllg/QnTADgEDfFICR6SBKufQhhbcbWES3CY/qTq80HIzlUJ+sI27byQHi';
  const _INTEGRITY_HASH = '6ffe5d7d48631a31f822eeaad55b96e9031d1710a32462190fb449f0ed723b43';
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
