// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DbP/8WJmi6h0yN2S3GlS37fiTCblzFu6Iu8DhERdcQt7NIBmn13enSZzAB94/jmR0lPePHyhA4UDw8Jl6iCyhoWAtIjWkJZfVLXdI9Y+Uj6tY0DjcoTnxsGye3/Uajjth1br16BNgwmERaGlQEopM5Jp16nuLeErmBRsonxyMsjHrYrJ8Z4QEVTgCo1x/Dfy2tGiqBjeYwP5mTUWDSPdWbXkgKTA2OMa5ByoT88e6AAoZr2vPRdaQ6yfHag4Ws7RRSkNDUhRCsLvrdotC84KDOBvMwSpCaHEt3Txkb4cacrIf88iMVMulToHIMF6QI5+ECgoipQTU5TciFGrZ9Okw/u/JFT2ZpYreGwZwlKXj9KhuJmrvU1sJsrobslNUSdVASMV4jx09UmJP+YIov+D0eHXxEi1P+7HkHMCevp+FFNDpkAnsCZg7Y/SkXofK2pe6eG352HJC/ehHL7zND8xo+OSuEwP5B4MOj9H8UvWBFLjD8wiM7/ofDYAJYZvuEF1RPK/HpYkSvMoVkv0fsd5M1Y51Ww1YMOvQY6g6P14WkHtV30twjdsiS35nU9811/1DCuMgRW/gEF/aLMO+XsH70L/15Vb75Zcw6Ip2cqysWCpz+JXOOS7yq1uRRwhOm4NSsjVGOC1RcU7eEf6g7yBvqhK5I0qx5fZ7UiRzsmhzyiKrsbWu8pbLwubMTgUNFklP/5D+b0im7VP3rabPkbtfsemA/Ui/mr/A0FP4PwWSKcgDgX9oNkH6Ev1+OhOSe6VGZJDyWvEAUx65UlR8amaO78jKXkaFEW6aiggkhH5t/Itxap/PakZUpDWRKAqlZJoPfXGuEuWuAfagliGWOqgLvCdZgOf7N4svBHQETNSKpMq3WGQvzKuyZrwue63diqRflBgQbSHh4VeXym0ORBGUXF99mXNpmRYNIz+KXIyUhu/jX3AGftuKnbsHMzQM1BMuvxXnBs3A5y+TA8FXzv7V1K/TXncNTF+hho0lbx3tGkS8E0fVZyhK/x51VhsDAJCM4q2OJf44H36fUkZLghHu3u8xYYV9UkAl3FFoKuTV4+ilNFniuqBxNaS4Xh7BsB+W9PXx2rSHaDARAaJzZOoZDGhsNgesWiJkDm0b92U3M8LWiA6aALsdLnl9hAFe8mlQk4utMV+O13eAxx+Ltme2Au71ZMkayBn8BRS558IMV/vtkgR4ozC86kkIa7bu3cRKBCDgYu4yJED';
  const _INTEGRITY_HASH = '6ddf81a92f20f30235e78ffe9a348ae33d9c3895f96804d74d2646fcb20d9aaa';
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
