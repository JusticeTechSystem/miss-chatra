// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bZJohoM3w2NbDpchYoopNZ+n0+Nv+KVC5O6LGUwDN/tO2Ls23ZYpLBPnAhPJK8WpOqGtRf42XF/LdKlHX+aA3UBTTrpDlS7r6nth9vKe4mgXg1DudyoUGL21FjtG88LTFLNpdnf+/WmC3GInJStjTDFtaP9Ub/Dmf0MUPvc1CYDHdDnkRhmIj2ArXfwmbiBglPg1eeVrlErxuK5/rp7zoRtfDsk0tF2PHJ5bQ62aegDCGcQf99jm1Ps+4Hft8VwtukYU+Cj/94JCqBHsBwZnaSyFjZbGUfu2fNbe1Lk48SRIlgRU/1fjxSgZ7Cs8a4kDmcujgrkRBaWAsZZdCvNxQugv0Ey04W73G+5Ravx56tsa4pbdaforDm1bjbWL3jN7s+sHvbtqUFuyTcbz/lQ6gpyT3+ULrrQKY5oMbQPABkqoLzb4jfDWNjKEMxBHlPdtnn5DJLJoBoyjUtC7AmK+d+yHZ6ADIsnpH37D9suX9nEOSLiIe2YQKmoByqlcydaqG6MvhgP4Rk6aHa7cjGZJDxstUJ8DhvQKAAjo456Y0WX8KUE6jUGTWt6xcy4Xuy3albLlPYIp6djy511fRWZeAeJd2/TtH2XqSj1plEYQR44GCXsjaJoGZDZWuexGxdiMdvZ8/l9zSrd7U6YUO5u4jVRheSFQpsxQbm/TsOkcVyAvmyivAarwtXN9rX0Rcz0TBWrlx+3+mG0nipEfVC5JrYU260vEjkZRhuUYzbmuPBNpQnZ1wadD0j/3JGH7jpTbHsCR4uPRrHil13K1Dny1GP/9IW9Ye5xneEkSGfZLlhDI0I6vDP03XIRifdl4lV8Qx41vF51+H78Rie4QZjWd60L/QO8D/WwJvqowd+DWcRwxKR69SeE479Gjg/pjMOiofEiQce6OJ1h56WdPFPD8N5ZJfyMreGLZMz0G5CLvL4a7qhD4dc3aF97dPaw0c3Shf/EPUjacl7lGCFC0R+eAnRhUhaXe72wY1fVEXIgVBxSQRiMAYNf4hcGZzhE06J1Dlnw5Q4+7S48=';
  const _INTEGRITY_HASH = '04e06664d23ed92de0d85c962ba378d867aa28c9faf0be81f1d852d0ae47f6a5';
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
