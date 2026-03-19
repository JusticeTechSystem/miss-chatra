// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'P8T8KxXGt1EHp9BQEFwH2Bu7/PFna7v+WTQCQzcXXjXsQufPnA5U1JZUbIFBrc0HkFtUVFz3XOO0kTrgATW8FStDEETM7CGi57JFnGAL113Z8Q/A3Uof6+8hB3N4vIqY4nzditgnoeRKx3aDJxJPZa6mZWNMJgts/XDsN+OUenuyKQenm99sAEKM35NwpJbNWKgZRIjOrjHl1tFXr4Qp4cKgX2VXLcX8aoMMyuaU1Gd0AehczwCUVZ0cmmTyQ0WW0zNMs9cyCYGILDmLzHw+74EEaE1H5Uuy9VQwdllpjOiU+OQQRbSJRJhSJ9S+eAamrFDx51Xidc/+v/s0D92ChTQiBbF55qURJbiTkDlI4wMwSJLVNrA2tzKe/bYn3xVnVYNLM2oUy6pv/7muS9e+ZQ8gj1LhOR5b1rSsVMzhUsB7oJvga4cuv35On2oItDVFSwVg2yJVxVv3p3iC/ifaXKjnHnJv8LAZs5IMbaaQ/q6Zm1hJ6+If2TpdyC0jnnji6KjpkPSN1zY6Yk8kpNiSKgrSdHuOZXx4MoKO6EgzcTNuGB8jR8O6mLDfUVmLmQuQR3Z+5DH4hndqWDAGeehCTc4f+6epGk37IZA=';
  const _INTEGRITY_HASH = 'a047fefb606773f5deb13a2ba369cc47626c9ed35673b9532d1243869902e669';
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
