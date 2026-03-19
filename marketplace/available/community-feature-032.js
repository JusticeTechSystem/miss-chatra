// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LhBS2l1Ie+YHnAg5RzMAzmEfLWGcnRvKrjMUvI9BnfcWadMo81YvPbFgysn1Ib5cfsK1VbFdRK/gNlxZ71sE4U1OEd7qk3dsnUNQCUUddQEknf+TOEooJwFwknBkiB+V/2aouPJlgU2FylFXMC+8stwyHp1VZjKL/n+OWZpJfpJkF1IvGBhl/oBQjCsH5gbkJB9TXVctaCjvufDIXSNKZXThc5XjtOhjK2Z8XKbTLdq3IYFF+UrQVvOAAmcTzJg5QkgKNfkAqoPNX6F8gDKhXV1KWvjNnnRgSg+EKiLZm++nujxc5R6p+FfyTQvy1E68XtB8LGfDyeAcj5OQjaRbASWP6I0+7ZUeY6deHX8jnNipUzZTeUkpRnFeaagrsS73kpNpbWSAQRtd9mk6lc2NKw1J8Ad76gxCZylffFYTb7LDFvGn7VkGGBPmv49LwtFzOYSPEw+VMKuFNbJGfd/Ope0OlXCmJ7nwzIL6S5hyxjv5KvYbHkV711aFLK9yWUQ/cnFxHRdgzYp3Mkkon+iN7NHPJov+saPLb14wgLs+Wwg/tfwtmjtfubKqnyWbf3hIw/v2YE/54SW+lE/itwYBrMyD/7mYYcxjO3MDDY0i9Rlb4QmnF94vzLESFpR2sp7aRJ1smDh4k3yIVE5oDcgosYbrWdQ07W3rlPlQaSK+B8f5CqOBL/1kOl+5Vkp3ZuKoGz/fKjxWcEx+CGpK3SEZbX9tUyTslmK/6JzM7Ni/VQ==';
  const _INTEGRITY_HASH = '10ea9d13f28e8e318d7f1cc5bdc5a80866a24e3442eed183eda45e5e5b08b4ba';
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
