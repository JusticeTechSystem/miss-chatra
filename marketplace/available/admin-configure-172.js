// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SL2Qyv23Mw+ylZFCzsDVjAg7aypOYpEzf+APYF+O6i32O06+VP0PUXbFcEnzY0bh2P3vqA4o5VZ1W0w4KIrQeY98GjjtmRyQI87WnG66R85OYsXqOIpaXDSnIghSFMImwWDztIgw2llTwdClSMF6F3FPGDKXNFGBeTNaH/9mLSBjUVEOzpusuKFI2T3jINf3J9dFMwNIr3KpJn0qCb6UN+oGeKmhQHUxATojiH6D9OQ5eL9NNhFLmVv4oDzR/rRthtrqYkq/AcDmR8JOgvCfc6g9iSVjyx5W+GxKdLB8tUjBxp7Ibk0+gY4IKP4WAlIs5BXJlW1pDV4ZnqnW+9VkAYGKRNf56hh8nf0596qCRunmRKQKCg2mYKh8vieFIcAGCQT6wo7HTXEVn9qRI6j0zBrOWmeX6jEsjWXRSBcsROzbKS/weVn6flhV1yqYZYpGMGCDGiuHvkrsJA+GrXso8bZxDcKLlUbxrdAeOaQvPRRCNiV0UboO5oHv6eMVsId36KeoZgJa2dfIqN2lW8EUtSLyYSbWJ8QIkrNpyv+B2Bj8obLQHhSn6zyA/bMRDWseUdZLzCTj7DGY6A1gmlct7TeCvMSb2Z0il0slAmMAObm1HG84xKhsztNrsqmb+A9UXyr3YRM3s8GujctoITRA3sYZ2m70hVDwJ68chuDVfGbpXrEyV6aSnffBfPFRmoGZ+s8H/1vy//Ol72uiqZr7hRZv1EWU9//uPuky7JLv7DWg9QYicAKuH2ySMbB6Id6e00fbQyy9oeXIyx873iQIvkZJYqP0E0hBx3yPuQm5O/l3Y1qn/a628GRR0qrMq8sW8lzOZklDOz35X/tDlogJKDUZuOMkoWAK3A3jPz2pyr7NvnplKZcYWcmlCnhAk33DfDn+8vey+DQapLD/EsCy6iOcHn8HVfNJB+FT+ucBVChcYmQUojiWedJLUTqOcsGUAzyRDjK5tgzCR+ng3bNwY8Mm2oXIBU8OX7pgzdl2M8iKYdqAyOEXqccJ/B9IkQtA2Q+1/ZDYw/cqgFKo+B/nzBV4LTZ3+g==';
  const _INTEGRITY_HASH = '86b30b482192e288d3cb5b78c8e4c3e6590aba82c9c5230a5845160278aabaa9';
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
