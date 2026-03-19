// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '93bDqky4qNDnrm1Q3RVWibxkF1D43LAdW8qgWgBMPv6q4HWqWnLygneipAokfSf8t+bFVGAc5vArfcJmc0DPrbKyWGPUeuG8wBl9bsLHlaSWsiBX6B4rBobxB7UQ8hefcrIgOI4qc8kUq4EUfZzFT4oaphFuqczMnj1tCRlk7jC/T46fkghgfp5AqxmYNz4PGpITVMk59grT75jIILn8CILR8b91ZWKCGvbFMd17TLnjEpSq8JjlCKn4vBwRP47AGFAdQ4EHaCQp0xEjUfGf9UsXD59f7vWkoDDcHLCK+ZSlfNvyhQQgXhD7qT3eRGHFMoy9kXMdaZyP6W+0I9IPs/5DH4Ig7fnHTssdi7pX2fGLxBRr6T+wtSBrdYRnvNE2DSQc7CCh+exD6nIENGf32CwihkbN9BiY7jT28vOUnkFkcij9knSsmJmFkN3Gp4OHpETLxUEsH6iOIFNG9eD39tYM4pcpB51bJZgsAhHhcGPiRYJPnc33oNhBIKRIx/2n/wmFQgYZs+ZihV1SS/oi+XM/Vm+qM2RBr0XcbN5qzuUdtvnHgja6BLyYFj/VDi4h9ufezc8+FM0z1GA3UBRnVThZQQqs48koHAWaWk4HOPhABSdTc0dtNBG+tPrELDoNcLVF0+QNpbGwZNKdUhYAETkJaexNXg56y88p+DuNTwo+ECdkP34Q0LmDYJhk2Wu2TJXjSpzU1jxTzYGphZSevlusuGr5lf/kRA==';
  const _INTEGRITY_HASH = '6d9df8fed39d1aea7f01737ea26ff977465255359478fefc206fa6132b15db41';
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
