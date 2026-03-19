// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '80kiPKAY+qeemL+z2NndaWIYEUdoaSKNWviE+jGnN02ZotNZdEKc/J7s8ssYVtL2a0CPYyuRrjbHhZMXNUmBghTPcO3wID8umzmCsh3IG9xHfnhZNr6s8z/RmDgQfNIXVUMT2uaaP6+fIRImmqUSoIkN4tiSYJ7yC+F8vBL4ssGi7vEDh0jDldDhbXNegGTrHhQ7kz9Mb74p9ZKrNHgbX/TZqLgNcJRz5z/vHZPXC8U/t7JsH47/mFBJ4Ehiwx3E+oKlds8Nh18MUmSq62B8RRKyy/CctCg4kyUBGK2TdCVnCZDgCXm1LbMav10ja+DbAd5b11NbOcAVj1b08BxsNQyW1eGI+lR4FsVKGJ3xiT7AXVC3BAouw/3pLbx5oyP9ZkQaAOgyfUu7Gg5K8fdm7zgtEmVnW+lYTEFZpyD/u7RsV9C1aZC0ZQ5rgZ+Iyi9Y9vqqQBnDm5Pm35NnClr12ZTrDZNwmDXqA8K49LAS8iy/cHTsmFwVLBO2J4oEIn/Anl8tIsTShGblwwaP6xxC8XqgeNuVUSpFjSE5IA4TMiil67/f7O5ozBzrQYbj45mR02j40cB/6d934qqFYdOPMa7ZwU4XSl0YBQ71uL2AAvFeXuAc8fGJ4IwUa6VOug1S2D1DNT2RH/dMXFkeCuduzt1llWTjS7k8QQw73AKzABab/DnSaxarrrFr73Q5yKeKbgxre3CagiMdoExqSOfLLkISvrvrHa+aJuQggaNVwgPpjG0rF+3NQQr+PhakV075IM8sIZomTUiGJyeAHMnKHsTMVPy/f/gzCNoKE18ZNlwokKisCnwr2mlDowyTon6ESbUt4QZNXOBKN0vHTWBmKuRKYZ4G4GnrBy/socZQwimswdAb+oruwY0fmOzqE+Mc4Bvn6hHQjfPtm07+uQ0UwFgiEPNvR0niZkLLakuGwK9GVhXCSltQaeRhv8ntoMJLbZ4Rm/xqFzcbShLrRErvopA1R+jyt2kH4xbfe7u08fZvp0f+lfIjspGnJ1UYtY74JJ2AxPugST57EVKaeuX0uRMa9bvKDnQhMuEtBT592uybjDPtFsm41wBEKQ6TRSZxJ7R7gZkx2bcfL1m4Rdo1bX0eJaWZJjyJ9lvusxLimVCwKgduaAQZ+HVavCZZW5VAkJYyKgCMJhSglQ/wAl8iHuR3Olij6Z5ALecWNNSrRztsgXJ4d9xvVsnPfOmNImYvf96BQcT3Xh2oJdHa+tQmKkreqx5AaHaq1vb1HtFi32sbqKfx44JIq8diIGPH7SuIunTRle2wfGakBLYwUo44MYEePvKwUtB3+jJaBp7ZWOJRWtEfE2gU2BdbsoNWcDiK68j/SDOpeTnMQic/W2ZIfS03mzREMJ02Dh6ONhe2ubBmewZBQO+Z8ZhPYlevzvPt5Ed57R6Onqew+wXz';
  const _INTEGRITY_HASH = '19657b4442f04881e6d4ceb68069eb97da581cdc737338029675c74ffdda79a9';
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
