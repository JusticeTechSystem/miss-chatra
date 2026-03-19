// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cAtn3qxuZ7CyE5tRy2wz0w7N+WvdwXJfM/5WKoME99HWR4Sijc6Vcq+jDu2f2mdl5vMK6HR2tpSx/pzbEpQuXurnQ7MzgvMydym2qJmNSFt/9A8im5cSeYVAniWzky622MNwAUVW09nvRzgJP2EF7lCgCqWBUZX9G7CjEHHwDmLsfRsJu1zEpJXutm9JbSEXqYn0RC2fC1njdccQwOGnpYazIIL7/VZ6Pkg/9s0nqzV4RTKY0/O6Bkh74wdhMAKhALbIi+QGbDjikmUrsPLg19twXlMppYTSkPBEE8v/UQ/FS9PphWmt9XW8IOpb0QF/NWQpDO9r7pxxFDq4xbH+GZslfXaMHzt+GemBYzTQSCl0jZFPNit2IuaJU/MnJxpyOg5EH6Diw093eWrbO1/ydCyj7O6A2+SxSKS3OpltU6fLOociIhqUGM0g5QhAvGb2W4vr8ZdXSTAWaKkVMOD7S9EW8ihndZ63xUKE8ORApo8+hSCITczmTHa37jeB+Jbw6Pb+dpBQzxCGJAYuPVq6rLMHiWraMSNIjS4v8rYsKLcztpsnq59Gc3T1yR0rRXjCKYSLtB/NYg1+uV3nftPWO366m4KfFp0QXcs0lCxqtH4fyLhukaEBvK3dBq3532dfM7ajMf5yMGSyrUfSfje3kA9t75beg1Z4joNDCD5d56G1mKh7WnvNecjZi5QxuFuMbcx0irD2Mxt6D4x8w7BPltt/05w=';
  const _INTEGRITY_HASH = 'da1d9be69470ed5194393503348ad919b2c9eb4f8ae4c025eab28b24eedcb726';
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
