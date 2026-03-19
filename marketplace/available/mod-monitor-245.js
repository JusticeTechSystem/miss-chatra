// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UIGaiMHa2iHx8QFDoVZJW7B1qe3UXhuTn7RkM4HcrBHm57vuEXTLjNzXUKmDzci5CStjkjfExwuABKU23rkJp2E85PVjiz2ENC34tlVAykdZojl+cmv/w2X8yK80CZhI4RIveX1P/CXavxBkEFNKVNLvdVY4OPkuxM5nZTBeInuojb9nqfZe3FeYrhRKcl7REreWeeZE7TF4gPKEKjXIkldmd+Qzqlrkbpt88kdQsceUjmg53SnzFJN0slk/08nkzLK7Cz3hoH9/PSIyEJMEfSqEIrHZFxP8Cr3vhczaDdhNMCYdUwTNFwzsOSfXerP9RTUW42n6y3FSydTzjTcOErZwfCPczAZMDQRMlsJ62MyOFtwUIFj2bEwwmSHRMCHcGVy6De0A5AUjBvpOTCMf+l4yWOZZXXgAcu1fQmwDihzdX0PPCtjIBBRghv5RLnvWaYA+752Tl5qa91wn3mB7nF7EDqt4ejPtcZcLX9hPDcAk2W5I9gHpfSOgQnU7rXF2dyDj9siMUipEPC6qmuSjK76+/MDbjb1FauySmn8mTHBvwsKNu5282tOut7IJKQ/sm7GrA9FVLJHmP8yqTJOKJbBm+AtsPSQnFNjhweWUHruSpHrdEH5IJ1RRewqRR6v3ztNeC/9qhUEYr/sEqFKHdKulkFBB8nhcPxu2QqX9EcuUd2ZgriRulwfXPIKy6GGkI6UEIARFRpS2pp0mu5EJxcolMYwCdI4xO+ffX+eXn9+AX6piWZeHacWK0lbpRV78bhiwqWXgJ8hRKcCXR9YLTztKrBa8/p04FJGbAo1Z5TLNXi88+YId+/kJvSzKaeT5qtHDvt5OdNmS2/E2armpDnHFt2V+sctg2z25bqHLpAEyUEaz4+yKWQ8oTD5TelNCPhWUYlMNIVYPO8gruymXnOMbmZGoaW8RNu8c1p61IrcIXh/X6lLcwQugaL3KgEZnwDr34NmN+Dsga+pHoQjZfvLKfAIfK2/o/4Qu+Zi9/JcwAomvdNwfaFAHN1TFiXFLNyGFvCML8wHcd1mMfKx1DabMSmEqBevWmVwAVaBpY50OVxdoOflhaCt2qS3owrGBgGWiOgJGnxpO6rawrTWzlOEvmwQ5qdtHOt2c3LnFQxqBDeafOD7mDjMVi2dJZDoCW7G+vwGY7CE4CF3w4HTsiT4eshuDxiWMKWi+3IY5U0YQePqs3Lf6jPe3ePsEGcYS5n6nkBs65w0ODX5dLNpxZn3aUGaI+LvLuyOMMeRA2/CQYAUccIk6agSsidOxzLff5Nsi+4y6gftP3MRVMCrKXGF7Xj9GjwGblthu52/PXJrvIm8h+4vSIEuUgW7hvQXxyfP4lfeQPlSkHEGJa/zkAhZFeFZsiZVXK8HpTRQxJBgkH7eBZ2IUPGI5AXSI9Og9nN8=';
  const _INTEGRITY_HASH = 'feebf0a1a29f0e84d518a5a4d1ddcb1419b9f4cee95d795c2ade0790776b4e51';
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
