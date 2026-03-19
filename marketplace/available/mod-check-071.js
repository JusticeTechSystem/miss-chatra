// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Cfw1albTcuwfJhhOrch4hjCjVcGp3B3eN7KaU9DDKeb/F2mA/fxsTuI39dJNafd0SnxXH28tsn/7S9Bg75dfGX2lDERS4XpPxLbsf6jI0q399r6SaET+iu6TczFOl4qRBkekn3KyJ2yOJU53VByC9if0s1Dn2CAzPBE6AGabhoRcGv6zjFYTVsO99mc6s96Jvyr6VJ5vqvN+iyv+wNk609lBVs8fbBPU5ZwAYpo0prFG210inUy8adOIP6puHrk0FHddefFyW6rdXRSmuoML+3RcqTzYlpbG5aLGaEk+uHATheYSLb9a76tclluL/SKAJ/yAeZpxv4wCFyomXL9FuQkgbq63YUWbYLgF4ngFx9vJ/XuPJONsh2hYEt0GSDYOjOmE575FDG7c6MpzKDx/pYJCRA47wOwgWnIzy1VTc5oLKxo/MqRNHlX6emDmNQhnyY7WEkgGCjErEXwSZZflDErhDjhjmGwqrGWUkGj0OGC49O42WsOa01/zQztCic5tnTMjVQeQfn3lvW2dxUF0dYNjzQU6y8i3cpgUv53yIxMwD59+lkZK7+JGGCn356de9B+wTUyl/5NQ5mdMZhlsTLRPfTkwwCJyeBWHcEL4d5sjzo3YznJgNd1K3cai17IHguLosg79pnE4hgBXfutsUfklSzKZpCQy4YFMq+PJaCg4snLEccg6gT/HMKkjGMoLBX8ktqM8JsfF/XYHYBb3B3a92Lg/+YFXt3dT8jvmbQv6z4eONyBAVOI4m5cFDIbA7Y1KTQr+CjfQnGkb1j6K+FeWHWMVvUpYboewSBh4OewREPny7mhssQX99q/zONXwl9vrmmKS7LuteXnA/IwcgE59qekAzNW5BScFsX/ePChC4+ym4534zAVHl2vuPO983UiGasKBszs0A4XSbf0ZOzcpVSOygTNpvV+V9LWvhh4f8U7x3XP2i/9mw4D9VThLv520AxgKdGNdyK+HKU+wbvNYt7IsGvEFgonwSa5VaBsOdjua8qT8QYlmAoQKKK9Q3Etfx3ew8lXCePJlaFtyoWvkpg9Hyn5DV3A7QyoSPLd2uic1VYkDmlKpT/TkFKWQtwhzi0Kq6TqOaNwDsE8v7Og6VFNVtcbpF4+pjx5ZkVLz/FF1pgPMQ2wbYUcVhRgs2j4rg45gBhvjxhQRjpfatFlAJQgQLY9uvAFXlhGxRrJCix67Hw8DtEXSO30jGBzB31jyUKz8nD7SVA1id5oYDGNo/gDsMqOfCbtG5YHT1Syh8ozZ/yEtHiD6pKiOYuRGppPfn5U5rOwRlaRgFZy3cFSP1ymeLCJ0waIfGYxUT86h5TaWrloBvNoG3j3o3dc4gz9GJk6eWQVl/rBAxdxVITWilERxRjUw2Q==';
  const _INTEGRITY_HASH = 'c9e666fbba2d1d7cc461af2a282e106440200df5f8c332e46619abba4edbbc59';
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
