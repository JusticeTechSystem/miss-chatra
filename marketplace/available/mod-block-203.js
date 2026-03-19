// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xK1Cofu19lhn9xXelNeemC5KVnHmLRyslfytcwkmwNKFlkRsXkeqOSqiZ1+bWCSrgEqZVBfXx43CDfHW9FraG8c/ih0w4OuxKj88DtPf81EwbDJXBpTT8pfm6c7XEcSZ+V/zHvkFg48LueM6nD8+8Ogpx+rjfwF3MMkv5ePFHHDR7arz2G5zDl4QEVqjQgNyJX7gBWAuh340Zr1oqMVwlIo3yr7Oopyx+1s6vu73SOh6yKXe5g3a5T6VRMuKagN3kc/+WVkAXIQMlyb4CMR4v7mmIGBJuuAFZWIKXlqcNMXb2KpD5xXAFziXbEWbW0RYeMAxlu119+q93BVpY7yjxafsUJvLzFyvnzqTPqMy3HoelbwLnwLToWwe/R1U88pEUx20zqvHj8zhggXYQ+9BE9l8PGKl//f40HopF4BpulmmSEI2Rrecb0JssxDfgZqHVEkmm2oFSJNTbLKDJlEVhwXa9VyrFQuDYjtmmQf4w5eya3eFR/StEkq57ZQIjGBDlCk5vDVzA1Dk0doL576juctpwjjeZ9VfydxP0Mk+1PsH2RwGQkd8mRy1ZzUFWVeLdVxiFMvWyax8AGbyN+nMRwIsloY3d/35VFNmKtENERuzPUWmGx819nzCu8zlplwKli7Rgd/j/fgNlqVBZPcXwJaKN+RUuuU/Uetimu6t5LsQRI1zqK0L9vbwtELtfFIqClX7Bbg+GY/9uTr10fqglA6TNkG9Oh+bJPQkGJgUtIBr2TTvZL/yjo57zJ8s5Uf+y193pEpLm/pcK1+9GDHpk8MFFR/WuMbt/+GuEZdUr4jnUUG+TcmqkuPr7uR74CAMSCiUp+9/nqYFUg8QKC7koxNadQb8VN3cHmF4Bso3jXpdKZ4MeWFxuEKC9Xg/HjSoXUxeTXXkF2qlNDp9g7k73BZfOZ4C/yRc2+YNqYM6ebgNvI7KeY/l9PvpqJkpwuoU5xfLtvdQUDN7uSSvCSbHnIdObWH/L1KTc1++WduX9byFhuVnNoA8ZrS/KkCWxMVvG4mTzuEHI1d6QUTfIPjQ//U24cGwJM1aE5uuhDh0AyBcshCQ+v7WhNLDNDmwovfr6BGqWzqnkiKU56RMUilbjt7OZYaZ95IkonH5pEYHRglWsyWKByxlqBjNtKKXd5KucbN94aebYhPDZUmXbfBJ3v16thbIQXMN/TSBJg0NG0EJAFWZnmVtTaKUs6h7NIL0LQnuwU4lBtfF2Uh8VXo/K3yg0eUOs46gHpSpfg3xZooGvmvOcbZvoMsBwO+W3FDAynA6WkI3BKeU74njHneSlid/5Vc6KYqnE93hSAW14zNGF5npkbekfenkSsoLc9SxDEic6loTAK5DVzESWYeH0NyY1UdMPr9qV5iG6jKu';
  const _INTEGRITY_HASH = 'bca2c840e1ee9e734e0a562b45ecf10561d507de28b60b9c12f7b426e3fc3ad1';
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
