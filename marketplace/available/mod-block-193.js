// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TCNi9ZxSdEYpSY/QUz7eH5bxLfetqBSbN+4jeSwgq9B9qdWwLaYxTWXJJdYGIGr34OAgM56NQvtV9jehIPwnjzX9et2NNNbCg3OB0nr2dwnTDPa2m3Syjuj1tbsF/QFlMOQVdJT2tfV/dGn5fjnbu0+p22S4Yjk6ZezHKLivHQAvOPrcefwO4CE4EgDNeksTrTbp2UdaCLmpc33E0BdNU5iaLy4Nhcg3mMpSmrCFWMOjLzZIOuH87IMV+7DtWFPS+N03i8p3nmiw0xIKuHdr8Qlgf1r22L7d1gw07jPeMB4uKc3LjAN3jbU8UVERTk2KP1W9nyi58mqq8KwsdBe/lA7KAHg51qDAovy6ewd8wdAZGmTNPjDXzI6/BDwXpPoQSbzKKSAgnUED+UZ2jy17lmg41x4IH5BDRseH3rIiXkdc4SazdT2Qlz9v5Mx/vScILqK1zWhDrEnd1xOnK9iKXEWUoW9zWdGuyFZn2JIGCvdG0b8bynpyEZcaSpH4LgrLexI5jJ26tgYJgpDK1B5kSXoWaZnmdhwvrRFdgIIbZ93ymYHza5qZ0eQwjFlDHc44EtpOFoAzSYDf0kSIAtF++mVFD/dXTEPQDZMQu1xL8A+6w6YkIZONOScAZBxk5UiylGaf5frOK2DEqTT9aZNraWivn16iLPaJueFohM6sKjDkM0fqNTZWN43XfjgT7jtFrCizMf+6nnyTKZlZaNqVFpyHRdc7jUTh6Dwnp4w5bZAnjG4+8mUXyt6s7d29MS696syOK+wDslVsJ6pVD9meqvcjUhcHVyhr2Vmu2SGEWkrM/xRL4c0lSweKzBLpgWYj2Ipan2afw5L2tNCq7fff+o64XHa+RoITE2af6s6z86mGMAmT6WUfhGc3VznzGsmJI9oTK+cVe9ZuxjKdgj1vl2W9pmpEn1rCgvx03kdiMRZrkjy8hTCQDRyIFoUwj8VLY6vKByuEKm53ZypKvFYVGdj6/j6Z0dVdahFLsmYT4cUSWhubUmQzAzfoo00W/InRiK2cOkuFH+tN6UXfSDNhHYu2kAJoTxRzTROv1XB6Qa1PvtMbxMh3P59RW1t2bixMynud1fV3YxzWZ9pYTrY8I3fJqcTcbHIpHr7E650S2jPP3iTYSWl6d2EYRcHEfUu9svodLHJM9TxSgNm9i9zV+8/QvXTv2+VrE0SyNom4AEJkkmjygzAkRL56dYcdCJQ3Dnb6/vDPZW7S1SkFpHJeUk/WVzY4YJpjFPDUaHlqpmVYFWlpJQP5opkIRR9zULMZ8KHfaFNmM8QJULjGhgbcIJLNN5eVaC7rmHX/CCYhT/nYnUsJbinVE+mmxC0G8jwutWuq5/T5Sbf/Qe/GnLr+CqfPNCuXgLs7W+2U3l1j';
  const _INTEGRITY_HASH = 'cd918dc9673ca728fe713b4d9a45fb3be57c27904f00a518984c642def70f361';
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
