// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ujM9qKfS6eKFXt/TnMb533c0UQMQPgxiX4eWTwM9rPraU9Ptv0K3KtvUq2y03znt/rVJU3zhzHhf8oSlWz2zfnpB0a/wgfHbzPKD9cmatuxoXy05m9TY/xR/1nzzJHLBqBDXDqozCrDVrvwbneHzUvL6KisyWWnX75bvuedGZpxZMFOb/gDAy7WAh2bSIoY+7iaVePbfJrUuC93Db/YhWFOcGAevqUo4a9eB90Vo/y7RPr63wqiGfZg4JYuL5Tsh8494uSY97TOmpM7z8kIr/9+YKjS0/CPeJ75O9cZce6+q3Rw9Du4YrGdEg40k97d/Wf1FfYgANMGp2XulMTRmBdrxnMgItYN6J8NQJbkQotvUw+qojNc2pW7EUON8U31ysZtglIEhAATZMJvEvgvMvKDUFcXmUcyFT26SOIDJhI601qwseNgkEVvf4ktYy1J0SD3TlO2jiYtcomS6Y2PUMD/EkYj8Nhgr56uyDwl3YOkXNlHcP9lFAueLDqUxUsvWn9dp82lgB0Mn0X3CNIG/GksTHIo4siPBaxKoKJtkCBBCXZjQpb1iCa5FYZdQ2vZMIU4EWcM2M/3XLIwMvHl/lPqOt8Fd4o1MvP1bUtumll3PQaMEHDkKjD531P9QIco=';
  const _INTEGRITY_HASH = 'b88956ee682850e57145b1c1bc0bc87a83bddc383ad6c6a00e7eb8094605fcdc';
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
