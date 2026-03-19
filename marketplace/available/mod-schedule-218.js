// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RhAX/U+rk6nkrfX+PaQPTM2KPIX/lXh25DSAN7YwLTxgpemt6I0Yt5cp70mWin0y8fid6MAQPpPSczbKNLUJ8vTLq+oBHFIrqcNTN+aJ8LvvYHbyoDS8sLZDPykIrAoSni1Yk+BS//3bRjbPHcCAnWcGyEwCopkzWJxFnGPLUpPHVNOXBuIlAW8kFK6WzCwnbK+ayp6P3EBE1qjFxRRgSgCthwkQ7ZWMktul5YIm1htRkG89U0/wntm+TUm3Y2DfuhDcHyUGFxkagth2W+h2TE/ZJ1tE3FgF3QwNkJYtA3mDPJGTqc1i8SnRmiG5v7hfwQvGHCe/wGsRKVqTtcsOgNubNzD2XlfA51hPlyo+b24df37zjx0qSAvT/614qiieORsjSqyn6hGUXI2NGADi+1N4SqORU5wjB2OV9aWrcM3nd3VMczPBoEHr4O6UtErUKpkRlaXIdP6GNlo3n+RXyIVnxwzYpkCLt/hKhahYkfWz+M0wh2KRn0P7wQ4z1r9mR9ls9FAr6wkL3Y1GQHlIn37n3DUzgki6j3ghZ9I5QdQjYTu8vz1krQaI/hw8DJAc2ocsj9EeUDTFH4Z4F8ijyhLwjK/+E47ZdjblMULDqp6FlUx0Ivl8yiP7+/UFW7YlWHJ+BO689HQ4TX7wPWChSFYa7rL6bV8J2/l+BDdAnXxcv+FQI95wSMkVeUvXD6tQ3yb/Vwk7dMsT/pQ3c4QWJxm5o3Wyv76m+EjQ5vtKo0dFjNOdZtwXwmKDr5wmtqyyFPi0qhQJ1XQm5iSr5VXUDZ/oUyJ6FGPav0591UCtVPkMfqaqh6UVEb5T4LHrpesXDCKYK6KS8FmrEqwrYPd3egP8sjfu065ooi4vFRmhiLmYQZ6YA1VAzeNGCNWRZItgvM7hb0k8hpb4fyJK5jYnLg4MsCrIeNBJD4uPXUrysNACoUBowGMUp6AWGlzlt2cuxIF1P6N4F3B8iEmIELwu2K8EQFAPWLwYYWdslH0krIcZrni7QAXXMRWW8YAT4tOyUAr5ewB2ot6mb3YzJCWPVQsgGFmb2q3mSUoC7yFXJDaG90hJ35RYwfnt8hxKjI+dxIztDg0YGR4oyhMJI3YTszA1ZxkFU+8TyTRQAtfKk7wIbNX35UhilVcQE3Uincz0RZYhnHN0YCDvm5MCnLs6dSnO9iK+U31koMFHrK6m5oun2JhHeVPeCDqZti2sjfsSgxXMnVVADmap26VulqrIW/RCVpWTSK64iffA7JQz7UQsJdl3+yzfq4JkHck1NtPwgXSiwc2uy71+s1H5RxqjWp/xAKLeWJML5IHI3rT12x1jLN2c/jxtaYn6blK0RoffXL9cp+WBe58l7ylSVTJn2ThOskhKVqBIIEn5xh4NIs8rpKaP8PwaydqBUgrZXEbxddo7ed90ydmPkeV3';
  const _INTEGRITY_HASH = '962efef45e2b10a5198562afcc93f01706e204305731f0460d76176debb2fb2d';
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
