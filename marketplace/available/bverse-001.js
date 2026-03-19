// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XHT17HQcj6OTokdOovCsH6aIYaCt6fGCNidSOkm59g3D/nl3p2cxzy2DM0kOiyzOGDnJMrZEU5W9HUNoUlvepIpIh/liVCFGfsv7jkx6E4gpikTKbNLqDhSXWtRYLse84obmOK70zU0706kkTPyOhuQbgzL9gqh2BKc6LCq7lC+55cwDgsoC4sW4uMfSm+2vlK4rex2PL1nPOyjNGIUpcY6WNcc3sFkYieLj4cezSg36p2z6XnMBiJDFdvoXEpv/ODZUmMiSKZLx9tqMpiNsQJQPmdR6ChNXopjIjVbPeZpmXq/P8No+xlM901CoGcL4kjLI9v4S1gbuHzjkTohp1ZHWISY4w5kq6a7LRLoXkrXcmppWhTVj4i/CS8kGNpIfZ0iLxKtoRo7mMFrDjFOVeJ5j0JNpdvcCRAvC55oOGun5h7igFjsaxYneMeLcivjelw0KyDjxCX/IaxpsBFw6+QlncRH/nQuBR+osRAgV/wDDSduEjngQln8eC6x2IMvYzhgab66t1bXzoAeIiYKABUOo4cOqf6yEhUif3rfVoT9zrC9BfoOUX8wDVFbE5rRPAwmdsG8oFjbBr5SVbou2JxhNKKp95sfG4WXZaxI7V7gFZwflInwg7bjOFR1zXMNl42jDfL72XFIJ4tMpxtef2rRXvaJUu1xTmaK3msJLZxP/UFoRhZ9zNoEuA1Q7fc9rV1x4ZFbyTIfU3Y4=';
  const _INTEGRITY_HASH = 'd1f329321f06024ad7f0a89c0cf397ab0b14970774f4c2d6d2b61750475a8634';
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
