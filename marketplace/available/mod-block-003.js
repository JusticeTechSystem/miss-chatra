// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ef0HgojM/8gotjTsGY7OYY2uFTGKpw+rnyl0yecGy8wQi8DJ4wlhjmBGyH0tHvpeJcojckQZemFALmqYr/CxCKUETu32Dj2G/Eb1++ZybABTtMiuWV1yZqr/j0nms9kZduqsseEzumTn/pleNxZ7+7tjYNKDC4mJVZbF7lLV1WTKgqToUwa49zMAj8K4gXjes57GDYlMDRkJcJ4FvNHARPzlEzM8dZtrrhYS1UeMCp1AcVkr2/Q6wP1VgDYEHDw6SYxY8CpMWzvHWX4H/bIgaVZC9dEKsdLc3Zyyy9LGXyHm/DGmBKASFz8sXpFtbjCKotp6rLTG99YuUCULdf88wZxGXO8D0Yn8gbHDgwS/Gbu3KBE6UMhefEKgH9SF/hZnf6P16b5DFK/7gNZyhtwKVvNH/ZKMBm/1sWSNpB2nuF3H28BrqctJ+LyQNE02Ytiv2Oxg8G6Xu6nH33K+iuhsZoYqpqBGljaQnWloWxNlZW2f3cBMzRbtJhUTffAO3pJUw2CMLrC/Kns+9gR8SeoNGjiWeWpyQxsKp8tPiMidpZo3BgsyodP6ZBlTB/VoyMqbSfoUVOlNFX7EFqEj4Mks0zgjpDj6j5gRZ4I7pA7bAu8WuPinDFlTwIJ6Ln2mfEwQHltKuP8PBRuCf9hOGJ7UFm9jFDy0WKBw4Q3gJpHFZwYbjCNvh7diThwjjoPv6SpsMAm9ZN7cpe2ztOeXBrBjHuEHV0M4FhhXrFNtBA4bteQ5qVaFgRR7n+pMR4yrWWtCz/KWcqn1/lbk4wD1Kx96m1krC3rKc9dk9TfR4zSYLjF1+IshIDIKjES/lRERTFG+M60YwZbWJcj8cpUlV0xyBgBoxDE3t80httfcqO8XTI0286v7RV7+GLFaYDHH32W5V8eMy/eDrBB46G1J8nFBFC3ES91bJQBeGW6bILLSFgNycei2v2cBHTXThEm875aqOHMRSYeQMUTqcjFMI1laeVOm+d2Fe6XehvU1k1bOlomEG/CnVusMYLkqPIXk5uqJWNuc1JZSDyqtBwRM7dfpgr1JtD/uN81r9XXmUF0twzYGoEW8+uwLWsrJ/UmjxL3tSAKEb5jxDVJ08BuusERIclDQQUX+5hQ59r8fEcwgIp44uPQfmQKUbPPZdWmxI8lnGb0DlLoB5/9XuxqJ4y0ZWlwHZ1Yjh8Pdejd64Tg1xzLOKdp/7S2LOFheT+ChommxsxlWns+qRZ5745IqMSVASBntqTD3cOc9uLHvFuU0TdmHxDtFr/aMCyiKOloO1FfBraY2e7jDLpJsJmUSGF/6bk0FdulNqaFnZBJBRlW7734zUlsof69eqMPormkCyRECVJvmSYZZMBukAaTwU8bfCYvoOK4=';
  const _INTEGRITY_HASH = 'acab1d9455f418a130877fdc94b49ff2811ce047b57e27723b28e7f44f3fe799';
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
