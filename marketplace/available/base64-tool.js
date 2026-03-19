// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OT9Rt6JnMrQ7YmDGEiJ+IEl+Q+Qk4LNn3TMOi4id9ABZbOYxkV/D8E2DHZIir/N+w3gr4HFB3EnuPz3mosBcxyfAJ0towDnG3GjG1jhRU8G3dDhUfIkyiHPsjOExqKTQh7oy1SMT6hABGmdguA60Zw1HhXjGsMJWAPSwiIf4/pPYZo2M0qbgDuG7gEtW+2ykO/xe4HXKrZ2VwdCUxgMyrwoP3gJbpquEayRJm8WjxTj4nChFYmsn8bxRHUnRHUKEMRRXyf2UkvqpGwnqAJwnCYYjxDaM0KVPJ2ajv6GMssg4SbxKYAJmox1yCs6y3emZb0vqkC2xawCRaI/VohQbXi08mV5ogCA1Z8nkn5b5CNznWPY+7fmA0PFlUFhOsIh4Iho7r41U4fmdqnY0VPN9EwWCb1nrR2AgPJBLhAHEzvMECUwhOWGQaaBbh/G95vvErPs7OU5h1XMPTRlZbuc61M44q9rqqwuP3GY7WcLESq6rZRf15LXiTbQ9Po3XMKL6YeJPV6Ui3CSX7pBvQmKt/Kq0SbwDzA3wHc27UXQaU9hwj13Hdf9z9Cda6Yeg0oRPnSXe+m/tO1GDVH21MeUhqOsxVjyuCdndxxrslOp7g7IBz2aT7Xam04agROSuthnk5yv7fg4/VRGXJY6vLcBevQThoXi7K9OZ0YuneP1fSb4zkX5BRaCseS85r0OfIwKR8U8sjlHjdII3wN0/AFotld417Fj1irvmvPjnE5Us3FQAkDpU30hdyV6bR+W3/64NnhXLCBSoP2/JIPwN8Vu9GC6iqC856Rmin3fJv9gSZSj/2u7ip4TTu6fvL1NddfX2WTnSsmqhgnmSBGdj5lgbWvvlfN2wOvOSTnUyrbNlH6dDnEkLVAxtFKg0YMG2i0wFUSUQUOQ2WrSSvXw15cpMhdR+fREfWTKNDf3/hACi0l5Q4URB1sOhikj1HnEDKq29OwJavG+EKR3upoMRSEZOfF9P9CwOswk5yhwrczMeQEOaHjVP2Ub/N/CTqWL0lba7tZ0zylJU+4PNFQfhSlGWu00Vtz6iSt5BO/7L41Sv6KrU5RXp1o1mBhyKef19fyfexW9KzAQMCpVgd2giRVjcNKjJapno3xmXbKpLO3U/RzHeqbT+TfHWo+L2RIAUi8RckifT7fcxCKDoW4StBjU41Ih+5ByzoPgKYKi8/ies0OQvB49XKZZXBQwHSNZlT3AtQ7MnjUni+BKz2YNfaixk/mtOWsKOK0fmVkaRizbvyUOW4KQ+QaVQHd1iIalmOePZrUodJKqqyJzehPldzmGnI07ezFScqCQ5+ZtEP+UXdEFu0WynOdzoGHDVek8VTHSdwvsaqAJ3MqCAllJZp5mNv2igCGR1tU0DDsch5bZlzBpFyUDHX4jjTsEVO2rZ+IHhrS9lzlDnwdfcBoto16f1fMoqfhqS/EwKIDd013JuZpy9CTTWBPV8m04uIf6L1iShXbtczq1MA96QDtWpQ8SrPcXrscvzeiPB2XEM/8cuiXhQR/4gJq5Ud8hUT2dYqBF70O2ZVSJaaeY08rBQC9bNwG1ivcI8gJcOMf8kCg==';
  const _INTEGRITY_HASH = 'e8d6c063d16bd75e308e7ca81b011388ff95969a499c1ab2a4138363900df519';
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
