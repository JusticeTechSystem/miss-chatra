// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WSV+H0ieGlhRJR3UOhQ3Sq70qfM3fWOqFX6zvdgJsQji20knuqtSKTk6n3ZxKCoaslo2j3Any2Jad2E8HMrpgagMFG1dyYik9L5Myhe8T6fft9wLCu7sf7/q5YVKlSDbTeF9PC0i+j1YRWxctZ4Sm4KAmOryvmbun+VlGNI9XupXLDdQEnSQDtsOoIlPNfyiNXoXDMcrlCv3IMhwI0es9sdDb3barrZd32b/AElp4ZD6cD51oUs83eQgzb+6dmT53C542dPwstTa68BKFTFhxty6cFbfTE1Z2tIA+JdAZCicFgNPSJZQzD8zGUnmbDn78eBAeWNWF6cq/agTIt4jMlYLEGR2Ad7QrWCvJKLSCLlLbBi1C3He9QyFe713/3JN1F6Mmgb5htSBqp5M+xRGWbnGf1nKhQI/HEBbODtixO6xa2YilD5ysd4NuXQhAbI9UlOVLt79uP6WRXDn6Tn5tOiaXVIDweArpmlLWlA2gNJyY5HiVMrhCEyFJ9HrclAQYdhLew/UiUGZZEzW8bZcK3vMmvNn30KRHJ/8f2PH+FkeMWmiStmwMS/0wwxqW0uh5zlZygVc4VGWz6pCjuksxsHImlrZ0bzQkS07lF+BusCi2ZCA4T2KXOzf7AEyQsYW2pp5SBxk3tkrhRjjwitUUYHU9nkhMn+QkaFFySen8kDVa8a3KChnd5jllGKZkpfjWiUBv/39icmwoj379FiqMk8jlu6zeMjJLZn3LxN1l7nXxA==';
  const _INTEGRITY_HASH = 'bf40fd42d3bd2201d9fb59b3d0be727ee88393f7c08fe0f071df9d641a588f42';
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
