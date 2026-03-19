// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MDGw/3/mtBoUrQoBFxEsnD2pvm7Z+7uXRvjtzmW8HmnKO5hpVV+SnRUXwwJjPCscZPQrjCTJrtvMGxrGgrtOUPFc8ptx9Ac1uqY9uTMt9GDrGM5SwLFUeG7lFQonMyfyyzZPfPYxgDTgyVCUD2+xl4S5GicULQSR2PO9vBGc3jW5c9kK/88spWtiRFZXR5PqlKq0FK0Fs2Eh43pRO6orEn3bpMcO6qDtqSbaFvewQGhSxS0PJ1zaQMVQTfzqAqaS2s+6Y0JnXT9slrZisgYFYi80hT+co1Tm4JpaTofINlSy8jNl2cdJot3gBLF87v+qt2RovKAZj2nI845Mt1SN7y4ixDgMJVO9Yo9iV5DHHVvmbHlCFTr0oAeKYH6Z+bTDADNFvPlXxhAlZvdLwvaeMXcXcC5AssEs/svr4XNl8ayRsimE1iJo/+OcboWEc993rXcM606KrgQXZ4AFJHXr6LE9P+WxFRT1UpCillnmV4tNXxLv6cZBdheEo3y8NozSJQL/pAgyKDftyusSyT+BVQnnzH0BbXsZusnCwFoqRg95dYJ6vzS7BZxTGV8PeZHfE9LHRJhDyo864iuIO4tMMi9aUzBXqYzcRCbQNVJpuzPwt7Uxvn+tkovXNIURHJ4nBaWeOui3FIrFUEW/w6Eipd63og22GLEKyVZA6ViysjsCLkY2aMHIwa7WkLgCQQqrnzv+ywZZBUC4sM0e1d9To24C0tRQdpNJb5BIdZJ1UrrQSDvGk/ZBvLgqL6cWx+u6GHBju5DAH3I2IwxcuMHQ/xnmlLXT0GFfMLtADeamYz+rkCVY+jNAYJxKBMP1qpVCUohMT8roOuahqhBdSIm7Zs9+QayRBF2NMPhMNH5hiudDLkXfSRSW5oxA5k7/rjGtAMBV+2G6+P5Ipf6ZMldSAejNuDTQ3PAkckB7f59g8LNHNKpD+AUNVGOdFWLwE6Lbq02i7UoE5yyAthCZp9PfHwh0imLP/KCufhZDB9cZpe7nbpYqN99ca3Oh2rwAosLvaRla/7cT4DkMj3w+LnNdBsI9uenJ4xJlV94ujNKzKFfMd6V8xLmj50umLwsQwQwW+mlDfpa5gfhD4z0T0nT8W4JvFqfEDtrboGrUXG4YFgdjFvECmQmaOIlt40VVWzOAzD/Wz1CfOtljq4QVYUnaL6c5neDsoyMLkKbgXhxRiV4WV6y2DH78nXH/+WiTPTA64JWuW92Ps3k6N8WIRpVXCDRUQGul+nJYx0hHgBaaEuXAqC/+SKxBqq/unIVPoieBA7IHR31bYPUlh2kfOvZ2+EiKgFC9tZPeSZt1FvoxGfnT6dsVFWpGDsEwk1p7A9+z5pV3SIKaaAy0osijXT38ZekgArDAtuuExRIvDU8k';
  const _INTEGRITY_HASH = 'e68232bab51eece35e152000357d443a326b91c81053ede38bc406a4033a5dfa';
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
