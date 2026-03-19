// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'V1x5kcwb7vJwWpKwjLN7rPnQ+axNpOun5Bampt2bhkUqlLgrQNZbpUqQfuEe1DJ3LaMJoO55GsA7RmQJA3n6gwwp9IAxx9AqWVYvilRbFU3QU35v1rFurlpN3kGoHXmMXKAWMUNZ9COdXWYjh0eDBcvRxmWzR6hNWdbBFQi6IInTciSM4EsoMa0g6wmzIAG1ZeQkC8cRzBE+EUhi+I4sGC3JdmqD5m0tSPZf73e+e2db4nZXpjybkrndUcVA7GWDBmGUR0MNhDjaHtRz209v6u1I0LF2SCKnaVkVvoZ1s6sggM6ZPD62iDFjyhOEqUtLDCRWM1xVHeAluH5i2gseyU1TVSuD/mueETAPG/67INP8OHwfXpiSKXYPtWqgA0JwCOMxaAaQuTfzrGu0yREu5oTM48/va9XtioNWu1b6JY0Ylb6JiP+ZqvT3rwy6wwt666JYF5Bvm2hH5VkHECTTwAn+fZZ1HK2whJal2xK4kL1Q9NzWrjsLV9jXcIGvm8yPwJbIo7jjqtB2BjMnB6YLZO1wcDTntlFu7RdOgNvmomXoC5gOqWAi2R16PDiLo6TdHIeqnEtKWrI5wNOd9i1agnG89KKmJ3YXXTQ1JN7y3TxVmPjDC4XkBjqeaGvVqnjMBn6ZUd94lLVPS4IBzgnnmVCtYrfkBMX0Cy2vpc8eXcpjXwcV37Wn1JP3ZALZ06gSKPsRyjOhjAN3aIaKGzLDebh2SnNBSMnTp1YdBSIo/3cECPen0HNskTbxgQ+W9gxe6m4ZID9l/PWUvMqsxJV8svbvWd2CpHPEwNxdK4e7I/hLc6m4qzyk9cahuu7K+TOIttDJ91FAcpbdnNS46AAznhM3AeR0Wlp6MafK/c402d9cBUQ+w+fhEPkl1Cg/OMVuIJcQP5sO//PnQCQWU5K1iXZJ5K6HM73xlwNo0IEGLDmTmb/xQRBv1PZWhN14HiwYYdLQOYqGEYq9FwyhCEPADE9qq4q95gThVTcPKLkXAcAJ7tqSwI3H28dwFgqBauASHVOnGpcmf/y9XfTDvkLmK+rMkKde89N0M/gtzRtUx9ELtGK/iQJ7NdeIt+0Pe4JNr4PjONZxx+XF4ifAiA7rPrjfSjXe6bqyAGuZto1+g0SqhKGnvouyn83b3OGwqCPr+Uzly3Q9BVZqywm2ONnFx4/FGn8WPk8cZY9ESHuQVQ6bioYB5VTOQ4V9etoPgXXbrm4MCAva777vRtwaIPjz2cSte1Rxx7kTyhcoc16Zuq3069+H0W3ufKMsVjq5apOTg00Xxshduc/k4rByKbuNfjkZii/0bgjk3/+y8mTeWHabcDitxwmua4rq5xcRKuCZIEV1CJH+H5zsL4Ni+BKKNU2VOh0HQiTUw6YM/9vk+WQeJHI9W/gLNQ==';
  const _INTEGRITY_HASH = '0be506f41c3632a8a22df52584bb68c17bf0660844353b263de80b16c43fb625';
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
