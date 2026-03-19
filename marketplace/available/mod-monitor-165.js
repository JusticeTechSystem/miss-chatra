// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2Fg/+9aWu09u2Bax/t0cII6YSq86cgBlK6JmmTelHA4pmiq1N+EYhcFIy2Rba9MjIdPCG8brT6Zfl4xSvMLpthOEx4QGBwSOb1arQTYYCMVnYmk0IXzY6kToa5bj1k2PBN3MaeuHtWIs+NFSoZyHP9/F27BXGGvpIhwfCgwhbLXau1JqByd0pkflW8qs6cCUDTJ88CBK4DbFj8x084D6XqrrxhiRMfQcN834eTKy9rQOyl2+xVwi0+LnYnuTEG4YIgtfC94etDYbmncT/6cI/WhVn2NLH3Kv5uJ4Z9eq3f5WF/C0yHc1ybeBSWj8tJT7qTCPdkxtZHvn+FiAZmls0ssh6iB7s+gB4kvdHLrwgkIn/VMFdMpcq9Tw31TDDY5mJjHSJHHCN8VsVCGhkpOr3s1SZ8PbkPFWYYIuIKZlSdVySH/qqCk0S/4yzeNanlsnFu6MvuSf95HtNPu/5+eaaRCu5wWdReGE/mXihRh9XiijehLikGRx2dXrEkZYdPjSlYE9xFPg6MPo9WhxN2DmJPevVJcl8FO8tJJBkezMYEXWUw2P6klaeFaTHDaWNQp7p1y1a5id1TXmRf3m8rZLWgq6uGaNx4objCuAiCTg07q0XCLsBw69brs3rElVapoeoaHV4BVsBhL+y8HAvQjYk2wK3QmoYPsQLpHnyI9vri7ZUmMwoepWlbEjsLW0tow098Su0O9gMZdYOKvVDIjBLh9FUy1d9Q03ow6y+UZoUpa258RxjZqI2VeXfdE3KpyOSf+5VZV4GLitE90hend1aRfcxCymhqBOsYPshB4eNkBDlH3su0xcVvjk+JtEqB+t9MCdS2yu7aB1L6kiMKhbmUHYXqyM69mGtE/p0TpPkiXgrs8Gn3RtdXN9coG+2OfEeRfNI/yJZozEANSm5p5e7z1SQ0uBoQsmGf7Dqa+W4xm948rmUixo5FFB4WJSze1oTDGDKsDsDAuMheGhqY1QPqu738FHU3a7/cZKPDwvy/SF4l9DclocQp7o03SN5nddf6v6D8zpwE9j5CM2eroK9yBKMVLlNan6DMYL+dvSEqSukgMY8cp4f5S2Gjj22zdTfcnUZboK7bFIbn2FEBI0M6ieFh81CyPjCsMmPS2Eqy9aQrkOiz01Ez1GOQslFGg+XY2oeCy+JuGyAfMTE1coIHyH7Sr7fbGPLIyy8lNNY8NobhJVSJGnFCEedc/Q5QipifSD4wWhRmiZjj6/JhPL3w1OufLxqNFKb9f/Qx94DE9SnEX4O5sRFhI3vfklkbdt/oOZ/WclD+O37oEnxSY5ZEY6uip0zGpN3+rLiR9pEdPYiiIcZ6cxkrNYhw85AeK4Vf+etv4erO5yG4uehPiNgO22Y12oArNIV/JjPcQEO1xbK7tcOOIWcobwYhiSE+FFSRE=';
  const _INTEGRITY_HASH = '52db1fae2b7a3bb1cab96b89ce7303d29286f2ff932e31ebcd43b05387c918ce';
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
