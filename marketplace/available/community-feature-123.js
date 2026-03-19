// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oXwTWTqjfu6zQtT/vBzaMnHkBFAy/pv/AiYv8T4fRql1y0XSBtucPzrNnHBcjsfHzPTIP6TaSP7mwYBCAeg08G/oUj0/ly1PNuwvanNm3b5JAWrKYJnPH9fTNdCyVaIArnszXUAgEFmR/WRHue0ujZErMoLrZZ4YQ+z36yCNgNWi3vuz3rNlnj6EL8TgZPuUiNi1lQaBtk8DIw7m49pjBBF8yWgWdDTKkGy3I2yHG9zWKcvTekPnBrByM4molXkvbz2ADL3ALmpnt0opzOu5+Qof/X4W1RTpq/1CPAAdSU4w82jTt5Y53NO9klJYZlHvgWA7ADLvx6bQvqk+9K8wCcw0D834rVpH/nShnmZG42+0qT89XsQkuNavAD/LP8MCYjE/F5CLEIuZ1t+U7nqo8utUKv9HexowxkFM9Zhr0AJ6MQHTsOnJjYyyHM5dpDNrlKNomvKvDjcPxmLz9bL6VJY67ZibSUzuWDaKUq90oUahLWXV+X8lhRzAjkXpbmPUlPwRWjQKJqUU1nK6HsLXeY2Av0HD1S4Xj/8kbTx+BdCrNuAc+HFoauKZ8L1RNyjaC4C6QzDuIgGqcUYlpsAQ3cyb+ESPQsOWgenAvTH6l8FBDx3EVk+O9zvVK+rb+5eAWtwD5lJQLqPHPP2Tj6x01b/w2e+u54nFk6EoGBNy8kHrpHYDNfqS1Qqml0QbAWT58tgzfAtjCQ41NLxSP2tvF75XSbVDW4V8y4z7lQM=';
  const _INTEGRITY_HASH = '9234f2ed135ebaa631b587c0773b6c9d411bff034e6b25e790ccd72895317412';
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
