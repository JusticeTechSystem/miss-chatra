// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Dh5PYt5hGtcVJ+u2koOozJIwIf44VJWKwsjmtq51wm5HGuAFCY1Frz3WuobQc8uZH4IZPhURuo4MHRU8EBauMBDMyQoD+gLCZfOZqMm2pWuVVUy2/PxZp7OM4hJFAIUwFgYRJEKd+xdb3as46yjY2iS59rZwDeGZVSnBhrptRNKtP7gD3lwpQR6PuSFMQJHvq+SrdKJ8llnIiAQkvUckChFQS41YcEUB55C78ZDlP3RG5Y7DEmX1KQh8wF9bWSgXJ6AYfMcwFhgDsch4ZCVIvVigvd7f6QRIhbc7P9ZUXZFO+q+jH5DwCGXqhbqJeA2yMI8aIiRavxIHwTMMH9Uk9oSZWQWzseFb2psedjf3daEQbuWZPt3WpXFFSQ+YL1Edbdp6veaJXiRfni47Y2JpJBr0Go0i7rgxryRM106UFwIw80NQjOH9Mr1GajRNyzdFRfduJ09XTmy4U3ekU9fWbjUpZ1nZs9BFkYqtoj3yFyXcZHPzH2kgjm+tOqM6jQXNQJ3Dhw4i4egfWHX/DQxgrGbuoIBpTyre52xind34oT+UR5d9S94QelVVewbUFnE+mk16iAZP9s3to01c6+fuINpEjbXjpBV8evDgKhDWenDHiUOLdvPX2rqQ/LHTgVWoekzAz7u8Vk/V2cOItjgvsQf49ysxfPZqsi6ob8CogPe4y9Zz8bpodaC/8fnWP/NUTYbr7U2BIbv5OgdAcbjXfWd1ldGkvwF9sViVW5PaIkLxAPQ5yiA=';
  const _INTEGRITY_HASH = '358160d3c1abfeb1ebbbeaccaacc85a65ff237b1823ab34f665af970c0933868';
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
