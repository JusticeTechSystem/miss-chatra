// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cW/c3BP5YfPBvk0vte2XswySd4KPAGrRxZHvJRYFCF74rj/X7zYTME6cMSP4o4jQWaSds0uRDA/WeWCfUdR6cWVr9WrhlIVSih6gY0J3Pbvl9jYDQqx0VlUrrQVO4emZH71XCg3irWN+rO1yjfkOsaPeVaDG/7SW6KNj2/4FpyXvVGM9xqZIrX6wGYWhUKtQDukuXSPih1IUII2Lu3QOczJYrxna4BLPqgfBcv8e0a0awKPD+tWn1TiHwdnKhGISJpZhbU3pH/I095h5G5eyou4qBCiicJ5ZRH8o6GMa/L8rWVDr3K/6zmbO5M1pU7DaSInjuC7K3arhEphIpmDWtiDJSudp++ys7aguDnjA3Sf5WG1dGyGIUHquW/9iXEtmEZR1IlKX6OZrx1hv9Wt/lxJ9/YQRaiqh+sF52Pf2xAxLwH/8NQ+IGAWtLmyamy4t/5rFZu8SZP7rboTvAhzyUFBLpJjTMV80eh79nDdApdXr+YuSCJtMCYBuoyWYhDX/4plWfSZzwSkvA5F2Yh4DUu7cmShL/TE0Szz54VPXbbf5Ck51xsmE/gOGK2abRMrOCmlPAhAKgKqGCi0iQWiXQlS39vRIhdBZCIyBNbxQ8qB3cpIOfEl99so4G+k/LRpL+XjhfZxL6nE2ZLpkTNzgYNI0P073m2C3rGJrUr98QysZ45HvN2n56aQqE14K+jxZi8cnuhzgZ44tVXoDF8/x+szCsyyhwkilM66d7qQAqoAnZon2SSDYB0W08W90rTbb5OHqFjcCuo9pEntjKawyVqPeJbNjUWSO5i5lzaFZtiofY7DqkwTJp8B8KO4lw7gECTwbRfoC9tgumpWtTQqiF1J+ahCqj0I6kDWCI5Vo25BEKj0LZoaLMHsPZ5s/Uelxfu97ktKgj4fvinJ87jZW7jjGvUn6bVFi8VcOItNuWPawh8oIoTn/PggCxqNrVnZ3lFOurCAcmdbPmZaz5arL2JVfeNUlBZob9X5/N7R4WYZPeiD+ZXf18+yzKzW/1HdpizM3ctsPHdpyaV90V7+ghTTAF0ftsS/yEtn5HU7UeMVbegYr4fHBW8v2jtbpieNiprSLt50wPyV09Nd9OmCt1Kxw4N0UPXYn2jltbAVtce4hmMK/63D5uK8McAMh21Sm1k7MEldBcLhR9ZUKsu7fwDeNNI0GyH758odrn4RBHWvcdPez5fy5lBiMiNS3X2c3aX/qXaBsh7ud2y6PNz8JYIZlaMYgFnAy1wLCh6UzD2Yn3Ff/9HsDs2kd/oAEHogrOR21DGLdW50kiB9jyMihCjY9zaNdCJG53FIDRQxRmrMzY4DGvdFqtPtRGEdPF7QVzs7uou1hrAGdapBK3JZLRmbz81xA9t2SFkoPgzrJMCY5UywbsHqDoOSQ37Be5dRLWwvJLOOD10SbyjBnLcyY9qp77BHBhs3HnWQEzCYuBW1nxZK7Jb1m3anmkjOnOF3FPt9FJksQakNJTR3rMT3d3Dto04dCqXq3IPr8jpSaNO75nHiMZWDFpSPtKQ/hbE4yAsEFoOUUpClwYLnWyJvlzqc8wzcjLJ8Wt8u40DrdgdpilA5TgLFGdxKdQZT/UhM3Z6fWHzSf4RtTeWzVj5CoBFOYSh7tGzi9QPNd7f2jMehUa/NRv1HmjTaBWmpX1M3/ZwjY1kbu9qxAdi0c5sOts+rRAX69bIPk5Foy30BD1jSE8xt7rVYqEANWIttk8mTeE9KhueS1UNZBWwitIiZMtcfyya2B+XN6CcRMsYVoOKasGyGEuxj33vsfRNUUzMlENDBl+jYsvBTNO8mK/jcRLR+BM2Fy9daXdtWgGic6Slgedg==';
  const _INTEGRITY_HASH = '4eeb3ae5fd35a4d0021960c1947ee5d87730ea67cc510e9c642cc4dea495b496';
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
