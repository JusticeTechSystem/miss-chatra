// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sfaSa1KzSGvDvhIAzr9IXW5hD8plc3D6OGvdNo7S2oT88maok+1TdUIJRPhryjFBD8HS+718vGBh5IeBibdJNksr/VL/wK/I4ztSutJkHh/BfANUBWOm2UsOWVy7ZoSxwZyC/4fgQm99VTVLoUofeDiZ+ECbmNciRTOuEHIYcMjVGXXdK0rXKjBFqIF5bk3l0HyX1fMYO2yRhvEuY3B416BmrWiyOStU0TaSaK4c8dBkyLupX70QysJFGzBwE+GMu8sn8vrpXmYNSSBwrbU6YBUaWPCiGHqpPNSlEf7z0WM/rIbiq5B02R/g24+ZhjIGyAquQBTQqYI7cGIdrbCrziH6qa8QE1LW+MjkRulmh5/Tf7ZAbgN4mdRDqoV3MnKNqf+nM3eIHEWOOjETpAUTfZsAnZjD37OGY0w7c80hI6vKv4gfrlwKC2vasYiJlPdu9uhK6QBW0YifTYlDxg0vslBVDHWcoqxHF+idgrFxJVDSZao9E1jeoVG3bU4t4jdZwX+edEwmZ26FNrXOu17Sdhn59ZiHiY1jYNJdBS4FRb3rieojXT+WpXsCKd4ZPYtKqHssm3esUHM4CETCStfS8NSGgSwq188W4YZW9HWKfFWw6Es43elZVZQRIeN2LXNuupBiZ1kqs6fvNUO3AbvloVz2/RRS1wxx6JL5ZGeoZWrokHDfUbJi6Q==';
  const _INTEGRITY_HASH = '0e85c6fa8f0123d35235a7f7d98304cb79ea23719951f2a32479cc44ba29e08b';
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
