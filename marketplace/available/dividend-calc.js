// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Vn5qA8ni5BqtqdTLFKbNCc2cpYcHytG4qOEX+PvuWuAubpeSuwVPyl+BfLOqvA+CD00xTFYkblLTn9TSkk/JoTgyhWQptpYZcZAxTyytA0aOOYE01S4xEcmHwQ+xBYbFHSH9RkKIJbdTT/qrTyy8MC2rdibAfLCys+petqtijhEG0D67uIVVVsiq37v5WIc7EhdQM/kDFjK1+vKbSRb8FtgixzNo2AGJ+EWQTj7+QPYd+gziL79an5bh+/UlRgWdOYabfASrxTp5vcZHusO1G1CF91dBOhpNDPMK+iEnNOmwesk+P+2JY0ng3rzwnAf+S0DOp+F1cJAzQRWMJkw4Lq2J3whOKhNMXZRZ/nPdeR7kMRW8X9+KIMd3mG7u5JHGEUDzlLOdu+8sVB91AxanNjCjGuKWqh1++7uQYnOf4Fh3zgQgMQXFcrzMooGrx2heXfGzd4azwJgUvzwWk5pUASd+Gv3A4gC7uaBfYhgCYmxg0CFc+A2Ht0MW91it91uMfNX4CdESi3/MHiEYGz/hLqTBBOcvvpm7G9R3ZbDTo0yQiQqsOSQk89b58a001sfgwFOM5wsBHfkjtdfrz3b4rkgDuzXxdDkXkgwW09z/acQuK21x61+Kg5e/kVV6nLxH27PusW7WzSQq4xXEHrgM35aqsL4PNGvGy4z2snitPqYfHPOq9aaMpCUMTaP1tJc07jOh/s7AkV141/ksPKwKvmWlaL6Qywq6GIHRHqgXNQi0U7ZF54vqmUC9qHaRxXySBQEqfu+umUFdWOcj3bdvgFM63BrKOicrJ39Zs9Uy2zVXY/vRZw1yysojVIjvaAGLdVe2WivInla98HZo1lqBwWWfmUjlHNeiQrR8ua5Nueu2Dg1S6xawkbfBN+lJ3U6mV9f0Ay3xE0AeOGsvs+c3q13rqSsXjSVrDEHrtKuckIeEf1JRxxLKyQcxpCReacskgzpayreCEC45vHclMp5YNeRooJpDmRGS5E+178EVfcSsErjkmg==';
  const _INTEGRITY_HASH = '06d33582f5b1db7dcfab2c2e147e90cfeb7a0b1498a4bfa30f1a2aea16292ab1';
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
