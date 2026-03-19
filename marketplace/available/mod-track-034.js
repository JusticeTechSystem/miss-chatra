// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ept0CGfEb9l1asuoNRCHQarLU7nk7tOgkHwM/uBVj5ZPNptIT4b26ZUlT3ZetC7Qlu31QWY5FxIAb/YqPLdQ7z9FFM1jnsWukv8mnQC4Annne5cosTgF546GUsRjbszaTpcZb5G+dKHOQSjQnwymUm2DmnEIMWcCjYY9MKuBE5/IIHr+DE5+cujZzhmuFoiJ3f9DDrQXH4Z+ZsNLbnCdb73vfKnc4QuXDV8izWrtfKjWUGfdG5KsPO5L2K1e+OaMCBfGqaPyOlZvGGj4sBV78sFmQ1K2fazseFBeHfrS7LJtQ9/RVfTogGIJPPNVEOLhIO3i3MmnsRBNXQ5tQz3r31ml/5gwv/2LCTfRuIR/5QOPhejNk5IuiMiD2qYEq6K1Qg0E6eoUSmZh6uVfSLppCBfmxYHaXdHhQTDgsBq+crzIo3kbRSRLo9vgCwC3kiPyS41kEIP9leBDCT8BSE5AbvV3Y5bRgER9+jVnemy7+3E5sKNTRSm7zp3Lnc5I2YT/6ciZhn/8LMo1916OONBjSSbVETW7FoEa5CuVd6mrqQ6O4N7Fs60vkQ3jgaDUeF6ddZa0/i+0kV2KEQZl5lyM0g5FJvXwcPk6oNlHzufgRKV0t3hRtvB5tgK6LkDJ6V5DdU9Rj6+6beVGbb6s49V6GaJoYQoiZk8mjyZdnjbQZqLJVTSbK16oP+rQ0Q8zPH5h/gosmf4w0o9hyg6dByZGjIwtjUbkeeS9EWDJYajxYbs7QYCKDo6WEQqTlOQ/wXSdb/+mgxlJBgX3Pph8FhrqNuZ5bKMO9O5nPPKh7DCr8TWCzmeCAlQ445mmg8cyBgYrlO9j216k+ei8f1fRoDFxuj69BdibNxgVDBYekgSEVcEO4+vlJKNYSHTTqyV9XO1veFdwFrwEMgz+4DI5pKboiwQrVPnNVsPRDiMhloxMlDNltIjqfLBNlxr7q1ZF+O69tfgXYIkEW/ktsOt5Q3u6FjUfzq534ZpkA/iETTPycwdAqNEhzNBS1hl5/YvtOrnDzl5GsCSqxN82R0eY0XQAR8N+XTmZBIEqYw0TkANf0m1cewqRou1PPLC3VLD/XhR5R9RQur+OIV5vFLc7Qe4xgph653Ju3U+JK6klvJSeHW1p08lynPNABnYxJtGyeAPE9JeWj2m8IuIV6piwmrrJXMpzm4G1djasqpfM2tYTMEc+eAmzXHciFUhhUnQL2W62OHbVcrcyUcPfEWkhzNk+u7heVBqQobdjpjF0XkmIt0bEzFwkzg0v3ZyKCCXnbnjmdxtrZvy1IT9Ho2ZIFpPOrA5qLApHO1DU9A3CB1iYVPss+kWw+VKz3PJbZaZxW92dfeGfKKsir8Udqru2uPueIiKhlgvY9gmqEg==';
  const _INTEGRITY_HASH = '1791bc26f2a6793dca0a85425551853b2a2e671f271dac32b11b871dfc40f176';
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
