// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LL+/Q4FsIuSqlVZ0xo0ZkbHmDSb4isOB/2y8kbaT5Rrcrl90zMZSBdnV7qmYmKd0q4exgK6ZOeIpXbKn82lUH+/FSxBGWb/uld/yUf931Nt+NJb7Rmdt/JCFr8aJQpGMI002IbvICapdZUc62UXuhr2Ee9EKg0FZFYeXNtXuvvpnUTRbEXr13jJf45wRF2yGI9vjx4YIhHchZEKh0crU4Urd61frPOXyBvFymDxH/2aQvfCayX0vcImF4wlHSOSs3ZMWvIE8EQXiBGilDQkRS8I+U327H/aZ2XNdy9ZIhDzrezS7PtwJ5ypqDDzb4iO+1KXTuDdBHCOpQl2ey7xiuAVG0p/1nQBwfwItohI2ow3m/c9WlyYcSUpSih3rN0Ft15Q0kfaEvsZX53fC3d3cpQYKOHbvZ8tQWBQPxBiDPLTgn8wzeWB7x+w7YeoR43hBPlKc7Q+izdrnmLy5hO5rPsK97yaqgtDY1AfKlDl7zlpG2kIz/dD7dUQ4dStjkbvMNE5BLbZhx05i1vTNnFMWqgztQvbUhqd67sYbsnh4utfHpIypGK6mnPjIBgfcadnpcP9ZVTXM6gs8Q1trfd4o5Xqdx8NdUcslfWUdbOMBymFeqoR2qPLA4/vVKuJ0/zduRB8R2O2IX2+6MByD8CAQ6RGal2UWVnEZlUQbJ5o3VN5baVIPzicFFUUCIJdHaE3ZaFLULaqFrTfYfH96sJlk+AaDER7ry705EfwCcxpP50YvYhy0+NXhvD78UTP7C/uY3zvKyrpLunyhrwZ+eLrKZiDbNuTFiRyTZRyCCWNpfbUXMDhSBz89Nowin3pa0A4XnLvciG+yX7Z1CIMdipJLqL13a5GlR8oo/NTopd5t/OLWIsZxXa/zaqh1wTIMgg2VHd/GlH8zSjS5l12HgtpIevobPNdXKE2J2iEoFtZIJrk65qLCNpffunWYvqS6XQtyAwRqc9qz6n7PoNLoxRa+BIUOyfph1HvRtyfYWOE1Ydcw++KQoBzYkNxu2MSQQ136z/93W8bo5kJWLniP54bi8vlzSQkuS8NCnpEGFH1y31gvigd3oVz49qWaPkFoMRRo1nmn45lLq9PKx8S5cQHcPUTeLaGgoNY6KxF7xlMlIl4o9F+t+T6GcKwVcd00rEX7v9mtr8D85rgBGPujZxY68DrkSmI4gJr286VPTtE7illjeASbQeOTohXZuSEfwVBq7OT0E6xheSoMu8czT3N45Z+FnWDMQ/mp1vFlQimticjFWPUvZYzymjZlWQC7QdOjSPlCFM9o7ITxxKvX+aimxXSGqSePbbyCrXo169ufmfBFejbvrMi/2AuzRxxCwGvaH7323LRc8zN8wewWlu6VQipEk1P9/ZQtY+nVwl0TZOMZR3XYkUpQ1x2qlTB5vINcYRRUXVPkIq8fRQBE';
  const _INTEGRITY_HASH = '1cb4d5b18a3f64b9a7113fd0c85229bd3f6c8d06e4bb5d6c5af463b2d0d665a9';
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
