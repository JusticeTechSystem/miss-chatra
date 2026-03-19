// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8ZIRqbUxrtUctSQVsbbQvzcAJxow4BCNZmCqViOup6md7A0+D9NX15CGI2wkz+Gfe9pzkpmV2U8rXTxiJg3Ya5wdXy85i//q8zWfhitv4gkow4Nn0CKrCtYPT8YuEUKNGAJxOep/ZxDvANBfVRK4h1zYv7QRHOFqofNZ4PUbw5V6XbXhCVG2gi4u9myrCFtVgKomTDUtsDrOlchzNcrgDuJgahCSoK+Chh6SaR9HGDeJL5SARi4gXx21C4Ewv3ssCgmQUaqEyuJ8jIi2WbjNrfcZC0PFmzPOEB25FQ/YjoJz6YTGvQcLH3vXbW+/54vFHImVuBeOMe+MmO/IAmrUZ8azZ7ImUT2Rg8VP+eqej7sm00mnQuZJPQGoCw4+02OmAWm+qguyckbhMMjC7v5pOhQIinWaC5uvQtOwY5jl7hPBkNBfcL36/i4Q6oCCMqDAwJ/6k6GYQmE3scT5fJOrTAaD/atV4gUtKnhYtXGqwUd63dF6vFWHxvx4t//oPv72tzfMmUNtH6tgsOOtUNR0GuPl/XdvKdH4mg5Wo+AiVqX45F8HySM76/bH0sD5i4WtjSeIwQrtFgyqDxD/jVJgtaieH8QqosbaldWnhkNjc0EJmWv8bSJTsIEqUxgaYa/ixDk2WTz5B2DXun1AUNiG6Pe59JHGvu/eWCqCp7WWC2oapQU0259+wfqf8b/tXWQyYOEzFuYXrC7EnxquAdPeUx84TMmUbtwXlKJEooSM+Ni5kxNhJ4I=';
  const _INTEGRITY_HASH = 'cc6fe22acd7648d6e079a2fbb60cedcae5878d2e62301d44bf0a526604c7213e';
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
