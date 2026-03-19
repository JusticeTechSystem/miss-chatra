// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HbM4xGfy+YkJfC6z60yRutRxCY3L1971/turny5A63VmKjcOmUdF7yiDUo/nhVZwBGrCoFrwAv4q83fWhC4FkrX+Mk3CyE7T/MWE0NVNVwHkPzCj3x6E7n/3yVavF+w1XItCKuS4xKNRO6onlZvMGF1U37CiFGwAdjwe7KVr3B8HQI6/mrQSxqEL7fiq0EyoYp1z/8ns9+pQD5hKoByiGbS3ZeOUCC5Yyi8vugOK/PsYh5A/OQSJwbCc9oUe9h7IBsZqBjOvur6P3AT2rf1oTgidrZJwSxFWEwj3MOaRfeCHmwfHMa7Fk4vys5pR9SaxZQdAnG2EbSEnPTQ/JPX6vfbJ+sIzFiyXvo+ouNtyQ61+HNsM42HHQx+ryqBcP83QcxAEpb9H1MsgZ/s3mZcbzuMZQqm3WWAnjPHOHahSeduNfj9sf9CHGFfcaCGgIPZmqZ1Mlrnk/0N2LN3MiCadXii73WzTG1Ye0yvy0fWokk0rOzHwqND9LfS9WBShKiJPt+zMxhT//3e8EkA+Y5jPgVwANUC/R6QcamTIRFEuxwqq3MbZ/XAjLbpox/s4cEorMC1IkcvJpK8ppSkfbD8cBDOCro4oaX29A3sxhc04n6Mu2BBybaZNKtYbNLyTjcpLgso+seU02mgbwdGJxvlthKd01XILMSBF42JUYivhBTWHiEW8KXOJEAklKpeHwuuB4Vc/RH29AUTzfymlFuUTQ1wTpkxL5ODx39lG10AhJUHLQ01StNNs1wvcI4lA9qCdk58G7J2GSuxkjdGPTgTGo2ySUd/+5lFdhmzwCRIAjGKEZzOzcuhZQ6u6yBj5olZcQk/p79pvn+Wf6SjGj5qgd5Ow32XIeI0Uj/dcvn28Xga/AJ9E/vTv/FnSKJVlYUswN9Sw4fy8odbnUtny7TXINil2KOjZSJSeu+0jugYgJ3w0+oqMXjHgBEuanCBYHDDobiwuHaP0eWD29KyDk0qz9RGr3smIMStYUYV94n9N/Xwo2cZtb35VxBWHYBPj6wNEgWNtYW0jrAKbr5k56mZOFkWpbt0qsR5t2fIiUaGuSY6/O3JwKD+rLvBCdhfQzJiWZQNHS/scc7BGYVWf7H2MyzioieeqbDFiBthMkcgumINmCdjXJX5Tnmui4XOr7zGn27aW5EwHevoKd7SazFrtUAlyPh82flN3Eqv93mwbSn/AbUhmBYE4v+4gAoalBv7c7tWG31tcbL2lzJxhPKYkxucPnPjVcUrs4AwOSL7eJoQJvEkV0lqH8nNwFd+IcP+dhTqkyJ96biNLucCiJKJCmv+ZHmbD519/l0nDPpQgFDRsjSSFZzaWFiZkym5SEy09/+vAFdrROW8Z5UyNv79UEoiOEgaLcU9bvWCQO8dPJopx+LrPesRmfQ==';
  const _INTEGRITY_HASH = 'a40ba9004af48eb6ecf69267715d0a1c1e4b5f855236dcfea97f2851600e628c';
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
