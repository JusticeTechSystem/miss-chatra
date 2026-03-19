// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xCKNEyJZWGx3xHrp6RaLfgU0hyMsZH0tLqodh6ne9PrAcTyF4giLsxdyQsId7EJMW/GsGAh/0PRJBON+zy2ekRtkMCAjSEnzyhxSm4QmBa/tauR4e2hXWevT4/438BnrXuMdBGHte0QSC4EFt0v63y8PRwSPCh8SrsjglQjx1OwKeYTyqWr3Lr4E749xR3wmERnM8Qi6OQvGE+dxl53AgysVSEXAGuYBKn7F8HMgf3/ad/B8TwJO7GusfY/XgDV6v5wHgLshOjSDnU/ahBJ55VMi116ndUkfjM17heAGFmR5qsd70zx4HWAtte+My9ELuOgLGOp5GjP1w74IVq37O05sVApa8Na8qNlw1KEcIZSssBSxPQyB1vZt18MD/zm5frSloAx4AReiTsPx4dV4RETz+j27wrAA8+AZhiCS+xhxwLiaqDAL9JM9eKdXYVgpxvLoPvB/R5Nhu1erOPeC6seZT0YQ0Ys5GjOK3oNa1HVWWheussIRpvUx5gnxpviQNg4PTHwgzKwT/7KBuvja++3xTEeEhXO15jgCanuYIr2cDw63fldQtEnedT+jOMiMNgc5L5YdYYPn0hdpNIYh4eKFJ2Ja7P1QQi4nk7ynqts/S6yhZYE+0frOIbG9fhWtucpBALlJrY0gby2N86xgDXbBQrRgGN4RFbft7joc0cbwcBenBGMY9sSsyiE4Dt6nrOM41JjPfkaQfKPii/bXuYGzIma7hcV6V3Y9';
  const _INTEGRITY_HASH = '24c4f07696f2ee9b7ee178b61972fa222e04893be91f891cdce36327ce354cc5';
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
