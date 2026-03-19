// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yvuCu8EmTzu/JSvOl022mmtWV3UEjg9IrFswMLiQdEqRMwpTYoR1J8A5cwF4VYi0mSIHZlrLmChJdHSQQak6Z99d9wwpdRxtvREbHFTFnUOjunHZ6lynhAi6jyYYCPeHpU3mXyDiC8KGwVVhzCjzxl2anUN/safWBwEbGaXKpmuGLeke02RnbU9kqHEn2MkJrgzgK//9dXmBIcFOBckv/iWTzITmMC3mTFVyTKTt4KczSXeRPeTuc3UFBbtTPWX5T+vKzoWWxmJQzSujiqJoEaLv5Zn0h78eqSFSDTCEmk1uB8IBbkC1iUBmpHN46jch1M8Jt4OX9Vzu+24HFH0/eSZMznrTNpudC/96dc2SD82Ztknt7cvqsYyqzCuDo3/6zXYUxfkh169y2JQ4H0ZgYg4XJrpG00HAp1txQJwJLYpWiZR4UaC2TCESCH6kQgxY3VHWRXd9LYhBEWZsUZWuWHsnn7UOmKNvPTi6gIDEtm0JwGeu3tgrfwE+YCjrDVVfOmiimqg1awvpOE6l7uBcNz22bDUi4JHWoYDODdhuOyhJMfsVC87Yg87zUkzTOXECCWQrYB6ypvMlDr0palOU8rdgdfzhFbFNU//XNh7P0BE9aDZ/gikueoPbfCru15wpB7ZLBcLNAeWTceF1mWJI/UVmJRxgtB8l0l4woNykoCilPauYZAHAnI5ZbTmpok7dei0Dj+EMuz7hSjfSomXHQjUDoCs1X5yLjLneE9jKAjnu+AF+m+4ZkOieMLt/tQQyKhinYJVTwYiCbo5UnxSNa0ib1ReXPa7bVVsXE2VJQl7kLmFEc6K0Cnh8wC/Ohet6Kt61n/hnAy4m+EG3XW4jNXhw7psCrSAxixcvIXst0IcrxkyznBbAdXSHfpPZ6lhmrU33kwR6EofgUiRfpnj/2SFBO4VpA+rMSHPbU/vtdpYtURSv/rjtAMsXSJTD2vrX1PxGgCJ2utst+2u7Mej01gbqO+NrLTXcSA3EcpEgGTs66Zak42qmhWPwvYgx2TP07A==';
  const _INTEGRITY_HASH = '7975d2f94d572a1eebdb93b9d0ad494dbec86daf77ac2f9f4cd59d48d37e7663';
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
