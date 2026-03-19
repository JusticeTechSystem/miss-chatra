// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rS283AWzL42Sx5caz0MftkVWDXrUdaWrSqJVWoT/1huCrbpcVTxwk1g54tsHP2jl8hbjdaFZzIIezMvZs1uqjUua2NL4rq+xMndLhAZJsk4uY28lajZ9e8YOSNdBIAbfdl+vv9fNsmorhro1AtYpR8zB4VCyF4Gi8z8VZO0qxUPXDdDOqYZJYORTC/gS3syxZZirx9hOeSg9aqJI/BJYnWZ8Il/2mVvQkr7lYlvb99jsTk+5pOqv2rVGrs6by92hhuVFXz7KDWVIrgX2KQ882EX0oQEdH0YfI/kTIZDqLcnHOHYxZSOBD4RO7d4WUAPsJ0SSuo7G4JI1I8xuIhg8LZ3euFq1DtaOPUYz1GJqkmAbu+fBc8yjYYnjATNNDzBJeKO1NpeO86axJQ1JbIXJVU8Bq9hm5cVs7aYoBmkDnkjR0hvCBYZuIYnkg9epavj0oqb3fhrH3rUJE81C6PXOEs27YJTmcUbaYwYQ0+HtR3+9P17n5C5FiK73VXGqMlAoJr2wZfG1XpQ8b3LOxCFnGrukxKStOnbI+tkWBIsPmJ26ylscGXsoJqXlkyzC7Ng8eMm8ItxDBUPb/PYe/W7JNJnFZRv90DBKPcbDHGHEC1xpAEdwzc3ZJhc1x47pnKmTgyjF3kv+hZs8zyYGWPJZDmzLruCt6E4a6BJTU0YvKek0rj+4hKPaPQlmLrxB4geVOOvoDGZa83mNu8LxGPDZpjXakuSH+pQVt92H6r0/Kjk/IKF1DbL2jlCRD2LQ84JMX8VEQQvdUo3PJynE3+RF0tQvuO5JlrKGK5yqQE1xTxvvGFkEiFflD/KBMh4Lb/um0x160g0PrVwu5Om455A/gCLXjB6YxJ27Bv3BJGuKxPu3NPwZKVbAWVtn+YuAYt5bbKQhHkUY1JARyDiSlgCxTBmoiGusNFgVFhmKlo23Ze+ZnX16IpzH9uyXR+WrS0jMajOgaP7DCUObDjZMwDEhjNtJDpBT4i1hSgGyacbe2VwWbf3umLmmDyuSjDhDldEatU4wHJCDS68wwRYtmzxhLR1eAnEfXFIDxL59n0uXuhMCcyrCxNYl92txmLecUizi/h63vGnSyr8K0KG2RuWUFYvTZoZITchOyPR4p0f+vfLpT4BlgzA9E7O1UELvsEeapvGsm/XNePZDr1Gs9PAG1II2vmbfw7JMahMK2sajOy4lHvT/n7p6G85QzQL5uQtBn4jKrp38hJX+248HmfLgZ3PjUC0qFdMxdvv6aJwlh0fSV9EZO5aaWZQBYUJa0Cb3zZGS72p+gNeUjPJDDqknVHTv0lSShC0sTO8GDeY6XhVqAuLSGqnjnGOabvLioRQEGt5ftBzabnMw9FQ8IiWmfE7gWfmhYYAJzw==';
  const _INTEGRITY_HASH = '256921daaea4959f5b30ab8b0190557b9b8f47d647e9065518d1c1a7a407c73e';
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
