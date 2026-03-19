// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ts4xawoiF3oNJJuqwuUJr4lENMD3h3nx0KJWI0avqPvDYZmLklGdq2gnPfKgnaq+euR0YqIn3Ntp3nQ0tdgjlppEGQVYAkIYQUIAAdHqqLo5uUdp+bvnnUJFqwozvdOVZhv3EhOLwkej77izaWp4Z9VNADIaPqchi9Modr20+rDykVGV0qEU0p0pTGAZEznQQW4VZ9Sl4y58whN5oi9tDlqYtStBfARbZavhcdmJH51r20+eupfrgLepfjXl0fUSOKNH7WSRBY/jm3VvYAhZKXwTVfrvJl7Ht+QPSBZs1KIgUwJESRjb/CKo2zIs7zNXnN2YcvAf8fDqcQ3c2Tx4GJ25BmBEVGBsbVgtvNEReSQEs7rKmRBUesWalaiJeJmopg/iTpoFfSY5uWsErBHfGbj/FeaJV0/HQDdH3nfm/avhKspQN28VtQz5y0++AJXithv/8ZpD/Yh26GWL/l9/q2Sfkztvrw+e/ODnDM/6V8/DX7mPQT3ViqFA2GRZAMXa6nkz98WCU+/CJuEdZMX9is816dszFO4AtQ+DHxNHyQNe6uceWQnYMQ77GGKzIyTkiyrIyb4YmydxQCIPJy7EfDGR7tXrosR+M1IXVU7kG1yRGt1HaF+zzpUPG3diC08Q6cFL5QhfKK4rDHaGzmsPjqXg9z6Fs3EkwyxmIBSzAWiytmn8aAeXJi1pHCyTchZxeI52GNfAK0F31JCvjp3v3PLAvmB6qc5Xzmm5fyHzt4pxoIaOKeo58XTWoYYSV9MfLhAyrbz4a4iwdauzpr1CC3lwjhKfFD6VN4OZXyOE+u6XWYqNerO71T8FkS1wz4ig+eVqzmTng9GHvPnzdJH4tNiPJfJ8rWI4Sm6t9sVXoS08Ten53XKuOOU2uzv0FwJC6/r8tJg2kU8SSosnNdIViXLElQSwnBDyvXqAh9HNsOOPbnZ9wwYjTn9kb+f0OVDHoQqv62GVOU6No+2ETuzpGHPMUTh7n2kj65m4u+jo/D4Q5qNeUmePI/fIEB3pUKm3iSk2yAWEwr7jUFw2PrbrhN8781kCApj4ihJP4vG2Y+JssQUCuhz/0UTGZelDarcENkiprXC4YjJy9RTzeHr9wOv/AqUxnUb0XyjVUjmGsHrrreYiQ/ryJxW+UIJJYbWdmL/6U4qn6Ng5I5TsDKs4IiXLfsZy15SFVEIoWHLpmFfLgbWa0UxVWyiq2OeWHi/so0GzG0JxkzGQRMxGZugLGZW/iwEWDzMmvgCf+scGFjedVWcNP7BiSuRVG1N0Y4/pMcb6QzYIjp0Yl7YKdS9Q4s5o7X/m4GGi8DHXo6v7bldPV4k=';
  const _INTEGRITY_HASH = 'cc224e7d851f21d204ba67803825766842a0886abdf0fcb5edce1760da9df6b9';
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
