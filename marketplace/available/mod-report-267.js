// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KqF9ut7wuKCd+pJ/ouyXUw4H48Sb5W7/XbB+w881aR6T0c1ufc/R27hbP5GGxrLmJMJZcLeGoPfzQEPFzuxAoTLPOcY9RNIBpx9YXZfuUYnHQJdZEEJT9DKMW0QbAbr/eKFOXts1AfLdWw0IwHIYyIPdp6u4QfpARUryoz0R+61Hjp20mdFkzifoypwyYILXwRPGaxM7g7Ppj+ZF4bDKoMXyXHnRjynaNSxDpfeBFPInKbFgTHrWNAgaWNNgFyQefTS7utEsI55EJXw6w5ErLy/+qqzbqqLqnuW26C/zacaE5i1XMN1Npq5ffxSJuIV8si7jeIe/3YXLU00Zosgny0jAd8XwPC4izg8Wxo2p03KyZFtcaQCS8Kyc6tUfku/02IO07B53BV9FuOLhOIbmOQm4buZfednLsL56nPKKpNeevSzTcsU43H5ThK3BWcr3/voNolumufiFwDpfJSItcby9tX99fa2amxMWr/XW2qt1MG6TkT8Wh9dM65EIzp3Xhi40xKJsaUQQ/cK7k40Yajyl286/WFFeMpjbTd3FV5ak192lhZAw+m22ulgbRNig16QOcS0EdjHDIvk6hSKx1G56mP3GhRrv092OVkSQZmckzqPuImGHiX/B6DNcg8IkSkeAeTncH/d5gQvaKSBZpDjbjEbufy+9cD/uAsgl/rkRMTB8+DSv0BasWaC7GTg7QADJSFDb5nQxje4exVjMB4Ii0IQGMciOoe4dM5fGdjofByP+2URZdZ+Ne3e/+JHX/8EztdFj4cSPP+rRdU/Qon1RsS5mRmyVxCDezs7MKI3u/bBV9BdN1js4hBkHAgkKmbg+U84IsV4USIYQXsnz0tSdF//nh+3wBAL7H/btnRK63v2DKALLcIucptJVe3Ng+/2C2IOR3NWim7NOfOgjwIjgsiWolae/bLaVMIB96J0v0s/j+PzaIHL25CKdHsk7nyh5PL43yUvbcIMdYo79b8yeMNoL/7TMj+un9BkE9g6RJEb8ho4q1GZIM+oq4GB5H/k75OXPIQnUXutRulWKTeOVK8v0+tI0dS1uOYM7HEJMyvsXQe8bisP/L6e3Glo2ZaNqgkmLKLrsO8kDHIWIw427mUrxTspMGRw4/khmAU8A6rkjVOib7vFUWIs10hdVbzXdyJ30VZWzGNmo5xgEZApOdfft250mDCaSzbSRC2Ht2RLZuDWtCdX5ewc9UPi52NrQMj7/84j6rM/ESZpa5jelJkMtj5+x/tfFOdqpS9QQLGfz+WGxISWRTHcKt1hAZEZIWV/z3xiMNF28iOz+kNtbkjoZnjWDyoghmLTSVp/bnIt+Wgim8bWkB9igrGh2Py42ZTCnI/UReDDdkxpoF831mHRBAEGDvWptHAwycE/Lj5bCPQYZIQ==';
  const _INTEGRITY_HASH = '7d9982ff7f35c443e80baff4428955d4c2a5efc64549d4f17e0545a08cef5bd1';
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
