// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KiktUFacPmHNWUtYQB8vvAmGjoH6Vc7CMswbidTzUvi7D9K1zN3meJVYJI+aBFv9mrdvHjKRKa19mL445f2Ib5i2SmKaWzoQ9hNXk+/fuKkmdov17sirL0y4eBhKmSM6qyaunGfSKAw1ll5y63rceyzk3k0qqH3yGurczoz6sWZYxhQVYO58SowqGXu07E/n17APuLQHSsG50ahHzyl/kjzfNB80LzuMwYLLv4vjkqXOllTdeZu5MYSmBluweWXUNft6HfwL2ymNnVz6KkQCd5+t78RetN9T2eAH2Ax7e4x47JAMbPyS482h43cH1KMuNLqroTj/3wD7JSYP5PjAE6WXd5gyZyVVzrhK0XVEdleUxqgVTUTGhkvY9BXVUyMAUInWIAzt9WbUASXgllEAuAlriD6UMhxIB0XsqHD4b3yHvwe5Mj1gxjWMJZDOP1JV5H/CQoofLXdEYjrIW/VDjNup+qVvrB/pa8p9EU0PlnDNSYdE7YZ4Va3OR3qHyLLh2mCZqPqDm4/nxDA3hfZeJUylffJehDrH83XPreAybldbAtm69NU1ef59xBnVtFQdf2i91+oZIrjsPxr6jWXy+vmGmF1JWADhLi3GKmCZT+y+fAJ8wb1mcTJNy0SNT3WA91ZZWemY/rYi2Kvoki8ZXgW6yJ9Mo4JrpKLQKQae4vo0M+EkKeKR8DhbSNpl3jDM9aSiaTAIWIDZmXZZcPtbWWRr323FycPpZdA3QVd/8vGCjIcajOk=';
  const _INTEGRITY_HASH = 'eb590f97b19baf9e34fa2f82d84cdac1503641d422d36f65674e32c65c6cbacb';
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
