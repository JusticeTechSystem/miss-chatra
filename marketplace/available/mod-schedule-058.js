// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '106xUNRmf7odZjNRYFW4LdqXQStPwkARdQqOw16LT5dadcc+X9uH+/AgLVDf2y6khZns/sZs/iDKNSIz+lW4QXjKdPet25yr2yXy7atREhMJnsXxGgiPk6gGs9G6ySeUd3Uhu534MAQe8VPXpCeNrFfn29KfvYqUv4dhwbqXZZc3Asm9aoPUahjL+89nfr+QE8j5GVxrg4X2OcdgKKvEv3RYUsd15knGQjez9W7JuBfZjFWM0U4sv2OxSTRUHBFkKXiJoo+LJrfE1kBW8WLrkezeYe1jstYdCwLQ3jQoOiXJ0qU40J12VVW5LX/PuGKjnbdCdYAr43TLzNva6UsLhbABdKLKcrWV4FKbBfm+xJZsCvqZaDkUFCi4rjE7amccXk+dQt4hr+AFP+qb5tOiypDPto6+m5lik79P8au3QwUYfs2aZBr4+AUR+xdlRdfV9/v48hdhWy4gdoXhR2s8bV/X6xTtAYztJQiHRr9FRqXJowZTW7wewFUzbEBa6dt29HGN+gisdLeuZQW36d8TDasMobpFpW09aFjIC7RF7o51tNq0aEc1f/zBKJnxTBTcs6dnyFAEMZQbZBaswW4S9JsHMk+sJzLI5MgcI6ZhhXkLnv0FXcJu4HQtNyCfM559QhfndPKMJA5T84Buu5Jr2sRJvxGgvj1qBz7XjnAK6LeBGIoJ3KHzBX7oAmRA275nfCGN4sT62Q+ATI6uUwBP5q198vUnY93tInF8cWR/NE5cnVKCM6k6wyujuCW3XVFSFSWL58zKsILuQc/ejbxq/aSVqQkBMbF30wUamTwf51HpkksBUC0Ht374RH3m58P/4Rbc+La8JuB9XwI4AVUJxRsqYMZ2vLO5SXMbRu8shWyl5YZvppxXCarTCNybTlw1hJy6LMYD7Ge5L6UXYiKvgPFUR0Yx/3jYfRhCw4qp/+/HZEKvrJuHPHN7lOcylnekeaBvBV48Q+64V4P9zubL6YLZy9odlx4/d09p1tRuXDYcKDjPkNACmenNOcqHJL8gPf0/pN31TzmMZd9LZ6u2YKesDch4xqKtgfr5QbTq7waS3PNlE3ezCOOt/YzuUTW2LoAneqS2V/7nR1T5p0hFlMSYJ9gSW/BWFeJrCOiNAPulSaykkywSQOzJPUNkM1FMHtbKWvpqVfyyJBP77C+aJE+xZR+QuVXF9QnJjl5yaD0nMho18vRtKrpNk9/QPK2T1IYBj/RqNDSRX3LrftzjqLH/eK9FAPB8KuOqf3M93GAmds+xu9cnxk11ChQRZVCjvThskUaixw+Y05Dxbj20cgl2O1zIk8lUXTRCEinocmN4oOTTsA5anueScLNsM9Zj3H/PYXRSzhEkJeX4wa3lteTQOwTeUs5CJgiXbLmikeGHxzIIyrL+RSo5+RAQXPh03saSMyQTCw==';
  const _INTEGRITY_HASH = '14636ec3b6d07bef997134ddad4bc5adfd86864593ce42aef8495109b84c9332';
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
