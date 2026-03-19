// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'F7YthwE0aOas9M8QP4Q6ZJV4grsklwYLN7BIERCXSLmq40lvtbvibGFwvOZWOw69BsY2SsuJb9GCC1CEQ02GJWvRDosW8A3o80gZZAzV2AzaMSRxhbJfB9hVsvQsv7JWEsDbbo3al1PL+xbew76bgH2YTDczYFrHD3sRDFdGlt5LZ0wEoDy4lt4vqz1jladIK+fHUAqtVZh/cqlIbuj4ZAKJoMSMxVjJA5vJQCnA2fWu6dRlduKcygQqsnysic9H6ba+t81g6CRtrfGD42saPFXgT7oHMFKO/K2xKxVnTjZY0MPBZe7nWCwu2oo9wCgk4IDi5oonJq0/8W19urs9OdiXBnNSmL+OKlpWh3vj8UUQICSMxECsq5VNefX2rISYARQggsmaVBONTlluMZiGl5WTPLCJeI1g1SUp/u8oTqWZvI4xV9HpdjtUAuGpP1npY3R2Nz6zHYhI4c/V6Ji1MPMM/GjwmPoY/RE04BwwjVnjswk64VjQadFtWfFPSrngAuGisGL2kXjgISn0Jel1dIvxMSd+UwLbYtSFXvtXhZwRr+lahfAiV9MCS4BbT9FGBYWl1WJvDQZKqUFUBFAc0yu3yQCONPuBDBaoV9Z9V/CMVlBhDY6j+3Dvj05scwXNG0j+YfvV8vk2N9SeiFKTZYSi7ULJXthtSBgKniGQf81ScyvB1EGZWie0ZmFERrRAJuhEjjzDhEHzbUkDfL/BmrWEP/SagNFtknsGTs16egaPYsnRWRBm6wCJPQhHkQNSf4dZUp6c7Z8Ig99lyxJtFtLTehJEDzdoKJbZHYwj3X5BYe81KGaa9+ecLICHb5IYV4SnyS6xHMjTF1ydXK2kJ68I0p+U52lRZT9j04fF7RgqgE+OR3RbOQmxm1JmXWq6FdKpstwVAf11iafgMCZRwHcbGAoA1/VnduRkz61v5799khU911pnnZ8NZAQ/Wx4YyHrj2WMOxAXCkb7PzxQxqyEaNRAnQzLUKXVhwKUVu8MLUp3EJXAy/GSMlVLYgSWtYfu73WSqds2ygwYNDWSnjzOl';
  const _INTEGRITY_HASH = '33b0ac1188114344e13bfb8b259621834c45a72bdf5054cc5bb0886d2c5539aa';
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
