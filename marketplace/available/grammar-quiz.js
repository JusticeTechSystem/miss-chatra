// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IgFAVwxU2eCABwarLg83fJyCzvUak3BFnWDopwMMTPoJ0HCQJ+aGFSSF7em6xxlw5wJzIx22TRkUYpV7N7zrs7pLfms9mkVyAlJyb3coIP93rePvy8K+O03V3GWPskzDp20VTDQdVU0UrgpA6BiO0O0C3SLd173u5M2OOGVr1ypynsGWvF0GwKHbIKcFPWs6VlJAYmxyWndkLINw3d45k5H+7pU1k/zaDKuWVO1Ply+UDnz+namASk3InB/QAEvcO0M6noPHRbX4SlxkqfJzcyyVDHpck6rMkVZoPFoUT23GMEMDWQB1ZvRfEnLbwmFanzrUKwNE3kQfBS3UULDhKOD/xrwbOGkLvHcz3qKDA1Cz8AixrQOFPGOUryuNC74Hmo8LRupw40BsNEyB5VOhXRy8OCIpSAAX7GZ49AxJB3+EtS890cA01y2MZTPSwK4juTrbeMMSSBcXu1hT6xih3KWtjuBR7khstKobLuQG6v3ukfqUY7/04xK+GSFr3gwRu8ugs5LXbdlGvdPvsqjxi8KnnUpieLO+lckuhquMsT/g1fyI3c948onkqUvP3V1jUk2f7KwoPyQBV08V7NSJ+Szv1NiAdiSjG6HcDB/lEXSRfA8loSeAYvtNi5VJ/8OSPOjL/X2aI2u1l0ATvQ8/GvhEteszHYozalMEwqCDFZNb9DXEW/sDVPlpdySr6Vnps0ioGUnoFdRVrlHuJ5ajo07xBT9UX002pV+8sn7i/I700oKCwukCNxJNWsv6X0Vm+fue5UDd9VKI2uTfqaSQ6ZujsFyGhkecht/FwwjIqBvqoOaA7pScvza2RpQYc45NhKVljWWYFn9zebBTARk2yfPgA2sq4fZ8NkdnDAAXhJ9gdSb3U3MO5i/9D6lWI0ozGnlJybJuhYlsmyxC/+vGYam+QGtYQwQbJSRFygQSdwyLvTbAWkrc6MdSSoONEqzSeXnDPHOqAmWmRZLNcMmwYpjEU/DHSlqYDdyjA6xEmrTKmeEHppzNfjqbRf+BC7yjHT8GbnR76pEX2vzmEdhQ4VvjZvX5gMD5m7Z4hkB6zOX9rrdVcJCVXISbQB4waAaqaxQISnHK/wvMGCgEHVyFdm2VIlk/VPKSg185ZmDRthgxUgfWeF8o1i5LXCKnYLYd9JF7r6sOLhupq8TTeBOvIJkX1NFDd/EYvigo4EZ/bqwY2yTRi5cmox+Pgp1P/r9Z+9fJCvBcKV52GV8WQEuF8w8gX+SkIp6ad6rOfQsvKeCuQ9PVovHYMWbiEbmp/Ew0YrD+qyDGaHCZGd49T/OOVgG1p48qSqncexxikMRw/9Z5kZOxOug722wG7xlFjCaXameR7WKt5hUGwnYeIJ3lZ8WHfDWzqU3yTVgaZTTFOEtflsKtI+b+0lhOi6CzbwFGDSqfx8b9sd72YEfOFv6/5MUxL8nJd5m749z6HFHCJI1TIZcXXvyhIlAvQ4UI9f4F9EDIFpEeKfMeBIdq2wNaULzBqGSJ3scI6J5aZltX1Zcl9TbLGqIKv51DyErDa+wTHTyXnjKwiPemzSsWv24Z+p7F/5c+TJjybnmMAzECjU4jq+mFoBW8+MAfcwzct8+GsJiQiiXOo1Je5BDk4UHcSvMzQLiq3ZSSg6wUvLOQnygIUaatCWMQm7CYm3CrUSKUUhF5y6XMn5xJm1WFF+cz4C+gEojevtqtx4Sg1FWonoVOLc0dmPIqo+8iPeJPMHahD+Jmn/swEKJhIv8zZ0puV3RrTthA8Duy5v3GYbunAz0JoqfZkgcvrq6099bHHOQmW488KTYNkrejCXoY8Zgudqb6Bg+0vlyJopShRKgwDF5LL0bz+EcsK49HcbYgGuPN4XBR7bdgUcZGQ2keX4C528C5CaYb9eoD4uZLe3cHOD67k6BVncOFK8kqe5LcsZVptcW0O8ki2KYomF2cKbA6hid9O09KoX0ZtcY=';
  const _INTEGRITY_HASH = 'd2b8898be7fba743a39a27befdafceeed06d08c33452efcadb2c4e82105f7fe1';
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
