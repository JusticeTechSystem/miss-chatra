// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oitdI1Bkz+I2UCfsqZ4g7+Yk/TrZ7Xc2muhH51hRT8MYoeRv2tpgLEtVMY/styqVcLC3+n4EqDZEfj6KA50yhbXnolBvcR0LajCLMNs/ARuhQwmuLFqykRT2c2f/aIHTJBiaQ4GN9Td1j7UcbhvqIscmDWmKdU45Nh7JO+jeh9kP64DHQG+GPRv4h4Gx0xKvCs3S3zvigq33nJlZi2PHrD/6ib4nas1dCgn+jrHz+m1E9wftCFp77uhgSPtr3vx279akQMfQb88ahwfSJ2ZYORgUmaFoP5XtTk/U5FFHezd3XHWmNYAG7GmJVldDUzb1b2slhVBz3hw/r1QpKiKW63uSk4eCKKX4dS+vF5GQa/2jWHZxXCYSShp8O3MD0gBno9IKlAeFU94fqwpwaDgKeXi5aKJPERg6bMZ7PZM4aN6V8EvtEQUezwJNY7b+9yD0IPnYDeZMgj97JXlnmLu9KgrgHziyee+DOw3Pe0U3bdqvhbf0whUdR051SkNBf5N7+9Dl7vW/xBekOotFkRYxzEonJNvMQiNT5J2w5CgTkxBoz/Lx5lxJi6sobPfANF9qnR5cXlLE3xdZfdgb5kVx5A4x9PdX1/LWuNrlvCjeVvr63fWwEZumNlKUWoWyAencoaqeXx+QmV7LCQeGgSaBNzG9txX5Vggr5jKOb/p9P/6gayKnStHQCfk2c0FN13wmdv9Tk6Ux0KFs8+xjzZmGxFl1uPfe3MIAVT7OrARSZa/G9azQOzet+QSK2iHqF5CP96xJqVGwdv2yRqkG0YqebvqWAmTS9QZut/rhXCUq4GJDTpj4fmT1U/iwNI7DKEc/Ohv4JndCYJ4ewY1m4tP2OY2TowcvnbSMlfy9kYVOGC99N3vMpO7K56lehqnAxev64pO7KvEZS2LXbOmd6HayFt2Xy1hOOgwI0/1Z4U1pPEfTHerO7LgJ3T/MDL/Rr3bpBnMI6pAC1lgeHeccKUiSsdFNNuBaB0p2l8nfIMYVXQ==';
  const _INTEGRITY_HASH = '78a8edec8bfec88f47388cbab15b00f011f574c833b4c8ed95507f49492cec0f';
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
