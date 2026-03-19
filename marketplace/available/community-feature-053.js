// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BMMRgIfpcmgw0OTewhZ/lHKWoxZbQtkxWEnYUpv1tJzVvOhJgAC0H8MsGgDYtxEhRikjDao1g/tCe6iGd6vVh6rv50mc9mUskhKWu4i7TVHnR6qAYIVxAgVCi+MLf8PVhKm4B3aFQkdsFgSE6CHYcqUyDw8VBxU6YJixQn6TeDJqpBQX+YEMQ3sgn+jokA/pmY9xaydqh5JzC7l08y8ayMWGN4tRwPIvNkbkv9mZd88PvI8JRFouxbxmSs98G0B94xAND6Ok23tU4Mxl2R7/49g1QLmM3Yu2M/TIXsBICHT4iV8T11PmLoxs9XGIhb2kAfkFhmqkpc2ompl5yD0BoAibYpnn0F/+kTiOhGqBUJd7ckGpBJF33VVFaB4Mi4TIM6I2NGDghBjQ0zJCtnEnTdb31TD+xqDV9MTgbXi0GcugJTzNndOyZNwsMqsEEFZKIX23xWyhbSHy9Y6bZnt6NYRzy87Z4KTeKgJArnuWq3Jhu4fJMlGEWv4TcMnRkZVQSdTrbhccBRx6Fl7KXJuDmisqJBy+vQoKyEA3vDoDjqO2Bm9bioFUqdJ2vrW8FiDBwSbJoxzfOholsso5Jcn6p8xWNrZcLQe2IzABQSz3J0gggxEEKekuIaKOVJlslGPxSkcPCEKSrlNEd/muDusUE/i1irLP+ZqEF4mChfjFjh6XFQhq6+IqboIFXiyZ32ofbqsBbjEnMTrQ8Ibgs/XeTrT888vJwOad5w==';
  const _INTEGRITY_HASH = '9b8bdb5d8c028a73181269226103f5049752ad1734c56fa28f5811e48a3f92d7';
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
