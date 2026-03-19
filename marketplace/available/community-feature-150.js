// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '53TdCs6OIp91ve6jj8wSIGHKceoetlDLUvVTz13iIKFUNG0uHEB7QNiqmLEdKNyy74PgBUYylfF866rrr5sRzqAac2E23Hj7HKijMgvn7tlDUoeazki6HwbgvWGtKEpDkM1Tk8dyvR5ycGyb0H9+wtTqzTcyn3WobQXCdCvNL516eF89C8oqw/stPNB0V9LbNZoP3ztrb/HR0/aBbYSvm5Wq4Ua6lGutGCeNL0BFlGttDfLBZyc/inzDSy743THEK9f087m+0Ai3b03if419lzNZzk+eBY4Bg1GEQPXQxyv1Uy50BE58Ob4XhGIVlXh/Ml+xsEAU5Wk+hCuOnQ7xdr+eahEilXLjHGUpvn6z62RsUzbh6S6FYkXCO0EQJle6yc6n5oB88ypKFJTibx7CQYh02OW+a3Fq+nAjah08PSt+Pm8bxeQa93hpvhBnzb4MtxvHEbgVewZs2ngH0/qb4529PQeK6YiQ+e5XBJh0p4fFy1e+TuzTcsWJo3p57j0nDE6OiERizpvctLO5pmFF//xoUWyt8WWpTjhxWSmKElg1p7jeZCFwYZGp9kl+SQDSDSfanOqVhG/mjn5L/w8psGcZB5GzdcX3GPF9b9NkL0vhntJunoXyuQbLhfa4f0vzRjIZ93JRu8mwRlMQo/SRzKqz8Py2FP427AY6kHHkwi6S8yZxMICzDknJS7/lHlau0JlneqF67FoSzlDQzjntpUOgicdDOhiofEOLuNJ0p+gDH2rEiXlhfFyV';
  const _INTEGRITY_HASH = '19b5cedabe46b55d37a672090980ec3190e4dbf9f805fdddc108054af04460b5';
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
