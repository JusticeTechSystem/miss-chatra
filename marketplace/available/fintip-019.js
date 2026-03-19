// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DboQjGM9le5x15AwD1DVPI4R7kY74R03rhi+LJZhGWmFPv/4biU8qklthoJpaGpLf6U5E6MFfn7DXF56jIUgplqUA+VAjco6ojpDMyECZBe8fbZxhVMxO7WEA1FR65Rfnv8e2Tr6/xf9IaG6jaEtVablg8XZ+EnHxGdPOGTX0VL0NgtBONKKE0H2LTEeO87U1JyN6CQj6LgEvjRman40Gcfr+fqCD2s3HZem1gMxqigcDDdSPOlUHNTPju9vVZN6FkQn61Q7qnQJFOrmnSf4Ei6ngal2LD345UQQidgf/xW2Kq1i80lNvCOpwfVI9EBB0SnVsNwLqoMt5QCTIFWH2zR5p0d3V3F6otsgclzT9zNmIuiVolWJHVegAZZ7441IBd+YljzzCO5sDtsq30D757GEupo/iHXa1Fti46XOKvqKZqS/A2eZR07ijbCKX2hy6EATpSC3Crk7SF2rWyYRnlFhsF4Tb0RfgwPKmTK2Qzr/m6jK1O/ttFoseUqhrnv0FttcVV57Uea9HWrk7LaT8AsYTv+fWnAYiHNATmtKEm0H7OEmxYTIij4LGZZQy3V0GGBMUQp+sWT0fWSKGDBR6XWOMyaAlxMYeAz20+xOkXWfIlCVjGLY61O3bWrVl5i7QxIx+zEKdyf5CDL/JOhuQ8/gV8RpABbEnI2w6HZ3awfJ2LqMks7AbFCHlEoayA8hI1oR+O1u3savfPnb1eaEIYLPDEstaXt/+KQH+Jn2rhAIk+q6QdLgEvZP5YWspJF7YxMW9B75QfMUIn5xyZlq3LEcI/osX9SzADvjU/zIhw69BAtJuo4bFjZL0d+5VA4+QOoRxd6x0eVP+xVFQ+SDHoON2MuB9jbPzxGrFaNPkmgXXUAxJVTc+9uZ/xbNBb+IrWFCfQ9TRWM/HBU/ur4dPEn48QE1eE4x1Vpq5qBWthwKXiZT1wA2wKdUrtHR3cMzF8OBA/8J6guQ4GH83ek9buUXDNdgHBSprXOiAIy1lQ4SigT0ACY8Ui6YOeokAis8j0TJHo22VyEpqQA9T96Lx+ePwwg4hD/pZ7XtpcfRIzDusQ==';
  const _INTEGRITY_HASH = '26fd9b13b4fa1144f3f10df408326d9dee5c177618f0acac2ad38aadc511fc8a';
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
