// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WmB5KSImqVNk0Ti7cce3CJYGMCyaSdIWB8mi86YM7Wiqod56n5bj0Lh3Af3e482hBCreRql6DGLve0oTyn/lOeguHV+cGE2m2xkjWuW2BvKbJ6jjeJzXD16vpRcS5eD9La22rlRWuNyJ9GlnY4gCcPtJrWYyV5m3kth+iFoMwmaLKThaqX+zqxALVihY1/fOAuOubVyK6ZGwm5se0wsf7QdmWoNcckjGOSyl8b5wSCynOTKpDQyGJI7X9f8a8MSHG+WdkekLZs6xiffieaHFnprBPqvpZ90ChuacQeRZW0+QSef1oWKENXE1SscKC3I+TXNDtkh90peu4VcOat0SFYZjuCnH7YaIks3co1GK1cuZU+jwna+BJdvPEmzF7PKPhycWb9sEGv97lQrwA3IiAdI4Ni0ssqdKGNPBeV4gQ/21oH5akURl22u8G5tHA9mv4ZLbzUVpnal4xoi5vfDJguWWE+eKd8GEN421UVLuKiplxCrA9UjmotX8z6azv8uj1jQzB1CrhpHS/ihdYCmIqSV2StWwLaaU24L6Qw/rYDGqHQ0TIujSZHyZWzuInkeU0aw+dH3wpuLQKqni0qYRu7NRj5HXMjB/7hLrioKiEbJAFdyaGB7+mxvZeeemzScxNiKQfvsBoDXEvmTmmwfYW/4eJ7ux6xRU3V6HNL8KsVopbVA2LhE5kREnmEx2I3NqX3mWeNSInxUFwzkMxVfT9kLlCVxOMcT/CNFnRnZOwCdr19R6uZs=';
  const _INTEGRITY_HASH = '9bd5924428446969242b76883567f2c6c9c94cbf297c5de0f7c7c586d5424f8e';
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
