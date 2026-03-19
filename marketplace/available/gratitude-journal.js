// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aEg4Qk6uybFbcOjf8YYu/DDZ0EAB5wdw4dqiAn8ZfF4WI1YTcoPvDAWqOrmUlHVh4IRo+oqinLEhH8qrJcspqCOxXq5thN6bvhUYVbabTOzotqzv2nL+m1pEKWu28eB0Ut45hrG1f3KJVLlLJvQY07a+5D/TMjmllfsH27p0+SumQMqvr5Y0BbnhAzMlSyTm5+/aPpCHTpclIC70Q4nnc10+pdif0z/mwDgkld9E5bigPsqgnihS0t0K2UPQ2CWDHT89JWEJM8wPg0pxUKDXtvc3BAlrjl+LTas9y48XKvqZd+wYNXt2/yJfsDH/2HJ9Tiw8SItouWLtCE7m61l9kqlA/RJcMc4kwZxQISWEhmE4ysG/SdIAidutIbMQz2h8HHFWtNU9ebo01LeXTyujKkgyrfd7mrzuZLzQf8v8FUZV6mdVoZOEyvSYPDQRt7xyt4tC1zD5pUxboOaki49eZapY+WKGMf4xMLzvXBSNpnZagQsA7t36jlgWma9oX9Bz8XznuqnPyOegXZrzmwuhkFA/FntQr7UNUDh9KEMMrO+DXhYwO2PjW9m4UAGjSSYUXnLlM9dxr6OW58mrRf0CgrBCApE67t0H7+oUuOvS5JCT7td7YH0fF84fcKWoEAfyvwJWVLNUJz93Rv+mv+KGcjcYXXCd4KduVRhano4m1J44l57To7PoJK7sQaQrAd2+RE/qfs/PihWjjL3nRj5pGj5ZSLQjCY18AEYJ3wovwZe2yy/hGWYmdsdX62KRQf4sJ9YQ2tv51j8GxX4xUFtPday9Vkwte249BCtXSGis+FsMhDQR1s/3VGw3ww5PfHidEJRaJC0Pau9ca3iYmzv9ESuRWfoUw+rdxBkHOxZgw3z+XMW9mpKRLF2ayIKrNag545CIy2gg2s2WE8XGIvZE4GJKHsLkYtaJsZe9hu68hD+06bamq4EQtPDN3NEu2ZKhEv4H30T9tdhbaNY+CqOwQg/TVN4SIn6sNfq8Ms/gMBCWej7HG/hW8tZDSOH7EpeZn1howKVmXWHjc/oUFaUPHj6ud1qVbHA85CiZzdjykbjwQ3WaPn8mvazE2C6FnG4Xq1ELrnPOPUKoLX7UbT2AD65otLPv+TdY5FiI9XfCFDiUfp5kCmPR9ceqtJVxUJ4sZaxgSJNFvpZEbFMBhFga4AV/R5Tb5OlPfW4EWq/y4cAgHy7LvQCR1M7qXpBRvmTDXP8W5OJgzDYOXcoBOIiy1hJUWELHq/vQCy6NhrOZzDXqV2sMgULXobIL6f14kOPKrIEkkrjqZ7ilP/gPeIvhFDgvsK6h3aBnovrpJO/NmYWtO9SAsPrw64YYOGGdVgArNEWfIdRCd3DY6EN23eGHvZQviRDWxr6tnp9V19U7abdtZKob2wGBQyVV8zZLKoZOl0gWvu6jgi5S4/0iM10LKOS50vhuf8crJqowoKxzXGhMTnobnM0wB7uv/wpMFjDux9Gxs9nuERoUp6qd7L1eVHEMNdyxsaiwb4A0fSVeUvHbhI2M8p7lHutqnAW0CHzZwCi2m1d+QW7cZOvCOI0saWa46f/w9KG8TsVVQAHok1g8pUqg0lYheBcePWo+usll3gdZxMTPYyZdtKeX6IRk3eVIgB+QHpXvo9JDGoBGqy+30MkR9xg+PdzJ99XrorD0Nnr1wLKlmvz/pzecp1coX3u1U10rpIPaObW3fp9eXdU4myU39/Sa3Q7enZ/qzeBPTPSeh5Wg+cjUte72S8yKh7pYm2EgMTg9Gw5uhvsLcMoQxQT9qIqW3vwjAq+mRxuykCHj0aue7HVNig5RyyhAGK6rEA==';
  const _INTEGRITY_HASH = '95a74781f9ddabd333777cdb8a7beb27532d3ec5466ba1f165fd2dd5eb470186';
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
