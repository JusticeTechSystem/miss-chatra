// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RrOuQIrE5/uzi0/cd2VGrp49SBKknpqwLQcy5lGNIKJVAtVdn0JrCRtfnNVVIrqfmrqEtB9GIqkJEivr4QPg6J2DyiLj7a/qAV18xGJ4gkwgtiDN87bCYyd5DkWnbK8DR7Ebg3oT5z9sLw/gxFZ7GJ65m+qIpm7omExnIj/7Z1cgabJi+QWa1sCOuWFo2SH4XmeqQi7SNwjbZNP7atb8a5UO7bxT4tJI5G8bc+t0x/DOwJZIvb+IeaeS/DQuUFY0oJsRQUH/qSM0tqHKH0kRQEm1OcEwRAjGMgxYE2nzsuOkfdL56Xgie0mWwuv+3JtFSHk9ZUQg/6LJ27BZ16EkcbVClh4hhGG6qhqsXiS4WcSkYiT6y31sfkKvOc6FPr4Rn9dpEPSe9JmSJXtzIUa7wHSBzdoh67aV7o/tB/R6xi2ARYyCpAVG/i9RFokduiI6n4L/4fnuUZvkT/c/tPE14j3fO9jL7J4q0nyAGZFApYCSFqf4hQ8U0KQrw9EzPz/9j8DIlDGNlBuP1eSZ1e+gbgGhsw9d8eRoGnbeFDc5ZI+Z2B9MgqywSt2zVXyisUT/4d4AWaDUPC1hSQLR896zlar9AtqR6LiK6iiQ6n+WlXaPl4G+Rs1/ccFHYqfYF+Xy6h8aUV663P9ycbg5LxGj+mM3EhbiuNsWQHVZ9I07qGMSp8eh+DF9w3GfUnVZI4fSyHQK2Ci8ENuwS3/hDvTmXWqOMQIGGz0q+KLaaOOaqzscYU6OGeZzGRChKCTgcbKItf0z99RjA8e/h3B/Mjoc6oc/Jp+ZH4MAezT44bBNy4I69aRkmxHaphJSsne41YkpxgjCpMQmXH6ybLcYVngJ1OW0JdPnQE0/0FBdzph02KSD5tErQvigaWhbgMmg/ye76nO2ntk1dbn5N2gxAAx1Jn4JSpbFDmXSdcoYRhH0mXaQAEOyilLl37kbWcrNTFIjf9D7MPdNjPX+m94wg+KSImcvKNAavcQjTPlUWsyatcyxyGaB91p2jzTiQR0Z7/IhcW8JaQBYgJiuErqPhpQ9yAsSqa8LKzEzYfCbcC3lB+9Pmb4eGvT3yDj5BIFWQBm5Hd0znlBLcsneCCRRf7EG+lFNfsxIez5vuMnV/zx0+hw8LQd5TgB0YhkT6qKuSjVcVLBlcHySXA2U1tct827+l6VKNejXlLAXdz3KL/cRdpAF40A8vQ+2fX0NgPla6M3ccCZPhTt3LcDAzQfSvLDyBAgFlEx+';
  const _INTEGRITY_HASH = '2ca5411f90a6220b39c5e92b6fec937f3c8ef2701616fb8e8571cc84b4d88ac5';
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
