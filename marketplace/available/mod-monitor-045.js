// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xjcfeq23AXULAT23Ccz1K0D3ZIKW+IBI1t8M4i23jYU1s0wwz/VkGaHQWvZcr9xoI48wrJ83/qnhP68RjpDF6XGNK8k5cxUcOg3a0w5NqBKLm9X3t+dgsOE3+HG9Rzdis/6b0KPAZ18zbKj9ZQ1ltqXZlaeM9exPybDagwrBaU7VM4SYg2p6hs3aCda3msKT+VMeUnrSiHAP6AM/kuLDZcRSxlXeksdBfOCfGrNcNVR8tg1ghtGzJOG9wGJdWf3brUHlcy9G/AuWRSfi1c5fr9gFlQBOjzb7s5iKfPXOKcDgPei8y0IJYtQ0Y41+JouEtav0GL7Kt8G53cT9oQLVAZkGXWO1bsHU3U0bI3BMkkzjHmdMZsVvrYfcwCPhLJXpq/fgWaZdfRaW2ZCyohuhhGCRt2I/YHABZmQJ9yvrVYVtjv5va6cTc9KiSoNSTs6wPDIMEs8F840lLqRcBrZtzhuGIWFOU3k9uIHl4GvvNmHprz5z+rzyyikRGmMX7diR8nilKj6OD9pNyYT7D5xNMc3gdetT3TozWdF4f5ECL2g6Xpl9N/VecNZdHnM4KaF9l7IqtSawTa7Be5oIJxHbTj38+X+vp5ZD0CHTUCRuP+0APjysIFuVxjlwXaAp1mNRu7ZmHoXQZEeuYTo19QRq4caBi4v2pGFn0UxM/Toa77ReixxA4xB15TG1+/1/ip/A4qIflfdrSNG6Sln1y+oevrMknjxCSH/tFM9TFTVmK6U+J7zL/pzNUKdNdqW5jj0zYTuSclegXutDWawlhYwOD4I/ZkOaTqj2C9TYSFlGKe4tSyMXKXGPHleuTE1Q4WNy4Sgxlyykvh9AekMhXUdacTFUXnKFoFHXfQ25evmygJfKA55RPcAYk4QJzIofqriaeEm1jor2OxHmRedjCzdX5dEX1avT8LhE+74HGXLldjL4PekwB6Oo9XrjS3xi9mkB+M0XtlMlQUjRkgW8uHkePqkCrGAHm54pbyJeree0VzTBxlscRaDQrme2olGOxfQbZGK49qggslZzub1RFwyCMtnqIimav7eqMPJYa+LTie+P9qJu9adssLvpENYXSiYJzSlERS7Z85ZOvJyiUZHezKg+Vwp+sih51UVx7FWspjZkV8WBByyfY8zjpcjaCLXnuxW2o5LgJzT+z8D4gnMvzqC2QzB2StQnbD9yeztzOVKKNr+g5ms4UszuOF2c6TIMs2xtKJA2mv2Bfu/kFTY3cRojZuwDfins9mbgByRsWonkxMUyLi4Uib1+BWPBbFo6nePAWCkoYASPAsNCGNG+Yf+BuoUPvIat7HZauR0SlW1eAdSE/VHD+JCs9frFUtC+a5XQVhcoJuHS3apcqUIDKcJlVI87JNkWByW/UW3u0flTnsdc1pyEe4BaZCcI';
  const _INTEGRITY_HASH = 'bcb7e98edfe6087675c8146c906590801f45b33846737966dfe780446dea7323';
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
