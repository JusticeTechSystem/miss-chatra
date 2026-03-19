// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eGPvPbMuLP+Zwi8X0CNxd/kwPyfZwxIkO3/1tzT39C6ZI7+lra0O4q9jNCoVlvIBQ3WeWEKBIivI/MrfZd9ft32nhtlWuX89ZtR+NG/CE70smil0+5YQwyCj5z9gc3Xo1x4+Tcv/tnQCjiJ49g3ufU4Um/aVVv3VmuGXN7wiHSvcqZebuHbVFciZ6A6HpK7amx2oBmcvBdUVgYVvtEXYUxVU8/jfMMddULdkei4MTI+S4QKMFi8s5Mnh/MgHZJ1U6eBQXvFNdNXqB1cUBTxsXTbchkh9tFaV6lHW09N25Yj7F1Iz7yy8ns6Veod1wHbTCJdHT3SN/PwY0Q+MA/x5K9B5BndCk9eFbBzA6PncRsjLEtIcOKklrxkJE/XmVoFs9g5seH1M3k7vVSSxwpF4w8ULSQtvhkusnyX+asHe2xMZOFF8P8QhO9kcYoBZbRFNJY+cvLgDKiDUVEhh/poH4hsE8cVD0W6QrtALw+y4b5kdhpYf2pFq9/sp7xG/fiTAHnWQqh+PnXw9Agf5Lib9Pu80/D6nKoYOVqpCyU7t+9SgOtNogjsKWArx0S/S1ikfAQPNp2HG5lZ+77K+Aka7ZkWrhLQ+lMCm35oq87RxFFauAe1JKxN7kp8/ygUBKzbcxpttGcN2tebLQ2IHtcSKpiaGtT7N03ehyk7q2rQhaxpdojZcJ+j6nBGxkJSV/ImViVdLc1shObyaqEA5tZLrFGV/F5GbuRtmMhQib8AKsb1P+A==';
  const _INTEGRITY_HASH = 'aa63cca097f838b60026d56175889c22756b094673532625acd82adfd43889b5';
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
