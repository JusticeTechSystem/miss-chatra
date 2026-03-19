// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fkMDWE+so3efkTtM7a5Lm2KJEPE6oJyEVCMNhF12YN0ESFcQPkTpflrTC/SCsmNkuF0oik7haUK43gdysOMkgEpZKuXEOEToCqY7T48PQd9o7HE9PnIOk+aJWTVkpegCPcHGIndkkFYgWio2Hqs7znObbi/CUz4ydiJtXvz9XdztjUy40xFWT5oit4v5+az/ysZ6VFJIWLBTAvRJFeLseBpl5mTYvwMOVLLFY3DAHK9sLk8RqPEWPPBKHueaGcvHN3r8Rm1KDoCYPbP4mWke7FUM6hObtJ+iWAM23Od8hPK07GlAuASJNiVkAAev4tE8rcVFrHfoHS42XMU3v+xpanEC8UCfjAYJE46ZuKHG94TM222FODT9U/pgRdU8uQlCkf9O3P907V1FjIiWwhXOaaPJHw02dQkam4+KlUFtaL53f1/NgZixrehsSf81aeeoPZjHofgc6daG0wEk64vQY0fH4WROpOPvkw3BOGMIKORMnqFiEYae6rC/g5wv/uwrTEbM+q2b3f/H7905yBhwBfF28UfU+U7y3NvpAUBQly41+mZkZvwHCqmZR+2Imjp+Gob6Ne+eYvHx/cjpS6W+CE6sa0dB7FPabD5jh0i/OoSSq+qjaayY275liXkxoP7/kcBAMOXxv+DqWmY8u2dF0sdX7qK+17gcuwZ97l9Ub2gbUEE+dzBapazctzvO78dWtg37uueKuNUYUkAzeZapP6fKPioOlHvM4Kzh6yR/arMuFtK1MP6nzMzIJnGHwmVfVf/+13YgQIh3yL5zdC046t+bGTVO/u63PfF5Mec4pQMCYZMH3hY7Q8LUq5sdaPs4OCpqs7btzrF4iMN/VFwbPBP7NBS0WO43WL7SiDvBZeXu4gSRzEL37GXxE1w0zRNsC4d3LguTaLjKBJhwwkSCB7OPrazyxEwk+DLPME/jpgWJcGFioZ1Ks1O9r8Rq5isb5i8f6VeNPlMWVBBklZvRQkU80Y8DR7ioep0k8n3iXAvEADW5Te3gWcFWa6kW8/VEPnM46/cvEK2LfqZ3vw8zHNGddiY9u3pzT5VFYCpAPm7ivZNV1JQ9IOxhHVVkzACxUmuS0j6VbxaFvGJRP0uRCKdQPhOqTp0Qi8bjMgK9m9nDJDr9gB4Uo4NpxeazT3/dtg5w2whqObpkeJbm8jSlMZJ74b45Ff/VLoG/eD/J7Oz0vxGr1/RGP+gYREji6/8YiEWzWYJ5sRcFCB9Gg/ELqNfrhOzTjyWASrzRsVvWp6gur/QcMwzVAylNHZu+lUgDICQ0xYIfc91VzFTrqrnxt3nZ4nGSXUD61FDbYXFtFUlRMcjsVz1Qa3tLWFbJEzG/HCXtxaBm6r01bE0VCq6dAulbR6v2dUkAl7z7rSkWgsmhLuR0jH91jtdLycTgWKYa5JqOu2aN2s7CQf8w+4VfwOOCxq4TWmE/kXQg7XFTJcrZOQDOft48HNuf5o41I+nlY/QMi3ZC1dZSgOqO7npLF4QTEuN8Qu/yZ+3LBc+XdGOXicOmFgfJdwtUH44T2ntO4gLiJj3IbR7f0DFAVwCvtMmBu0ERYeHpPTbqknN6w38zeXFqjMI7Ck6B3WEFnxUft7pwnUPskNNhJekgBXwZ8oOfpXHk3hM0JxH0orAzb0h2oktaUHsMdHXg28CNEv4afXyIpd1+UYjWO31LJ29fvF2InlU6vTmuSQ1+OQanQ2q4Ys0NRYcbYPbbm72FDo2ClxwAf6LBTQJyZnOzZB246H1Ceer+u5QFPSc38dTYGNV5cKLflp6LSxoRFRxzFtTX5/I1eoi+NW75PLK8pAJKwJZqXtRzIDvcb6ltDZRkYT4wdzCMMZXcS4stJ71qzJxidjDBwxQMzpwsGuOJlDnUwMuz7Pjpw9NzF+xRN0LTf8MeVNobmnLRab0GhLtJ34z5S9lg80sqybHGciHd2ReF';
  const _INTEGRITY_HASH = 'e88a342f1d012fbfd708d34d690edc50127116b51f9dc008ce561ddf7e755584';
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
