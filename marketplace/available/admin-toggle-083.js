// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eo18hCMbOGtgWwT/oM2moNzLOyQNMuOvgcAJJ+DdR7F5Y12g+jhzxRV0UKijOo34Ob/vWOEz2T9erXE1VvKXbDbyK//iRq0a68CtogXWMRbWChTD64v53HpxSnna3p7jhbRkbbVp9MeETLg8xk+kTe5q0EC/dJWT4IKCz6osxSaEzjrNs8aDBm7yMNmZNzHfP9LeQAEdWjWVNBepHdoqlQKcsHPOJQk083nOYKMmTWBi/o96IRdq2UGtWFbEAGX9Xzv/OfKFC4pBVK/Ar12P2VHdkr8h2GdgaxPkgY5kxep8oGEGhKtHcukGU3eZq6Jun8RlZ2oN+ANggh+9N0bRwnPZ8vBaYJ6drpvNk3ubS/3mSV8dw5AMmldjRr6Lf/4gZMenkxN37xliT1p73Cds4Ami0/6DLq1cUE4cP0Ohtt0K9mh2/Yai6vhdwXl7sm2j0P1ZBXS/qwrPF8iIHQ7ZkkwPQi6r9jTCiWid6/TZZ/HosJL48dz/Wy+btKzEYZ1ECs4qzbshswTlhusabQHDgLHxMhwUC5/48y5toAYoVoIK59CNyU3B7BXtOz6+X3Ja/cXDERk3M+iHV9uqpAoXRwNhRw4PiCvNeKLPwJn44FkLirjZy+8S+aCDi29Ld2P3ExEH49UV9eRr/iB5D9oP698yobmbDvTz/2RlmI7jNhBSCyVx+BMCTgtyf19hLyZuf4CZUxGyqLtb4Ruslzu8Z7dLhXOaUGs3tL79MfhZTWI0xFR1bQT85IJEvWx2hsKJAbJr1+HThA/ahJByGgJR4Y51D+H0AIJkne//4yFBtZfGJxq4MZnHrvTfVQ+crkjIBo/klIj7cJDGd3gzUwyDPYlr8NuI/hc60Ab4H6BP/Zl1+LNYoumd/uXh6xP/LIW3ALIqQz7HBzKreanGu86/2ixEzg35OYIEy8imcLZUljycWcHq6VgxiGmWhxnR6QaHbnrBlCdUJK1dLvm6fUyvJUIFM8Hn/KNrOtgz97eDePv9mjKDUL4KyAwCSZBD';
  const _INTEGRITY_HASH = 'f84a4227458a5f011b42e8aea6dac4ae91c5db90be215be6972606844f0e7f60';
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
