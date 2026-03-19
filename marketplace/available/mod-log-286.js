// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Lao8i66thp35n5lgIASFgArQ1v/No2fOgLL++FPAibZc5xYLzalOgJSDXBRrwp1P1xCE51iCuAounw6A9S+0vCVaHrhUoFah5K3QvDnoWOO+gi0MDxukKOD3h6Q1BizFinawlU8jcPPFdJ2lKh6pTb/oA9ceF9vwgQHw5cyQ/L0zmnqCuVTm0ERikrG96aIkDE1WTiIa7P8xyl/n31LEoXdVOGaa+mkFIIuqOdRRox3ids0oVeYPenU8UxaqanMujIct3F9tg7uQcrMP3l5+E2oufcR/S3NSLxFFAeaXXLmsZKxgLNYHZmtvlY0tsQXUZQ8535FkPqzvIPz/lL+kHxNoCor9g+KybtQ0Wb1/hoet3lUugpYij+GcY5wUL/gwp3a9UYdj4jPVKu9gmz4wHGPbNDH+PLIy+S3KhjW4dzZV0jXywQYXrtb9JYAijARqvww9KlcJczoNj4584OVHtXy8lxU7NiAuCfmaefrK2fOzIEV+r64OeiG5GGwEUd7c6foeR0q48NC+965KvmYzkl0nM/L/kZVNqoVyJsndMZ2korWz/4QAooKYWLHVgOhWZMd/a7cGbIV/nB5UO/Y3wFkFEYLXqVd9eHV1g63FEdZAqmncDGtLjupeInZh8GkqrlnftYupj45maX0mpOtWytEEXdneXiEEwoWKRIaZHsTzKdpI+IgD0thAKwKTMF1yQ2e4H7YRCiEjkHR79Zqx+ItpO7ihp6Z7s/JcTmw+/ajZmUHSf5nVN89ax+Mb9O5yYRwaBBpoRQEG4y7t2x4GPaZjJpol2L/4QydNvBvKfMZC/ZybvFgKn7fvSDTEN9u/2sU5f115HMGjjZYh6OiOH2zuBqsL/2Zq+9FWbRAdK6s07VaOYzpYItO0OQWLwqC6Ma6qYj8nDIx4uDYttYp0/UfjNo2HQqZlhnMAj++DZCtdvJ5eqqpoEUsu7ZXVnbBWX6tkkZYc9LsDzN7bOLRJn/r9YLdfTsUlTq0ao4GGnge41fvg8PmuLwOZmEz9JIV8nzOl1mpRRiJqPLLZGQBYkLZ1mBjGhCrT/5f7AisutgtVQHmduFv4L6jBonq2zffLnEJKL/aYPjYL7R/+nO4nuIHHHIdravqgVEipA1zGKBYyL6/dELVjF8/jfXVlg2d9UGhI1PLckUCQoD+VVFk4wNph20SnDklogozSKoGIvwEk/w7DOued7NjeBIDYvwsNphNYfZ/pUBCyAHTMzylm7oozH1W9aKnCAj6A7uT1a9WuL/7lBwv4S/eKQNXvmrR/OEAZYUM+Jjigzb/Czp5H0qyJ7uw0sre8/fiNSCjHEypQ6q9NuH5jtbRHt8Ebizz+rca6D5ZJ8PnSSg==';
  const _INTEGRITY_HASH = '36cdaf702fe2c2506fb2324adcbbb26cd6486251ac8138b9ca715228e242173d';
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
