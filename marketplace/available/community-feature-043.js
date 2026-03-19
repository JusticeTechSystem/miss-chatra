// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AY/TsZvVDXVz7UXJn2TslpYGiLd+zBRmlgqlY4WPVtV9HEGLYPMcRDSKUvP7Yoj5aGUZX0c/Wv7o4JI6SBDHObb072JMRyd/QfgaCc0ZH1yU/2YH/U2UscxTPSPLpi8ph/nYZYlGikaig1SoDDHw/javBELKbMZ/T39Mt9bE/KxcE1/AxCp5YF9ONqmK0DDmA15Vh2ea1W0/6NxjwIHZ2RPUqGm5PE65IFUoiuvobYVVlyvoB0fd0RtaBiBs4e5ZRG2+DmNkiQZtFLD+LE6nE5IsL6oXGlMl48l71yXO42vT4qxpdk25dIsHJhjHSdu1y0upPb3DRhpFcok40M2XJ0269Ksas11x7RR0BJ+ymkKUv3FqxV+NexPZ4bW7toVc5bVy5EcEL1pNcW2RJ9ojen/O7nvsEiP6iXV9YebK0uJ/o9kV76Jc5R37W8h1K1wSpSebTDMA/ZUu7BOHbRF32RaV//pX5csg8M+stctkYackP+rpqaR9KnxzN3Ow86RdIOAAu//xQQiJm8NUcmQ4tQEneAqaCW4KjRWhIqZGI9k8wYqcg2wHOCAs4aMnvURua1OnAYhtSkRMI3m+JoN5cmIwQaY9X1x99ZyMNPjIcZCqHFERbgv5r3rY1jrVTdKr9GIZmOyG7w5NMtkArNOu2bivNZZdBH/WcJHMlSNTft4h+ZsLi31UqacyNAEWkX8ypsWucuVz2F3HR/v/b/35gqJr7BXg/pARbg==';
  const _INTEGRITY_HASH = '6ef80a4e1638088727625f98d44e02b9255346a140c230b04307a5c93308e48b';
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
