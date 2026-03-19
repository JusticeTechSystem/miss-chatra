// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1S15Vwvi5MVCIYJRDQiTyMcgFGeWdUW97V90bYCaCm1uFbDxQfQDHj90Q0LCcq1TqSrufV1S9ITrB/AYiMTqeexeV5Dtl4DQ6v+E17IkNqUfv6w9jPRDQmUtbhqUXS/3PpWv5XPRR4kCyzbmjRbsV/qEBqw+1NXd+aFvdeBUSNBgkLo7yJwG8PO1pqtAc3ioeREJwwRlVom+yQtPgvNK9JgalF12LvDLyCh7aEEER6hlVsPyoIW0+MJccaoIGF+zoEcOQB1zKIaeI4cO5lcW8DIyPRXUFe23z6AH7i0bTTmjDLdbUQnwzHMk59zWjmcJrBVTDlRTG0iNcHwICG+4V3sfFqedjeaExxFlG2L1gykuVAtp8k7BLjf9uRprpWueoXGALJ9D3veRH1E5aNbG8joTueyWctQItONlt83PaEfDO6H+2kUrJ+e2kMvhLuneGqccceoR7MPScb/e2YEMbz+hpJwZubEpMNvYiQoK3m12be8cLcI1kOycc0mOnKhJR171+6iOHCsDYo+8Z0vVwtQ/nMBlT9X76iqkCn+PHvL4RdncYk5gF+SGr9Xj0rxq9sYGhQyP9FCkQGjUlJDKzc5om1oMS1WlS9Q/UvRgXXDSwYhl2FOMOJSriqE27g3CGRseRPt/c1BAYYXqP/yDlXU7eCUf0Ikl4hk/KOEWsksO+v5h46dOXazbdVhzIbsu0Dnab74esIa5dicNkkgTKum/m/AykNj/Hdm4EZm771Ti9pc3ZjpEyMSKNES4Dvr26EhgIinluBNYQPaHHqWw+5fwgu0OHhzVKvq/ImZ/XVQUhw2n61d1OjO6N82rwvPvbWHWj1KynnA4aSTfIPaOyqn4lTYV00euPEBfn1vBTUXZj2S7J0hi54D4oXXknzmU9t/Eyt2jJ2F2+d3GuB+OWfoPCmk3jlGdxZoPbvvwHuPv6mPKaZAa/mWMJ1w1lkHRKwBlkCOMEH7EVCUKOAfOB7ocbg2y75HsevpqbmbBehhY3HLpemrjx2A3i9PBZUczDE7FCCWSIkdJHB4qIKTuNzKWUO+0jF95TwOLmTIKSMTcATGf2RBI85lYVr0+VGerG6ZNIrFMYJxb8X7ZWguGmQS33Xkml9ytZCFk1p+62FvBUAjcBK3bOkVQQXZntDqESkJ5+PFnvsFCLbz7go8gP2EHITwwBNE160kJHof3UqtGSneY4XqR6w2SDPpP7CZYdsb3EjdOB3EBoULy0bE=';
  const _INTEGRITY_HASH = '8de1dfa5897a5177074626b9d804555314b8d4c3adda282079900e1bb24150f1';
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
