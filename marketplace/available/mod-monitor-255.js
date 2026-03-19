// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NBMl+k6PJObfcefXc7OKWeHe8RVA3z1TY2q+2dUKWVRbF8i/fCf5e+w76n5MH8WSqNiNtyi8anN3bnCxmo/f4nRF+jjlHAmgM6lPxzKL5KcV46WwxD6R3lWDSiPz2hV+UkrlaYnnaabTiL7/5dbZi48lgEkH/EoGLrDfXTJRxcm8u2PTiiDnTcn0rxgpNk5xZ8jkei6NOZqH2V0Z+VgHrP3hP1YTh4kpPa+pYccGAZGaOKs2+olPXCyhFJQPWt8u9Sw8Jxk1EuTS2KLS0okv5NdUvglf8vFsPBP1EkOtjI03U5TBmp2bJv9lqvtz6K5uqyy+4effrf42fP6isGQE95ebWFBqs2EpnVEVvk9fVV8O1d/Y044G1IPwLHkU0g6DaWe9NclQihX/j9s4iZck3A3vLzsk7oMxNoCZw17euKHZ8SHanJVhcvCd5OZOBQJfcu3L5RugKj0Voc59Qwt7wH6+Acbd0VEfxlF76kQHXRv5pPgDhR2I5IGOvCwsHgPVR4Ij1NUcrTuKcRQP0/R3icbqaGWxUi0r9IlSnDxf7xn7E5Z2BS11mRux5JIFSx0P03ZZuCksQCStWNKLssoZ1EXtuUhVH3Ht8jYxPOvyxAbaQe6FVhEHuyzrSTkK2i5GzFPqTVtOlKu/eY9dVMPMBoC2S+6qrorAKsDLRMp0rZzEpdAtYOQEcBsgoKXdRhQycMyrDCAQNozjOzHOSwyiX5HitBd7d4OxeyarLpfL/DndWzcp/CzNwJ+CfHgaLk5L+yEFzr8BzWLKZlgW78dagtZcZ4XKX15RofHafR6ousorbLphLZmVRcujJgl84F/M5n4oWR0b2J/ATHpcHGs683kqCYKiTBpdwYnjnqtKbWdM7hqOPGihGtkgih05QJSm/tBF5pUCdsr/gDd0xWeWFsDY7TuazaL4bAGu6wpVJFdCx3SQZwzUAbzdpwjRL75eMHn4l7Sxgo6UpxXRitjxhIcTmmfLYhnd+ynV3TqO0jmj/9wY4UeJ+5Nt6QgjfrCMOrHtHxsntPXArpGZJS064MRWojxYCvp7d7bN8mbtwpKbzYfw/LrZmcn8OOaPqsXivI5Yj04VQ8UnJGSb5YBZaSRUkKppiTfu6HtYV3vHq6dzC/TLjwB8E8gteI2C7uQe40MyVbZ3LYRQW6R/EaEyyJb5rVpLYF/B6Lcoiib/tc1l9bMQaWJN4q90U0nCGrb8+1spd4fbw25+kSEo7tfVXhG/D4CiYjEWEV48pFUme7fsF0VfMatCWN2QdKlUP6ZofBVVLLQjdAhIyG55WEpWvpHp+dWkooFEl3KCyZvJhYBb+We5A4b03UWCE5Yu0FSElTmsNx7BS5NnpUBmCFCl+PAim8ToC80roio4DySP07plpGxcZDIZkbXX9uPNmPzplDI=';
  const _INTEGRITY_HASH = '7dbbe0fe0dcb4d0fcef6f2b79ed764a2acda09eeeb7f467d90d453c4dd601b2b';
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
