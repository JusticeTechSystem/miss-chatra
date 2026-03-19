// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oLEkfmopEm1nHf2m4j+aetHMtMTvAWB7KjiGBC/2MZfjsktlqNgdHI8QRsFCsPRxOnPw878vrTp4KmtQTGCPug06X5RVXzf111vpZQNmV5yjKlAHd1gjdb5S1Cda0wdD2toyT+ud8yBhqRxOvKq3PSJOmu4g6S9OpXez5xa6AZWjxlK7oun160AgD3pl/splJX94eLekM53n/sV/rAnY166spSxaPDbnUm5v1mk3a8koxXsZEEv2KSLHg3ex2iX8v+DaqVSenm6BL0DuiI9wOPQ+l7hGHm2jeX3JmWSGEznWgNnOfTpGTMrermOChlrLUcAoCPmRv7OlfQ6WNmgOalvRQrhxifScKi0hf2mkdnMsKHuvI8fqAN2nTaLeVQtNBOije2OjzU0lmRJAZLb/5c+woVTDD4b7gJ4W/doGjzU/OW7Zje+JbywpCFEnPQX6Xaq14AIKB0Mh1LLCt++y7qAlILOwGUL6g8S3SiR9b/B3LjIHPkPRJEECBKonJrrT5DG4wym80re5Za1apmGMQEFbjhBJKiqnzzFooWX2TJND9F6GUJMbsFwmrcIzDbWa63lTM5irt98pjabbHRk=';
  const _INTEGRITY_HASH = '8ad68c3bcdff8656e333ac42adf83950b2d8e6c9359d53424b169d5943136d3b';
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
