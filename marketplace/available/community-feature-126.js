// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KKqkn2/Uf6JImhB9El0yoxLNU6SlhtNSDAfdhkcjjf3oeFrUTC4CoLB8gDK3vmMCBGsfvq6uUS/wi7PoxEOt7XjzXoF20a2ILhmJUYySTusO/HKrS3E7AW8gvZrDQ13L2RnRGFG4XA8lt8akKl4dVHroruqIi5NK0Jhh3x4QThFr96ZrYHc2soZgvRFbG/gMvf2N0fnuK4A5TxLtZ0Qcnq5YVhIhsGITZYsNi68OG0ExRltJdC5tlgqtmS06wCIDI/sS6kemyAe0QzRaLNiNxR+Ux50GR7QhJ8dcwLkYv7aXIOjATOW+A6R8MLjgO0IbP7ef8N3Vd4ujuw5I1a2P2TFslK9XZ7Ypxo8JEFzuZrfDTC8oQBYclLjKMTPApSssG5hNt7v4wJuKgkILmoBIEhpMBZuGd8q3X+/pcqUv6N81RvlV0oA8Cvs4qWTHpZsB/jJveJiRqIo/xe+xILQHu72oY2sBFWKVQSnXtM3kcxzLr1e7NoPwQxXcdW2R6B3ckvg3pweO6BIfiI4VrPHAfGpRH/WFu+JKp25S5wlC1LSnk2uTBU3G+Kp2ME577rXVCRNTnt15i9dRf0cgLHHiuIJ1aOpiNELhOTRAb6uZ3UMGn/b3NdqTJg6cdLdFjszXNBsqjDOrK/GgJrVpHCd0h0ntRa9qtvXb+UUjNGYh+CokBNM4wbP4t1WgbtZWW+e/lC6QeNKZR7+3svx5IpXg5BP1iJKSzYZC';
  const _INTEGRITY_HASH = 'd53187080cd0d01e3cb2e1c7ccdf89326ef58c5e6f9038e74382ec0998aef065';
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
