// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U1HlvGa+Tj/aZqyfx+qBFuSW6B2dlE7lUKuFPhNfxjG5bUkcS1QwiDRIGtOCKbgPU6LMQvJyssDcqJoCQJiCxpNzuO3ME/7bmmSVHoFLWXObUs3m6oR1rNWh6/q0NActCIilEsCgmNGOtyAwjrsnm+1kMopF456xpJw+5z+4xXfpOqC4d2bMd3lhK1rAlsJ6F00mfOHgfXerzU07sN2SDRnUzoNf2DnYcRJPH4YGLzyOsbm0nLIG7LADykSUAw8jZ6LuN67kwI1zByqjXYKXiMywj2yyBSJrrFZ0MAsZhNBhrUBNC+Tb06EsU9ICbvLUvUrQaKVfGBmAQ0lch0ZxUUFsCuPXTuOTFrJgoodkNZ92RuuTcSbHKKG2BIlp6nyxGK8SPReAVB++z+nfKd5C9QGy0ItS9g3Ar+gBZMM016CCiENZ9sh+js2J9VHPUIoXKXzcEqccz9e4twGBCnEoCQBy4odwK7VKl+6PoX+mW/ZUotmYO8DAwXOH4BO76KM5+LWjmrH6LKZx/cW7G0gdBwFWktRxL2qI4MQQqr76l/Hgcu3a7gVRshDQE8VJ/UmJoRErkLEU29/kJD2zT2bCLaK5J8YSoGw+9pPdYVAw0GPfWdo6gnI49gn1Nm5ve7Mqyd3Ct78qd9O2ZUEzQuUlSz5GTEN3XXL/8XMdzKeYFCSoxL71noySYTQyCYxHxVKDzJt2IHH/eI6hPpM1FRDvqwnXVZ+q7wVOyzmTCnm28m5+n9jju2OkV/GFZ9zOmMkteV7MOb/MVDBqWCXRRuoE67d7U2+yllYc41RPtOyviD9XOr5YyaqJmA7e3DSrCnkw6XQL+SsiNo0zbdOdWJbwF+WyU5DRQGpX1cgYTFgBUHsmYNQiOhk9fJ2FiAHeJHmjywGAfD9giZssJqTV3Uj1wzwj0nrs1i+BDlG0n3eFTfsTRx//H8RKWnKSpb88Zh6rHYLR4e210nXI0xb6J4hCcXmgGa/QvvfjEFKg84EydYKrMAeu6Umx+/sgMcEjMR9swcXiFzdIvKFchVwTNpmcKNEx0nnB9iZqMD4BvHXipY6Hmcn5B3nKj4ZLgw6dmJU7fOQ1X2JiT1Mr6QyR+No8dXQDQdId19Yev2vypfqrnmOPFQjTmIae6imoXtH8CqCIxdtd/WijhIqcchL2WS7UojiaSN65k8IlIF+hbLbtOV8l2LZkFOIzRq6xNcc2hVsCQew8MnY=';
  const _INTEGRITY_HASH = '357d8e6d6b79d7769bda9701e83bb252c787837ef98769e718c3e8c046ecea6b';
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
