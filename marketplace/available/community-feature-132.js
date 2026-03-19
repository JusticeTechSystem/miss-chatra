// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n308fN4cKbtuHPZAM1UXDXxJYkBJtI25LrR9utQiwq4I9uS4PkZyCbnfP7uCsgbSpIw+1kBFNXiC80O5wTfIgMLyS0yi5jMzNEIJMCvWEYxApHUklVgsWg1u+PhCenB4H2kJU8rJCRbjVwyTqdtO4D2C/rIIzJkzs1Umlihy+LToKBkRNz8w3jAndLxtSTM/Xw8kqH/tqRnmBj4441sRWlQ2VcTbsSHE1e0k6nQEtZdvEudCjtaRc23HkxxMuc7rJP95tZUkAfCHMe+aUFknaH2Ea45NaFTnMwtuuYDj+WU/QiG3nxdM8Ebc4i2Pc38T39y1fXAh1QGxnGWxbqxN7/vhWCcB6VCDBLfB6xLu/8mILGkS+FXF+LmYAFUwMbtFvGfwMUJrSnAgIBSfl5Bl50H6DTFH5VmjA1ZF9sjQ3kXhc8ZViwoAKZhj3rAq6Iuu9t4NcZJ1D5wcRJBsbuvqqFWK1SLpd9EFnCH7Yh1+HofdLCsPk9cTiib6Abdb5NW9+sVvPRYEs26GtDG5+0EHRxquUnC4jWoPiLO6Iown+UjPyFli9bwgjVB+mIjhvqjG3NndHojtjb2Nj3Cm4Lg5tbndqe23B3ljNwIpmtwyfUlNHaSJ6aCtVtBG/zMzauFYIO639ZEWEoonOHrW1dVZFZsf26+D0qbjDGvE5zgKindRRud68LkIhXbz/bSr4RZYq2k9Aq3qGhs3q8xd8kpqfzdh0iICueOUenaxqm8RfDkArZY=';
  const _INTEGRITY_HASH = 'fb2d7843cf974922ae3c5ecc51090f945b8bbebc943cd7a8b84133f9a273df98';
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
