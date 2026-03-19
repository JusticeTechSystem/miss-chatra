// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '16NmOD9urGUx7IuJdxVNRwDqCCdcdraTrRn3kdjVcj8ma2kuww4xVIP7PfCE6CUETacOJzLISwpvYHU9k9etMnlOvgkpnlBO+Y80XPXmIQlwOxJl6dPdczYbfjMTfu6KQTJpu6UHqop76Aev/dNVybfhIXsTeY6J1w9MYYINT9JXKEBsFGKwzdmUrFGCT+HO0WAwA9s+H/B6hn7uC9+yaLLCxMtBY5030sSIo6IcpP/LHp7FTr0lHk34A4xCJhjKDEbCvH8FgmfSanIf/UWV8VqfKJSkDJ+JggJzlgPaBKJGsR3bKZyJz4CXqosR7cDR69JMMXfWrsKbUhGx6hqo3WRW0gOyDrx5Mzn72hM1lrymA9Sf9WvpDoLpj7spAs7A0F1CKp1j1Q3pthN030W3gafkKfUVAOqhyeclj5y5O25pSJ076dVWUys4pto2uDAny4T75TeGMiRQq+xYIfAocq1jmuhXgL+LYswp1fM79FRlqmasHSCs0FiWYB49UZR5MXlmOE+yhUi9uYpMu8XO1TFsBCMjWzuAnFSoQ5XsO4qeGbVVx1lJ6Mboy5aMijZRxBVTOgMUY477R8pkVovFzGvr9uRRJuDp6ykq/qCZ3naLGYXa7i+aZGTt7IOjnEZsoa34eGzHS2oljOMTGBt8HJHUPZbSkMd4RGuVMuvzYQzeKVYE0Nmcj1WreNUDmWV2daWAdJXYsF2Qg78e6QkZ3P6rRFYt9t9PYjl+C/Ov6e+VcJu5rbhlptaNz97IdvecviGKYMQaYGSzvYJqNeayonZInj0SkXYSyGn6Bzh5gjUzhiJjMKfqL4jbWCeUPTiCMapodS6y1QIpchbqwWZoDFLYo9qTypNMWM0TPUCy9cNCX6pAVhs3gtfJiqDWagxWXWVRdbPd6v203CYFgM7CAX13QEDu5/y3T+wNL1vGtdrXAEMjAROwGW9O2ZIUwwHGvi0W1U/DpUxSUFOJ4krzmr4yVjz+5xrjfKRkNT7leyY+9VY/+CLxHcANFKz/0N4qYcfKnC8KIMINZI+fSWf9GF49Gowt/g==';
  const _INTEGRITY_HASH = 'daeba1313b98d92ee1640663d6592b0aceb47c4ae724325d41cf5c89fd67079a';
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
