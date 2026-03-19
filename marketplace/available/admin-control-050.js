// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vHGvXIYuXIYNiWuOLRNb44rrclZHkinO2IuvcY5iPD9N0Bf9m+NpOYUVyGngspH9hhGJ11twb1kKPJvSmoLI1oI6F6+XEBPAP42KKVLSGvwYMO/SvY3kZWyvl8CzAO6e1ITrp7qtcl9S2KCeKQwOdUA+Z+6I/qGStVI+cpc/FMzS4w7dfVo98raOP2FZcq3x0bBipsbaeK36fx3of2rXcoyti62Sm8GStT0zqvt/PGJF42ZQNxORDXxCQkP+ekIRM0SbYLfoO9YOBflFqRI34qHmoEhGYF2McFWmYk0KF9O+i9ZNFxqsvpNrgC759WcEWtxoBOOEWeO8DjPr9hEhbZO6i7ly+5qYn0W/Hw6MlYdA8QuNJJbvRDAE/uuaOZzbjFxqjYnOY21a40D8YEjHr8KmQFc44TDkYUZBswpNsRzVdEpWEL14aY5wsRNOBliPyUoTzVlXnFVLPe1jES3YTzS9EzcVm8l1dVDw18GxTD84lbPJamNSl317Z93jeGE0OkK7Eie4qSRCYUaZ0ARzwJImz0RY3K9phuPD09kCYbhTGYDU7CcUuwMOjqR7ffTyWoTvtpgArMIUw1iBQ7cmd28p86MEP528dhL9t4404avcNVN6xxwkxAhzR21Q+qBXrxuONeIfAH1ReJFeV7nfvk1JQQ/okPn3jJhND8ssAlHb/X2YgaLZm4B4RwOAj34dBLl+P5JL0buy1iwZFjNgs5epFLOesb1pu9KLLjxLj/BEGkuwZoS3ijiga+opypjiK1ju5byw6kM8g+/W/nxhKM9krSNloQ2DevHYcYbjRAINhoOCPTJ3FzokqcYnaADXOi3+8rjxcf6BclaiZ4ThH4aAsYAMlRZdrGd4iz1wxfHQ/lsG+62xPsFJIplVQgjAObcLRtVuHLkOh4Bix1I2X6S2VRnSmbsQDdxYpTekmd5eqcJjBonGGVn/ioLnu/xBcGGeytnbS+GI+nDN4KGfpfN62aD3fyoZjYx5ZOIdo65Xo88Nc2WALxibmc4BfIEahXD/mQ==';
  const _INTEGRITY_HASH = '52de7bb25f052c54d25756e4c2cef244baf8b177cb5accd54be09a26641a0084';
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
