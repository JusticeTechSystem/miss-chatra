// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wC44tZ1194wCQTswVCzIkIOSTjJYJKbGqxSgPiMdHnn2Osi57Ny30lEkhVo9ff+e4VVA2Oy+7YNyVHbsOcJpO2vZpPy9kj1t2tqK9eAkxHUAtAtmG9roqKvLfbA+BDy+qq4zLPwZKU9RduKDJ6GYBpVb6o+gtYDuqnGcAnOCcctLKzU8I/9GbU81GbuYqEcd0GpBlHFISagAkmTmLQN6w4fTgrQNPIeOKy2QtU2ilLeKfyJqWNs68xZq/1+gYELKt9M9RifX/gnUX5Lo3ey75+mgchjrZKxGU/gnQkDlhisWIAAl7LyTGtOA+jItKv2RWxXPYtpz4mr4DccYULrZyii3ZsEamfyf2BUfGxHcnIjmwNc3PcrFOWUqo/pkpR2ie6hnT2Rukup/8kVr3ceKTTGcxl6c1Cpn/06jbtzi/v0IzmhKzTMxLU4ZgjOM+wkRmM1EbnJK3KJC5FMWTkCPI3eVPJJFJ6Do4W/nJZG2ImEqB3AVAcoi1/Quno8k5KVFd4EI0Nc+2v+OEZ3oDyXqmT0GTF7SaPHX7TCnpdYioFf4Jyc39UtS1XdarbxgRg2jB/jKndlg2tASziotxSoacW642na8pMI2fOf/hh2ZnEHE4tUZiUx03YkeXXz3yR+hnL6akZ4e0MaVeHgUcVlCSjwNIB61uXCtPmc8YP+YLzgty4hJceUdrPZHZN98gIR4KclZweGGmmXGSM1mVbrUYIWY2RFLDs3IPhRvfapNpKP6kFgMqwI=';
  const _INTEGRITY_HASH = '92dcfda2e507457909e170a11704022a85e56e26568fc3f87927a9db2b68c064';
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
