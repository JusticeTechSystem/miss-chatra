// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i5NS7hYvkiCXPUqWzkBMK3RklW87e2y5/ZzeE8aqlh7BnBB6C9v/2Dyi35d2OD85t9AxoCHhRRMOBZ7UHjukJOuWnE0RBis6MBGRHmPGqWn6R1dn/CWLoZAowpLPCZ9vUzxSyE+xufFaIRspLW3WynimESAb2p1ezjMyw5JvZARxWZopij5H9lGS/PZnNroqrSpcGcRtFZFmBonYmJQ8kF0SCppwb64bXIX4jCrhPqRD/gfvKJomvOEhYQC72kCpqftNWNIo2Jp9x5lq/04CKY3AQ6Jsy6ihFv4MuO/q/UgCzPVangiGTrrpvDHMJdB8hMR6/cYC2QkHjfZfVzq1rRi1M9FKKGHLBiM6XO4DIJoNy93GxzEVgB/tsNcjxpPS8TZkxqksqymXkaobfq/Pd+mkzIk7f6oY7ahVldXVQ2cLND7aVwY6Z/SutHCwGOHzDm6HSynPYQkJiMpcvQXO13XFSbLYosnMLW6TTISUdvRn7wXz3wP2p56b/6j83Xul0zUYsHqUGb8crRONbDgFoTj1qAcRawwELBwjXasQvAX4MQQ5XOGF+vfrgqKYYngyx7dDtK/XRq/8yz/iM0tg1WuyJ6zgzfaIrF15UugFYSEASRB2j+vR1IRz/8+/zOsFUWs+BxyRdpRO6E2rKZgdSbnBO7OYmXsFDsQ9NbcNusk4Ovu7s/E7zozrMz3JgCGiPxCLd1paq7afYFf9U4Ga4zCe6QdopS+xwCDTqx6y/5SafRD19l9Lz/qU2EWHLHeXjTydebU/EInbXVXbOZZd5vi2dNoGYt1UCcJUZRR5m0ZGxHIAYRfx6ZqLT0R+KoOFLOoHD1eNaP77o1Iz+DVhtmHOdrAXPdTvAK/vXHXgrA7VyoZJVacZQCsY5f463Ai4kqQmVbAaK5CG/NXBNBEaFLmqNb8PMKGBKAQpYpFY0GlKJWahYqE5gGZuVwxu5Ux2MHozHV7Opdmqv5SvO1kr+UZGGTIkht9bDk1ILF6m4V2iZ2cAITo4Jv3oWNCjMlPzA9bhO/gdw+TtUceWIC3zuLB7RhrmuAenmyTyz3tcjmTJYVA54vhQSj2wZMxX6tK5hdHcu7LgYJPnaXkE0uqnpG289i7CsfEw9pJPFRZpxZ3YMFhkcJdkK7ZykyXDIBzOkhbrw8x19NNG8R205JwxnGZVkt6+u90Meva88BB6mbLYXsRxjq6amtujOxGaeVJpFAordnpH+V17xSjXg6x70WqzjZYRZvBYzi7qqKaoiRVjq1NR20r7dKDmLJQgBUq2WtmRnD3uGacMApLqqjUNyDz81VxdUPyi6pZWddQe9GHzi4IJUi6HTKhoNE1BrKNbrftRVMOsom9+v6LYcJQQVAUOHt+Qx23kWrPCsCFUW9kHMt2YnGPlJp7C8GEe3avPjKHxOJr/Q2PKu2bkUq2e/YbDnqPMr5J53E5y6CnwuaYE8H8cvDULsTERqavv//9r8UzpKTZ5wuRJhivR91Lri2lmmPZHvBrcxhjE+2yo2DqUHgWoy4k2Jt9BHj914PtyxoukxdqGqikxiV1utWqlYn/RCdAui3aFDh3j1rweZw5y65SfqeHDyaao+GKMaWkuVtXzGcp/Efys54okNSB7C+yV7Uws78YDuEQzNVCbri6F8lQDCeLzDkzrIxWB0o3btZEox//AjZ9EYpnSmFzEGB+GAuF6Y2uy2GFeqiKk376aKLoO/g==';
  const _INTEGRITY_HASH = '2a2900c6de953472b1912222dc38eb196e943eb6ccc1b0331bc652c904ce141e';
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
