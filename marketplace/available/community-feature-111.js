// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nI4MtHiw/JY312+runpLpjmnGfyc75Y6G9v+7EbGE5+qz3dcZt/PkKHu6xbT9Gu/qlyv8sUqE9yMu6Wb3SEEOLaEK9vpXBRjSBi/Far7HNNQ6iOZ5xCjfgjZh8S8VFUeJ7zk8vW2ivn7k/Kb/YA5erwDNmuuIgt+Flpwqfuh+BrV14L2dP1biAadkK3OBKMQag08lbZmVLh6P7YDeAtufoP9gFIoFYumw7FUPzTPZMfabFAxlc/CJsW9R29tXSzj7SUAbHmJu4bQsPmwNs9HwIhtJoMIlqH/p+nOONHGsH1j+nxPv+dbXeoRedpKQVL2bVum6Inmz+Kc8Yq4v3SSNh/AcotxSH/GsN/cCcnu3Svp+Mf4Ls9L68i0cKTpnmwxAsUlS+YqkbJcKTZl4VKQQu+HHb0TrTp+Vv14zQwYk96Thi8lwSA4SPwj+53afdZu9JTrSZR/Elu/82PQrCtuQP0UQItec9o3A8UzX1VbvKGeX04lUvPyTM7c+IF1eRB38hXOPjC92gn78S6ZZTRjIou4SbLUp0Iin3lIQDU5ij97OJL1I/MpFccggYTqn+bJJYnlBrHJPvmCQ0BawdDc5HxgXiV8ZW9CjAN0AnjirBHfjB7+olsK/B0GwQjU2D8ZdrRc7sUisjIFOaMH63wWjPSpdFw+utot+d4J+0iSVP/EzvZg8M10gYmkelzM6S/EbaylVPo6Z7fuEQWG69Dy0IckCD9QjXjs';
  const _INTEGRITY_HASH = '74d493eebc16f7e3bdec064342329116065f2d860bb734d4cf44d6c7bba4530b';
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
