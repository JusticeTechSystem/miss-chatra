// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xE1iRlzumMJcivoDWyX8iMRQJlHzD/dgEwiKJU/sWI/6KvrGkMQK4nEoKgAmxaU4MpIFyI+jfXbLQGBZK8RdnxSWFCRFyzhZZ57uTJo/ZxxY+3Xz9BVuSyHGapY4Me9RKO66KR0MaBJKLJ+L+/aVEB2UIrBSxjyvIVlKcqoyusk6Bm0wAl6o+j0SaBlS7dtwii35pRxH6Q11HUe9+SBgFw4N12NB5puirdRJhSsvH3nwFmpMnArLoPWlMxYTewUnn+Cp1/SZj9P+VUD0BPX+b7kgIBioqgla9TpcQiMl0u5wbvXvihJg/P9OFxQtE1FNJFpq/o2wlcIrvSuMds3OGJjJ5+yb/+cYzTpqk35wdXn0uTEVJDEL8FwyEpsD40Nz+ltASzVQ0RLtjfbC4mFcnKmS1oiNOYD415QBmHvGlJeTNcdICPzEBW8Tzn9mT/8Pm/U0PzPF7BiBNlXGxOdP8PI3T8Q+wu/D9D6PVKsgFDeDFGyhC62miOqxmgNN9R5/49gq90aHm/HWpro5+aBURuja8hyopb9XVcks08XX2LoYIY4SQ1iaTCMrPuPQOpY6Clcr2wOR/8+GVfBVys4iGTQla7zwP3QBQ3Zpti9/7OollSgFTbS3VF5VMifNgqM95w3LcBWvbFbDGZz7nigDf0wU7ILFvIw2KBV/U8E5ZXp3SlnzBk0HVzTPMfYjscl0VN82hCtVXYO9ubZlVx5JMC67wP1z2h+WFvqhFhb5PI3pbOI+UFw01c9rg3TuB9OKUpF32dlAkuyzJFHJhcx0JnIsByUbUaGuLhcIp5c+ElsMc5zmK8++fpbvZt3tpT2MHFHzGtoK3Qu0S7cP52LVxMXCjdivaY0shFxyfRd7/RXYdEg1w3Q+K4Rb1/DtrAHgQkOLJpoiSqv7r8wmrReXTNolYY1Fe8O7o3aEWM9t5YLgnWayr1pHNTJRdYAlFg/59/CgEmr9vEc5nN7iiYOsY9d9Jv2gq+UN633LFwncOxTPuKWzNKmMXwzuhiwKuG3H9JftvjkuCk7XU2CT4E0sPe/PgGWnNcHmPs3gFJomp7yDOyB8AW881UOFjk4bQifbYlY0fmIh1z465msFbWD/5MFmuULnUBkkrD7SrHTYZuR0Pxat4cBzvWfHvcyEdLSs/CsLkipX5js2d+uWlk3yMuihjVNujVOkIQv4P/H6LodcqoHqusxIEuQe1pynFBq0MLtzfrs6MhV5Hik4V9En+4qm7rrs0aV1t0WKtQVVwMx0btD5JIj1X6Nho1Femrb/b4OpQ3Wv0UVpTYojiE3vv92eNJm5dOQ4R8IM52+dt+l5oNMc/r9//p4ZqWxIN17KJHtQWRCZu8VeoCF+eCAJAXfQClSdBMMgvuKXquz9UuS/HB7R2aUVqH+k+r1q0SRZIY3SJUMvUGbIoda/FeiAJ8YlEo+JY4+zZ7j2Lp51nmNEXbEh/idR1HfD5c1lagyCP3W+hn9pzhCrn4ZAwmnWYOac0EVQFJzSpMIE2qEU/h4M/vXOsgpjP05KpklMXDVrS0XXd3xAO2Sc57wSDQTV6LmsAisd3j+uZxZYjVV9IIJg4djPVgQw9sd6rOTLMyJaUYDtiilbXWokQkOuO0+CtpTlvWU/76o0TAj56KTqcLG0+MmvmFcSfn2NO1uuUm2C9T82NRoT6iLklOEC5vs7qKUrzK4hJIVQTCZGFSIIhJS4e4Yt7FwfH8gJDzcUv9z/N2z7ww==';
  const _INTEGRITY_HASH = '00e23802c3516c839c4fcd7d57ad36b3bac01f7c0a3a054a1c88a400b010e72c';
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
