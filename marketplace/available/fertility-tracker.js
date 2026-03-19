// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uKmL4zmph1GVPwYE5BqhJJlDUNAk0DWAAZGk76qyhXSlaCoaC/qdHachjF5jpItTKvlxX7vlj0tUMk3zH0CyfY2ieSPKh4g8727cn2QFKBxJcV4M+r/ha7ArhOtZKzBxegSZYQebxEG8gXdqR+2kO34rfm6W5cc3M/TxMsAjBk+klHn1HnMWJRa0pNecm3iZGYOdzHc+0BWRYIZc4Yuw76brKd+AoMzQlEAP/K5PJW9oxsqwG5A8E7THP//igesvcPnYy4ZXOZKh4WFCPzQQvR9gb7fc/rDjP6nJ3xZSk8jD92qpgycpFqbOXbe1SUia5OxIlfupZEVFOk9ba5j/4hAQ2s0Jg847l9xB0yR01JkdUM9roFkor3fmFMP90Qb0s092uj9s4HXHQYqjpodSZ5DLtzSk736gLmj28p32m4Piv5QkRA4VoNb9vtxxvPEdL5DG0DJNCcCVlga/Ut8ig9zhHnMIwEK1KpXDsgXn4Ip7VuOgtQv+DcX5NCDuPJj5f8NwGRaiosjB3RrBcbUnd4aYqlohxy/JU+CwxkN1LZ2DzKcIbxh2lmbW/L7yMxRDOO4puUaszhR9pk7ShWnk4k3CfpjAI3MUcSwDnY4KOxNVRnuEDkWD1i3tAE2Fxl6nbxWv8ujQwmI027lr18qBMOq/M0h9rViH8zuyFoG2IvPlSkJLQ2g785/9a/mu9iTDWvMXB4xdcVGoacVTqzrHSp7/7A4tgZgFR1wdCEt0YMuYIBGc+MNtBfWF9vmHq38k4y3MzpwzaQWOS/XeShZR8t47n5zD2Zk3AQQLhJ0p/2msrmh9hfSrXn88zh6tjLgjgZHwHFR3YKgChE8xfRZpAEONWbhmUhh8JxlzDhHkxrpRcUar/PxmaEjLyZ5jvh0oHOED6JYjmZa6uMwm+ufz1DL22GvUEFmYCMqdh9mlkXQSqCQHinGtyV3wO08wMpCXkxUz/kxdsqzoo2bvit3r4oFTWNiwuSHREoj+rTnJjdxjM3k6+nfe+8UEfisR9Z185Q/yVozm5A8wBkJNrbFTUz+0TrWTAG6rYyx+hORXI17c2lvhx40YtYZW/vaapDeuNPWjELo7ColdDKeO5yTDJwOaiRqJkrKVEhUt3AqGGWXlRjLtNrll3btVahfXHIH3bACsk81WnrexJcVMhYgMxjZgfWmYvjz51v3Qsh1SYELYf12rsmDlK4LGuJ6FRYCcGWJno9Y/eBN8O3Ic95h2mtx3BqfAzUIr1+Xx6LHRxnbeJ+bxNz3id7Nb97X5T6AlkLGbHtn2cBsZ6BUTxd0oW/j3jPISdWbifcrtqN2VdnGvbBNAzs6F5wT1YDelSVVfQIWfTcZ7nd4lmDAdfwXMRyLX01rZl3U5aAqxgNzxqfAOQYF7BpSxA5wtRgJ4zvi7yW7KHaHnM5ViYvpXqtDCsX5pSiYdMEWmI8hJpIANagplYNSIvC2Q1/Sehgtnp8oBl9nSERvani6bc37pha+M9BJnvOSIj6pGG05giui8TWT8VAPnFcrUKZB79QZU40EKHKEh/bDXRtunAcl3RGtQ9L77V1COFDnAGmJy+Dm165aovs61iRSqLDhXEYJ7UO62MWUsHJKTIBKRlkaVz+GyCSwN8G/i6SyGlZkKQDdeRV8HFWOpVXTHesnj+it1wmaet8d4UEW2MhL/ymwkYDTDbcF688kRHcd5LaCOEy6OLDEZNHMG/EHjEUBGhPtsngp9abFXQgAuJbTWezpKCu/y8yUrQxvvAT9ZmuVnoj35R1G5bIvi4vg26dEWo48YgNH0DW978i9zWW4p3dIPbZe6nTl9mHShdhmtqxLtlJCV4tVZtc10+agk';
  const _INTEGRITY_HASH = '9820f2f4b700ffc3bca55875e0f1f33fd933cf3716ef71d1e439ff2cba2c63a1';
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
