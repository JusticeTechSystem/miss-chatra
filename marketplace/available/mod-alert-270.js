// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DBkh/sBYJrhWw429JKE5jtPSAhWVWeYGNtyfTRdnpTNhhJV53GhRAjKyIpRGAD0o5NYFrAOFwiqvcbpzdNaJGk/oJakYj7/CpR0Vl/+0uStGIuDmPjs/npJkOdzur0khKb5YWbFuke636TFjyHiqs4/tQlCE75K5ZZA23o08bVy6soCIMSH3+ZFDQMrrybxAjXk3o2qEL0cA9Q9pw2Y+5fTjwD4r/yCJkz1nFUq9Ih5/Iru6T/L1uT+3sFJw3j2pMcCc24bq8BqWAMD34kHYkfnLlkFVP0PcfXObAoNghElOkkFYilamSt9TP9b/pCVwZjrtqO5iBlnFIJLGVFrLra9PY8jgP+4kUFFF2+d6zzmrJrAy5XieUIakYJhNzEE9c0OEKdvHd/hHnLlBmYXOm0VIxsJIQ+L2B3TMSAywSewINfwY5fwBwVi7dkr4stYluABGv1s7i4aBa3mqudR811vF8ngrwXshWuQK0bFqGhMdvXZM6juYUdfl+LaaOAKhnD4f6/3IfUEGe/dCF2nOTNZlWQCIUVn8GgGzc9VASMItgkmj/ATcoly3mU2SuFm2nYW3VHW7xLjZ/XAndCFOIRUsh+G1oaQySS/x0n8mub1TY6ZoemV61qVqy6p16DmW/xJVaYtvKM0IRt8/M8sfXWRLQTsqxstEkhUBG9rUjCYoydvKeEaXBFOULLy9GVB40Xd0pJ6lTqyInJDNv5Fmub4qSMK4RjAdtjilB/Dp2R+/ufcHbGHdgk8W01uxVg18JpsxVTU/qELAzCoiJZSrEWYWOl18+8xNz6OHWIoy0WP5uSRvbW7dmCv3yDkYs29DZIyIaLh1iCQ3Oc1LusqDI390rLSw2mQblJ6BMCtrSnfZ2XsUjOOpVtJrMFa9xicIonY4EmaZdjK14tJZHvDQ3jWFTyfo4qrYVsXfUCEcF6zJ4mKlSldlvOkPS/kov/y2rgK+y5Wy2t4TRwf2j+GmoCmSYAPIOoRAL9cQLmfJdiCXZfPavmS3pbRWBjyBkFU7JkkDoZv9+VapAL1k8/G/l5zRBZck5Ofy/5vA+D93w8bZTLAKTgcdjw9xrUwOjgSjoz3eNL9TcuP0CGPlMTyl8bjtOBQSuplLVR6EsPHmJcXNzNEtzsV1qBnFF1vtr+JKQLmow+m5UUgTuIAU+hr2/1X0RKmv/pQDgYbHIk7oNdYdxVdZL5ajCWc1v0bjvWNhivfpZag85Uxlv1K8OFqwDqkn6Ggjzy+WOXmGiLmVUPAT8njAlPLhgvswnT1sVKk0M9fgi0WPZLhTudYTPGAYuYbPIJFief3bEmGo9ve2VS30rBdo547s8KTGlpXSzlt59VXcYF8osBjZ5qB483hAM7edN+25g6uZ9+j6i/zw';
  const _INTEGRITY_HASH = 'cdf59eef4accaea56aa56f21ab5cfe0ad065a660f3e2b7b2a5a58a117008ddab';
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
