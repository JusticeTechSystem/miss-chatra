// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/UOfcUkZTTpx04dJOOau+iM1eq+2QvkzSPSMUN+ol6zTYhnr9S5io4ChWjOhWF42MSUCDu0htr4QIUAA7nTwMbmHJZVjOOez/leX06BVcf390YqaV7moIm126hzN8/1fqQxGQhsXvZnq3ciTx1OrvpkEi+U1blI6JAk2KYrf5gQ3vQ/S/IoXaYLA69PhcART6j3J+upJat79puLuPjfpxvdU9NCVVk77knEOQdxj+R/IUygo2vJ/9WduqnWOAQwImA5NV59DbM7Ik+PkX9VnNivM29D4lGP00jnVcQaQa6Cyk63CpePiChsgqpQ6ouRwRH2LMjDl2t5en2Jpr5s7qCIMIQGcMg86QsMO7UaHuCJFOQQz8eoE40YaniJ3W+ibq71fwKUSPu3RbQWee0QqbnNk0ihjFxlhKfWml79/sU3R81cjjBzc1Wkj0hUtdKhlV3NbzGh1naGEl36NZIHOgnXyggK9SNWsilc1+4QJoRJrLqckZXB+mK/VxAF1+vcFgAOGaFG60KcW1AWcdk+9p4EbSX4uKjAgc2kTpHhgkn/2bDon5NBPfmgKIkl3i8Dkwz0jkLLluMNLqGLHyNlTl/Kz2V841CBERyasXRfAzmXsSgVMgR07dkzvgYEb5pV9GLxNpBwWF0/UxO6LFY9SFx943/70idg9D8Uj3IKAOtweSN213+mYgr2mO1AVdKA63vEcMl7Ky7yb3AF4T0bU9fdl1E9kvT3gz0Vz9VtIwHqba8+IgVEFdkjR9R+eJ11vNXezS3KWr6bwypZ9Qs7FcZ0rswAJiD6pKxdpRqD08C89AR5wC23X+q6ecRKeeDwcxCvgVnuN3g6T53p9uggoYvJJyyFjtZHaKE0j0SPVuGaTxYroh5OrXdgIdfIJoH9rllmq4NXxJGLVKga2PFQoHGxAWxmA3WEzf1tCn1y/Y1D5GjhY5/8KJ9JUr5W/d7xA6lgvGgsn0+aShUBtdMt7/Kf76i7YJhr8SB5nqggdOvBJddwOmBQfKkWooUzA9OviaW2cxz2kVhXp1zeS73Yh6uj59U3VLdPgot7APaT9zAPlxHsxfYEPm2fR0I48ybJfBElmHaDlnwBzE9QMp+MhQxjoy8PLP/PuWmECz9IIJnHYutcRzCL+9YJTvEmBe+SncXlTbQHW61g3K6GUUr4QUvW78yTTDVyIvO5/CiSpXAbxHBdh1S/mVTANhy2w7xEhHicSd8zv0xwLPgHe0nKHSSKPH0FQMyLnirdoAq0dY3IMh4A06ByuttTZRUzCXQ3E8hMWOkGvIPOtuZjkNrMlIVoVkc7zuuODFsseVnpDzxHMuMXhcOMKADlRaMUbCKqeCzE8tZlbFGvzLlzcJOOdAJUB2kh1xUfvxJEwNms73NMdo2m4iqg0AI93iFu1';
  const _INTEGRITY_HASH = 'e8453b30ffbde97344df173cfc7c5c6ff2dd4a03b59601934dedb392074c9f0f';
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
