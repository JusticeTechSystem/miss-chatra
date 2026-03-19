// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'heHFgDDkxDIhFUFiscd7w7tGigppP8IRDyw6KSHQMc1ytzsaFz2rWFvEkFXPmkP762UguAiwYpTgGtuSalq+J/PzyDqkh7UQ9f3gmSyHI5kpBlppaNiPqqB3DRK9P9drbhqSu1eXoKabMdJurpJvVNcNEYIE1zmbVHCtVnmR6sjnygGya0S8oN6bLEUSUPw5Z1wYqr0aeiH7Pq/yEH3Id3wssBB7U7M/6KkiqVrkBqQFLa6AlA71/pQwHb0Pn/UbdLs4seQ3VF9o8tv+q7F34ZJ8Ytd06Th9m98jWJD3VS4biyjKaSRZKdMGuWK6jevP45xao8O7nN7TptRflvaWI0pvdEIsrLxl47SW4q0dtuqL1oWgDJ74XzE7H9HQTLF4peNKL2qNiglX699q7MgZ7+4nHiNpTektE9YcK3yaNIqhW1wh/kudDouLKMNLUgTdkYLNTHt8mbTBDpMaWHG2AyHoAKYZyefJttxNC3cgbSpdnQ4xDbfHd384rgBzA4VNr0HlDnwzRhEbBZfkP5OLEL8vZgrtef/0MyZtJX2ZAIiYXUxG3o+/dJWCCdrXCzm9TFl0yWgzfGeYF66C/Q0/kUREo5M8t01X4Fj9yYw1YPziDxXXd6eiUe+yL/hLrd8w6VrElgCu0K5TaiOQWiE+FzESg9TzcVtTQ7XfwRkCSOVClU/pbXs0jcvcBQ007+VX9B8eMhhigUmOzizIQU31FyIK10zwuw==';
  const _INTEGRITY_HASH = '523e6f1650e568f2ae22e70c1c9a4b5406cfd714d5d994d25cdedf097d8fa7a3';
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
