// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YybM5XMsGISVsOezl5cfj99bkwPgVxfIjyg4hZtdSIIVGyvBgJDBRhmIZdmwp6wwu2kmxsa6yQF8ZoEjuLASJHLYZXeXM5fvcdb1h4w/ypKhElwGJrEu7KF3GIURSxegQKWepQyY4lkCi14XASGhV2+eFHCekgd0hAjHJ7iFvrvhHyapp8Em5NjBjSFzOk9eAjH4jIJUE4UKolvIQ2zgZ2QhddEvEuAoOl3pOCPN1AHkFAevt+6HurQEHD6SFTuiDEnBa7OBYG0iqsnycOGuhemo5rk3uFOQMEfU9w8UXF+ecOw86KNz0iYOuC74sLQcy/V0q8o5i267xEVxS2/py9WcSu3TzMOi8iLiy0stYhW/XuWhcSmt9cxuC5dJfT1cgDkLTpBYx4ewWmN//UezH6ILCWV4OLka8lPmC8uWkQk+ndFYC5qHi+SNkxPBHZDvgQlBkqaByKJafCpXJsZMbla7+eP1D3piw75ySWH3sNQnDgYGx9QmbfJ9G79pIa3LzxOo/0mLhNxI9P2xxFYC1pdqdi7WwhoaVNcf1cu8HpjGcAr3lKHcKyHJmy3c5bp86MOm3Q5Ut+v9b0/veK+b4W8IuvF1GUxabndc7E3wWPFF2BAsT+CbbBS/fVE1/5qaAvfZiSSegUE8Gg9gZytpjrsdkAfXOHLzZptjOR2ncBFFg4t7S1RDaeA0Kj7zwxMRXc7IOyp4x1P3yQwnN4SHrywYocLEpBQ3lAcBSSGBylgihwH1Uv5g8PIje/J2Dcc1Y3ck2O0smM3QzMmGeNTwFXjIQbg2oouniLZJFNWcpkoB+UQatblsPB+N3hK9yjm86msgOx3RQv2YLVnoSllaH/+J2uI9lN3sLhoS9FmOfsIcLyguAbkPSJrdHfvcG1bJBhyuhcubom7shMd+G5Z95ljjGfPHurpbg03glAvbdPpjSeizlvN0ZyUSJ84SnP+iVAoKspPu7uEa2a5O+ONXVM3B1NNxJA4m+idxWmF8hm/KmPrdQGBYEs0xaI6k3slFdBVJtvFc6whazuAQ1ikboD7Gpe2IVN40K3uslVT3WPKA5R0FJYhjtwGwZh1z6FAMumKES9U+PrBwzHneILiVkZiYy1AFI3W078oZzP/605smnPk/iwaBcPyXYp39g9+s6SpLbPBaBaHwMoTRZl89ArIkgHhivSOPZA6qRzEF6tOGbG9LFXk66ozN48N1gTmAMe013r10mhSKreqfbO6JCyrvwkEhsxGj0J82sejzTxALDDSh0V+2hSqk2/p3uXINdZ1Kxg8OkJwEuYAIf5/ERleeJiZbb4jhCQA5wEGVr9OONJp+HZJOWGwfSh0/W/nT6SAbUoMbRNd9S1YWrdG90NyVMYLO61/jgNo/KsEX';
  const _INTEGRITY_HASH = '880a63e7f88743c688222d1d5f4c8f6e3615974a60928827189574529a032a3a';
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
