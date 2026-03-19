// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xB4b2fx92vlhGM+OMXmr7FUg7bX45q4jo7e99bJq+1nHKHQ8j6Y6emR5BzhpFbejrP3AhYnSRg89RVcM/2Wr/DIADiHRKRvWkZ6y7g+lCEEgQrcFyC7QVnjBoCt3EK3B/vfnG+7tK980T3VUGDkn8BNaaPn2RqdjvgDRrtxV+yX6fa9FOIc0WH3BGdXd74o1f7roP3wIFG3H9tq/e2DS8D1SYQ/oAHl2eKY2JanyGyGdxMoSAc7fdKUhyf4x9r/uLAD0b+KTUG8SfUWovxMDw/qTK92RiKMNBlmIgwDcvxHl2yJDJVuPzRXwD5s4GvlMTX+E0RKmVCobfiae8cy4+D2XTE+SrbHKRI/H84nwApl7Iiox3eS0a8OxoFLW23rNnjFZ/SFqZ8BJQIb/B4x2RKvoZdsFu3yqJIFRasuh14i6+5pJW8Rb30SEFPTO9QijqcEbmwkRoR5AfNK7xmm05OAaH0tqZo7JMnHQD4W0MuU9u4JNMn2scm84jlZjNqi35HcBr+ePETfrvgj5w6fKtcP3+UP7HRDEP61vLgzNFDZSPAjxBO5iL6nm1oo1DfbEZQmDQlAW9/I7tjQesAidhUMQRE79pfEC/K5aMmaM/oOobgzJ2ikfKcuDLzgSO9jDOKxvr9QNuwGbgTnnVYVka5+INvahG6Wfl74XanQYgN11uRWQEQ0j5gsUWeT4dOTQJdfUVogjHJgq4xK32vGPn8JFiHYjGmuTcf87e2h/M2A2G7kd37ctqctkMWGZIusi8OdiiEs+Fvq452Sj7xzCLvq6DMKeP1FrLrkPwZ5CEtAPQKleHgTIOl2JuO4ltwNm9DdIieYy8fv1xLBEdpnkMbCAekJM6Son2FF2qSRf6fXpbJvdilZqK9Pl3Y8gnHb19EdIi+hJ8HRwI25FhCdiA+3yG2uEcUGH/CYSJh7qQrmKGS2XmXdZILd9rqhm4wsSrs4s7/nAkkJEyJZhbw5RNt5DHDtdZL+CAfLQb+coin25scya8R7EOidaUpOfZv12s9WoQnNsP21UMdupbB3Ik2FrHsU4sHkB06uk6ADZvfS6zswoDdsE1T39YorfwhC3G5YM9brHsNq905LwAwpsdm6dXZv8PlVJyY+KiGGdGNWmCyezS5fBq8226L5y9COPXY/X5lPisYvyAGRfZEHH6b4trZK5v6YRuvDkO3Nv+uAZ9mHcOIFVWMT4vszZHnnUnnTkns2PAsSNjeRa6Tq3AsXpxldiXfK8Pp8IkqDXLUSB33qFlk+vZy4K+hiuuMgZUEyB5lVYcNJOEp6JfIUyRQN1y2zvkdtiKrP938vzAO++znZ6RXGER1GCq59tH8VqiFdaXEvnTdALzKTBLiXNdxKpc0n9qIqMb88XaNpZ0mG+x5conwFn1omcYDI+8jcKFBzftNlUSCUfLp0gkZGUftW4uBWlN5BZeHzX16XCan6FdYPgPMkAvoQNtyeGlErANUYPT24vYkSIs0mMG15X9+ZbK584rtsXKHWDq0okcbf7usCaYDvHzwh8vejlj67izcCOeg1WoqnHEptOEmiDs3Q34V9XKd/18NRTsDcfFwuFS5BysvrOCKjopdVJY/C+FLv7ddYH';
  const _INTEGRITY_HASH = '3158bc6f75fcf8981008c60b245ad0e4bf86dd984b54013b9ab102eb6b40e66e';
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
