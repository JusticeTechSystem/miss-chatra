// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yZKVvqdV6M37XelR2FFLksj6c39X+Y4wbA+aEW/8ebPpsOdR5aW6bpxrIDbjaxsYGr1SomU0ggEwHxFdmUljX2Ja70ARLEwz/MfLzH9i6+lyC+XUeGEjWopDFpnAcZl/mzoxzCBui1zlamanhK04lIAK3NfS5Yxn+tmLQ6CZ5Tbba0NTMFcSvOr6wNZI1RBlQV1D3I4+wAjuhZJbYuC4PLfrFObsl4Fu6cGarZEJpw7Q2ny15i/zQYRsn+RX5sFTnlP7pfEMJukf6d0JVdlkCg+25Izhbpg65WBImTfPDAlfpvyj48ywMbA9QeU5hnh/i+XC+oUIFB7UnTCS3fyOyByCPh+bkdQ2iKydXasxQ6Waq16Gx2E77WtW3M72Vcfh1t2mhJAa6JoOk8hTqDFverHedLyp856HDBhJieCgmjXnzOrcdeG7pU/QgD5QnECNse1uXShTZFNZ8gz/UVob4SbJ6qrtu9RHxpupXL4a2y3rZE+rGWXCuGa62cBUMyyVrOx8hPPEHBEaYF+tKzjAystXbOjHUtScSyCa/f6n6NuRz7Wfox7Vdox6RSOtzEN7USCz/62xuWpE2jOdfXkxONK097+PbyJAyPGdUdgCIhduE37/0CEW2CkUFsi/OztzRGn4V/mbZJyRqctriN6wYzn40I/qVuKJN13Vcnl7z582v0DtFjqWQ9yPo9pyLZ95U6MOR3Swg+RI1NqgA1PX7dynnK1jICyA2LfXsvXRBP5uT/YeCH4/pET929RqiVQKKxaNlIt3PQFkk0UF0z+c8icIEFtZ82JKFTGQlpu/NG4hdANHD/1wxjrAKe6SWkLokd6YF7+ITy8OoTvFxP/yRm4ZPgr1XikQprY1DNDJN+J3pbACN4/Qzejy3GHqPqclR6ZQjWkZKDjXm/Xhc5xDxrlO78pRK77IqXSb2Zq2xmXrO09zBIRNSgbrYL0RMZCNKKoIBe7VJXZ1HAsW78gIIT7D2fzMvExs0N+hHfi0awqZIFFIf4dWzduox703RzcjBwqXCQv6X6U8ZaFHC39/Zf7Lnap9geI8EkNuxf2zZjYoY1RfXKL+hXFQWe+Wfw1ed75FkhpkJenwcF+ODmEZC06YlRlzEaoNEZ+s2613yq4Ee88xep9c4fnQL0+OMg0GjMJzUcn4failJdMYFgpOit/mQMiZPgUUjR4XL0bupK+0QEUe/HY+W6mxNiK3Nmwq9NkzbZpY7t4R8xx5bLr8wDX3fO0PUFMZa5QaynSj68wvJ/qpa2dsIwNYgNgAbVOuL52XLYqeSWYpiunB5Oxhzrh+m6EFne5AXES4VU7WSmfx/tYBwPQPctbYWABGlYGhjYPIbzBDEI1SG1GGBOdlc7M4KsoBcViZKTjRHYJre2GdyJOc4qHseN3dBbq8CMe7MyOM3yIDyw==';
  const _INTEGRITY_HASH = 'd8d7ece3696b5c978f2bf701fff499c79c31c305863b88f9bba249c8291752bb';
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
