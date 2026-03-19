// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PKnW+dbKF5l3ymvbNNwEItx7l5BoCax+HaOjrIhvePutgYCvLi7CHFAYo9i2QAHVlX/lyuqvP0Hj/Is5PAuXmi0z/DvnhEPdmmEr6+kl1szLlzwRpUcw7KXkpBcqfn/tlIoUZO0EI4VFaUSlgXxWOkh6x90UqR8kH73Nz8su+bzKgWrXqgaUHjNo2FDt+ol5zfXCwyn+M0y381Tbk1/K7hbgJ+4n0xBbzkGSqAF31J1+Ql33NTzKCw7X0Sm2VlAc1xrPbOHkaL4hc0/GOuo0QxoQNyiko+5QZD4/IAqVuKhxBUJ6vvtPNY0nl4VzcIO1L0kKm9b/EhkONGBOmsOwpitDI7gb5I95crmKCUfimGLlOcGhsKypKKLTaZD6YAQLoZgZCgCvCdbJswjf98/SlxhFauedj0lVJccj5onMm1+pytoVxPTHDOlFI1MQwRBh9UoCJgY3eW7a+N4lrSE/c4UYrqMrUvYSO3oyXWdJXhiXgzznX6K/WVjvFnMI0PXken2/gTiEsPjQFaefLDzCzOklQ8pN7NrUBbgWja2+SkpPl51oSwqGVf9zSVxAthuKnITyiYCO6QZ+3Iji7O7VcyJEX0QI7G4xlMauyGzZV/8CDMY+22QIxDKzaADhZ1B9Po40IDfR8efTfx2Ym0CgHLDuJaOWUNoLmEAL6HKuW5DyChFdLJvWz5k5C8368fufv/hgQBWXO5CCnci07pC/DUBEBTcGN7QbGgl7AbMGmhiXwkk1pksk7oaXOlMTEWi6jZjPNcPc4Ncc5mU4AU52Dk+wDkkJVuk1mLAacfeCSHU0zzSGBAHtt3GzIjeSQN/53JLbGQrwEwlPMK0tDSgBlFMpf2AYp71Mgqa1EJTSTrAFmLRN5KTw7tOkQKD4+rX8s0/Sc2jK54SK6t60vLars0YBgMoXA6yYtod6C0WtdRl1L8POQoTkb98ZSRAqDS3mK24pFbDOj/mR413lIiFVuwR7pkFV81X8YvEcFfIBCiiy5t/5z8lqOnH3q6alxZE2tEn/orZJJNU8yNTHyES00FsJTeafjJxwbE+4owKFtTGNf0opULq/cmbG6Wd+nEW0XZTW1j3zO8RsiS2SHAwxFWDfqfZPxvbbsW0mNp9TtLToEwHfBJRIwuiTksQHrdYYGQ//AuhCGmtYWyIIMrB4EKjA9vY/1bNgEmoKXRlY2sFAxOpJMfiQ/R6vZ76R6JUgneoOWkfzcOz17/Ao4N+Ci9CvmcUR4MyIYjW/ZTYIcrm/g3r8JlfjPqS/5baFgtD6ORo2/Va67AReNkbtNaHaiHcNXEaBIj03C1DTI1RY2o0FnZxDDs764e/VoXNlNRP/ePSR6NLEtNFyj0/Grf/tGVjJw3jPSik2KXbUHOx68xOZdk2zz779ivutHKnrFXEo218=';
  const _INTEGRITY_HASH = '2d4a4b87a69489808c27f1ab5ffb96fae96f5ed3a2439ff176ea075ed4aaa0a5';
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
