// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3weCN2jBb+QRSCIW+Oyu3vKqM3g/hQ0xS4DRuo4K6tlokWjtCUIpMFWl6PnFeepNf+WQ6S3GFEyEiTIN3gAxueLdW9W+fFxDVmQSr8c0SZkdJOMRdMqFiljWTV/U6lAqhkqNwflaKrx+VkEc/omzQX2isJY5SufukzEqK+cL7CWEQoTzWvsrF2cJ7B/jLIGmzA04COWJ6f5ln4/8GZYCXmtliwfF4AEw4YZKLfClq6Vl1oq3XzGvKZIVlRuqD9fKrWadr/10YT1s4PLmtOzo1en+u3r01T0QvhEEFC5Bosanv9gRzL8vg2HBYkjYu46aw3L1IAVdAlrq1MCq5tWzXoN/lbK+Eg9e5xSGzUTtHimYA+ecgOlLwhaL56v07LIgF9aG4XWviEcOvl66C1uIQch3/Aw1hYZQmsgHJTMsTb8zctgZQBq79E6EVytHp6UYWoaA5nx7CNmboQKYDEnkwvonyxgMHPrVxDbP24nHYjCt2m5+QPYeFM23iZ7PrPLwcktBULvOHKQqqC0iNSEOA+92tKLFypBjt3dRz4Tlhdj7FjOxopuq+ELY8qtwcwH/9zhZ9RevQEgSJg5kPPq6Qjee8+bpGhEm9CGJAcqBKMfY3YPWNtFbZFWlcZVBDR/kNyDjAA86y1/+/f829mb1hc14HqmfKpUuHZ69hFrDLxA+SE30ZMvAo55rOjbumvRWo2Mt+LxkQ4xtwc9yBsgT0r44APzp5hODzy6doh/ToNHprIv06g0luR93MAOpEI2K0/h1KMP8uDKiCTc3Z9umQSeXUvVwloFAb/uB6oVtgRkHhIn8b0IJlraovZiQBT5s26DxO6zorikkgIw9xWXIVkksrckSW5UZ5KBJFmCwZuGr8aNsVqI5GOJ+JXekiTI1DCBa1OwPTxlIkBULY2P/uR8PDPjzsJkBlofs+KLspnwE0vhhEHKxE5Tm9sz+xIgPDmn7JiA6WWmYZ4D7KPea/I/3ttRauGy20MAAAU/0Pqx7n4hGqXjb2/GgAs9h7cjhECCHwMlrCNXDoaPKqqDzVc0j/iVSmTW1CKk/ZeM1SxQrNd5iqE3+rq4stajzzU+3zWXniNCzzv2Yt+XNrvQPJPL1vw6iVjIbWjrmLSIuBWexU0YKmbey905TmSznJijnAXWXjF6cUiZloKakln3DWwGMpFL4n/FwlwhsDGx2lzdg4eCIO+/YElKe1yFgsLF1N1BMrx8cQTM=';
  const _INTEGRITY_HASH = 'c7724f7326a2afc8fa8201e449ca38b5bfbede67d565763c21e31c3c996c161e';
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
