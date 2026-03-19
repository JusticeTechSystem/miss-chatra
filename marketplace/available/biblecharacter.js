// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vryU3qvrdl5mLTBoKs92BZAUvyeXoJLv7njQ6o46ho7Gi9oj+vIWQTJcacMNSBogXgZDdwihw5CZwGoVO7NsutyusNt18Ye5MnxamsyB3NDF0V11FjlCANg7sBPVbPE9qmaHJxxXNC+1ThA6nLJKGkfV1Ig7wpZlAJT6FeImdbeVyRIy3U49Tg7e+6Lev3QsL5hwqJmMqbRK2gVOwpCVTq+dlgpMkp/kZDGRfAqifuoQ6KIhDH2Ns3QmIFE3AXmLCjAfmTQVw7kcgdxra3+5m7vpGkUByTzR/2MIhrWe9yUQnZsD7TwjxA5Yot82DU/ixU54nJHYVl4LnxEQBGDpJopIYvmYO2P1acWYBAXOy+PdrAPJGT6NeTZ0REArJ+3TOv5e4sv69QfxC07D4s3MmN5W1GWMDyHoM7zXAU1oKtHDFumtmufMQlYr60l4xE8zywI9bbcwpDK5hWc/0NBGNFdMiO3EQFDNEgXw58kolaYfR7j3FDty/THgILQacMp3lfwcIafnInnm4j3mdEChTSfGcch9AmfJACnPbUGiyo9yGqGDaYTKenoIBAsMa5UOY3Yhk8LJsI2Pc4qps4zDxq+zaCZDwFZzho7QlG8SR7v7hJ7wI82JoSMiz4lHir34dMh8pgjwc8ZP7DlIiEsucEhSBLKGqBJV+TyJlKNZ3sDEGNeBG48LaTP0vhp/C92r0+2E8vR5ZNXGY3w5Pdq+kgzUs51E7kDxWKTunDM9P5VFCM7+BYnVYcsS+wnT7t/19ITC4UwC0pFeKENn6Is8/v5oS3iMUPJGI8QjVyk9jzl/LvpAiCTS/3wwi+M1HMnutyaAGuC1EdZg8kHUTTslKdNHHBN+kuUi/vI6YaaHKSKvEWMAAgr5ArjPkNItn2zN2webyEW0sdS3qpWpv5PETdPcvq4KO462/QwVh9o3aTp17nqeBVsrRw5mLQ0UIYc7LJ2P/LxGjr4hPJZdb5JXqaYdFvg+KkENckhPCwVZQ0L8atWr2cmOLkdGYQgzAS2SDd2wl6ymkqp2hjaMMlZTJv3AEDOqjSRllGNistBt2qc0TR0d98Ag54QCK/WI9l26fUmHN0JzGQgOEVgLNMk7En8pYYxUdT1Pk8NtB2GVT3HEwjmGy6PBSuQYCzPn/H+JDxaldvftO4I0Tx+ezJ//It9jkWo3fQsvNbdhx0osVgjTCFnBZvrZWYLqQrPZ3Wf2g/wIceYkOthhyxze0Q==';
  const _INTEGRITY_HASH = 'e091df6ef37dbd2b24e625efd24290a2279c794309a34661b61f2024c816cf18';
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
