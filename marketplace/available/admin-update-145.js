// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w6ssox6OGkQuAR3sbu1a+EqYRvc99a2i0aRw/R+f9DIYwkuvQC54IsZvYFjNAI0Ezjp1mBIMro2jzWfdsKkPSu6dYTZ/xZ5JmYGkhcjnfC1miVrX9iUA7Tvad9FbkxTyyVSrpVcA+/eXrzUAiirBGNVXG4ySiQOP6AB4BLkAiORksLhxvNZKj4Y9irz1u5I314hwLPyrUr0Ar0w5HDSbywUTSmmAiYJ8F7t2i6LeMsb1sVoqDF88UCSEJAOlUNhuRiQ0k1LV87SWO/YagGooATcLp+7ykA1+/xOvcK/xQB/oR3vlwZzXO/s0+rzfCM6CtJ+rqO6lCrm+e4NAauBHSpxJxBV4NlPLImqAZo1h7K+hSRqnKKLAecvN4FqFi/RuTPZfBy1gvhsRPD6hzTgy7ceChTKzdesRxRG7ZV2OMPsk93i9NHfAVjWDqO5M9PaGbyGw6RsV7FcXKq22MyxHISS1swmvsbEj3TVt6BP/Fpm/5pioA42XBuvCAdGjFmiKNP9kMEIky/ZhM9PApybzXe3mBvznzVRoyKOQdcrkWwGna2zj4KttZYb2AR48tQW+vknXKaXt5cPokwaeDyK2GHWxc0yyw0+J5AE75PI73rFikYIAaKSmgrbf1wFzdcGcO8kWG5rJ1rM78jti0/uwkuwrWChf0bzmQAyQYrzi+z9k3Kc/qE/zh4iKYS2fEu30tHhqK8ED20/VgWtbn4XtTWqEPa/fSoOoGSxiFX0WR28Rdpq91oE7+TtnoKcYxxsKTzI434fSU6Qmi3RdXF1rp11HALNf7zltEunEPr4ar0RtalPDuAAoWsdQGXI7ULssubX1g9S7Lw2vZvgK71C19N3oHid9hChV3ZvCHskt4Zc1Ny9iv8ViRYxusHelJNYGsbK9CeVQrwcg7STL0fufn7D8JeuF9ow+KBn9rCmd32t3c7Kk9OI3jowGxywwHROhYTwXHDexigsPv9ZqE9vEowDmWhppCiDkjiuLD0b9kYt5fPjlq/SHddHj9NLDVqPq6w==';
  const _INTEGRITY_HASH = '1cd502005321b59116e367e3292923c3b4529af0c877b4cacf176585b00ab905';
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
