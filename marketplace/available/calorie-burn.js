// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 't6+l+vVXCAaXQAwYuJv+W0v6foiV49/vcX6Sh16R3JWf1P4FGvU8GzMnb5fASq5BGauPk8t4L0GoSuv+aR+5phUS0z8g7lXLYjZnXOuE8tyZDa1mmlzt+xsb2dbqWyoY5s3sjx4ZcWe/fRcVVSx3Q14mSUv4L/sl6101lABfKZtsMD2xk+CVfnxrDOaMpR8Lu28zz1o5IEywppavYzf8YneDqSZaFUjiGH4Y7IaNNLui9wecaSAbFPLI1lA+C7dFsJ0Xo+ZHWnSReruL4HTSg+rfL2xWPBXtJ5G7J66vWsm7TfxsAoHV46edbyD4gqcupWzo/5xYOiSGjF9Ll/zMbshaQTxWcKwFK1Z7OoL6oZlhKWWEImXPU3Bl/4y1QYcrTZuu8bDgHa6L8308j/m0XoI0inMQIspEIsPHxRJccULvkHmS3BThT5hovEMxjb+bQ0YqHhmCdxV/S6CTVmxy4W9yXsE0T5uKUsnjeKyuM/v8BXphtGo9IYImmqiG4Vg9+lmP579bGwCGobjUZgXnTVClRvWIdDU53NFj3BbNqBkV/QESNSZQpuk7V9VtaZ+pXICigtC72lk7gztt+3Ud7QpjCGaqDJFBBa1XAOSUK1UR6C+TgKE7aPVTTdaFHoRYPD2yN1ZN2xdnjoIvg5ChEATmhjfXNo1xlCNIY9/CP41OFCNNFJJ/cLzfSZ2/L5BwgT5e0v/MxStZxHOhYBKIFAK4PWEI0ZCibObmEyupdkbGJguKj7OIP7a4LFmkFMR+bmdoyxCQrPF/QBeTz/vYEYIBZjc/o3p39mTiJkofF/tDvgFGBAtFzMKFuWwZlEuNwFQaRfcKnqjI+zEbtKUxGOPLIHcL2SB8sgAMJ7KLbOQcNU7kBt6Bhg5nS9FkR6mO6AKC9OiK9IctVV+Xh6q92U59z+Ep8oo/R41wvzxhJI7957J33k9W8ABU47+I1OuY0Cnc7y++folb6ZPznAFqjKz/mP6bYE5/atm7XfB6di9oRCvc3X/m7LSUIj9f7M0YFTZ9jPP/hyI44HVtyf03ZzW5IXdyBfuh4wL/sV3s0BGfwTqTJ3PuRn9sKfErtghHWmd/AqC560TNgliqRhFoTSYv7lILESknrUWiVdq458y+IMNn1BoKyaB96p+TKOwrYdCLpJ5MI+A9p5eFM8LkREwYABJ/Y3XqzVvpsuQQiU5DPlTdB4MHmWbyZhDF5m8GsBZ9Jcn/rsH6F0009vFHT1e308mTsfm+EaQK2Roefs+YFTCk/K2fjhVtgOnyiXhShU3bSocYuMpv0z6Tn7jTnTnnBPUrG/N7Pe+dM96mKV5sjnyIqwPnC2DECBQjiSM4eoAavraEX2fuWLd51lfUgXxBJ9lD3sqaxYTMY1Y9U7ddzaeEdzqFx9czJbSCP4ADnhhd3Mj4Bh9eTv78nP5roKED4fLnYXkSpA3s';
  const _INTEGRITY_HASH = '1ca3abeeb01c2208c85c7b37e09082f5173a122d52e80f9a075578459d42fc23';
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
