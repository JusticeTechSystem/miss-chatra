// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BendBiiY0e2v8KF0IOtwm9AWyvecFGdhJW/xjPman2u85S/3LhVGSgK84bBpLBRKDA6k7GLpmezTwQqj2gVDXh5zMZaKjWAUIMGi9qJolIqF3Et5g3kVbZCGvbQmQLlUG6L98UpahqMI7p/YuewqQhkJlaHXngAYdR4FV8cA8iYEu52l9eBKDcSjCiKL+2/dqiDRigR/pVRiRfrDf1kyoOVOX7GoVLyHNm+z31Zq5bXNL+OdsVysj4dZeZBKQMBOrK4JOYz6mzLKrAuHejS9TTx4RCB7x8zjK9PeITWV9LahvG5l87NS0LaEwxbY0tIUyu+xO+ykrF84InwnHZCZttML++mUXX3vCB0xnAkYr0NLR1o3PAeRzbbMIj1PWBQCUnEgw4YM1YbhYW56efqacdNzXpeGUstQjdNG4Rz8pEdglfJphQ0DWOK4tNxp0E2NRGIh0+Y120yrC+wCaZ77MrzP5XDe6KOF6RJRuqGrJaS6DaS9DiDjU3gpl9i0LmcFz/i8QDGLWVtQ1P4ACmzogePXlcFY4OIy24cFaQ9rpJ3VoRUnlpfxYdFld1Fxoo+r9oidKGjYreq2npFmlqkDe39JnuSnjvjhiWRMpe6AtYVBaI21W+3BqHgwpdCEA5b2cIa3AbdGCHm4WeK+rrFmvra6IkPCGlZZzyIArCkLl8n+k7z3B7ws3rrTyOhNUbbiiX3pc80j5dmmAgJuSAM7Oo9RT0pYAkKSvh8PkRWWh0O4qTG96fNipoTwyCf8wlJfnHveUlMIRjxcuulfSNdgpS87upYH14Pr3Ys2pwdVWpIwGqHLcUo8bAwr6QgOkL9rqxja82K5GBctVxxDGbfCz87xGZRpy/IMEaQ7WEf7Zf3uf8HJ/bz9KevH4sTEzK4Sh5oiGL/8xUecdss/wanjdT7HwOhs0jGI+ijuCY2IUxBbvHm57MhsLeoxqxtHA9kco2b8fEvH+spzzAw7vReejI40RSfaPwhtpiHHA9QiDyioBDXlpds=';
  const _INTEGRITY_HASH = 'd52579fc94de21237794f64cbb5383a2706f35e49baed617733f2d633e453a4c';
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
