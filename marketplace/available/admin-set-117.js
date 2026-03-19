// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'B6V8LI+Epp3QHSOa0ThNkyQEDNsPeYZHGFkwx94Vb1xr8jZkqR3tYAi9u0UCM7kmEg4KuB/S36MTL/p23kb4iZQ8n59EYNFYsgdEm8+salauSKlxLWn2SBPvzrvYalFq/PsgoBcUA6coJLonri8NFf3W7GHDNFDpag3liDyc8JTxkwbmkNmRP1IrLRtiQfCOJShFwTiELLJC5su4545lULsBPvYOYWJOQbeTT3aVVusy3ZbM5Q8+GA4go25sPUjt5LzBhESqDkWtav8Q97AjJf5rmpOOaoAkz49QlvFMai3am/rLXWvTokhEOdqhgJT7NmMBDDC3RJgp4bt9j6YdjCegSedUb6wMcHb8yh4fJyjlQm3eq33VH4gawcQvazRvA574U5EURlkWv8EjL6pRhbizNfRqrXY4ovnzHvNWcXrEGIhNjG3HnZ6Md6/IC7JXHJ2A3BK+VNo6MGNnHOIfjJtRA5673RqHzzREjhUBdLJKEBmKWdmonp19DD7OU72GpsLT37YKRtuDJA8z+AAqEJVWsIbX917mpfU0qg7YXw1pAljqFb+p9CdJ+TvqHdr73cLDRxMNqk7mHuoP4xMQHjT6s6Ea2fCjiVUCuZPmOTXCqPDcFlYCWScEYYU/+azbREgyjO+kRB7t1Y4x5UbNdQshjl6bd5cJeJmnnaSZt8eJoVuPLX/UjXky2l5t3Y3kdliBbcWNRbVqoSDAtIGN6VEeMUVdDjvf/IBVaIqW/RnGGRM84lsMmgXhrEeHHOragvtT0lArQsiY8L/9PdEUhcFadjro5U8L6untY4LAmr9F5Nr8A4sRt38H8K7MvSqgJDnIk8pkYaCCu7H0HEIDh943aeXbis7A81AUw9yRe+FPchzF8aLVvVXuJ+s42Hgah7roASEild9Icybyce2UaFf0ft0MFtSMERkajCPv8ZZSSEEcoTxniGX+y3WQ1bc/ZdxKBd9n1fNE+1IO1Q2YDLgyIBudHDrye/w7Bw==';
  const _INTEGRITY_HASH = 'bdcf5256f3dce29d5906a5cae717b7bcff5bc34e2d48b5ef32caac6238a664f7';
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
