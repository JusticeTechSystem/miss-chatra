// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lvRogpd66yJF0DDNJBAhwcZDkBdc45lbH6S0yTptec4y+P/dcL5bpTRILq8CHcNA8fYNxoTxFBx5w407xuCHVd4zSpiIF4kS5sZJJtvgxyVlRFtcoMTdmUnzXL8E3u745Qo7vQyLxDum4zG0kTDlkdPi20h3w8mDGRq1MCZSDXnzr9kEIqdWO9NVjwTfwff+H+U26LzY+IysB+2HT/C/96IDdxa0iqC0ICu/aTWuRycTn7RUWc6QSzd8gvJKNMr/wZiGgf21DbUzkND/HAIECwG9vY95Gos08sCvh5L77yq2smy6hI9Tr+KhQi9VyGF+2hCtK0tHahtg6BSd4ebcNxvph1FAyoMxhLrIIhSaBqCEd6TsQARiUkYVW0swBErr47TXwCGKjH3YIwvYp3OqLy8+M9+RMBatsw/4tCnU0d7f3hvxgEc7mAvYUHAh/x0fftNGAkMpQW48WfrrM2+IJRAkjOnFExowNhMOOeZqDj1xnLS77eEI78SQ7qlaZRQhiBVgLPgNvtnVsEhctF0kD/FyeP6bny1d5FoBmUbnsRIuPg/LSeLp5eCl0ZKKXArxRtCjVXY4cyj5uKBL6odfJkit0aS42p2fa9XT0918W9EwG9Jv5s252qfwRl5AarQOL193e16F0WIdP1n8BIy5vdvjq3BV/8dFKzMgz79I7h4tg1oQ/o3816bA/guH6Fbr/dzBoiT2kvfSSCE+oZOuYU8q+zeL2mBauEkUBO5d5WCdkbN54NF4AWI4';
  const _INTEGRITY_HASH = '052d0a85a7a32437fc6e4f6bc66d640141bc5a6ec528559f80cad2aa2767a531';
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
