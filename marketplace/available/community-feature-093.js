// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6gZyOTN7WXYH3cxAL392ms+dpPVd/xIxmlZePU4j2Nuo4zdGxsi6aIZHo0ape6xdsZSTZ4iiuX46p9hPlABYpJsX14ylgKg/Y5jN6jbn0zsVAMWIhZg4OZnC82XjZaVY+dqYSZR8SxPNpsm5H4M44j0L84sCFeeE84tz98M00D3Bmiaalkg/1bJAYa4cBKQnefgzom5xpXI/QZSzjJ6XjiCJXRbnkjzvBzPIhBujHyHbTBTvKUI0s60uEP2RvMJfvADUYt1mrI86daoSvMNq9EYfMJGe8OP3sunWh/UZQpMmI89wbf7mOQ+Ft24LVtuyl5DwiuI25yj3XtdtndNQroL7CP1YZSG2udQCdrznncHT/FhYmB1jFZ12Rlz3N37/Fb3Nv2P/+OCAZbNmKIlqeds7IAEqKCzov/n6v4/ieZvGjvwemkA2Ku/oWPZeEgnFHuESItQBPIinq+at0gGAiDxEIXBfGKXJQYoWfdff5W9UX5IcILwByihR42EIYdxzMB/MshLtGtEGM7JGNTOD8c+qWGYmkrflTvKZt/9NzHtGtrS7tiZLYbbWuFcJiZU6p9jBOtBXA3hUv/b5u5xgCcEUKn/7O5/bShUvk5PY+780yAnJ02NT/oOtTRXzkKi0r0JY2nij05smvlFyAlrSAfBWavX4/RssF3o280l0uoLyN+KPhZKjnjiRXLWopzYVuFYtZ341j/PhB4wF2olxzXeRscgQ9E2e2A==';
  const _INTEGRITY_HASH = '9752ffb5109570a1c03e478f79a624d55ec9db6f87497147d14cce3aa9cc8ae4';
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
