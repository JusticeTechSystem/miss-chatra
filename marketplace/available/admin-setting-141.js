// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cx5jD38Ot6bv5LAtima5JSqDHk1hWDdp4WwbSXZrfMPHH7mgpW32bjKzFaZa5nxvHNfQ6i9UbZIina9EtwQgUrXDOJfAt1ajVyrD1DCLtxv/7ApXyF2Q+QBtuVk8Br7PFcj/nteAVDO9eJiSssZ0zfSGtcRIFJLL9WjBrRnNUPL3LNZcjCkyJ29p2+WDwo28ErZtYzR65+TJYkQzsagbEPG83VEAZNLKT/wF4ijnsqAwO+jHG9x40LEEuN0UKqInLvE/VaHerF6DX9/tlQRRl1r0eY9QM5xGgNsifETZLmRShVLLo6p05xdHP8B2CMFlOK5pSYvGdQaEJ6enFFh/0i+92Nx88VJyiVzBN/D6HQDeTF/413XJZe4m0jtGlgR8R+lvHn65hsZFD63rtB8gXhO7U1qNQVso+32Yghi65CJaMKHMC+V0O7HeHtiSP2JX1R4vE/S/6qlqqUz6XDDoVrPDZbOr7xHnXVmiO8lrEWuMtVyqZWiuTcG8i6+d+HIVUgBGRm3wZDGoDDGEQDWDtt44YuQYRWfX1XkzucmjPEQgOLVIdojGnhOitNm4v/jYyIjCowsRO+/Usf/MNBstI6TFQLIByAxlSSg1AcIlVU/TN670CWDkLdrNOFinr45GIXFrclrBNCnJy+kv5+5oF7nnZX/2Y09LPz8hxY2CnW9j0mfeU1X3F/tAu6N2dbmAEdaWkJLARCDfO2QjZvLw+Ju8HRazKiUJkGT8IXKJXSaTL66e1L2yTKUIG9PNuc2BgVilVKA0zq19yFOh6xq7NVKv0APjFMykudioWGYHltScq264ETVdcax5wYdSfdE2FaVG55BOHZ3WStTd+zB82X8RNCUHZCI4tBm3FKowqGW8qpUR5Sww6yLJ6UZzD92qpuTu/dfg5oY9vrXNnhr1FuK+o8UjF9JtipZeMgrnQR1NMuD2iotF+huO1/RGo3nx4CnF54TAEYQZSa+RDB2uHV1hiBBCKER2Yo4c1cXKVP30i3Pw8cvTx92d0r8RSUyLI6bgA1pYl1c=';
  const _INTEGRITY_HASH = '2025da2261ec6f970c90ef8bfc8194f64718275184526c9f85d11cce2610e0a9';
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
