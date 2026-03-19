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

  const _b64            = 'L7gXgEBMEdAbp4fgUZJXH+BOR/4wX0yepj1uxXgKHy708YAZmuP9IRI1x8PW5unb7gBhP9rv8AqCmm+oi4W52RAlkeZribTarTPTNUxdpALbYTgWjEMT5yJw+jTbVDhESW8L3bLcXBZ4vuH5aG5xHqxYSPbl6ACPxzCzrqUgMUKwNEaHdDvELlXjmoVr7Wb9+13EYXPhms7u08iOeKGJoQUogqLaGhxILISSdXT5o7NCGqWX532ERNJ3cG4Anj8jVwhXCAvwiEUdu7y7M6TCYBGK7LIOmem9gBS223Q1pyDgFOiSs9690f9OGIEBjo6HFiKEhcafaWzyEkGnHSslKFoIsreBXjSdsRhAojtxTr2IIWlq2Tb+H0nRiPDqIJIO5kSlqUc3Jhd6JKfIb+a/lhCE4giuDtbPlLgkJTEaM+baxNB7Im/7NkZej22Pxrfww43rlAfGdZpRtBKgonlc8+PA/eAJ4VAtSsLy90NcJsWC32+AoVjn8mr7iHbomvdqtx43G5kJqq4wGQazEtLA9OFAbMcfBfs+TZ6jcZ4dSs4Lc0YTLwsVxD6lam4zJaReyLr4g073fZIaxHwKUHGLYBTv8sWiaEQwBPtXFeOMXVcSdxhWxYlSja2Nl4YBBN7gPCyq5bdSZWhVumLNlGRcb2Ao2Iz4YGbz/UOc5N/A1oucnbCoBtmg9kHGk73h4hZu5nA0qvQNCiZ6mJLE5mDHOWO+Ku/3Gx9YGcf1wjJACLBNGRd0kQv9NAdy3fpmPdWzU1YHy8neqMaN1ozIxlyGrlWPYBZF0LOQDHsRmtcQ7UdSN7VhYCveDdLal/R24rkUVB7cUauX2VWTUlzWYFtHv8s3RKVrE72p4+/KGJnTcFjdQjK/Uu2hzXxRH5IUzF1LU3ZP1hiJ1x2wQE9fJj5XeX1JUQLr6ONy6MtWhWLRl5Ul7E8ODvKSfBPWHGeKAvnQtx+GSgnbO15IiFDHMGYYUnDNvQkeSrRWFz8xF+fBWOaq13tBHPzJMscm3Jx5s9gJ6Um1kChwPMIUoik9ylzVs230z+QrAGqtG2yoey/fi6WBWZOctPExD1w8lxq2AjGuck+4mKaptxgHCRCsF7scLD8B3yJPDJa/nUY4cpgTxF2zLCqYE14OzGqNBBAkiICVBqsQmITRRYB+aJ/kdbXpzc0ZNHAInP1uNQSJj5B56slkg4E/++Dk27gIW5PpILpv8EPX3Db/yE0Jx+R4hnF0miEsHlklPJaNLCVg6YLYaWrr+tbJ5Y83Hp19UtCDE9l2E9HACza1M4a97auXq1sqNJQH/Cg9mDgrcLM3prnURabA1Udkkdj6KH67+NnDYacqo4us3OaYajZyJn29C5wrfFVqzFL1rfDIreWTqDuV';
  const _INTEGRITY_HASH = '36a3c91b40527385299620f0a5fcbb453aeaca8d2b51bee60dd15d2963f27b6e';
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
