// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PU6narVAd65/Y4ML9aQ7Qno/9zUlJZC+8V2nJ/GfbLYc2aOh4Q4waGpcyUf/W3AM/Ai/2/uE3phC5AfOqa+vsZXKRGIe09nXzhd/FUf03TnYPD0gAgjuPTi+q6I6XPW2H9ND1zCfg9PW2iEEPR+KI1EFKr/A2wKlUg/EZhQBMfZTaD5vJO4sYYUExRhr7FpMaKsv/B+UkQnKLV9xndqYpjDkpVhHS7frYK09m6YP+xPzpLNQYeKxqevR9J/tgcACJOc8HvB0x+fhZBCQCFp7+VnEasT7iGqgdPAoEbxAPDT/X3OnGPDTE5XVEzpI9siglQO1iX1SXOUnUWzdZfPtmM4qZWi1Bazo81JC03OdBNmkgA5tc6UPLAkXZfkf5/nsy0ZPx5Cn3/znVsbyPjyM8Xwf8lxhIoNKEVTQbV9GqJcUR1H5U0MDaMbv/TN4zqGMqlAmOXWL3CiqtallElXwdzVMGNX6/4AkqCRdQ7A+C6FI5AeHnuvhQg2bGhqUXVBi6Lwf+UJaurRqpVSkW1uLlpJ+/Wlmi0NwR2GfIflGi6U7byc53nuZxLkj9y188NmnlL2joXmuPWOMqSotex5qFYHhqfk7+NH+cqlsBFa9S3BYvEVbSx5Ok8dlEpNz6ic3TmEml8PzVZRzkA/LvMrFcX/SAmusxpR3S4O5LrOFoSm+rb266lANAVjteHPyUyX2FoAEGoGKftOjoVBGSRtgpzTtbjXp0Yk8NF7iiO6gWb6SUBDVPbYHjYjy1jp/rNW12EHjtwLc4HZIZQP8h2SamRhiv2h42ODFkzB/HyU32j7jivp2epS2F+uvhr9pO2+u3nThj0/BcV9s8lLptu1xNe2zo/TWnRddqqsj8dWr4xhZq9LT1z0Gk/rqve9pt9zXif8i9QU9KsUtcThg+C2Xp0eIk6fbHacQas+jVkAEcKsdm7NKCyaWtRRKJHMHisA/GsZJIHHLrLS6s5Ggt4EX0mQ9bP+9HRCNV7BFedJNsygaM1N7IJ1Yzvb8mffPtbqR42Znh4rVIIZ+gKpWy+kuIs3VDSZv6bBhE0/79qVpBGO8XjmUG87ynt6qYGbfjVVI/GJ9Ze7Y8Re9y99VwNvyX3j3uPy54LwTVLPIzSInEuNd/bmZsef+Bp2eDFMr5jxMQ31BPoNklrgITdjpKgm/6ob+CSAsIrnK6I9+rK63bE451I10xRhImxIvttffymFxePCDcSZCL+Tu0VPcqeSP5321N1F3UKNWAIxnRzN+VvyZeIIxTMf0ZmrtX6Qs2pGx3LCu99l2Vi/ttgxc1peb0FujNO3hBVNAMwjADLUnmQaNEXkK91tMKNdLCZHiJ1Z10FFN4Qdwtbv+SATrzYoWr9dQ3Kn59RTXoCuT0GKyDW5knaCNYIoG6YRM2TfRjXaEdBU=';
  const _INTEGRITY_HASH = '39987ad6b97f11246ccd309825b757ad9a829abfcf16bd3f564cf66f893fcdfd';
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
