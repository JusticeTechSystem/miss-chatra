// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZTapmKkiYs21Gau4DL0jjLXsZVy+9xj6raD5pdVPRX9bXLeW3UIX7ErisKbiQALx880et0dDe4ANpIDQaDOoWVW9qN8anOD3rLORKCmHeqWW6/DZw9fJff/j+mQ140bQn6fOj9jb0siGM6nwuszlSlSz5YlXGFjvSLxYXBEjOLuXpiJYt35KA2jEuBkYFaPia42w6oVY+g/TxqhVERj4tUSbaQu1yhZ5EyKCWhUo9YuYvq5v4VxaD/weUq3OwNaahSdYMNCWx3gC60ryUrxlT5JYPcxCrGUO2gQ8M1DIw3LKYRumHiuULQyH5ENeDHUhWEfgxwaOezGm74vk5Vw1LVeLvYWT9xMaarLFev5OEmSMIf3wh38ISa0Ea32dtsuLXgfLDGgasIW2/lqu8d2DYsrr57r4wiin2rt1k0p8bJKKRpQ60FVCr0Xbl0sDAc2wMU2dHvPOskY9GKCiDyrWL53t5vEFs7wkWi06tfUJAlO15wRaupeNl1exRmDJJ3kvkkBwAp0QsoN+UZu7XUeNiZfqofpXWemYdc3yTLcLHKxWLQHjyGNXDFXZf9fB9zEaCfiKwKKj3zXkevktDKe5cLa6rlRejZMIxzo8QS+VYYh6nFGU9VNAwdk2JeM2U11Pp3sgQd3NEsc8FsvcB78ykg8nyf38h5VSI7VHs4MjoMNKZO/dN2qPQB4fLhswhWz7qA5DdwpWItkQJnHuRiNrlZxC5An+hdWWxcLzJR8LxCxpt5E9vpoTd4uB1LtTLWtmjTMn1+VyPFfZGzgxOvyjnUSg2NHywHyajGcco+m9oNED9aNrah6EJS3dI2/kSNGKw2hJGpWVVjxm8nuIHYgIHdLjVn3zL0qMDpK6IeV29pAdLantP3ZpHKEZikDG6VRR3sFmGkNkAgovk/NIHtHFISrzEv1iuT7hHSJlKRvPVP7uyeHDde9L7Z56i/eoBOfP03tnG6uUhcbbnS/snjW4s8wEGzle/+P8OMN1i69/evTP91xt2m31E44EoN3H';
  const _INTEGRITY_HASH = '70a5037ebab97e1eb25b6b87f632544ee1f61bb67afc484db868dac3a5e48b7b';
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
