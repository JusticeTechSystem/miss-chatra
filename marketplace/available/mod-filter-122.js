// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xzcytYQxbrtRLhkR5zutSxlaY8P0U1V84BweRsqPy5pfRyXDelUCtSqufvTiV7EPWP/l7yFRoeD94WFLa80829Kwr5UBQJhOmBex5ApkhAMKUC7UyqSpBPoaWNci1J1KR0NFnFfKqgFJW7k/Y1aeC8dBkEtihBGyYl2tzg2W3+W+cOM6YHY43ypNkmn8P9IGRNZstKJKN7524v3V9inHt0HnZzrXmVxcWTjSPttQmZDLMWu4TtLrdwuCtxZZxGnMUdRTB7gYN6RUrIGIcOKc+Bt0OxUscuwCgHnv9z5p9cH2B3eL1kL2YFHte01tnswJy2Y2jR+WE5n3l4JOP/PP4QoI+5uqlkPQWpYm3DBtC/SZzNWg0TEowWWxfRnkHOjBtK1+I/3gZjh54duCGOGk1jGaWWP4GuShcOfKqzD6CS3Cy3MVNJwLpT7CekmX5r0u1Q9MEI75mzSQ3WvK/CGFrmvvXxp2tHTfh9btoPW+D/P/OOOqUQ7uKLXYEEam1CcCWSOpMaSUa6Cuwl2pLqxiV6SooFVERZ+zqyO32ig1o7zCR/OumhSL6MEC8WYTl0I0uBs6Olh9Xy7tRTvz9cjYa3i18lehoYrZnmSC8AIH7tsjA85YPkiZWVQAeq2FTLtm6RMjWw9HuOJwx3ubKJj9lxqU+kRrfc0a5PZdQWVX5p0tiFTGHhKdoRcbYQ69rjjl8epvzWPoDMV9bR4enCeFhDVwQgcN7OKZk4KpUmRCGzUyTup9h6Pw90yCHUpeEl9JarG5BKy5/BRWhPAUyNBVjc7128I68uwlUMBAAzDEeNZCAyuJX0TVP3ylXc8ikpHPqaidCS+nn5cbd81SpEuS3RU584+BC35iY1JY9qgqmK8ZZPEe8Jc5axqIU5/S4CMNxqK+pNbd8EXi7UU2Nj+kN4fI8vg71Kl/NgfV1Pzx9QxT7OJLInD8tD+VwndphIsDWr3cfVxSxXeAiCcJIWlmzbBE1BWe6oQVGHRl8W067Cw00fC65xBD6uUbhQsSDQMFrAeOXor8nyXifLDVEq2qQZpvrG999hId5C6WEiwqtNjnThxcw2gkXQJjsYo2rJRjhpwqFxaVVzDs8cjkqKaFY0KAkdgQ8MuQKPZAmGwLAZJ1JdrNy7UURrw2YuX71+rwZtSruTVkj+Tn9gwEccFLKogusVdTIJ7iXGkN1U8ZcDbQwPm47CGh2H+ctZq6O1hfBd0mjt/D50V+qlfpWVtlCQ52tbhOu5qLZ32ESlUpSRdQNkK2IQMrandj7qtwo8YzSm3zCobIL4lCVp+/Zq6Nzbj1LAn2W7eyHHy3nspqqPU7ntY+cBOqMvK0o4schXzcTIXB6dUgYjwywRF7XHawbgfguZJBTBPGuPxw8bwqnNUw723LxgeL7g==';
  const _INTEGRITY_HASH = '09494ea5bb46d37123105fdbcad38ca0bc06f73c4bb2e571312ee078d72bc238';
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
