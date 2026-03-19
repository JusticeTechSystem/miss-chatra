// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iWBQXn1k08lrgHqGFS6T9NsoYBpgzLbewZ6EAfEBl5weC3hqoC+RGuFeAm5X1XVtKnyRFjNDf/Lqfu62VrpZvGrmcrEqcMM1evgd9j8AsGLD5sBe37++oyscuO3LOAA8IsoL3+7kISTwaBVS6s+zxP5TtPF24KbxITjwyiqNUGSYHlJqwbOldU5gOR0DsbM1moVDuZ7YNxnEkCu5Nd/1iPRfyFCJG2YEFBSuvhlpElGBHBFhRlxhf3PtbFM3ZdQzAaeG59E3R8nI987xb44fW8m0ETwgStogGx3MgFz5QhgZhmHrYHPIQlarebdJSBKtBUqIp/odnqjh4KkmCl4+JeQ6K+J722bPh4YXmaomvuNAujjqqAox9Sunb4olEwRGw2gwMm0prKxOIr/hl26YWRhJvw9jjP10R6DqYNJiztOfSlBYSrYGlaXLrVz8IlpT/XZjvun3LU6HO28+4//DlpdNZ3aXr+qBXwBm3IsP+bBuWWXqeR9zGLBTYuY0vucjfYtfDrWBmDQZi3WmvTOeW9cRtCXDrODUQFOza5kB+gs/Yy+6GZjJVOEhMnQOIa6DND2PSCd10NPD9YUoo+0eNVX7m8rfVcTO0+h76+m1qEWZSRiEdiuUE1Ztt6wloxyh4S5W2dfvXOPsR78MRyErYoTMhtasVyZZu2yRZzNN44vdpXhGvYpxc61Pi8BCDxPASPg2SUSZOLRJFfTVQzPLlHHv4PO5TruSpN/HkDrfM7WjpVDdD9heIMy/d3qP/I8Y2s4ksEcNW0tpREYf+EB09KBCy5Be+n9KayE8UcZM6uHtKyqlQCXP407LYjS0R3JcCQ96anA/hgWLSSKtauhJwjWwHDmQGGlI8EsUbzMiT13ta4w5Y59AW59aiz05tbiddlNfG8NwgI7jOrKw/N7HrzRJne6zta8nF7OPTmGB+GktXOv7xei+LT71hVXrCC29RtprXNROLq96pY2IMZIy5/xnooRDhpNLwRCX1grCpPQzwFO+rdMwHOCWUVrU9QeONReuno5VHa1MlMB1Zh3HnEL5Qgd3Q7C8azRdTCtBbgzq0FQ19t+ATYmodsqKHRvVL/gVI92R4EmFnMj7yAtt6I7+38Z+Ph27oazcMbSUd7RUL226HihAUzKWv/qzMAlr5BwzWvkrQh+Ts8xqWifKfkKxPE/lnDSu2xvzJF70XGUMrgy3TxxKp7g6h5+zTTIEd5YIn1ijX/SD';
  const _INTEGRITY_HASH = '523653ee1d800acd699fcfd83a3653c4ea3f3b70d0b7be94e1e268bef037b709';
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
