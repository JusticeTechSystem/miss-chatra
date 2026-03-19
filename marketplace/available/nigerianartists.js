// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qmdb1PtuG+pl3H00qO1ntsjmY3tqNJZWAUl3JYqMNVvCYiB4S+5avHmrsd8vcUmbMasm0IedW9okMoATO71QudndTfK4KIzP7GA9SUlT07qKmHuoDeu7+Bd/Sy95L9yv0ITG8YsMcK0lINiKZz2+7dqoi/oAZ1yx+DEuOjmn8gSdKNdNNDlaJlF1LXOJuhVdjRPoPe0bH3OwBhzt5RpriHYSjOWPoDfVoX80lY24axxXuGP0xYk/JmatN4wIu80+G3+pYGnBfe4vvZ36fU/8yM+EU8R2yvMaa2lQKcPnP0zMRqCC/USKZHBi4iEZOMnVUA4m8Yi3mjSNu1EvszGcoExnTxXeR0arlMUCBl5jqR1mhvK3snnyxqhQT45TS5bOsMPOylQ6vpBSQNrZ0B6SRCWsUO819E/cJcBRPOXDYpltHTyOZ+QtPaIVZVRN8i4Zcq5jtct6MghM99lvTJlrGDrCqw25Q4i44b3WkgUxF3wAMDIG3uRlZeQpxzRN0W/xDipBUju3uqujXGUqcllcVQShsBh5iEJeJX95B4gT03vDvaE/ZOjYWCJISlq9h+h691yvI1JNOBUHUHyR+pXp583ML1U0LXvAzupg6mjoHjZEQWepzwECBlzvBrh++6hNqXpR0SUCCz0pU/0Rny9Cf5/bVsFVZC2Vc0WzBJZCzZxnJp671GnA4tBrC8cz6kIKWexVeCgrztUfUp3Ey8z5jW0AoKwaeDzzexskcqXgToEJUPGcYTo1V6oYje8jjwRGiB3i5V1uSytZck4WCOp568fXuWm1Ho44ia13ek4khMQ2QGxkvFxuNDjCZS5FURgJHx79ecV/IaEbY4LwkJvc50k5fIRxDxUIE0K5fd/sR4ZDUqRLYshTZXbP2EnSCuOfpOOZMP0Yt1JZ7X0QMZCXJvKMraFJ0w7JFHgc5WHobqD82sGZJ5l9jtG5FAYQnydtdTQWUcShArfOUqCAwvU3sWsNsN3nWoMmAcNRl5XlwCGTNL6ZMr2eUglfcW32WQ7xBPPSzZqDjugR6wrHD6/ltDaZY7YuS5DIdsLapNGF4ZyDtcH1huLOR87mNbj9HZJ4/46E3w8b8wH5ImnJfGkSHhJL+rX6FVgm3JihxU1bIhdENzV1wISei9heGIWzII7KqXx6pLnNCUcWIEkhoXFhrsDsN+AtoaJHmDPiycaYbI6ljxbVJ593aixfQ+HN35USu1rewsc0MgrGQkQo92nQ6SnC';
  const _INTEGRITY_HASH = '9e98b54902a2a308cca70c5dbfddc350aa6e3f68e6dc7d940101431d56412f3e';
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
