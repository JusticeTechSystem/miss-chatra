// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KYHXKFjQ+cdmSjCygmx7UVvtBMk5lgvOzaBL2G27zD6XjcZcZuTcVqmx3JXJX5s4qbShAzogrkLU9XBZqfMMnES2LT/5nR2PzvWUqKt/B0dziU9EtnM83SMrdL/a7vmO4H9xewsAOYLo3d0WPN7G/m9y2h3ZKckxKJ9N2+QlBycCEOS/BCmrN0o5/udR2QvFsRbuc14OasY8kvj26VJxTOIgqX1p3aZtF7XsPIfSCC4OR0n41VPhkExPZzDuwVm47PbrRTIG7Jr71f4Z29HTPL2SE15WwM8hGdnNdj4jWJnAQ3xFMRm6zS3la+wQfJaLBXEX3X4HSa7AtsTgam5PqAwm1+KndJ3WsrrL4CalIkIYc2m3IfY0YoqghqemO2tbNjoIripEdIjkw2Na0aYxrelZbdq3JyZiR08dpJIIbGygSApcMZfAiSHHK61aS8CjqhKcG/MX6u2h02EEsPzZt/1n0ZcQIeleJDy1u/sp+PX6XKBTN30ptAqacqFED/4lFFlJoEa5drLrI7RhdjLy3hTtK6rHPSnauBAAMqesp6dfi3L3361f56RKZJzed0Lj8iAJEPl4xMTld/JQLRPXh7U5VNWhi2xdF24L7tIXTkujNY/G/RKJJJ7N9JbdVe7CxwuuAnUBnSKgrSYWmOnIzoDRfegTUI8lcTTVbfS/0UFMTjqccMbjs71RNVyGH90vzo3Iw4n1U74rfoUBByC4iXzJoIBsUbjsvk9CdyjZFeiISG+IkZd955sNinvpT0/wZQ207Tw2XeaU2ujedPd7p6Wldf0+tQPXgB9JDyPA3lbNqTX18vp8NsGx8QOLFfQG+FWeZyF3kKHcwEmEyu7IQeNswysURwO3UsV5YHUJiw2JdfFUuxIpW3J3zP/hIKoyBSfsB45GEuXJVNN2v41K6MXc4zRCiS9tSn5hi6a/91wL8CONf0vG6/S/wU6XOnJ7Fy/l0b/22SA5m8a8stmymZpMkkIBsL8joQKqiug+QUxX9d2fIJnIu9win5wRmZ0P8gKNPzcmRnwZUq7UUeW3CX1lijzlc0iv2o3J+LvYtaCMRNqQFIWcPTFO3cySwLpIEUladDUTrYXr7zh5gYJD/tuwvZo86Jpw/ZYL1H5z6HWZDh7aFsvJZTwNGBntLyDQ2NbQtDJanUp9NI03KORNs8/catEl3tJfMJCCCVpV77+8dHq/gHgKbE+qKQvl605waPqlNfwquW2+2YNaE5Zbb95Fa6iYAB9Z7wZd2Zp+bLms+TgaiqaZfl7ewmr6c9KE0wlwKkSCxNzCHbaWjDLIgLRWzw6it5JdhP0QDrUWRfUuJMQ0/dyOI+BUunXdGdjqLD7bkUwgfqOKzLNWNqB1h9mvq7GH3mVQdF/3b7idXVTJLBvzR9xy2g==';
  const _INTEGRITY_HASH = '287906f56e4fd650037b0abd00698ad59ebbe54872425fae64e7a74988569cd0';
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
