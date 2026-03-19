// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HYIoiX4vQ7AWgjHgIxD/djAV+Yk/40oyv1S24Pm/FwgWJYVC0ZTmYsl+oSVJFxok886Q6tuEGH2U0ZuV9XQoMIWyB0Evm3IvhTIn5+rbpZ71Y5T55NWesTEOKZA/LF+pMk0W8qyLts+9Ej61s1C3+NyCFBW3Xn+Q9FTvpMt3wWI2onxCpTTcb0MyDFCkw7jjXTP+wt2CPj2uSwaDsiHUtEHly4lT8Yyk5qgQWksPnBLuZYnt8OtUFF+4sM5iacGyotb8s1lBlzUJWPVBzfeUH8RQ9t0jm1ijb5aaQSRipajSrbqAFok9VydllmQsSslsis8KwrBXfUA0z0z9OVn0xBGwCYZ4aDjXT/KEujlK4VLqhHMNe4BcsM9rb7recU2XOV2f+TZIU83h9ZSQqckaTqJLvJeq3oj1A7VRC6u2bDGbyOMi/Ci2hB4zMUcG5OWE+EmIy8TZ6tf/teA0JEn6+ox6WjI0TspBtivlZQ3JoeWa6Av4MRKIP8k//S8Psq4lq6UeZ+NOxLYn92Xx0Ymr+Iic6nKEmrbcoHH26fKPNIpkAcIpLVXa8acswM8Xf/FOTyVmV1ORbBpzeQGo404XBu0V8xw82BmQ4H1PnimGLYDbl5YGx29dnApyfRt+4jIdaVHqGSOdbt1DXBQS4r+4V7k3d5PqGZmN29E8eJEcLQa6/GqYUXQYoOIL5EuUd1gehq26O8VKkiJYg+o4R4hL8CwE0LkcEXDpmJnjxROdLg==';
  const _INTEGRITY_HASH = 'adbc6dea43b82562a1e965cfb92f21c94dee53cfb2b1fe9f3a226b2a4d2d7622';
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
