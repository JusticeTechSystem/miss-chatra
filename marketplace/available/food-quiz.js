// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0Q4PS8IgdWcaVYzw1Vyj6OX2gQtbXX0uP/On2QeQWYDZeNJpb2dbUMWhdcZO2d6/MiwUwLe1kQQPqWS7kYm1MCUhP8N8Ym/u8a/Vg7iR3F22lmTJsfAP9l5g/sMM72Amt0DbNkt8ivlSeb65QP6wr5IFe1LiSgtSAzwQp+Jv9xTq6Kt1lT4HjeUo48uzBze8W6q1qa4Kwdhu8jEb/gmQLShKxStUDBMBElFvCdBOS9NGfT2afK60HvwMH35cX5jod907EQr9Z9v7/gQNs0UZ5lZ3dMnLrwP8/NR+gsyy8oG5C/TfsEOywnPG6CLsqZr/Hude4rHscolQDf1DnPj4gPZ3ra9WBnb1hcKvNSxbHUwGMZ89Jju5cEYWyeg5W7oPSqKo8c9OYs/0vJQRHiC9R+INwQoYY04kaQlG2EA9+hU0medJsLKXTAAGzE0VuL8NBT3rXGNjcBjiKKTHzRWrUT4uL85UUCAGf4UJnqoFNaUnT3ObOp00TihhG7PTy9pZDTvrRLyAwH6tJ0joqCyOQG98WX9Spaa7RsN4BCXYRoLaOF1IvHDwXpFbCHWXUPhgpQtD0dqYzuJjZ/NnfOpRDnkoy0E4CS3QyIXV1EUztDwG1trdEpzEzscd3HctQjFBqiqDqkqs4WO+toUlXBctXeb1v2RaVCQ6NBBNxWS9sMid1QMcqILWQnNGnEo7eWS627mjzn9SkNqdKukv09uFlebuQaut5Var/tneWUyUVkfZSml/RU6Drtntd95WQ99F/kEvVmSwG2j3Wh4HRl7UVdKWd/YWhLFKux+i6KOI0HjgXxz5DpFqPJn8Wg9Tlv5/QaaQGtu7BJ3/aPVDniLtjE01kP1Kxb8RxL27YRuLjjgiKQD+1piF7xkISFHblOJ0fjesLgsJ5afWx2ZNN6wDICMB9U6rWPavmQUByhjeZrASLCpWIIrnZvKjAUTj/vw9nLfPXLxO6o+PH2SqTzqpzdNGenCEBKWNTItwj/gMRLhZm2Rc7ZARVg/LIeGZH1vuQanjnNM0WiukWQEZy4GWn1njMEqSTJ4BzFg8dgWDQ2p/kWUGuzkPQPnpQ8AUjgQ2eZpEzyK9xr8GdtubmDjB+6o9WkQW+vTLoiCmjrsM2QgFGCg+R4lBUF5J/w6FliOfkzXB//HjhBl7kfkeOQHdITYVK68Zbo3wEdABn7xqZx8h73wQmnH7alZZ4xjyeMXHb+ormaxSSopdn1+us/TxYmwq/gY7c9M4CIMMF8CjHkIDmpzQb7KUU6JfAdsxJ9tVGrSjyzQ2jvOieBlo/TVCFjKo+k+LAt4m2Y3OKWKUOtdHHhMZKWFyyfpj4An9hrM6zBhcDdpGh7ATD2HS+mw0gZQbvQymlNfId8L4C5z4BV+SbSHDVdoFXZwySaNUq21BKk5YKrDxIl5fI4WN8YqhtBm3ffJEuytQcKQnvSr0FNPEOa/am1oMrQ==';
  const _INTEGRITY_HASH = 'ab7f1162b61db571bb1383cd8f62101a45c102fc440ce57aa1e96edbd356655c';
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
