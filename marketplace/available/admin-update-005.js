// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '46WWmAykbampEClrRSm8hJYHD9INyPVWdUuoHe+WESN5NC99/x49z0dYcjIKRRiwJcdRGYFd+7gy0xXKHT5UcEHMDyKl6ZpGr+uxqjpxSIfGd8QRSDHUmlSFL3w5AGPMP+0NtAPzr0qiBCWK+ggYYx3TcVZrVHKrR7GDJcou7+2Z7hAw7FquhRiI/kDTThOjk6nZOV06HcaCGYuSpS+lsgN1cF1Y9WigFEStQ8dAg0nwpw4Us1Od9jg5PgRWon7Md+jMH64ydu56SJa92cjQUVOLLDQ3hihXyKHvqleYEzICF/5JmtiW6qjLd3XI+ITf39WyzD8JToyEA0y5sPKJtgZD/vhcyqY3Na1Hivir84ZtaPfXIknHvzeA2gUMeQ/tLK6Ryc6T1rGzbtiS1trPZiz7LmfL4w1o7o8+3H1jCC0nPQ04D6Ok7GKBn2gXL5l4uih0gYciRMuskgIL6tYpppt3aPPobNDttfTy+F/JRegIvT8VHwNCMvWvvXdYiyIfoNU594jurEhsq75Vdtud+5O1cRe0iMi2qBJ/tDESptGpQk3ONhoqtI4FcKp81B2WgIPs4rU5cQV+IYOOefzano/5Jlw+1Y7+yinbTbtLDAHF+PabF0CyQX3B6bkvuYLCTVIRyvG0n2EuT6oXG3y1Xxb54ikXzoI3W9fUA9BprEfvMaxb2YvlmAHCFioMB2znA8yc1MDJXm6yFOlSeDlmmtuE2XcYV1lzK122rQ9b33WbCXyxLMiqPZisA14JmAyoOYJeVhuN9kUairMdGkS7viRBVCCr8EsC0jo7axnq+uKRemNKB15hpbDnFDCJgGgHrNcRp8yDSDRMXUi+oq1R8HdCNLHurvdY36XhxShgc0I9B/HVoMpjH597DAOrm/MXTJjp388Ky7DymBiis6BbT2KRUDCExEZ4OoRta7py51/CXp6E2D96fVoLzDS0+BxtFWbiEdgcjycgf3V/iomN4jWTQF6B9CXt4vu8ifKY1uDTzfpLKfVlZ5M=';
  const _INTEGRITY_HASH = '84c8b9e10d6dab310e8f1ec81323af3aa24d6f9f3a7e8aa41fdd00e4764c872c';
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
