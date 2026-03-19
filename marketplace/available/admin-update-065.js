// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hMfGVBlcD8NhI+SeUsc+O6psJZ+qMM3HG+d5saKJZuuLj9nlBzNsU2NFUXxFDWaTVlArG+GT22THd3D8DeZYyPhZyrQheRXR8DJXYQQRnRQGiw4bfp5CufZFXuvy4AWrbaByZjv3wA3MMU6IJ7PWwgKBs0HcDK6yfdPTOkwFM1k1xSTXf1aNYm7kCL0u+z1PZCghC01uwYwlSRVFQsF4WGdgYlnP5sgddHqdIPA3vL+4r+3egM+2Jj9+PPIJn58p/gNC8q8U2DNm8pQkL8vv4TxuoVBqvEQCHbvFOp3fRLfJ0vBGoNlardr8B+j5w9SVIwFlWNxJZVRnLR6QAOGF2LXzskkNfzsb/ySGFn9wmrJwFkOqSaivO+9M2///xUt6pV3Z4C83BslikrH4PbMrrGbZGlRLd6GSFRoy4J5l9VeuSRCvcfTgUifB3XDQ/+mgDaEQ1dFalVaEgFAvbLJWeWtbbpSK5bbWNBLvDu5PzuqMVdwedyuz2zJvacGRZZfkUUZPXaOVuMbkZaMxb0e9zwNSCCi8vpEAL2eblyllR9rq9xvgyH0JtQ7NdC8yOo8EBrrx05TTE17kfwt7Cgb40licdVLHALons9Ox5RsGX06FKNYz7Yw/yPPV5Bhig6YwsbWBvcgERGDoqRU1FS8zLQfIiiGH4oMaPHb+OxInOryEt2lviBKuPGAj+olsL1oCaWIShNAAtgsIMMFWuWGErXqi99rFTgAcCFGxJjbmoUx3lnNL99m4q1FgmOIdqKDxDxLObJMwkvnlGhdBJ9ILfp44pqlSAy3H++AztRCWqt1vFJ/Cnk1THaXjdOp85LiZbuwIjBt/5tqTIoOFh3M6YRBVkbsjySf6rpF9RrIJBtf74rBLQUoXw0RVXalG7Nrem4rIP1jTBw+V973VzW+Fgj+pBfST2TGutAD21D6HtPIYgwvpU9jn4Rwg0akb6qWBXMv2fmFiDlgMdFd3OS6s8YQsFZpg4gMfztjrXpQnG3iumZ0v0TBsyK2sHuFK';
  const _INTEGRITY_HASH = 'd98bbe69e8b845a5054ad550346be35d518c832a9ebaf58182ff7b66ddfcd156';
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
