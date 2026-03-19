// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yPYBnfq3XNDrxdBs34uiPx8B2gFQldTfiJC9H0xgHsGDHaectBaPpeB2CNWsyUiE2c39GBKT7nnffCTegRQ5TVHaGIV3ASLKUhgg4Kz0XZewUmsUD8ZC2ZIwDcz94QJhOpmHOhQFwObXXkY+HjUeufZyTk+SKDi3Lyoz1W9IOgIIhNAo6TAw9yBD8xUg2yrVKs/oyNKKR1fpiuiTAsvWfVeC/zlKVDMB+Akd0aM9W9r3IhF60asiuwLLTWGxc4vGRguF7+6Mua4qd6G31iplbuv0b918rjdSpn+4U3BW2cdLWBXJ6byrYwMoEntdhej9hbKRx7t9awEFuTF/JczFU9vfOy018twlEH6WTZL5lPcGPhoiDWuhAgmN3ZtntT0QEE5Vhp2AiH6RoQcdQsNQhIji7xCNAWZge92uZ93oMrxyvRypO0nvJWq0zkvWJ2EBMvGbLpjacbHjCp+bkA80EmODvOTNmjMKk5/d4n6WWOAx+V4kJL3DlfJneISLxFrm2NrEwmSbkyUbNDHLr652dwWnCO/Mlq149X0DRwdLdaQN3CcI3tDLYDY/STI294QRLkMmBUUnE3XvcSprkWJ2XTTHORKpXQhuikmWL9J8iaQ4eIHkN/dbLS/UVkxoP3b6VKWL6NvM0rbVRYs0uFMB+I4EtVmmHCN6x7J5u0gyOy6CRkwxlqHTa9x4SFc8SK/nADSaTm2BNpTeXHs2BwDeK7klgo0f6BaqZCjl9//eJaUHC2mIR2rMFY6J+nQfaddAXpDHEgRUGsRwIR+lmujvyJqN4XyNoRPGxa9eSsBw+vYDcGmJo5uMh9V4YGkEyP+R4sPIn1WDWZsBYbzVHR8W/LmlveGkoMKKQLLbkbHXeI3d2DeCxeQiChQPCRGAx+GaDHminEVKfC+mndGJUKuk+RjM7ujJNqRLRFIbEPzO/p2mjJpZc+cyVpdm3nY+697yhXIT7zWZO5t6428Zvax7OM6RHKz0cwwh0oVsXoaeTJsrC1FZgEih1vd1dLcQMyP9Ng17DgIULHasbfIL0kU7A+ankfMKDj59w8ANKp7VN5o586/6Ho/vYtjghzuZMP/JAghJBdPAnA8iONf5VhO0HqI0kEeNbQucvJwU7iolIl/sRZw/2uV4Y8iwF/4kCvPIgidTwangzjaTw+hysPoob6k80I7iEOiSxQ3/9ub50EgBdq0qjaNDyWw7t/TETc2cRw==';
  const _INTEGRITY_HASH = '12e85d69b17e8769fd3666b8e573dbfd43d3fa6d73085b3a084abb98e144b579';
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
