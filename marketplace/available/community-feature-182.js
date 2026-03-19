// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '12zesjclOmQb5LWw2AGHss4PhR8kGqip6xzPIFGUlxOCc22xjvn1jkhcnHLNi9FqNKc5JspDO9F0S10q7tfRiKl+mguOA3TFsQN5ztgTrI1SpSMxm6v/VdMX4dPrDEKuBa2vcW8kf4PeR5+grChmknPCdiK2rfgxSTDtYJZGDC2TapV6MmzlbRHeWhdux8BuI7vVA8zFxCKYSOW7Eyfgxnd9zrD8+BOtgwkMHpz/0DJjE/Eiz5nU+vPzqDKWrtpf3opm7gDGEimlHw1vMvQ4LgSY7o9QrfBe8a8bDWkoqo6We2BkvB+UrTgVJxQ6uZXdMvs2GV5jK3KiQ0zsfTWRoBAxUSNgdUtG/CKRkeVtPBzYeW/wUsj1GZR/DhoFWUDuE6DYLDAp9bILX8hKyQqNEHKTWlFBySURXlX8QloZIuTrH3zMcivhlrgGiiuoHtXq/X9AP9J3DiRnKCtfLxsJTtMN6Tm8qDdANJIs/JaUpEIB3g9Q7/RvyUP43ZECSjxKag8YcADue9YzojdFihcM5AUqIAtOg3yqbEz74QavXA8aEppSd8k+jsEf7UM0V19HVkV4D0fpNoSLC5PgjYOWWiVQvFiWO8mtVgR+zaKA0epB4L7sqoyBk+AY8MeNrZT1orwiF4QOX5n5XYxNZH/ST+a/5wCz3VzXIFhId4KwrKaGhuc8U9KUEj8c7qibOe1/RM0EZe4O09q8GzhhIPe/I7gldhBb935k6bFCHmcsfdLHqfA=';
  const _INTEGRITY_HASH = '1be3b7582c6675ddc647608d6761d6f8a8083c132c30acad8c571e497bcf7654';
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
