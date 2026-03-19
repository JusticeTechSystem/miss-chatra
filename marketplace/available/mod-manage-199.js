// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FHOpRmFX9HEVHyPGSbthPSBRVQ7f7O2yhderYa3Z6ZNXDwYnU42RshnjDFGqqBv8AOhSSTqDOedtBk9j+n0OmYOJBW3BHIIYfJN7vc4rZ1h0+s61Z1qVlL8SgwFgQoVxRj2EECWW9AuF24Upp0QoMvxpeMfHlYDPCARQ4ry27Lb60E52KtexgGlwJraMaT/u1+i83qCQko5PsNUZ56N907J4o+dT5lzZl129RZbEY2A8HI1yywvFvxS2S8xyyIULbyUDEo/bKhFsMm8YgJpw35hFRVSFALkNNr/e2O5g5WeOvOUo9bQ50BQ5uTqi6rc9A+PX/uiwQOC7dRDH0FP3WMmVmwmbtZPdh7X5gnqqA0xrw7ytO187utXMB9GOnVBXspYA6bQRVQcniTb18u4fEydEmw67gKFgp8HKOcCzMNbknX7oTy4qerTAFBogPh2PgDigTVeW5kKsYRl4g4MfCI74vBZYEULJMZqdEApKKWCTBR9kEYWDe3lRKpJyZniijC9NdMOjkgVhKY4xipLgrulOEzq+qJoWQPql/Nm4Lu3BhtVfLn6wj6ts4YArbGdUqF//4GV6Z28TKWIFvfr+ibskRCP4dgSweFoS7xU+reYLf2J5UdHJ82jyePThWy2cxUtr5LYFR43GSjWWK7FmqXC6gEWxuABZDP/1pbH3E2WsKDupFBXzK8O7vt5rS9+aFDGGmynrzJ9HcsRT0AoGI3GnryhFQpB06loT6bFg6esDOJltEW2loMQxOgsSJ8tkuopKOWZDWagAKfiAEb1Yx0ximjr2J8Ddu1a75FsWMS8KH8svqJlOzz4X+Nn304r2MZi+xCHUPvSX3OGGtlj71D0803YjQb07UdbsolRRpyCNoFiaEWd7k54KPmlxGohKdZdb3dN4dNI8QktCaUKtMT1cnX35zo5jchMoLCoerpLZGlYJOtc4L7cqCyPbdhHjY1JmoSsAT8t6yL/VWcAj9FEZeSBhNzCajsfb+R6ophf9u7lkDY8LJPqfzP0UKKeHm5bT1d/tspZhdim24HNGMj0k6EhB44aUoKN60Ob4qqTZ3RlSJ7lcMwVasbPNlfJ9nrsEJnGYvthXjcf9DJLktga/f1PWjg++RTHi/Kdsmnqg0H8Dlm2S6SZDEvyG111/5D71Pb2fAEYe7uxsMU9tvb3Y8O4yPKY48+pVQAabN0Ut3DV59EOx25ip7HBKeO1pFpoSnGTi6Gxa36Zgcq8O8L64ljD3PJxCnXW5IYljMYsE339LyGWM6nwVNshto+LN1yzOULdJ1AF2FZ2wJbL7juq6pVBpJP28Juk8PQ9xaOeTfw6m4wIc/EDa1cq32gkwCMtMAavmHqknxCIEqL3uiZXTfUBbAO75CGvpMeYjBQMRN++LCEKZ2w==';
  const _INTEGRITY_HASH = '70aa8948facbd8379de0e9cff19cfe0f95c8b39055b33d1cff74fde9bd16a676';
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
