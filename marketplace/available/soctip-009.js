// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+mstyC0VTHmQy78cLQKzYFthxfjBynEtU8CEcCbstrYFd5upSrwkj88EOGEMH/zISab+XqcZjcgaQEAxQfDTG7lpKOVzQNAo+Zl0VT+bBk1SQBOcRgsLRB6j9WpXlPFCfhyjEpnJxGLmczO8AaWfGO6GsUDgzhrtIhCDsz25ldyftbeaGtyNamYq/bgUq1jl5d3ayq6xzt/dYYlqqskX6geZwvnSUlwMASMZ+soS0+nrnAmIij1cb8auftvx33HnW3mFJEzDpskZIvzEJucQmYLHAzlhvvvS3Y1+CuzUTmiLIf30UN72nxbJbKuW0W1dFpJDrijcVE+no7fRnsIXmUVUUaNqTd6tPnViqCo4m8fslukgr/QXfDwwiOfBlLDNuBEHFaj5izAvwJFtbYsQzmfMUwyxjSsnph7SfNhnxf5/9R/yrix/XbFXwrfv4nugGCQxal/dVHKaHrkqJj+VkOsbsn0+0/HgfTKqen+uSCFIfx/qAi7W4FGJ8/DQJVZ2x3gdb4k4SSZzKIoolyFYKDhmXtJW+aAWU5XPbgDl8ux93UXysleZCgSxEGmkkjDLuLeeTGQzTmOlgGaBi+yDfESU0y3tUE0TOo/l5IIGx5ZsJ/PLVZVGrVmlSQxyiv1nesYI6e9+CoXIEnV1FlVRXEz1uHA71W6pgbBdmlvKLjTm1ch7kEvcHjk7gwpAIicDGXIl79gbmUXCcizhgsAdJ8EuADyTiKnE4e8sQOhOZqYgkggsSafqxRsDjYg4Tppm1JyiYPfRi+BajC0iEiHKrxi8hxcKaclKTwwFLuA16k75Fk2V9uxIMhDcQLro14qfm7afWXjMiqFT7hOFL3hL3VXtaDt3DccDWTHHcQvZ6ZuikWmqZs1jRmwCVzp4ivMNNv+4aSDOin3AJWUOqY629PDyyQPvuH4z4e0k44i91JsWzqgluWBwKMf3+GANDaP+L4eB2yPN7wglPpMU3wMzFqjYo+9ebaEqQ2PUVT3dkjB//RKAWO2X60tgSYKd49WOmbaqrJin248NuEKpai0BAXOmL908GikVxiXfecDKdkCxjXQxQ7iveV3+iCKcCI2HSLoRdAsAKrTmYc4=';
  const _INTEGRITY_HASH = 'df97cb544b1a1f13fa751969c36e77692f4ce26898a2fc63826e79a19f3eda59';
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
