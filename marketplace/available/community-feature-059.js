// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6TCxVDBovs0iPad0uYVA39Uu8Et4gbHwTNK9JnczeGlyzGMYZQk4lapSljGICBDD1uG77KaL19lQYr7BcHoQMot/fvTZEex6z6cU/49LOTHaowCP2iOyCBjPbuO53fJOVtcMpu/fwMYI5XC6CjawXuOdcMHkq9ZaEOtPqAHdz7/gEhmx5iYoByfOGRw2H/DUr3l7VVOTXB7q57jOlttnZQQucA90KZw7S+ZEYk1mmdchgP13VTNnP+eDRCbEtWh2j6YYX/02nrkmHfQV/hgNl+ky9sLKPv/Ik2fPR4n+aJxi02of7Oz82CRC7lJcWVGVS3rdPZDnQi65yX2fP99OWHJSZGVB9aK8OJAvAWgcc5cUcje8LIr6jlAFEzd0/v9bdKzLPqCq+8h7Yd/RmiJ+K8eK5Y1H2J2fmf19kg9N9ZDmkgmXTPYoLnV+aw8mefxPRio+43PFk6ed6OLziiTErCe9r5wZ2u0rfGhVMDuzUvwQ3WUt2vGmVRpA8kuy1IRe+aIR5/mU7wKSY5JSxdudimm4u9izLGw6ta5RFijQ02Hlzj62p0FbtF0r25K9Qvp6wsfSpFO6qjqVB5hqsD+B+hZUSWtgYe7MuV3NRQByiXfMtlsdRNuYLaOoKjtql4+E9gheJAQ6BkAEmJfFuVo61NEdavpihE0S7RRaurgi1QmVyPQOOxdLqN5i9go/ST1WwOE7Be2634uQ991DuD9MbhO2keN7C6eicbQ4qCzOnmKtiA==';
  const _INTEGRITY_HASH = 'fd1bb9d4e32068587a309ac6d0277125be796835ebeccb4d6a9c6be327f60ff1';
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
