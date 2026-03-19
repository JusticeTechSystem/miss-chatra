// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CxOzlIv0H0+MOGYYGoLZZbQcD8OUyhFM88gnael9dq7BjRWwqEru2X8XiKt0fBhdxiMreoq38yUmJH3FnvLKk+sYAz86/X2euKPlFhr/8Y7nZT7ara/rrQJ4/2LESSsF0JiofVDikt74x14ahmp3h51wtR6C44/fdvB8lnNJ/Y9QI5sOuUejZG3Wb8xQe6xAlgyAQXEmJJw67/y/bRA4ZLkt8Gys1hag+JJOohAuPeIfyO6Kue4jZhlr6ILT0fLwiNLfybBtdjhCfE7ZRbev/X+f9C29WzQ8EGYDfPO1kgWCWHqa2HTD7SCjnctxZZy0FSoO8TWQy8r90FgE/ivghPc0t6jTCaahPHDI5o1AJJX9X5e9E8IhhffxEIRkr7wNsR3xz0Zuxd12Wza4NmvF6ICtMl67I87sX1wyAXBQS1z1kS+pRFcEmBoQh8nPKAuJlRZDFQZVXDxXKhn9/pNocADbEo/tXz3XJmqAUB5YnTFVtS4A5YTSLlTLkGrMrdN5dKZ85Wk/tUv2DOyClXKZAXMoK86LbuHA2pyNet2JJFekVfakb+8eYChhukReKKfdv73PvhH1KeJctJfAp4y3ZPyXJR55LdZ6ZoaZAheJ2pYHdTHAckvjS5n4k0k0tuaP0cSYb6Wp5YCLvn3wz6HnPtcVOiIXKRE0Rk76+3eKmXPiB48NicGpp4gn3QzMsAvY7JKU5gTMQRZJQGo+g8oP9Rz+snc=';
  const _INTEGRITY_HASH = '3c3d599067835dbdf45d22bb95adbbc6e8a6826b2c1a4fd42ac026f46703366b';
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
