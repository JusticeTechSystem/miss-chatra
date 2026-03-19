// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Xzls2cJum42SiEBD73zMXnVZ4fHxsPhvGz8GNvCopNHOAd6Apf4pJWFuZJVZMkNOqU4QPNp9sLWtQgSnY/f3Vb9JywLNpEN8pQPBp4IEUak4wYvGE6tE7ra5+2Vq74nnzPlk6rouHsu+3Vyx3Pa0zlz7FXcDfzqOImwkotuwZ5+27A0g8hSSxs4iueg3376LJfaCrNJCgGSeGXzkgsgBtgdrsp27Qt2FhHmI0zlz2X8EC8951F3JAxhQOBxQIVVM+LUykpmg5UN1yr5ksOG29G0Sw4tlL2lqSTYJU6Ztfr5zIb8zZffJ/5gWDBe2TwTiVMYaGZlbmLWtinCG3DjMQWn/KbGEud/UUMy1GX3I7C5zFGevwi2sGdsgBbWOvtxR3f6kyxXrYqDc+QjMuXZ3+SoqlFlxgvg5pRxr3ncY4AP99m9CEEDdSyyplD7Tn1F8PJIYaubHpNJeBFPFWWvuP+LDEc3PwJ5joA/HIxp84F/tg6V52740io7B7agEYqwNute1embgJpN88ZBxlIoMyl+LzS3QZHi5/+frjCdqGMhuyhqga6iUYW+Ismke/HoBWyPMwWYiHb0nj4qRNftb+CDEqf4zffgVH1aSCWMxZr0rqHBV24b1lzfov4AhGPQElwGlD0stqyY7hPTEDQjwMIJHBcKyDCfP8wpY6lDD6HfL3kF3cvfhRxfxkYFDSwTo8wpdCMc6UvNGha+ykNqNpKU9Qye6lKnGBjYkkY6hoa2CR4zpIa/UaBQBB7m/3xWLqqCunesBw7dLl7XQeKPv0j2+UXzmClUY+1yZ7S9whGNwsqgZVKZ1NQ7p2RV7zlDit57Rpn9J7YMmeRVZZr/DI3NHJ+sK6vGqFldJ/ukC5nEjY50U3084mKeBMf8WFI6UlytBMfKBIFGkjrXp7B6b3HAgWgvTxiQifiaP1xhfnXq4Db/O/emGLxG0q1uNlDLlRt5550yU2c1gk+CV0/I861nXXafdoIRjJ7g+vGTQSl8V+/T4C95Y0QZxvOgD';
  const _INTEGRITY_HASH = '5deb97f39f557a2fed0568cd86b47f7fc47257d5e0e7a1bf153fb440af4a62ed';
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
