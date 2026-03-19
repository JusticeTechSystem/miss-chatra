// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'he4Aqj73zslk5ec+rRmOCH0a2fA2aG3jPOcz0R5IC0gethjc5CVoftCpO8A7tGC+gu0CIAKFJILmbQJTdMDhpLNCtAB7R7otPAKqD3+lu4LPbEnYq75j2+WNqw2Q1smkuWih4ve+3EYw5QEJ+4MnZmoJM8t6itiVZf8vEPQAGQZLw6bZQEmr/sUWbGGHc37MWZlyAF0ej8Pa0xTm9YN0LNnKi/ro7VXNIUOODKlgI9AeJX0siNBiKiShk7/mh3XW/i5/ViHLK2okRD3woLC9I9R5t3A9S4WRqxiJkzxv4GZiTNeifoNz5XO9ckgu6ICFX5QpkcPiwTusW4UPM96hZYypMOSwnU3yQZHylkpmNvCv947qTD1G6VrsuSx6C1eaN1/s0yiz/xxBHcqGLYzxNp1LRa5Wlmy61GQCHXlyKuodxwifk8QcQhuWVRJfH/NywlDCmfMZCd2ZhsR5jhGF8Up+n6GhS1s/GE6IIxlsxUaRIlmZ1Wpq7kPrzmkR3BkQ8bF1WD3+cyi5vcKmDNFpbzhzfgumPQ+tjJNhrCTHQTER7sVQ1BS71YCV/21L7W4eLdr7ZfM2pxTi4QQyvLhEbnL+NEv5syVdr1kiH0EsigbT41aHVnYiMdCXGLx6exsr2xCARjJi+vJr3hz8865/zbppUhyhoE7mgC2NLkzbz2MpYeb1OfqbidsXZNq1dAMH4Fe8sUDAJVZGTNWtRGOoelfZRxlRlASyW8csrxFPcakby8ijIvT9/wAuKkbuzaWAqXEhS6j/m74aOTkSIPywPPWH+pnDbgbsx8aEyl4hVDj8EYtefZ0en5XkE1G76vLxK/mT+o6ApSvpbEIz4+CQNeMGqck62ziKElfGXUNeWfUgHjPQ642Ujd/cg+TLi+mjxB4SCuFuriEUJoNyhhdgTm1CJB6o036PkyFAa/us6zxLYoC3NloafPctZEezUEHIYukTda0eakUqalon6Unvf/5kRqS9PtQUCUqlkeNcMOwFLa/La+R3FuqnvhRx';
  const _INTEGRITY_HASH = '08342ad2ec04a7b7b8ef3405a17fefe215b15c4b96dd5cf9882d72913e668c43';
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
