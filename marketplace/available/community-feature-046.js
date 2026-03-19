// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zbAf/YGOvDc6ESJ4byKV6jlf45GUDfPopRyaShHNzrmls+A3AQuw8Cx2I6elBBidRXMhh8uJ9W2S5SXbhCF8dm1M+OKF0aqs3DQ8EsCMcPtkl3tJdwxb/h34gelmPsQFDSQCP4/9FuYbwKMG/JM0BZv8ew316C4fhrykgUW29xuGcyc+91JFJjeyQbv/Nethhk2ItPNJiGa6eILxGvV6kl4J3f8W32jKYuFOxG9/SDJHKDMiMffO1R66z8wVmBDRHhkTGfueM0JTtUs9tLh08dVpFk8JmLvw2zStYhFix+IFVCZMBt52TaF3XKkfqiqWs4ncp/VDiKC6Cy7/JHui1gduhBHdR2z2PbeFve1cvTH5ULzQLuvHTzhE7ISVZ4oasV9p5oDhyr/hp2g8UOwfSGK2soNDpJGcTTLHKD31arvII/1CfFeAmCMth0Mc5fJNN+9uBM0E43Fcwm5cPjOg5+Jgt9s2fqFsVcQe7B5mI/38Ve2NbNnDJq84zXwFT9ydXNKnARCjQgi3mJkmwmM5XCf2ZyhBQljausQPQ0kx2FP8lpbBc1FazYPrTgrrIwPAKOXKVyIDJYtpILZ+bmYT4eQPJXWNlaEHpR3gwWnhry0zyEALtV0IMfk2FtZngdbh6q2k1uj8ptqRLDPxL3/wEX/vnHPlp52nFLgaeZw51naDObuHfVxejgT7LLZ0tH09j1JVmdmiN/sqsL+ucW4G9Nn1gXs=';
  const _INTEGRITY_HASH = '6eaad01de412734d101cb75e9ddaa397e97f8ee9c2fc2275b70a9ac399def547';
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
