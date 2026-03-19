// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'o3p0jCaCPd99l0wWjKhqI8hxFa3EiFQVAGsgrlT+P4Mw98J1Pq7zGL8dgZ3OYTZWeZ6ipjWeQUhqKylU9Zo8YG44G9wX5hfe3tmqJwDKIDqnYYz6686JFbkww7qFKVqJw1AtiyfUooMDjDbhjxEW+Bx77w1Xf+6OEXl2EiHYuMi0+xc89hzocfiB8uefpKYvJ0mBKQchSoYyHDTxYfLNX/etPJakKrJSB2rEqV2pEF4AFvumT5wN0W+H8IWWnD6Mkb1BXmscgksoYKjjx3H+xTMlvtrNzagVd13hdA/WEyWeKWX5/Bwm0GNhBMz0wbCN4W6dpIoSTMEZwWAKn++r4tzSsXn3rqNScNmOiYwMXLJwO5Uh/QtYNBdPkN7YSxyH6+VcIcjIfDnhD+3Du1PyHaEkeyDHbcBguKgZMqZ7WNTrmtAHWEad3MltbcAFFsQh57oy3dyvEsqZTxGL15R4ugDQaCTZXa787ddySfmoszem8cS8xt+REIo53aPpV22crX2GVoLJoyjs0yEbR6FJ+Pvu+hgnVYyR5kW/EwsTqPrT07G5MEYn/Y7u+hAnNpX/piwFnnPaUbWcB0uCf1l7jEU+oBpdwWTQSzYthEEE7XCI325F4ElmuD8UFOOmWSek1sSGiWa4BhCbnVlgXzvDvtkm+/77kmW36w9gHaqyw4grxvJ/Bm+CPPU0B6hYaa0XpSIOHZpjJL3JB9btZlf4H0pQ424Y/hPGyQcZ8/HClf6JUtlCevMR/Wc3Yun2fJKhR/r2bizyna6L5aOZeSP0iHxkyoYSBbAir5FPFPWUg+vT/rULJXWAfF3k2ToC55vJv2OQEAPqLVVn80sOFQduIi42grZItrvFUQGaG0lndYEKFtDuufZIkoj1LPztBysuy185VgaF2xiA32cZ7X39OtM6fAp1VY1p0FrtTYlI5kTBlcaippuHRCGDFR9YLUc9FmbwzmroupYHB7GjajqPHSKv+pEWoZg8Qgp99w10SGMNunWKUTiqtGWBsvzpFKhoxmIQCN8kMu7Q2BadXH5mEiJJy+6/Tg7WnRTPYQ1YLhty68RXRJjDrwxBt0L5UO5lu0qbjPMdFndEBgX3N/b50Ee0OeaZfJdw1Tkxcxjocn6t9OAiZhGO7dBVyyXMXhaA4SwWh4pN9urL16RkPobKyBeX5baWZ/V2ZvM6w/OCDoa7NDkhYxxKAyh9IEUXLIh8oJDayArzVks//+7Om2aP/mldRV227sAn9gT5fkNjFNgYykVTzvVw9wLGpiCGIS8N+hKOrGntmd7pCHN3xxW0aYWuQe4+fZ4MCqyoChf8VKyv0bPdUYLPg4dWzU6M44Z+aR0apVxbFKrxaZ4Uq4yVw/UpEyEMQln9kg==';
  const _INTEGRITY_HASH = 'fba75a2bee6c89baa2733c11dfa49702fc2478c61f176d380578c8ba9a736571';
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
