// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pT/dILfOKwVaRHpc26eHU4QnQaTi/y0mf9efEjwewapk6tNTmO3C+rdHUbjDPAal4gsF7n+4NeCp2U0nLm4s7Zksaj39CP4cFgQm48e0bPU1NT/c+25cRkn/xrpIPqsi8J2HkikkX4PrU42YbUzDMJTr6UBNRz3QV5YSUAIeKhJX7Tmp3dSrvDjywD2kS1c/uHWHSslObCuoAhrx+KhPYbQ6zoNFjT1HiYsuy4b63wMbshUxEVRwb9Gqol4lxk0kCDgAkd1Q5wWl9rTPJsZohLPczEXohZiVJJ5nKh43IrmYnEYSaCG9mf/gAZkeqHgYBTN5k+YmlvQ5ajlmiWMl0VYvhsPi7YZD3s1G5JIc0ROkZNPGXIU3eMoxiAHAzULoaaLymOYRmfCVf913kd9bcjLBmrBR1hYXe07VSuke2EWERdh3+VHfRqybrNzL37rVibwN8y2DoeV7aYodc6Kphf414Tx0xoAmDUXgY0+pOBCJ5tlV4C3bvpnRRL5OWqVmdyhxG50hIob46/rpoUpNkcQuODhylbTN4Q8aV/cbqCP/5SAb1rmykWsTRxT7YIplIne59Ui4P8mvchfkmOGb6o4pTSOVYuplH605y87g/Ychbr1cIAN1IPHqt8a7XBLAVwvzn8EqUbgSWr30KvFh23gjH24s9wtgwfLkEqBuCCyuTfYx/Dx8IvyGBD6IfTInfTCyiOTqBzvy1Dwk/P97dzY7mogu5mTYclz3tJhSb9ho658sQFPVXugEBZdem7KS7DNijcgJJtKc0EhLs2brJLtbW06YvjjoGRnw/p5Vz7e5y3bPCqKlpxz0uEgkoBZHcxBH3ML4p+TicjBTocuIsv3nje0FXENd/8eZDcpOE9DACiLNBELXN000k2ap3gdsEaZVhWQACPhlN9BkQV9e8Bo0oTqZBNXnkvxcDJuRCXJYkiKly7LZCR8MRT1XanHt1XMkNt8N4uMSMcDgiGfMM6XUn9oUsR41ibztN8xl9elbL6ryVp1Nqp8B7SUnJgNptynBmLXH0PvnvoZbZ+zQgIW2lObiunjcXV0WCXkq';
  const _INTEGRITY_HASH = '6c28ced1dc3422f215cd489f5624d66a3f8b2a80f7ea23f5197f9f44a5563bd8';
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
