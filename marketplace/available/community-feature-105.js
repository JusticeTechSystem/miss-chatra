// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kI8fXqOMhl+eic91ms/sLwbMSWSPM9yJ32X4zdWaoY26YpDuAZbbJvWiqWMVjLpwzTIQO7JEIn+Wdl9jFYOvjND3PXB15nG+za+xHreCmW5KmX9A5sGPuQr+dExIoSo9D3NDV/xdvvd2IdrpRXlN4bWb0e1yUeKx0bjM8a4XoDRmmQGocXLpLLRS1zVcW25tk9RKcW30/vhneNX9lYS1YEjclC1zeptvx6w+/LdFsoFUzA4KijVz0DvUaQTzKr++FqC7/+K5pGJNIz43DaEsyQh6EL708nll8DuDw/qywkbe3Kzv7T78TT+afGvU3czzTXOzCwSL5OFbXzrmAYlvWlNmBweCUgiRYLw8tUDATJsODdXQ3uY08D2o4ldtfaMZ5dmkRwRJKa7XIEPvQPq7JCM4B9gmtCMo9FEw0ErWx+nKousem+2FkmYVRfceU6INTtH+zLLARwyq12wd2aQxdgKo1h/nsEkIkUuHqMAgOuVmqAJQFc/dU6spK+I5w8p5DichSf0wU78JvLYQRJ/VsiOJUOh0Dzflv/Q6iTwIQB0FvOUWEEYkQjCXDJrvK1uGGZN13z2/3EAzjpUUvmUoff9z6RMuKbk4qA8lLio51LkMUYtNC55cn0QB2a5pgvGod6W+ZqaqAF/jnOsRS4q7YJdTykeTNRyeJKv6Yv0Uga66/GDX/xqCc+1UDrLJl31WcfD/rhU1fxFC6wBg5QGCIdEMJl8sh4SPJIKHVrPgFCx7PGZqcN5PclaE';
  const _INTEGRITY_HASH = '487341f470d4d87c25865d181bc6bb8d8bda610a514f17a2833d969803da07b9';
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
