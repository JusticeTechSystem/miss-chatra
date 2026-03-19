// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C9C/Zb48ciC2csvsfIIwXde+o3hzMKjYxOGExt+IlNRPTjbeGnR4yX/6dWVbELe9yGJRahNGFptMMYlvmsARsefOQq9snwexm1PCKtI3D7WNdyRWyz1kNKlOvahD6rEw0HXJWw5QaBuroyDH7q7GxoXmyygx5zmuq4MXcZwvJbNu6l9wS1HcAJNEX2xhD6x0PSE3wUXzlMGYmEK0o5kQ2eMXqTMpba9eT26KPpoYstvqL/+d7mIx+m0eQhMBtk43wxMggU3pR85aj9hBr15oEt65O1esxEcC7TaSQWTo2VnSdU6fxaJIzacW2VYk5d1F6FwGBW6y3Nf9uEJ+9uREyfbnwZycSjXvx1Iv0jr+sPhfCtadMjU0VEaIJQKcvwEuhwTgy7FxhB30yR4maTXyK2k9HVO6Sm0dt6HduGktWX4tsfiXyOJwTo/cSuy1hiFK7Wk8MDke4x5Knw9OLUHzXQepZxQywv2fjvVXbVxC1XTxy4WlQn7s4dyW5x/OTRE9a8WM1ZYp7qAP0SRROtdtHFAkLYMfPr8CBc+tOI/HpY0oHNjoJ0gpR0rZxhYLW/sMjgi1bi6R5vi/8lndSkhoPuWLp8233RZ+fkakdkcCzl73AZAuMquP+TwD0DLx/Zk3BCTtOnMfIcOv3mTzab669VN/9vqq3ON2HXzTOr4fVup5vBgWWr5n2w7uO7LPQFwW12dgyxmqX0i1pTe8rkc0AZ+xF9blkHMTd7lJ8Xj1vio5oz6iJPmdGsATcwDVGgZCiIRKzisJYJoC9kUP1PVhF+E06qzuPzpWdaR4vCkBzTlLQ5WVPtO+Lcnk21NKQlNcgU+/cXMim65Z7cEfKAUaQ56F0yXiyQDRYNc0jrLaTXO8fnnvWKDocoJ9ADRfb8rG7FRcJAN+GxU/L7tKSC0YRKBeNz8f49mBuGTAx4Ew4f0NEtm3xrQ4VgBIkin98DM1Tbdk2gkZo7Nfs6yPvexp9vY1z5BZbxw66Jr1DDzsJV7uXQNUlS9gEjHbiRR4WW0aE9PlCNbCd6OfVGFqdXY=';
  const _INTEGRITY_HASH = '5c82cd7b56d35e77fc691816ff3b7a1705f2eb0e305d406202834b25c325945f';
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
