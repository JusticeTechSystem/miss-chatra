// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xBMYgQyfx1NLHnhHpQpCv4vyuEJWjhQqLrfOZaflTzTavRwV7yHw5fyuLS5Gha7kWi2Ip3/HgJL9ShJbl22eVvgGbmZfSeKTLWDve2NLZttXnYFchElH4tEg7kaHlo/ub5b7p6xXyYixoTrD30NFBDhLAV3y4iH/obdTHREY+X6W/ig5vAa49mDChnOr6fQ9+7j2ynHbJHRkXJUfSV1ZVf/Cp9SADfcHQ/0FO3GrIdA7xFAI7++efkGGz9A2xhilWIsEattkByf1bAM84JueGZDLJyuASi8bjRKEW60ocMqTgBb7rtYXeoLYyM89gpF22o9WQdKMeOwplIvJ62CfSLASwfC7LP5Tg5mx9g8w3v2aam2cyd2Sxf1IvxxL05Kw720zqyJe+T2h6HNl9JspLAtmAF3Lcc6CFvujhPTk70yBFcUa3kTdHcfk2D5LMb6/H3twFM7KPedCzUcOEXH9PRS1DI3R1iDewi+Ow1M0iHyswoPxwmv/wQBKzwb05ua3E/kH9eRzHoflZoVbtKW13ihx4J/ANfAtLBfFpW9OVnf0EDLMb48Twy6lFmYZgB/jSWApXZKTgNp6zF/I2IQXOF4qUM9FehFPTfhLFrCN6amt9Dw0+h5mT53UAaSRmTeNcfUULbaMrKrF+V/NOVpRcI3de6tXX4EXvPMsrzcjnhlw0cUv7HtDq4KTmHJCj1rwcjFU4jO61sl6du2iDsEhmLm7C5n1xSLt9dTjPLBH35hkLFOfARn56en2qPW8OI9WuGf85g5ewkwisbmnwLp5W3bUf29aYc2wFggE9Zt1kVKOfYozzEqQ/bugn8x+zqmQ3xCfCwo1nwtyrj614hLtdwzIm6bN+9mRptNKUaK2JFccIs64CzZAiuPJagevBhliXuWhijt0kZ0lCH2U/+VGkPRIB6DcBKCUzjB2UF5OmCo3yTBpbrqM5Arwo6ZuJfP/BbzrZBUbYoozOmhEriHcnFvzGxPzLlKZtT6orIphGYcyaRQztZ3qcbcCxCz4ty2zx182Dil92PelGgfZ7dirKBSGKMB86m+VqLq1qeEqlN1ZpD/yEVFJl02Vs4nf+uYVVD7VDDSB2GTp1YfWF9i8kFy3c3jflpzhG8VeRjOOafr+rqASHiAnmdy3Iu8K2GDscIdJLLBZJyvFq+kpIpbdAbbQGxNQbw19cjMdaor4O4yGZUS2yW8C+XfaHyW1LfqXHkRcyn8=';
  const _INTEGRITY_HASH = 'f42abe0b677f9a363f62c205dc91e51c523380d049b29e9e0f8ac46df9a923ca';
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
