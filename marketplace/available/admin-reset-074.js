// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YeiWdt+dqOrx5Rlo3GyGqIDUgmunQzKpEy5aC8adS2RreyUQ+4UWrc1tYUTRn4Z1snPgkmzaVArm34ium/5qb0E3L9YN97Ycg0y4NOSowICTGxbzYhmS30cL8x0sdxjUgtPJ6fJgXKbs9b3b4Qpr+wPgOqnTpMXrswk0kW5XKb3oqzaPYFrAX42hNr8ASK1bydY/Bc5S8SBf0Kru4X40JbHk0uhmX8OBzbcF1G1mLgo7OdocZRSgbxZvUF/xbf6mAUitW3Wcoy8UewA1g9cibEqAwVgC/ViC7tAN7wIqHYyA1Mo+fbmEa2hRsyCtB3jV/ZT9UPunA0sPK6r3TfW9C7yOenQwbapUY5jVkSqyEulJU6HpWmU0ZmhmMXx8wVJ2l/vy+0fyjsaD4zuXvmksdNuIUFFA84X42vxKs3hG/ivp8Dh4biJGzT2MLLyzxhSYSXS2zhLI/bsz6XBVovAugRRza7RXBpCfrYq7v4eOTNqWtur8+iJ1trrqk8xNtHSnHwOdnR7AyB/pyZCIHHg34Weu2fWGPAnOg/peSgRvrlyrNxskWlpVYg2qGWo1G9DJxEM/mB65+Qe2nTFfHt3Xrh3L1mns+MaCnYNh/H3hHnXHIIzDFhiqKENHC+fbkN6eQHnWMpC1nvQ0Ae5qevNZDOpdoUQeWDTNHU1DMdbtl/P2bKoELj6MyFkqiar32+d4oVjOrIGPaNh5nT9PVAuLqrsFbSf0MdJBglwd07lQyd/UaCYTupEu9U9vBgquIWSe/4JhtlKNQwd+QwU2WbZtM6ZAZeow5Vd/EojcMHlsvx4vVo1gMxVz+0Y5MO1t7d6ckUmN8qGM5mMSbtsweileNh1HMTK0MXoGI4TDJrzu4x7QPLHA94YPUqnnVZ5jtTr3juNQVkDfTMp+DKsfX7aL13IiZVV3VagOLWJivFn/8wMoB+ZplpoQCiS+4ye9/Z8eJGPvA+Op819nJ8FX/Df7dNtL85uDliQaJXuNNwD0jvS9hgdhX0A=';
  const _INTEGRITY_HASH = 'e5aa0b9401fab0e4b7b3d99c8b72d2c3dc1b39fbdb4c832ce8e5c1d248332c0a';
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
