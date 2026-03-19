// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rF8+1hw1Q3l1VnddJkVVmBOyTF0qD0R5zG91XIrfzaTMp9PP9fRjYMwW3JYZwCc7aEiynW+wMfdk4p3SQdgU+3kRKXZ4F+ms+xjZy9G4Qa1R6WGssuyK7rlkwIFMjAOBH8mv2ZlNPWQ7HfAoG39Py8yTXTlAjA7syvP9ClWh5Exh9W8bNmhVUX16uZUqYU0lL+znqCei4GTKgnafoK8HQiqycf0GmpYiRKi9IQHrt1v+XrgqaiykoQXXHiSEDhuveW59NRMaYv9etWX1yD9TnF2Ga91HCDXpwVp1CVqmxnMWz8wRUImuZaiEd1R6WzySWMGse4IK6/1RyhCNPbMkVR7FxqGPfWlTamR6sObmwgmja1sGaX4tu/tPikl9+nL9kMD+Fo8EBgaQytHP1twWiAmLW8pxk1eLmY3eZPo6RKkKx9oMqS1yhMiWkdDpn0r7aDb4fSdC7HEzqeDnzsjgu2HyGCK+tU7FGAihJH6jnFjHrosCIfDCZNCOl0d84vHfA7kIrOi6NwHlTeENkX16ZXqlXiqtnJMXlupr8hxktPiwBK379rsRcso3ngPC0x0aIAztOwehAjOvhQKD+yaL4FT+n63BvKIqld9pfIUdgE05D8p4rSRPm5Gh+EmqJxgP+Bswnr+qsEAmOLwETdd+tYm2++sQdo+z3ztw2N+bvPYpf+ZWqG3JJfJXTn7AWG75mdpt+p3BH6MOIvczywBEBetZKbjO4HJZfx7ZjAyKlKXYBOOt0VqIEqV8Wi12+pVM/VWWTMa+sDP2f5WQTIAzW3mDO6lhHGfkJfMJ1jp15MVgkFBnSfuEf2jEm/yxx/XwvRUznAIjyVvBajzvKJPKP10Iq3tEnjTBypqsoa+ocrJhZunUdumJDcdelS7MboCIpCvp9+kA+XC3/yHwjrny4QyB8WWehOCuBZzfTvyOc7QKYQUzMf1uQtbzt9iElOf5v++gkSmtRshC6XNwxlWkflrOcnXzaAxGu37hC4XNOY25zXDiyvu18jG5ByO8/AsK6t0CDBtq/kLOUyXRpYCbzfa9s4hy/1zKzfqZgUAvBM9dZkbYbKQBkKVQjEQOzMGyddwCG3e32qB8Dtt4IW2S7w+Mo5CeyIJm2R51QNqdG9oOtnBMWs2e4FM+eHCJsMGz/3AsD9qv4pKd4RORHkrSwGqFRGonR6lN0Sr4ytAqGMYX6Ju69dxlaXjWnV3TRW4moSAb0cmNbVlJWpneboPzuc4HDnU=';
  const _INTEGRITY_HASH = 'd4fd9050a0ff8bbe4c223d13ceaf0fdd208f42cbbfc29a72a3008bf91aeedf66';
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
