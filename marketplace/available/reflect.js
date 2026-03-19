// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8mNboqoe1+lOwPcqqC9u1lhxIQfFqN7oQl/2g6J4qUs5yJMj0U8MjolkfRQtQJHVzXMwNMryRlIb9+NYUFuBeA5z5PLV1tea/iDE5ZVSEvlUd4dN6Pav1WzOF8Uylm2QDlA+ZCZO/vQ7k8/e5xM274pFlq5frSIu6BENSHDD11FQjMQdy5gpUltlOzKIheAFTZXFpEvLvx4K5n1pg8vwlElWe5vMtEeNbbaHC94xSu7t8v4tejVKIWJmAEePs+Rmmo1cNAFapsJqbX28V4eQz3I5plWA/UsPm4Gn2l8OBilRUgt8qh2Y65ywoFfVKTEpm62j9OuliBai2YTPFYAGm1PKa6d+N6Bz8Jmrl/5kms3iqOBKnK0bGorwqLZUU1NXJ9v75K7gi9CmpAaPcAaR5JGhx0gg+pawlfFlKiW0X2Smly1ZyxrmI36qb1M6cVbaEAHR1d1ZwTFSkVgmqfawYC+WbvPUAKar33268qlQ7ZOlJvIJ3m8CvK0y76sODUxJP5zgWPxJ8T8/Hf7FFr5WLOtqZqKxr8PfAMKtPk09Pc4WZM7VsaOgEetBPMGGR1lXJ5EYMM12vQmmJxTO7so6ladIsNTl0YbshBMCs7RXjxXHwSHBBlVW0VlO4hxWOGoxRyuu+yVQ+wYlnpezzNf0hqRrvk1E0DK7qKgZZzS7c6E2sUZH4J4UDLXBusRY5KWC+znPCq0w0Jjqg5Y2Mco5qYvzaxvP1QTRvxGnIo+/5axNMC1vmgmF7VJRllwXRxFHGCHlzGmi4siE1SLg8ibb8kIwt5MWbc9oukluYakCGCUXj6M+AE6KeEzw42rvjNScCI9+mo5aGW671BDfHuW7ocxPuxt0lJm0wLXF9FoLkFVbtrodozPQyLot5v0gTIwCj/CH6122MsdUyC4Km2B3afZ/JFEwK1L96Ib+MTqnQmaAlXgsVbV5imicxjJAzua/wC0Ia6mPmlxrR8vkhUIK5irZF53WlixPk80mGLSbp6AM0sDZzXbDfDAsCvF5JpeHmwhd5z2Cvn0cPAVnYLRMfUGd/nUKVrB9hUO/NpbLildJL/5jyGPKFv90RorMCa4Ch8JzvGMetgV8ezOTzGuSOyjZUMguk76sgCdhAgpHbw0rAJPLL+Pn1YeoRXgBMF9wC535QVGaeJ+MogmES9ITQog5pAz/qz4aH5l+l6O4+kYwfvbyL2GF3kN4Tu8W+xG3vRWX';
  const _INTEGRITY_HASH = 'c5915188b950d911244c224db8568710885c03b39b2215dcb0a9703c4b7db0e6';
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
