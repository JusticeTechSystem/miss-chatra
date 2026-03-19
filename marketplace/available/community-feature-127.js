// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3TPL42cpOi0SkE3E+mJrmAIT3os+aKLN8OH0u6quBgsWv9tfV3dVqyiIm+yx/RFsF1OPyhS5UXDEVaRCsY3f03MGUrlSLdb8ZgcNyvRjjiXLA072oTIbfulLmEkjQNZNQ9KgLt7gPs0WRN3Z7LCVaPKm3zbIQbt/PT2+Yt6m+F6wVMVhhCZZbf86WlZ1IIv2LbvGlajpEMzqQtlaLpmJk9/c2+vlSN5878lpTJmrcsHYj5lcpoeocOjjZnjpRdhV2LLCO78U8hJ82hmIJWlEo/SrmmHbqjqd3aStUhtmBvpXla6ULjTMYkTEzaSPkT0Fio0Tx6CeqfETj65rkludsyzKi3Un9ofCKVvjKYz1DWfm9x2w4MBE6imPBtPJCn7OBZrSZ6EmlXRbCntq9T7zZ8S+zqTzp4h0WuOiipCaOfceGAuQQmC3SMd4maZakYM4yKJ4JTNVNop0GI2m2TRBeSeptXZWF9bYHJP726Xwn8J6I0NIniFY/j4Zy+holxQyOzocmKbUQvf25s3WtXGD7WUq31JilSXqjbl11SWkw+77/0Nsii3Ty3pmZP1DdyjVPdHs+sNIUnDR5XuAlIVVBncyuAHe0AjX2H2seVEVZXAoIaLeDV3IEyBz3n3L9+RiWbBGgCuLDwwzkzFwJRsy9MOL9eARwmcK/XfYWS/Tde+Fp7T89CrCM39904z0JSv6BHMwk3mezC93+1osNXJjnUel+/zY2f0CyIjXwNu5SnQUztQ=';
  const _INTEGRITY_HASH = '1b72f0ee70f96ad9c3976bcee36f79def7482ce7769a34683310b03d9d470b69';
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
