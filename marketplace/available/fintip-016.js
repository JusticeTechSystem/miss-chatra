// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '92Ll1JbzuKQYLQOQnY/yt/XIzIm1uiTnZR1iNXfsD5/5UT+QpWiFWQf+X8tLQuiCBWwFq9DMplx7sBYtG7puy+JBInEWgenBevANH2S8+C/XsOkh+GKf7uvnK0rgmOoWQLf2rT3dxCxxUJzEivlKAMuu+rT1yKPPYee+3jh54stkUnieJLquBG624bYM5J5juqlnuVAXOKXMAgqjvl9Z8J5g2/XnJYID12aiTygxNie2yssUTWnTDtBE6CftmfYjjUI8DGV9JrOF88Kkz4P+UIhHDEuUqq2sulbvrtPJEnhQ0PEqUeeomcGzO4ZFqd+vhND8OdQG/PUWi3y9wz0cDbdiJIGorX9l0aJjhgRPfa4OX1Kfvd5VFBIfSmBvE7ZLv4+kXt4C30F+KxjWBFTFcki65VWYEHp3oHZD2zVCkTE8fvow56FOqEwcbf51sORilWj12qa9nuFIqKQsFvk4IxOm1QkQMPcY5kZAsDuQUQuQYm2N0UXTYw4cPvbvmyYKcwgRoqifzLqhor8wIxeJXw9aJ+Scnojqo58hYJ5jCQ94ME7YUJBu9iCgXxfA69mmHqpVCbP5gAYeKqkjJwqKu561EMqu9zFvo6FSNLegWLaN1JzStfZmRmFQTXItWgvrC6t10k4TT8gQSQcvXzG7sYeCYnOHJTZ9Ujafm7rL0KqacOdD37qsUQNZYrBKvZFZ0tzDIZJcs46IkxfS1RS+N8Z9H/mhRISYCXrWmcDhpbFpu1ZFN/+AfLGrE2pg0vOEzpePaJ+IMMf5B4T75bFIfXw8L3KZR8582tf7guca3WvpSflP2uJuGelUghOsZrYdJ+A/abNBNQmVd8+JcUmULuXWQtuP6Sxd84BayBH0s2YJEEBhL9C5ZE5KJCge/HlFQaQBeHLvRqwiU+sNpdUoa3DqcEoXaR+5YQuuwl66f1CoMW4SXv56Rf9+e3S9Er8pjt6acrBhNyBOs29GM6sbqd2AXGlPPwirdoRd+0ieGEpe0I68GalL4fiwSERjfRHSxGMqOYlFln/ovdkH0OH6Guoas1r1fm9cD0SWhsBYG5jQWA==';
  const _INTEGRITY_HASH = '4019ac4d6c7f49a31bbb0898d2fb703c5ff865bb1fe34699eb48f8609f3f1173';
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
