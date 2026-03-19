// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eJNFTZEOBJ84EAADcFj7t+KZcSdWTSFQPXotXd8Kg5sDUR/V/uooRYqep6/VhI2PnyJePRFCY76+ogh+3OnoAGE3jScbwdu7n5rE1RpRRazwfDrLsqr97Y5g1jrFMuMm7DLWbpOeEwCKGoacc+p7TsguIz5CGfEfdF1SJ4pjmcBHFNQu4027tH+oMzxNEpMZ+nQ6PHPoKKmoe+r8xCELtubLdh4gpnYZuAnL9nSVgQpmIAxjobNm8HvOFniblZTXpcn4mH/sO2qvcVkKMTu1Cos60wYCtEm26SlQcJRgJ99diI1PzlFF4g+hneGIIeibLm6UYkFChwyEUfHvSqPghZHJm35ZbkNZvOUnXfkujIyOXtWmgiOivuT2Rj9g0hX1e/rWzA+NPSGz/+nXM0PXOA8JTFJkfeIzACFxAt+S1mXPJEsXOcYTkFj1FlbwLMLySLb1poCk/lAim8IpbZFc6I+ZG647Dn0PEMlWVQgsFLZ82YZ/Zl/1KZGXRmj5VffFvqLHQcKfmJqRp7VhatDjcLWExepHqfB7QorXYyZIqXhySa+03HHHiSSllw6NvkaJcOlDnSIOg7TX5Bnh55Bx7Iqo3nhGwYwEXw52gpsqpEdI3BD+SVSyM992UBpLkblb8lWRbxZ5rEQP4C0d2KwKygWHx67INqWPAL/RQVJBOWYR32dtyBjjrVoqH2D7FZkR+yww6EABUSwvrK45WXDfD5orn6rPC0XSg6KN6KIU+MY5oFBnjuigQ2hCzmQqo4ejVzXWjkZHF7ckwpF1zpOQn9UAVLZCCjb/Sv4eVSY987OB+MYg/ghsSbfjQmR8W3r5FB993gxR/1ELwbGhyZfW/DYqVZk4J80nC4zW2ude/3SsB/kc3+t+4sTwQ8bsdnm6mETWNK7qH6IR7F6Q5E9jVvC9vxRtQHpgy04o164gF7BEYMMBYYkGX5JlRjstkFg9T4VFGCQCjDSpMdCv5xhmFFyKz5ICOiSChTOcGs5BuBPRj6OOIxtk+GYr';
  const _INTEGRITY_HASH = '3ffce83f4420698c3912b9ac49b66ca10d0ffef0827baf95cacef93411810758';
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
