// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WAXNj7sXp6UiRAWY2d0EebD1UCHUAAa6IQU25zND3DQUXBrq9jBB2H14shvg1TaEXToars6m0DgdXikgtqgeeCq7OLJYq4TMGKjPGkHy3+3WanVoMOObwCM4Kri4Dth2Sg3lF3+Kx7Egeo06Hhj9AEmu8OoSvZCsGoyZ8UwqQ8Z24apvpLAqvVhWgwaDB0Esan1PBhNmVnRY4TWc6oimLnCdsAQOKBL53eh0W7qAYm2iZV7n9DH8OELI2iZ0JXX1O5S2RdKSoIi0eXLujz0nk6leH4mOj2wSZlyexSekACK1G7y/LsKEOj2+m2td9gsUnRM1UzNFF5loBH/IDiV6J+l5jBLEb62DUBQ+olZLAScLOatWqrCZOXQWsu1E0+ry6pXhv8DeXOGBHVENoVLGnUcYpzPOT4b2+mubLf2PfRwVQhN58G+BYMjZURkl1VUZrJeT/IrKZZ9izlmuG0d92SKEviVkv02C/zuZpGJ2rHelcHeVGbm/a4nIPxGYcfVxA0gqZAJSGLApqGfLS42A8rd9akfnZ95qOpi+uaNURWbrUjk3Fe9MsiZxRG0cuDNiSWLNiihk9slkhAqlL9MtF/4OuzR2Uzc+rXtjVOn2R/Qzdg4fX2ALqEqEIw94IGgM/5I09F7tAHyRoyCbuyjVL+pCRa3IqnOz8TrLYIKTanlfZ6gaq2bxFwhncLAURpQZEo+e1yKP0e3KkC4ll/4CcyGBEEQarWOdxuk2h9Q0AKvQv/Z3mB9y5v4u2X0Pn1l4Cozkv1C2IQT5698iSHdoOB2wSAG5R4QecC1nl9z/OtmqvK6x6rn105nGN9ergHBi0OqkoiNfNscAfYrWfZYH8qzki3u9ZksIAdQzCfyyh+qTGwD8DN+zgp/0nJUvIDQ+T0LuX/kL2ry/vvyAoINFv+gNV3B/yyjZWj1eBeMXRgwa3jmxJ1Cs02WqPB6WgJBFbUQoyBNY8t+wNVr65QpBp3GNHaVep09RYSkKRAVqxoTmDuONx4vlTlxFjCgCQ3l6iw==';
  const _INTEGRITY_HASH = 'c8de82193b32bc9a5123c5a6b9b19383fff284fff19512d12649c37441f420ed';
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
