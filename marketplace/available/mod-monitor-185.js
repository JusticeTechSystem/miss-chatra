// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'T39twQ2yMNWcaRfvKlnj1RBB9qwWpBfoDUr4ZjhjeHSBU86aGiPN1IdG7TLvhczECUThKPpvPokclENAICtM2pgqr7qpGT0vLumgpsbeZlwKUi7GqyY2oCPflcxxo6ChUrSJNtkW1oKz0bpKlBuOR4GNPLBm6pJembO6yFw1CDjMCS3K0YKrkqsZ2utkwJf154u2OpvZVHRHz8SUrfbyt/qmQ+tWm1Jf25vw/P2txbfEs4xjY7ZC0tdetT/DQ3uQiuH1RpiHMITjGqRbjhPjEp2zuZ6xlx7ApAbQu0V/cYwnMAeqI48SWJ8AZKMtx8hQKi7h3Qd8YM9xDUi1E1rzqK4jLqT1rUGZDbJNHFsOE+QDAx/oocqVM4v2n5XArnblMHJYIOaoguTPn+y5DmKgS6Q8bTw7BBsPRgIhobsMqTEEZ9ACgXJR57OMfNM6bs6vXeIsSpYJ7uGRgmwnHFAPQj+X0j0AYGCL+odrzqVwteMqgmtNj4sKT/kkbAc1EvihVQLEM32DVI51qktacCSWSU4U3m6wptNHcIDwVOFfgNQI2Zx6vkNWKM1eGfkh2SYnM876VVm8kHVroaz4764sMGGoidkb4EyFYf45pb2+h1s/bz55I4TThARzD4KbuCJioXtXlhNUNhdG1MCTYaEdxOzVXm0ewokABmtPkRIng/phyY7C6A5T0yVqLobb4cp35G6+Fvw3HtRRgn1Ogkb3xqEzG0tCSBN2kE/ZiYy3WqLZWEi4a6+w5Uu6SdVaIJBvO6qf7NoOOFXct7wypWNKpPDM6fy0JeJbjiCpVM70nYRnINOmxeb/WZI5RVctaw4bupImuRsquEy9iPEBYR3cZZGEzG12N6auoxsTzL6tKYW37W4jawJvGqjCKoO+ZshTh+11gMkZOF76g/QUWP6mhXKleowMii2D/NO3CcP9YqDE2CX1nEQp8MQfHI/lLl0vHhNjc3roqR9RjOHKSMnfEilqg2nKVxtt84VUaL5GAtv+Qr4AF4Ja7KSvvyAQk8EFX/QyHl4YbyMx8eOKDCa49F6jR2X7y7YZbG1GbeJ3s5KE8DfN0zmWbxdsvktvgUA6s+x3C3tD7UBafZEoNPFcHD3qm8GLiE0PVMctampcFBY1RUEoTlZJowoSZKQttQ0k4v//zjr70ZaNB7AXlg0m2qgCJuzeNQDfDrSEHxzFgKwXVyC3FDHr0ShYGI4xb9hjAIi43TrC8pDBGvSUYNKgvbnW67vi0uqryFCFBBQ0MwHrBaYtBlzHyGFs1JbNFbXN2hBB3SQ0zofK0lWQLXbh53lFXvdNAHba6D5aSK4hr7Rm2a1o5BF/B06Dw0b5IGeOMqSDU9icbohPa999zWYmoNKcA3BOlWbrve7S3xPcNz5FXgF+XV5a7m0rAoapFVYMb7k=';
  const _INTEGRITY_HASH = '006e327e8597fc503db76a10767a9a05f24e83d99dc9493acaa959cd072c3897';
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
