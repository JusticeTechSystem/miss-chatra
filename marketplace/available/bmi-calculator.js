// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nOm7qm8BAJ00md2Hmb/xq2YhDZe+20PLckLt+HbMsK8d30kXAxW4BT2nCHAJQCgATr8rqyJSm5faUtFc+Bvhc+93CCFKhKw0tgi+UecVvNwAEN4dJAq/KZ8cQf7HV4rDOyhOkgfz5XdwLU+oiBaXPHc0kt51MToXy7j7u/ur4pOKmxsXrt+Hu8teOXy18Ox+qoxthtxwHXUm/wBKAmCYBcO8bnzMvD5JxCedVsjm7EENNtEJXJxEdsuOMRYCFSSZ3Cx29yVCznnU1jr59Q/jbjC4Q9iC/ytPUZBNVjt0ieomd3ihKiTa+Sq9qEWDjdMWBSW/0vLb2KEW3NPYmUmicDYBBGsG1mbdzokgVUthxN7BXw72nBsZ1hWJMtnt4GBum/XH/deiw5PVOxAFV3Jkj5i3kddVr28wHVfgGdYj/4i8AGxqZBGXav3U2EVRL1mcbf9T/nDdkH7rk5WrZs3vk6LZJ5Izj9o8UTzHPJJ9QSn6Fw+fhCuyHbKKL9MAe3UkjZkf8QrMSVEM0tegcP6hNxqA6Ard1LViC6eyTqfiv/Lmc2OlyrkXEL0lYRs05CwGQrewJrdeFX/L5TTAVDAexqEruwBnHKugir50/np5l1NNQ73AEBURZLDxWJYzjz/dPT8Eon6EYDx5whBqXGaotDvvTJ7JD1BSNOVcV8eI/yYGudRQH/wB3UQL5bqFiPtxU37wuVblmPjpXK9Rz0WeC6AeCgLkzXRpQHxA1cWh0G4L8mKudhaoZO2zPlqkbmE0TAg2hKPQm3n9S1v0HPdkZR/eISX4W9vvJq0MyfG1EOHlVTeGbWpUgTREd47dQmG7WeNy45t8jxK/c8LMkpQW3uBm26MNylAYyBELxPJ21FP9vjburJZCukgBqOPlqSeV1oVS1YvmsU/fk/XhgG2YgU9MOvQYzVJr772Q2mc1DjFl8IXviwHlThMdALrHq8oxWNa7i2ZrOqxKAZSxLTRyt4ATiaQFxtZQ5oJyGe8G2Lvm4l30vY1VG5KZPBuFPtRRtPjqijrzu9BRYzDx+udkKS1wxu0IR+/32/wzpih0YLscHLEuCnJ+gAqq4IEfloxmi5GENlqmf8p1guzhqzHrxZ1xs1K+AtwV3Ml2miIx3odw6L0weHBgHDU8y7vTPro8K1Y703VL9Xb11HaKuyX3kn/Ur/vhhzmexVh6d+3a7Yn3J1bvW9UtsWTCjGX/C9LVvB1q3EaxyET/NMDi7D4KXjtyednnWCTe7uV+rSM+IwmpKPupdvkPDBCQmBgJ0bjOIevaBWuTXppx6XdAyDFcJqi6pdnpSU7l4gy5YMq6VdhIwIaUN7H1AQ3zc8A/wImC7GS7DLfIb1v38X53rSGV31NN0sr05TaTDnzyZtCeqorUq0gX+1r+XGHTLt/SItSauNNoMuJ2aO222Ng/+/7JHQk3baGG';
  const _INTEGRITY_HASH = 'f5270cd7e76420d4f94e112366d3f425c83a176c1495339be0eebc41a94b0ac9';
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
