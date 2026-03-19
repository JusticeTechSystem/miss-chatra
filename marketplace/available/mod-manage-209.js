// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oOQ8eamdI4aiJWDDGLIzUrMqAW6lXG9pRvs9pe6FWtq0UZOJIZkX4FXIAd/2nxwhYocyCeXtbYoTdSr9Z8M6fH4spmYe4tVT4r2cyOXzzVoOHuSGW2lswgDlh4ApiN9rBz7g2zB8ZVnKx4YN1Y5cBUK0/V7Q2JVwEdKwt3eCe0luBmwSwqBALIzXrEJO9sFutUVWZnjyF5EPsyjuyiMBmXl27iW1ICqES7IxdCsqQc6cJYpioOCnAkXRTpiuKr3Ye02EbJtnY5GNEAnqU01yGujxAYowD/BBfqa7oo4Z6gYTdCqqW1u1oAsRguoAL+jWMxT3yoAfy+wXxsizdjnvJ8WGIJvBmDMLGLGmnGBwRTYULpyuvFmYVzgq8rZDjrLf12kDLiuhdVQyFwdf9jCgA1Zs+6VbyH5I20Q+IDtmUMo/Ht1yLZXmxTfLYZ1N+JTrvAVlNlorU9gZFWwc6vK7l6qWeBh7HnEswCLVuQPYUvA0nx4SOCkTh7hDvv5L80U42UVOt6Xgn85OO7WK2fSyEwyCYJGoqVqSxphAsR/+eDYW0hYnVaTaMN6k2u1UWIoJc2qtykbMJRh0GH3udQnBno3bW5Isk4s473ws++fCTS4TVenttKZWhkGpsV1mAntVaAJyeyZRcOOMoy28aa0NfsSm9S+b7v4MTAXh2ycxdlEdxap/lAWtWEaJjC46Kjt2zGwR2uoKovg4elHmVBOEAZMOmH5NljBoz4oT8u1JdztvRFu9vYdEOUJdZDVx60mcZ16SMdwzKA8/31sdAIhvKJw1l/fJFRIGtt07hjEl+obgu0kQjfLw0WWO1BT1/XoHODZ7WOWDpQtiztGUGJC9jypss+ZVRRCnoaWPR2sBjmsA7Ds02OFdDn/stzstgqag/4MOr518Y5yBvayOmfUDZMGmmUIszuy+SenD5dfYP6sUTv5RmHliyn3zbpNemjES29DU7qJIhUTkY0PEOzB0K/gouJJ0vJyFX5A9LdJxADYFusCCp4Q5szHGjN9i+ewreRgbGWYHF5Rao2n0pl9ncNvfVjghVxvdfQSpdK6bEll4b4SakL+0AuR0rIwOeJHqPMoYKhuB5u0dYJus3wDJJEEKagWN8wAkbNA9iU9G+E+HSBGfkJ+4nWiw2+7JmxqOEtYpGIXsysl7+5223hwYGZeC69akVVLlkwuJP3F2gNFSnXojQFozPbl34ukVD++cQJLexTfKVXn6jkYkPhK2jZpAnmKb56cH57ZFcTCKcVCZ8oHKuTd3nu5SfhA5olY7+EVfQQ/GbsKEujXHT7r4WiyOFnvnobpaHrDQHlgJxOAs7PUhSyg26p0FxGhuUar4nMO+xW6RMJuP1WWW47Duofc7hfzuLOUOOKv+0fgmkYEv0uGSV4EIGQ==';
  const _INTEGRITY_HASH = '7a60274d2148b5ca6e38bdbb542d12a1b3aca45d355d1390bccf891cc89dae5b';
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
