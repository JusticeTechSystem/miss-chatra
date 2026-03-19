// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1r+Z50FOCniPmIMbS09PmsDQs7swTspDjtdi/ga6yvyMadtpyj0SNfBf+7FyPpyK/6uFCosBhR0f8UhccfyKH+LJkslVcyOyglHye+nloBIrQzKgkd0oBKW7VggpNkmQYc8oX6+dnw4BmHO00SnyOci7uWu8U0ZhUofV5JZ3cNcAsaa5RimDNi8DVcUUdyAiFL6u6CxL35YjcWcuivoE/+G18mlc21ucOhHDndu0/mfKxepzezR6c5si4rubJpn5qlXL7uOgPRb98uSeUUyYtfADM4P7X6UxifilQx1cxGcNMR5gwXVHgvdGy9D3oY+kWL3MTHFMjOddFdWG2ZrWqvm1akV1+EeWrCx0dz725s60nonTtXlTtSYqdy22ai4mY0GVG/Rq65Q7xinmDiHkJegu/tK17OX6NZaF1wlp5Mrr+xSTEOneIfMX2HzUHP1uBOuSeUuedHr9gYkiM0VYiz8Hm9n2I9p7AY2VtjntGk7zXZe/ZhtmOY/U7fwgfZYeqSWeJDneO/8ZfnDEf9BGpnK5ScKiOkgFDFCBDOYk428hQajpEI6NRgyKjJ4w7Vnk1TR+VMnKZ37vRM2y2UZ8RlMbE8x2HnvKFws1RT9KnqPN2mrgz7Y2UIsHe66dsqvgw+IAUCikVjhAaOe6lVaLa4GqGADT8eS63NawRkG8gSvPv/EB6Bu5QOOvU9ff/LHjusBJtRqA5iMDdZ419vBpbWZSAWgWBbPb';
  const _INTEGRITY_HASH = '204a7458860e1b9dbfd01b78e2484c09ee84702016798a9915bc8161bdf1571e';
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
