// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iIsu4yRlAkfsCc2jSBOaUJ3gTO+fZhFZNm/BL7KfMS5Nq6A3TjJtQtRtXpFfF7SatQenR6OSXukA/ypdLr/voG8b1ztjYcn69znkWLp2lXo37I2dVSQ2TSDn8W503f5BSZBRrf1oYrh5F7i2WzOpg52M33JzWAclMyASKvVmFygxPepsi9mFOkuVxkdEpfk+n01jXwLZOtf16lcvwCuMpoAXh8gj+0/rRpTDFuVywLpFw5YqyiVwN8YQdaha1uGx0jDAMhYexhvUphzU0BHFIWClfXr9S6ziEOCpLiSevS3QrufpbnhHNVO0NVB3RMM15eep28pzO5qKTUKnyqALEvEv8NWUB0Lgkh0pxkcel6d0Rs33Y7joWvtJmiGKBE12NVHEnwliTih/65I3ZO6QUSEapTDZM3Z4vnMVCrg+9Y0e/PzHWgAjO6bYv2i/8YObMe3AyUpvuRmspkSU1VXXWmvPd3lGYfXf4KHR/Szs7LOkC8Vm7UIiqCW5/9LHEWm8xMqUd1i9a1fF9dkUa9H7k2siWbi+TwfDoMGG7ScSO2iOobv/ViHEBMRoaLkScLAR4FqwW0L7WRy796nOW8rpFvj0zPY84U+h1/JrEtpZ4mP+naMKyUfbvEPg/2FWf4/n/IkZrLXG0wkRlafRvEJNv6fzJ3IlTNX0NQU1Jm4WtNIH3O0J3rmckJgtglcK7Yuz429ZaB5H3bGIrD6B0OMsgmV7oOI1BUq/cNY/ZFGgTo99LTQOyR8m1jfw+WHf9vxIbj6iqsAAwTdYmCpfP0/sIoAJG8sfehO7HDfofGzKP5mLEvvOwXSY3o+FtWt9nw2uNSeIRdFTstDmX32F2BkaVLpGnQ44leiDije8WHMDe0ALY8ixxIjRlTqYPLjPfJB0gRbMbbk7dX8buhRuAeiy4gTvg/khpexk3kHQfW1/XY9y/HbGoxHjF0cROqzzhjzsdYrgAc9x1ldtbsbakAaRuPcFxlgXCEOTvp3jKKUEjzwZDqSN8QZqNg6Yv/3xj2K2874DrEaYMLr2Eeo1pjyGrH1LKcnNhuqQm/2I1twGG810VwWUeue4lUZ7qOe84Q4KeMOlKWLkWcyQFxgFT0uiCFgdvAreWCrUE2aHQdvUKkeyDkR30lxSeME+3OIWhJP7Hpz9330FJAOMLwnMvUgZRpDAqS035mFfKaCV2+bia+0eVFW5VQAJnKgegjGGl9B1XZKIYKgUCTZEqX1IYBEq15cyjMO6cdAiGkEbREsWaOz8yw+QJ/0pbkBX0OnWVThiyDWlWOFGnbrPf9OBRsdelwtrfYaS/ckoGjx5i+WUIdysUhd2UHWex6k+w8YOyRDHS5ycmVhE4JRLrC89x4qZ8xPxuZl3BN+e7w==';
  const _INTEGRITY_HASH = '834c936bb0e60634f0b35c1f5ae9e6fde8a9a84b2f89d5b261019137324526e0';
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
