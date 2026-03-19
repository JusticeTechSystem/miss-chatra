// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Tql42tJ+hR/uhjO17jf9qoP8o9lSqS7QktbvLrDnTn6HoMGgdto/zDbwRYxyLF+VpX4oqhtGL8p47vXay+Jnv51T5/YdbLpoS+0j+s3ZXzxfFVqIAyQtbO1n550+zXgN3lRXwdbRpct/1dFEyQtwXjugUqNqnuyBqvKptuojaejp0eVbOi4X9nkLkoj4U3nwDR0eCnAUjM2gvFG9aV03A8zO3RnmHMo9gW5qyKzzqoISwEATBHX0wdCqw3zIB2xjkmMK3uetMRmbXAJzwdFcC/xfLNd/XKUB6NswClGQPbkmtyDq1X1E04m2g0+2DVFboEhEoiVDNoYJKvYpIanmFy55+CXhwpdjNzsjQAgVMLfZKyYRzTJHYoqCTX29bjn0Oyeec8TfPoT9TixGnrbXuO5UYDQ3drf1wRDeM9j8Cfqs6Ppdw7goZMqvqvce3zE6g4ioZ/vDWGXVlIyyyDk5V/kAq9iIPlGV+Y2hwN6Deyfym5tvj4GVoK8rXOKybinHoFPVaxNjPO7aFxc3UDbagpG9N5YYmP3Da9VVxUxtSjE6bDi8Pm9tEkrf64tgrI9EnpkWN+M1ZhXW2H0QfO4ILZ+JWX/cL0gGmzwdjDC9iV3SYdYnpwBzBETzyYwn7JpZK/4cleEjv0dc6hhdGzr4DXDwrxxpYNt0/sec5CzNsV78qv5d3ElzU+T9aeGOdarhptPmzimUTU44NVfSfETmCCLGa/+Z/v3cuId1zKzjClK9U+LpCoBq/6YdhhXPUgl/lbPq78YoXeKAVaJ3tK8d6xIOkasv5h6f67zZavV15onW//5kGuPQJLlHVzDg9E7MabRnARCUXBuQhZytTo2GyqfU1cfcfUlIXmEO7bk98ayJ9AZorIAoo4xBAYi7gt9WV2OX5ElpY8DmLx91tOgGldfLwdftW3etXdIzVKm1QDMtAcw/+yl/4S52ailDfvHKH9xxIeRXH1XGFOmMjid0PA33NLh+/WgKzxWLRCg4tNZ3dW6tJjkIwSsXcPgS1gn+9hGNiwH77ZekdFLBa9kvxxI+vfP6CQ==';
  const _INTEGRITY_HASH = '081e661128b1df6f40f0108c847d9e08f6d05e54b8a39e691b1150026f726a4d';
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
