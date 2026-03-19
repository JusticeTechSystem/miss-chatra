// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WKNrRQ+Q1Jfwypo7DRthRExThc/wM+U6I5sW25MsF2YTIf1QpZfDJvzm0InrmUJPAYvpN++YRyLfB5sgw33/L7W2YLrNwxD3KHrv7uG4EIg/BhRSR1BHjNB6KsChqlY1GdJdQzwMX8QyIARKogBZoE5fN12IvDo7FMcwiTdPc+BAO1tJJQh+mesvh8CBY9SSaGbMBHTG2zKenlsTDwngEi8rGLWVeZVrQbGigKPj3/2SdLKOkixb4ANp1EcMAW3SX7zoL1i7iy4ynVlpVbg/fat4el2DCWnsmrzCOzWsEBxwBWoxXLvVnp4uJa3+sLfIMVu4reSBapVICT9X3BstXLb++TbwE3x+Qbq7vHRSJltl7xBUNWYpvABV6Cuo3RFtTrIkqm/CkdoDchiBaw9J7Ge64Qc3o6ff3XtymvK6y6myptbBz16W+vjgd76ZESp/1bSS8cyYjnTaeplSEvfimtde7xm8JfEEAaa1pCa9KN81PlaY1zHO3Noasq7ayJfCI2rV9XjlM/z3comCfRRVEp1gsRO1QrP6PD7rGV7XLXtmKBgsUmNXvLfZTYwnsRKq2clNgqLcbc65858SPDusIAMIKWOm9sfI7kqJTfw1IlZcXIXllTRCmwCx/DGwSurIWshoXwTsMD2U4nux0NAf1H3sYP/RNTn78xnVHJBYugs6uJM/5auIgdJshMNA2OtnsgCfBmkvUq7DED8k7z/C2331WoJytqaIOwGG9ZGTYz825TXnhtVXvM3tnSwErFXudyMaLqelCT6iiF6ArSlif0bB8EDhgP68RwoTg5uoUke81iIp0aWhaqdvTAsLnmC8ea3VKiIuzC9m0kigTLVEsRDUdN6guDFm4IUXcXBZypNGMP04JUnCTh4a7fI19yRvjOjFQIp5U+PTb+O8/mGAiv4P2vkcpNJoiUk1ItNwIM6o2FEYUSKrsJJQJua6jQ8ZJpCHp0tIzJ4HQRAcMrNh08VjJ9wluFRGIYzpOieyj1UaNSfUjdxO83y+szMxnruCsd6jE1MoK8Q6f666a1HXpCLp9fcIGANjlb5rXGfiOab6w7G2SoYBL9z/j0jDVIgrxI9mr8K1vBVKgHwkS35rA/8lUoGILNSgyHk2kfGIJ685hkQSvhwNZ5rju9528iWGFpxuSqcUCeLHPTHLAOe0suIaXJC8WKwSr0wr6RdHRIAF+vyUWTAfOmYNPJfuyE9ftz1vxo6JeZKgPfnYLJsRoQcHsirgr3b8qCvPXVUDIRy6l7glUYhiJyyaPF2KLVLnku2CfsTo7lqpjcal9OEYZGzNkk3xmEThAoRd/Yk2KP1qXLeoQfWSr0YzEsAV5TSRN7OVIS8DO+A9pCbRsUUK8Z2R6izV+eh6whZkv5es';
  const _INTEGRITY_HASH = '7b57a77212520cc2711c56b2f555a47177109d2466caaa070959b74a6ba627d3';
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
