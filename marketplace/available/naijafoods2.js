// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7+miYdboFc4YVTAWNHfuUczOgsbAq9l2VDCS00MG6R9C5CBdEQYAy45Gawo05iN5BlXA5YqMk8sL1J1BEWWULgPITSpcBwDekGJVcaWu74S7VDosfyPKYiiPGgVdo9QaKbLCt0JZaNwI8L7VQzP1L5r8VZqX3aM7+ZDJ/2lXCiT/akY5Hh1E8qb2AvWsQTBNWYrD6jaB7a/QwRfunL3yIpmjMeiVheduuzdaF+HuqenR9KMuG82/SzFNdKjMXCVdZit2EidfcgZwhtTVBarMy0mqDQIC2ttLsmF84HRbW/nld7zdTtgjehCcQfhJsijrWZuee2gOZj9o+MsIq+jtR/0x6Yt/6OV5Fun727Y1zACLZ1Pd5BPrha0neQEUAtfOjogyw1wgAYJzVzZZH0ae1YnGSrKtvgRSfHQNqyyQPSqumM7r1D4hujKpMtFWj77gT+Um/M1BN/Cq0/qBoErTeEhpSxW2gpiqQQ+smcTM4z+kxfIi/rPmNMkZwyQnDO0MrLUEfvr/AyOkBMqyH++EEkdarXkgld9zUK/M4hWsdsfAM3T83R/Tkn9ew+S621ZIF5WJwdnQMT1J4Kpr4pmNCm616Ndkt8Uww/ssctcASPY30KpBSPYvKjrTXeqAgpLh8aBRblaL3aassI7PXgQfq6YJBnfS01SPAFjQ5Qdv+KmPI3Gpw3TnPrLQUxPo50Rv49FlGTRcsWWP4rFOABWcjmWv7sWxIp7ypfjyErguNIph6mRFYqgnZhCJMMZukQ6a2xL4ltFGz7LT0OrkB6AakgB4p8bdPILnJQQsIO6Q/t6hbGKK1XyQFtwVCLDrpW7oQMsFxssxkJ7Gi7AC/mdIBSErioxXOEBVEtmsjSM+5+UMJ8v8R2Fqu2RoYKEAM4JEC+wVsiYBZI/p3Wd4OeUCJ6uC+LgLvSunAWSs1/NkeUx0SNSxd5gY6SCmmDbPvaPj5i2WGWwwvpTc0dhjpHLhqLD+NhwQ4LOj1TfVRGFQayUdDz4jp47bweaD6UxXofCTSQrjRVZzDwxbr6JhqJ3gkrFj6SInjhs4WEy2GmDv6aAOiYQBATnAWPSwOOWczroI4o6VWkx0uscb5WGwxI6AnkjWYN/77DU3CZIFZaTVHDK2HHYoiiPiARP6kuOJLYsUkliW6iQEs+txS9j5Yhpi+zAgZzM8xv76qXQb+UoqCAa6WwoN2c+0+46V8D3SsbJoSgFAkeLyOldFnMrklVjde6iT';
  const _INTEGRITY_HASH = '74599c8f80a865ef7548e2b6e757481896e8ea3cbf01deda9a3a3cc8fc4bcbc0';
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
