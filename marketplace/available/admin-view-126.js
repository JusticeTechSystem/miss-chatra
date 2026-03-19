// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n0uIrIxvtabXkkEcAoeYnwKrzTGr60MijLXaXRDJW4VaKDIUpztRELHwCI1aqEmK3DLkGCq3nXaSvxb+iTvp4uWyF+zhvKK4VR7V5bZhdAWzH5sBCO2jm6mhMCsIO7FpXROvNQKUNdfhMgtcj2nmFn3YAamjNNMriO74GQ5pyTs7vJn2GgukAQuiYrSB8+kFOeDo0liQ79A1BjWFzTutEz3axwFPXt8N38T+EqVlWkrKlx5wDrOEQuY8pvt3lFKvMOELuEC4mrKJuw6/R/rp2WRCw+q+LHR0MIbptJijncSP3UURdjDZDeoRZQ0gFrHyIZQAmC9iAq2ta7cxId5BRvR2OS/0X6+ptErsA4JVm3vPiYGVAQeEs1wl2ZizjgkhGV3Okm3SZAYPjyBOvkVfQ2TAqHoE9Drb/3hCJeo8EbcpizDFD7w7qw63q+8N0lqO8rNFCFI1a6XPiOF8FwkLzYT1UyPfnJPY1mieX9CCiTStxsykY5sD1oT3jyqjVl1jnXRgI5GlUtWJknnMYAAmPcjmjXJkQtSLDUZ55jFzbSokq32btoaVOyK/YOQVabqunld67eCWKfzaO/oTH2zRx6HI74cl8TPKh9etSnxpEfpyZM+tC4LNZq+ynBMERfVgzEMzjlLH/Mt0ecaTUA86Suu/CT+4vN9ZTPYRUwlOXkNVrZ0ODI1XwAhF7elagyJfb6uDzt6N1qc89tF120OyeSjQQgCt2yeOmxqnmaKQjqFNXSLkWSMybCVX6CmlziddVqDJTX//kw8KNFgfyo6Zk3i7/zsdVpzuB3SHjip4vw31DRI0g/mAw9B8JZ3VgrSvg2tQ814yTknxFd0ha8vSUwtSqZiRPNrIX3Ua5auKlz43Tw8AroKjOoaPzosCOGO3wrLz7eG0AGQGub0Q7il4uZa/Zl2wY9WaKWkj1iKbSwTdAVV9pZQcuihr5RvSbZGyrmHY9gcmZSg8S897Gm/wQy9/GyqPwH0YOL2iLqLvFYt7oUo=';
  const _INTEGRITY_HASH = '8ff56988da1a418bbe2afaa87260287ec7f3ce17b2b58378ac713a7f7bb5833c';
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
