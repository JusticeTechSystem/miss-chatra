// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sDXPiNXIDgy0/cuq9nBlEivf/c3znP0csvFxNzgIPaPS6yxQBnOoGVxoQD74Y+03XdqKXU5dGYDTut/SY1Evtq585qW06Y8w/BE8GWlqLD05X1WIKa8hPgx9/K4XdTNR2P65cLvVCIwIHFmHuSV66w2kBFONpZrjcUVCppteaWMcbofXjEIltzXgEj4QdrICnZTk9/qrLUG47i+Q5ED0QWdNk5CrnyoAEP8DM2WoT47od4T8G5/6zUi6geNV0QJy/kv3s0MNGdrGF5BsD/bQK98Lsa2GCbygmie+BoBRwcsf2tl1Il/vZSzwXXVDLRx4pJKE01wc8mjISU6XKyLQ4SJvo9nz/iQ19VtRZZFXR1u7H1Slkcht2RbTTqHBGCiiSar4BbZNkquLn/ONQsE2NKbYgTF9GQV0o38MKVewOc0Yjrfn4w4TVbZ/xqxVP1JZZdXV/dRwOY8dBwwFZ2fFpEGSAVsrsTMHjhy/Spbc873Fqz0gYwCyCHrWpF33BBNn9NZwmTcJs/iI5Rf+0xagWWbzZgaPZxO8bFCrGYDyLyjnIsuSqDtnmeYJJN77X497CjaPZ1VEp5zgn+WUhX1J1PcgSxbSfkICINhvdO9nOM0Kj/OemByrmrtXmDTmCWhZWWKAJM8nU16KSYg6jfA4OYS3PgX3IORLSF2KpLBvUfbBn9SLHE0ry7+Yf5hjbvikphheiD7vgMhmd2zfq/dEnJ3dTtq2gBkLdoauaKwtU+dg9sgGI6wx4rrLaCSJ1fYI7bzClH+dEnF6TwyGXDIu48HODbLc5mX5wHyJt1APmVicZcP2t1t56Acnh9IztzPPU/MCmgrtT9XGPx8V/pEywfcfpJG7FrxMFQbezVGosq2A9BnHdEXcj+yjoTKCvk/UVwJPTWucy4kTTY/ob+eluMaAqDHJgQaPPFDADyjcUl0PeTCeW0uhmBwZKF7EIytRCHh2M2TcX/QGOdhMTWWwt57bBMl8z7rf5OexpUttdYMbgAWSSYlDWknSQQS011qoi7DdUyJCF8YHG155qWZAqk3TnQc2Tox7S+y4dJ6K/0Qw0tb65tPbCQjI6qZaGfgtfUE+0qjTLvGWIfk=';
  const _INTEGRITY_HASH = 'd28905a45801881ddf636a65564949fbbff4e8aadf8e5dfdd6d1558d4d4e6aa2';
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
