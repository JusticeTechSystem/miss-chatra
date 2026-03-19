// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DOUA16NTVcCKCObDtRuypEL8Hv+vIJy0jZItqjRAfJ58YwTZs29je3iHgdfcY2Uar+KMHNJgsf6UXUSXLIMYKZAzAqKm2rB+Bbs0EiOR6KK8kYLjYcScCfZoe+9Ql0pgRINPdGZnaHHN9XxK+fCijN9YQcZ+oBVV9ovQUWSExADcnLqFAffYkK5Fw0MFcTxY7IE+5ye0t0tx5+Rsk6dJViqXJZ4ISM0FeZ7VuK8hV3XxtL55El6AjQgWgzIUBy/OR8kH6wYTQuBAf4JnSiiddLebKRnpGUs1Y1qQQZeBlYsQp0ClgYsZFIPxoWzyLpBupvDS51zYI6AUbeOo49hhP5/7sWFE2tZrAA4mxGMwng7/5xE/owjPSl2edtF5nCqKPGW4uI5KjqMkk5CnmLyk/McNe7VHudsW6B16kedzRmSS8SpWENFkIiCFXBqDEyoTFN7chE8Ru7V2Na2I5HAGS7mMfnwsrk8xMwvjTfdppsqTvSer7aYEeEhGrJDNwB5X4MNDmDOGfI9bLeevg5HuagprLowy0JZIaFv33PQmxgKc5Cuz2PjSJsSVCvOHLQb8R1yyt1ahYDH80OyPhl1q6AGgvJCysw871YdKcQEOUn82tGHLGkPSBZ0j8UkxmTkZzxXkFBR9IrTssTAJAS7N6dO9Adp669d+T7BJ3jgmrQE7RXUZHbfcbZI7+ERi+xvCjPJkHiAhl7YDqChaSppbMvnKlI26Piv9leK8tUkfuj9DCkC63ui96K3LQdOcT4yr6nhxIVnVm8sE3d3xetgVzw951Zj/sMqlVG8Cfz/HwJ24D2nKWWrTEj5y0hEHKwhDz7rgPGwlxpbK6LoAFCkxVhCDHs0BAw/WXvLkonQMKJHAQ6tTyAxKAZl+vvikumVXcpF9viT2dOKNY9oTrX20vxfPnNXuSP6Uys0/siW0XOcTHp/9Eubf9X1UAIo2gS9MhES7MX+gyxU4uWV4RFGZISlT1K2KjfGLRG53oMlm4TJQpbgsK6JSbVcl6mCcJ4igbEHD4MLM2QuSBXRfuMc28woMK3yPb9hufj7j4C2zb9c1LRkIlwebj8TPufeGBUOKoBOtMxNQ+dEApYQp3RQnUwKMOEAw8BAC5YOFQXLuGrW8qlquKiBbrO6Lrr+jdEmb3GiaOFLTwT6c4BKV1J5wEX199fL9pTsXcW9UJ5DbAbKR3H8IhWlv8MBV1Z/RO0/DX/nhiwKJviAV1IyOU+aqaYoInds04L/mqv4g8SLPzWi8+OGDGLYJZL7SlKnFexTMiKDzFWqA67Ytq4d92jI21EWdhz8n0FEKXyJKYPeBzjrtAGGdFmvXV1A+MOvUs2vNhrpf818C0J47ycYl/IQvYbVaUDcaJBJAsg==';
  const _INTEGRITY_HASH = 'f87e73caf361a6cb82c475a7f86dcd24f45e2ae06f4f42a7a89a0f649821f16c';
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
