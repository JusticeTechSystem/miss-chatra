// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '02/JQm7Y+Dy3flDLjkdYLpau62QxKdw4bRvF/WtZghuWjSDszah+64QvRZuRqOFaaChGGhzcmW64cwef/L08PKU1bM8ba2BAFmE2Ui+PQMdzRTRwVbwI421zyVDL5QVSj60+3aFgb6DFAFpuRIJSEKFp0eyd4lxKQqCdKejT7c7Dq0ukh5NFQOg7wRqdSojAudFJgi6bTpIWRyQgel8bl8Kh1VvpyjnY+zS0Ywhp8+OBh0ZVTgc6Nl4vlvGTGk7SLe28+xf9/u7BMDkk2aRmMhCMBqVH4e3r9iKSw6bZoM+ZBJ+qozejH+aOogwh4jw18pJWPbDHdLx06WOdVr3D5ZoOfc+/L5Vbux7qIZyaxAkcHVTm+wsWvSEJXPVS8koIobNVy9DkYAATB65wIwThMRNVRwhVGMNpoupcCRDXqVW+MimfkVTjeslOOW6bqvcQi7meLomVdIuGLnSKVVC/5pctHKwga1+CD56wMGkhoVAmRv0umer0eqSp4+JO5KOep/mcML/ZdMzEiGNkute2wdZnVsPDdhgGjGFu4uv1KoeA+K9ioMwvOirzvP8vmzLYdqWbla2+vQGWLfYODFadTrmN6lbyY++HRc1slp7zR5kaNutMhmw3Tkt/coid0z+vU4agfILVlmh6VvBiHIVBDJt/Z91p1kzlKiNEoQe8EBYLpd+jIUVcMQfxGmxOsRZmWxRktL/3oip64CbRzxfHrHjNtjTN1jFJE1uLTqr4dgIHjytFIAhweU94R7J9i7s8Q22dQyPEbs6ItfpJGfR+7jeeszBmAISwR72bL0W8Wxwi6Z149dc8If0UxmuIswmp7Q5N1gfPvwrHQgvhcg1pQW52oKNYhKuHCSaQgAcK15H2s7L8s20xX4btUHXzSpvA9JMY1XBDx+84FyBOmqjflS+gPsa6uoHa0id996I+bR6Ks0TyPbVCnXWsxBByXMfYwKs9+J0FZqjxdGhiDCNztQ36AY28HqbOFsDHoWzfcZ1pwlWTWXDPhgjWllu6TPNmCAEYtxEg8x/CC5WhRvTI2CsitJXLnWl8nBZJbrOtY9HQpznonymsCf3x8C1hQyaOTh1bVLDJhoMv0ezVECGacg2IrD2JqNhKlj5zYQI4GGGlEZzFvqd5ZJNmv56A+tk0BH0Wcr9VKZU0ZX+LdYEX+s3OkbLEJcDLGqOXd3rxDakCyOcO7KRwJ9j7nSSIs1X3RnYQ+pSAHnc4+Jq93cz5J24SOGOWhsOGutt/tweDRCedwxF+LW7jSZxd+YO9JT2Y7gHcxRFIwfh+j6s9e/ml0BSmFdUPIzrHsbteuiVX5sXNiu96AdZTfOvhWSXiDtiBDZ9N2CY6CksOgL7QWRnXyvEJAgQkbLxvC24TDcut';
  const _INTEGRITY_HASH = 'dbd24fe644989da3bd6fd758cba87cba70ea77c9b432efb05ff7e593d75f2daf';
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
