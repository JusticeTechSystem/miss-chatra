// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Zt6zlcXrXnxQssX7meST3Bf6xQKKA8QIMvGrWfNQvv+UaiJDAn0SCiEoXNbSDy+BlxftV4EGp18O61zH2ulrCVtASRyQX8fHGqqUva+DcRxDC53GqVEOr7OMDF/Qi3uKLSbvcFX+7ossYRPg2uWwnC20chQsdVzociqmlx6SwS9Klzfyijz4CiO6C6YA01K3Gqu5/bEw1YqLMj61UByi3ku6cDIgm02vcYVlV4w9F+n+DfxPjPE1+ay2eP/4dW1hOgvoZuAyu6lhpgK2DYaUI3gcCe0nmUvfekE5MlJ+CLM4FmTQvKUx9AxWX+bPjLdglObIwGWuuTPbmc6gd/hX2+xL+eSTxWdrCoiX444kqUwBsEQ5Fbuz+8PhY1U2YStRlxmKi4ZWDPe5kGeTQqw48Qp1tuda1hk6sUlULyoUiB0fJQVGFwux+gN5kWVkV/SvckRv6UoQ3CIVue49YLBWRba5/0daA9+OrC5FeqQlPeYHVQQPjWSVV/ASfG0L02V1WjUb+OgqzNQwi2mw7y20UNgkq4UsvPtXwoY2BP6jH/XmQdy1CcX9S6Ci09SJc7Tte4kxrBHlObfZ3WSL/r5+ZHNqcZJrpyeqVyWYSvtI9p8LtmUWUHEm3EpA+Bb4sVrEGGNoYxiUx6/ANxJhR1CKCYruNCrIiYLsXxxUw1g0I7OuINkQep2Pm2bWmKZYhMQr2szO3A6s2bKAduiV6gJIpuUEDQFQlwWlUGClH961E/NciZN3FbHH2acH2XDVhTGofbHfTGnsa+gnwqpOMjuGbbayYetJciAqQm9L8ZlLRf5uXsCjkUPVzoNDWxsyvYhps0uMVeaI8bzT43O2NURwXBn/BFeSAyqlZvIY8UnOmVYS2ML/q2HpMA+cL8A11GuDUyLvh0Z+UyXJAI5s8Vut6KDjvFg1jTBNAQEc90Psm4lmBEu1V8DdjsnBoEFSjvAH6EpzvEwxN7p1vZv3U4AdnHgcxy9fFRGEX/lAMCLLA2ESxMkx3Am2QHA6X5UJEqFad6Iw1rlMy2+tkxzSkA0mhLYqRCCAjw+9v+o7ZXpZMwk4DDnv0/k4lMBlaB5pfhujZdFr6ycWgZDqMtcIColnx3v5izxN9hfI1iHApaI/vU2/ysCt7GCtMGMApNUbq3TP7js/Gxz+YE/bl/jebotUFCxxHKOWtX27/hVLsqGzuDX6BOv7XKOuEWsN8vO4a9xXzXsZ4+M=';
  const _INTEGRITY_HASH = '959b03feb07e54eaff4df10908530beb5e8207255633e1b659d4dce055c1c851';
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
