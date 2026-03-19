// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '28vl8Cf8HiN33Ky2KbakGk00d0UQHU69Iz8mFtHI+zsAkCAgbConMy17NiBnOo+8xMn+vNKT51P3Cy4u2FKIOqhC94bjRF6RC02x4iEA4zr/ocd+uIFN9lc/suCijuUVbYcrWxys89DHHnLw+mxjqbeWHG36EWdPRJb+oKp5E7jmVjnWbYv/i86JFbos6SAOKqu1xGO8y3xZIzHjnQGjLCZxBQPlR2HmwtTsaXNYqGti+Z3TRMDwTfKbT+xH5BJI9htH9nPyw5t5gkFvvJ1mWhGwXQiyI19Lr+QsxigjpWej7g/yF/4UlXqaB2pY3euNH34ctTCm8EId4p0uQuBvpfTiOQ0DGhs4Hix6DBNNDrtwoYYFyTuxGcg2xjNVtAEKuri6ejR10IeXpq5qu8e1ykTNiailB50Kq7t1qmvuo+VQ4HY5KFbf7rt4YJTT25JSF7XJnwwwRN3oYWaMLBnpbWe4ofXVvuG0JGXRynNXo0C0/JFxrHDpxH5WRv3cv/iklsDhIn+9MsDk8PD5yGp2R+S985KDFWhnhY/dJ2QyZjjZ0PpAV9UThGvAAUffyY/cD2xazedVZTi/E/VlvrTdySu+MFY1XyoWYTNy2C2yFiVbbwsb7PSyBFhpPLff0F0lCEe8oLoOT9wDcjMTdFZLv53aASE3Uo9mHaW02LNoFdQKe49tVpTFnm8VtCCDuJ3RnTAyEX3Ad/xojQvShz10QzETIBQltihZWGA9vk+zBZygX98zKPpqeT+rOtZz6zYJDN1DglSpf88oUnGdmYRdbhVOcQ0wKcxjap6fAsGkWOMQDwJqI0KL4vEHYdXhspVpfL2zx0K1pwUqnVoRfgsWk6XzwdcxJPG6Sx8sCHcwCaH6TbmS4zL/saBpo7kmhuFh6jF2o97UkGv2MwMMHy+5alvoQK3bvJ5YCmwuWvz82+q3wuTxaCobqll1s6iIMMsI2W2JhKB0JTJaREBW2Y6fVtB/ywINdeaxSVm+eeOyD0BICnC4wFIzNVepy2rMtOw2OkJHhru8A6s=';
  const _INTEGRITY_HASH = 'de709233b257a0c2567f0ea9bbb9a29bacae7ae012bf9e4695e77ba46bd845f4';
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
