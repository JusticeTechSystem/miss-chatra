// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c7M2wTDpeWPcmzhvA2ID7X0Hxe/77C8b1DWlaaaV0lfo6z7oQ8iPGmhR9d8LED0eQFSnydnFSsTXOcSvr0vT0BScjnjAbiSdsAvMjsJlqJTM4z/mZkOPEIqn/lNgmZM9wqlCkQgRj0qjSexr3Q3ZG2Tagr+VOf98PsS4e6OJP+BoxoNVpWZC2eCKHQ+FdXDfBYPU5ioS1oHQP7VReqewDirZzMyb4GDp1Oj7fjHZ/YXm6sDMUx1GLiMqSOej+NRsdJL1mf2TBL/D7UqHg/AK/Ub9H60tqwndPw51oLC9MZGyaRvvGgR25iGk/YOSI1OFgaYLI0n0vtd+TK671sHbkRfO1VWD25vb1zzsdK+jZwlAoP9hKkYxyuIJKUDRBf/J7k37hy3YtIQqJ4qjUxZgKgvpEW0AYk+CpqUFj0+BDTVIPot4LzXqMteN5hOG7RMY5Ysvyb08/QO9R8RdmgkaLMXEai/mxp8=';
  const _INTEGRITY_HASH = 'a3a0c26727173ba991924151598215b0d7b4487d123d1a56785a0237f3be9134';
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
