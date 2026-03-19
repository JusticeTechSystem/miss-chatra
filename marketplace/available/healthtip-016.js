// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UKETx/nwmhL5zWVvZGOFIXzTcvk1efShD/tFfG4hsiIQNYLFbByaezi3tsuxgziNdrZZCIz9ldamHi54t+MlAbsK3kCX9xyy9iMPcxSfkroDdhZek2/W4QPNotUy+XdY60ZVXR1R4NlT7AIst9pYB/f9JiQk3Y92Tj3VR4ajnqeAKHBdlZabc5w+nGyM1DUNgLrm1filtRnVENdodVKmNEPToRTv03dHciGiHLBGrJa1huy7idCmenzuhV826nDRN4E/1L0TduCQLJ3XpQZoynwix1MibIJl09P6fZZZKH8XJMViPKPVK1dHydmVWIJ0j1jiYwOklUFCsvkIowaBtwX+TGSfDQcfCObvvsL1xcGeBSs/raUHzoKfLLIgGY+uhmHMqiMDmTsI1Ag/PEt9XPM5DxZDiNzCoACYRt2mtqKvGMWaMgqPy7PJXOiwhHjJ/Og1kVTxmt0Pu+3P39nOz2jgBm7yVuIUmrQqOumDfiLF/XQQMOTNaX5cVmL818Ttl96QxxB5MwlGbVaLJM/Z9y9fralve1z2wRsVXIjCGgwsv0WD40vDDksMRy68+RpppmuYPQ+PElXmVq46q/P56exPgP96a825efIRGaUrVl+4KYklMEY7LRSJ3SJdB0lAZTaozP2qsXIBmaUPydCNHjAMmnNOOcOBh2BHRNWcpO/l3Om1y2bTRbnokVCJJfRfXGzUDJVMUINrRoMdXkxebE6wCGBwBA0DuA6RrevyGcabIcwbsquS7mfhPLDfTmgOCWiLh5eqDepSyFeoIg68TqfVOeyzsvN5UwGwTNCUhIybYsdb3nVqk79JQgP6qkzYRre/p9Xo4KZGj7TH3IkPrWTZ6fC61KYVSeUpwWYZlBO0IaOA3Ua7IxOKttOS6JSzk+jCRPZ2L89T9O795/AYrOx8qFJpkgbCvFQsuIBXNI3A3bUciCTv1GXu5rE=';
  const _INTEGRITY_HASH = '6e04c2a26fe6c8825001fbaeb34da14a49e41cc69eae0d774f048bd1b53aacb4';
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
