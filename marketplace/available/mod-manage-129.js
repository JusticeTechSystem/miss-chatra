// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TRDAH738AIsQgnarzy0oOkRwcqO3vQdbHS8/BZSPrYeCRMm7JhISBEIKGPJfBYTV49t2CVV1leZ3EzHOY2eAhTDT2cd32xV5F8p5AzVaWlatm0BFi/0DwhgxXSpO//gU2H0TCZoCDTeUYTW+I7/OnjbIwenNV18USs6oOg/hNUfNlcwb8Ax3RUicJfOOOD6fNWRec4szWQRQ3hC+ZP4itI6Va5BQQSR7s6fFWCF2qdA92jxOdnpbDsS6h9AI0ZaM7NfgJT51cvGuXlRWj0C4dQSVpLjaiU0EzfaSHxArjzWJ/9GOcA/UbTbp+Nzkb2KkcyDJmQ1LFeA5XTcoasZ+ppoxNVYrYuJFaJG9GTKoUbuVXUXc2Dtoqysy2B0FAeS0s574jAXFAiW1Yed2IBtiL1yJ98qPA9AMt7fOvLBACP1vUETNDUbhs+njMWfRYKpeuHj6LvzWD7W8IGQI+HiHQW8J4CeTHZCqpqnUoT6SFbT4pAGs2bm+iohQ6Mlb4lwGH7ZHEPCda9EQlEw/UBHEx8XRFHN2aE/4X5KMoJBfsjPJE5NyMfxP3IXKTMlrtzRlgYlze+1gJIi77PmZIPINV5INSc+Jn6P5z/6wGfoKmFuZz2PJJNwvjHcGwWQ7X6uWBlC6mTIFyrfYLRi5PwI3Jai52Q6VzfYMyZWczweYrEu8NxTrRPM91isliR2F0fVHXWuGmUl84yqkkRZYxF6R1Tugbm2NmBxCiuA4fbwNbRLs/ST6AHfRnSbZKm1rtTljsIcPlQQVi48ODc5MZwKuugXQWG92nYfcyGHIkIt6zDS29gAIwbjVhiBW0Qcgg6fdXBWwtJZ6ePofCdEkgZfI5Bj42IBHUWEl4PSPD9BiX7HrxAKqBV2ODetM9j4aOFpC1Vht0UP7tITT0X061qh2jjNf118TuGV9wX43D0lSr37mfj0xzYTfMYCZ+zE374iQ67fHs48z+Fqji/ksNyQpTdU2F1CgBjAEKxpusIilknmL0AyMHP6J9uEcK337f07hTPaJ/1BeTFGHL4Fs7ZJ/gx0j14RV1i/hgvoJz5mGOclLjm+atlaRnD062rZHj+w6zNJIMNnQF+AfpygqdyiP20r+BBRtpOIJT/ktafRBPb53oUjfgKOWHvYgH9HKVCUElaGa3ePpXY8gGxmGtrc5whCFHKJRSGzYgew9bqTMh6Naxre90wOOmjBWKhg2+J2IR5Us3ak5yOoH77nGnCizK78EFLNQSPy7uFKh4pas9mbE/R8EopCih8m4LNMXep+ZKe0o5WE2jwZKUHKEELvXeLaSVstzwS/p6L3w8t3bLk4iWAE42QpA+r6uCaU7WmPCVZU3H5DoSshzi5kD6bepX4glU4aE6qFXGgs+FAXrKySPJppuYwOgug==';
  const _INTEGRITY_HASH = '66621cbdfcef4eebbc9da11df98d95bf62c9ff0c8702c1683f649eb141a97235';
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
