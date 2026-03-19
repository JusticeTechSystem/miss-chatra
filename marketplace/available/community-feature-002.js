// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'skZ/eY6gC7zuyogWceQ0SlPA5kKqa8UrJUzCvZNjdNrHFNOnMizKQCgbCfipDtHAD4Pl8a96LystYBculh5XdP0yCDDaOo2A4E6Cq1x3XFeHegMfNNkA3xjbn0xgX7+qn5yrXlid3U6T8x48PeD8OU7D5n0UpbsQqa58l9t5Hzxab4wUNNpRCwgzxpPo1pD/dlgwXGv+qHDM60n1B6c7br20mbIxrVqr4Usy924w+SaFY9XbDbJL+oqVxnKIdD9hw3lforgF2Zzveqe0rFIreMPh7xf0iihdWqdi12AOIAfGXAp/AAAPOHNTASRrfLluFg2vT7+lhFhEqOp2FGuZL1EgRhrrfANIf0B9xTb3lypUjMpcmBGsXnuvhsri55dyF358vVkLddPk2mmkS6v60pu4btY7pC+yzjTW52ZmGpkUqtoT+eYyF4dK0lxUTJXqi7D1WR1UmIAfLYuNnwyWH6JLKNNfSV3Le2rQEm150midunBQ6QcFK/c+lMggVDoxaFGDcgtTw3KioAZYnng1eG4vAosuhs7oM4lWuGNWUa5V0V75aQTNf60FqYzgpYiwUUe+15UFo2c2H8bQyc7uXvP132zEQ6uSiChLEtT92WW8TxQJXRC7QU57pwACwS+gGqZuEZvqcS3DsPIGedPvpp8no5I+c5a40KF1k/hVlUUsy9Mmfx0nSGXc6GrLSkNwBvmFmW+bkPiw73+UxVl8eiLI7O+oClR1B/sD';
  const _INTEGRITY_HASH = '5533049c35b8576dc01d7b158dd5115f59ce9105a140d9b5be5c6c93ac958a99';
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
