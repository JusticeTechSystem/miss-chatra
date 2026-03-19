// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2VHxyuhkKUhz3u4djRQKqTRh6w19yHxCxej8G4cIi8FTuSa7wGiEjiirZfRrfglMFVFMLCyHYXj37FtsP+74sx8Yc2mVr0HvBtpnA9hYaasT1dij+OFsmBaCgcT6lL0prSEKV0Gbjy740vaOFWuJmIbXOwCt3Rg0P4/vvQOk6Q7uoTIwrc15WUJGnzfhwYlNgNlLYN3HKMinC63k4hEMqpJZpqCQyiInn7v59ADK37rXGxHB+Jb81qGieY4qHZmKO+CSVALzxqcJQXZv65O7t8McxeR/nG42Ppye4XQpsFz97jXYW3JTNQd3mIoRhF0lCykusmGu2xZ0ol9WdYWsV71ER03RU05MDK4rEmiqZAwVh+MGI0/oCURWDt+GX5e/5LM2x2LfygLl26rHP56zquOqRS0t5kdgNMEQBS7PrmdQfBnVfg8yJ1cUQaV60/pPLQm+rZoXPhGCd4rpgRcFohFtWBZZeLjpbDtJIO6b5tSFObI72gkqMqlENGn3wlbnYgNw3CKNEhESZjjZNjDcROSlfCzbSNlNQhxLYUZymZA3KAkfLUXfuCqg6JYyjh1Nv0wtHqgbU0gMZh5Orhv2NXLyjjlGny16trIWF6rU6CaPMO7FqVv2bD8N5ckdMj2Hly06jDCC+/e+X6xLnBxYiLoIW8GEVKWof6kM9XG8kYDZ7JJ3/TGWrjGPUzNjNJkENzfdo9UeN6mJfpHsY3dTMtiv+xgAxy5h3Y2oaBfiPfpJusrN/u5zg5fZ7iiWRhgJosHxTlis154UERtJTuRuzbi4SHbDD4oVdb9aYJ0UL7wm5o9lBNRcb+CyRypn3/xGusapo5f2Zs4W50vB/D0tCh/F5nxoGkC7LFNnJEVPqOLqtyA47qYsWZRpc6T9liHufKYStBP9MBKnMyrFqeWdeHeEAc/iiBAJ2AtdQihYFXwTh8DWCfiRQNSAKG1eTGi1xAsUMhSlU3xxr++x8yYj1OCnIg0rN5GL4awts65cUNIwqJgx2bvr0iloVqKNxZKZiWS9tlF4CDIU7Fy0oJ2CRHaW5Jc0vQLpTgtHyu+r1KNSKDmnO+cv9po7DJVM4V425yJgASW+e77w9OkXG7/Ipq2nsmA1+2oXoR/cqBTZFXZvjqrZaRdBWgzlOzBzMKnKCSy0qKC4ryCItJKdzqi7z04o7sswDL+wehi+XT4SMLsAmIrNX195p9boMB6gvKcbWB2TBZilM99iCNgP4M39p0U1133iiPbROlGopU08vOSzFE6dNjq8sQv6vxjFGX1E65KlOa1UEUfFSpCgpY5IGN4KFI2giueJUMF8FbxSEPfGZkYt5FD7o/QSaCxcMice0DxU9cxI9SnqTmxkwovT/Iz79wJdNELFkYrVX7j9';
  const _INTEGRITY_HASH = '852d06456fdd664ba627bca1c62e299b14f5dbb9dc68ce53ecb86a82c1c28812';
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
