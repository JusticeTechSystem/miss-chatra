// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tE+W7oiUdLiiOWfHr0XkPBmemu2rv4EHVhfBHEMTfVO5jGG7OFCZnov0tINKZa0eDJEDCVq2xuyrw6WR2Gn5wil0n5tYDgcrH4FhuaqGau2IejcgdjqSJikLw2d4KQ0h76QARuhU26BmIS9OK6WbkTGHvecuzYpb5RmVAW5xO8/vjvqYR2XNMFMGwBeU1iB7B/xcpOy07oZrj6bEMd1FJXgsRPHxUht9S2mUvmjIdOSm/mO5xMnkEQN4wZW/lpNQVZufIadZ05y/c3qJGp5k0a9IQcZ/FZ45Nl71NqOxadAUkUnETBZ/K/7YdSSf9D/rQPwjOU0G/bjneYLM1H0nKFwD5DAfbvLJvPGB25SWS6+Y3tvtzLZDwibdNCML9Ppn8qqs8p/Z8kWk6HFKMj+Y8QoiWTP6VsvPNKWld12vMDRTIp/S3oeTGRV0OUyfdF0VnvyR92pSGdvt5hXl3dOwKdlrplGixaleRU9EtKy+d02zdKww1kaGxMqX1Xe184KN7+D0hHqfUojpogfO0GPxwcXFJvtf++muUaP9hy3vMYFUL+GLVt1CzIMcFwrNxeOr1rvsDGAE+MelsSobTmcKHBkuKmXmh5m/p5Qk/on78PF7BvlEGx7IXfGcLldoS7mLXpm84xi8RSyqUq4nOYxeXH861B2fjESfkEwsQ5twKkDx3tzPXAf18Rop0kFNPS6U6mkks+uAShYbTrYKNKLGgYQMX/NsV5W0RBgEoXenaeptXGnDblL8rzGuTMV9XeacZRuwOl5FeY2p48TjQJYF5zORlvInjPiYz2tAPNfkf1ThOaZ0fLwm8eLAONCzhl+uPcrRBFl0laEVajSqphxS06a2yrDKuUAykVYTooRHzntF9hzx7pYXGAPoz6Nrpb/+gtBgDfzPSKlAWRr+H7tJkLeOGbzS34g+tY/t02hCTH7vmxCLd8H2QqJNKsckZy5CRIaU7MDj5Q7XxZEmM5yM7oyNbDzFNNqOsj6nX25MDHdkEWRffZjhxZzBQr/d9t0h6CXsTgi9yiJbJgPiNYNMHfjTJMdVVHWlPmfiGr+svLayAnixJNvTml5gYegRXZVcwcW8lUk7eX4jJKOZL9jIvj3pO1vgg271TCyAoRlk3eEhyLXLJkrLXeYHXE/nc2qWIh1260IHT3BC2L6ML+ZBUj3owvGr0EDfuhHGvhGuNYcyLsrXBHtmJN94NqbUNIAUEjquEfrkX8gmc+3pSwqi0qUfhE+GT7rlHbqiijAr+SwpnAJYHUDBt19BSyC8JceAO0HDVLw2g+utkPxfS9rFKIQCKqS2pg0y6TY+b1xYZ3znExIhKILI3E9NtK2qJAAjf/Ds7p4PpOl/UIDf/b1ccnaKLkxHj3ix3/I7q4qpTqyAkwJkYhVGWA==';
  const _INTEGRITY_HASH = '09f0fab6c0edbba128241ec736e0f2a2f9038a23e51ba695e56001c8ff38fb94';
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
