// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+yFaoqJSxiWGxueoU//BkM1ehnlm6yvYpLCqx2vklRlWYkm1npMquAX31AX3IMyc2lqTEswt5EshADnzQ54cl6ZIQvtz6pl7mjg8pVoMHg59XxpEcUZ+LvjLoO0BEHcuJlERswpkHjDg6NUxFYYehUeK9XUjw/b//KDp6TI43f6xONo9tNxxl/RPrFXw8tmciHH4E4HMxY2o/G8ktPiZWuvzCGzhoqbSA1otIV2qLLzFT0GDPCmX7aNGyLF4bSCRi+usO4AD/EmWcnmkWD2ccQcwBuKHfYLdtw4cezzIbfS90KsTuyCeZu3JhCIgxZXF31mbYgXkpNEWc6QYTrdsZ2JYyUUGzdtE1sH9eOJdYCe+T3QQ8S8OD3do0Ad/9d71R0qOX1Lj7Whpkv1YiMX42BfcgYsmTBo5uut5nGKqJXcSBQOAfOCXHOKVgOjvt3w/w3mWPILoJ3vB3mSmKdQibAn9nnauzD7a6tSwiIYVYX0TDZt5HhCx1E0ezCyWDTwi/1RpMrF2QdQ5lMvR+/uNn/ye3XBjkqFASMQQHgHE+xQQ2p93HyxKBsqojLzEIfNUzO4tKDhkz/Zl2hwI1lwhlS6iX+7LfMTEiP4jg/dfxZ8SvDZbFCjZbmWZUmJVb8WIA266xB0AfHRge4lS6NSJriIG5ScY6bjou0DlCGm+2CDhbS2KjV+sjd0xn9AFXOGYXmX8OPeUy2atg7YnaIP4mUMR7WbVqyHD8clnKoJgFRO1JBm5xZ7E+0A0DTOpGLxKu3R/yIbTBKg1saYwCZp4EwQDMIdPEWbhs6kd5osFuu0HF+4UnGgQInQX0dR/rNOXK7k20CqT6u9iVD4m+X9HTRP1LlfBMj4nUrc1M5e1YrFA0h9Ev3kH+yR77wL5xCQ9wRJ+NRF3YnNna6xPOSDwkebciXavMTK6PpR6btkm0lxgrjgKyvTotUMWdB0NPIKymtRXUJX9a0cZzfkbzPJrNwsPxNqjF8Y2IIXp40abBaMfTa67BSJHSXMYGy/0LX1iHA==';
  const _INTEGRITY_HASH = 'd14f8af141f52294c1ffc4e4ef580e43dee1ac7e1092643571453521747a33a9';
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
