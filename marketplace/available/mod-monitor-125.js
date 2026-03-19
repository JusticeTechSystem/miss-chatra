// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XYh9oZFx/D3aRV8iaUzg1cIwEfqxz7I+Zyi7qoBZ7tTFWopuyPAfs46MizoAqafPqsCMyYLuIy7qFIs1+I3JFlg69e0WnPA5BdrJzE9rDaUgZ8L6yqDQpDxIw9qVN2zrUNmHH5g/Dw1kTnVnbtjp/gj/0DkzZHq9VnOs6GS2JwBr1rDkSMQvhlezD1EoU4e0PX0iMEhJyd61JlaBsjhPY6nd2bWLkQrAHFdMk5LrZ7wt7Vj/hzMW0h79lXP24X1cQkIdruvqUtPcFL0IL3tLOjgAHDX/KCnBdN5NmUWaib8yXw6OGDgO75kSEU7bzehWf8gn9MwrNpATkq3lxy/+CEuEXbh2tsQAw2zWj7E4ldaxR0f8gC18uhF7bOVlhbyMa9EaWGlyGvfv6PcLemk/xIuMdbN4zhV8tqxdRsXdJX42ld1SCkckJ2D/iG2dIUBV4ztNR76j8PbxoqHEZ3kelCNsqKiq3mmNy/gQ2PJAPkHf+OsrcIg5jz6Aq7+7hbENVtUpeywMccNUACF0k+JGEkKQgG34tSg9IV+uf/9+l1snMmocvgSzEY6l+h1IMy3PyPwN+Gq4pMq9pOzT/OoBCnwKWXlKx+28qrvAuwRoO+5Y5zrT5NEj1cRspLkQSGTct3f/BEJSHjkkYqpJJkBzH1p8bF6qgEDIx7aBIUL/kcItKn1TfFqRildHVIdT44ilmGv45sqFz1w5RaUGCKuJDyqXkpnKUfqwyi/OAbK2kiUu/J1AhcbZ/svK0vY2JYSTgc9b2w4/W5S361BqBPQj8VHk4sRD/KPguJJUlfn2GELNXvGV/zwIcZeTM8L7k71h+IP8yrfQUJ0Le5tQ2G8YKPJvFIcWwOenec1n6mbAGVsjc6qxTJNENqW6oYsZFOn+9K92hnByrrdr6PTtxg5RYMxIF+QINx+kHxzsZKfBY9JG1vqLeBoU/qinAcW9mwKR6gp9J1xnmULOWcQowp0A15SybDb8DCb0SZTI5cH5p4xjk8GF14hT7hBV9BM13fDo7vVzKnhT2zC0mARd29LkqYLC2XxEKWsozjWPoWRsYxm5Dns1eiTI/abOtj+pZu9ZKXffHBMHrTlqgPzIXP/opUUjh6LSAh6FrmI1WhbiXZznDKqzvBqe2GqIvDuy3N0swxZD4clL9PF2YtC+4f+UkHVHULYHuWQMcp2xCFEMbdgezAGkJ9fC07jMlq0aRv35D3/39eQpEZV+eI2U+nDDPI+ppCyrf1fWNk6V/Ce0yYNyHa/peB8yrfqWqqXvVhgZNNSOJgqt0GeR3Iju1P9vXGjpsMU5NnL8/a/0oYZb5ku7o1r75VS+LXDA7X2Ybg9bRs0AdVLUaXOXWM9XP2uurk53IVHwDbt6MPmMPykaJXkfuTChFDswMKyEMpWBrzmjvhE=';
  const _INTEGRITY_HASH = 'c959953c9383b59e208f2aeefa96de47c182b99a1e1f8f51e80b3a72f387a5b3';
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
