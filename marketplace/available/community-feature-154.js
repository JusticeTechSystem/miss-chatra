// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rSFmmASt95iyXZzfQmzJTSe/HOoPXe9Pm4J3IRwPawGwuc1LLtAucDwgwWQh7fKHMl1QsJRP5h4oRQv2gs9pv/3B+dXoNRltjeQvtOUypku9woDeIZQYP2+LDP5UP6SkfA/BhDEq0dmO7i9PbGX15zzQYLM1NoZal/iyEDLWQB0oAQGWAv5amTU4adUhUqhsOlMxI8lAJn4J1LKMVX/I+4+Leo9B8dVS2XMxfGhJWSF1MIswN07qmoZI4WKi1U92xFhBvWncupd2fqbXCdkDiifdkRBE3g/ZlZqTv+OCVkIsY++7mxpVvfXkLhSvddZ+BGYfXetiN7GvZDmnHsbp2GebKUgiV81yUm8hqluUIZ5QLRSdvwqIKHO+7sKOdc+/kgZ4vO13XP4UFkccvA7jVckFdO0OIo/MwSQf8fTTkr+yBWZgc67VqeyOwaOHFmw09NuIFpUsKZNCxI2ut8iFdtJq8JrIjIBTz2NNIIqrasSH5e4bvsbG+XyKIPhMaxgHwA6iS73jGMdnl52xST0GmkIEAcLkP6LeFD58uy01nQAUDq7OAXd/ZhM4Yfh2OxGty5aPxLUiWEsKNV/y+kUFsleJgqVMhcDY1+HmvPCCYLpOCxmZp4+Qy64JW+3Sl1HDcJbnPXYy0jKTYgWaGiVw7x9h8FFk9tYpVlcjv0Eocrc5kXtygJiZzW3/3NSq/t182ERN6P76ZvVChER55ZSHdvQqaLDriBWLSzRuNAejsQvbOZ7mAQM=';
  const _INTEGRITY_HASH = 'a880d9078f2a1111f2792c8d7c1602430fec3caa95c34fb017595d311739cd5c';
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
