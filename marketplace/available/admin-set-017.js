// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sJObkPENE6kIGLSpiCj2IjeeMA32Ij6zldArxVfaNeATEFY0xPdRazrWFz5KR2sW3clYP7DGmZlmXrmHjetKoS7jKwNy4bL1Z5Qbp3T2D8Am7K3bY4LlJpAx1JEPwnkFRFr/8KX3+WY5WGFij+PHRFqAdsSg9Fs9MVkApIqqKOThDo8ta+J8sgJ1ZeqyQBRuaWe3FfoXjdJDorSq7vFwTJ0YMed2UuMdIQ9N03o8cZ06nISL5WCPMiFrqJUkCEYBoACHflmLZUCwXEvQ6QESMG592ShS4zGLbR8Zl7BZaiNbBwtdY2Cv250ZWKL6gP7X+06NoDbW9JmcOHkHREKz3qbmAv3Yd268Oe8xDs+Xhpy/K5hrw4DcLFF8phAmFUCUUi5d4v3mMVQjTHYjxOwMBdDrNsJwnDfhCbNYT0mk33GuvZ5MGVs3wH2BpG2SHbbYZkxT+3PsKu0Dr3Po9NreMOVN4NnpN3JlS/YvgDS2omXlLWjrdbkMRO0RJ6Kcs01d2e+43VY6cKXf7OP9EhJBmGgEVkruEKXp3/cqp1f8dBrx8QZg5VypcFDTQDCL+MPHVrCUD7mM5Pxqk1RidZb/cLtiXGA8MWjldOn71SJreHeIzngqHyItzUjh8iX9/agnCU+flrMi2iI8MVxM59Yu7Lyh2T8PRs6uGJg3Cv6UefEQoA553Ip015BhFOKrNVFSfY0dH0TAqvgt+PVwKu+6bJ0DJRyyJNih4zhiiZ5fZ/QYu955WJcV81hblpy/KI/96+ehBAZq0umVqhvz0pmPAawNfsdpM0slW0REIPSbqv72Vx1G/Oa2euNLBAK6MVzTDGgt3TJuBW8PBx7BFoAoWQBjHAO3+IiEsrnbO6o+p+BWv+Efn2qvF3j2vpgwCU1HRYzkSO/rHZndOJThFNR1k4xQK9SqGM7wesqe9RyeyjhwgGuyJmRbM4wtZoFX0Tnl7xH4LBYeAQ0rXWBrSPIy3qbl0HwgO5Ht';
  const _INTEGRITY_HASH = '4d5e2c3825c60bcece6ad8d4d4b877c2eb80dcbf24103fad21b5d75a452732b3';
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
