// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/PPqze8Xp+3F7ev3tttkty0bQacrL093KsizkUB2JQFgo0ScALrLnRBQ1CnXIUtSifJG/YA1PijvUy42DrXmP48IMuZEzq7svZpap2QWelKUeQ9MfG8OfbVXA+SZlrmyYnmvuh9Yle0jq6l9qzoabzmaBkDsWwIis8w5wET9uwNohK0gEqUV/iruFTPYOgjpjjxp4T2QO5R1++L8FqrXWRhbYur4MVcI5iyOIGMCgP0tHsBKhRU2QDZko4C/6k5M9W0iWYJb7qifrqgTBK8MmwDvwj91GSIHgd1hLnTEhMMw7+8yFCvbET9uD2WsEnSAqTSKuXtqphwZdDhl9OJvh1vDO6VOv6NvIsGg4R4NlZ+w5qxQk9c8gGEWhKn/UDkd9jKPhAbV1BGdLNqv5GgS0MmT9ivNdPVzEHpuY+UHWY3rZgd8VlcKHmqQA81o9cIHrBvfo76AGbNekg2nASx0gMQhOEs4K8asagaioMf2DC7SfSqSN/Zp3H+7ku0M3cRWmmE7/TUHOw8vHSNTFB74FOWoPgaPUGE8YIaUNAC2dQO6m7QJ9PQs1WXRoxcP5FfxZe3dl+CsNW7l9xj4vH5VsbfJbS3Vo9caaJ3/gnPxb8N61AjYEmfAqQrDvW6iPi7818ZRS231mCij88AEGQWDH3qzZ6WTIm8Dn6UG/nUVviBo2Y/aCGIBwMPyz1sn6SmJqolEm5jQGyBRwjmUkxlR/MmozX3EHvP0KyZcRkh72JJgQfFlicuvl6Mu';
  const _INTEGRITY_HASH = 'f43a02924bc170e7fda1b11e5daec7b4b40a541bf78ea66df2c45551a47b0233';
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
