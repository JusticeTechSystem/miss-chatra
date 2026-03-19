// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'doCKuVpqK6kYecXQ7KrW8li1Sv4Zih0B9mVt+mWp03QNLNRapZxB+eh7pUWZt0vgepL3B3XModwMo9g9cc6eo8mSV7+A3e9PKJ+NQfsSY/TUQHafQ+NybG15XPx2B6HZHZz2rS+fbdfGdx/Je33ul46RiaiWRzwmvgbVSFcERvAK8MTAojAfoXcRfvuEzoW7dSYW6j587KfgJdmlqdKrJoUil7HtTK+R8sPuabYULHavNpzGkpx0X0lJ5y8crNgShi1+Fauf+uC6/teqxF/iEhdzu+KQT8tJfYQnMHRgcSwLmo4u435kVIAeD30OG96LLMzImyUXONpb7lTXGxEbAS5OqQLrYr7Fr+xMdev7lApYHVTioNVGhNlvrJARjzcqLIWekBC4ceuPghz6tSKMOmad+C+4MsehzxZNGojUgc1l6pYPKZjcbpi686eCFYLVc5cdg79rID5Q8ypSr0bWhsBwyz//zgK68NsUkM8PNeDSn48FZuj03N9FemXZcg0UPkIwJeSEaZlHfPG3NZoE+3zlI4l1fhRjAlCKMalaybsfUi1zIF7EtOA5yuN05cwezKa7evQR6GO574/bhc/TEmEEn+DgFTBOcfi22y4ZYRfqgUejM6KS6XxZjuPhoS4YszjSDK7h+KYtiLDi+tY+ENPJe2+FNKXkhXij2qXQNDpTSvell7HyXoh0BbuHG4PgC9guw0hkhXGrYNNE+mV4BBCkZt2bRLIIYt1lkDG9fdqNXnmDHKY2SsM/zkcBNrNIzSBaUQjMeRxXl3vkt932so/4LSFT0h/SrHDo67WS5KoPaGbUgJcqHPY8hPFyQP/8tCT314dn9TnHSPF5qdYbOy4jA6X1dXeRi1m3Z6jg1hanx9hbRmFRRMOzJbb1DaQVAc+4IsTXOZ2e8ThYrcYH1h8j3daOsemUgHK1rtO0WTasSfi35Pw5a9Pj9R8UN53LnYMbq176dVw8m3IMfXINhW5iYzE0CmjGxVB412yaiEO7DCNhnjq9S7wtog54qnnrbWaYHl9XM9vlPoqbOJT6ngwHGbFbC0/N4Dv98Qu7vELXpUsVQLVlFmThdyxd1BnOPWEr8520pr6LVHzQKjKhmoPu0sx2BCCbFunuR7AsOp8nekRT5CT/cO2b2v27QG+/7WJyv/5N4mfWiHicwJlr6k+VrQ+HcvHq7GZWkCvfpjdmFaT8QbxFmqVSui4HnPs0c9HcP5mNmmWhX065pHj8Lmgs0YGEWh3j+ChXjM/+p2m58CPWwKo7j1j6EO6zoTR0fZhucXeTtWCDAXuHr0s1bSO5wUm4li5E2kKhDYrPClE5fe86Xi1qb1UMQ7JmHg7RV1zBiUKgdXFgq2FeZaYxqkCjEJTA5lvMCNyxKrm46uVI20s162QeNPvEndFQ0wR6xT4=';
  const _INTEGRITY_HASH = 'c7ccc241ce816f71d35e02a4398c95f69778828df479ff419d6099a5ee24ce60';
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
