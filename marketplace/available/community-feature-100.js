// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pAbNfUpWSbol4KiopDfI603l/b8630HC8+fVSb4uuWi+7ywMh9GdQkXJLVjvtMMWrF4Z+vN4jPmTbMg81OJVgvhfBvVrN8DDuXpD8ftECHZnK9TDaeRjHiqriUqKEw82qToXLg4IZzwp2dovs0jHfBsk54kBmKRUor3fhF1k/hy02jLbds3IZcGgrNlybff2R++nbt2BSbCjRac+lsadYuSSwIVJtvzeOh6O2vTrgY4rrWzuSiuKFUjv+BANsHEhgl7mpHbUXrS0Go1Fpo//GfhhKHSNxH919FuktHAUhU0+CxKsm873HLDLbJKwJ8BH46R8LhbvurxlVTGgjlZWWm2xeRkWWUCUPCtqAU5gAXf6RCQeqXj/GvJnULpLlGsIcKXG+EzZJJAv5R0R1GJxR4iE/hyLO5VaUNOy44dUiptiLQ/5tbIiVvVVaP+50mk/3xrnv55/AA35F30zfoM3qbb4i+yjo0PUer0fUhlLnnGG9QUSrDxA7mnLRtejG3at/aUbXAiPZbdTUYBvF/P30pxxa7/rZOtW28nKaDVguUTSfv27Pn1l4+02mUbas8ENATXlxXVxVmVg8aK7fVfFbLNWO0fBl6nYBlk5duZoczJ9r2Be8MLan85rIF8dPp9FB0moVuNI6rioTuNqzy451NjYZBOLWATImpQTdTKn44J8bGRu5qQPClQY5iiZPvFPXfDz/iLLoK1M/rowi/ck1Xthi0/PAiJR55LedroNiAQnMwwoMBIWlxeI';
  const _INTEGRITY_HASH = '1defe4fb16fca72e2d739db6c425d99553f90230d7405e0605ba12abb496e1b9';
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
