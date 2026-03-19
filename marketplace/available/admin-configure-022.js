// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3UduqP4C+xlUec5+iKir9m1VjXRJQngFogeWkiC2N6fQZM762pnJoSFTii2QmzsSETykeES+k2LHTuWx5yYCE/0+QoyrVw5w7g6kIfQqjpGkB2sYNYnJHS79VAiuIDmaqJw01RuUDKNPPOhhORdYlbgAXxThA+MdoQvBsOPYyYgfteCZ3TJdcp+IZhyK9xP8juA4V+KckaPvMwDiFt4abUPrZ19D4oOya60z/iRFeGndlbsShGtw7FpSEt4sMnneVPgXpRvkZRgEeJdSlYyV1YCu5Bfzl50OJCKUlHpRySihGHe+pGMqagGvOPG8M65/fJDonfv1RYOBBN5lBHWqWXjaP7SJLDJng6jIf+9D0ovpWQwiJXJLw60HAggvOAOlZmH5qEtHTeuTvnQC+MYNcRjUueTWcUMfY0lnSPLXFpunWWN539etnsHrOpM23AQc2zcemd24viF4ZNHu0pN8kYr36ZAuL93zo95CPtqYwky7ExyubvJdflP0fWPUdulSE8yEE/+Z2sXoVPUlLIeWlXxgVegaMvnok2aqFtuh/VVb2eoEZVIuRH07lWrZ0jW5J+xA8zrKR8uqLoTmFCKJ7/tD/WGHxmQUA1gDUbfPi4BBP2jDL1YU4h2LI1wDgNz62SfcdMI+RNbo7UiC24szDWDFGjDhcGTrcXPcp5BcS0f8zcYFDJkZ/pziG9AkuaQt5wSX0C4wpZK191kJsDtnd/a7g13/0vJaqnBqv2vvHsqh16cdT66yf7KKIFdG0XnswBCbTcmiiNJf2UhVH7EL569dbUtJ1zXIGul1LlyU1uNLJsoIKzZs13T3kEmkk0bOaOtWxnW57JbsXhDTSJ1yk7RWPEFddwCK3uPU4mCKhVyxVR6e41cmTwHB46GT0RLb/YX5ji1y72yNkOz8QL8EnBW4B1vNd+lrOjlslP5mFn3dncBhIiA3DG/o0Ye3/aABHuCjEBObtOfrGlDWhICOsD2UgxCFCjjBsyNPEHvan4Hv6rL8bIO9lpLU/BuLWj0KdALPfRgQ7JPl1121+YFweiFP';
  const _INTEGRITY_HASH = 'ca686f08f24f57fb2a7bfa9b9aca60580c7e513b4bda5797001868f1cea92952';
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
