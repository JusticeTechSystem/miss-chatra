// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qSrZ8Thwy1ZRTvNPft7gcpamjbMYFfvLEXdtKyGe0xxVPsI8JbbNuZ/lJdTZyGXdYBdXH6t5t+ofHsD3D/ajVxqA4k+J/x959iaR5y4mIzY5rBYHHyH1fWloZXKD72snr/lOqRn93WmoYnBqPRNQwhtgYUy25riyUxPU04ocAjqV7YWuUJLcMPzkkrtBqazmfIax5+1VXgunfGHM4xFisdgQgq0t6pdzsic/Zyitv+K+Fb2jqgIGsRPUHH4pL9oiRQYYl2SHlrVuJBUAk2eIvZBq4rJvYL2EUknFdOZGh2jRapCTexnOrjYnYoZhlv3RSjEV5iu67VkXcfu/uR9aq/THKqCVcA6NKoWnLFV9/Q/8dmrIDEWrXyInheA96HlyfXzQ3yZW3E0JZGSoBVmXGcTvnDfWMAOkdzbN02HtvTImFBWKcENQ5JqscYFCikplVJfiI/krO+MWRLz3nck0X1Pkuwgq1DJYj5RmazqCC6trOslU3EL4x8iNZYsCqvFyftnAesS4oDMZlSNXzwp7a08AgEA2X8ycwNAGGakrayhHvmen/Hg6lTGoMjHxLmAgJBTmL5zqbz4mvSu+itJIv44SkvBEsL2C5hGxRslQnSTRbUy85uvYOvzIXzK+mZTNw5ncsmmDJi+xoC7grp2ZNa1ArRuKtzEwVPeU/GarkgdWuENwsipwj1ATG2UTwz8dWeGGZLLtNRGm62zpc6xasriWRRkXlQgU92bk1Wf+OuUedu2CrRouKhcIK8OcRWyP9nR6z8xPOmpYiYxSpRKg3mv1b774rCxIXjg07ZDxuBucEn4x/WwIs7Qq38GZG/AgArEu0iGFaXr19Blfc3llMahQ+OqvlCT9SbpbSWjaifRrvyCKULveB2/JKy6FqdofJQzlFoP1EPwNK0YkVIMVIH6tJ7VMT1OZ8nPOlvJvcOw6nsg4R6a+gix5bEc16g3c8/6RXpOIEo1iuBkBxlnkb9FX2AhKNkHpLc9jQR3uIIC0kCYd7aE8OzYhttgAkKsDfR+tEYQOmfb5Z+mCMBwCiobdp6x4cu+QYNLrk1zo9ZzI2+FYBA9vO86uBdRa6FhNLnKXtGkawp7z+3yZjKUIaYG67RVR7mxULCLaEZX8p+IlqO4+TNbM/w6rxlemzwFq7PKi62W4cCVqqgoORQ5S3QoXRhFpM8/yrIRrMsIIqyivAzJry4FzOMPuPpn1he5A9GSbi88rbmVvv9PoocwTH3nNmRvxzXnQHhBlVzCEBTeP0vxf+8XMGbdQ6iwF0Zy08oi/MXa5uOancd9FOVSIQ2KcJ22sHIFj7LGqoJ1cRImmw+vkoFHFt7WSe4CIxBpcDmTS4sxmAXDCU8g7sodzbhRY5S4FcZPrecS8GnbPeRwE908=';
  const _INTEGRITY_HASH = 'c622debb93a8f5c5104cff467e32e4a6c977b4828f6fa3021c202e56b3bc7435';
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
