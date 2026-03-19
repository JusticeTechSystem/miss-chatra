// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '56T3YahuJ5Ijzd8JkLpgp4B9kziYEmCHs+temKQ7cs7YgPszFateesmZxqlUYRajMHvPa/P7Y8BpbfY6GfiG+ob3Q4cGILpkN0qbQ+tzWpZc49BpcZ/ZsMX0bqyBdUd1BnccPP0hEyTIAvQCitbmEQ0ZLnk+SGXwiSjgDen0wtverYe9kqUs/UX8G3IcyA4psb0EfWNii7cbGtubVX01ihd47OKOwIWwWl4U8jljFFmcxE0nJTkVxidLXolc1cVz/LunW4cjLStZKNl8ywOQWtButeHoe6J6P3iuwTtkFd1Njm3AQ2rkIQa+38m34DjcceeZXzhELJZ55NrmB3jKOHxeoDzIopTNZv3qWnKk5780Fn/rI559dlWNLPL8GbzmCXeClVv3PKLP0slkIJiHbgYBjSeekYBCF2niuxoA54cHUD3gQxLSBPWZb2C8rEiHgZ9r0djmuykG+g95wE+8HGTdKhn4zsh2WN2vIs0ejGnz3cFNjT1ukbfw562rzZR19BQG8uFguWW7FoVnkp6bjd5cZ1sRJxK4jAov8ftZW39xINZBExovWyEqx5XyTAiP1fs27Rm8IIiHE+Q9qfA9GRLS8XOYW/ni7ShHlMi+HVorqeNVa8IxRCDhOSwGe7pCb9RA6+ox8dpT+fotUkBidpmbpR79RAiarzt8QoYlhMIostAutIb4EPEDjIVjC6GhEsgSFn+r1TU4z4vHlQY4FhWCigA3q1Je6TYZE7uS3daI0Z4/MeGAOSzzMrN6ZMN5uD0ti84zHSJWbvSbJpIrvfL89f6so8qMQgWsPK9UQfjj6xY8BHg0eaaST9wF8MCNP39cJm/PWGwnXYhM6xOMQoP5F1AuxUwj8thCFsu3G9jRG+HqPIOp1nuc4LVrEmB6xhMhvzyFCRSiFQAbABPb8q4iYq5W9f+ceesjc1ofbePpMIJjVwiq3YujuYw1Q9ATtXwuMd75NHiymW3T530wHk7stub9xRiFpQMCcboqkv0D+flp/WEyxV91Nmw1olCW95WI0W6dZf+ji3iRiqM1qv/DbW8TnRrrCDlAkEaz9PlM/hpGAnMLC0qUMxHJohU5GqwW2+koyO0PulcCvTpr5pQGrCLCAerrsDDf7eopxjBAJlbWqwib6b4NBN/1UtOehP++xI3ugpVabLFhlsL8PwHCMulFH1WsdIemUAY9jeaMpnlPk+9Gl4SSxE92eLidnLeQC6Etw/TuXlVP/7psqT7yXS+jSLmh9HPHhYpFohdgaqdQENY7cQrHzLru1mKq/j5f4hVAHj8FR1wrLp4s4cJT2zBvaV8+l7Sx1pS+ZM0X3tqJeZR/BmNp9TYN2NIJuqnfmhFJdRCdVIK+HStg0Bk4RjaN9hjI0JirL0Zs';
  const _INTEGRITY_HASH = 'e6f3278f3503e15c6d2503c3b872f9498c053f868c9ebdc5464912793c5bb9c8';
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
