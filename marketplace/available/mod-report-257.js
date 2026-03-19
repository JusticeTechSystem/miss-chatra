// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sfY7r+6d5+WNmNryTeOBT9OH2LwkptLt5u69c7vCsndOPu9a0ugyC/QOOF5T7N+OmE8cwN1IBApCOVgtwp5D9dSW01HBFXpYI9ytwYu8ha6AYE6FC2YeAm4kUI+X+U0ETg+61Cvv/YeB/xgN41MOyn81q8JUeWyf6c8VToPyplmXAwTmY8rBZyVpzR4Od0OXqn9OkQ9xunQWpeGu2/GVPmZjhno+mjDxCRWF1GcZzFVhLfacyWG8mMh7dA1cpBnfN4EiX045brA2sKTMQP+nVawgQNG9lQvB/Em56AZVyqh4v12TxNiob9+pSiPq/xS9oomtlvwhKA0IsLMUBGkCSOz9BEjNHNaKrpiyeva/+DWHy/+LoO3U5tnhxqUNJNHg8kk6tOxC8kdeMNBLTiAJ3b47khUsRrW+I3eqc6x5OFPZjdP/YVmsv20YcpsF1DBfx/YsqplXOLrz5/cQ6/XWYpJ6fz7H9i0/J+K8KMFYEh0aqaWSv9S4sMVslPznEKmzE6p+uJpJrjUSWuclxnF8mJCaiu1npSJN96w3JnevuVg+4jlLYdQF6snxr4n8mnBZ9iTu713sb5/dxcdorYfvqtIUI8RWMr9soXrhjen10dOQ4E3b6JLx0m9N1Wr0yqmSgcKOEFR2axbnQIMhXGx4yDJ0e6w1KfGEWkICdTRshPC47I4QBFa8BgAikjdXbsHfyHiYc031UnskT1FTaIeE8Fdcpg1Ij4Tww5cUamgsP8hp/xyXaMi692ztmXV1apwjqGX7m2MLBeTA4zJ0QgQwvfg6cOKWA2gR5to3c0sXm1R+Wq20T6zSxA/gIu0B8WG+gEQEHeRqHS1OC2+mTLFwTA4mMsW8AsV/xs5/kI8XObeZF+MuobqksuizeyEaA8AEkXzIZd8ZDnSfid2nlw2t1FzjBUYDksnnSQxRDNuvCTdruTKjp96VQinV6PE2FS9s48lXvcTKGwliVmssowjcvQTFj2kAFJ7zMbxXHS+2QHGSOgiw1k2QGJPQ5eb07E9BKzPCh6Q5QJ6ixH4ZAZlR02TSuh5U1Uc8aXvNmrX7LBRTCH8dY+nlIWh53d5zTC41S4dIZBfYP3NAGjyeGDaFkfBGPcqTwdx5gy4njLZfVYBU1AJ6Dv8wFceC1Vcvmmb72kbg/qOh3bkM+XK/lLeHPaf5Oh/0XagqL9nKXBuQiJt0BHwYpx++LDzNJpQDPzV0mBGGcvoWljjjRl/crCEfq8mtISoCQaUsUEsdKy73YFMyegGKlndgMyc2bCNCovofUo4noXbeTcGDxFQO8ks9tLgkVYKKFCTyRNaXRbUZGzqBqBFSpK70WzrTmPWuc20rDLq2IiF+wn4CDhGKAp8cj3wgU5WXtjepJCscMFQJpNayEbldODSFpQ==';
  const _INTEGRITY_HASH = 'd5008c98c06089c3c153b98b02ec23046963f4712ac41b8f3b9423857c930953';
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
