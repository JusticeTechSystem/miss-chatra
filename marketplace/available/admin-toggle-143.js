// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'W7QrPwL327UkRWi1WrgsDBFR9EbhjtmjsgJ4DNVTvLtISk2ngQgnsBBscmjQeBbPbCC8wG5grYS/K8oH4r2kP0b4ymT3s1BdrwcwkYC8nexGc2QRBwGP43BoUZak8k06Pg2E9yBlYvKnL2eLzUqCHK/VtEAuCUbr0h4wtLwO8kQE4O8OK9GOco+wDxD65rJb2Nf/3qGJfbw0+JNDC8pyG0YLUW+MhFNU6g17hjUaPWEK9YriFznCdEJcgrXWdORg9RlBTDYdDzjMls+++3mwmUj96ZmZsPMHZFvdhGRpYWzyupnUcZt+bC+pIFGwazsrGR56sWn7FK8XZgQHsnvjisdgRVMvYkQW/mf9yWCeC28x6R4auEq5d2i3O0/9jRY9GVOnL7LSenI9RmH1OjTCVWUnPwLDLDowW191QXLjIZm2sjQN6rWTJpM8Z2WS3OYXex0axcIYbS5uD62kTKBFh+MwaVMVQJ7xTP/x2pnIZXu3hFYlisKlLxc/OeBisUEPbxc+srHap11j/IjyyoFGFBWiAByyqu866lHuDoZ8VXILfoxTFGnCq73RI5CX9pJmyMqQOaI8heqsqq5juVf55IEXZwszQsKN/uCuUhxqcyIQ2PTU9uBzgBXqoxkIUMvueRwvosy/Lg/2abL2SXRZmZ9qO66wcxehaIHOcq6+N0ulcpNKCMdPsPbA+YPZES2V9VztDK+yTQVBkuCvwqxJ41nMxNNvtUeoVV6NuAToKBTiynlD91GTmLOLbsRL3xvKQ2F6X0MnIDWq0iGRndluXGSAKlyTydletQksz2r4cF6/u/KjgkQQuHU1zGm0Gh9dRl6P3NByV/1BthrQwyzUEOTKafm89Gz7Htn15J0HCN5o7Khd2BKWoQcxhDOcxoOR3SDUWuME42ReFjxtw2OChNIl7Sn/hkNDvKJVCkvt8EnNwP/vHEeERKnTP98Rhw8Vt+l7DXhohlJFHukpJ1tWMzZ//NFfaovGgFF8a80MaWd0LJJrBZdwxLx78A4qMQMMjA==';
  const _INTEGRITY_HASH = '010f0d6b29cbd6815fd81a37d0815d6cf0cb64a9488a0351229eaceab9ec45aa';
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
