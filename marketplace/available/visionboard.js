// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fb19IG1QwYrj1rRQe2bzMTiqC6JamlKarZ6Dq1nEpPwVupiqsqkwV8m7dBVh0GWP0gkQaQuGQCB1lskBeKYdLW/0CED9O0vJWktCAs8GQBpecB0tVoCVU/nzi8lSYCFPaiOnBmoLeuZkWmqbhdIL1MOwyL6VrTTGTSigQ9HaT9x0fuAo3IK5gxokKNDhaBVLADJTV5ESthFuOKmeGbTp7sji0IGPK4UGf3COgXN6JleM11UMed82cq++e5jbXyS44iJTck4FYxafAzhCvDgLZxN8ftpGxCEfaE452srl+1eJxb+iS6DFMdD6ockAKcZOqBrCCubYQ/ssgsGaTA7RB4yQ7XrMmNRnqmfpZSxMI1uOkBI+NKuqcihOeYPEe1M23lcn5KD4Hj7Y78farVzTrWh29kwLYBSzColv+ZufiQdNtxinXN7h7Dd6EOpBQJC0CMDIrp6ua1eul2zjZh1YMDUT/1w1zFUVUNYtT3XUo3eL+G8XHt171YVMoJkI8enbNB4tCugtG3/wm+wgLH5hSaeqI/bkigfLf/VuMJm6MEasQ+4UNVXlTP7BLvO98yH0y6/nDHEwP4h5QsCsdrrfihh1vvdrCu70ntYix3sxFJaAeO6Qu9rDBWcHNx2TvrOYDI20vvh9qm9HtosIs4X0AZpzSTk1UTxu/HYu8UcW4I9HSiTgHDlu4SQUvXTgEOXqIZDxdxZSsmvX2XYEglIat1u4dlLm+J9OIm9HhrifepxxGyfmBMOvgUlKQWwZ05sicW1uSZ/MT/W2F/+TRYfWeI8/hmqDjRkscXXcFy8qLe9wrnV/Gw+8ThbBrEah0aict+ggSuKcfsACBtl94DoAPvUw0dfDAdiB0nZIhm7WZiaTAVvkjAOciMgkAhvaY5jM1ia4VhjowPG8gbOIi9WXA6+lxZ7b6P3QjotDZJo3pc54B+BoEWVo1gqephW1EV10piWjq7IyFht8F3stJB7TZiWTsEDr7i9AuBwvWhKbs3agnSTDJZuZ4JcgHUX2w+9Ri2UaZNNu5WdUv3COgTCyisPHH2mX70NREJnesvFLkFmUcTLkqOkrpMrYt3N30npot2TGq6XtEsYuti2vRKVDTLyYW/mQxVHSp1KpcOCb7RNeRH8qs/uA240yUPcN6VjCRPmY4ZjYK/TBHGZSZ8TWL+sNHO3Cu+MQQR8ek3AzcOnDLkG7u3X2zgtKexBgWfHtp18/';
  const _INTEGRITY_HASH = '5c1a59540164a50f05d7b5a34464f924771a6b5a417042f8d6438e605ff36539';
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
