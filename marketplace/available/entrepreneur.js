// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wkuGsovef2wMb8jauU5V8zGs9ZRJaDTSFbBhK1nzX+E2d39KrSDaPPg5oI+BHw+SayZjB3EjpszV79HBLtglyn0qHn0RAO0xt0u9RTtt7Z53GuXD8n1ZW/y6APOatHZKRSAi8cwlSGxGhpTx3ml5OX/Ygro/1AgPhHHPwUs8KeAeNNhh+iLK4GXqOf0boKJ8kPnn9zajcubNwAA5nWwlcWfXGoQHNJE+83VdfbJA6INjwTUuBlmZQ4XEQSYFDnmaoexBl9Es7c42nTbYWcU+iBO8b+oMOH/TkllYlDef2447zcsNJwFUcAKthEekViC7W0D+ks+BnyDgkjx1+cRg9N5zPyDFfq9qqWwJhIEseRpKWLBuphozMcV2vL0R/4L+GXA4Wx4UUNZDtS22JvRR6CKN1KBhipupDThh7mdQQFC89EqO4O57y+Nc7a3dwWJTR7FnkgqE37RjM8OIrbqsmoPKv9iH/CpRtGhhKrwu4rrouSK6ggeEdhTMv6G/Q3a0rBZs9TdEeIdkxqXQhpEHGOkyIWfsObrGBu+RepbF1tD2XmL77ZI/Pm5E0SFn7qPpKNxcGtHjE7Gg5dO6gLh5bnbeWFfz49LqhdKedQ7DWwH7FWkyyy/i1s7Td4i+F0CSXATnudwFnbp3d9ksLOgUezqdMu6DvWXL7IfWffOSdg5g/MvZRazI465hN6ryrtOMhPKsh/6iNiHwUW17Rnxo/Tc0hWMSMRA0ekMfPVBF92UhKvo+gS6DiLCuUvzUAN7DzGm3TMx2RSHQsgzpqXgq5vB4ooLCwe53sSR9x5eT/0qDhuiN4F1HWQBJJg4sX5WUPFxvlpf5w7aSjNFZpCpi3ZqKS2/1lRmrgApvrqL0Jn8/TUetkaQRTphiMlEqcjR0MTD74UhkWhaMkzIr5bjP7EvMRx8LyLtrPLcdEPmkaOGlcciEPieVbq0yDPpuFxTazQRIi6Km1JO2k+YEvb9AA19XhwOsge/JcdXxXYJdQBs3JVahM6q44UU+PBvVbG6YiRXp2hNwOpT+FrOKpm/C/b0ZSmUWGMjXdgZOn2bvHfRxaHcXLuXN5PjhN/TvcpMiTB+fzeV8q8185MBsY77fC2x1+SMafHubAf6L2K6LWTQ2wvkcmnWS3jypHQmNlu5FRPBG2EOb0tqyPJTiuYNCOFn9lRq0dF9oH3cTwhued9UrP1se8Fkfi8tz1kh7GLdH4mqQ+ejpHnk=';
  const _INTEGRITY_HASH = 'f3cd18b25976e85cbffc5db9131a0e1f701347ef67e0ba370351ac91dcc56d3e';
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
