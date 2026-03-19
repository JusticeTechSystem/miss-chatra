// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'a41CW/s+fY0ZQuBtLLqqjL1Sl7UfJpyULkOMYANewHDm7rQLq+DMudrL0SV/bXzz1RwYozSvBkjWvK3ORaacP2pWFVSI+9+WwKTITpTg/L+0yCVTC0smsUOaq2geXgeEagqtvL/mDagqRevy+bxL20yeT+mcfOaKlT6EANo5QPYeqltUzPUIVbxMB/46zRKQcQyuIdv4ho25/ph5Q6RLeqMStZWH1uBaK3q0wUOjEjMaa8aPrsMAXqYn0oTWAtuL88RbxH4C3DIdDWyqeYMlNnpwefumBNtPky7CSJQdN6YUr0ualhlrCxDe7PGP3bFGIuh97iBUitrXaqyiIWwU00tiU8l7TXZaIO1h1UZvHfyK18kxvK/x3Z5n/boOlwiyspm3KqK+T1jz+mBn94c5Eff10oPbEXJlvSE8DsPVmTMA8dPsYzQ+ytL51xLE+Z2ay+QxY/vEAPaF+VJsemt4bXJfdi4kZdazePY2EJE3s0cqO0eisjeHqXq6qc6ue0VVAZ/11lgJxuooySOM2cCVFaFbU4yBI0h4WkIKCv3bJyuQMzzLR1uwRBePLUvf0DNmCehGzhxT4hzW9/Ne9NHriCmMh+zSNSufSkySlwIKxl49fZc+odPzNUDqzDHOclnRUJZRjMo5BJdEz2uhxutg/U8OZ3hwnlOOmzcDm4TRnxKueMCEt1jFUfdIiiWGG6+OTiYsROWnHmei3YfHo9a1DsnBMaTLdH2+/g==';
  const _INTEGRITY_HASH = '5a1d89d23a6fc245f8d0bcc38988d871239721cf0db3734c772d089d6935ec1c';
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
