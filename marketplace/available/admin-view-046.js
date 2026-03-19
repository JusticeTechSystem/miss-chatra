// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lxoT5wbmj1abIQCTBBU+h0FqvG1RyaNWuANHjOgAOF/a2auXySxXvT/ZHMSzKvTzBwToRgauGICC/TDaIJodSCcShQVa5b3Wvl0lWnK+N1oif79IJ8CnjXHJYod+5nHVrl9oOTWsjeBWo7pVBpV2mNDkF+/JKMGO97AOCSpVvPnB2yijdMj+f1Ge9arCY0m5TC6NLVTtLDZ+sbJtzQwBvkGKYxRCjOV6ewslfdwFQfSPlBmlrCd9SWqj5nrROoY9BO7BMvqqA8ayyKqDMTkPc9XgBFwJx2VR7AQ+mMAOX58m1BiJ6WSCMvpbSKFHYoi3Tgi1QU33zM0qODI2jjAHixjx52o2Wv9KqzmC1QAc2ZjjnEfJut8OP8BLgNc/XUNPlSZYcOBBYeYUxdeFTZ8Xwnr5Ax5YLUx00emdzA7a0Rv4AFnGjrQiPtv8Pg86WygfnLjan1PU3ohY2ArVeg35drE43mQuGwGVc5M1KU0g3MbVWFw0rqROfdumZgvJ3sWo2RE11D9A5h/hgNwAABpIUDTj8eVmsdqJ6cfDSiQTJ5Lf7rP/dWtBDDuHtniurKD8M4PrTvhwR70YL/yC5jXSOdlGtEsdQyYOXOIh54rWr+EAhK+DXaUC4fJVh8KFTA5Jw2slwedenpG4+eLVweYJlxOzdXTIA/cWdSpQo/Yt23PTVEngNwTOOexWDtWFRxEVXuITfVvKsDhZtDoNkU9qMbVtDl1vxHMKr4Jnw/PyC6wFVlL2Q+UL1uRNB+8g+ahF3hlMhkvQE7lEw7w5JCreeQ6Aq7Oju2YW4k5etGIhQ6vU59l8gIF1rXKw7Y1cNgFJsWae6+/C02v/cdKdUSWFmx5887xgd71yu8qzkdwGBTp6jhFKeSp0fNdBcYeAI5nH88Afi3u/vTL4cznWEwavAz+X8uD122IF4zpRZdyUNnl7vGDQIGJM0SH9pAvXl6L6xLAnM8GIizr4WXs8emATFRqcS62+BuNfCnHx0EcPzg==';
  const _INTEGRITY_HASH = '25a52b595c6f693a1957da24541502086f9d862fb2d9b9bd0a712ec15f2e62dc';
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
