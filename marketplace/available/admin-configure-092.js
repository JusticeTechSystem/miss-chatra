// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'shtvVuB04R2XVxNlPy2M3Nx3PJ0sCa5SL0rf7WutcUkUASJAh64idlVT0TGm/MEvwnvkC2Yt7fsPvM9oU1MhD7asiYudI5rbZMslUYhGu0zChc3ZpeLrgfm7Pz0dqLw0/7dZ3LASCS3UgNn0OVgJ7OaY6wkXOLVUc1PdvEHFsQMwyEUeeii0FPb+rT0b/vA81nOw+ykhOUakk99A32jICkjL4eClCb9A+K28Cps0YVtgRk/Al/m8lyt/jiWwYOjk3+SjgCC1OpMVRdYgGoR4IvNHTH9BgFHzMoEDupmAMzwsGV3FltvARoFBwxmcdkalSFwPPo3JlbqXARnYHuU5w4gkGgCNWkuSBh6OtYPOtKrgrqegJLGA2xWwcpZokaywytoP5IKxInHFSFQm8vJCet/WQHI5Te0GrWN0RQibo0obtih+TvRtCE/BM1T/nb4n2E9/yJROWgP++y1a1Vnso+P3i9Z/M6CuNOk/nQN8Y6O2wRk2NCr/OI4ra56hi2Ozj1k36ugMh+Kkidb7sM+kObt2bnRbnLQDyaiGhv4mu+PvH0lGVUxzb/iwebkQMDOzwIJGdp9gfxC6KeoMa31NvxptJ75jwdXyHWktHZMBISNTjtEQjavFROqdEeNqg9kiNh7zfR2myehDntchHugXJxAWEjOS9M1nFL60h6AYKziUZd8QgPzoMqYXXOThll1VFcJugpmomLbmsuqgHsKjamqd5Gmex2C3A85seKMgD0O06bkuXKmrsLLjqlmXybIqON8DH0LqCeCqo6ZEd4QS6DFITu4m7nb/T0hIxxICyvUfv8qyzSgQCipDHMv1+yPz+ugu+VXz95YauQRXEi7fk0x61K8ETN34AbtFTkEo/2RLtCfERAnTINP1Pgrk+FG83IZlquOhy9Pz8q/KI3aVHhEfCXCsmtQnCWlppZR5vkG18wecIdXdjXrcnjAg8B51Swart2Y7cT/vJMfSUSON+4QFh1HANRUDzpCxjAOgqr5pDs7UcXHUX+qZJEZn5CL1RtNGKbrNZvnaal2ZpqYcDTIM';
  const _INTEGRITY_HASH = '1d70ddf2508fb33654c4c5366697e8a7f85d632cf15be598ea0387ebe57759a8';
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
