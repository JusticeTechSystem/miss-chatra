// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FhukW5YG1bB4EH7ganUn2Us083lT4bD7ngNA3R4SoVXJ/0AM9/o5FP/BF2Xy5J6YbUqN/3BLA6gHfOZZ6kLc1CY2qVf+Ko0bffGcHo22jCZvlRdaIjF0FWSdpaTdAoNfidxvM0HlKUEekEPIV8O1WWC1QRQObJXlfd1ILv1prR0Atwf/S22mAo5onBjoxo3wlwxGRq0RIiIubXmn72YniUXdFYzs/fco5y53nbOm5WJNxS5M+MFeWj/o0CuRPMCTVaOdYxU2zKXvySc+62Lt6Hmx3yHYCJBujIXmZRq9kLfKs+AuqyqQljF8xb1ESTDL5WYoBNFduIwsTtPQWlfpWB97gj3/V1GC01U+FOdMVZMPMAI20vyUnbrE6hF2hklSGxkqXtgL3jy8Xnb7rhe5C8W8c+foFqSc9k38lCb1RSw+2Qlc4bIxkyo1WiVGWTnkTtIzk3O1d2OYrNdL7UBQ2BKJOszwJhJ0Jc8y4jxQ8+QI6iwx+pgmkRThkFt6SvOy2n6MlbyWl3ZAJjKKWTyyJ3gorhuoGLA3IkAHyehNHqUhFviy2tZDEYzpl5Iwev5DmQfkhEa9Bxor1TlKwcRynU+rmk1YmI8LvwXdjCVyrBm1vu0Bi8d9QP9mNNLi5Kfn+VwSlTXgCyQIaub9tI8u1OOjGdJjSR27j+vhOsdshNQulwl9GXk5yTQxAJimeLrB0vUTyRqMK2lCPUiKDUPckGHzCdryF49LVWXxjnH34iYAyYvY5Ao=';
  const _INTEGRITY_HASH = 'eb1805a265a16dab6f6697d01587e1fa18a7e71af0774ae64bcd966cd98d39e4';
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
