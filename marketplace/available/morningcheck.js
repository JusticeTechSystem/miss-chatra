// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gYt2fl/FbEdpC9Ytm5+zoXCd2vobffcSIin9qyJT45XHq2xPUgBkQcNmwbw7Sw+iPL8gbMHf5JAZkwGVTeGpgd/PgEAd7boEFGy/uEZOgBaABsXLlmEmspZqWieLzlkccQEEUhK9HVfcSiOkSbkoShtgo8evPhv0YzL9AZdbd5EhDL07r9oAb6Zo48ORptYdOaFVlwnx1Z7EB75J37wW7OUQy6fFtMkTNpwFnruIW34pdly+wx8Zn6znxXCwSVYaDpd99y5Ti1aPT177wKulrYiFQqQnmqyft3lDXbH/zO/2wwY4Pv53esdWB390UQiaSkDgE58ks8ahKRoYqNvcUkhX8FmMsTwjWLvTkKvH6frPc+0OFBxCIsbavqB3lm1AGa/Ax3jnLi2P9Di20o4B1O8AeIk8GVfx7ZW4wU7PtrBqiaFtk4k4ZZyDxo3QPVhzLKN1FiDE8ro180VonKc0m83EFugoVglYxovbfdIQJ3Nr1P8DodrAmZblgcRjZJoOc242mFitN4ISde7KOjolkIA5hKsO5ugxbOw2T1tJmlyiHSuFxjfCbx6xjnxuytNrqqmbuAxWrdCtc5tI4PEytPzzXYINaM8b67CXgwQi/Z72ff80mPYAdAyFnZB0h4+MEklov9tpbc2O9bxKE0RIVqH3ZhRymFQXY4q4klAJlouPm3ZG2KQWcXwX/Nhd9rbBDg8VdUg/zmn4HHCs56ZFUKiGinveGG/vvOvkFtnMbMK6a4gdJX4tAEi0jzVUK7r670iaOG6nschonqbWJqftQfUXZbU0hAMUPs9S3MsRKxIHa8+ToJnXj485VH3QtlZOxZeywYFMRWEH/u7qyYAJ3a4//EqxEQSoqIzdr/gaFkCVU6vQpaIuo+wZq97JerluddQqoswz0p4sQcE7jesbjTrOt9ZEzjAVyfWLQ4oYjtef8b2UnSj+pt/SYWMa9CGpp0rHr7umhej9QsK5eujUfSXD94SBF/FmEmhRhvB2ZChN1jmL9XOlSz2CMAFaMntqX8o28SFVSlQfOwIKPy//5aZhE/XptIT38YdYHZtchAgeFDQrt+/F5XDl1nkQ6CdMtw2rVmrSLLRsxPQjOYkyny84NMe5Xqbi76Wxkep4nYOb1yieuMiiA0DIuHNteftIhfhQp3lj7KHdpbcz3kfhDGvAKNOmj3juDTZ0gWDvr/sf/dYug1vcUgeOTaLfK8HaHkAWOIrhjzkK';
  const _INTEGRITY_HASH = '81f3a795a1a1aded4a326956bbf42d232ddaef5eb66813463a3727f2f9dcd597';
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
