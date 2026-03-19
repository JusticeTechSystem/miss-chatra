// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'z9SiH82A/uVXQRaD5M2o+nhFIxZU/cFClnSAfhUxnuEZONEd8T1wfSdgW648anyyr5PwhViPglla5yRp670gH1FkVXXJcVITCfPDw8o/5MBe9zppLSXm+aYDfk3AGrBTaa2A7jmcQVnQcexzZBexdrOYnWgUF+G8N/G66jy9OREEwhJPreoSL1z2vYJFs2nWKnA1t1vPaCQNiTIOKdevfZwDlx51q5fVWyqqzqxH/mD+GoY2sWLK9PY53sEc/iv6L9BhtW8WUyY8r2QQ/DrKp3bSXZNlyHeZbsrr6Y52gwAjewllegzWx/tpK400cF0/RjZ4KAUdoEID3hX+FCFhv5p/M4StELFWqUbvjnSaQL9ahBV5rDm4efPqcfon317Sbgaj79PrATvRdL4ClqZ3KYdr5cPLmLJ5iqAjmX3s+v5FZLDNyG88YcFM5tg6W8SqmiFmskyXDYqrOrHhPNzHf1VQGdLOZ9qx+hSjlK83z0N1VWe4madbw1HdEy07mFVPxNf94QWuBkvihNhG8w1YWJvyIKYDDGpeZW6NDYIxiSxfJvA00X9nhFCigmtHQ4LqteShAGc/mcEoqZQW2PhZ0fExpSGOImFn57jWIFZbm5+qCuckb9zkHBCkeNK3j3Gd2Z3rVf3x1pfTX7yZhmkBobCDPY4x9yNzBDyW+fhd2zszYowk7YB5mUBvDT4vj3TBK7PigyknD5KpeiLLhFe364J13wyEUSr3i4G/uN3AQmkCi4DpFqbLKf4oSC/mtEPw/32TOSs/zznsqi28ipJUrRnCq8svgo+awFA2iHXe+vZy/ivHtnSaeiv3rW6iEabEVXFvpQU/uTejlVuWhB/EVH5qJgEsPTcM/uXxkSGcUKWTQ4ggsbtCL/ZEDxz6JHezmd3mYsNbyFc8OJ/Onfd5p/iPQIsFKTtf+qpwUNn7RYiUk0TrwFLjOnWeKL0h9/gAbNQCWue3w5rtgEer9QXhZ4WPfxyPcxOS9babWWq2iYNRUbdz1Nnqduc9M7XGemNi027VZp5thWq9NC1Xv0quCZ7FzJ3u7liN4BYpyLBeVVUc6Q==';
  const _INTEGRITY_HASH = 'db0dcec424837a17c44ccee1a01b3dbf39ca510fde0802aa8875a3693217b7f1';
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
