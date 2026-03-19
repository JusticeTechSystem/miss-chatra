// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GXCw7/wMH628XLVnLbVdCe6nFoWeltul6V7vGeNiM95x46NbWoxTHWfrKDLjIkk5x6R+ZMyW8wQESpsuxlwsdx/0wSAOyYXmPvWiVtIuO6d2fCzX6jHzjXcc6nAduUOeDUk/5XNT0VaxS4E01btx65i/QNvYXLQCvhFpxroV26E9A/oRnUt3IfCBdm9xhnHbF5nfG0XOnoiV3vGTSBCPupabD6Dgbdiu82RYCtM7Z8bC8LfqnDPiXKkc2GtDQISXewdgDomRSO5fwfkHDqtAhgIoE9qjdgikhoMwk23hpU8zTVXeygEXk6IHWdiutkRLy2J8L+J2SQVUK3T35LhoWXjFGxFLjRbHXXSpJmwOxQABSZcGgoGzb1zEEsAvo0bfIHthjyxES5FqLI4wdrO0CwoaSHjwqiMlCXO73r53FOajnIA1tTu3ua7uGC/X+7m5LIwaF24TkRtlFlceH4njuwxTHE8k+s4SF6aIzv4PxWc1kuXDnxyYUm3bOoQlDyVKhNDRnz/7Xq9t0HCaXnO5KO0Iv7cf432yQndAzF/rIoBvbafNYXUrnzZ6Ug0ic5cP/RtnPcu15VH3yd1wU4TqkbrKcSGNnxXwrzMNJ7aIDdB5bRoeo5f/xBwoBioKiGGnhZX9wL1Mu1suDPXMpTntLOiOt7HsZ0dtJLLxEGLrdh69FIe5R/yxPMu1X6W51cz1R83GWYOpw8adjZ0HrWawRB+jjvSbXXRo69OpPBAjPQUX8eKXP+AgLhBd7gE4wo4OfISvEuZyjlmv3tK5WKwC6G770KH8Te0n4dyEK8rpZRG0WMSXv+ZsmUjMUJl8+3kWRsvl09LNR8VgFFOc4QphrPvlfYKFHFAEqiHSq/pJTpLdQyvSyLOtv23zsCumGV8Ooc1ViQMe78/qej+6t925HkbuL+Im9ffp+029D8u4vfXfVZF2NBycOsD1pLZs1MDbaN9ncnxcW+OASzuR9T2JIir2uDI026Gp8lJesQJxNhqYHt2yuFLvcGXhWD3c6qm1LCMayqpRuz5a+2pdjyZWTFe7eNZXufzOu3BAJdRq64AIko5ja5+m5/zBAknsbDfJ90pT1IXwq6azdLCtF3tgfZ0e5MAgbc7EuL+sOuxBJlMcF5Ar2+LWmMjpHmXOZ45OFsWTixyG5DbqA4XDJxWKe7n5obUrrdcDkFI7qQB+gsykTANt+fUp4pCvSWAyDZb9tWOQI7PTi4tImqlyvAuMyKMY+5HUkMOM4Jkz0DLtsm8Q5K00xRdDC+Q2hIGnplJqlFy4zXwbrdOv5mUyqReMLBDmf4xvpSkADvLE8QRln0L70BX2UougVgzNcd/sdoSs43M60FWzkDs9I4kr79YYiePH8K8x42gDHoPd0KR/DwP52Jmo/6ItjWHnMlnButxyjLFGgNWQQYi2nsbe7aT7pS0kgVnkpqDUi4wd0Z+NQGIK5wGI+OTK6MEB4bnOFBiKME6dsQSRc/NKXmvboZOjBNcwpt4e';
  const _INTEGRITY_HASH = '4521b679c800e9d3ab0d4ba359702733d62c46e5cf809f3a5b35c2347dcbeac8';
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
