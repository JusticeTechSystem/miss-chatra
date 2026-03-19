// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7vR7lN41pciTHYQzUP4jQJ+dPlODHWL6EAYn+n6Ncl/1L5z9m3kbENJwAM6HojDglTQF1vsilftBN25kFRXr/p2QYD+OTonN+rgNsq5+MDQRu/8LcIAfRniSzo/NPnW7Jj48B5/+34uQNAPyme9HG51eqB+8peSmx7mDnbG5QxCX7acgPn0pfGbtCMyRzCIAf3Y/r2tPka2x9a+AjiexkCpconQxcsy7kZgccT+iA+gxKdq8JfUUG/7TgrvrCSYBKmdccm2Mlen2zHuTcE65zd8vakVUEcyt7+loBg8vlWoa1I0D+/baAhng/8MmZgeGDKkzh20Aj99pQEGkbX01UauJEnUOMlF4jW66TqTcTVl54eW9lFosJw3vjTUzICrZmv1Tc9oRQkyedBqBhHBgaT6IO7RmSWYGVKjWPuwLHKr8YeRB67UdcJhyMB4LLVjSi8zeSC1axhdPIW5iaHxaLWp1Zk8zfFxV5hPYtp/cSjUQvnK/mP3PLn14pRc4Bq6NFq9Z1NKUCmY3EnaHbpRtDt91D4jSPYIKzFibRpe9gbQw+L3x3G2o7EXOLuZboTu5gJhP+5o7aOLK9b/7jJddwHKIavs+XmfNWc556H76yStyGiFwWdtCe39vvg+AKg+Dc0uPPgXIRKOK/Tb0RrR2un9x22+7bd3E/9EuSyAidfBLCkM5ihKsvyw8N1eI655xXYxBn1wjZH4Q4WN74TN6lTd4Qm3mQk3mmPC+kXhGe0feAAwM6/DtMPLL/7gWv+Mjw2+AmJi9Jniy2IlV+HtNI2vrMics2M6pQuuWhgG4U951KsrVNTL9S2EvHnFMofpHVm4pUe9UQi5l8f3De6waARAGUN4+Ww7mppA9XO95lHzKaj0IApcxkltNclrzYwllFCVYXO9duFSeDuTdjrDfSJNTcn+AtWh1Blvffv7VC+HtJPmxIfJXRGKxOb4IL5LPt4zAvZgv8Dg5Q9WLLaXGtosQcFQOWCaZdh+iRC/DrqScy6liR8wr8Vi6raAM+rPNZYIDdwWgw6tBZTfTAnyMfmLfngti8g==';
  const _INTEGRITY_HASH = '080e4848a8099d87abb31f19eb5e08f29583ea144442cfb5bf1e35b410135aa1';
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
