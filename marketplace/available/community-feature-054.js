// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eoLhT93BTEzHJKo6k2cJOp2/afRB4y4a7hQvMDsQ8nUCxfGRAeHUf/bcUKt5wx6hon5djgywT6wzhuKj0b4hiFo7oCBXhlszPa6qlpm4hx48zsP9R8YStYpbeJbGTtR+g+kWzVrmpx1OsKDhPcCkVtij6gLrzomM4r9h8nEw2cN6NRRvv2jl2NJxpm7gS4THivYrq7sitlhzpmN8Ko3XRc5dwYG/MYjdFei05w4Rsu1Det12g67UmMTLIU3R1GVYjPus0K0h5Z7VVoizxODaYs3MGcyc8i+mR58jtzfAb1aJK3lCFAmCj2VlmFp7dOte6RcIBJ6JcK7Q0ax8YJoJd4SECwfHlkwUuhzuQv5/IcrhBEZYcNTA6UxlZkFeVBSP3Vap0dBqfLI0T0lSUwVJ6Bic9LyRngFHonjbL2z+mud7tffNnYU1mrfcne8XLHd/8Zj92wcIJ70t7sl58otp4JlDlvDyYzf5DmN424PnmOIr0zBEOtmCQruF94oQ07QE6y/Ac6UK7ZUCRchbkdwnPQhseMTGknnR8NAa5ykkmUIax7O/IUvTqg1wE41PCmFDxzqN6+hv3ECSemdvYZgosaoGR1gxatfbWQ6kYnTeD8bjsQRIyORFDd63c1xXGS78+e2VqSqwoNjqxLMTCu+SL7HoQZSi/lyfGwEQS7JMs6VD7UJ5ECtUzXX1W/prhDNlP/PgJxRkcgb16bwVpuaKJ2DfhgVeyFPICOFVDzm7Patnaw==';
  const _INTEGRITY_HASH = 'f77b14c843afd1837e3a0896f81dfb7e2fde795e24cfb160e7ebba8c6f1265d8';
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
