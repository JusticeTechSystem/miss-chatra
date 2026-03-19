// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0e8p4npYK18b4MRcwhLDt7ZuSdKBm+apILCw/Kwm6NHSatWroLSmvZcHfxYG18iDPV36jMtZKyEPWMh0MA2vz2uJFwouCYhPWhmKhSCOFRvLi1CqtVi0oNFphaTQOUHqw87cdyjnunuRs5dneblSJmI/tAe/jhsVBg3u9INGbcJkzNUfsV9M1RbbvKT4YA2GCET3Z7qJ1WCSChUml5M9JsYq3HKBH2EIX9ldgCgHDgjyURno+14lBoyXojN+qzpVeBbB9N6BEA8Fuhh05fJ+gSfo70FYjRayRi6DQleA3qufOgRiq6BAQM39EGX2pjIDY0ditY4e9vpd9YVpWl09E1VvkqCvTPidcCy3R8x415207Po1aS29kaYZzX9p+FASZ8DTYRDGoSSbL4SCjuae/T0FvEoybVwiULPQlB1mLCRnj1HCoMhtYAod14Q04/MKhg/FCIqfUi3k6zHMRwB9x7C4ZiKqrm/Dxx8CBbFD/a5+lHoc0Bdv3ggiEGyVqk3bEUjtF+dDJJLT5zy3vTraztUjvJlEkX+Rq9xGf+8wlKlGKqdad9qq9PxSFJejwuwbR4X7KZP0Cgku1n8KP2HNVG1qfepSn3qrjEUVGRMDlmaeFzyCFMPMZYTi7nBsGlDuaiu2TRt/Dr2L8InoYAf/UkJuktbKnyQDRonyRUAkvMN9sO7rq7LCklKdF3wtFD4Bn2DdSrUHij6fnPTcbwJzGBFMCBTtIdkG82DoYyOQuqPkhPgXqeNLobQf4S2ueLwjVpaqrSwurlnenEIk5xWwEtEFxEXLMC8PiyMQyD4kV2KTduy9mmT7QdGkrWFSKkBmFnbKvSa/wa+SJjc+KFTqoz2fGnTlWg3Mn5WVvoBxiigMx3qQm/nbYMPgbfVjXwimI+J0rgcrACfn/kp8I9u9ZypsuH+jF9TqQkUgvu6aypV3u5fKSRMcCZIwWW41QN6i42c4BAmfdOr9gV/lFqmHqqaEeZSK7RrRoIg6lecWhVzodqPAyjM3KIB+dBJhlxHTI6JZ99cq2g7q/3mfXppPgPF+p93TuXKbSANuQ2cQhyu2ttU1mG7Nx3+Wn5yAbYXA2TI9UDT8ViAanodEHWu6QTHM6cMdn4Rb5tCOAmr57VxR7kYVM51tcTOojNyfpXNZoZlDf4De6BVXX08G2WMJ/UZ8pn2qFnIRZWOO/UgSwI5yEo5n5HDb2nAVZSw=';
  const _INTEGRITY_HASH = '0f5de6eab5cb8cdbd19aadecb7e34ccf2ede75f96ddd17ca31875290bd95c393';
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
