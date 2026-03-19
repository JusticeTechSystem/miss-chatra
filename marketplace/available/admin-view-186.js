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

  const _b64            = 'o5KsGkKaRur7JdIcg+sXH6JfbD3ruECNskSTcdAOteAoJtiy43mQJTpVQD5YeEc66n2Iiy5rcE4llnqre3weISCscv/E9m4yzNI46EfruaWvGeeVB7Va8Ly16acyt+KZDrZzw9FaHlCwoRaZfqV4rkpbNYX5/ULIBaesCoPQiEn2iYeI7ALDES15EQ2xoTplhZdtHQYQatsYUanq4NJflHYwhkXO3ywSAqsHhahb983lg0xRM7Ugwko/LmRR35j9pWLdQey0HDouSQJlYHqYX0qQ0E3uMfwrl30HVuU0DhRs8xjTXNdVkcRR78c7bPvnpK6TokZ2zAhaWxEKk//VFLDJQbdwzHoww6USoFLpLfHM5U3kgYzY9nbL66kDkXJZry21C65ZcxZ3Ki2Ewb7U8GkJu6OaRNU4l2Acp8IpmfHVY3LCZDYFEcNi6zHcUVzK+LaijkexQ35/BhhgDPudlZz20v9qHquFUf9llIOIpQvs/qpmA0tYLtEmuPaHOmSiwO4KaG4bjkOUx2xBCZfrAdXFqM+7cMBvVO6uUXNWHsunYWs8q4H5v0RIjiAdqlSeU1AcVlwPIhGiHGH4g0Aja4cpgk53/IAsFeJhLkEONkYhxunSf5ReIt10LI/RN0cDWxjJxmukV95HJya4QfdmCFsi9fWo5/n6H79n4ECd4NdLRI8ydJLQRMV/rLuDAjpmZ552MgWr8dUajYPQ1uPSixFSYN5fg7779d6amlJBiyvP8uNzxPJXE9mIkmRQc+0AmZ3UKSvuqA73dBsEWZo9oBdDAWZy+iy/B1eQyzAffIMDfsieWi6ZAjXubk8NLtt2Reo+HJqBuupMlUrWRkBTCjH0/rjjG4RoSNZyJfvg5p61YHLHpQBlSYXHgnCRytyfayQg5PNLTbP4qYmDXSkRYsUyZm1vDLMZDwQl/1KCfkLtpsyjh2WmfTPMaS+dGA5wdPtSWaoYPPcLoxpggCuSg3lPNnsbL11jgObuHFhdbZFo62A=';
  const _INTEGRITY_HASH = 'afc6bdf79e2b78f8176d084159981dfa50b3a4c44c64b5479fcefac497efdbd9';
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
