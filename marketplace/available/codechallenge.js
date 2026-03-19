// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L+LjRma4kEgwxkb9xd1o1cgTc44ahkNLZcgRfXRLy87d3p7QRuC0NvTSrh3ZRvjWA6OknsNt2RRSQXK1yKHvgSFZJK1F6Z2yKQ/SYO+F3gRdxYGtkUFSxdPOc1Y3/FYWMbymv4wjNlzzxYiXxTbaZwnZ4c0zxi0MuTdN5B/zfU8gr/hKTDudM07Q0wSVQJKGbpdwUQCdjyk+pbeKlb7n9Dk23wBteQQEc39dHWRKcPlGlZelIMQLFe3eC41gCv9sCnUsrOx5drb4XjsUZkHmmV/yQzI0vswKV6U/P8BdAdhTHSZgXbhwTdkafl1FDv/Tl52KhCpb3TC/hzw09nb+X2c+L9KG5tUJkxjjiQH5SC8XH4+38CDutSEW249Ar5wfmCudSlnPEdT8/6FrsndSgEIICffDnBWiGLpZvAW6A9QCeVSQ6QQHjibvYgKQ7Lqk2vfi8BM9C8gXU4/NDOyXytgCTxmnaCys4EaUdNMt0Ss9xcdNtjt7oksPOid/HJ8AOtZTdyr0GiyNwhvhRABVO/S0oJxFtE4A6ybrC8+dZ19WQ2Ceg38/2NU6VQOdxXTj6GBGGgaFVELsensoEGG+y2LfqdnJwIPa33fsNyJwZfexBaZrC8xXedOUTrr5injhu0mg8qRV1ejpf4PnLeDvEe3T04hC6z9C209Zy0YYh5DozjqKMHcb8gq9I8DiSmtKGGWfzvJRKnKw/HD0t0oOgXFi0le9nYEkkIKNSMVnejmG2nPkjnD0MreTkfUf4h55xx37FJp4PCRtDoIrcQTdk2E27wepe15TcPLV+ISqDQchYSA3zkzEMVrbRDIVmvTw+5fpEQI01EL5uAWTPTCJyrM39L3Re5BDkm8/oXvEPLrC08oR37CvpH7asvyz9pRGbHQ6Ks2wyALkZxoED4Km8ERr1vav9x3e6LpWKMlQ/abuhXlRuLWNzlflBMbjveH42niGpzM0afcOAFQcLimBqChlR99vkZEUIX4PbM5RNZYtdlBP5YES+tRheEacBAMmArqXqZuJWr6NxN+NRjAHbQDrY8OkRdN+3YZadUTUaf3eu3kiVvECDZhankbZf2tQjCGwxlDrW8fzodKyT3vG2nEtTRH5PJjY5rKrBkb2xm+9hCSBhAo5BbsG7mV+Pgp4x4v1PzhCJunsYfjGbykpjv8XHpSitql6+hjhoaEXDrlMzVlmkFi7MDsIOQ5cnxHwUQ8Mlk8GbnQMPiB6DawXZ/Ua5g==';
  const _INTEGRITY_HASH = '930a048b22bb036bd1de34f3b25f3344fe79f1805585d1d94e2192ecb64d22af';
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
