// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oQ7oxd5bFdaMP2Alev6Z1m6yLmezYaM1/0vHP9dzSy+G7uPI2NYnG2iKSF4DvuHOK7JegSMBxH97e8nj5HXhrrSOK9z42f2dhIJwFdB9gxY7VKTkKjhw5sMbOMC+uaA9Re86ZkomzdfLnIbXj6HQowXA36FYZHGxK8qJXRQQZ3jdY+7dYjwmo7Ytb9xmHiUDm7CtHlo5ZWiN48Z8ZA9l34F9ZUC1k4AUmZjnl/KNhiBA9w1jIWK8qFNDJyX9q1FXYGM2pmHhuxuJSmzrd+IrU3oSp7TYpW6+n5X1G6bJ1Dy6wEphyGy7qKpCgPG/c6Op6aNg/1Vjrni/KnX+OJsV55dnXyOQI81E8q86WdS0Y3PiBmB646Ej+odHCkB3pnhqA87QWs/tZQkXnUCaP0lmOOjDNry+ZnysMaCg1S20GfLVS3B/aoZHIhqvJgzyjKhwWYt86Y6l1YDASG+9IuCvuMLxZQsGET2ZrVAEd2NyZlROZ8eUhHnPrVIlxvPq6wq5d+LUvj0HG9s0zFQRaBh9sEij9lF07wjcgbNpTv1A8xDQy0ImU/YjOhMzFNg2tRb4QF1MBo4L3o3CcQKOldN08pY8tplsAZn1nQW31qnmc8SRP3NpPym0mqnzKohaZljTGpILtwAP7tnyaCA7OeHhUygtR7bVI9GZj4/bZDsVUGIEjNIyyBdY7EnbCtTnD1ls/dhdSf0DX7/m/SuW1M5GXdr9wSA2WRFjCuZTc2mc+KfHlQ==';
  const _INTEGRITY_HASH = '9bccfb1ceee3093ce370b1f654c32e16b27c1f58ca67a900d54edff96a64df65';
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
