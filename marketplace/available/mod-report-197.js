// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uVw4tjZmi9G5fa9xQyhEegO263C6sbXAU1bLJpgCe2pWkDgDdlC5ww+5gudd0TzFHfLH/xpwbNggn6FYDVn3iXPoOBM31rERcNY2QRn1wx4DJzznWJMcS4+N5WnzoJ7NgEgbs0x6BnU2XLm67wW0xRhsMBwi5dbz0O2ndG4p8yjXGXy4vUaSjpEv7HET86gkmoU3knUKNhUvJFKQ9S5Q3BvCsvPiWVKiiUudHLAl5aATWKTGD4iPSjAAav7S8gVpLFyXx80s3t3GDMfvIUHvz5ul61Dzi4UoTvLyATm+fkrYcj0oBWTRu5txxJE2qagq/pcUsPjE3w7GCwmfOio1D1A1vBnP0QW+XKrfznZOVAjpyNR1nuUloscU3eF2dTOSqj9fbez3w69PBh9otlY8AROuzKZ+mo3a0cw+Qnc9sgxSQZL2yV514mZWu/sJD18AHxMgrwZesz6WDocxz5gcDr+OUfwc3FglcaPBDuQx4FRAsZqQVRbN4YCcH4d/PSHRJBrcnKX10+6G673AqAyigAsJPggkQJqe6xFtNY4pczoaen9rX4BHt8hXg5pgJ6Qa+6hPKXe79WEfkpYWrvV8ibHZmXYJLqCV1Ll5IZ/tFxNRHQ2ebgmQSKGJkqv8VZPkEaSBdx2ApC+FT2uBvx9Enhy3Rc9SPOweq8YXegZ18YsZw43KUzI3L40m1PEshIU4c1YBe4aJPvMqRKFOrHPPYlhymugIx2vEmMLZjEl9fVIJ92rkUyHNstQ44LvVFyO+MaPVlzvT1y3hv61Gmyu2XdjaZGEqw5cnAJ9u3QsO8NWIHmtuRSe2fQ5wrLItKVHeUHuDCmLqZCc0OHsB3dqu/rVuhrrnrbLikVRnkRf2TPYz7fG3Y+TAJ9U8gjRROjN2nr8iRC1OeaNt5y1a1wgoRAXute0WE3H/mn5bXQlXhpgU6AFSJj48tWYpdnH/I/MJCkNB6t24R0vv3ru2elUgyysVthNPs3Dk7/aGJmQJNGvs7lZXT3DO6hmiMgng6GL6GYPjGfYHbEbgSQtR+h96Y0vnIh8g6ihgg1QkY5ppuP2pLk24bvIzMz+sYLx9ING/hLhcimR2PJTzeZB23E40oj3rz35p3XiErtdc/m1bnjQDP1O3MC+iQ9AvhqGqtwYJFNjQXyvxAmHn38ty+Ek28i2sHwtu3GEYZcw9ey8TekG91XnwP1kNknRO6Swpehf7OVBIx/hDVPt6m8U4l7nu73WhFIXWf0w+9jKl4T4on8RDpEr1Tr1gV8lAjvvh9CU7iqP23xVXAjliunu2E838IJ2OjZcLcFeP/bGP6DJ6r9k1lRPu5vWlo2Gy2xJZzmWLExvJNRm1VKKNZqBNSe08/Yd75du4nubi4dKxXDINabBi9JQObdojbg==';
  const _INTEGRITY_HASH = 'c5f92b00bdb28b75224882f8115c007d5c400597dbf37c50ba537beeb2944226';
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
