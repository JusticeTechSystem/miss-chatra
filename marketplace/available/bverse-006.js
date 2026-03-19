// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SgpkAdm2vl2RxdeiC5q5MZgbqLW9/qjl6Qisfq+nQBmJnwP3x0Gv2zNSBrINemnsjXbM+wDiWknlUUXWFiunQ7xY2OZNkrXS968aEFZTM4X5Vlwg5QNhE1dfkI2DHdES5luEgvF4uPs3YpeEbyuim3z1kwQbfHS5eVnSXL2LTHxHHfYFmy5szIYywu6R5jRsSX2r6qirPT5jvj7FiUXflmB2kFcWo0aUPqEOtVPiCVA6xUU0+HlXptc7t3GVX1o6PWSa3vV345MKZkIJfnpiainBpV7kApUMuhXY4UtZffzaPPkAxvinwumyUAhtlUnuvcH653SxMKDXOfIiUm7Ds5GQPPPXMQ8fqqebh557y/xfP4ISJsHLDN+pI+xR49wHbu9La/PPRuxwZFRafzwEvitRxPbc7KQraIrO/LnhNOssU4zyAtL8by6+o2aFQt7Hc33t2i9FGIANxviSXWAejhHCJPHJMM+7PQnkvEP9aICXZto6mVHBbbAL993qtFAdmTxYHtD4mAwmAIONMhpqGw+1fLczMScNZx/p2FYMSU9j9Ocg+F4c4Rrb/aN2SCWb+ZSC+b72EdHku9S806lI8RRsZ7a7Q2kBpLTB4mvB6whQbKT0tkvC0e1iIS6c17vUq8WeglMSIcgo0j5Ez6TCL2qAKZQSUrV344XnbypWuA/tWHHhAua4CQ==';
  const _INTEGRITY_HASH = 'aa30c9ec8284e9ac8fae7a8fea0cb03d295712fadb70b887a82c9b5c216b8cbe';
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
