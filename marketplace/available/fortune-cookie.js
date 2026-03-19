// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dGHQEVAKaOCp199bO6YQpf0Ezz/pFwW408pmo1YI4rN8gRHOweLo/ynhICE6eg2FLJB1F05wx4QfXRU3u0Vufjj99iUpT2t9+1ny9BHFsu660yPqMgGul/92rH0K1Owpya1uIUSZUtrK/alXtege/eTm4JWqYGRuQf0JCGQh7U4dXx63ixUPk+pQVfub/TlSgGLCu7yawddI+Gv7hTUyEZrvuRg70ztuU8V0CRdjcfYNFrYb8iGHkAtEmTLTXuMU7tXRCKskOPNaqu8g9sA34r17xbjzv0pb1oPmIE1YLoSqOGDyw/riD7zflTyCV4Tqb6xsZT85825q0AKxNudgIr9cklilXtfBqYFyd3gkd7+2VXcO1mRauu1eheV6FNX88fvYnZFO6bhyJQC2VnAamku887jRWoy2TV57KmwRSImulumljfEw1WposknAzlSVcsbLbtTVOHt2SzKlBYWZuV03ec7kzLvjnTv/lEOEPRQ2pwBeG9TUEsZtQ2umNwPqMWDupc5I5213YONLeAlqLM1vVamxuJZxuxDEJtlDG6jvdXdlAieSbUk8DywgypPw4H+nM8IrPSPAgzg3ThlP5W61F04/uG/7ZCycV0J7/FrTWNi6Ybv+Z6En8/EckqVD79VBg33tv4Hq7aclyYE+OPFeCg8OWTe5ysxd591A7EerexUbUkLrVS3NG97i6MB3/EdbztGWO7GlpvxpqkkznqxOA0VDTFgMN/tRuTm19tnxs9YVp8a248rVG/Geo6LScp05LWjfKyNURd4bw1jnGvbsf7EoopVLYd+J7PYH7kSD20IwrhiM+wsUQXmZVRVx6ueXM07EnBhlSQtuPH0Aw4JmgKP5qv6f6SQSrSp1JiVWAucl+PuTMRHQVqt4fR/2qGaGGDAooUGe64fMwfa7y5ld53mBkqj23F49vhHdCyTN26i0uDVpzU7fR9P20bR4utUH4DtKvOUkijGYpHifuDESyPIJn2Wj7JrNmpi4mWL4nEZNHfO36MBrzxT8K3yu1xEANyoCI8Oam+wvkwoC/Iajs73VB87yTYSSKKL21Z3EzofLzldnQ5UwZNO5YqdiG8PC9Rw0/y7nFg0eTtpjZFRgfNVVceiuHJ7RkBTeT1mxNFZxKJ752Fs4h9+ZOgKcROdq1dErxiDVzmn44s6Sqt6W6R7fHVF+x2YqeBiybhQ252hY7JsyFkSOlSycpbtYsdhmxzHTdqsq9RtEiI2/tpn3vVtBpWcQYJF1UXYXYZOuiRwOuTlDeSzSYnsqz783PQyYN+UIQjURFTfY7A+60rC6JJcWnx9wwW7J3ysDhC5iLocIUADQQ3jWI0S6Pxwf79V4dpsB7QS/l/HVMgkRXFXXfKfGMiEB1zx+PPBcKpY6BY+cwQhbzO2s2vimWGDBLBf2m6diuPYY+4nPlYJu5aKzaAcVvfFEQXSj1GpwHXdm5joxnsR0cqx6USIrYa7wBZHUcxUNNDPFDhoTjSCEiN80QDlckO16KAUa5OirU7+va6iUqI2GelbdbYiY60KKYNz3zv+d1GVXSO57AAOz7InO6dWjr44vFS6umpV+hzXQCu4QZIMFffwqlhVRn+UOM2SwExr38HIXNKkTPoK4ocPtOHgZOOVx3Bg4erQye/HTNj67C2mDUAz4w6wJyHHEYMUxrzXMmWnHzsifS1mlfX0qa91SxhdRXnLLpcpCUGJMP3oW2tOQ6cJpf1ew8nAJIDS1GVjkwZHUhapbLo4QnqfY3s+5dmLuyRnVzzo+PzRrdLzQWJzh3tl3CcYL+uHpxr/J6tfcRrkhzWfQrMuUFUqjgUWvgpLcGspDjTVVTRdNuZRMUtkTfwNFx6l3HQVHjy7+7e5t2DE+2sZIdWFSPfJEoC35KAxnRetT9tcbXSLCWHWeXVuGzElQYiwkgW/SIqJLvEw+HcKFeohN1w==';
  const _INTEGRITY_HASH = '9dd521b6253fdba0b95438cbecf10d9160a2db2d75cd815f40ce8ce3d310517a';
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
