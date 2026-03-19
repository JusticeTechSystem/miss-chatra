// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iZ3bdGpCV9JSu8sBVQfmDdDBTwcepTL+2sXpvYIcuVgrynKi4AQ00pDR5WG3hyNgpsvMaL66NkhyJuTcvIL9dfITUwYVZOEb84IL16N0denqOG+7An9l2he7feqveoh7ziU5zrLzhNi//4uU/0X/hyODuZ1uVKhvVYr2dq3oBungg48CJTQuN+YbbU9KrqrIXxngh3lOQkdiCYCcaUksjC+IW9pruakvIi3iKcGH3ldWOJBwobzVa0bzRoGpUmmnGcFVaB9U/nukGLOmFKkzBV3CQJcV/KLLGFRSaD/Ix6trOCp+D0HKzKo2Rr+QoysXNTSqCTxWT1K1gO7G0b/vUh9a9LooJJXztE/Wlyup08dGAPR+FOeLg7cINxvP1BCzRgyVfku8CbQkssmqUwRxiED8n66L29cF16780XyLhuLfNhkXBd37x94BhXYQQ97Q6iff36F/QhcQJgAjQto4+dVKH3bMJjZYvlbBjHKbu0kK0jlOUvC8bEnbUYxV7K92IRJLhrYf19t/9GMreAHEfoad1lrwXk+rW4GQAy7ErfOLb2UC7hxQFer6Pi9ZlstHQ8dAQsYolKi7sFrWiywLrX9iHFgDocsnTbabbh8vQoeyD1tvtTRtsFNZUGNIUyI+gDsskNSwM2f3fSsb4tKPzTEQHl6VybecDQW4zVOBcxr+/elte6aKQtl8MotA0jCpWGcQZ5jn5nxmIvEz2F1xbNGelZfFCHA9hZxHr0ei46ORkkt2lhwblbcFvs55Md2olkxjg+fIWExvc95Hj3k32ROhl1z5yI84+LWQ4S+k90jQt0FsNSAfs3XcwgcShxnTWBD+vc7qAX91zKqN6mA3kaZ8VrzqzbIZoZdrctc9bydh4hfb6+vxO5lf4cigIS4P/yWnMBtaYPvx+FswWrUU0cxLWuOegkiNZ0lg+P6Aqp/UekoYDCRzEbFUTFew4drPnxE3b5rrmV3k7xNSMSdxf+WMXa47pZauIzDfUWm8ufOWhfIN0bKU5eLQjMH0dmnJuFcukGz0llb/79rYZckUcOYbOfLkswgqQlEYJdSHWF7VI3uPlZJxam4ZMMB3npfrEFIgzHnoC1RcUVdGM9hid2yoZ5R6E+Hau6uZAxoZ2uCVkbI9GI+T/WB5G+/xXzQCraRPkifEkrW1pr4N4eFfPCUNiPYu/q3wiRXL4zwGQYl0P1/liA741R3iz8InddRBQNibp7Gdk0pAiA==';
  const _INTEGRITY_HASH = '52e9bb4b4fc4677c5a688c212f96a7491f4ac838ad9e24f54aed4bb4da190108';
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
