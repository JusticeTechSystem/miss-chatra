// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5N/Q8nPOmJg+NlnpIDCCC+yd1J/MxP+Z3kj4q3kZgYCF2DmW1dlfsvcPqwdLFsc+eJeVjpSEgawZO9XsqCVfvLz/EPXo3/g3jG03ttRRattpfOt7WNk4JYL67UzzyTvLhOgCRZpGcQr7WnpKkzomSGTxL1gBXyObW0Zm6zwdzwKjDRBDl25KcCaIQjYDGShoRoKa6xdzDYVTW25Xw+waJhWm0QWsyfodr/T8qU3CAmlNjm2z3m4vxjD3Zq/l7h5MMDGucpYHyc6Y+9KVEB4G/HB6GZnHk6t9IT0yp79QCH9DH+S0075UmKbtSZ3RrAvBeej6u6xmZ4MmN4JX7dsVQ1LwmcXzbqa2F4Y/GtpLVNWQrGXWQ/Lm4/S6829EOf8saX3SN9cZYCSe4WrsomkBvrp60LtmQ5wDWF+NYmEJXFnWzZdkZu9FOIPUabX9d36NEyWOaf7vNeCG+kO51AzV/YnnVHBaRAmvXNBOUj8mEMM1Peb3FDJ1db75u/0rerDlvkL+r9YgnqoFwdbbsTIou77CL2SYMRvxE1O5ImEmx1SmYeuM+cwxaPtyeh/rHqRoPLPxlUTgsP+6UiwLlTSXgK1V8+wHB2b8nGtV49CP25bAk+LbMiK3bAPaa2soumIj/hlKH73xLIZQD2jURW3DELGajMN4I8QpoGIBIOliWkZma08JiMefzcBFzMYLe8Y0Hg60ZsK1agn8tkpVS8+Gnz2h/A5d0NprWAfDuBn47ZLeNA==';
  const _INTEGRITY_HASH = 'b9ea83eb50b6461effce8fc9e00573afa3f324b9be982be8b8532a7d4d530ef7';
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
