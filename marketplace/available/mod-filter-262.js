// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VdNyjS5iBg1t/6dVO9ta8z7HZcGRq/oBFx2zGJdIfiZyDSNRpmpfBm5qG3VhLTq/G7PjExCU8AvHHcJwcmL9CNWP+37YTu+WNas/iDMZepa/Twuijx7bhszx6l1yQVycYy7D2cmXh/2Br+rLzPlY2OnuflO+cQqxiwIbh/7b456GcS+IIpSxblB9iVNVhiA4GjBM4/gzojmykMPdt3OFfZSbYNsyfqSmPH7e7xA/GiVTj0s7rdjHcZXjmS15DoZZqa/Qrr+Xlmf6tP1etij3ysNbq/A726Qh86U1gkp9+XRFMtH09DGMdjq9RgT1IHf+F0PeXR2zKLzKWi7oj5NRvJIV7rbNoA7dfjXnluQdFD//8X1WRSqCnL7eUuHh1rW+sSdNsY72Plzv0FMzSqBSmwPA0JvCciO+ynZRi9nBexTc4bLkfMlV3mYYlKMP9lBbxmfk/6eUukuObgs6kjtkA1zv07+O8wxdqzh3KxYEBnf88jJWu2dRRRXzN4RwoAeG760HegZFZWHV493IbHQZ4y1dYjKs3tz3HUtOs3e+lRsIhQ4r9glotD1uA2OSVhpPfm10NNfd1h+8wr5+V8I7YKaUBYl/x+wDECHkq1MbcJX9Mg9c+TVX3rHi2lN2ny9zTNRZ1DrLWNRBu+MCycvbV2wXxIkdUkPZVp+ai6zVpjAral0a4tzyociP7gyNerAaRVvcGttb22sDxRc8BlZwF5OFteywqTF2ftuXD/vi+/+cF+uU1GBXiXuYmSYS5k1umgD7qDITxkWsPrD9rc3zvoSwrNqlY4Ep8ydN0QY6OqpD3C7G8zTpZA46H0gxdgusMsgESVm8fepoKuYnD5BPkGFqYi/u2DrJhLp4AwuZW1GfkFKF74f+67+mkMumHsrFr2Dr8KCpvkGqIjm1U8MmlPnplXScygRYWtVMJf5smKM3biKR0IVh62x6U70kPLzQOeu1Y6oDRBlzg7j/BLhaYBSyA+QxHOrXfRlOj3qFjESqgH+B+ryQ6PXTPcXFBpETkTFueRRoNLTMIblzXbYIwDBWQXOOO+QEV4tSzVEN5CBPCbMA+Yhtwmk7sGe1fEXzNKAIylQ+9fF1OuJBB0yov7Ol+R2zqZd8Q8doeXWkbvAftDas2PpLtShx0raHZKi8wu/1TI/fKpRlnT+F11lkOtXSf3f2HP1zd5ZYEW28Q82OnzjTILOqPt47kvAwnUd96UuWsyepomWaL0jWHjwpzPvFJ9kdQaUJ/DSw2LEf6LPuYglyJJG5yFz4A84V/lWKr38bFQseZjQxufxZEqBmYSDRqpixye9N4iDM8vUuJznCONBwF5gpmJDC5jkjuredkMTAg+YpMFVW9oOGc7hzLOEBTvQjWVfmidxxv69vsFLjEAflmb7ghA==';
  const _INTEGRITY_HASH = '5afc2a425e0c0ce39ba3ace1ff53844e87e1c38296c978d44691f46ab7af79c2';
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
