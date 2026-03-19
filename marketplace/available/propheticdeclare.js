// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kZgBrOdNR0zfp645AJ5jf1v8SVMSd9BjKc8ALghO846L0PWNsIMwmxrs/IFd/m98GPMF5OjR2EUxULlna6kkRTJtbRqRIlsj0cwmyLwineaz+/mO65Otyp22jYcmy0ccrEi7jsSKVZfrJ1ezrEsLZpzrC5WP4BSkt/vhQtWKniZOTYEMTzl5HgdEhXf4NrhHXF7R1A2foSj/eg/Vk/z3MoS6BW8BVb3Jzu27sgguXUC1xVwTVf7HNb1+riwNnqKeyZHAKWYok3boUFU8kAtGO947p82t8X7A6e+iTOuYSC8wgmlWbw9SiPT+HQ6NbeF3q27PEpvIlTwl7PVJbZqwsgLAmeFvxQ+oL4itEoPAx5xM9orNS7LaV2fUUyPEUhknl3D3NqrJQ4CikGI6uApFIzrMuOFzCp5mF2+nlSj0+Ly3Mp5yZR2JnZLRcaRWrVjf4fm0afs+9ZdHY0xZ2HpbIhiLCs4801p9r0Td0sxfiklSyF6T+qeQv2VFz9aEmXY2dO9Wfb2khVcYl48o7dfkVk2jcBZjuJdcJpjV2RTYcIRvujmXqY3r9D1pV+aVyi7FKB4nwDlOQdH7pvs7LOaesKo23ZiQQJNh+KTAggL962GtbvasepPJGOFykgz7ZOjzLt+FxY+VKDtL2rHOxgLr77zsWTI72nQWQgyynGTdBTppheefNkniqrvfPN8qCqEDzbtJ4K2QUSP9GukNBytkrZBl//74+QRZ2zuqDV/6XPYo5Q3P51Zl/iGOrL7M6n2oS0edkLZYfDsnInRl68MHzG01SZqmHaTOaVlXcEr8vHRKAPAglzPajUKUkbNvhWlF1Vt5zqVFaXEGHgLN9XQY1nLUXszaAzyfpYTMrQCustihOveTnL2TmcKGqz2xRtbcBVDIykr8AqAQG0IBWvPOHHq6Ml5Jih+tzPCh8GcnN1H742Am5zO1mcuPNzJWn9kxfKf7WEGbsHmob4aCMIrsS2uMTUQU742SgV+wW3yypIJvTay0Vz4b2L3jMXBGW/0uBD2pe9nUOU2MqLxrDyzsRM98iYUNidLDGdWH/mkfboa/AvW3fPwgyKO5WaT5zgxI2HP5Yhi3h+cdG7vK0QuCL7fNWHy1y829LuCXKGjDhnhUby+o5my/LlKXslFMBK8HcWB9soooLz1WpITB/tiqsAATGDab9mWvdu6pnyyyR3Y3SitUzjpcmCrtkG33p221H38MAH44pqgtM+WPJDO7IBV/w6Kx';
  const _INTEGRITY_HASH = 'a75d77e2b7b6e4dc03ab1fdefc12986be97ac9bf6cf7e1710e5bd3ee043ce61f';
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
