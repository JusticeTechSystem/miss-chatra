// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RL6QdszqC/Ew9Kxm+GXZbo+T0SNlT7YXbisGo7D2h2evYKP6FH6ZGKPlm4JRIme23doDXWoalsDSxzwx/cJmpDOkR1uwaHj3Ft4i53RRuPOzJMzu5H2kdIPrUc3NWTfHv+91RBDOMLoPFsnV+uMb4+boxXFMfmDRuDt5aZgf3N62jnE0B0kAUbh2lmnMCUKRRyaJP+ceJ8DR4Yr1nWkHlfWYTWz3eqopwOSxeKQ1dAWWe/TiA+QIWqvny5hQ4JP5ucAHgaeOoNOmmQo3XjsqqK9IEgfTTbzBua7wFoSG1i3gUV3dxczHbJAgsUGe5ZE/kxrMBG+I1NKpn+m8oO6daeMbmpkDG1RKhd35ZyH+ZbXUxXtHma48DxKYpshzCk9Cc9a75aPjhn66ySxHNGg5NfYb7JggAmyoqgIQOsF8GUNp1etX2duW4l26nd9W7EjnhT11CokreE+rV0fhn6cDXYy7IDsr9n+E+TmRBQQ9cd7+rHVn0wspTctRXDb21R+DT20VjFkX5Dhwf5wc5+fMP8Xf8tkfcI8gsevVgdJ6fVLECMe3Ai+gO8Bw26ehanZt3U64jQJmW0zu1iLzmjZwY+cLiAyTyVWBvzTUz9tnRr2ee/FM/928JEivySWMfZ18e4r8nKuNzAfC3ISqgTt0AL2OuhvooDt2r2/LllRQmSDkAn6jc0dsi64tJf2lSHBC2jSOk+IjZYthBSJ1RW5qUYpTOKJYHFxHfAr/3VbjksMyiy4jDYq8pz8nHwZpkPLwClPisMt9FrWnEn+MPs7hUkj3FrxnPAbhJrI97F/L26QzsolCKhvE9sqQTsFDlqkD/Mx4LPo8BK0RJWLa59o6nI27B6YwZuY3Qk5UaOJQqp+cxRWFO+cWu4EXEkNh8411KQK7GVJhWMqwMHoytVq5An+jsPlPHiVBdbJeT6CCpRKc0xXTmih+Xi6oBsopwxn0DjCvhtLjqA8o/nsuEsMgxkTxVH5c1WTYEMHd+QaOdJB4a30fXXWASKTdoLet+hz0+WZc2jr6f6897tPRh/pPrOoMDqNnJ/DgaVfy+UCfR+FqXh5AKEWMZI9FW0nEnkkbTf4uer0d2ZekX/g=';
  const _INTEGRITY_HASH = '31f9f4b8e1b94e9ad8add4807f1524ab2d2708254f99d5d41b3e16467014442c';
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
