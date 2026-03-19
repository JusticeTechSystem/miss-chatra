// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oGDsgnZWd3+lLyt8x3NbgahAHhp2Bb4iKkYi3Lo2gLgWiIOD267oo7LzyhPyodI/oyrf1/VUvhy7IOuTTFCvFmF3ca2hk+bGbXvvHxJiX9KuEgerKkYA/xz98SpTNy7RTx0M3Dl7FBy4AhPziKPRvDbFgG2owrbyGW/U0RTHA1sDvrU9K7P99daUtQaeqQkeONOMa2f96YSBPZlHXaXP92+VmtPxMpB51PVKT45CzjIfrRk+sCmPxtlZYslzISO+7YWn0Y3prErpLD02WuVp9T2ooVYLlauI39H6wkMHZq3nCbeKTb5MtVWB2Gk4ULj0UjkTiP/mvF3XpXTe3v7DJCSzWakmfiG0nAfiZ/hlzJ/qJvUwMP/AbCV7tnY8gfaXsa7UVqsNFuY96hCp+sCVW3rWETpbCC5n7/YWMFDdgFg1muDfGO9Y3xhE7/K2/SPfHFVbV6Vl0T3WWqgkBrd2t3gAE25tbTk+BEXHXO/RtuAS5Y52M6Ipln3BND4njZE1Q9o+cDy0q2lVKCJl4ILMPo3jrERPFYFJYvNwG6n2kGZisBnWxpgyKsOAh0fZPu9UeFIGScqs9s4EgEJ6vUGFUY9n1tTaRaS9d8UjEye1jNgEC5s9Jcd8SPF1kqPMuRKvX+CtKoL6KA29MTACtC+/HlJIz4lmBkO855Nb2m6wppen95WuFLcXKA1lljSqE4aLOUl7aZ9h35jRY0VZz5ntJUy7IN3u0TU+a95llt0sRVB5Z4c0u7wdnPEklJzlSdL0gBhlWhbFGRKIb+/icbiGUxTUzqO+ATPMUAQTj3u3FEiiU3br+S9kl+WauK5r27CXHDCnsLUwq7jjtza0JDHgUbQt6mGy/q4PAFIfRGcJpiZgruujtogB6ZwctcNT1bZ90tFJsC0MPVPwaZE0BNuGPF5tC0RRXSCLF4lmLA+8E+nv28Vgfu4Kd/v37GmDsKy11PTMZEo87+7BNWW8Pxe4VG380cwRJ9g1visAhWBR9H5p40QogBRVsVlclhy5rKUpE0E8iFyEWUfTJgm8ZEg=';
  const _INTEGRITY_HASH = 'd8f25421e47cb0da1390f6978a78d7a029bdf8228f3e6bd8e8410a687de3b25b';
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
