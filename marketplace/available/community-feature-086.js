// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ei24yAky0b84DlxgF1wg/X+kWo5oFfGp+N2jRVxu6a+vqsy/IL3qMRh7rys6+Jhyr84KVjODkDHdfAt5midVexMHrVCqJYqm90t/3BLqU5ITWvIzZcxMvKNxgcGJaARxXasrvW7eUcfC9lQ6uoRJpubRoBqvoVYEck5iPEfZVr5oZcRp6OkG4Pz5OjKOyh157SjQKzRiJfeG4EP/K8Vby/4A7b6tB1lMJOO1M76CEJGKdOfK7JLzui21AYXuH/QDl1aNvYZ+qrLxcC4imDnLpW/AM8CerTrFl8YMZan6dA/NSTxMJQyn+BE6Y6n1QIJ0D2/4vcAQAHTuRyqATdCxbXo2RPoX9YDI/2Q4vf/4p08qIRNLj2lrx9VtV64Ug9UFqtdlzx6RrPphY0H3k1aiN4TtERSh0TdtFeP0MFdf9j2e5kxfr5074Wk9BQPIG6+8JJyaat7Ooa61Mn4EfWHUtHDCxdvPDKiPTZMt3PpJr+sipwAJIeEXDbpv1Y2Wxp4LA0LMwPY6dN36U/nChSG840QZn7SuNXR/N17kcCJ/D8LVYSVid2swYnCK2MnwxIy/RxT5KZO4HAzECRS5heqOzc1HvDhPtG58YIvngZQ4OFQ71uB+KpD1UCiOEIqprGGBzo2L59N1H3lHJEJ4nL4TmLdBSw/BMGsBAa3B3MU3GoBRwbxy41fXc/jnGBU5PRSzLsWudD3rf8koA8YFHyLzUoMGtYY=';
  const _INTEGRITY_HASH = '445147dfadf503ca5850eba9ab0ac951602900cf3ba992ce0473b125a79f8cb2';
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
