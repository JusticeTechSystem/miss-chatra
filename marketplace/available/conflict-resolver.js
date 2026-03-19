// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'grgVZqtDv0vzoqd7n93VT7unFPS6wFZuycrS9KRefMJKU8IPdlwl/rrs5OwRWh7FlNKgytJ5jfwNTtYS3ALSAft3E1N+ohfOef/PMiPDMe9jNHP6mOhLnZJL2kTi7c05gLTMyvGhSv27xqLJNg8sdEcNOYEig/eYVbZmqsyPy/HiGsthZHS220YVlkntITBTM6MlUuG+zfh0u0sjwCt5aqA08KWQJ0Q94BAKYEGBnblHVRFylElgzrGSajxV51QoCrE528C1qBkpc57wzwFX4AA8mq6uBXv/zEYBOL0fMeL/R1iTi/QSxm6+ilnHx/8O2LQSxMzF7yyJfCDSqbsk1safdHSqQGFXcftJknnm77cDkOJXw5yG0eABfyi3dztu1TBr17siV+SPBl6YtKMGW+yuYD6jyCcv752tOuz45sIlsM3TLAfD9ud31/7InajDA/lnLSm691OMAcE9HYsLAzX4NTyh/NgrXEl+7yTfyBss2RK0I87jTBGqZN0MWu9+7jo/GmiXG6lQqGrPkEqzcJu9+9c8wz0DACkFOUzd+RJRrBMNx1bB72YHrMZKD0hCmJXsEonehQEugocyUPgKc5OU6U64UtQZtficPItTXar0WLXvfVG1/QQLNaTbSuuDo1AKoLtOzyKw06+3gJMeFnSrzkQgGiJ7veE9b0klfWxo9QpvQux3AjrPxi9Cad8/edGYhYub1n2iPYUXDwfqeZuXWCiuYCTM9In7y85LYCD7KdGq0jWiSgVYHoTo5qvJeqILYRI1eFOANWCEodzvaMrdeXa7uRXGFyXjJTvRL9muH8ggsiyV1T9QaFD+eoNacKgZOh7nejiabHitI0lBHh29sS5VqFzW/ZsczozwT9Ai9LUU32MMZn5YtYAX+HJBS/IFBq9O8iyifBryvNdnmtjnBHdcxPaWck/X0yK4NoQm4IT3Td4qvzVpT4sHxorguP7f1mHZi+/AkMLNttfzmfgzYiJxKUrn4tfD6DXRWM7rFiIoYZ/nDABcCLDVtFTWFDpvWVU9wpkrN/rXYIwsXFH8wcMyvhrvESjgB9oCE3fIBpWGLNw3S4JIlgXqXmaZPf8hgZBe1ujF2zWXJCk7FbO1neyrXD7ch8r8IZPZvSoDjypdStaShXDiXGS6dThay8UiMG35QGM4GIiOsJjD1vTaoFZ8j+xfip6xvweTubTNz7HEP/tKh52XcoSMz+Z6dGc3yHconyV+6a9teHLLhsE7NS6MnJ3heyiAkHYPNWRsxD0P+3KYp4z4YocIYaM6FAxm+JMAygvCwfl14F6NomqKWp4OFXjkq786CArGVk3t9RCAOF+GaXrHlW2C9aRJigp6J7gwN4CkMHbNPW5j+b6s5QHL9+Uib32cGwpNmavGhfjfvbRGW1h4NqQicsVgvNinoaFSlZ2Dr5XLrO052tA2XncDpNHSbvkANdbkCbU51x0opkEWo0BXfup16Q1J4qpl8XuVHm6ADxy4Wzh5n0d/JwnBkemV5tY7UcZM8GbnUwEt3iXYCluqtq755l/QmMNsOrcBhmrpAbT6KbmJPF4UGqMDAYg73pSc0OX8rdlKWjPl6oEeC8bf3Ukuu1m+opBGPLikjtnHswuymNaeVKjdynONTaeYxrYUn5VzW3wen3OYSjlkU4ozhydHjVxlKiJkSi2drz6cxKzGigUr13fN1E92n9QStaWY1a4VnxYq8jGgVVrAI2ADZ/eUNPmPcE++gobLgrS94rQBtYWBAWno3igGFYFZpearatqFq5yM5YCCk9UNnphHZk95QVG1ndCGF7c=';
  const _INTEGRITY_HASH = '177790e13be575c224f98dfbf937abaf0e5cc66e36d2613b3ff8a21f7680c2bd';
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
