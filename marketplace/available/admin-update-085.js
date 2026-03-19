// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JCDeD0ycg1IP8SoJLR+ig23EgT/PD6gNUiGsURsaSPncQmMiLOBSUd4ed8pShtK7MzUA9FxGqB7Ip8wp2MXXM+mhb/gcXLKiBO891MX7VFEMxmYryubhe4dXs6HeSd3RJQBBljDm3GS+dD6peE996jaVvlA57DGTfHtCpN0zCsnCX826E5YgnRv+bLovQELG35BAHYEK6U5sNJMg6pv4YA8Sg+9672K0+Jfw3xgcW5xY4Y1jU2Kh8IHNxKjc6FGQ8FESuHH54ChQzW/g+F4Gl1o7qyU8XNDLG1nAaXWYkeNgzZnqyBQXn0waEVIhc539zDCb5CqkDs6EEgnejK9poQPamd3mqDDVwMJSJI6vL5P/vuRuHf+pRSqmg5IxPRByT3UIY/TdTVzgSEoTVU85Jm9jAD6d1ks+pspdn4S8nnYLrACRRM0RqsMA/JqGJHUj/AeOBvtqA3lqH0kCZXtMrABvSvX3BXLEYflQV3c1547fxpihOUk/nqFd35Kux0hkUIDUz1icy7S5Lb9B4oksPfnlJM1SbuxD2woVhogAKv6JbChiAk03KTJMeVrCvwwnMUNCLFzn9bdLyFiTvxR0MHkQhLuCYyVajS5mImJCTFuDln1mwJIIRigBWsK/4Yw/z6zg5qfJ8r4Ahms/PzQDSiuVCCJd3CcUk5IXZV76ot0CQkwF7G7NtILNzMk6aaSoatwHB3/obslKyxGSNmh5yFv8gHIgwkUMkXssyWBtcVmsu4Jw1nHap1fzyf+QabSdfjn9NLcbmlOrkgoj7ek9HW7p7365F2zpLXm2Vu2aoBEQWIdz3eAm9ek+CJXaxETskr1DPOEr/6rEVVVT1o7f5A/gvxvBNXOEYE8f6DZ7W4KtsB7NG56AJc4OZlVZXE4ySk0E902Z+Zrd8iMHWzRsrnIhERMlIs/+eZSo3/lh0exfUMiYlrqC9oHSDdj1E/M8+3p3udsuoy5fZpcfmoxlaOxH8f3MG9FrD7QXoSKsk9LpvtQ+S8nZKtCvfPcu';
  const _INTEGRITY_HASH = '9383ee9774bcf470675566bdbe15de9265854a1f84831d58ba6b2101265bca70';
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
