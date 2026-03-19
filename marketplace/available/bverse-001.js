// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pF82mnIfEzj88V25YBOHrp92FjQH6HPcc7xHk2EIwjrBK3Lxv0zXw2J0fGStSJ1IhOle6r0UQHjzxImdcZCi3gq2fKc9GDqsXzoSKDr+vJyDn/2M3N4+pJzlmsqDLhYUZTANyydiQHGcAcNSxKukbvcG4JP4MLRhjT7Rkm9ncdSIvIoOBoiKUZfqZh4tYnko56lJ9jIBNH6PStDxIedPjX7Jc3O3lspQYiX/r+s/j2MGb3tS/DZiQ/hftVP8RP3uHyTJHJa0aAcWQlvZNXtjR5L1dF2BOYsOiPqbgpuTn41OuiU4ZEhcn39phkUC70y0/5ck2LITInBoYQrseWCqP49dFh+l9c3h+/dmlPaOvYEa0ciIq6f0FLa/2c/3YviRLF421pSVTAKF2dtt54B5mcq2kWE320SFytLpHL262PqbxDDHxWRShP8TpTr4L8TlaJi+pzCkyyqovHaOMKrCIuHHVvHg+nAkudf2f2QzpsFlFqD+uKKs9tNoaghvAhvbYKtP1+Q9zECyj7zYd0PiiCxl9RhA+Ne3SybZTf0Rybg68pRQGTGxjvITVZfEHNfDQCFSDOSpkRGGH1oaAQLrLodWEJyOeM1FsyZXGLxKt3/tdpcpHL8XXfOQRdBfBDGxdqdh7VrBSZ3en47WYQWVFxKhRogk8tZdtpK84fKrtcxkMyC9c5z0Cs1sbZwzpLPQlayF8gj5hPpA6uI=';
  const _INTEGRITY_HASH = '6863eb9e3aa9f01950f018dbd63f7b1199cb5383068cf043cf161249c29ac57e';
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
