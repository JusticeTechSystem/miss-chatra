// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MFH8ZGIG/SsBr6Ixu2uCqqW/mY3v/T/EW+Ov/kY/tEt/bzTG1JMt8FzEeVNQh7xBYNcyvFxbopItauBLK2To81eOG38BedovNruSErpcMZyA/QuavbS+A/kcH/5DZZ8Ia0B1jT1FGCu32OTqUl4WGYo0Ynr1VyLJGLL2rwunJhU3cT9FOdHjWaif51lPyrWmD66hfSp1oLcqlWDq2WeU65uSr8VWJkqzwCypANYQ/XMipppkx1FPFAhRa+V90VnlJogHEZFudZ7zfWW7y07B+1ueVuNGSED7pljBjRSqI8tvKyI0Uo5+tICgpSmd/kOuOnpM1rE7avpaxn9Mjx9c7AmxKXEe10R2jo5bHBDNM2eeKkx+YrMCR++RznUxJH5+/B1CI4oPazz2lTZmQa6IK8clPM6wJ9UgLLme2wNvZaPJ5jVl16jSd/sVvrY13pVd5LwxrFKlAvrYfumsvbpvm27i1m7E4JvFTQXbNU6A8owCeptuzBoUEhBEX3pAvbWn6ZaklLKT2V0XhM2+TGJ8xoxPHx7V4Jn5L7B/TB7WDIU2rOFvKbGKTCzqiAShjka4HRCzSGNBTJwoGg9W/JWm1z4ql84EMhnQCsI1HVUpoNjGSEZHkPSNWZoG5z1/tig0ZtQgh+JSa2B9V76sHOKffJNko34CZ93HdEnLPOAeuOLEhFC/oAjt04/cY3g+nERAf31XHxMIJVXyEyMAg/OLDEbF9rWpYjom/IKA6/uRswD4F0vpBuYuMgizcdDpMOzL2/iMe3BAVblx7H+OTIkgdGx+UJVb2xzKnRJj2674J2tB8cAxy6FB8SH9/020aaDScbzZno54rRwuCRDdbHG5chcSKUFOoAwgI9M22Ur3pSOB6FKDUvHmop3Z9TJnpDaPPgLNTlv82iEOeMRm9UXjlFDb7geyi2wchF/bjNLxr29l4oH6qRrm9e7Xu4hYO4K/6nPS1i/fpUbrbcIapo3rN/e894SnK+zyn1DZgTsqD7WL2awtUCGD01wb6d2I';
  const _INTEGRITY_HASH = 'bf1d7bfa05cc99559bee5444dcc11353b938dae2427cc7020bd59ecac44c81af';
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
