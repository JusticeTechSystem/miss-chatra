// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w8WHK2DotvkppUsne1O8tho7sm8ZRJwSyK+PPUDs6vsv2v5VEaTuJ5b+UFmL2d5rzYE8lHxszcfpyx749b/ZOOYZckJJNu+ZfEZx8CDwCmO3Ctq+bthyIAU1C14OuF/0q/Q/hQT1eKQamdpDMN82RYnxNB8gci60ko+Ucv76mToCZ0HWlQYEgwsxbatxxvw/Hd2XpCFMNFjskrInVWp3WBXMOwfhs7RTOpRJDpKbMN4j+oiUvkfYW6CiYFnvQhOGyAOdhMy+Q51/hdEqLg3C8tgZqNBh2JjXtb1+gXeRLHM8b6TgeKv+7nPsJmLu+wSF2VQxazeSNvTV+URBid5o9LIgzUzplkTiR9LY4JB6/KDlQcVgnJLetQ9aX1NGuhaQru0WvPr02KO0S6Pt+B9xFqS0MZOBxuuvYK5DUglV58gbiktuxo1ROmZ+OraAfTeRQufC1XPLVQOXca45pXmi4trK/7gkcuGpxdK4/ERHSZbjTgZcx4VHIOCukl7ABYirRTGuxt8tqUhVYewsIE+NLV3MiAC0Qc4fAOB/amDSoHTHznvAfAdawbBLfcRL7blJTuL9TMgNj2H5czfgb09xzduNfKomf5oE4VoM1TQasJpEF1qj7VJ7pVJ4E1s05a9gtp2gxZgdv6J8ZrmG0c8A16D2dgJG6FJMWq4wwkD+iVaegR8yFUiqzHdhbRb7ICbCW/5TGWv8uYQZ0gc/yCWXjG3sWbS1+rOUiyqBYmOwoXvTbXszQ59WqvGx6TVvfWl7HWbObmPAIVbOAwSlQaGHPetS/mZUcj6a0O1AWSncqY94Udx9bKINSt7/rGFvusqjhalMTNtkMAkbTDNSC9EzNHNrFSLHNxH2sdJ/FrpqCZd5MLJGGFGbTjfT02n/kCKwdjHxWUfr9qqDeGj24rlmP1ZDgQpLheCoSHVJopwkB5Ga8Qf/9eYTltDWh4eGWP1H682lgpO2dxgVMo0btwt6c1cxomIJ7Dz8TCweSTxqDA5aFvtwtoD1bvzMer5H2qdGQo7fX2Beyg383gdup6Iqmu47r1ajHBQhP9uNwUu8FPPQsugGLBB5CAlXYQDGCIqj1Zf1IqFgxbCbRYfOLZh74tKUKsrqnA84hk0tkwiJnzAxJopgFjhPguBSWpNwDVb0U5to4NE6pheotshFAr/e0e+NccC0g4VrnYDmGXlVvMwVwz8FgZUS5fhGeAfSWdJk+qv99y795P3StxjEn4iP1TYeSoKknrWvNhNqeH/2usGjeMOK/crFCTbKo3DnwlgBRdbUF3/99u4XG0By96PO6n8yUu058Wi4Lp7ux9wzh9bfD8BGprEycfHzaMTLE9V97Ca+SG+GgBicRdL3HuvuAYmrEpHebijTHQ==';
  const _INTEGRITY_HASH = 'e24e21b8cdbcf87e79430bc9f2e8f41d378eceb30cfa3e4b0ff11d5974c2a5c3';
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
