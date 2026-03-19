// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TDsmj8QD8uCw0gA/49PT0zUyOauhvZZbSxQHIJk6eHAf6ZIX/Ur9Hhktew1QUKpU+rJBFPNNq6Dx1yH098NBlpahccvEnjkQGhdTREIqXZFbDLmmI2dr83YsVmqlM9ziGXr5NnUHL953Ce3kQbFJ4ql2xe3kEJM/YhaAdHzH268s0nHjWoOMT+GOYiyBo7cUKjAbJOLqcbAQKjzFfpdniiGLdQ1xd1e8gZlOaVFvDFOTDgI/vGU0EXV7RUblDDCzJbQff7/J8ed20CzcS+Z9ZIt86F41gJc11jZmItJcK/OP1PDpeAI1zQz0qj/mZ2As9DCpSaa6ZD9VTyPBQaeD6t83BYVx3hKtFDcNQfDa5RBOXPDwZ1R6secQGpf41uHbt76M9ICb9gptEuW9bDGojp0BJS0x1xysNOEulGXDAM+nsvzWckEzMMYHkuimoFzGwW6rY2JTieERTKZaoRZY7FJU3cj58qW0ZXwdhfdt9uhepYWySb1v3EK/7J4oU1/iRqSI0zfBale/HpwpCeMX4Js2C2HTARTTIPerjwO0+WvzFnjM3ftyNFmqa4FUDAM/UNCQdD6NU548OTrFK115hN5JfFmZP+ISux3SLWStP8x8QntvZJgiJbj00+M6Q8L+hrzyD+5+oJlvi5GJaKYhQZSA54XnUHKqJSpduV3oIMVjjwuZPioElnHyp/tqTDznl0lEqdnsdJ7NLgDtEPA+S4DV5n6bRQWp3irPC/CYuhNYGhi1Np5T8x+uQsOttUzI4Al/JsyKsQv+t4kAtbJju4yBrC1K8vcG7IgZJK7V+JqzxwInJDMs3qOWlcQ1HmcErDrVxGs8L9AmpXMxlzvp2dyz20r9EH7w3JYewdavHB0mYowfosYvBbgsjxtSswr6gcx7AEMFxWg1tPZilfxgN7bYycS3wyEndiAFH24fWO5H0zzl9UUVuaXJDBYQT5Yl53uMYzUoGhOF8DLAhAMvxGCNJhDBgtCCw85qF42nbip0rax/GhNfW8HKt9jvlXFBHfNTcX9YhLaRw6cD53GoqlxYF00x5GANJKPe+YP8Go7nNsYABvsWty+ENEpOl9/HwQ557jamzJ6eydxocyxCq+DLeBcxe0CWrGZ6I62rMUZI+Skf9V9ByHGFidKUjktnroEKP1I4VtJJjBaMYA4nnKp+MU/WX++8wk853SenYIufZI3v9+Y8xyTAXWSHVCeud8yaVnzogJfzSf9QQ0HqohuAGGRin7GeBFN8k80pGjrWFIsRI2UrUPO3QTvn6uA0bO5zEGz5HDsO1nSNWv+HOVXzIgfZp2jcmu5SFHALaYTA3xShyXTqtrGuzDoORP7xnJQ/JTH70Ji0py4YsVW+nG2ssmx9qcRBHbmVHxv4NN/Y6FI1Rv0b3g==';
  const _INTEGRITY_HASH = '22a17b34de34a144b2d24c01ed9f024ab433ffc5dafc2aac0823ea72c300e250';
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
