// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U2FjI+p0A/U9JfM7xKLsmdCvC4z43L5h0PsBagjiq3WLVCMMGWbOCMV/BHhOzItWHVoAL+s+1oiHv7vSuyqC/3hVw6gLhRTsyMarbtKFAP1RKEnpHeq3wHOKbOnb0gP9yihZzH6vbkcjV9wrkLIIedt4BNdWjcayMhsaOFjZCABzRbIDKHwZKnuCmdfrXPTkUprlPNgjq+uNJCPnVCf1RKovpRAX7JV+YL4bL8cysytn35j6+RoNTiygYL+DbLY2MG8f2Il/WiW3HGI1uQkkRVGORZi0lebCOjNFPbukurT4rChxyg52RkmJEXraceLKaI33ta1e3L3IDrPFcwuHrkEjpc4vl4k5zkIPQwG7uNP7GXX0ywAnmZ/f+2Xofz9Ca60jrJo8m566gNnC/4Ey4YwlMt4RH9zUyB2tRQI9D7d2CcR0NxGq8UUR5J/8xHiTGz3rLe5VMK0/zqh6YBXOywiRRzodQw0XRYwktaCmJOBj06dheY9CrN7gSBbcM2J4H3KObixXD9CsFiD0b6U3xdtmBx+1F7HDlbJxY9skD9C3+KpW8JFiKdt+DcF3MlTDvFffHRFlOqMR8uzij0WUsgyh39LL2ysdrQD76T4yNLNPd1Y6KeTG3cJraMUqKQACD12IZbX2EpsFJBwngzIcF5tfeV9YSR0vwFB9mCtOlhBzf3c1qfX22MZEUAvjUwdobXIFaJ7rHjVkRt4buJo/xvY+lipgozS4dOnof8WRDxYajUj9ezniOIONpqm4Ecev5IJzh/jKgWdLsmyr5W+pGPXsST930wOUzch274WvPSDzC1uKjaw/eQm+Rkr59alSMgd/CRzHyRjDTM0ixFjDQjrft/n6LCxzPskUpxaXXcxxUcEWo0scqswR/DFDODi/51AhvLV/i7+2XyI0cDyad0uywTd9JBJIjgVyA+HE7VNWU00E8Lm5RoWoeRzrDTvS9PosQ/Iqs2z6rA0MP9okPRWYsF8gUYLNRacqnmGGqsGFZS38faiSuoasI6ei/PyKqA==';
  const _INTEGRITY_HASH = '9cee034320713113ca111a2e24658befefe931a891bea4f342f69ea156216505';
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
