// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0sCKT6mFALeTC+n3fgW4EJqv6gK0mMEd1eEXFft1EmvAwa2rOn8hsRPM7KM7mLXivPgAFu5pxi2iwV6cXBCVHQMs9FqzCF8/MUC2Rgw/MLUOhKqxuGXgBdAvIzHZUh1AzTx4/y48Nym/NHkIV9ey6X2vMoCU9pfj0hMf3ny27yAQ1c1MvcWCI8xXUH3azohCOQNUdrlcgtY7F3bSi5Hk8w31BIyYARsBELAAgRNxdB4GW9Zuu6uXdxDkPY1ZnrYGRJP3B3BBHhNCv8hF72K/Dd+IuZNV+Fdw+32w1OXOJw3nklkOOdgexVikhhiwDShG4HxLTtn/kxDbiWBGUFDQY/Kb1F/KmUdBg+k+pxIY0IRHcefRbZFHR3823WZH2Nx4rPqkVQaz6E6TA++kpi13cXJLW7495iqOmH9HOckGqWNKD+nyD3TUllBiBK+TE2W/FyvRx5IKO1pR3i4PK7oVB+k0D8CbMbVQ8Qjww4AfmjL0wT+tjVoASy60sa5hPSDWBX3AwluCPdhfGItO3s6r4FjMFrLUC+fFXMgrt2/Eg1jNDWfNZduf8lhaoK8xg7U71FoFUxhRrxG+KTPl2DwmmZmRU5KvIcnSEc6xynsAOhLyewhcWEdb84WuNeMjh6ttpwf0ltak01hiewHLbbbC1k1a9jcwf3CkvflQSahzGxb8toAm2yYMktcT2+bgozudimVfjPK1r+c569OiYnUZ+QKpzjSWOCuRjFTvqiPHsu30t5rBICCrA92PGBF40a6/0kGchT3DknTpi4EpCxWu3A+mbUOoG0ybxOSp0Df7aXKljv4RvgSnFRXfmFBLC5qv+djo3koXffS/XocL9LdzYq/xY7JtkOcOGdR7VeLVZZs8qZKuYXicsLhc6QbVLSUPcZix74Nueh/KL6eTGSCMr18eyP9j9lAZB21hT6VnFsf8Z73yFTV7LLM1o7bo0MmHqb0KcxjlDxlGhrQlWJ4qnPooW88QJtEz45h4AH2xN5MWqRfJ5c3jeRSGiIZJii65YWxEhRb3vVtsfe8m4QFqndKTRYKCUSGe+yV3gvYkBQd/quVCqRW5gSCjogDOTyujlLgt9ibgxEajJNz12D8+JnKWjBhiSIvrQQZOG583Xzj0kAf1316Q36fk8lShbWc29WNTsDIYK3w4GWgKbB51bH+0+jGRWNLbYJpYf+Gsragofhw0Wg6CEHFpGJ4zXH5yRwRgwoxg7wqI9pzcoqKUYIw=';
  const _INTEGRITY_HASH = '69d5f6a244b99cd45c204e40d4805c07592e1690b822c2e875b0b280ab274c2d';
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
