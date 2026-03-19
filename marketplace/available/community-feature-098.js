// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm0hBG6DH63tid1xHH7ZYtPHZEOm1VL0mAYIJkkkczMu6dCrvZ1OZ/LpnEWTuevo/RktWWZsvran/1MGjeZoTSNgdcKz5ANjiblEsbFoq+E+GDhp6PAeXil/fTnkh7THIagj/uuNiIi25izdAmGS711+BjWFxsRExqCfvvIJIFpNW89qZvQZfYdTWknhH7qsL5SZ+A5a7GYA+84f9+xfSbI3qHQ48a7scnsjnEl3q8n97QvUy5dxyWYsvhIKb/iIC3ayiNxeygYVRKyqDfGOnD6hB3+P4t5TQ4/6ynIhRQIiRvYXu41ZlTfyaUgUtemXzEo15PeaN/4n76KpeTK5FRnCUoViznGeX+ZolHnRAiTskK3Lvqtg00TaGsVPq9EGyiXuzCfAzdKhiVnUBVS9MugRGPbhDCR2+2D+5R9XJiDXpR3MphZV3v+utFAYWldJIAhF+ZdYtKZ0KOh+GAkEGCrRR4phYlvWDNqJDXPN2NzV1Aqn4POsVnCmW+Rrp4bMYy9svXV3Uci5btkXHj34nZ1hPcUcl7Bkos5amDGiE6p2B2FdW3X+RM2TeSYupCyTo5bF67+IESvrQULG8M9t+dDTlOXLcM/1/UDNr0fMvpv4OIEulaDY33IBXUEuJ0itp/VCvn2cbjMwXdYXJfnB3HtcidRIB1mj7J0+hbGvA//8ZSAzQbxy9dFOwfcLdqIKv0KE+6Wtn7aGxnlwwy37470ERJeqCAXMYVA==';
  const _INTEGRITY_HASH = '6b5fd36e423e43afef0d288c4fac4251ed1b5284feb35d7a97e234875bb82f4a';
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
