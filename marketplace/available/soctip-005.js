// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JPzyrlPICnnvHn33kXzCevVdduWO4DNDn17V0vxFoOoc37ZV6bMizGjnwOKZZTONm7abAtggoXu6EHZ36dH1yt+X5CDutI3NDuE43UBJ6JTzZpxAk8xEptYrx7QIVRz6Sw9zC+aYYQOrEeTwh1zTieBPBpjjt9vh440OItC8tk939pn41I9uQffXuMCohEI0+O/lqV8o8zr84c52CLbPiKdVcBDJNHwaRhYzOXAuiijiIqTScRQWyw9+qiDUhZa5nYBOqc+eej82V5njxXkbfGVj2O+uVZaAy1LVTEA7n7Qh4fW3gpdMLTqOCt+yRs0YxZHMgUvS8xsDLj8liMlU90Fmx+uLwAOpVHEz88Fa/NS35umMyBaWokL01oYEcLRbXwnkd8e9qoJmV1CpvXODmNCgGdGEY6yhf0uuOGEZ4QbqsA+NQVZ4buNkzyXh77mwrqy6S16b09bgPgBGczZdEmfbbOUhm1zSe85jYN6Wc+p+uhMijTUvuVY1RMX04owNMMTDSZC963JW3qLQZ87x9YgB4d83o1lsqBi6PuTX4ex+or1ovUnGufC1JUF5ahyTM2G6dN9KN5hSMBspU4/Nt+SjYjIBReR9PyzkJPXXIQxZDtVCssfsZGRhwEUqK6oH7J4jBggVy+cVqODdHshaVO68qP6JsTSuTzaT9Zi3boC7CLMRVW/y/0Du28BNBKF6P4IpOY3f8JLLcRPW7YM2ScEf04fEKmH2zOjyMtHCTbjHvsT0SmzQSx+DycioXtVvWAJYrErNMEQQzw3+1sz7YQlZtnf40vnzJPbIUaT6sjpNcnTYmqS4ZS90ma6P1pKDU+DYkq7TRfAPK93sSup8CjyQ9oANvtJ/MpDvvTJ/xSHlWgfjTnL0ulRfvn3uU5lr59OJXjePb7ThMb/Lz5ETTTG2CJDLR4IH+A3G8yr0lXxooy1f/hAwHBdOYi3NKQ99AzEMQusKDnSl5Huojuf2rgPbkDaed6pUz4vhnUwxgh5QPCvznhix8YvTFxdV894yYTtOVZsUCwQ5yEMCh/PnEqwac23Zj3ZmpEkNnmUrfdATp+hbYu17AvhlsaEu+KjRfuGMCBaLD1PhgA8=';
  const _INTEGRITY_HASH = '9e5249a1ea089ecf2cc35afe053b53862bdf22e732ca2fe8471c037263a99173';
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
