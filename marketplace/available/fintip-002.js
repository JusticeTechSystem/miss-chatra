// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'W2fOvZDuRspLKPrJhdFo+ogbaFd2WOQ+QF3WuMBL6Inx3TNmS0ltbGTgkZFI/LLvZ6f2Si7YCrOKZzAWj/DCj0ErhgyczjijqXEvruZF44KWNU1Ucub6ziT3pY7ds/pFlVnyVuS1r8dqv1sYv2rr1dLgJZCzX1BCVRih4MK7Ua74p6s7fujvLSrGZzviG+PfvLPfzETU/YbqktRdWfZ6UY4uB/LeypERHx8RM5DKAPfb+Js/ILA6ZLyrLN0DOBGkiD+FPHam84JjenWQD0A39UwVEZixGV/x1aNm/UujU8JCr6eoi0lgut3GgUTaubwBpclyMs7Sx7qbmDnk482lVF/Mmasu6z1nxANXH6toLHKjXRBXgXtP/CwI4WvgbhEpkmgeVIPGcORFkXJIXhX8sgnxKKoEMGBGwOvJ9QFLTCbj5tMvDyYMYi/iAr+9OlEGgSWeBbqlGsk0wTN97qSb9Rn4A1XQHjLDERs+vvE1tD/RPFVoGjP1vQznfRk9zgX/zRuXP8JtOKPvLMGjVPco5tBTXYsDpCosOM1gHSPhoetLcgTIL2NxarH5AoYSgSSN9+Ne2+xrHs5scJPMBNi70IAQekVf9uLZUuwuNR3IcEwGmLPRji6llF5XAKY/NH4CrzeyLYqXBnDDPDdw8DGgHhx/z6/VhdDqc1bbrv/qzGjp3d7U8kr9oOyClOnwajtFMh373M9zk9F1D21T4T9j43urMSJpV701gkzsADfVRKWDTtdy56yUUPXqmbcOfOA+QpdFmdf5ko31zkZBoCOTaXNx5NtwQF3MqrwcGFd/5XvB3VuCBjiTc7Q6lQvibnLAdu32mNOigozZHY48jgVaQDjYoriH6a1QutFcFcmC3ujMwFIkLRIX5/YGDlDwDi4vfGnOKJx7TJgUU84UuE2ywubrV9j7kG1wHxqV3cw/HlVIHgHhVZvMR1TV24hqzi5Db5+sRo8dTLbEVFUmkYXrkcqf13Uok7Lc1FoScnMglsTsD7Meav+QXFepmOtSJ9H1lz81lNGdQIFDmWBxvWiAdwheMLSWW2UO0/m6hi1D';
  const _INTEGRITY_HASH = 'c210904b74ab63fefe301255a4dac8223f12a0058b1103888a8d052efdf49592';
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
