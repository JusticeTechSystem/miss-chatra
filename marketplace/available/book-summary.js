// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uUO6Z/ejE93CC3vMOPQglF0kdM/He/njEZV5YPW8DscoqI93gAPietnaeiYsRYdyHVw36IbvhHbwB9CHeUcWcO2HGBNKYfYINdKZrkrzeUTKOBKlf/Hp07et5oWME2FllYO2WoNWPK/D/dz84AgdjfvuiMtXeHlMwcbHPKh9xWSSP72lBsEz4aeS9ve1lholMOTFu/oOswU4C25ZRnFB4uLXDaXuJRWmD+J9CUkKCQUYIhu9obZAVsn5MfQ9ncfiT1y66Aovl2R+7rI3atwr3zIR0dv5Z4Y3piQ3PRdaopdYFtfU8D+ZhQAi49FcNu1Ng1lxjFJL0mw/JlJB3Xk+IVNRwYEQCcfams0cwaYlxuLKciJotjU80HjY2iyxCnxKPiPJVrWq48wLYj+gug4mGnnoIEOkuSadyTlj9f6BuVsYb07IZGLJLOegElsnS0yyjplEqNSEnP4/f25WT4xkfQoZHrPTFaA=';
  const _INTEGRITY_HASH = '3a819271baa2cd2755383db1a3475e7b2bcccb319e5ac9c24c269a096eeda3fb';
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
