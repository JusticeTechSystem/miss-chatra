// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FoTUFU54z3uu4vI9+6F6GkCLJP53T/2RjpiRPSkdvWvCc1G/bx/BCxglo1HCc8B5CMLIemuUFHI7O3o3pzhlTc1dLBJD7u9HNpJtjnixwHtoAbYgA2vSvlgbiqfOBHhsH4y4rHKpIFoO0UrA7G88wWbH+UXTP26poWf8m9OX4Ovc/Cxm5GLuEP5hAemO39/0k9ERWEkzHJ0kMulI97e97mDB8zWW3HZOWj48tqeWDu9/J/SBwFaYna2nYOuOEQ5TVr+wcD1qyWYs/7mNdwhTL0b3f8NEF5Knnb+M6VNu1v/hno+VNIoeAupd9HZUlPwe9H5LqwycJgnQJLa6dPaePGUpWwyDHHYWpG16TIhnMNjb59i3tYGQNOOlrzalQBidIhmPw+G23ld3Sb7UMZYCHoRFvY5ka8/xaiBpUJ98vMYa0k+f2yV5mDm0vEvbe4uFZq4CoalTNCzO8HNHH0fZHGB45zSZvWYRdWaqSq/e5a0YY2QYop/YkEwHOm4hek2DVAFHhHJVHWzLPC7GmsLskWHlscTTG/ChOMedRba12NtDZnKP1Av70Wpirzr1m6Le+zVdzZCASBbumPElULoS0f+v4RRZRKYuE0N0VEAWRxjjHhc8VJN6wrqclLeb1bLXiVrHdHMOqdU650OjjeHa7xaronr8EuEZjaXJfhag1J+FIaLgYBO3k9wYBEwR7KiPO9D6e0OsuA4Qjheid4zoN5WV/LT6r8Mk3gycISL3VEgWdGqSGCeENtkwCIbb6mS7KcSqXscpiGOGlEbGWvAC65nLoeNZMCvMd4jeDSkSPVfp804sE2IQ+QxYxUhXQOiT+g8VNBPb+DN1KBbTzb9LYcCcZ59vdN4SXtY6xxGI4SWrwFpGjYz4dr3feMgaK3hRQFa1CbnLbzcOhZTUpDw0a9AUitqU045Ox25Lc9UWLHoN0g9KEJh11IP8cbmGQzVjAn4AnY3/FJjvywQruBUD21989dDep2AztLPoeWusuSurCutF2VKKXmlwjnVXBP5ot1/DfemfTzmVlOXdNL1DEgLfmR6LkJAQZF/EYh3rePo3vYN4zf577UQ99Oovo7z9gGU+8WdS7sf0577+Sx+tSFbBv5Ig/rQnlHcKbnBTWYRNHv0u7m1RWqoQKVTo1wIk9Ons39TmI1ozGGDPOdkzurgjA9BRNa3WJFkoNYP5NE5Ux7ROKoOCpNiTFj6VIbU164HdRldze+E=';
  const _INTEGRITY_HASH = 'decb9ccdeafff90789fff3475cb3ad363d2d3d337d00ac9cac801b13ef3f2fbe';
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
