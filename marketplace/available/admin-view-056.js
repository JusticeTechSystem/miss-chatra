// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xFl+sks5BCqSnpgb1i83Y1gJXYaGUtN4LmAYn9b3SfKkHwFi0Hftkr/UkcRha25ynhX170xw0KKrz4AGzqTfRZtdD6mpKhFiwlkk0fMVUslXgfQUOTJKdodXbgMjcjsdXyaCq1ue3zwAdj40aKxv+sWGFr+E7/h+y+WlZcuwa48GM4eYFHkSgy/z3PDPtWoUnDtFLupB9u/NHx5iRyLNXob7M8+RGItGTO+gnpo3wxUSdlOpNNt3etG0F6upQaZwdCHmpIvL+mlV4SgY/4lVkSsXDfGqMdUreNiMiKRzRV0+LK2zChCw1oRGSHg9AzY9c0xUErEFWq/DyrceiAEXvMfSWpi4c+wyDCFQGNnx9zT1CrsxWuU9MS6SOJebStzTg7dq+cJtPgO7IBKXD1FxtdplGRTwlTsQnSpF+iuBwDf6xV8NqG/Rnk7h3d/bXlrGIxudSaz3wzSPKYVn7AqQaRG6AYhD+wHMXACWV59kpZxcvj8Q9ujiHa/em4PKaj271rLiImypBG5SGLC4eiPJF51yyYaVznTCN5jnJZAiSt6gShpL7422xv0H3T47iTeQcJrXdimrIdz6sJs2In9pvosqpgOiBVLU4XnbR8hSFoRpxsSD+mQF3UwgN9Q2VgjoIXRz4TUlcdPDTusXLszrd4/S7Gw2RXjKaZazwIg0lljP+0YSUF1EYZaraScifjDHIwdyGQ4Ieddr0iVeRwTjqMPIFbjtA8H1DH4v/scupxCuWtORRLWfUnP9T19lp8dc9wh1c2BXBWzUe62lC3V8FVttRioblXgKtZDPYSguvB2IXCdWc58BBSotheMtA1Ozf47Nh2MgjOjmYh2oTOV8xR/2oT9PI9NIGRcOsLxnKTB6eOfDeosVAK4Aey6E6td8g1Ez6wpm7qM6e7Z4yh6KTXTqEaO+Pp+FdGjDJHnTZuy2VdjENiKU7D4ItRQYVm7T800EL7OiMOLUT9Ssk9i06Cr/+APLWVWdhvG4jnTiGA==';
  const _INTEGRITY_HASH = 'd051fb7ac5bf4ae5eeccc2c315bd8377639cb270ec2264cbbc4378c644665341';
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
