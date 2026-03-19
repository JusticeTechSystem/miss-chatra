// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm6r2q/WE7QUOaWwpp3RS7jiF84ExWzl3xiYEUHPVWWwk9kCQ/NlRLjvVwWDRKxR65wShurtKYol5p8TILi+qoaM7Agv2S58tqWXHcvFiYVYVtT+ZgF1WmeTAD+Esm321T6Q6yLgmJ+a3BfLYZvSj+0Uo6GJUMwr1d7ukbE//ZaB2SyhWdtaUNl2/zEmMplblBrSmI5sZeM5C91G32n6YVP4ARTBJTHA+QPzKb3w5j6woT3djV7eShSL1cANHugfGAG/eXVnGqL19Qpha01n50x18dLpTI+NqlbMMfdGvo7OSD/AN/zrBP2QFfrjxoeKp5OIE63RLxV5aUbwM/ONxdibLmsJtN8k5sb4sF3KxOQmWMgV18NS2RAg1ggNMHGjIrQFt0w3P5BMXokx8FxLsA6BzGE2RsVD6H+JSt7uRWxXBr76UnuRG9MIdInr19h7j0c5RZ9lfB9odbpDzhWFQFtedp0d5kR4uccQt6F77QqNaSFIDJ/Y/vXWW7G/budqN7beR031TuGX9ViydsM0qg/lR3S0/IBJVuOiJsBzDAM2b9tlfzIAsnWRKYQfm2Fr2r4vsIjdz8s4oTZZY3AETlh2ZUVbiVjmoxCkbU4arUJS1leFoGf1PW5VfeM5o6JccE7PMshA14jZUq0n+jt/Aptd8zKXOtFBJIaC3ccoc91Af3suGk8XdA9BHFbjGQStrXDH+5s2AlctogFh48vVv5PGBV4pjVFOpAzbA/beLmg==';
  const _INTEGRITY_HASH = 'b55aeee86c5e7394cf50fbe7c58e5eeaa638af35a2e342a65a924de594b79949';
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
