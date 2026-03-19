// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i6l4BG/MmhY7Lxips/qSEkcQwqIUUKNeUrmHKktiMcaBSl+uW1XFykCQxMfIfn0DwCDs6oenn/Wd3BUq4iMzApv3wMG5H6ujyxYVI6700EXqxagn3/fK3SAzkjffxKSrfqalyPx+dRnRpfOA4xnAP59nG4A+12LwPep2UzcfMPWzNiW4y3hbB+8gpR63+wMnYtX8nv/rwSSds758Wh7AUeAFVYOrMRvYrLMHP8qsK2uUN3XEYhuDQNnNouQRwr+by9RHjh38bgOPgqnEIDLkYPTlj3xUa9NLcP9voJg/Q4KbOsYYpxKiF6pQvzmCXBLDe2ruQhw5UfkVTM0kawsRU0RC5yLEaLM+kNH8W8kR13Ymotp4s0ID8jod7B1d30jbPhEc6c1WowNex562jCmHuADaN/6nU3uIWbpdf7CLOvUKS0QLnJrxC1LUn1wPcx0xcO5u21QFZyUFYHRVcHcwOCPirWRG2D0NeQpgD/1392MN/LpoGgTYUOQfSQSrWT6TnLKMioUc0eHmgtNN7k3FzQV5QB8zTMppf9MNZxto+JT1FZBK9KU3Vq0qezoHkgbqmThvq3D0odR/Kr6/ZMZi3fvsPQAWgbAVVVpIJz734LamLpub7p3hNGLYjkYWs3e3QfDN+QDzG8FC6YAlVJbiT7PKoYCECJU1iUK9d92IO33m8mimBAknxLqzcRO+7SHKbjGzSITeSkXQ35sHUHuH672pY0CqZ646';
  const _INTEGRITY_HASH = 'bdf0dc703b756459286e5eb0e68b3d0c015471903a699548c044a5ea0516d8ff';
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
