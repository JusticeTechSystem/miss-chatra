// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/m+gporLuzBQa5PzA1zhG7X6uuvk6Sqt+h9r1nkXXD9j5PJdmZeQtGbjqbqiQ570djyvjuuDFTjTsTGLz+v57IIX+M6vcjdL7fxWelmAL40raw4pRpBlTz741Bk4mHmmDKfM8CfFUD2hOAqMysWxevblmrtBP7HLDE13OCPRHNvcmDnlZSyxkAfK8yCr43TKV61Q7nJ+GVWbBfpcUmH1EMOfSVtX1T9MXySCmezyT0hwGNLNKPnvlkdMeFBaD1iT172nHa8nJiJ+HCZaY06Ts7CfEPWvaETOCUkBR5hCZkHH/MyD9ZT+UNoC4WzoSmy3mlg9YQ6MfTFpbS7SJZIYtDcgSH2UfWTQyZFpPy7h/7XSZgOimmadoOp0pXCwqEfbso51nLIHAxUFaulF/odpRKeeIEtLjp7c+ulwv/5scR/anDgqtM/mZXLKy6s0+AYs2vyy6+fI3L/brnb18oOXO94v7psUO9N+hyag9MvNL/WG7ZIAOwrfYv49Qu/m/ty1AhBlnrJUI425G57Ix9riBgLrB4s0s0NjiqQbFJzJwGFXlwQChyK2M3TGmjEkBx93fz1ZshVu/GPC4d9P8/aIroC68mDM0OoF4olna/N6hPv0ItiedItjcY8wQT3if+N8MpPzWAxbKa1dPNZh0dABQt75bKGe6ePeI3CM3KEedUl6NN4dx+RG4bknkijYygJS5iB9I9RzI1aXD8hogr7nAg2sn4q6XxN0YKHcQ3uo3z8Abk3g7ImzOPqFEKNlo90jJRROyHdEHZbZ7MBheOiNv6ClJ8pcc/Hbg8QDD7+bwCNAgBOTIh/z3XovIPWEHyINJ+nj7GfciNKA1i6Dj+vDOPxISjb/MBJFi4yP1vEJRo8sg0EUEY2tVCX9tpOC7HFdYIKOPLT/0cmJ/BBFhGMR3O12Gj6zxVAySmWJ1yUGWZKXoY/kFX1j+Xo7zHbSUR0+MklU4sgO/QFlXOhwM/5KGQ7M55XgPLidlGs3Ay/yVidJz36UIAfsWTaXn+cr/EgCbCUmxIYPyGUtOa7CrhlIU9FcL2iygJMtmq4cI9sn8clCUBslU5N9OJ9i2eavhiG2/S3o/SEpgg+ZvTpREczmDWN365b2C1mlVvMF5HFnctvof4ZJwvdVi7QSI2QpNCvJ+Am8IfsuT2OICzAsCJODBKZjDfzLkyeXM2RK/47qJ7LIw94i+gyvf8rGPHClm/lxD5WySQ==';
  const _INTEGRITY_HASH = '4ed6e65025944d4650bb79a8639ff90b69c6a04722e14d73b850407672dedb41';
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
