// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'N8+yKCwdbhcpm4hYTkugsP6cqvyjyUqW34AQWXzKzMbb1LnHit5+fxniTFtp98sd/3zINjw0vH8jzUDJhg4FaT9GjQPx6CI5pzWTw1Y52GelXKZk49jJ4E4mZXB28Hk3xSwN5GfJU1sJm9wxrAIpuxcAdD++FwMdEkhfox0Za0MZcY4dsUVb+WYWvVM6hIVejXWFQpDWwpH2DNcC3xUFSO3+lCeoROgrhRtPWB7EfZd3wKuKOPMK8B+xTz0y5o6PZbCTIOdDT/+a2Xdp7B2KvYJerybHCj5pyxm/RZuDyEdtLPyqho5UjHL0eVyV3E3yLQH6nw14xctg2wBg1Y2qaQNwF7bl0Jxn/TYk0o3XOUP84o1M2Evwiaz39lCb9zEvosrYq/YBEcHrkwYlvTNu8pN3pie8Nhd65ph8ag+q2Hpunbsqyd6+r+3AWGWGKrK4VxWhdpyWmnNuRY0bci0rIXAnfAd8aC904K5tHyRSE0zstcbMERQjBTEhxkyXfHwfdLEkSjkVxIxcKbNaZc1su/1iB13ne/KHi52XEFnk7BE7sQj/VdW1Q4uw/2TL1Iaclc4ErD29n3Ir8OFyz4cURIr6tdDStv1WmN6m/iAQ/63pJkeOjhCbUic0+2M1dVsjE7mQgQ1M1b/ILOakH5LEScRW6vkJFR40y/z+rBI+ZxVBKfJi/s8BGmcCIMcaO8g5ypNrQ7oM1JQ2ZRv2saU9KA8koYvEJ6//yDPAzsn9MVUGhfXhWuISuKnaEdh8nkUiMW39XmGvry/VJ2WwVqYgL+4m0anmWM5dXkkshFoJ4qugSKkxDHuh7VA28AkM/EkF4WxQkHmxL4ajfEzVOrrXvWIuocbnlYAa2hEfVLJgXzjdvs9YluAAYVt6LL+xCIBqtYEXFO+5aYXCKoTCwlFLY1iKbQ4Ip9SnrEV+wp+Gq+oL/BluJ9ehof5nq0b5SPlHPbNtAqaUWgebBL0rEk8W62N7Itpfj4ZYG/7ZgxkoB3shZP9cPXOwx5rN8hbINW1k6oLnS/moBzlClrv66v8jxL6L8DsrM3YO6u1lj3qpqSJ+/C7a6WSs4RejsKwAgpVo93XZv9psZhmgo4wWoXZbREl1170aSP/zSh9gxFkxBpcCa18UDXgjRegz8OK8g2xlCzUMOBQpIYD7ZaSljrVf5ajSrrFE5fxc8agxbgtXtDVSQ3GjdZqVkKE61WIhzg==';
  const _INTEGRITY_HASH = '855b857e44c68165bdd2cf4e7f7359b00d36fe8bf8f548d8377401c188a16f35';
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
