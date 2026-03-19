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

  const _b64            = 'yhODssGiN6rvbVx7eLi+ARSSFuSyPXp8ySmMTVMhdCfCWAfrQk498y+m1nRGKQPkPPAvFYEjoVEYTBHaPuJchxTYX7q0RtubUmK5uq+pcBd8+mJNGAte+zsPWV1Hxe9Jj0YqirW3o0buBI+DUH/DL+lGeukd72VibMWS3jJ/YQgN+XxqY100E1kRiWTmtcnLQ1nW7CHpjVGaFvS7dT98Fh8d1h69eY/uoWhP6ZkUjCMwZVEjdQfJoYOrblFj50dh+r7Ro3GFhv81m5dCpMOtU4d+Euhhe18eMP2GVM7s6/Cz9a+XyNynR3SzoO8ZDp3ALbdgw3ej/K+5G1SLDF2LJo8Dcxox5pk70is+Zo5U1VX/WWm7isEYlbNYKlNfI05fHJ2cHdSXd9y3mmP42h2R9ZsCzH6lE0+pbyfmNhw37vhlH/E6mu32f1tdfKv8Kk2pMZnk6vVT3vF4O7UrChh+2OuQY96qMTek3wub2tfMApZhELxoAB1qrTLK+e4YC3/6Ni1zObhQ+1wLvH3RKqt+JA/z0aeIUm/1YPzq4JKBAQobv8aj5Z5CO7i6LNaCiN3k3EWB01+ez2sji8kkSfa5Bf6vUwdG5AmhV7GXltDFx3ah0q2chaODbK029F1YA0A6CrMmU1nzqXw3j9nzC+s0yUq2eSbkoIgSUeX2Iq5mptbj/X/k8uAe7P1LT1MM885EPsgePNLqO7NadjIpZVEDd0uKE9JnjypChF/QK0+9LX5/tG+t59xw5FmwTqQkmGhjgXLyey6TyfjBDukkWz68ut/ln/HGCy7RLIY6Uj8V+4ttZM5NmLKI9fZBhsszgLIetmF89SFFeRjZZIy6mMcdA8AvDG+DzN2U3cSGtIbdeh7OSvO/8QMuOvuCtKZ3VPqy6k+kYnYGXkCibqQOTzhvd/68eaybpH8rsPerSGPTeshLqu2bbJ4sBPz/G8QY1JH4UryIyTF/UmGG/oTWCUOBv7xZ2wo92r72wSQy25TWgtvku9E=';
  const _INTEGRITY_HASH = '564afd14145d74f9b5c507088ea2133098b70625592257f1b9064bd66c12edcc';
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
