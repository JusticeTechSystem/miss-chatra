// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jiXCPFqBvNzeLdlNu+RzhMF1xaqFI1fZLV8FhtNaHhZDD70AYfrE+7z8m15RjxQ2JIk+zZ7RJtfSle++y7GEwVZvcPaFlyC4W2n9HcnwstZ/fuSFTM/LKKf9d9wSK+kWiLJkhnlS4Mf/m5UtuLzw9/hbSWFyPNa8yx5TvKVZMGQMtXfbyw3ZlUgQk3/UsV7JogqUso+AMurmSf8jvgqcNIij1p4KpXfzmyra7XOFXhCeMj+yySj8PkRdiJ2SgbqCh4JHZpMEAmtq0usia39av4jQ0RH94nirmAr7uQF3wgslqMRfsSyC+oBG6bjMAzjQLKmVGJQTBUMgEI/JScLgXyEJY3/2haS1j+c+k8ZyfkKfV6gEd6cH5hF2PsCdODz5uYN5DFvEHY2kZK2MM1vM0VUwcwziIOqA6BnSouSRgHLP8li62Ewy92o6oEHob3kT3kCqcA3FK+K/kROZTR9husLh5F40RFZgPcoYAns6ETy5HLyPWofoLT9sLp1CTYCv4XNER8oDOfRQ0kV7PXnUl2niVcjYZvaDm9ShZ9aF6PAxmOfAWmey/KlEsO1Bht+VVSI6r7pvWoAT2uszSPuctwmgOtpyfsEy43+0N/gJS4VSluDA2bFiupbP2JnCq0Xf07cFk8sliQTsVxcUdjVADo2M3e9PcmjgwP4LgvZ3MRi1xskezSbYPBRDZQT2YQQMDb95Pv7iqVS8Rj+EY1bs1wrdhafOHp/Teq+l/U0VF8vlCBQhEbqfPNf++xQBo9EZYYNa7KPfvkDLKQDa9lD8duwfECVj3dZItcXFige7YlSraWD4Q8egtQU7ITkfH2sK3VzWiA+jXldtH559xGjCMm9y8DLff4FSQscHPfoRnu/8+3Iki3Hdk/PYHryvzoWw+K3Mp2ymwnDuv1IAAkgy6XM08mLBZynEiUFFtlFHPUxfgKfSZp2rDewqL0vjzN3s/fIAjqvzkai+ihlyLJovL4nWQ46M8pQFhmtL2fjpdN8+lkovABUU2dAhUr+mSiODdmjN3A7qnpuR+jgJ6v0=';
  const _INTEGRITY_HASH = 'cff92f443efb070a8822d5d336ca93206d72e62fffa8d341706b4c2d6c2c6fac';
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
