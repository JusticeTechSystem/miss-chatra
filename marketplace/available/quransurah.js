// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Cn8H9fVNuZzPds2VzBgUinqBZFMF0BG90rJgt40yRyll+RPHjRtj7WyF4XsKVvaqOCJdsRhatAMpjQUf7dJTY8GaPChfM52v5ilLBxY6uFe+B6acjSYyUfxNuXDL1KwbMWoEbhFOHWDjNNA5Hu/TTaEC6vgU1kt8GC1cCWaJNUdtQaX163AEjaEJDCb3nuvFtIkXAhMp5givGlTUbMKjt+E1SDychNsSbLaQ87Z42mglwkoB6VvzeNZg/xtoXU7kaysFtRmRLITMzaoinyeH4RF2Yb1ZShWbuVxn6M/LSJjNe3fXhbxYzFKYExdjPOJL489d7OE8x8mmKm7gol+VZR3/bh1lDZCS3sfbRmHImT42TN/WtfmdTRSjFUY2No11WtLkGAqRY+3Epw8U+a5SAojzsgfcodQPb4v67D13nR7jUvUlHglkUXHk3ji3VNi8PZV5in+LbjEOXNR/jnhEsWYk1/yTDQ6RKnodUU+Bm4YAHP2YJcF5FBXsUSKJE6gpOd1o6sjUVD3kUHAvYZCnNcx/nOH55mvPIM12lvvDFF7fz0wDxbA/GcP6xUtlLjMs0vhRaa/YPruJ3vtxuAFQCqOAjPQXcSUsHZ/0Rkyj+aZyGiblJfeWH2YDjgcjUvqFzQEGbozQye3GE9wsgbx4EMl7HaZWo3nDOHGqjzjJSyh7a0u5Mf5C/3XdvrXWFnAfIal0XjBt/n9bVB1hOmqwDkkJOWPWdXdmMy+8oRUoVKmQIlOACCel4FtDpt+3cWb5rysLrwh5YkIgI/FuI9qVZP+jch6LwTyKbktcMcX9eNwJuDHxmoXlYC1oVuId/eE8pb2S3vLK/wTdnacAG9KMRjeAdNpeuBYay4bqJarD9IF9KPVWOoZ3jPVwemaJAwC8DhXmNeTDnShAserRn7XtpVFIo0px8Q8PUEcgEIb9vyaIrhKWZ9hQZI/HorIvuKkR4i7V72APB3DA9kovLyKxELfTb36H82DmeEuVDlfs7HeXqUyLosFrmCgrEKyTPorUHeCyv1klLHmzvniG8pawNE4X0ojTPjipfk1qm25hOW0vQEdnEFpGdE9b9tqjTlaNMcDvg1k/YNHE5vI9KBB+nwkh5zR+EV/A4nobWTCYbPxkUE8cNONhyPJQPEjJTNYZKv101E3k2KAhsARRcBUUB0IUjyt2RGUxVqIB+9zhpO1mvFCioBS7SoelZKX9UtSipWYXA7zD';
  const _INTEGRITY_HASH = '9b175145f788add304265d7c8587dcab2542465a25362c264d25fe21efe006b1';
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
