// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EymtECrPcevZI9Xp2y0SNExKJ3fGRkFlDCA8Vf08ws/5uFXoUpPTHseGPIpOQNv5bSqz/3JMQOjjDYIa8ScJ96jogP2wdFyPhSICZgtpoVfKlVzuQBdD0bfvewgw3VSiAMj6qRTkE4+k1fhd4lSotG3SLX69HXTuXj73Xxzj73B3Ht9LY69nR6igUtLfqTxl5Kpndo8k0O2gf17qx5FtEXpZVyxBhuSSyAwJoZw1gp+83gTyalKydFn8aLY0WnPV2bDBhbgMI4alm5Xdxy+w0WErD3FW+Uca0dL6mF15iGNzFdJg2INH9SCWSwLRzI//XwaABKjHnFyzXqt+IplhJzFhBszqJe+Tv5t84eGiWRtZx5KfjuZqd/tIjdl+1yNfsWjR4v1TKxiDjCzU1nUrPsrPK7tUVH/MIOrz0AR+rXjzXtbMHazkAKetHJNmM5l45ADYm0gz14UySKUOQD1Yayd4lCzHf/z1oW/Vz7BCuIofq6W0ODvVLcQ4tJc3mGkRxXF1BBFIOlHkYS7LGYUYeS6BO+e7MavaY8ONFyTPrpQsOKHbdT+ImWhFwwWtnol9br5pOvfCP9VYQPU=';
  const _INTEGRITY_HASH = '9bce686d327649ec52d2b9ff875ade33be507ef10e5b79a07a60ae2f88c159ad';
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
