// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wDy4GYsO1DBVqgyox+QsWAQH1NXdKdAN9PzbzhUZdVbrMEiM58r3DJHMDxQxlMYksG9yorpaIh+7krtWL2Z1PszIwukrkzx2vUruq+fl2o0HnSiu6AM3oo2Sx/rBvC9cHnwV/oDjmoB8qM0MDH8Z/C+3ltOFr3csQZt4DKAm0OWOkJebR9yoa+8ZuO2kWL6o24r02NrOKei3IFbiSj7e4dGII1TAkNXkbopJoo7lOpRfUhahpLTmViMUyeNXOxMC9bNoeHbmZFEQwised8L3ZIQXRjE9LwFJ0wGf8kHMfkv90dMIEn2c/Tf+3i6qVgaFgYbX2DY3KVZRc+JgGdFpT40l91omYa44DXwPcuwzeNnvTpr2upAz7SUJYHsbDm76gp9HZrLW5u/TpELrAPszYdrG1tBY8dBcE/vCXgGnAcJjxdDQA/tnUB5SmxzJsu9R2m7zHR1T9A/nNTlxTlSCIzQ6ZDpzY6sFanca6s723gV4yNDJpMxhuENDplRyqO00JICuUXqBS9muW6mUyI/ObbEUW8J6XsUg+ZAnZD44aB4bZbvfsje7JnVYOYLFsmMN7HnEIlI760Ah8fVh3ifPlLWFNmWwiWPad8qqxRjzqDpum+y0rtXB6ilKvL8htr+eykqlfljFZo5fXwuHqpvVa/aST62dnTFBtM++4YzT5EpeEwOC5G5nbM4ngwA6tonb2dHr7/NUjMj5FpoWXO6ljMQH191QGjIrX0/FJl+pVAClOV17rwSTPLPltL2dABmjYiB5oU6nEJLO/VWfT5Gu27F90doE9z+KvWoLgD6NjrnuoojyoZq3CcSqZtt9DJQws9+YCoNaAzHaDs2LFDtYYtg52pP6xBkVj0csv/m7CWmHEaWl0/KbLbgYz7jrSjnhwspqBklChLGZMo42otT4MHGySO/QuT0nnfEKpsyasewpx4CEOPkl1E/7oYyIavaVhc2mIG8lsNukFR9fQQu5u9vAIYtxysjjSpN4thp1GPren7dSe1tylDaV';
  const _INTEGRITY_HASH = '9c43b8510cce70a19b442eae1236e320895af7de728529cf2aa48c5a30786f1e';
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
