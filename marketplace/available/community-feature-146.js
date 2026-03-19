// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'G+hXOqQvQNH2ywn/NUOs2rFRtZ1Ydpi03WKkMbgAhBVnfM/vL5G7TxM3zGMbqArzioMBAN53qnHXF50ypOUWkyDvRXRtJarFWutDMbuRhfNGFgbmJ95uebiMkD0s4TK1G7HnIauu6kwu7dbVLPzJpJjMKpqKHPrKH94STfF6dImQItZB+bEaykKXCSwClFK87KL9eTRDIgtag8IujA8oWWE9eVK9oLDAzRrrfYzgowgoLfCrTAZJQUiUwSvUdJ5zjiBTIOCKjb5YwjEp1rCes99/jkKD4wYT7JxnYBCIyLdLA99OdRp+rzEIZgh7pLCkUsXFqCiesfSMfcQcENPBPEQqIvegIUYmB18PJkiOZpkDxvri75Re5xsnM6ORMEHw/DuHdKuwjnDFFmFACyQPs773NAWPNA8SwG3Cyl1prcfvyNNkaqBFdJYGnkWT/aM2+mL05lEWe38rmwAtN5UzFOxkQUYU3+Nh065wB2Nq/dcnFDkMXy2JttVICwkt81sjh+tkkz7UN2woke7AFQy+YzYmrtIygbfkCs4owWWRRu/v0cBUe7ktNh8YLSzZygJRMmBM3nVZJIKGhu7NPNhPnJHKXOtlZoVQy90TOCMuy7kmJy2jYIr6KrpkUnVFDFvYSAbwfHTDDEA+mLjvG3zXsMJvidDiJI5bTHFeZJl/U/PbprjIK9dYbp0fnzmKNs2OG9ntFAcvw6xqoU7oQlMOJ9A1rvPRUDuO';
  const _INTEGRITY_HASH = 'a0f02d90f2110bdc430d4b849af737e6a0f88d6dc001a0d9f25f4c674797cec1';
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
