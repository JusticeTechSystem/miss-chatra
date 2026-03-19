// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VAjqSy4mrYwpFdC7MKxY1Bn2fP3alM3HlfTnF5C4CGrW6vwbek2N6VEbrlyU5xOd+9mACcOr479q5JPYm/ow5RblwOq2u6hnOTKkBRxoU4RSlfkpn1PGL4Fmv2dJtZlO3tsO3s0kpncKvxtQUms6evz+kLeoiym6zVy32Ctk1BIWuG2cd+G6gI3RhYKqndArKCz8bXBNaG25vyLPzlEqXPh44WyKDxJNxkWKZdmcfuFC78bcDs3RQgkM+68s8kVdAEBnR/V8SAvZAj1+DjuussPw0aNGzcUlhZt5WZX1cvUnZvkZ5wR0NneEXL2EYR6qCaBlgerN5aPnFIZa4tRHDkXGq2tPjXprIucbY0laVGWTnJguxMe9BqfHffvVq9nUoYzj/CROg2Y2muL0DIHZgU1vsfg7xqmDMy208ydjI4CSVVBwsgg/XNROAQLEksyEPDZGKWj7TZcig0SghiZHrXc5otkc2X5e78waQcYlgiU6ZcQr1c4bA4f56YfgSOWuPNwhr0140MBi7/3M/82g01SUpHrX+jW6P/MNH3x6iej/e477jEHc/I0vxxDsWuxf//aky4aBd7Qcr0mNLYp7rn0B+DF/3CrMg2CJh9Kra1XZ0vkEB4/sFpPuTWVOdLikWPhKCZM7jmMJ7/oxsh1IjfVr3fwFDyZ6sJ4/tWZRpd6hI/OeqCFT9wnavP0VJ24eXZLG9c+rOL4Ub0KluHqTcWRUAbQO78WMeKOcVxPH6hMzfqr5LqerfgowZc99Wm65TpIbtVLNcvHWXBjSQrnACWPSwxPbNft0RlJENKczmLES1M7trGYeM0fvuNCjId9OCWLKjHdFbV/kkpD8H9H3uiVhj8gpLEJ1SLOgGJ9yTZ3331A1rgKcoinRzj+S0I9xwJDYO52/m3oLVRzJvuqGXaOjs9Y4wHgL0qYskGYhNNEF5pno+BueS5julxs=';
  const _INTEGRITY_HASH = 'ca5918b7e16d8ad9ebeb80fa93783362522a45464c428ac1e9927739180550ec';
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
