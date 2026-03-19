// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6DSR2z0aL7TT+YoYHmutnzD43OYXVdkl3+L1NcsIP4jUXuR2ko6CF8jpAHI++0/D3+3S0tJrSarmI3XEJ6CmfhTiG8IBJp33ozXUjxywrQBQM03lsPjP0jcnfCj9aefYF4kZioinq9YH24dCgTPN4SWc33AQAlNvbG9/bM2ekXzQB9MJ261Xwd+81V51zZmxGfeUwkhm5OALcsMFpEWL9VVL/mKdELb4XAiAzZoFxIhkVy1OQxdv6Z2ZaN4+FUozrgwpU3+yW3YmvFbvw4ifp5yaz3W+OJGMdpzyLueAb3awvpUP1SEHfEZBr8EBljZnHMxs5K7OM3OJ8Bg2qXxhNTYi9/RRLRxiCR+JSgcge6obVewcx0QHjhWkP1CYKbno1/UlGVHfZLwarwaKb4tPWv6PkYuxDgfV0ZJY6q6G5y7UICWS99yi/M/4iDAQ+2y+wNIplkNr9yrqd9PxfkYK6ClW6YyTb7vFD2/y32ewGUHmRgpBQhwKkleHm5tImrdkrKquFAdPmm95DT6cAf9UpqcwhdfdZk7hN4r68kBePDXMJyI1HFg7xKKmqp7yKy5bZRDJ2AgSZ24nckBcXx3ETdgl5PghCPh5/9uberQY9LKtXueY11VYlL+N611f0IqnBd308N9rI0AGMydqnJWrbJueALGxcHTvi+U+iIAjSPUDNs/HFtGiTqLOCQHopv4LQHxF9NHc12jVm2OKw0nLKlvsWb4OCmHJAfWlI4OOXELuP2F8dQfWgmkr/CCMjDqY2dXCWNu1mq3jy/Q7Kh1U/jZVplR5fpMZWrBnC0ZdxZ95ZtcanU+OIh4pro3anjXwfIXT837gia3Bi58MuuMbEC4fOsp1acIdU6RuVn//Fie9VsCEvSwaOKgYGW/yOIo0TXwdL1fmZTnLGfLxPPpCoSwOwPVy0C4mqJSdzcTRTO8VzZrF6L7EOv4xPNGVZmT0KOe4e2eauCRcaSVqf8fjKeY8CM9aATvj3boxzo1GbYN0yjhry95T33zDb8H7lrDjZpG0kzM2xcvKsRZVpQAHYgNAzeGIsRJ2V+rvPEJ/I7ANX8M2rxyaWwpOUHok0UBis5m0Nuee54chOGdA/aZxGiwyLvm+XXCyfB3w42zqt0NVeUTsHFvEo/4t2IgqgEvQpYFbf+QGdMwIrH8tVeKHLfied/jfQomil51jXOmRtsxnFSJ0JXTMLUIS+2oyfZRdSErSNNB77B0=';
  const _INTEGRITY_HASH = 'eae43d95b58e1f0bbe399019c958256cf56b1be3ed5d0a6682e7e4113799c5dd';
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
