// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LdFKPFW9SXwoS0E5+f8vGo1+NGiA+sX43avJrJ7fSVVarmkT+dBfOAA+isIi7nTriUeUhK4buZZrm5hBaSZ2sVT/p31ttF18yuIyqyIaxIu/LLBkjlt/+vs9wuUSvsDLt40Q+JwJlrgKkzNxALCmgkOG4r808F2khKqysShUa3XHNkRIdn+AZ3FEsVRoA3b7q86AkdHE9Et1cCXkNpY0JUZ3h8k8HkzZD+xzo8niFOMAqID2kxD/rz1G6FVKOINE7PIqFhM5ho0pm1RegGllXarxmPXCxFxW1KpyVjCGk2WqnZS+z8btz4cxXodhaW52pADnJh7S8TXfNf5u6NFyUXefFFQvfDasg8/HSDUTwrzsgPy92e0ZV0zk0uxc1YV0MGbiGMp4GwC1xoRE3t1V0wC0tJKiZicGstBGjLpYGubMgtIWd0bk8aK3Y8yJxCyv/xHUmC4Uk0Mp9mbltTm27ySPQl1lfZKmdMd8nt9tWZnnW2wyDFWgHrLSSwZgwyjyiuoZf1H/vvYS4MgNzUm71oXD9SyUiXdkJie4LS+buaozABsZUMnMMELwwVEDidj3+fibRN0vtnpghLjOiEy0AFYt69czWROUbECd1PR2yPOpMU+JfY3tGxX349DeF5SEYJ0+AOzNMqh675xlGY9VziQ6uKtnrERoT1DA8KUDEPWYcreCpHg0e1bGFguHcwOgRUHFz6WZZUcEhQz46Hb3hi2rdV3qZvu2dlsTP+M/8FRwaaYtfqnNl+m0axXev8YtsbCiYVrq2zZIo/FUbp72BcDn3IKRN2sCIeMPEEZHy+Cyvz2gvUAUJprbn/F7F5dWNkjUZ2GPDBL0lTczrTAMXuWoc0o3tmU8NK9aORqn05Qpb3LTrIp9dhNoIDqVsN/JunI2yAf4srh8WXNzim9sKIituk4fHRT2Mgy/ZzAJfFQF2Xk7pYYQt/9X+1WoAg80ljO35jVOW84Yi4jzhWrbYqZ6RMlDyLk3bY9kAfEH4Rfc6paz428KvDb3pHXnCtFSTg==';
  const _INTEGRITY_HASH = '083a1d3cfee977e41db34001280fac9aefe533ec0250bff63e5c594c9e5e2604';
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
