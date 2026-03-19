// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Q9LeK7K9lGR/g7tdZyzysLjkchpHQV5q9vCaoBy0FtcJrKXW3pYTdIZUSGdRF1I9f9avd9r2Guuo16G8lrklPYymdj/7Exl3ohot+MhRHjkg11Yqi9Cz9VYIc84SPuWXbp9ulSmsxXimXv8AM81/NAmBlz6g115SauQ7QLxjEz+5HDozVRhMLMxChmighMCKcHzyPo/lJu61pQpD/qKIipE1Ohu3crnW9Q55e1WKhr+42O77tw6kpwZdyTqrktGDD18Yg54gnnIbzTLxdBYsA1EStfUI8ysWY+yd0HNrMwkJjtRna6KELHkYiN8MAs7eeAuraOYmr/0y/ysLbh6amxpd5ljbt7G8glahyf/E4/G/m22MEd74VYCzrFFlhW2DMVLbWmk39yI+/+28XBbktoi8keQBm9a6zWpxJ/ObYNYJFxB60h2X4cumwUV3BAAZGYkYA3kfY0Tdapz7HgrU2YVnPyQIDAEyuwzCmipwfLf7DXC897v68LA+Gva5/UtDn6JcCeWaCVM5neCLEPru402a6CU2osvzixBs6sUDpws6w2h9zs5iafpgdHDf1KTtrUF+tyjLn6oDYo/jVkremRYtr6QoW9JBvVP3cyAYopWri+QWc6PeOiGdms0Dr73tBLhX0Rqnv9EOJqkuUr3vO6t1TiCvZxzaYJ8EMTkOjVId4XtlZ5Dk+pQfVuYyJJfyU66IXNhXEoPRmtvybR5yiNoPSC0=';
  const _INTEGRITY_HASH = '8b19280a9c646cbffa65f0d8adc5042be2d603c91f7114d0a8c946cfbbbcdadc';
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
