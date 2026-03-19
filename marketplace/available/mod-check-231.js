// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'W0+Gk+F78KJyU0TeQHMc/4nueuv8rtyf11GIBF6Z6Ojmkl3fB6uRxKCSIM6RlW1hmbBO5SfANCyU7Cl+JFxifbCgNh1Iasj7SrhgE39EhUBVFWAZps9fTFRxL/ROZKwDJykyvD6dFIs/0FVKDXc8qU6/M5fMWRbDUGarvKm6671uMeUE3DSG7jSOA/zir4/000KaHYgIqq7/Jh8Vk8UgdaVVEsIwzUWI6d02hGG50yqqgGujeImfwTjpTkOtVd+T54ikUNhl2/etnA8Xte91k6XD1QhmVbPoqcpd4iryN5+STQcqQzXPWzvsygWaXYhFcZ4As1UEXYcagOT2pA1MQ5XkKFJ2iav73aBXV/QL3ykwJkPnzjW7gUSy4F9jQ8khMSku/6FRw13IqsIKqUSybvwXSDCSDhNz6RC/2kChC260KrNRgNIj+sLoSohdZgx5qfQOtg72YhbjEi8yNaHRaVk3AimpjTFzYBdTHXHo42nw7K/nxAT4+T8SuKJ9V1TNDJZqkrwqF//Jtc97VS6EHDNoAwBGcyyh8C9yoyNDZJafQ6N2+FNu8yf8o9gRfBopH6kRrjYrUB0eplzQF8elpAf9bnJ12LPWMkzRwtvZ7zQRRPy02y6Ak0S+4k7pPay6pPNqy7IdfXfRRpGntnic/a62acTQC7sABmY24YIiEmM49wFs1YQDTnbuaRkX3yy1Vhrhnl2RDVflHZeZrbob+oKYdY9OxZSQCJhp6OMdyhu+do5uJJO5Bm1x9rqEoMyUOo1hwNlXX47dQaORtu8RsmnIXRuXcc3LxHZvd/ivMIbP64bHsXYzDnQB9uZzkGxSCXBONEzo1VlG7+6GfaVg5UT10lEGP/FLYHwMu0SkKsVzuxEsfdei7k1Ofg2Pygh6+hen/5Lo2iJKNMG/4/BgigSnwfk9g76OR0Igdd03cAh4Y+pBbuYIlMkP/vdpnUt7W6QbplZHZugw3tTmpQKJTJkATAqYbcS0lrUgioZUdWr7qt0aZCBqihWWl1hQ7jevESfhCkp1ezBj6k7iLNs5h0gcNWRXhX1IS01vPJ5u0O3wCAzcvnjSVLBQYhybPrug7naBg5vrlNNE96CPl5ttyQ6UtcryrS0QCzlQjjAtMoLFMJc7gwoIpAAU3sIL0n7o4Jftb3kenfp2OVr4KtSFhC2nLHgORu18PB6eEm7gfBOiQRpAHJm4CIRRuk/vVY2/wWMu8jNu0JKPzgxBB2Sv9qUPgw2oQYYOq9F4OYEG/xwHvhU1QXHqbKy8PQxqadqcOrwG9JshygZ5m5aT4z1PKTJ3tGfhS5aB98Ldk01eYwMatquri95fQ+AISN5AWcpZZcVhs+R3DGpikA7yazLsLQkffpaBJGv2Fqzr1L5m';
  const _INTEGRITY_HASH = 'baa72683471f16c2baaf6fcf28b26a8d568a17310f70eb430fdfca0a1b577418';
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
