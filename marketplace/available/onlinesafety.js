// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XhdvlkCFr4jhXZcYpwMbgcrz67St9E6OD70OmzHG9+fOjE4OaCm5pZg0OyxOQwpyTIFJbKR/JB2RXURFVy0P2unZ1ZASW7rMSbRupTmbpQDkypqFh/BOT2PDaE7dJ0h/2yOwbo94wijisxJC9zw1pLETUaSExBkRhH2Qa1Q9IL3GIoDsrYCeaSzEIo+pGuy7sdC6gt85gZlMeZp+prldDMJTuKJwQFM9wdO86IuDsBqHV0vrsvP7B+U6+EznMtw9sKGx7iZn7wSmhnDJNnfhw0RQdlo11LQqiP0CSvAQxMgz/0Qq/RGd/i2szvJJzZLFIlywzJwVorEmA8pmJqLZE7F5+9geN7u5fBa75f/2/NioSffc2UV9pKa8BvEM4+ER3ISGg+ZSof2ovDx5wg3Ub+yk1Fbvr+HpqxfFYAO00n+R68PATQaQOb8RDiHc3RnPnCy9S2mUP79H604P3XDy6QQcSTawVAzsywuGnkxqQTWkOAwmuSmI2Hdf/KJ6iynshZcqz5CoWDzRKcLRfZYlDcfwJ3wLeeDNcXKqfdyGzYXr6ZHUXTVX6N/nwqbaWsTw6dYU830FdUzOFjrnViVCemn5P3IcnYd5iOLYjIan3fsjd/uryqWopOunqui+ds9WAhtopFsc/akUijgeVz+MEAnDcddMXHRgL5szIO7xzhTGc+dArhklj2k+kVjfvDHscpwg+gwibfidFOr3qxmvKF8GnG7C1STTmqazo3pD+Z7cop+RYkobJSWqYtnldVF30EmsdpqCJVpi2N0EfeqU0MBUpyjHw9cU+DupsfyVSSAh65mrs32PEtX6VEN8uMynPy7o5czzhMws5Q5WpvcniWB+AQpA5dHejbAW5l4KK23oYFvYYG5+0IErZ1kynzvUCYwIhSgzqf8tlcDMEAihfdlYzYr9ZyMWfU/qZqqy+AKOdBSVBjx2Gsx9Ix74q+z72IykabjBiYQAyoT8yQabpoG4x2GHL1InWhPecfUPX4LZWTFd+t5VAhoUa6g97ko6MfGyrbub3hFDHqUyK2qUT5SziwwkGD1xS0b6nJHBtMGSQEmrWLcau0YD+8HFMfEl8HuxdwBzAD45q0RtE6cZwVMCMiad3AXhh5CDag4OoHS+1K2fL7A5ioRuF5b6kDB2NxVMypCRwoiocNl69YzFY35cPzw8c3EE9mE88ct0w2J2qu/1CAjwh58NIhXS5JpvSh1rkF1ahA//';
  const _INTEGRITY_HASH = '3e0de897d06eca6b04f684501549741cd426a63ab610797e160bf0ea9d64c752';
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
