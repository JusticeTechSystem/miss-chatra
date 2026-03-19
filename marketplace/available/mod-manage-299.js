// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r9PC/QnxhKKWBNE3ylKbxlBjkASsVILj2/kV33X4L/5wVOBXsLZfa/cWA0peTBmXm+f/8/Zv2c66G2cGp/gqQUfOitguU7IcgIbl0BeGutV2TuqAOLd8RK3o1+LsITeSOdQuXB9yD335H7dqnm4n1a0BYDRG5kT0/Vi6WVrnDg0Am5iKAtNeoQKBHw+qcF4AL2LKIOYdOo92nKlIAt0Wt8M83hM9RglyX9WgP8ckDaP0d9wcmRW8L57TAiQaF4G47ca5SmJ9FeI6tr3gmkdAgMtMKTKvmKeBHQDVNuPIZr8Ksn2ykOEmuxPP287lFblWPYS9nzIBQOsoK1+XE7GEJZQ9uwYZNAv3ODj6wWmebyb9aPVFO1u0ccd9Qd5TvBOWMXxujP1tbdqlBvuAh0Nlj6EOaKoBvsSPD4eayacnOFIg6nXJz6mDWfQMEQF/4bex/UZmENAP6ntGV8IZbEyUPSeGCxTV6HX6J7bPJYj12psQNiC9Z2UR2XYNyWtzbBa8C1XDjOFV4pkPER6Br8D7UEi86qLavKX2eG23dFxTamqRGwEfRWrSa2Y/AqdS1cNkTRwNUBxtvT1/laBgQWeyXmsPG3YKzz+A2/I6W3HQ33cgcuZMrHqAhcrvfvzo6vxuUhuaOerXZvSHhjUD1+IPvKgvWSIhAK7Pa4nS1vZngsBSd3DMi83lXhfyQGO4t0gW4EyVlv4H5e2ZUp75+bxiKGnPGsPQgrL6ek3PUwyiS0xxdOKEMuHv/D+nJEqtwOkn8nO9w5l728dkslklSXYX71emkOKULjONr9pU/iuIrVlAFbvnSaHoJ6OZKpCAWZrQafUccRM9reshAJ74ap8zppws4L3204MGVR3y74WWIUkxD4o3vzw1trttAdx7NQyLjMqFX7FKrCZEJcZ3DNoQkdyKY9aLRFUyYqLTT9Is3U9igKZq5LxnO438Q4XXirizyj0I/WC8oPIvoCxpOfLT6+UJYsnLGvkKyaLC3teAa/3bZQQCHHumYQjw/Rd0c+kNkZqa3ojHEc4yNgOspsXkhbPCxiGM3SPHvkrQAPvgeRFdHq2Dioz5+pSP1KWmhGOZZaDJ68vMGVzo+YaRXdW+7LHHDwOlE3EaS6sshX++H3Zm5GPiyTl80RbeHXBYXJunx2YQFTnBJUTL7hqiR50AWWJLCoRnIErQpEqt83jc8HOuRMhEy6sVBdR1h4m9qgD0rkRHUBr8RXrwDF3Mh4Di7EOkG6broSedObnxEn+FgPeXymqaF//bW4BfRt7zYj9fTSY1ZGaQMHgx/9goR5VVt0QWjH3iXRsBywIVg/D+Ni/jm1wUcy1REmjo0fxc2Lm+wkmLPTF9ntl3/1HuO8AV5X8Eydv12uGLQbsHXa7rFHkntBNEX0tsiQ==';
  const _INTEGRITY_HASH = 'c48ec0eacb7d3a067178394f88d49de5c405b982b1ba9c9383831b849dbc641f';
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
