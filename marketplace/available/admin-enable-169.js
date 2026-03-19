// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7RXjWbPAzMYvWSLxtKurtZMsKm1jJyZ/Etq60bA8If28M3muOBXH4Q++BMs0SKv818kAyT3dQnSdFwyeOmL2auctB/mu+Zlp9nG9o2CWqOyxpW5N9OE/GYjZnIDLWOKbHx1/5FwrOTkaE3BusNxYvA8TochGME/yPX7C/0z7Rl9lx6l8HkSjn+3qaKCaMiVTAia8+zPQLZUTIFIwjCQEBMNJVp+RC8+BYE5em32/1rV/2AUJM1lu416x0KAv3Ja4uAVWjyfagMUnTh+Lq26rpyPIgQ0lqHR+wfbg+YOmK4rPzCHXd2i7Rxr5w+/wgzc1/NnkIkHwr6bLo8aINa2+kiNJqOtFkPs4Gtu6He1bZyNiXup399kkbNgGc5ww5P/tAFvg3bhO6V82JwZMx0QgY/Nc5q4as3Lk7LJJaqjI+F+Ps6JDpqw4JlbKIr3gaFy9Uc7iZ5C6KfL578MZgc5ynv2px1wukvUUBt+trG6pG3Qd1ZtKvro49M4Vdb0ejhWrLZa1fRzwm1zGlQJSUqBY3kgABG3gQta+JUIs5VQpT04zazLaDP+zSSzR5CMAEhDe9bLMTu2be6RYzL1ouImByNlzlMc6MDmBpezGfFJ6jh4+U+1AkhVpY7eTL6Ssml7UVFb6STEuWqnb6JLgnY+MoywQB7O3g332WW5Sx7B36oNGEARm4+EJCLpfNY0xlc6pZVx96OoMOIHrv97NAsZZtELJQY6A/nXsyGPP4uVZ6oITZKIE9l1LZJUlhOFnX972cD+u7wM6x+g62qnr0PXwlNm9oISggdonqFauUy3VhwNjbEs/rQsKRG/n8GOMXsF/W29T6nNSF+8E/ugfOEa/6RF0m7xF5/9VY1MbiPkFabHPIPPFYt8Y1ve7qH/AuwO3tCzQbceUMDv4obdKWp204TNV1HO5ll5pauV//EoVnie01DFpX5S8WvAdMDbM//mi363kAxmwp5/Q3GoLW/r2vOIJuJRIeQPLMhvB61VOKKE8IEvlBr1HCFLywkBnU4Vbjg==';
  const _INTEGRITY_HASH = '9fa95284fd5c3e39ab6f3dec21025f2c95eba3dd2ab26afae608dc86ad55514e';
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
