// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uSYF8nKmQCeDO4yoTXMBLOoU6CfmsijdIN1LVxhgN17J7pvpA8Ct3yKGRhc+f+0nmBC3FEzTvufo25op8zy29KRha/LyI+iqGQhTozdHdleINb4Oqi/iemHT/K0Fzbwn45SzbCjPnDcfjbcTBHzupQi1PuOjv2X4ISwYy4cJxBLnvE0InijazFrezP3djX8YfvXkLT2x0CD0eJ6G/hjM4Urp9jezE4zx6zCg4NxLImclSyfwdVDnSrMAFGkBB/HwYIqyF7rATHMNMj893jME/OKIN5fQEj+ZiZrzkijGQ4CqxIQe0cuQ6jzGWfn741V/sLzUbDdv4h4GnTNtv06gPO0o7ZQwiZ+jk9Z7yq5xw66TrcUYxLBCiMRVrvxEo1//DMur09p9odbgqCguAuaDEgwyuXxzaVpqZ25eyQyucCgpjY3SC/cs76PPwS3nqqT38SvYgjO+Dm7Sy+RIMjAXlAa9tnrEwg9QvcXAtpFtN0bmdZAIeKIwHV0tDTxr9G8nXiFyijDxypc5UEb2qds0YoZjcfVQxFO76gjQVT0gkrfO4Yan8dTw7zAOp+tBIZUX1lC1AvDX4OPvzaYJ9oUmwnlANg94FQ9xXnt0meHa2scxibwakybunLHStQG+BRhx40/0eftWiLuR4Wur9pmWxKQQGhpiR3QYS410PBPagbnOLLPSJ2/HKdFfEkTB6PgClsia7a9XqEF/HA2N8QGIcA6O+pPhgGpN5mvRgHvW4JOwrlgfti0sI2OXyQ2xYxILfDHe/JXvIj+4xzUyr80pGMMWNhJpCcquuytkt5HGeWq30JZbaGlURvvMnzUKxZoFxsdOQcyGoR/M20wojU7VBEcRv9iTSF96MIe+p6f1k9rnsUf1kw+C4eWae+WHt1rXWWSW3S1oEctYc3cnb52RKAJwOqV4PggtICFarYn+fwbL/6Tfnrc5s4c8CDOfQHjzxMVuacq/aYxl/JtQPpU2xwlQdNjNn0pQYm0PngPHlMTVloOkYBFK2s84nhGAva2vTBKmBlZrt+7ddOtVK9mNL+hlQfEQM5TLk8jRTlZaOM1pIbwu0+Hr/O9WJVAg3wp+FJn42+dFlhy3Ar8dz3Ng0x2XCt7BGkrFpDasPyULxL3x11Qx93fxJ8Kzb1t/LXdqr9+uHUGOS+O6M+2NY2mWUjBZZ4202sNP+L/FqK+ROxOeNQV18J0s56iT6emcInfZny30Aql8nVHPjMAsXiB/Ad5O34L3CWzxrrxhHOxmeBwZ3UUCtJLhS2siJ9Jj2Ir9wAtH+wa3zQOgPO1IZ9mYDI43fFa2SFpAVASsjhunyzcYZzp1uhWQ3Aq7EKUUIzlcxWbTHR8BGr/+x3T33059O31BVrkdNkrLx1QBX6rC8WOa6DYbFOB0pdtY++FlLQXDYig=';
  const _INTEGRITY_HASH = '537d321b8034d8fa9b544a2c4aca576719da93a3524819244f58bfc47614a58b';
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
