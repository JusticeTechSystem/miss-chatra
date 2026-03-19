// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h4tzUtPXps0HfbuGcN4wFYuX1PMTH9O+o7NanadyK01ybzvpdccRJuPnFDuM5LbArbDyPyma6bUMOY7ztEVfV81EqlBOHIS3/li4qSDGygUkJUxvizqwNeaPBfeifGwK0AGrZvz4ZizR1DdR065+Mgu6EeI+7Y0OL+WKnebNkr9X9xv5dckgapy5OhtbH1az9eMTyVsOjrSSbAgO3GbeyW/MaxbMB1sD1q+EWN1mk93e/7kiB79rX2dJMf8wiUbw5jg0ZTw2tRKzCCpUL4sVs1h3Dmv2fH4ywk7IyG1ZYXd2sJfs62HBu2GXOmu7Fc430GEDLR0dvxhsSKTx618wtT9MqI8auLmYwXgeIEN5eKKDaPaNqqbYDKunr6TL6rL0Bi9+7OU4bitGBDu3gv6vDmTjTo1nYc9+lnWATK+Z0kGcygMJdxy/H+InawAUZAgZlWBZeK9rz71V0E1hdClqvnULflY6jLcoplVB2CuMHiqSqCp5jh28Ynt6S2cetYWOn125LTTE6W7vJ27pMwpYqvD17a0bV4JiJ2ae/zgmWB7DQWGwdndrl+35Ry12ehW566mhcPXtqy3XjRo//bucvPSgPUjjhXnbT5axh2tHDTWPgxxf3ujso11qxXvIyXs7tHwkO4kHhRf5AeWUclTtVd9epKjAVQqVMK9lyW9uvKY/dbCIFXD+NvXqonWtb3fnUUMsAwnLyrdbaeV5BZPUsGzAvrb1MdE0I9yYBuvYvUHuv/Tdh+TOUTKsvW9QOZ2jHJL6H9GAdL8t6e6ndf+b4yxgklnXnK0uzj0N74Ktq7a9Aq2/JWAvlZ1eZOKxkYHGKHH0nllEQ+5sVHugY67wxmcEEH3S4vzhW868v8WhUgkAkxIHojmCMgP9T4jfDT7FcwmH92RKQ6FRXRe5mj4PxOivwmreKCpq0bJaUHcnSAF8hpbauPNNUNUPWuizBmOT9PIowB+9m67Vdy2IiEBRvwG2/ryuatjrtd+53dfNH6XtXApgG9JlIX4qxuwKYhDgzu5+4npZIWKxiY8tMVhOyWXdgKQY0mulbY54FKWZH3rX0/C5/eioxnZXAQD8wIGuNpDlmM8266l3mNEHHrL5pudbQykVXgdQ4ENrshnPwWnnv2i7sAZmOLqeLOuqTRhSMDPv2nO/AJCPPVWS/H97BhqiiQkjsBhCcOUUAIA24Ne69u3S6ZL1nW/6QZ+FE4OU9yFQr7fcg8QtlmHMX4405gODbk9Kn2ZCa7GocvNkb4/2KVF9tg+EJ6WfBxNA1Bh61yblDLuZ6AzFL5dD5HtwnUVia6+QwbsRdSYL+BjAWEfa5HayAyuqH1mwBGs1bY+WNkJcC17m9E/hdr/+/L26wiEncsQxvJRTAP7IRt9uSTh0ueYZ3mHoMoL61K7gCzwd86MVTP+2GLP5zrHPz9DEj6wjOhAHCU8trieS';
  const _INTEGRITY_HASH = '526f4f5081bcb64a0bd4e1d35415efe636834569dd657f409e05f94b20abe6b5';
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
