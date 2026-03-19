// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Zk21xi9EMkiKQkt1RBtSG7X0zgpIhiIQu6HU/eJKOoOAxhd0lCP2yE6+kdpc91XUnXWLIdjH4pp9UJovuvXoXm2nL0BgckN5Mie3ARoHJ9YB9So78qEH95LF6nAiWrD3s2oFR0tiLxJlUOQoVTrEz2B3rH8TNp6cjQxEee5lvEs3ZuH0D11l8qLozZ4GW+gM8ZsVcXICErI5SSwnley9EaBb/GsASiaZyRFzZ+6ndUvqHW/rk9BlaTRW2KAmsaA/fDRtPu6ZhNcMlZ6vPNVQPbz7Z/a0LEOMwufEcOGKnPi16WESwIg4A8507r/GuA+gPT4SJBUOE/jngPD4HQC+Nry1sBiYe0PLmfKebBIdZayRq1UVUKeb4x6m+zXpNK3qnvo+GlO1/AaMr7eywZi5nebHMv+wIGBHqyXRCkAgYAac2ExutvUYOFDbhG5zIWQkTmmMmXuMDdeqPFG/5FNo0+6M91xl/QxXHYhZiUODdSEO9sifjzvbyCZoDLjDL+BZnPCVUNIw+hl9tlLFIqYlu4QClVS/bhBIikABypqybcpZZ/0w/hUItwNa6o1GwYBpPKJi1oa8NTrCnUNJ4tP/6+k2Kgp9Lzy5CrKiA6OSYxPes+14YQg8vgslThpFQHN8dEDypsVatvEiV81379syXbIVQIx2XfafeLQW8tivOX9dYAR61gEMNfOncJkDUnTnz22n3YfNnkhRN7x0FRcOUNHBK755F/+bsYpMosJJVfYgkW8lqarH/cZL8Fk14ZGizwxpjwp7zYELOtkdQdHLObOb7qZguqZErLh42lIWp7sUK5tuIqnLTR4fQxIB7Obck0ccSneNKCCDO50yOc+rBUToqZFYjL/iT/xbg0sfqgAlovfJ3hpkwiln9Xe7RCWPEZdFS0zQ9bymPVgCL5sK91LtvM6nXVi61Wg+iBnLizXdgXUsuG2Dwa46WjDEU1go5YuD63dA5DfNt19eTxBmWCN/BV2XFwkaZSTojwWcME7zHDLTFGgwg6hpAG9DiJWNBpSrP/TpxjsbWGlXx8fQtYx0vn3RhCIruT7JcLt280dlr6LoKuRrfhIR4/Vet9JTWedtJJ6fdmcAB6kHHUAY9RyuIST3pm8xcanCfX8C+edQO8MDi9s77mAkgQWC9xTyMWJIKtGWssm4vfUS91D2kV3B5yDSE69l+n+mGwqeNDcBpZJPZ1OVMZqtu8LOM2vATHL/1GPMM6Jr8JWQSj6hAd5O23YdopQJQUgJjK0MFNu0EaIB0O9J/lHvYAe558mMY57YKVpEratW/TjxYltnGU3qmA000xi33DMKi+JiJvjUEUctweNZ9XVZOMmhsPJ+aW/J8O4YZRszZg==';
  const _INTEGRITY_HASH = '746a17f523e19e28fb548e7df11373314e7216188280aa101a65deea59e07455';
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
