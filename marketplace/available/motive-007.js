// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oqTikxRVQ2k29PgIqoiylzWJ/5jm+F2gVVkKvIE021nPKZKqJ1/0oClU8O2gY9cnWuUtGKtoTJ5wgQZTlEuBA29MVLXK1NGMHo7CupK+0ofYzTgxzCvBwqAhvF9+S1sbfSke5di5Aj1il6OShmyHWLgg+62LV7s95hscBcElGAZrtL84qGwVWZc3guQgMX0MHGuIBPX6ELuR6e/I7vbpYk4cL/d31Qconjivx+lgsO08DCODNB3/QPaBHo37wAVHlBzhllHtBXfNBQDVnVXlZM5bxT/La3PqnLb64CF07tCyE7/FuBgw3ckMgA2Ksmfcdemu1YgAvCTlW6jnjv8sDVRVSfsscfYZr5D5YBk1Wk07l3tT4TaGO0ZSINtpVvEOV2jCoJc77gOwmV3bEuhlWqjdIX/3seqEzD3/IvogNLRl7l0YhB3CXh+x+gglQH0oAUoVt+Du6L8h67dOoh/ZMJVvpimp6pH0SwA1TWtwh7LBtsji7xVDXkwjkCDMNSRaGZyEyNy53gmQLCz2xC7EWoRaWByqeHHL0kBl5sGgItSAHMaBx9PInIFOZITKgwx9Q7XqjTp5fiqbO+ETiAwmRvLGMA9yF/La/cHIs2axlCDc0Xs2yW8Z7vSZl7raUTVhnmrA7o2f7sUi5jrqHhBzit9Qs3qhB4LdSiiXcRo3JXkA/6Iw3jd+fbR4Ai2aqRdaG8jHH85YeHXuIKKKIgm7FEzM8+o/S2Y6e5FVKZY8Np/Q3xsl5kuX231WZaBSEC7EGZdIy/VbwMYlplpZV8WnrZbtK4FMShr6v3NHa25fGwC5daP0FoWxslZ0/kx0J6jLA/FYC0OSfOucHN1HNNl8slm6HaIugb3Oh03q9V9iqo9rUm6c/F/ixsbfif3MMd90FMNPWLkcEJ/AVnF6MyHNW2mLn7Nc9OpIfKEL+dIre8dRl724+aK7iR5ofDXt4xnXQtcMamBn5iOVshV2feU0QzyWYNQQpgJoSYVuoddmB8ynz5M67FqU8JkaKd81lkY0rBBYTsRb0TZ9tbgfh30=';
  const _INTEGRITY_HASH = 'f3c928b8d0b863964cf8ff366388ef5c69e6c8fbf113c2c63ba4eb307e34b767';
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
