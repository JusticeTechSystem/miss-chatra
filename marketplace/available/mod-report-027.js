// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lNrPUWtnJ3tKAZO/3K5Zoj/jAtMaRBBNYc7+DJ2PSSlGEwv/HDJxJPcuzhvG6EMCrkgA5JqsNQLcO8lkj3i1S08I/RAJd1dSVoxETUZiWSvWSS+dSexm0aPyS4ZKS9mRacFHnGr3+Vl8ewIuVzcQk04Gj48oCCCIP7qvY5ldgMnFl3IFl8XEu4dB1YByccGMalOpRiLXs8fWfkJi2YYeECn/GGwhu/IMps9pA8H5l6wG72cypItWG4qiRIFrl1MpAWyuNBJOkjPcUQEzTMjDfuBQiyPCaTDV6Wm51CNlNGRrVzBUYIJ9tq56C77ren/7nvt/l5bI5TPocdESRxDylyJtR/1TJDPTbXt6qcZ7wsZ9mM2wg1KV5mtKVn78nPyoAbVqXVBawMC6LPeFKNerNlxkLI5XY5ztK4EgOmMKdZVCROZB6oWQtFOkecS0rzc2eMot60F6dqj1mRKwlL1Df5s/lCcfqms4Vp5nhte7p+WveGlbO4rlwvI0JZd3bp2160jG8rC53uMwBBVluYzvq0qf7WrdtT61ZPP2JXGMD9YwmaC9p8aMQ2KUEfUJb9rE0jyp19GtAIJkkUfI11RY1X/r4y8/ho6Li7/JeQxQdbRvyRYN95txKn3kYy34L2IaaSmvGAIMrycvfJYPex2qm81K4Vc2CaCuYtauhMJs49U3VgEa/WZqk6hX8GHp+54JZpmc1sBPdd4gOvu0Z6bxlYnN23beFyItzO2ENrusseueVdpVtEUahdOgs7U6VXYa4qBjFpDFccVc+VWX1wv4dndEww9w5nds9iOAXYdpcUgRJYUmsQH0SmYXczD0myACyiyDEdbNGRyowzSL0sswAhoAcRFeoAK4QSfwI4PHfYBjsrgL6WlashhHW149T5VkZb3qipOnNvGspH3VpblPG/JZU8nRspvHBcwkrA8Jn5NYnvTMO7oVCbRRF6nQKwBZh5r2v6RuBVQRlJaKK6phVrV3HdyXR1KIoHQ6uf0KzevBV9kK4Ps7ppB7HlEAkOiJZkx7OKhIF6CITzYeYTvwZjxyfHCzsduW42VBvaYi6WeFI+X2QgzK7ICGaRKOvdG5cjgNuCscBrON42SQAm8jVS63UEo29keOCO3N2hyvfMG8Z0ANGxOv9Ac0fwIofye41U22+bN1ESEuU1FgAO9+gbsUKzjnBkYS1pRAbgqKQh29jDApBLzKAd1UTx6i8I8I97ifJbFi171WDYHi8Sp1q/lhIvaF+muRN00H2bQDhhJcQLZT3zbuzXQueV3ClZCeMp3Ze4Cq6HLs5y7kKF9qUczZqly3syBPFDbeTgRnkcgvYiaC7GWAVnQqB0mHftkqS7RKz2JGr5OTz7O8YhBtm6kf7GJ/aJPgw6BdoEHb7Oged9s=';
  const _INTEGRITY_HASH = 'cffb0f685e5573d22b43ca4fd070a49a1fd18b5913eccf48478e14b19ce4e245';
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
