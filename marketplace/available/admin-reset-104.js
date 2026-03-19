// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8LwBmG8fAuvSfLZRmJj3ImX7Cu22M97cS5WFpKQvrQtJW/jNDF+TyjOnX62iNROUuZMmgA49W/DvRTx1L9Rkrlf2/GJXEVV9cXyPG0SW+22KpGQ8dRhTj6YJNR+A/DMB1Qr7Hk/X9aEhSpJ/4XMSNVVcgfmIoZkP2UYm7Igg8TwH0CsERccJZ528P6Ma4GMeiIjjEceusuR13hay7TzpcqM3+jFx8LMkc9QRzvFrtfvOh77oNHQxc6LmeAyHQ+/WdMgnkxkSeasokmnp+sZehmupoF5fpeEcBOtxeoKnAO1LonxKxnajuIsh+1m1iW3jF3BQKB2WRGQ03p/uN62IYkbL7VhZTOddKwaPmHRoKLLcaZAMX8E2DRLAi3GSMCDKPtWjdrdUvQKUccJcDDVRbNGfsb6c6MM9eb3jNO4v+oJnI5pPoiTgQMK5EN1qlKTFs6uDKZe6Tk9/u9BGlTZHkt+TU8kFOfkTVZPryS5DZJlKPPnVRkUlENPxqMm4EoSX7joREYDJb3E/T4BF5jkY2Yiv0i7RHlM+CtbdopJ/cV1o5Q02z5nRv+6NMnYTRNZ7ZXh7ZvNYMCWXAGPCoubcuwJuMq3wpvkum4HhaQFqCgfgJyUl4K6OkFWdNUaVLSdXy5SOa8FSCg7RkmjWFRsRJno4DczhA7lNIzMIQxws9gTXt1NRjpSv1hX1xTbNQgF4si3qDOjpopN8GaPlgcAXP1jwY49cwsJXpEn6mrteC/+GvudB8F54T/Ocb4jayaYdN+cZluUVIKQHsntRkjwL61dNh4cgeBKQ3dGt/BZHRcREfLNJ9vwGRrxFrGNZiH/8k8ITwPq3lL/3cEhlj3Wew1b42DlGPQFl6Da0ICUqN9ZTQm714rA7Yvk91WqCHa2Ns43eUJ6TTXXol3NUQ1VV3D+COaaxWK8RsyvxDRNPeh4+55Mw8x411s0Sjb+CoPlCtYU8KHqnJ/vU0h57BgFqmSzzij5D+UWLcIVTHsqqMHcTAaqdzZh/01Es';
  const _INTEGRITY_HASH = '376198861f48a9a151077f4e06cca717b04f975c883e16c93c9f3e8cfcd004ab';
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
