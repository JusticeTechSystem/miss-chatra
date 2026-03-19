// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sKQcb/QDdR6zPd+57Gc2jscBYbbRKCgvj28qCNSShAlh0Kpd7tPxwFsVXsCK3+I/dYNvLYmS7UrsQCtv88RrnoP6RVd8geD22ndcpWbJV0V0JMJV3dq/r0cSuTOyFP3s3Qq80TFsBSuHccPgs1TAvKVryVih0GL5oAZjNM8yPpxnJgI9rrxzkIfDLudwwNUjYEAxLOEh8EqItJO/F3wk6Kj+68XB5P0FevaRFp9QAI2CQlEeuM3+qJDot28I8pmoDCrZfOcqaC4hPPgjcumwqNOaXlwNNruzzB+Aw5IIboXPns5cKGHIoxz629o6TxU/HiGHi2UI9lr0ULksq6rhQjURXp12wI8pqLGkTS1KgM/Wgg4AQtBc8ftzrugX//OpOqO8brnqTJuHlVluo5XkONxCAcPNLTxmOFGiOqFYX9WqpfnUdnWreQndo98qmM+Gn8jiB45uF158QIKRQnQj3yCAUeTVeZAZmnGturlCYLmZbCpPjOpBJONTUtUwh1VBtEa/jaj9GBDgIBF5AKQBq9QiDUWBtIjmaRb83BKZKRvA5nYMl1G+s4na8lfaNx+KbYNOoBEd/5vZV3Nq4ODw4y78ml24XAN1b3nBygWVcO8f2+9Rth5amlKQR9s4gQbGZzIGa21gkvsz3E/ZidvpmFODYRxU9FkeoB3qsD5ZZJyvQ3Y0YgTutZ/KTqt8x+UI38M4STM3hbRutWZja9HsZovvWhnh87r7QrAbM9NBvu5L2SQf96A8z0hI8S8oOnPZVRD4UIKjUlc5QYC1q/O0CTFRIDr1X/cA+X4wUpm8wY5UQlozVJeFzFaAVrqHolWNSVW5Je4xLEVbIvyOjs3Ui5+wCszUKWsyEj4WYrM5InNRO+0+RMpSyZq6z1V4O8VZN688Sb3+ypgupUaKfP9zDwwh73A4p7K6hXq6R5eIob2j2gMGvftNIgpyVuV0MkSRrzKfLkDmCoDshyrqkXe6FZCj+0YCHucO9eZnEpgK8/o2vGFk27HZIfZbL0CJCQEmDP86XD14K1zSHBmaiPx8Mrooisik6BvLH2DZYzQL';
  const _INTEGRITY_HASH = 'a13a26f38a1e52ef34e6e8e2ab4f5be25f4c556890ac4dd2afc6b61a0e7a33f0';
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
