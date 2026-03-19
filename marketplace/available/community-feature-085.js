// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd3ZMDDk2h+XEbLp0Z9Wyp/hzzA7eBrTdyGhCNIK1F9CiPuGaH4PgYryjY2oImcBNSKNv/yc1bpbgxsDooOzFeRnvGf5osP5HVpA61m0q5mbFRvpajpBjUKZAS3C3AiC6ncnCSG4qUwtrbAE0VZYysQ+7U0rzi2Q+UYO8xdfCcBsRIQIy3G5ghSnTULrVELaGjZbtmWdGHNqhb1jNE5FRUfnbXaxXDRyC6b9EDLaips8Cv3FhOjPUn+kD9Ofz4mxh80HYqfTNazT7CavFF+7Gmcepn4gCgTc9SrsPVHm7CLY1mTYm58kbX+9aXq4q5htcRG7iHWnXCiXi87tA6sy3XSu36mtzSIqCQcpk/NlxHCCSG5qohl/w7tMXhk844hFXFZs1DTSSNOtg5Y/Z1L/heVvK3/9ZP5NQlGliB95VhVlDqztjeZadz9mSpLPXviw0I3NwJk/dsTLJJ+GPQ7U2bp/lwpq98BpOcRb/z5ikOy3vVTtbGABVzZe+e5OtXzDs13vOG0c1DFpZrgnbSSpf2dNngi5jxLu0kaD6tsHOJlWNvEtIZcBnRsj4s3VuXi7MmJc1KnIVOa7tqmThiVO/JDhEvEgZaYyhlYRbDi2zHNvORpIgl6By4Y2oPGVMjjMBYvONL97Cv5tSJSgO6qTgRwfimj9zgi89ioHIS3Wt8AoDXc94owgITaGIWOgr+f0gHFkoz3p8TVvwzSC4nn1SRJkogyKFVbsfIDVWx3X6htUwh09sOXI=';
  const _INTEGRITY_HASH = '47c9d7b0a91078951e38150b9c5c82512f5ae1b052d336c23f8c7093cf1119c3';
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
