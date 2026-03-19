// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QVUnqaeXiptTyoVzciADTjRFW7nKOom/7CFYkoojfd5qWCMZNCOkxqGWI7x8auNfQghdTLMtQyftG0Edz3/nRSRHo3e7CWt1lFH616Qs26JQSrCyvzFK5ZixA/YN58vWLXdFXusdhcmY8/E7AOqO7IgKTmzFAll3qu2OzjbiXl7S4uz3xid1tCcMAlYl+b560jwx1BfJGMA6/vmOn1O4qZfOXHWOCwWwXmkYlxN12r28MFm89kPgdQeAcjj2qKS2r6Zfi4AW8wGrHeM3dBZSDAYQBj0/6u3r3nMEo04/F/SXOuMI9hrGrz2sHFDlo1dvauygEUo6KNia9FaXyiYZCYzgHhkRicp0IRDH7SGAALI9afr2NsmX2P3gZ65qrJbWPI+UKwPbSF1q+fEfYld/k53PJneSuihPARAGI65nb4OH+ssPd4FrU+cRgSV0YxMiuU2SwTi9BCDh1tf7wphY3iZGWmC3h46TmnKw/fNzq+nLLC/ZNf+u+Nt2jDzSVEWGykhfvvmhFVwWUsVGau//GTzzr74zGfbxA7z/u4eX1OL6yS0dAxHxaoRi1OGr4Wow+CyhcuXat2iUiQTB7uUOHZwM8xv1Lg3bKuZoxoH4M3Wo8ZjBexDm9ppiGH0bXeY0YCnE9/d+vzT5rQkYGZxZ2MfDYnVH60BppqerVQ/7tu7C8uIdWXb2AjPcPC9VirVmuRBHC4oGSrfy58TXmVbk2I+77eXkC1+xaA==';
  const _INTEGRITY_HASH = 'a4b5853329bfc2b47e11ad3fc46abfea2dd1a4b2d79928d0501cabcdc613f162';
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
