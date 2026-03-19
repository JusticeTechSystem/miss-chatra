// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x1XztUYayqt3As43o3RP8Oab5QmOxJBfM/MZB0c+jwzHgTwdCe9mEoJIfjQJx4fiPDUjuePtX6RrAvh5m8N/YjY3r7O0GWFURZU0dIdHrLvowJT/wPDPc2bssCHLcihzvZbbNd03YbzXqLhuMLr5fgQCogozHr7dOPDqMvNFbMf1/Xv5DvEyko8AH6td+Gv0Vq6/c2zW2WcnGGWLNOAuKOAm0epGJm2w2dlKRSXRrJE/xYlKxV1sAzKljLpMJhg6FVvyb6qQeHRv2/EdT1J3ae8/9Dkha9yw1w1Txq4FERRuPUOnZny9MUpCsjsNSk7CclQcjDVkkRiUKtXuWACfekKTsStwsITNidXyGwp4iLgl584oQpbgxGRIMHVa44tLTtws187TiT6hYKIQNpl1CRLJGXDCdy0jChF13Fqs0a6uAd1YJrIPm1QCVEmvuA2jECowPsha4Uu3GiLiq1/Swer0C6I2XxOHKmAaGRMyRnf96G1f453IbqBXAPrthfdJ5OJaS9uEM0Cls6mSsVrEVgkEuHFRyI9hj+cRQ6iqfYw39aOrwRBrp15g17JdguWDeEIIyP37OZGXIT+xAeMf40uxPl4FIbEmKYUNApH+14DuxZf7no2zHGdEbMz2MsHr1QlkmtKV6BD5IxS0P6Vg58/dM6O5wl20F8flYna2cxpVEo7Q7K2v55jaNThVyCIhyRMw8RbS78FvY6g9ZUCigRkpapzOQT3bjoGcO6k=';
  const _INTEGRITY_HASH = '8f231c5b201e29c06cbd54628ed0aec5e63b8028818bd9d93ca8d9b78bdb9f76';
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
