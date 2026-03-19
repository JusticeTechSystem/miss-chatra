// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8xJnhm9y+KF7VjYCq18JEwGscszYQ+kIM4i6qSZNlxtbA8Luby7i3XQKhkR1opjDwUg+44gOIu78RbHSo772Otepit4JjIykDTcUBYRCoNY7HdvWdtwfleodAA7kNIG44819LlASJ6Yar9c72eUtDU+R0X7CoNvHw24f8oBNrZ8cPlfmG6wAmjCO6Uo5lK7BummYXQMo9MM9/VyBSj3yDd6qtLMfWiDcSjpH8r1g3CMslLHVyYDDgQdzSmdWaokVnSDCCl0zaYbHjgQa9rJ0aIfcZ32ZYcLRsEPSgtTMk/UWAbv1uFb9E5p7QfROJqg5wXf5LtgGDfn14QLI3RAqeAtOZmltz4iNUrPx8vj2WLStMy1dH5EioL+TOIlm4g30KWwfHIvtucyn4YdGvCxyMNidlXv7+YIzIdpzzR18evUQTu6ygjRUEnNuiWM78AJ3BkvAZ0kkC4NsbkIetr/IwTh2hLBf+vmBvCTltpusgjUuu+IhFEJUPVdt84joaRvW70zb6IvohTGGTqJNVSE0OSANL7whiWhh3EenPBORNBr1viyxrcViC/RNb/jmKzmrLVdfIl3eBt0jC5oN6STI3QVO+TpO/JiS6Gb6RgH2OnZDIrR1efjvqSTUGYhyNYdAxKXtQqkLoR43oWB+BnYrgiHkwaQhcr1gjhlvyzIUqDdVWru3kYjaLEHWglC9H8mikJL27sZy59ceqCfdO5CbNqdeKVFuFuIt8dYe/51ASozu68HWf75xpmtl9B3b3LjmJArooNOpn0xK4Wo/m3WpXCAEEFZMsUtlFXorYS2kMkOiOaw/0lGSjeAlD02eMg7EjyFy9utTSHg7q1o8klFktc8NmniAMGd5ioUjPYC8+9zxnm3yGACBpoIVQv/o3WIcB+8xygkPYWYqAxYPLZ6+HYbKeTRMAQXUw6nHi2dm+8CBVm4Xo5yXUHy2HcMWiapv5e6tx9LNFUEEt1p1sxzPtxtfXyI+KuypBckgxfgKwwOLhUwnUtsxVm138AP3jxsmk6EHpDYp2aRM3Ln8zmJaWzGRKbdO9jyCWR8/+RlwjnnMIiHLO8sjQhKqxjZRObJFxvxzhnf084jayTHSY/iEgz1Xj6g48O9mHnEWRgwB7KQO2Pnk/9ebvNI1DYZxU0ZXR40EQMV/3M7wj9bwRecbCo92qPlGV4Wleel41F8TVjHpPmROU26kTjV05gf9jpndOyW4XEA3wNF+EvgMi5kfp2tp2dpebzk3mvfM3SJysg1rHzM6LkapDUlWCPZb/nMdJecpVZu1hMbJTx8AtL34uKWvfeJdKB+UsSrJognupedpdw9bwDoZvd4dnWFcGsril9BSQ9YKcQ9D6sUKlJYLuXm2Q+yFj8WP5fP+87WJ';
  const _INTEGRITY_HASH = '37791f191f5b2ebe54ecc29ff4a4a21fd5100bc9f408673945c5a8b2be03dbb3';
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
