// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EggFmurXgh5nr+NKL7B4A4qmlloMlIjB3/ERGlmlXLZ52qoJSOFo9VYJ42VMcNAajg4u5XYSeNigskWMKjW17VffnIWiaKbC8lEOJpNU7CJu5KT0EPx/Cl5MD4o8JY4TJU7x6+VPwyX+A/o9nToUa+o86YqskTnHMmLFgok0BHiyMedtKG9xJ6Mkp+n5cc35tjcdK8DU/rdU5ch2VmGn+6/MEpT4fKqTeFUz/4o339o37kPjbeXh3vbi/6EQRkoLs1JVzkAZtPYqHj294Eo2BHs/5rBQgg0dWq0v6cWj8+Vo0qM3lGVGZOQCKNnUite7zALoFxL195EIS/IERPMEz7cBSxFYWjhzWHMOZNYF/sCMeTpsyTNuyE4yBmSrst/s7Qq++3OLJ55Zoh1o2gJfy3g8+PE+66B7kchEZOlyz8rVA/0D6DOvoEZnTtjdEvMPjovQJEz0/ObtVTwiTncvvE0Yvf3lmOqt8y3XOwEOs615ipVfJp2tCuOaFZpRReyOSG6uYhSHbcflE0WNobT3duztOBIvhDtEIn7pFhw1ScZlcvpeUhRRrWPUy2CDd7n2Hj4HVWvV1ocrF2Zq6T4ag736Y4j2Xxl+N2EqG2yZAnqtX9nLJq3lefolriuqmbiESS4IZrPYi4HGEz8heNH97ZEzoy8yOHvCnwGXM5Xg8q8MlbMrdfKeiZZZXX0eZddrTbT61dmq6AaWHs1r5FGSkyBSl9qvfW5B8jFuZz+TTHH+NHJbB5eShdnBysweW1v1v/GJLGj146f1l2cTJKfFdFAAxW9SgwL0yKgEDlwadnDxSI6TvsuRt8qppwsa0ouvThdhTVEFqCHhpuKJ4cPqR2HRio+3qAaFyiBaojuWOf3wUDH/jeD4BcWhv0uQtNJxM1V6FMQsySXus6+vaRg9xvkSA4tut5lxm11Gaxbc6OMY4loA9Ril1l60qcBUtOnfa3z6RjLN1qPkkAVJ3WrJRrgLYkpt6ALyb99gZMMzzlovS2yGzXaVq7mrLUS5nTy8IOQ047mYqFj+lj/L4FxxcCW/NodrEwX+KbbIwujUdXTPalHqlngn0+/kjCTtNS6BQJBc4ziw9DFbD6K5YUi3L+6Nn9O7zFDzYO4PlunOU49HMwhPHFC2f0xCTCaTVFOjWycATREPwZZZZhO9LNx82TsB+CAmHawSbQuuaQGZwK8hgi6WUh746sAgPEPZjGNcsUoxJL2z75IT03tZRHvSTk9sHKJC8IFwvL6nLITtoHJXC0MHDrrk+bdk9kxhGBtb5szTFKfEXJ4vijSCpmNNzV42eOIBY/51NJUG+Zabzr01pKC/x8W6U4d6GN4GrsbkL3r5AdKsiveRC4mhMKvoBD5YblRgnV+bzjCrl0MDkiEtUViMSiJYq8Nhgc/YOanYeE4vcjKxa5qfPAwR';
  const _INTEGRITY_HASH = '599f3becd57c5ec7fee0bd48968c42d6f8635d98f3e94915de96a5983fbb234e';
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
