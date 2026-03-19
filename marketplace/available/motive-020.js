// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c03Qmc3ctBr/5TB1nQxNueSUnl49hZKpiimj6x9/hDTxCIps+8jCbVB/xspyeessyuHopDgGXyS8uRv3kugF1WG0vTtb4q1FdqeSxtk1i3nJtuqxENqHONy6XsIJY1o7mTdQroEiNWYJl9xBGqvuCcIh/E7s49oCtPXsriqHqD90qLJNsyRhOR72tEs0CvUHdYVcySz19v5B5UMl4YiOzpl1APyrGan9/gjo4o5hDDNLCY/Ex5LZ0IX3AkERs870A1+UVpO2xX8aQv9RWgEkXkfaczkcqNIe7lHXyCJp//mUht8agKA68tstHAXiFJdIRzSW3i8KHOYa0UkS9sXlyrsS/S08hrSLV0roeKhmDvaSyQ5wOQuEwJsFjHkRRQA7rDUNITfC+tCh0nCyvCyGViKHbMdkMGKy69CMILxR48BUSJ6mZe0NsJGXYYZaFNeDfxVPoe1TmyeURUrT67QeCeAi4zzVhm1a6pWkldDzoDa0G8PscBQaT93Z1mI/OTQ/gKIgdk7BE9yGPYNRTQLGQ0WfGdbbODEum38qhMf0ehfSQPpmX16kzqb+eur3E/JNKbuMlQjJpOBdrYRHby3M+5X7oF2pT308idKimhfPlmOMSYj8h3KGfVYSnMxHqxMjdn2xMT0foNJEVDwC8jXekdGFaS8umcSQ1mDvLdsdnhKcIx5YRe2+BdX7uQIll+86AS7vxVfwxaEWU/lTs+HwmowNqzVVDvx3zgWYLxrEGUgO+pY7GtW6x52J0oBgFIiIg0o2QiXYNAe/9tGDS7mDV8vM3pUwZ/fVJRmKtgDHPwYIDjcrsy0uCDGOJqqa5wI/Nq0MlStHuWlmq5fv6yJYejWN60eLDnQ3ttZKxDVR+NXd7NoAY7LmHk4xJOipJJqlj3IsIsduDZODEZYFh8qG9CCbxjCOf6V+DwYM50Mu2vmVd+OzP7htJFUkhaI77RkSD0sA/JN6XrWizFAYZr55kird/mXTK514CpGFae8YjkSJ79PLsZpDQuWpxuKwddkkHM5ZHYF1RwWYSpldS2khi+H/';
  const _INTEGRITY_HASH = '5e29723547355a4413ddd317111fe9c5bf07a87c5121ba03b254061c77e6ff53';
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
