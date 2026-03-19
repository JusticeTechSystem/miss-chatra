// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'B6xdTLYuVucfT7i6tlnw9xuSsesDrRaKdNG4LFws+tCo8UzgJ97rZnovaoAWrDxqRiVXks1T2H8MmZoCUdDyvHRuFwAVKw+3plqp6OqkJbAZgqFXBzSetVmJGclQZGS1mRToGtrjTlCFRIN7xnE3lrddMHkVcSfRWllJ1ZA3ezguF+JYTFu/PwLhyPTN03eKan5A4z7Kop7iMLzu5Nzw2c5CXRI7y3v1dwfuK9BMYuMmeEOylnPlLjuBqtw7wSCDz8YCf6kJVvt0LIMyp+9YRGgElWrziMyHK3/iGmcYddzwY0iQJahQca6WEcEsiRZ5no/4YgVvOst0OuEngXPfuZQDJgriohRzdadNNqJeu09yWy61zVKrrJ1rONMHCfJZ3yaLEH5tV0jAQVaKnY3gImb+Dcaf7yePONTAlRVJdniNnIqQvCCUloetcs9QgI63UIgUUjBC+NZai1MrleqrVZuoc3myMIMDHfg5yF+BO2i/oEenRTSpFwd9LN33Qm3TJKU+SLq9b+XUytV8xzy6OHRz601rOq72zP2biUoKqaYgKiavVizAKVVWToht96xwOEArL45CIGY/iF6CZoAllo2X+gT3VFxy1g3fsWzcKW01bCBKJa6ZkDp96stY8XD2LMD7+EBP7L5hGp9Qat1IvGxwqP7IxLNkcEqOenXfG1u5PCtvWG6hQ2Z8HklVHxwrcIwma4mjV10NCdQQKaZfTKEQhL+3xTPw4N6o+g7kBoJ3iHRXkUjEVFxW1fJklU6J/RduRl6GSFQNI9hlwBh602YYIH+lA7wt3UL6/Q0sQzdHm0qQbh0gGuu7s8bHYRuI9SuGEvqbvxc0juS9nZYbhkT4iPtNrSkMO9FmxF7uoXV0Blpe809vA7AbHbbZOcq4u710TAaA6EVzjhhtdYz/3Gc9et1jKX2ltIV1zRqCrGyiiiSFU9dxcGOJtv5knBMqd73iz0Fh+ZRMN0xhBvBM9d3yR4MLIahSmy6E1/yzYZ0LJA==';
  const _INTEGRITY_HASH = 'd49e32815fc45a5f083106d3f292c938b405b1932590cb27c2f7ed9bf1dc17e1';
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
