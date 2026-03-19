// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hmzwSP7DFf/sULha9S5TUU0RyJRIqu4QTklaC23ECGSNLoj2L5Z+rSeuvwW8zt3/3mLv3H/kWZblGLHhYlBk4aTiCMTu3GOVnYOtQlIhshQrBEEQ8s042v91StZblFKbaURRxrWciAHAX6yUHjx3jPFlhPM8HzBW7/c9Zo4I+aGTr/DeMfS6Sk8BTghrDxgd0QUHv8bvJGK9gCnLQnec8rOPiO2RQBq4FKBpTPCfrJwqT+B15vFHB29WWIpxeBo0ogLSvEBD2der8COf+z1MW6CSBMqPeG4/MXNd80TcFn2SOwHTmiAo9UQvT9FYVaN7Tx7yUU99TAZO5NDw7esuWpvKrjbxg/mGdFixGCl7hPJyM3W+THtTHoLy7ASL/1IEGTtbin9Dk75TtwwHfMwJ0Q25MIkQTFXuN0NrlFfvBoVXDv2OgiqNu3Djb0ZUEkXKpzGZumI7mqN4QJLQ5q9wWZDZBKcYfNeyYVf/zRaLhU1jFG0vG+uiM8UiqIsEY3FUlpXuJEJ+uIgsb7D3AxzLc/ktAXTcd3EeB4Dc8YtUfZlkU4fKQEH0h7S3ZTeTk8S1rmOYAA4yN/a+5g7bPk4WsrBgNgeAF46KBVbeDInBt0nB40Kni+HVfr+FGAlqKJ/iz8TYXHY2PJjFrhxbOWly/HWaNIiRrlUqNCQua7DBZx0f9GN75Sr618zfRHV94Py6Qvy0j2mx9td6aHbsw/k5L2uFPZvHxkd0HTH+M0Y=';
  const _INTEGRITY_HASH = '030298d05b83330d413d2ce81a558aedf473831e0d7a82e236ba5aeb5a9651a6';
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
