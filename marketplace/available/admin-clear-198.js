// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4Kt6Bk3Uw4bd/lsO5GJArdKGAsif9dHZmv+X5tiEf2K0QaqAcxOBZkwrcVxCSRtbSRbSYmsZ21Q0ckRdrzxaBiV0GykO3EFbtVwMKCDM/ZeGx7hVbf9/1MxToF6g283JPdlpoco8zHUT1FK9Ex4XtA6aknddrvbiOUjr/h4sXHgac6+3Xx+9X3C9Th2yCLuO+vW8nbS7T8pSk0IIK5B4Sp199yFltlFRy2bztZl9N321HDBY1UmOuVDSEFj+pNshg0mpoqEXcutZysrdo7Ez0OPbsFFgtv8WMOAhyjb+/b/3old6bTmGp83TPpbTHRQETaLSPx2sejjL5KXc/H3yXGXuk/74Vbo2OZXojWQvQUoYYnBQIxiAXY4C5QXJBIo2SQWnT0DaqFxc+xVr2xuWpJehN+8hzPejbkeMCzZ99TrDLJXDpfUyAaxzDcfsgxzOJrw62U+0W6uf64KimeVyrkhQmnXtaDRpA2NLP9vyhC6+oAOm3GKMBj8j2d76D1ecoXeyObxYaJXa/wA5Kby5mtfGRkm+wTEGvJLfuiiflEMyIXJStip9c1N+2W5WVVlKRBrrxW9UotJtzKuWzVPWZrnguONiDrR8kXaKjD79svzf49DS0TgJRYCyJHsTt/k0biwVOJpeXFC6bk7OPB3U43YP2iu0GJqms8y1CMwZG4RMfMoPLHYsczcryLk3jZENCGFsh7xZSDajChSmSSsRjnktKEwschXEDr9qX71kevlCCIFXfZZSsiZI8xPkdenp2qZqicgjPhdTozg2wE/JCe1MqELU05XZkZjJG2RFrz6qb2DwWfFC6Dhr7+EG7mlQRDscQgTEIruMf+BCI3tFoCrQLebVcw4Ksz8/mrDl18g6yvsBiF51wRsK7BvraC3GOQwnsWLENvTk50vjw5Ceuf+kmeQLW6avsNsu7P+u0M8DNEjjSd8lD16tAiC9eeJPcjx+hwAys/qlnizcUTByUK/7k8hkYSeBkPc9Xy0mPhmz83WD0PhszM9O';
  const _INTEGRITY_HASH = '792ed06063ffa8119bc83eee3ca00fabc355bb5cb7f430f757edc7ba1c84c9dc';
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
