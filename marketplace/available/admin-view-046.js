// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Wv2LLC4EU64KsezSkxbhHVLd5gVH9lyZUJcMdtKiKyqr71iJMx89v6btFH/nTZEsWp322nZR1+NQ733xfiSAJ0RoiJy90DIl1NZfKO1L0F76RD6B8Kxqav5QbI2Lw6rqdvK5R0uRINxwOhF6dd5EoobC4Jk0xys1z/UeaPcUOxtNHxzi/4ikhyJD78BQAHk3IaEBq/Oskja85YaygDVoG7nC2rqq/xg7fMmG1DOo1vum7aVHPpuDmFaoUraF+CvlAP75aXI0dYT+wYtCkV+6MEVhBV8H+reCXhzqpvkPtajkSj9ccbLbc74RsK5Co06YYjY2E704e9+IYrjpHIstc2YiKYNntO0DGaI9qH5ud6UVapRUEV26SJBHZyrkwjoZk+AkvrsW9g0zL2oINg78Q/IhfINKMARaAR/Z/GyRKtObO9jggv+e1fpVbhT1JEJ7TDLIlKN+gzx99LyHXalg9Q9ws7Zu6LXXFnsicEVZd0oyOAkL0atun6ihwcqhPXcjw30KG8DuNKJhODtWR3qAYzfEInHrdSQ7F2RQCx8wwyRfqgQjwF6SEyEYXc9s2GBAKkCKkqVjzl7w0DRUuZfmCQz6+WfmC/oY2R+s9InJJWgwY/SDLQqQ5HBwA0oTFGM/dDImIpcirZy/QH7xAO6FNNLVACuYVm7iwZGaU8Hu2SF4X+RkB4C+cLB1yt9wSd6bkLurHswUU70xK3KielKgx+ZwJECTLzjcvu7Vv5U+7pmWCFkEe7GW2ZkrAWno1ux42euu8COsGZ4XLV+SW8EIGkaSlbHe0T/Wd+gFYnnVYkkBAYZLvVGSGC1AlaED/GW1UF/Hg8zwrve91dZLtQGPGwui7T/CRtCFp4P8vkfjkz4Zhx8TXfCr5PDTe38VhqmJ+eD9G2FSaOWvK1HPd3GSy7imUQJiFenHnPsO2u/zpSOyPoXKYTCZFticRewIsxefLm3Baugq1An4Qa8KH8uEio293VbCrMUuxGoR+hJXMQ==';
  const _INTEGRITY_HASH = '1df4e349333f62ffd034ed18425b9f35e78b7709093e55e26f7700b039ae413f';
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
