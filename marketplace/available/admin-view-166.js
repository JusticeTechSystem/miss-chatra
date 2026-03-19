// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jERzyTpsmj2+2COHQHBEpEbmOPT94Iu21c3n/QIG8P6TrkC5KsruouzYZl88cCytmQoyu+Qc3OI9M6yAqwDqGqdMLhBHgzQIgHZRQhKMCyQTdotYte2HLi4P9WjqBUf87DY7n/nkrvSzXOMUQSkfaudBPbZDmYxdiIHccF+ruMqUOdYZOuoBwS9+rpAuz+37PQRxASJg6nH1Cpk6NE+Hpmqm59DJA45mGg/TosPcA7ZpuZQazZGEt7GjiXd5IjiVEPFCnEHknVJp9FE9+NdFFbb55xayXt73eoxy9VelIx/uSKMV6TFtTv+G8AzeZ9Ndt2AD90mcaJ/8pFkGTxqLZbwaMDJlmwv6e3tvJoR4WNSwZeVHLRRwcHBOv4VtHxeo95t/t0C1GGbWmvALKmUDLkpdIAae86X10X2XOxVCdVa/9YUC1dymlouGcyhfnP166JX8dJCancZE1ApRddNyV+YtuWg/hyXMtWkg8ztDHaz6riJxDJg3iIBNJb8jCWJZu0u4wUx5Aa6K8u3J6u3WMEgVPn09nmSPIfxKgbWq8Un0NL5lyJVykbSpQ/nDLPHj1RqzlKC3judYWa5IXQlAbqZxzfFfJ+CmJ0n3RIAHBhxGo9aODr25Eftru9gblO4D3kmzI2MU5Bg1Qe0ESNpfIhtuVX4gHyPZKjSgIFs7wOIQgI+ti2Mlbwt6Yfwe9G5e69BcLOJRhcGLQSpHj0qblfako48QXyS+VyjdzX6OZxZIHQeUlWQ+fxCnefqldZHrag4C/V/uqSvxscjSg0oHZdq232F8aiwkNQ9KeMbHl59RU+qDVaahrPKyQRfq3IVKErnITfaYoLv0EkNqRYCQgkpb4uC3dzetBHRtYkJiI7RG785LxFRmNQp4Fr2YLzncmJBRwruPlz9puAgehkyy5yp0gKyB6YlAihg5vNTM28Hh21BY+Cw7INKWbmWQtka7nU+Ho4qI+TW6nXRlfxEg0WRUveb9Zxw07Fjpm2lwrvd7ztA=';
  const _INTEGRITY_HASH = '5046becd4c73c8ac40eadd051d3a2700930630b8405748bff4c0ee038a0c6ced';
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
