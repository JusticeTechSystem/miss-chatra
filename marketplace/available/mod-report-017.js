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

  const _b64            = 'nhLPec1bZvw8/MMOjcHwwwAjS0GppsTK2uzwM2qOR13T02O7x8LLj0UTWjIZ7ezwa6aTtstxBfW+UPqTqoxCgmteCTg0mg+m2oa4+1IBVzVI310+mSZiRjDmBAYREkF7ziLEU+3e3d57Fz4TiyhHpWfBtt+e9oO08tz3KL1den7K4kaMR2MKoHObnX/NI5od6bS0PJQ2qCn4gt+s7MgRcQ5DI+rZFdweV7P7J+Z+m1mxabbYbImRNNXnbNRHzHyhfWCcSkSPWuC8pp+Q5O1kWqMN0CB+fiL0LNdMdIWkUO1w7OrtwNtfBUTkxOR9Rl1299jnPgmMNRRjT0vsBV5mGOR0jIJ+Ht2xcyzf4dU58dzOZP/bJ3qP1SDEDO8DUdNBMH/UstsIf8F0CgNsBZxm7aP+oFWtkF9QWGmmlomtysoMx9PgjuAbhVu1aiAxfalnj6PoaAzMBkB5ZP7Figi805HQ0KZRYUyJ4Z9ZCrjnOI1Zz87tpHtTPJP80qrw8nx5Xn8G8DIGg+WlpRGwIpV/SWTaJR0C9foOkwSmIiLXTBLF1FIQ5Ntfz3gNeBbVvzD97pnSn/KtBUtdMOelqx8JRAGs4GEoR91ohE9yDoX6n8RzONbG/bCQ49d4rrG4QPEyk/mhpdojZzhFY3sZ/dHZ07Agkn54YsZserttd4wXBWbUja1kfgtlxcu+9EqM9fSfc4sLlKHP7Yqxgdg3UMJImoiSt7xOBESmm9bYr3HXlTWFi8uGliRLVLjm0e6WlLRx1vjgcBvXE8dSp7nKWENstR0gOM458RevSmJYHKU0JQfq/Lutpb77i63KlnyOwVnXuPhe4EOJfjkn1WvTK/tr0mgs/NFVzWix+IcXsY7gH9TA1Z03yBx7e3VT9niyMlvOKAXoGQnREU7P3hsx58ITOGgIxO2s4n6dy7fVyrvaRYFeHdaQrtBSsV/KyL4G+R+ma+qX5dJpw+uY3pDS2cizzFqM7oZp2lPrvK0FlCPv4LhuTmjefieNOaehNC5/D4++bYa4/h1U2YJj17MB9THvfYJCM1bd5vagJJTU+DUaNhaBKzNUD/stWKJ0XNXpkbV/VI0bvGVHdATD9JdDMA5uK7N6Lnai6LnKvDiU00/XmmyMcP0SqUwFrZSarsR/FdESySYs/Z5PnVMV+YyI062fT+zmSYK+Zh2P+uMXYQ4wtVctMQVDHwF1E0akFJfHfxZmITu3jADcNFFUuurK0gVN1uI9hoapQjfYxbBppr+r6FYk70zAmm9LNjkXsWvNX8CiV+oedfcv7qOHuhnccLrHGzpnFu+weMx82CciksqQLh7x8Ujb9QXiiFwwjONZ8YTBQK1ORaxSHzosgagfoEP1eTfhjS4gfeAlJwcOgasPACs2cpA=';
  const _INTEGRITY_HASH = 'cd1826bed5755825e2ce7e97c896d45837f5f00c65cf09294a5c745b864262dc';
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
