// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Dhg3ZEvoItNOM6BckE4sWrMU6/WJY5KTvEVWMZzEl6uuQ7or8wQKjWlcakE0pwFJAooA32gl+eYBHKLUG0w4j0iRdg42u7IefyZVjpTrQS5EeXlHnJvZuL5xnDhEhC4tm0uPR2CL/53Lic0Vv3uVJHpL6NiL5mYm3j+oz6/qKYnxcgytqxHt3/FYqq5PbtWu338AX/lI/G7lO9QLubwDAl20yt3PkByNTT2E//BjmYfKK0dHuC3f7RlRXNCPyjRMNuLE/RzL/jhhl87cKBgU5Wjw8LOL8X597Y+QBIuzhNdwHfaa4Q9cjcJZuHKttkqr2FHfCd4sG2ssI4ldmQWkOwRj7PFo2FCtOXyEmhDIUfNZfNDLQwOfmrZx+HfxDXeX6yGW1Vqq5jeleXrf+jQb/bAR7B3WgNnFyaKrZjQVTpFb8VpcwnlBTZSRoJBJlVnPdJ/mlrrHt4/UGK3RBwSfd25Lzwfg5GV+IOqG6HWJYgePfo6IVv3792QrtgBQDMyPl1GiIERC0EaUh/JAOI2axiylUy8B8JZaPtwxi3PE0aDTg7y3Cpy9af4UuliUvU4AQVbTZRvfOVo6Kp1hkzhvwYt1QUJxqmYkgHzIy1Zy1SOyKDDMBprbDJPQfZ+HtvXXeu9G2pXrm++cWrdmVnCX3TWyrTBj/aqFuzSRylXmCdmUA0Jmvo1qdvy4E5aNDGDvGuMHkyGGOEiYmNHLnRP5vqdEHnJWFKJ+Y8WlHH/LS2WYgYb2b2BdFf63VqoXAPJJLKU6ceLnUyQ/GmSFmHds2BPqv41UQ0xe1JEKAQDaHYi3Au9ojbG+nZpnhPO8y3Ppch8CWyrRAGzVNEQqc6IjVbrYI+6Ixjdku/KuI6cCJ5Hf45nI1V7tQxwBQZJvOy898jqNDUU4usdD5aJChUFl9jCL1Q1XaEhzF745Im0qbJ+mwuAWkn5/zRKAE4GbCsQ6lqLot605nER0elouat/uIseGjS+0rrWVaO5rVjLGaCM/50lp8AhWk1ojc3JMeOjEXA==';
  const _INTEGRITY_HASH = 'ee58a24aa567fbee2bb630b658f3dc7a6b4bf477197f5d580399155fc4da0cde';
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
