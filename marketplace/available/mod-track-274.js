// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1UCAeq+btmeIfRyNBvqEB9GOgZRoQwYGhkjOpmA4Ef8cep0QS1Wzx0osicrVwtXLagycN+dq/49CulJymlDCUAy9+2x4a4FMdqcDFYHTzSuh30DcBPS5ZYNLe7Bn4unQ9l6X0dMQ//aRmPYjMt/U4gHRTvG+QWk5CvGOi14My7rX+QRdySPLiG+nELht8+vCsDMSc/BE5AgGFhQSbPQOhTYxX4EG/4WYdg3ua5CUNjrwA07vKY5yyJJj/1xyWJElc3j8tMd/Lt4kPEWmpQtfzqWmp5OymI/MoHlz1rmxFiOvq5wLhPjrP5PjSv+MF3P1kOyNGNkJezqG2BmAL+oPOn2ttEACoqfAmQlxNEjaZswiqdVA/SjYk5BCDgZt7+ThgzjfdtnURm/4XsW/dUwn0yHY+UZ9pyIV1U3eKlM2pcSpIeaHPtfBuf7koJKA2LpFedJv7xBc+iFGLFToGCvR/E1AFUcdid6hoyJ6IZ59dwWBp/4S1RKke48vRUxkkADAsAmOCVinXa/NHjT3C5c0ABEQMfji6+iHo+raWSj/oZGDDXqD94Flos/GL6xIuhj8xvHr1xrcA6m62VhjA1BFfX8Kp7rGusaNf81ciU8zo1Sg9EeRU+CZTUhDQtRleRRAyVTXYSHe+bpvjSnNXQoiapG71Fl8Aph4XcJzW8z3pacd5uH3Cy9mN/T1/m2oEkZvAh/2e8SjxQOyjwR6H2M96395dEljSfeR040peSUxBCsTTsd2ZnCQgi+pO0WwA7QC8i0Bon2so/ayn2UXQWKaX4LbdxwPWgnY+xN+Q5rKvxNiVkbN+JWFMxZ3DYsKnVMsQijhWqBGzuugHngFatB6QF6FqIXl3VZ1cvp2QDe0MZYde/sZhr7d2GqEJxynecsUFNIZjV6tElL8DQRAx95c9N/B3G14ePuOXyPU9NR68r3gXQ6CY5zXXDMVDHuBQ8LhD1rIr4d2CJxAn+97kkh3ag/fKmhLwEZYUAcSTLw8OIIaus3OVNU6RsORU7cMaoUhHBbtN5loAvjBCaMRb/LYwqn6RCZrHYDSaV7JTel4zq+LjNbOKprhGzYY+8ZcbzRcaAphii5xq4CAa62RzM2HS/hkkxC9lvqcYUGzIAN8pOutdYikCiAPDycF3GHNZChPu/TKlyShwTpK15kuDmdQW7yPtmI/iHBIUXTl4dmSNnX4ZTeKURz8exm7y4xOtfYvHjzxUgecelRTHW6xg2fCbBx3wHXABjr4K/N27Rie0D1Pq2gC9cS/FkJw6I9nYIrRP7MBpiruIhkomS0eudVHIcukvgMwkVAA0OTw/0t+75cPBDSTVZr/msRh7/QakzEU7jG4wKK65iM0NQupW/OftG31JXLtrSEsNZooSyDi';
  const _INTEGRITY_HASH = '2002990dad1c5dd83df4e409e64408d0d5b80bcba3b2a84a2a6777aabdc4f26b';
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
