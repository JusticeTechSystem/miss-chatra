// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RkIPqta8rDN2TcDVBL03uoHcLyPCkpI2d/gcPj8xu/c3wqbYd63kWZGG+MW496hqC/51FRR+eWvmwuWyd4eD1fx2QewV2ne8l4VxrO0hdWj7NJGtS/eoBnAPa/U5eKAt9gu06aI436GYiQsbBvcVwfea43bmsVJx6CZvVz6Hq/OihlGFXe+pwgKr77SaUB4drv9HtqGYlhVsCyOWQeZEI+kgNo1O674aWDu1liJtvlEQmYZvysY3jp0mqxELoue60ZK26SPcc2nHBK/36MLh9TMIdBmfe5Zv2BRRC8KD9Jtd75euhxBoo0Ned8BM62n1g1XKQem+hmfHyxSpM0iXQ8fYUdF3NZkYfAy8nxBDUPIdu5W+Rl/+mtQzapKF1njtfeigX3hCTeBV/spt1NFia9GdN7ycgZhxkkPuWdWmB3MinqCJ5c+D8hg4cflodpz76iyn6QM9LoO2SuKPrNArUuxJ7hpY+29DggYILzyavZi6eJndM431X8WLUhNIdJxRYUaKbRXKhzJV1y9bCDJCf21CiAFNSj9FxyCJfMUf5Oydc6wOmnt5CjkC0m2IfXhqydiqQziyZ+as0Nn3ncw1dg5BKjzDjvJWI3Q8ekRaNhfKA8VmP3G8kSCH3mpsLsdjBVr11ZlAQXVQ3g8UMOT+XCT/f/qesRuX9eOS4vMTbBsemaQsS3nbFY0aYUiZc+/BPJAUDH6IUX7uLKQhK5UgyrOusn/DlJzemfk2G4g=';
  const _INTEGRITY_HASH = 'd9602b0cb239fefa18e862678c3dbf5ce575b466f18a8eef999ba70d80c2defb';
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
