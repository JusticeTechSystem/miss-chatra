// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+N9Z0tQwDGRDkeX9Q9TyID4p3uNtrvRj1QxOZrc22gWFukbXE/odVGrh7V98c501YNqDQ3AttIr10EpXNOAKpK7f39jOQ9bvqEnqxVnrwN0KuaAKdffjYnRJr/LijTdqgVj1EZ99PTejIkc3WstaitbQ9MlKQzGYAhuyjczrFyKocxEk9kNfWO+NHgX+bLq+inSIiBL33uLDoLhOGQaXczxjv3p0Y+MngG14BCGid68e0ejqkPxsJE9PWcgkUzxA4xcQHYA+PZf2460EhHxMXSenDCE41Y5aGAMmXfT/ioi3/I9jJY6Y1R8eUZneCr8GFwX9Grmv+lCYgI9RmmgogZGiV04Y+LysDnsvCGwBc0W9bCkRH2AGrVSMXxMaRRKQRPSDRW3CikSN9KM9IMo9pYgcDUwr3xDm5Lh8aOwT3aqVKUPIYin0eUHz2cBamy5dtInfG7tHbup6EFuAdQCUYdfFWDtVLsSFazuHhj+FOkS5AHcypBTdGtiXr1DyqBDTlrq7vmqN1Kvu0BaKM6HktVHDurDv6JHooSLseueCJUv/C9+5TPsLSp4l3h09MrY53xYH4OsZVj6+3CjyG32bYg13l0wlyib1kabmvmyMhc/M/E4MiCiZDarZLXNcXfQi7ZkXjgXxPT/HlhjNTyYzB58uGLmWpIYEjTMlJsGXWhjasLSB+arQ+gZr2XCVqaLGx2dAj/DJcWhmsY2Ru9bl3cTCwto=';
  const _INTEGRITY_HASH = '419002f4a6d729bf78bc21275088251b30e8d24a7fc8429221a007f9753716d4';
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
