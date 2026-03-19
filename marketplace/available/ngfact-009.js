// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mSMMge1YdCB1pLSgg7E8WF1OLxHs7qMW+xFGEkbPe7poMk76q5q699cZ/kaBWYTzY2bHg+tfvwstQO8dAhZnc2BeZg5gPLVW7EoVB9DjJO7oBb0hkAP9dbC5ONuVe3E7FqMlXlRBkmOcTi12/RXjIIAoEu+yXiN0KhSq+SpHtXhLRuKipmXnECW79mPie+kcvKhM8xyZ6h/YqAbowcTPOvbp8Lmtzb5e2rC+AlvTM7k38rc/cKWiERehr7/DuhFQ33F8LzpW/b2B05Pt6+DA62zogj8LuJh3HBZhJZPsTiYyiBOiXJbUT9ovpV+f4cM+HRGk9wmKjZ7btb3O2rhDQiXSSidxTCVjwUwuQqDhCiIS52J/GUpLICE5HzjqJBRViZPoXYXmcw97Pf8Lp8NF82W6kmqxrYGmknjpNysIeCpKNEdDxN47+L9Uv0vcV5F2ep5IRtMn8H1geYY/h3r5KI3+Elv78inA+DxqUIPFV2UX6IBZzUKH+SbW2eyqEPjPHI+D5l1R2OfoAsrpwbGTcr/K4aqP/3YgdLjO6xGEyUaxn6fw5H/E90JQ22TkVOGI4/u7t6AUBOmdb1/lDYPMfJNs3SbotbeVU287daMChRGPjzeso6S7BmPcTD9i04eBFeuww7IdgptaHklSXKGcRWM2SZ6tHXOhwsSVv7arYBGzN+uT4Bcn8r5eQ1JEfaxFcG5QnkwXZnxB1Wo=';
  const _INTEGRITY_HASH = 'acf60d54a3a1cb422dd78d85f64ae7ef960a4184f8120181cbfe2337c03a11a0';
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
