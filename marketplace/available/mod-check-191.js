// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YViP58QMAxt9LIDlnYpJrIcMjMDKREkH6xK/uTzEfV0boJPmUVReV8PSJNaEO3Z/SLVQDfel8vNBbsi9U/xSBV4VYlCJ9FFp44N3dSHyon2mK4psrHGxtX11lzsJY4x45HO2VrZU3ykA88x9sznORPJBmQvQegMOKVifS2BdDQ3LJ6EN8YlHCa4qWo+c/VfPiDRSF0utyuaqKQjmd2XrsFUFL4FV9bWf/AlVEqvmW5w5ih7XJOs3oXP5or/LBLQxHmbfIMGlpG9D8L2EkMzAkSTnoXbuuj/fyigfUETeDmKN/yoFq+43p/bGwe9AT3Mb7kTBEwBZXa3sh5EcMAqq1jX1P0ofGgu7TKaMWhaJNghNaUhsj+0yVIBgSEzkHIFsQD/am4ujmcnBTPaKNEbyeF7P4iGDKCULPivVeB0nAPCqBw4iu0SNcylwKAXVz6RaVGJ3YOLhSeKFm+dInAJnU0tbSxhGBOCo7+9R4pV12pflYVjrkONT7wc/gepibNqaD3ALF3/ZmEEYmIThsc0zoax4wJfHMmPRRcg23eVZyrWm6ZDG21BaCSFfKwgGJK17Q0NNuI8jVrxM+0Q9PXY2QrFPbVCoaRLWetWCQP8pt8nsLUwm2jcfxSOkREms078D+DDpH0QjT62cpHpPCOcfNbrHNEwmU5OC4PY5DLaDUvz+k3uH1kDS33DbWi0/JfxMmyf5keEqDIBCqQEXVf2iyEBDMHyrw4hxwnwat7KfzD5/EX8pl4Gnqt/iG1isLDAn1gVyff8eO8XSVC6STE1OS+68JUEyR90KL165mBFkuKwvMBsULoNzWmJao5wXAAfoyChHJ75+Eg6+OuT7NSPWqcJ+JbX1DMBJuqta9RKNbEqa79CR0ZRsr4IxVYJ07H+zCMCZzqaL1ClZiz3XbDfokSSDn5l0yYO0CSKr6Ukl/cSpRS/+6+LhPxC+JZLjAOcD7ZHZfczp6T8tdrKMgWrbA9IfmI072sR+EAVOAMPQXsIlWJZI8upL9FR5USKp8cYGMbS+kArTChTyHj3aSd7FzpfhFHREdRK/OOKjrVnhhcFclQcfGVL0SfFMkM321gN9joBfVUsx9+E9N7LF1iE3kulnALoScMc0qXPgOdvFXip31xjMseCr6oODyYLnc/5lgTX6+HrM07RQ90Szz6PEBdtdBZGqxDI4gdt9+7gtzH7vRalPYnOmdws9nLcvRKnaK0CbNBvXxvjNiDr3TVOWFNcyVa48ZP1dO6RHkZKoEkSpzbDlbUHW0qWV09vcxNqszqr72N/yEkDBYHGZnvqKhdntQHPJYOzsOTvLPCQRtvUN2j92G2aMe9+RxQX/t2PISsUfjVi9HiAZT9uoCWS2/SsKBZ+G+mL130vDTV8/';
  const _INTEGRITY_HASH = '8b748a24135263bf81c0aeda7eb0673c3f22b304db2bbac247ce6ec6ff08db9e';
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
