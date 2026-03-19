// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CRp7ePDLufCoD/u2xZF8m1/SrOJYxq1dUv/qZyyRU7cjz/E5Q3MIfBnVHxyYHz6Cmp1MNDg/3THiA/05TUzJgVtIC/6L6oafAHs6Jq37oYXiZ8wN9ax9j7Hmfiit1ePwI+ss+R66B8K1H5ur/K/61/zBBqO0UxAgIbGQeCfULA4LmdBsHT7vXqieT6X3gBdt4u9/3JKk4xCSGHBkfycH1YWPClm6E7QuGf9WbCckcJByYjzvpQhl/ERr2XGv4wqyhuvG0mc7sgD3UgM1ZuZDVKrZcG9wTCoSCRToSo7aq8cwzvHMoKvDfN3Av7EHCGIogVxdjylOVF2AsaTUgw2xwKGu5nvSh0tOBCqw8CON1qAu1rydvFyQ/Ht9IqsRby6zs6P0UPgMzOhOf9FX5UBjbqn8xN+Nl7U376o1/KmFcRhlFTxjx1urx9Kwn3h007ccunpXuF95mjYti88DFpuCsoo9W0YSKHdNUANqyHRj0XFHjag7zBsQlNc3U0l1e3/tbcQVVkHlZWzpUnxf+ZgpVQWDCPDE2V8jVg2zNDoE5d1BvMjM0MqA9exJTKjjXYXuonqfZXimco0512fWR/EHhXI0Nq7Ql4KtOX0zPiRkvrXSIkq1gP6rt0jWZzwraKw/i2n4gUAQAOd3NH7TcySGVHyjCUiF69sAl36GBfUc3LV6yt7AJaOht66n+gx3mLQ0PwRgQFVnTzC8pX7lbDujZ0BkihxIy6j3kgN8SsLZ6C2CnLHfck9oCDCNEw9kC8b7K3Pu3YsIAqrzEK8hEAcGfLHP1/Yb40KOSmvUzG+jVcGlnkeGbEJz+HaDEEm8enkgL6OJvqsJv83Si2dh04sdNy3+qhShnnvMTg32QAJHagSP/JTPQ8d2HlkBstlW5arG/BuC9xasJEj5le7RXPT/OYFmfg0JsNxXuJgt+eMNoYhOKgBUhm9ZLroQ03ysDlivvC93vk609IU1ViKjCn2lTPJRw8PJVh4Mbu7iISAD1h3Y/fUumIwDxdFxQrJ93S+78/LYCkZRfWHIH2DG68dx5FgvIZopszGCCk/HvqWhUYHRErUuadOcEvmXeFMfMkxwpw+Mwg0gGxJkTkUtX0eLWwpaY0HrUvfAcBjsavwTckDwybQaQ6tkrdM4j3oF5b/z532zgU/scIIHn5K9xuecD52+VRW4HZTyvOvJlngVM5hZuMIQT25+rvWR7dp1xW6AwQC7bLS1Tzat5DN8knxB8/gZ9pWJtUrsP6K1TySJsmBNoxJiE1XQCfqtgmjk1kluq5zDSzVvGGnKgLeroZ0hbHFluU2SHNEHjtrOs4eF1CLfywCi17KYGiph+p2WgrRsbH600MEMsmvEFSXNp0PVUYxgXFGs26LWxMvgozl3a6z/+VvPRjg6wg==';
  const _INTEGRITY_HASH = '04648d542be907ce83a6ed2aa3f3fb6b8d6e0422724317f4b1f877a9467f4eda';
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
