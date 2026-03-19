// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TN7Ixl/oa37U5VLmFvFy96hJGkSnMPV+2oUEbL5C3AJI4yzmW19K7H43zGurEUdekzHAcIZVgrnKJoORyxb6nxRqoeVR5Qfeg+eKaKe2wleZKb1/UDAQR0NKpz54DeC9xcc6CXSLaeRa4PmRkSGYiN1AAKWTPjorXXWLJas2PGfUXPN80InieiT1KjtOD5q32jYI8K9vQT7noiGrtYxVJCTwqNAxZHf+YZjN5tkFV8mEgmofJ0T5QYbxacu7HxjLyR9MKdjcEF4T+xeG34cY8GGuHhQeGvnu9JPYDCoTCb7NrJ97ZUmByQSTLvi28eHywwKf9AeopU1cESp5dJn47vV9Lsl+uuhg+ogy+iSeVkX2W6QESCrEoTjR9D65Jb8XAkVRRpLVlGueZ3/t9YwysjIODvbZ7T8t3m/FIcCGZOtBMx4Ki5nr0uWa6XLng7kXHtR/SRZzBHeXoRjKig/YwqdG+z9/oiMgYf+XGCQuLMwtcRuSdt0cg6zlCIyd1+HBNt/rlU/BfZFWe6pLTnBV+AaWePBNckVfGVilOiwRbcyQv0LrnqnK2xYpZRSfMzIyQhtBN4/hx546WBH/+LBlxrosCDeYgoV+gfPeaBZFsfwby/zWgq43rdlmARc4/6kwtisKshIRORZXH8o/oMv2TXHh9gjBO7KfvkYsCkD2spIrmllyyQcHNVGWgMrqS/Sofy6POmnwTMH6ApHUy6I95RLweuZzl3h+NVjFjLI=';
  const _INTEGRITY_HASH = 'cb3535703f104cc224670f1d3b3a71216c6c66f71154e14ae50f02f38f325b88';
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
