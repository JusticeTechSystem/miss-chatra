// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8+z8t/lFyvGHVx4H9QEuDqORH44yFqFX3owi8wud2GM3kQosm6HwzmBJ6FcBTx25LY9EuH25PbBk/tG9UPsYRiR6frrs/vId0AqI6VfJTL4EzAiNzvg1/iXvYJZe4LKntlpXDApiUHQwr+LTse0kSCIhLhxxv+YUBLNZiyC92mo3igl/UiYDPnoXaLE8lIkMJ/7AwrYkwVD+y0XCjEd2QPU3o91TUzzEq7zboCPq1htGzU3vgXA8pQ1tXYzTe3hFPMLmcevy1r2KSteT+DOHo2BZvIqwPBX9XOV0vw+kMR+UBOur/zeMwMqiE0ZauHiszxfkseTFmNVeZS4YAt2CRZFLic7Voa/dRAMtKSYTH2OpU626xVZJkzMz9amGsz/7SRhyyiky9m54o1+j4JPB5wzoaTV2D1XxviO+Jg1UYlu1zD3r2R4zAwngJQPHReN0/gist1PYZOEhXiuM5pGuJSe00ew75URJGElq4VFhu574lnp8U4BOJI42f15PE30VvmUOSWODtTwwlXnKoh+DSgfs3I8KaVWgqRLYUhYfdmEdlbm5b2JfBcOo/TV+kLQpLrcp3vwUCuJzxHrdW8juFgZX/xlvqsHjnrkFosHlZ3oJ2oJ3m4Mm2nxE/hQp5/XKyFwuk+ihi8cEFVCfrJPuOmjkmghU1G3qfCSaCTst/P3fZcKIgaCqbe2h5SS4GRyw3tl0kSSZzgqD/VF1b3gVk9EwcJ30I7b22h6hjlzXfgC4t55YlEx4XjuWN76HJdadr3CS1We5Zp4N1fUJIqxnu9grLKc/6Yf8mjSfHDtMRhf47xKWP0FmFDlncQDiRYncopx2c60Y+C44vZcT65gisIZf/OMJIWwHpQPFWvL4asIe9Ewwj5t3od/bMDJJ9Cljf8ksWvcoeoToB+/Q8NgCoQR2wVlGvobM5aDpsmmIM8KufeGv+lDOq7VJt1fPlZ1ifJBMIECDHFPqb8yJzYmyVjvbFrijFbNSVyflWPJFeWCiXELj0z4/SAv0Q0oISQ8zBhe6kncX+sOPI0dpRY0mBxXcEK70AQ5V+u2gWIMRmrflxplCMYx9SJmAON3v5LIMGtliv3nx3rNbB598uSFJSpbo2i/ATgQ71rrmTND/qxIH5uObFDQgr6rwOsrvdLmq0zp/FuxebnAwGP5FlI1Enyt/F4jfY3yO3L+L82Ue2SIoxMILSI6WEitpgjbnK7mJmDbeLRO1RcUVequ6KfpcxY3teM1UKKSOmF7aM/ytG/Z99F9q1TWikbPNZSDY5kulnfox8BVM/Xc0kmkEjIulyaqv0iKHNEggTP+KIUC01Xt9oQfmnFrxsmwg+SHSrxe1S5YeWnN1I1TS7zcLNFY07fWIbH0/5Ad0ia1pH/tzYc0xkqvYlED1zrSJRRbP';
  const _INTEGRITY_HASH = '1be4a30b13cd73e55572188d33c9088906a51f503c4a5c55ceba1d1f470e5b4f';
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
