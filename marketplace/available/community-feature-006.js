// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qTyeYr1WxRgxV9sslLtWuTwjCKdm3bdIex8ByLVnuUJVRz+qqb+Wkp1c9wV5KA/vH5ui8+lOz/bemnqTBQ+0pizSR8nM6ZXJn8pwtMMytDV2svVVKNeD5/UNwLZjNbXKBeVDAMWVjv/sBetgtgcTk9jaZleFjT14f4Djwmjvme0yLmWyduHdOBYzUWNivKNd9pcBB2vkBBQfFPflorCGMGtKotHSHX3rex+8blgt6uo8o9XYdlGn8vfDRQuPlImhrkj+KBNP2hFOsT+ROao4MN0QjiymN1xsVibALurKfstG9wKwdm4CcNdIozVYZjLLjvXbdL1QyZum35n4BR+4Z44uEpLJwcYHMO8uoRhDHw6WAL5/ZRbrQXGbWge+oLrkssgmqbsls4o7uhXdWEcy5kCbydWhaNx/0sD8VJiYB8AIcwpn7bI+dWPsEbqsT4lKgTkt/0TGZyahkNwzSSlluJdAIHTvDBXNoOB1PKmxXryRunhbVU4Y93z4EpxXr5ZfBsAm1RHZcA4nXkxK1h0PbASXsDm1odr31hxWae+dQhYBlvHfQ+py4t6LikZfQqD5RHIxd09bMYrsp62N7QQTvK733atXIHm8VDo1IJy4Q8GcSUxPCzIQdzxlPI5o3EgQZosioYVv3FWYnkBHO1glPC9+aEpOUnmmwaYDcNcTyUJH9JUHfb38F5/HtmGTNNJYkukzGj4Pc5FtwC4p5vicjQ==';
  const _INTEGRITY_HASH = 'e60c93731033cd897a5e8da65bb0235088e6ccfb548d02de47f5dab074f79622';
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
