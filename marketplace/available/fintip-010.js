// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bFavMFxIf2zrEyn0ooS7oYE6WEEmu9EFa4zDafMd6amyJx1g88XyvnzsrYHrw4l64vbOa2H2ZeiAAwI3E05CxX7ZH+XFijOIpxD8C5/t4A9XDl+48/QXse2UthlXgaRY4fzmAtVjHQl1etxu5oHmmtXZoF99/ubul89hKJCzCLqJa+gd/rO3StCw/ehuGMlGCxRPOVQvepFZGogf8GxAbTktsEqxnRNrjz9GxPfon5qpcM0FshW8Jmzeg+guBDpgsPOeumYzNYoazEfAfIQnr8ouydA09QrmSjxyVqlroUSIVyHISVcQwEED9MOhIghK2uWMWLRQr+ZSdL0LPShMm8/EWNb02tzQmS6D5t8B2N6MYbL2YMaQQG9RQA4gZbm2W1i3FTu+Oo6m2FiCRnDMuJMQKN5M1im7xasZO2C5hWhkPGrpBcHGaSSxJeaYO3f+wA7Kuw0zAX5EoW8kgHx5hwef5OB+9rTxVVZXRGXJlfXiLPwXOA2fx2cf0H8dfztdasG0sfxI4O0iE1JEtBrK3PsstG/R3dQWUEuDsJQeT37yQeAYtl5Ze/QwXfNPdeJJlsygiKOOSs/abzI6lUNUfi/AumqPDzQVzX+IRRy5j/FiizQDlr3NVonWYrqb/Ponf9DQbz52vHUbpqs8ZbJ1bxJzmk8o9oQfsGnjds1Fpts42b+rZjp2QdO2w2pl+fN922D85vgkfgthM2jjyg6X/5uhuZJQadxCGK9vDrnNe80WlL/RLW72JvSLjNvwgjXmx5a7swY6ZHclVC164RqL+SFSZ2lKrhpPvt0yI07yiimKjM+Cni4AZ5QePdA2OfdVzY3ems9QYyNE9WD9BwXTsYULYVp848aFo5q9FKN3Cmxx0WTDOgRBq41ux7W5+GFlQt2ubMrx3x7LTjiUYCdkbj2cQ8y8PaPB42NqnRGBCQAKQqORU7jv/dL5QZOkLMunKnAtcR8CvcBEL/ExC406SRfUlIGK5nhp0S8IbezgVHi9zDAQtygfdH3VK8qs1pxBVDc+mh1iVV09DQzt7ca8dHR5x9mpnsXqjLI7OsTQ050z';
  const _INTEGRITY_HASH = 'afa95b0ffa763a71568e1fd28fa724c37c2635e9d5036c153efe0c4ada15f448';
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
