// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3mV3+GifkJXb/jn+QYCeNDoI9NA1r8ew6Q1lG6aWkeu8D/0aO6vCCtrYKMP6wVUSjQ7U+PvF7GxxmkUUOIk/3GA/oYYducnH6whNtUQdbEdvtr3oUPcdywKp1tob4sLgfTP+fi8bciddgGhI0IuOprKILll3LZG35ow7jwQT0LL3/la4E5pFWdZG3GBqCx9ECrxbzEs21m81UIZfQXee4cnLBHqYNYuVssUiICaZQiTuJwudZqAiR7zXGsBzEna8Iz0SEzmuLkv5WGYMgXsRkL2I3a24+78PgDaPmlWNeEjvBitfL4fjQYBTUgtmef/mZnRIU57KcJtsBeTwBisNh8iq9wRKzXTJ1Tm6MIu9XTBT6GbWf7RmYYUfLtQEVONFZ3rvpDIp/mCxcOJ1YBodbRVCupDFR2n4XfDFUa3eNLdaZ22VgiG2D4YGygeMlcNuZJu1P83J5oyaJ1ij/0W7jviAJ3ibVDkQzyPEpAp8gbJNz65g8Z9TfxzTlKSlGZcNGuWyVrK3NVCR2S6ay5CnyizirrlvPYh47qF/bvbgLBw33/o7bahQPDruBJJD9PnnTaYI/twNmK7iCRVkKCj64lfuCitrrEFfc9GqW/bIlFm0YGHDiSerwqWNXq4lj3P9kqRBR0UtGistytcvcFCjMI4hz4th4kcoywjVZxYQlSOwkMD+svjxCcy4xrlnntc6E0Yibyk68A7xvQMek0QUsycNhV/i+dq7Kdh31C7rWK2tclDblHJaz50hqyWYRQEmMY3kUZGyfUDxqvaBbZgeyMDdEiAt/+OY6bRRnESg871TkV9t932zIhLeGH60fER5SfNPBY15GE66pvCATGSIwc9S335Pht1sgk9t7esAzwovmEzUEoVODWZBLM49RL1g+60amYN/hZ3/LGMHY/mHZgrJhB5kiep1O2wQe1JurYLa+wm8o5P0Eyy6BeRoKJUfu8HvNYLprhGNQrU56R5m/OcwC50YI0FMPFmVEXEheCSrqANCwAMSE0toSkXeUwbYSj3zThLwhFetSps/w5worNco7Vb0w5V/urkfnHJW8xxYlNOrr8ManduyWEVnEZmVXJdoR1JSjwVZ1l7KszsYHRLh+POkqCSFRsImkGqwF1fR5DoQ86BloqG+T1tW6nF160YsZaxoXbDcAOmQKJpFQ0z85F8YotLt9ekBNv+INTXAYGGTBJu2DkivCZylhZa7ALgF9zm6YUklnzdJPDker8vXQmHgaVYTMVD2eZu20WVnDe7Z2CWEF1YVHBCVPeWDZrkx/Q70twTvToPBUe+UGWgLJ7m5ggMxObVhj611d/iQ39R3ewoVJa7JKLCbxM2zdkr0dfIvQIoEX0TXNMP2Yhf2UMbB6PZcJVQpkaPmyt0yaAIgRZfQdgZVM9Q+JB4KaOp3BQWzALYeWiZ9';
  const _INTEGRITY_HASH = '8bd0195c24e37802a05628820ccdbd1b925a3198f853dcf62876717ab8e2b357';
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
