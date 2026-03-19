// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rFbBVAcuH9QHWEvIJF3JROqGIQJVP73FgbRi84TgD1942a4PpKkUtILFufRQ/7lOBoqbyh+IFnVCrjD8bVzHGOZL43f1+vQXm7CwrnfbJS4nGGHS0balYQEPYl8oz4YIP4qeZadftil2fHArZcYnVPj6lYKlfdICKqtRKJJOLJes0rD5sJ9IxiQ8eimz9kBnJ6PGJu83rduZgIMgIukU5KAiE5VqEJYq6h5J9GQfnH3JOa68TgKszZJ0wLjc0x4Ho4gQaJblTRhNyqCx4nlY4JeTRUrGSFuEIc4DmHePXHrR2dowpECoGzymsZuHh8VyUCoHnMqRH1uSc8g6q6P6YAKMNNngXtziZkRte/5hgJhp29/Nexjv4qz7Ioxa+3Bo+VvG16LAYDAxXXhqU1rq7TN65XnA85dGB8FujEb0+kKK9DKa1rHy30YEPLFb1kFgGnoin/xe1GdS/HwpAycZ8jY5xCYmjg+C8RikZ4ag90QGnDkulUkns9CYzst5M8ZSpf4UCyhDZuSpdmlfRA8zC+3pU8miZmhdEODaIHgn+hvxFwzTTfAo7HpiH988JfoHRZyX+qL0xaI7Nd2hQKNsoa282i5zIpolCXVFmVMpGOFVCjgekk9t6bUumhqZJkquwV4l0lc+dYDSSzNq8uEKK3VcVlo/jh5VN/ngtDzuaEQS2aGfYdhpej8mslo7pxrEpnfYX/cFls/zIbDChaY23RyowmAQsT1oqK31YDiTKsh1adaDLXvuky0W8S+nkGr9Qj9YqcsP9kqxalC/vHeNtzzStzJCzXG5WbKLhmiFGbAVT+aGcjmWX2hZst9UgCCQWGIIFtNDYZPaA9zdmukFhYVyc0AzvYnBSax7PWDQao/AddzTBsc7v5TymvHD84QN6LudP68Y52+/o60MAEEhKQSEkMPYJKsIi/cmbBnnJFHsKEiBvNEsPjS5wDh380nuMJIfqD0KkX9s8TiviQVK3oa6SgUZ4h0qGJ7+3UmdjOFS0SC381dnPGbaGtlKFa6DLdugY/iM+ledz9CSZXw=';
  const _INTEGRITY_HASH = '45e62e9a7a2f4129da8ecc7deed114ac8ad55011caa0dee23199fc33841d27bc';
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
