// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GEG6Vn+UC0H+NQrdakBlAOBGJURB7AJtbAaYb7JNV3FsioH85kCks4keLqbUWraeuWxj3LpuxyotAaOJxo4ZgBNi7yQxICkQl3rLJTtBN6Qetj3m8qwIkcAwXEO5HvtkLfj66p2t5102+I3D10ZtgYns8HldlfPXQa+8dLJuezH3JG1biE8hZAIL+B7zhOWURSOJ9rKFrAFosichMnFr/d8CKLHnR0XgZC0NWZxUQCPwA781IFVBgIqjJwVeolBUDu8yK+GDqSlmQ93tIz1eaqG+afRti3MS80qaOlFxDfFvBfpi9SGY8HpFmay3MR5bbxWOZr3/KyLx6nDVB2o3wyyHsyzrC2EYEio34jK2jc7eI1XSIOhp6FBmdY6/gVQ1jOHoLqfUQZ4VfouydmkzTta3y6roH2k5wZWmSCZcHLjtM+SiByb929hsPVCkneuVALL3dqWRbDOgW0hNdlqhc3119UEqMHUUqjIUyruymyncIgMT8x/C';
  const _INTEGRITY_HASH = '1eaf1dc3f5519351747b82abc101d98460ed4e9d539f84fb952af93254eac069';
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
