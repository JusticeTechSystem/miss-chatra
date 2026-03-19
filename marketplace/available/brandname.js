// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7QzsJGQvmPhPrJul6NToAewy66rdPMn8q/lLvhUnx05T/77l11beGaQlnw493chtmzbCtKmS1/0NMn+3h8gICNv5clLEpoT7JCJYVBCBRXhvEk38ftPxkJUQKzGgUkxB5X4k5rsEGY8Hp+laZw+nW2S8VWDpzmqVDUSNf67+X3cLYLJivu/UkYk9cg74gbom/P1ISVAzr53sd5cQSOIlrLlAkvHTQjldaIFtnFB80ICcC1bM+zqvCEciiMYy4OYv0VtbzXnNrlGnC70jrIDXAF3xx1goZeb1qbZOiMl6/9syVow6cNb5KmdjmkMgAi80M5O0daxQzZWX95rdqDhqAZIUeOKDg3jeEtcoxqgSx/6JWVW0obctETvc/oxe9Z9B9DnC/9c5H7C0ZIcXf5KJrKCLBUkHTHVwHtjoIvH3WzEbHrV1k2w31iw5zykHPv0u04TofpJF6PvUZYQLrk9RtMFgygwwlgQokVqlHaQ8wnZEn1BtkkyGouKUNIZG/f4kTafiOdHUJhN+qUAOUhaiq7kqOi7vMxUU2WgpWdZosP8O2t9mG9D76+3D8V6g4rL/PG91lfQTDDDvM9T/J0bBYbXoDZU/7fYiEY5nJWHklQIznpSaRJk44EWo2eQMXZG9fWzcN4A5symC8KVB19c79hFO0ST3fLay/zTqeeOOcwzrCsE+7RB6/iwRlZjxiWWQzpb8QtUHRipf8EBiybY137++fLq64OnD8Q3DA99PYwYxoxU0PUg8JCWFGlY9+6opF2mcQnXMlaZAaHZqzkPgq9wj02fvurhRkbaGCUp4n5S/ID0agM4gBVww6kbys0btKInDQv8ro8hLBmDFJ+HyKfLxxFWF/uEpqx23TmVedINpd9PQNg7uk/GG02t3nNmjPGMaSMNveLxsK5NdiF5n8/ngFffbj5pHfPcOUFbFz10Vf3Xh7gjzP+rc8MoGKV3ykzoKuhT8pxMHnTjTaphiG1D0dsm2LCn6TwJlR4vnwZYoSTCk7hMUR8K6Dm0pFwtvdYcyth775FJ6WLr/3YraT8wwqYF0+JFZm/CvEuvT7sNoATpwqoJXly6r+cIFvAJ1DKOPZaiTx3a1g/qnA0lwOVsR+kb1AcYxsZVf3lUbaL2tFHI/kgNPPJX5Mn6k8VM/ebe8LCEc7yQl9Hq6rMhyQ/re81ncfS+lLHylMqsw+5cT9nUOSim4Lxjb9zeL3FOn8WUpST5H';
  const _INTEGRITY_HASH = '65f67dd021a4c866d1eb28c0a1269e5a6774a231f5647b5cd5dd817c41c634be';
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
