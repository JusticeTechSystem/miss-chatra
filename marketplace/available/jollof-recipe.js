// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VR2bBeDrkATQyhklMOuoFwNF44v5bkhVLEqG/8IIpHjxr+2bs1cm7qWMeypNRnqlnv2aomX5dz1rP1zTThotke7miuXRfIMPzvrW4sh9T8OdYqvkOK6DK3u15hv5Cwy9QqL0Htd2bErLK0FQ/kyAmX3JHMCwgxZvnHf5TJWR73UXQLS5FJ2LuBylZMsXGkStLBPqfu5YOIKcVMtsEiy20PcXJu0HYWOZGwyRRY8wift3DjkxpcUScDWoahRzkgFSeB8s+FGKEkUx5sCJc4cWa7+FMPBbezz3k8z2f5mLWzFQnAS/RffYPiqOZBVZ42oePtvgBd6gh4tAjSmaSaTrFL7yKDBiMmHhrBZuJExdZ+jM1v6wCqekI8zVoffD9fDC7gYURjGKJ0uwkpbfAQZZOZpKW2G623///qL8jLQkruqO8XauTudtsqcx43VnVAOamgRqDvBPCrA0g5vByLqjPIPK0eI9gC2Q+K+hLX4OEzU3jkwBafPIKuXMIT5NStAPseynWchFh+OGPwEqmDK0twuBQ06FIgK+C2cZJu4zguiIxORCj0/XkjDExhfAjD5T3hcCGH/tbBgrPxLd/Z7aJXykgA==';
  const _INTEGRITY_HASH = 'be143af2c49256adcdd96b2d1ef7255c43cd1897d4b0992d8854fe16a2de10d6';
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
