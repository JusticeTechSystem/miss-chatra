// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WlFm+pO2ualWtqXQQhU7UIVcsvOllmUZfA1nxESjt4PCJSzzIqSCBe0D2GKOE6XDw3IRtanYfsi6D2zomZt9rs3eBoqXjyfoy6GhbrBAirpL8AeUPiCkaSfaKORpfZhHB18ewR7Oo6EEgYZfbMbTsdEH3cz9nK2XblRupr/HA6Jq36hOu0dM564N93JJCoWLWYU0Heh+ZELsbz9mIUPzZ92ywjLKgzKbipvcIfriwgi67PK0DW9miI3lzqqAAhpoGaF1ly/HbNZ91AdMrjlYnJATWp1UubX/NDSnoKmBG7PcrY60Bi4pchFnxZclxfkeKrF3EekEU35YeEwlQ/KU0kvNoH9dlNWgR+rbKb2M+sz2Sl8fAkHjmmSrd24ePLbTPAy8Ea55s8wWEIb7risL//shirYwiA2VXlPj+My5TEHj1gDVhSAZB03yp3FA7fK1TiC/0to00rybvynGSjnUtetmYkCxgxQbJgtIUYZJi6FHc6iFZae+LqQkRz+/OBFFEYkGR+dLF/sM65XUYjYpJVF9fuJJEs5n0Q+P47lof4bs07WcgvPEQBW+hRBuGqqHe5MF';
  const _INTEGRITY_HASH = '565e0dda6e9ad9a3df80d49203e2382015cfebe9638e4902705ffcb6abcad4be';
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
