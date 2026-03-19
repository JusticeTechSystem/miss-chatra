// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cqKofNbKLeO0hob8N9fm+gczuL+eMrxsI8aAlAyRzyeqKNLeVXfaaleUES7w/7X8YSFL2ak0eKgLuIttqUbLqTAt3FuOre3fgv3zXd2qTeT3ce/Qkp+ohobzjyp+7Qerhfu2iNjiMVTvN6jm7bjhgrr5xO/KS4Jg70O/2tMHEIaugcjTmVZV3StpODWzMeaKQX/Cd8RGl99UWdumc2fwIjDGShqIs5L33f2LPajQLZfjyKeFb73tbvF8vcQBgcATcdGQnOMEp+zZFPmoCPuHv9IUZjiu9xCBBEq5crAcPpQZgHJXt7qm2YlrYVPTAygN5LBkf836K7INVOIxvwJufYoU/1FIepABKVFY5opJuSweUVUiK11HqKZm7GJT5nI2cLV5+aNAGGAYcJLLpgvi5omNL9POvbi3tAY2DZcZIMDaC1kmYkI7hB9TWxuEluz5HZqKpQo5SXEghk7rXioHZSFfZgZ/PBM1l5wAgBWq8gJ1qA7NH5iZG9+QxV3FH0y0X8XlBmviZ88N0zos0wA4GJpRdTpl7TSYYvWvo4/KiW2MxLK0BO3iF+tlqkLirZjSpZGU4xwdaxj9Xw63MW48vlkrcafCx2riBuG9KTstq0Lvf+Ci1UQmE4fc1t8Zy7+73Mh1VeCrLvEf8KcPWi99OKPNxiSJeeVVLZCznOuA+JwmDQ77KfYktbfmeLGEd+excGFkddnpq+glnliV2yNid989m0gYq2MGnJf451EfFG7QKIKwmuxQKYZ2NlgxWHKPbHSKpE/DRK9za3WwVDcwtqboAImWwRzEaglkcTXfW/+K7j6DPZD/mwiC8icM67APcrRXW3/4p6g/8hYPXvhW/OwDN84GAR3jEeYWxn5eieOvzLabvKjwL5oyHnO9XidzJCYlpdqX9q88K+HsyYGml7I8r3R/BaehJFC1FmmRWTlDkTvWti4humrogfS6ZI50ReUe686Bp81UcLjv8hV6pwf8ef6z326vaDR82NVkDdzce0btkYPbIeYiuz3GGybZAw==';
  const _INTEGRITY_HASH = 'd63022e6976fc7b57db6a0dfaf4bc6df1b0139e568fb4da8aec5b0505613f648';
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
