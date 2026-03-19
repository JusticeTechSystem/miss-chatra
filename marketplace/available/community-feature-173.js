// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/WDt29Z3zcSZB4TOer63tQaqrO+OXLBP5q6P5YxeZyuOzOz5Ic1rtVzQ6xmuVN68CPIiAicwPnqgCj0bvqmYp67eFAfwX8UNxZGSlRSNlukCUTp2ExLkRIuWDDMJWQqA+HEECE1CJXdAJdeGIWVxfwt5aX491i2YatHesRjObqhogO+hfeFd2nZ6h8WWMCxP3Yv+EtAHPPg/C+k5SmpnKQHfvh+F+K93y6h2il2c2avXC6PLs+ppQTDcrZoj+F2uTAXZ9kx541PYTiSH14qjSp7pGRgXbDK08mem1JqCd6i+abnYrMHrIU5oxRBBeoS/xv/CkSnOn0P4PEEASnTstVvtKTZtiHcwT0aqiuKsTOJokNOTnKu55nVsfVr42HuoVhUTuBBaCDOcwNNCJBjR4YRggzE7z3mC2S3ywSoU+NMwLDXjTjv83YvY72+XI+0qZVNsrRySkq+mhj4u8dpyENZsiK1riig0YYBNdQAsJPgE1TwVc6wfuFjGF/YcRe3hY4vOgFqRvApBKVApLICPOXrOkLheYGw3QHPVXvYVz8+JYFvrbVZc/UsdMZnbBOgJ96nrTNEAgZGDK8f8SMFgYI3mgoy0N5D4rgF0mLkCqMXj12fQ8YgX/oeksbc/UZw+MNDfii7JLIBYyuJAFlOB5K3QD9fFmAflZzLszWifm41mJH22x6leK0NsMvq10cexD0DQ4g9GKGv8h4Xc96iS9jCtIxS+cY02bzX2/eI=';
  const _INTEGRITY_HASH = '010aefe153f329670610552b7510a84569c80bcf7ca923054337ddd564b15aa4';
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
