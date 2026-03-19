// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cu/OmI45hsk7wZyQphuXbYUpHfXC32bkI6/CPLX4CaphrTwGCFitm9Xz/L96r+I1u8glLqn2/7VydCoJb8FXLIu53qOq9eYHu0eW2WZ54zS2Ccz90QZWocnkseAnLtjJ9IdcLBAyE9z2SiOic6pxkUGc5KUaSC6Ja9NG7ZmVKn+SSYAD+wU5P7YbKfqBbH2YN9/N59PzjAKG2CYdDvBvP6ni24UXhjE9r0U8pYCEJhMbbSN48EQJdsd2knqYIu0JGYzUbv5oGxzLtn6rWUrUlnC0VrOFCACYWn/xTZ1GViAUNjdPJXDTMjW+q+89LZBmuz2RexZXciFlflz0+9BC4IYSon8j0gsSh5Ppcpzhwr0AA+sjxbVvXF4pUa3Sc4YAF+8V8QuLF1EZWJy8bjTQ+r0hJRUycjYiL+xm17nTOANVqwd6jnlwF93svS6TTGUTixf617cP1k+6Yiy2oGrt6skSsveXBOkU+eCdmSKJ8PSzXk+oPu6E9PpwYn6vx0VARCw7RDo/AmZ68t3bj61RoKqb+OySzGQIpTYxgm8ihoER0Y0377Yo9qA0zu/gAvs0UV7rNIwg5ISdxQGG8TKW494lgT1TVL+M1pcLmaWEonqKOIEMbwszTxcHneYKyfhAQf9Mv3XsHuqa7ugj3xf7whptR9u4ddPDDayOwdDHd4Kl5m94PrmVf+dTn2onXJnKTFQfcBRSNe6Tm7YGHfekQTUo24MP+b9mNWRNrTrPY6bbtDsFwyZ+CbiuyeVHo5QMWCTUy3MAdHgl3vuYGwPzTA1If6zseCfEBIAPo+nQ3NehuRZpmkUYXHXnqJRymc2PU6sBN2sc/AQNvc2h8tQRAoXkPodD75N6K9nOEVu6AVQinHToPKaIcONt59SRD07nnlX3y1yz+ZG96srKgtAyMZVo+M/Jn9MIkqlQBSX0N6zNsAjqorGqAJ+n+oOC42t6uiVNwoO8d0vax45IwxrSzT0iz8c+uaW7gQ+eGkbMLVn4vQj609bx3kBq98fzOo9LRevLKIKjdA+s/kUf9Npe1f1R8C6sUGItgPQrQ8Tn';
  const _INTEGRITY_HASH = 'c4b841a9a534fe24145c33badc705db00cbb6fc4dda269181e23751a74a64f99';
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
