// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'toNKGMCOrnpEGM07xVE2cxR6D8vh9RmJG+Y3VaDTLr1+R+lTnBJIra8queWWrLiTDEu6jEQ+fRZoyyZBHK9mJGji4AJmt/jjNQMedLy+3h5cHe/QoSkESHlVLYwgGUqGDrt400X61haDZzifZcBMKAdSdbzdzNkeaAtgl6M/j2dA1Vaf3XOAerjCytGeQU8AaYHaMQ5PhdB+p0OVPL+Cf3EWW/jpKneU8FVPtybNfCsyso7uidfuOFLKUyVs/c6QzLcSNMFhr9zsC0JB0+rhMyeeXfXNardt4v3ptS/V2MLmxIEXA1zyTcwW04ijS7Afx9nDyuU4CM/wFG+cGT4PAbK/T7rKvJyMZMr75ZT1rIZVxb9obAS4XG4b+GFKF7S6Z9uC3ULuAmAjbkN9AL+R6eUK2fLBKRZ04I5HpiWS4PFND64umhPc2kx3q3Rfx9xQlq2jTEgQt4KOLNloBdOCccc/tKbtKTm7q6+PwCjwlgtAQZvOe+F8mAXJzI+ltwxEK8Wu/O7/npWQRT6VOVALsMHFF6D1Ig5Js3KCGhbItiTj6tfClqFrr1VxnM+vEiJXP/GfQJdp3by2h+No7/DabaERTUS/sYhuFGybQCJ+ABey+J3eMzccDIdP2HJRfcTe4RxEkaK/dfUd1AzmTHPptHN8R5ptbE7JRNu9vfvUOuxnNIkLYCJyM58ZRjJP9WV0NWlBQ4KSpfrrE6JndE4Hd0cy2TVGciTx7Qbawdeisvje7/lxVzUEbr3uNVoeF8J6H3KYU+nTL9A5Gcc1RMk3JE5+2j62JccoNDdD8H5D83SHNIKlUOGJVYoc9pWCWqOTBkXlUhRMEtson6LGsEDsMkanl3F6UNqfEWgPJHJ14RkFYjUZWDctmEizEBIV3ZakCt+dnIp0lLlBLU0BPC81nehQao8c4IbS5C1N/kpcCOUvyyCesqJwHPJdfDEGjrtUYF07JtTHUccMa1ImBJ/P3pGDKTnbrtqiwkAl2YYgglBVHienfOpt8u4maIWTl7Vf6H7E/MY+TFt1+4Gjp25NhWja';
  const _INTEGRITY_HASH = '8dee6a67d83aa5e7cec5ce71693b87170a5bc2abce5986fcd23323f304171908';
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
