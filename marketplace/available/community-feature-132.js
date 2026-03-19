// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/WuU/HkZB9MIoavEIYnyEGS7QR3pWfvbigbIM4GIMTGnMxnmK1DsvcpYFL34QpsBVqwIkq9W08bUlZhtpg8fC+e4vZ9kjspY/MWzXPk2dqYslD2yeTcGuoAy/fKi8GLcx/LoQyN/VCJwr9vU9Pbln/eidnCBqpxPKe0CNL3nnOYoBpbrTCMKJRJRkN1UPSBJ8jrzVIIRPPJo/DEwdhRIWQDdgQDdumu2882n0M8Sx5bXZS4rI22HHVhJUrucglnqHWOUOR0qS4SqHmYKUISpGfV2aZDFuDgXDb+PhHPUMqn7yTWlzfqu1QGLrUJdn6VeJKx/DUUznEH2YneJhTAi4Oc5yq3PI708vaL3QiHu4v/gEuyJ22QyYGaoU5ZenEN7oIpjpjWutxa63u/G014lqcWZQJij7+Yui6G6S/wv3vXvQyqT5Vs19ZMXTnbMWlri1Gu8ItLekpbIIXUgLCpRpTL+/WPSQOYyFaEkSi6itvZ6FrDhdncXwhHkpcoU7CA+1rhM5J653hngAJ9u09a7ixjR0gUeRvUDzYzoQqh3U0Bf18eDhNz8/G+A/pmjXOLDHMsvAhu0ZYC9JrP965on0vGneEW9G7KELGIy1kBGnq61bLzVqyK8Ao8Tt4cO6FIpmXb1Wpcx+ANZN+SHqNsvrOl3oXpeGzo/an0VkrtyOI05GtPwlFESOlc2KNFh4swr8wkzSIpYHwvjznmH4OvpylwdRVhrNXXH3jmj5IlZ6IYgnK4=';
  const _INTEGRITY_HASH = '404953e86de3a7464b9f349e6c3d53afd96c611b207e7a1dee078070b3e81773';
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
