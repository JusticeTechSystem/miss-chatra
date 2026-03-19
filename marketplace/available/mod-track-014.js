// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DCwlg3YYsXQMD3WQKDw190PY71rgg8tJEtbgYM1cbDFYa7XltLwm+CLQ0Q9lyGb1UQ1JNN1JtXtQaqF2363nue/iMDL9TPni+2sp0CzU5Y6FYxkDYhjQezZzMqgk4a58EBZXshUoaHIKgekjc66+NgXTJdCQLOD+WrhZw86XUVr6gxu4so1O94Ajbae5TO1LNLTxSpJB2rHZzgTHsrKo5GGnHj2QmnujciHPdXSa5UwaWDMQen0XD0ztT6JXp8ocs5Anylmgl2SmgrVJQwx0Ay5mc36L6+ETOc7uBZUi9GvJOib9v1ZsUIOVdyYvpL+yC53HInTNp19HJfaBWMjY1Sd1ykUASXW5zYjdBrxJExhQBv6TAl6OehwQMvAerD0RmMxG1G54PlM54ttjPFIYRLFMVc0Dw25Sr1auUh238W8PFwr4L1DKtbkExuzTnTUCoeJBcnRM5DIo5FG0lOqXjZNpITmhQy3WNlsBjQ0Lj1p6RFdHv+aXJKAO1vu5yDulZSwMpvhgVFxRhZWahPOwdmbnGANWuypKf7jrjPrwymhOTMuvjBUblUHAqqSQ2E0k+e/ZPYU4T2wS88cuvXkuI1PObQssT8SognHJYVe+O3OpayLOxYN9cFhgGi9ez9qlhmna2s2/RcMAgCInRTmRFUPt48K6Ez6m8zREQRC/xW7PVLy/+e2/K6g5SGrbX8u/O8wSg1xGQbgog8a4zyvMeBTiYe+A45saGEZIrbWIcZaLDDgL65MWL+cNXqxzWcJ6dncbVGi2qUUblk8DKG/UfFtFt/nO7D+Hcw+4QKVzHeCAHDdsBOQImDg+MIKVm3MOfa2fOb8DKbqDFA1udepiPLe09NWTm9x6LYLjnlr0Chty+PpMZz/MwkKYb0TqkbDX2tStomlf0fvAjlkyQMD14bD6O29nTYvOtr0hKL6SVAdZ0XNBI2zJYOE5hlMEitUBYXMYE7AJb5MOIrV+A2iPpMKx7YrbIgd7DIIGOmdIUd7/e0jF6Cbk2ztgVPS3GdDs0h6kfYd1dOuRO845t8PBirDZ6ztU4AJdRAMTV3BJPducwMwBYErWsg5pWiOKLxEyS1Ph7SHuc7tS+2NPfheEUHY3YGb6HmxdsRNSjXp5v7vX9ttw3vrWDpjBPJQYOGo4k87CDAaEaPR2DHz0uU4fj2Pe8Dc082YNKX8KFwfz4EFrnOV8vYREVwGDfgClYFOOrsTQF658Ah/247ImkWjrhQUBOSSbCv5x3htRSRfDyoAksVId0/plcoXe+WoYYQJe1oaGZtcBzeXs8ot1x+GDbVPmZ/NbFaGYI0Quo8Sgm+EK1tmc0j5les0GGutX7dlFyXCISKJw6zpwUEO4AswpxVDFYEBiKD38FA==';
  const _INTEGRITY_HASH = '3f55085036bcd4c03fbfa996138c35b5bf0a86f11afa8b829e2c2695366af17b';
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
