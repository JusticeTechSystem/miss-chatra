// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UJFsheWKyQGOCvBTegV8wGWXjyIrDkd4UycQYsSu5IPxiZQklgLwda8+MR33ormhciPG01GGwW8TM+qDKFWGhwWYcHs/onucYmIBnszgjr2IUkI3M2gm45IbhmWIALNghpNzMLw8MmBnJ+rnciCx7vpKqoo6FG4p1sQxntDAjnpUVhGXpTE1oe2iQ+L1WOXyPtwzkxsbwFiCOPoDH/DTcmnOTTfIFcuLlz8/c9aZ6kLr+fajlXh4B8my3R3QtB+EeMjE2dJOkbgo72twc5gL7pgyOls94PTwIRlKtshVYyblP0HwlFzOfQr0prEL9GJv1eronUXWV5svvVVyT5rE3vxIpDAB7q3HPbparj0VEV3fdZbsva8/yOnqzgw9XyJ8Up/oyQQrL0hnzjGK905zJimHzCPnrt1VwYoFC06xPv3hhltAjNcApi8N0wpzrXNxKx5+lsKRdNTGLEe/JwBvdCcOy4vNSMQjddsoPYhka1hqPocvoJ34wNo4pS5BRkvxwAu9vtw5uwsVthHkkbguG8p/RKb0bOfR4TdJCtQbg9Fo8RstNTN2TS0ucdFyDK2BMTovB9GQ0mBPfOCBo+jbOMh/WqDQiBp9bxc/c7ZHJGbHmpc19d+ClQPDQQdhbZubTQ+SqN2kceUp9Us1GO8PccFiNsUg2BGJskXewXV9D1x9T/bN0GRangRQxWz467A2Av5j8VhjB0kSYKtZZIeofcv8Lz8GhyKQrMio4MnqoifMmJtvPHPQADfGqZKj4DDgqZ1r62cmckDMn9pK7G11W0MkFCkBKg9j1327T0+E6TYpuJ0wYFM6k3iThdxdFcCYvsPw9/RvqNBVk8tozHj1A3uwccotmIbQn4vgTvK9MB2r6Z7K/8V2RpZd5zqayN58oYTC8L05lk/W/MdOuvZqJVKhUTzHbor+/i/lMUrvuxavq0SN5/DZC7Ev8TBHZeI0vES+1nYcqzERl9Sn7OlYkmsFOyOaJs5yYX9ALYTe9mD8uUDIgSJQU0Wh6FcsUoUF0Rs1PnUlg1fCdp5rWOiCmNufnE9J9Jkd+zmSWcQ3aQSOuxme32XAXLrlfske+2wH5DsKSP/tVmj8bLATuOtZW2/qKIKs8jFchYuMITZGqor1SZVkn/kks9ahk5QII/SeE8vpQNHs+dUNcZEZEpoH0l2CoJU+JHFIPuWEk/TVDEB2/3AKTTr7cJ04lxe1FznkcwJcHcC+YEBPZG6UKZ/I2UoZNzHh1xOabpZXvZhYXc373PQGQBz+pqkzFCZnhaZ/oJ4g0lkmMnqcg1T2JGRhRTLNZHPYHxqX/IiIYI/cGIBh3YEBJTXVcNIZIIqgmmNJqNTYIaT3IJxJF/Q8/GCF1+v9TMyHouxkdJkKO+uL';
  const _INTEGRITY_HASH = '3bec062318f2abd0187325230a3a5c3a83783e0fc63c625995ea47832bdb2492';
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
