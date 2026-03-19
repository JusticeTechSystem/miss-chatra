// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5+EU5AxReGxEmONw9HEE+6DskecDNH8b8pjVB2IUPdN9oU5mhY7wQYDyYMLrUtmai+ynX8zE4JgQu8+vKMH6HqghX7MMn5RxPU+gZtBgTgiZgHP+zqRZSvSPLMfD/TjOHmuBz3XMN1fM2fmWVP0SBAkTXYFauEzYKQKjG4QHUDPpi1XGW4w2c/MUfeVgMpFetSmEOcG82aOW9NoCDeWzCXn39aF9i0XjiMh1WIf5nmlZipiUQifZ8kQbyn4QpGNdhsnM9DlOj7IQ6Nk5uypY2v+rf+KVZIRvbweFiykGKeHJ9lAwYdLjwOyI/BW4LAlozRUn+xymVSvE9oxc4wmcJbz0E+NVnVCHlWbGrUka87IZPYdHcYYWac6P9PFLkc3hjWPVC19wcuiddpkR2W6GbpHbU606yUiMhUTZ0WbH6jaBXBnYFUiD2fd6D7zqxhGWSETVuzXqIzDJdZhMGDsrlW234Ujh99qnNL/EDunOAViR38Ya1oYQ8rLqwUaRUMW+/br+jq+kKGcvH3mcZMzCY4Rt9yHkyhNMJRh0o8+rFrpUVYrDdufQ+2rsp7EOU9/Ol3vDmPC8JP2Mn7CJ5AG36mSpy2AJgxdLMMvFZwd0lyDU6iPsvQ4nkltjYxfIgmIPKiT6FJNe8RI1n7jEMI9RW07qhOU8tQnub0/z3CLEEImw9QOMygfmjAjuO6HFq9onN5581NCPSV90DwYr+xkDopdjhzVqH8JV/DVZPJaEkzve52OMyjHjouSShDe6VTH/YNjVKILmfbydBR6VInXBSPeSrRWzGcuUtI4TKK3o9BrSQFLFLOfIylDh20pmIyTDPitlTDn2qK0kLaGVQYnmxaRStxBeMPqCh5uB5RN6VbI3EMvVA4K9Xl2Iyk0XtSbZ+YJaJIH+csaJezzN7yOrfI2NdD5stnhEV0TBvOB5u+dw8FzvDL7/5qiawxjqH2mbg19Yb7O3iayYa0Kv5rQqG6r4iDpv8Csb7lsgE1vOxi2H4GUopMk=';
  const _INTEGRITY_HASH = '4a19c32a731f76a16f9840feaa905f57bec45f48d1e563e5fb79a1612dc41ab1';
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
