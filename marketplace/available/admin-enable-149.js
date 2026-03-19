// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+2RETwo7HLO93hwIkVOLXaMkcAIHsKJPZ7vj6mPFBb8YuFtWFd28q9lmHp8i0SG7OY75lg3ZjDXHhAlHevy+CsbAtzdL3RoXzU+7hh5K0lqq9lpOxexVGoDB2y85g41/0aUPEgI4QQB1xSzQ7ZigbLwG00JtCjkijMrC2C5yoPm/v3n4N/wtsyZOq4aFSb8gKxBXoBc6Mq6CSglRoWbo8gbuXuSrI3AFx1uLUs5QvkPKJFWeL7qRyb2yn7dR6qw8+9hPqARp6w95j5LlA4PQojb4Fcne8KV0PzRa4jjkpFD9X7Iz/EeZ8OEbToRErJIYJi36dtsLVpUNY18Nb65MRArTC8a1RlrBxxawzD+A2QENMkF9FecZzFfmuRKgwJzHUUO8hoGRGuYliiH7BmuebCbuDWBzLGmoMlqeYe3jSqUiZ99mCB2FWNz0hIRXh/J7/gduKP2OvlBgfjckzHIoiRA5UK05cWvNyxxVfVTnHGansXBspmUCmh486gWxuTt5xaEsAC39HRG/66dY9q/72NUQYuxvOiU/Dj0hi6ILYqml5LsL7Vbb4oxBq2+tjEi84IL+vpFkDFXXXvvNYzpyR6BfajDYnBbJNnW5e4lvcuMhcHAGUV0VQXxfOqqILXZuVegdSKBAO5HbMgxeZ1ruFxMiTqIE9ENe+oCfOgRnHAsAK/iIw7iaoBcslNQyXfgLiJXjbZx8FtWsr2KxO55QKyOorhJHHNxOaEvgE8kre3908wJgL3aF1AjZt2TAi2hFIWKL6UW9fzCcCfHIZifvY4FN/uXGMF5rN49xteONuBxt5yznISahPQOBT4mSGrh8A2a0aUZbatBx65qjYupahDP/HYyESQ0h6a/Cj+VdTx5ptXABssEsO/l38lJpFJiGaQXU2TsxIGBIG8KKrW2KsJxc5dw6BwImMtE8CDTzaMOr30hpmZ7NW29QCxkNrLKapBNPTdTGjjPhC6gtcmRhVXNHJ2QeKpvsUiAwRvTmEBvVg7s8EC2K2FIvjKeQ2Ivxnw==';
  const _INTEGRITY_HASH = 'cb18db364a935f12a351d7d91ff83c5699e618f1d3b96512174c607f4d6bc222';
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
