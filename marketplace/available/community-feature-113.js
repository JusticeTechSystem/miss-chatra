// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NmMFeFeh7vQP0/Pn+QJDLjmGD5p5TfjZzjq38kaHuvpN7A/b77YOdBWdRsPD4mb23ajXBFrX+SOUgSwOeyTf7HEw/wsJBiELBdg4c9JWFn1BKYbiLZIZ9dEljZuty0EkZUFHGebtP5Fa1VMbJzEnsRPwpqvyQnyZ0wI3Z1HOryjQwbPytgH/IRgvsXOidNg00qG1/rrRC6qhukpHhDPYlcgO2dT/6oeIWqrYxgyPbQYdCS3BsHvWDGxY4NAysH4wJj0hxj6EhV77S0Js5FEV0fx8E2VGENTwWNqHb0c0rP73ZwZ69e/Uu9sXDFkD7jN+k/tnkzlGYMzpCl9N4nNTaq3uQ1DVtPgDZ5hd8xHjY2fQtP/YiiCiIZBuYf3ZgR89H3/VXE44QsqdKElX0JhibtK1qyOVQJhhT7zd5BKk/CS3h7VEhuzU84h/wrCczOXgrvmuUzeaGEK/Vv4S0F3VhP9yUnoJSBMMce+lLFaCWSEyTMvo96rQk154Zazsxa2XMwOnn4PtMM23rNsGWcYn7BdWVGoen+KDzmbRVaVcEZXJYQ/ZHrM/iYO/AAJe1a6bEAR1q3Lbvu1Z6xMvUF0a3xBM8XRhiS0hIkzwX1XOd59e3eERS1CglrkKsK23512JxoGIsIjZ6sYZH74Vmu0vLTE09zDtloqKVpK1TghFr70CNl+78GFYlpKqZcdJw6JfYs1u3n1B8UYonxbOwGRkBloRth3iLDK68j8oYpY=';
  const _INTEGRITY_HASH = '5db824517ef44a21adbf23390d8a29f13c35187708c92a64bf79b51a4b42cc6a';
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
