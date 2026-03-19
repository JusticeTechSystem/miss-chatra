// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KUjKpKEcvuQ1R7b1gz66ojG2vuWyro1veefGbMdg5nHayXETOa5BfpusP1/8W54cVKvYWJdq8haQTDrPigklZwzIZ7CmE9efYP9TQs9rnmi3czCtvMjsB4W57211msZYA1EE606qjFefk4ud+l+6e3KFZeImhfIMG3wuEALf+KAlG0NbUrQSdRFiI50X6FwjihvHoi5NEYJE+atDqMqWRjPS/zTLd3DdqiIt95UZhh9luYxbQFIE1TWEZQ92Rs5kWjYU/J8nS8ZQHm6Xb+BRL6n8YKe7LPj89jKDOxkM80RwBiTVBF2RxS27AApIVrIxFYNYJbmpNjiS5DVdGVM0llYlvYjxYnm+FG010bu0RyiymGEH3vhzfQxjR+M8uY4+xidtSsY9gA+8yUpONw7wGg+7h82xfQIgakrAfMyDnxYq8azeeTjX2UCf3kUGlb0SB6TfROJ15kUZysd5jBTfx3XcwkKKhs5ix/SVUo+c+TaPu3zz2Lhf3g85SURRZrE14RuB0jiFo8I07Q417qUy0/gAGJ/n7i/6RNeTzwN3JROK+eM+63SolKE/YLy8d27jABCZyiK32CXna4JFD02EIGwZ+QcTf7Vth7G0N45o/GOstdlCA75nEJun/We5s85V7s3D12OzwZ1vMmi6WS71psu1kQBxJBZdZYbatQmjj9G4YZn+zwah3WN3CCLFdDAXkn6bfdSg3g033x6/L1gYnFrTpoEatVgJ+DB6IpQGPwUgdnruRR+ILhy+jDBc4NDPcTh1ktn8fuqLE2THHuRv/hyLDNLadG7fix4+1oos+PUOZlSnh/C/BIXG8qSAFVip4vmKce5VoQEPNXA5pAih6U8SVU7HGHk33/3TlCORr6Sr8cn5KUM/1hSzdt064ZiYcujPXj6byF5HMJAkuHoml4JI+d75VHUxAE84xGqAFi+JlhpN54+xMci3rzf+F3P7znER2GNVZAWfBMEBiUgZsz68Ch8uslVhgK861RkGA1dtjX2CgYOLUUCDGOD9Gs8lZs9pmrf/cwX6z70AfY7s43GQ7i6sWX1Bf4fzcJGvsoQPrhrUS/bx89lkS5QsJQnNh2XVGmpaZNj1QTWw34nQ+J9yPM48Q9RwmEofo0OiMbXvtplGTw73yG7CL8jKcSD39aABUaXJvlety4s7/NqNENar2y2bG9hIlYCNMAU5WSWqQG7z82EJasoV5B00rm1wgsmZXgeJPiEytGd7KbIqkZnmNgEFsEhoU2pzPghW5B8MGRVWeParbSq2U+dral79Srpn4ERTFY6zBrS55nmv156H+pFnH9W5UwaMqgEm726+fUDrvHhMVp0VTlkeikhhW76nfdz52w1qfVUoCWclmDr0bGDwoisv/j2WWHr9';
  const _INTEGRITY_HASH = '98baad33f787383cddd606a5f5fae967af06fe5289c709e9dde4bef1ee6406d9';
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
