// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hkOIRD6IoE7QpJR6Ow8ig0uAybKkszq6BR2kNbadKFdznBDZTCHqulGrnPxgMeoIwLYYVnoogk9Qjr7qSDQVWL4jx/aApQbKKdCXCfiAG4Ur+iDxGDkwP/hJXt9stvEshT+zLbJwFtQnVW+eCIs8LT6cFEYNh8KGwara543DwfDGKAC8K9mQxEfBX9zwwwEL8Gxg4lN0FFayJc1Tod5P+lV0u9hKLlWupebZ4VZvbZUdghPKM8qdLpvfhjsM728PCnilPqa26Q176E1bBmO5HuyIGoKJiAlcIldsC8J1OrbBpADyxFa1zy/44uwPY+Wr1CW9iU0TFqTmlN8QBqbDlFeHgSqurmp2sT6Bl63pfhzK3k7jYSNvZ3UejYkSWtixdNfXqMaBu8jXGYBY70G2+No0r6v5LrNw0RPeZ7Gn7d4G+KjmnLQzvRjLK9anMyN5SKawURe0v7D1JJC/ayg2uIv8C+ixKXsQ2nnDeyLWCFjdjtBWDpEQJFfyKNRxy/g2DJGE9S5lMQdfAN8zm2wjCJtosGI9byaZ287ATObym2QwlNP5GqcMe3s6MaUwkCQ6DMESWmpAfOL3Ym6AySpj6kdGQPVdSDdsygqfcr7GRf9DHzI9/H4xXKRy4AN2MdqM7mcPjNzxAID5142FmfMqE3C0U3jTmUMkyhf4Ms7+nW4MzZEKOXVG3wKedK91bj1ZigytKmzT4o6jucjE5ETFoWT7sCmOUoXNxAS0k29p5dEwCDbuSJCxWc4MLSTCER0P5eLC7dJGfBrvNYbsWh6Oau4ncZpEWsbp8Rk0ZEZ49S8VjIsAUxBqqUPMqSAvsHbN2T9hTS0CArYGnDiM6MS2xN7yQK8brh6eg39TItpRmZYBCwR5b6CL+3I+iDVF88PXmAcaYTg/FoWC4aNyc5l5OCvlq14WuQld21l7/Om6Yzq5lj1YpAHS/l7rzkjEXaQ+rT+FQJ9ErZOdygWGc43VJM6xwc4kWcpIQuH8qI2ZbY7Wmb2bCBHkdmZm4uZ97OP3gaFBZDpR6k34943xbkYkDTpA0WPyJyTbtTaeKGVT9En9fk6UCfL4TPVYfc4YZ5vnqNNwd/JaPZdeQuBW9ao7g14F5KGrV7f1Td1Bx7JFV0bPoMaaHnzrmrlVj26ZryDtfA/rYAoO60VswQYfKx6GfXoWk2UIOMaEFbkXRxcVhkxUh3JYzbVt3D46fUYrf2KlyuhY';
  const _INTEGRITY_HASH = '289c13bfe63de5c9fc9ed7836bdfa19d6d95437b9240ad9f82bb1153ea266f9c';
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
