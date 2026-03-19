// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WDRNWa+7HqzrNpjkpdJTis57JHcErx7oq1yGPmXElyJ0jrBU/oxCqADV8C+vFRrJm8rLdPGimm7VKXS0FVmLWZjIrX66YXrZ/sEbe1NJjRY4VypOiRGKWnJE87qTQXjZiBLbwxZ+1b2u41i0x3dAmKOAGavJiXcetG2kuAjRRVSIubtaBqfe7FoYEwZss/kMxmDfnTlIEvW1435dBUzZthgQR2W8zvRWR7h3gbulyu5S3ebpsHM/B/n4FX3mvMPIdtfmw6VFvcrJL3vQDx6zJ/hRjoMnyb0xvaGXubCYBMrwgcKGKTpGuJkReLJ/tnohupO22ZCXxPfav+V+ffqwCuXH276OsPNLqMUCjUklhskDZNUHvUD1CR9YpR3LFBze0+p6s5Fi3AJkPjTiwoNVfzFWsG0DU/KFJIuP+j9POqt8+0Kp+w7/jqlKGOI1F0FtGyXPpPDRGW7p6r31AKYxXGIdlkcFmhkl9Y9+iqL+Y70x5e55/T1OsMCB2Beygb2yU414rGN5gKzTp415D5JdP3ZKLHa/OI2nUVusxVhbWBvvJf0RMBo0q/UtcI4dTBAQiZZYr+XY3iXJ1Pma3c92DBkUMUUQHQ56wixCaHOM5/V9aXtmq7EGHbCKeoGUoJ+fQF5Gun/C/olpeAAcoJWTwvbt9MMMIoXCpa6AMGEQkU77Te6NIF1IUv/v82IzD1YM5b+HEcn/ZBvf6wnHV7YJHQMNByyCaIbssQvrRYjdIQ==';
  const _INTEGRITY_HASH = '2499d9943594a3bc679bbb1aafe6d6fb9666a178951a7edc4699d58075146d0f';
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
