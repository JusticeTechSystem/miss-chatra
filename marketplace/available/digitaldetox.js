// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yet4d3O8a3icUpkPjYaLS8MBSQUnOkW7aB4dvB+uhbD0dq5zilE2XuTt4E0+SuT0PecE4YYClzGWAQrtGFUsc8R7/AL21hXGGgxrQtJqoW7gsLSlUz4j0InLWK1zL8xktnjK7hoAiji9C/OnDlyKTvx3ex5rEMJS9Iy2xgKQQ8BQ1LgjARkygfCw7m/2zZtdtFreADPBv/UgtchJ69KVc0jnWk0txOX4q7+UDXpgSPYcNgh1zLreNA/OeP6GO/zYLS10PdhOgnzPQS2y4bi18SS6fhrXhbUPjeO+VkvymZ76AsWGcmXLNS+UvGoNSIkSEx3KWG6c3YrTu79A9xw13k+aV3qQUAqjpn7U/SY3ldf8oizoaHzTJHySGbnVFV3YRninFAXu39JNsNJPQtQjkJHHQq27eZAdw3s1fW4vMH/KME0GBT8fd+YnC7JMB0OPwm4kcizaR1hCARAAJ+xtnNmpc7awlb6pTs0NvQZ+3kSJcby7bTF2ijxBJrZy/H3bmcvDIeEDIdnitLCIUgIMysErllssFGTvxVYj24/PWRzY6TTUoVllcNJhkB+NwG+FHJTggw9HzzKnOy+57CknELdHwTi+wFrVO+qTr+C8YQUgWbyIhj7zVVZSzaxi7hR7I18paNRFbCWZglY9lrrLvms7B2QnQKJmukD5tOOtAX6Tb5lk0d9HHKcfEWRXkNNsrpqkKhQrSZvDvdFOWNWltNm9igwajBFoYRDH7rlqyj0rBgR+k6h6gZOaaMPAwAgn9ezGtaePG1hyHD87JMGzqhCgM0oGCFjqhm0+gOrWeAnS95S93ObrtoefpXNDd9OfW6EqLPxzFNlrXwKRIyh+78JrN/tUxI2jzE6SD/+ifhH+ey9vS4WWsYnGy0MY1EXIr5chVkZGlOUQ/iMvqjOcFNNeErLJJmMppgDmEYZ5RETiXAwlL2vqmsu2o6YApTQOZsik3BRiSIT597MjVDzeuNZxICM24/U7H4jHnVyqS12LkxtNrWP+UVMa2Lze/K332oycIsREfBZIkzfckmtjD6KbSPfjaVb47nQiGdJGJoa26U7Toq5WQW1zlON4a97x2/k13+SqxqLnNcrI0tPf5peLlNftmLeNC7spXpkfSJYp43yX9TYCVD0YI1nWhKV4UfkQrs1Kz9SEZDzXDidn3eeoOTQ4TY89STdjW+4ngo+YBRtJsAS7xE4yfLDoP9rurh95yownTEf+';
  const _INTEGRITY_HASH = '0bfb13e16fc5831129775670f9bdce8add2f3478b97a6a6bc225ee57db2b511b';
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
