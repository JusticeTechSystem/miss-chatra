// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5ksi/1n3x/NgySja5Cyk8U+5vfliyFGfdbh4c2Nis1nXiqh3QDW1HE3mwFugSuH1m0E3x2ySXgoT5Xr22Dwqbd+VeUH4aI8DQgqnE9Q2+pmr/C9ZRmAwqyumRM5M/kqOsKgLzVUkn8ctcwRZ4cWTl78y1zPIeA0Z7ApZwcBlg5j74RF0SSOvvNLTw02XfZlnh7WxFLZskS2nTBjg4MPHsYL7njaZAGibosz/5zDRwWXjOOYqVxXK9Gkd0e4z5rOOJ1hGr48NVNbRZ6KkSZNQK/xPrXZlI8bWNih0JeXQxQ4xZ9fqk2uyOWUnfGQhbh/gYWIvB3NgigptUh4RXOARDgoYEBPzV90naA28nDt9YmYzKpttrERZu054T+PMcmcM3BFLkqnJxxwvur0g8pkT9vm1dDpnJDPSW5mWLDWFZFBqWx4dXu/SQmgeYZw97gzmwZdCr8LPEm/LqI/DF1qphqw19XIXUPO2QqXWYJ6+Bui0ZmS6Zvdh6geSsHbnvt5wf8cOtQJ63pIFCKQcVp74vpMr4d2yzhMF5MqlQ5d7MqA4FEjjkeUf21cKTASXD8BCjY4+KehYXqk2a4wYrclThc79n07Brk2JqHTNK9wA1GM1V9cZHMgTLYKtXZ6wbC3Q25GcLXsCCr3I7knbbPaUzT7glAdBS0TnKSYhh63+YU0j7JvsosI9UQtDxsoLPAdZu340xZmT2TSnsbDpjiq4sQjy/2I5U+naHCjk8U8xFXK9Td/KVkZBtoQxAhgA6i7OrsfJMQ8LeAtYXliVQiEuRFemiKcWS+qI27u/uapbzQt2UOy6v3ZF+8DV2Jk+T3ie3nLRijBOZvy2FcbH3yKUo9U7RKzZgPW+ANn7qYBZShLG45vUFUPDOY2XVrbWfMd8541p/PxLCRFK5H1p2k0/BhWHq6xuJqM3Ig7XU/mtC4xLvnFWYs8gd7VM+OGKyRFJ1oeYR5qCu+saemoG/tmd9QUa0OOW8Hu20HdjJ+gFmGBov5R87DRf0umjMCpyeXsZlakKy/8Fafcg3xVawcqdYIq2Qq1eE5WwsJEl2g++mCY1p4QyvmzD1B54bG3EoXV5GVrDAiyTeuuzOrIkmNw3mECTn6yySz2G/qvkfMvlAq4HS2U+8ZcglGTbkBHbpGzDlvxgW6ICVMiBIiYP1i/jH4IxqThTmdq9ToLwHqTTUnkm9qjPuXplqCv/3foZMT2vfrXXVo/LqDRYxG5UzcS3bEZs4uHJmhi6ZwPoMBctNbQV9GVSDB/42tk5dtIabm1UNTdM3RCDo2sGYODLXYWQQW4JMn4Kkmpw0xqp3ScX9CcAFMRCpWOOue3EAVt5oB06matTq06V1Rx8/w==';
  const _INTEGRITY_HASH = '7d465a6ca749e10fc8d48200fe265830c874a191dfa27010f8418bded5639ed3';
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
