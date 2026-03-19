// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+MN1E+2RbIuCwOTfcxyA1NQL2Yc50qhLbfZuXyf302CZkKDq+ssBsi2M9+kWhYnO1P5seL6lxJ5fjz2ujJOKWcY98iaqMQeAJVr7eBPiw1wFJM2RMwQoWQQ7rBVvOzay6+0BhXkLlQGDUbHk0DMyQ8L0+8j5y7Kyrf8prLUeBAD5mf5m2tXuRpQSSo4ENA36VV+rrLH+H/3pt667mJU+LnhWfZOZ+rlhu76a926lNCYF6/bUUfg6r70DorrJd70/u00P405wVSdbjpv/bE55HJiSzDn8MJu3o6vKoQ5kx75m9GrMYd3c9/PidQQl7N68SL5G5FlU/D97ijDBqkNvQEt19kj4c62ZlqUoZCXERfMiYuNPEED0WVUKrOw6t+TcxSl1JxBscZ4HDYyPPelwzPhnlVzuW4ZWW6f/Zz3BmqG9mNBwQmbZP//jyMfafaPwFajLldBbpE1Knpnclj2z+/BzSq2YeeAj9/8QFycmpaZVK/w35rzNGpNRzrXqf3xhj1DFEPk5+901axtGk9COoQftonmEcjEgRr/o4L3/rmME4QxsCMxNZt2yiWmTNAX3AIQJGxBZRNObf6E4lM2FqM5Cfyjove+I9xdYncULPCI3Qu3MgVcSX6nvvSZIWai6BkbOwmRws2SF2k6LUVGwEXPTYuPhnncHI2DDwFAUv5HWzJmHoBDIjbiYah0hMBrU93446m15OviwhU8Fwd1ChIw7QsB5SX7vCvqjaAoDW0S9vALZXQ4/dGnGXjJ6D9nHUOlE3plF/BcHPMDBtIaz1RuEDRVhMO1oLEzilB1ltBG64kueFrrahDbPDF17Tjz5N4fW2yJmBYP/EoySt3xlEc5SYKua0VXrWCwPUB8r+A5VhcanKlFQW+WWgYZWLV2dQj3PgMgZC/s04vqzadkoY1xvOXF1F1b8U67F1pWiQMjqvVnNItm7uvG3PShfGbTlvLzkeqg/i/POES2AFumzplBMKsXkDOV48AP8pMm2qEQBbC325w5Et2xO7asHPR58CSR0X/VhgQgAEOULsHHtDM3PBwxf6u6fmpCK3SYSgX9TgMnPnsDVFOTZEcf0YyEYrqrMg44NPxzjQvjPzvplY6k4M7BQvM+XBWBq0ODRSBgP01B0uXglxirNKRhnKhDlUbroEPx0b3LqT+5rajVYzdhBoIv2vT3hR3NrOQiQkfaX9fbIE5L281N4IB55wtB7lnRS2Skv+9z7PJztBQigdlhanzjwDqJPVfO1Zi/332JYYxdESPhGfCQp44Tu3CWVs+EfwwVYKhxbKXHr8AXVkc4c8GDl4A0yE6q//8s5ObCsS4msBMRei9qkwKbQ7OUQmG5OWTSqmuH4gFyxtu2H/Tfrn2HK1FWp7fDM9/O7dv5oX1QxYjs+RzpDvpATE8pBSr16OiOGNo3lMPVa';
  const _INTEGRITY_HASH = 'e7d08e736fa7809cfe607992e522b4383bba8bd5be9bc1f256e3804b24e8ef1b';
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
