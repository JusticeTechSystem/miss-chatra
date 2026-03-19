// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n1yAEBbse/i5Pdp7/LOyYAO0lrdTa4+A+rrR+wEmyXNu682t8c1NlY4MU6wR+40M0nTULTuM2/EQkWAWZdF6XXhChu+Y5UmAG48+c7cQE+MCxFm8jOLAt8AKkgXUQ/kCwH2zJfDRgPtFXnVUZQoS8JMGwCzFnhZMuRbWafGuYSlIG/XFCfRxfLUdJhOo/+RKsuohQJdQ0XQ0aQWeHRUyk6KFi/LfMT+ohtGYWsNY1u+U7xQAD4+TAxtvtNNEnM5TPbmigk69BWODo+O5faEYkPNdQaPi/WP8YVsBR8Ojn8MYL6gfLyRVGQNoyCvqV3cmw1bMtlkSnsAqcClyHoqpV5g39mLWGJD2PE6PpnuUxCpbqj7N/PXTaXb+bOo0f5mWMQwvzcXaWRAscYmwwQ11CkhahoC4bfBgSkurF7XDSthJn6Z6GnIFlzdr02X1Vm1ODsbC8ib9UIk1qre2DDir7MSVwXqVZ+l/7bDtWdDj0IzXzzNvvoSe1eHFYApLJDW8RQ3oH9eymEXQb3yQk5k3PHGExZ5IdfGDOhUu0eY57fcduWUAlMoK+fhK4WoLqB9n+6xzOwUtoe9rPvs3SH+h7Zig5bpVvZdMwZpmTg7vcnWhGN/cRgBaOg8oN06c/hbmoK4rbb98bCvQul0Q7ZvgnMmZPATR/Ou20D+Anth2tZdBm/w85mc2N6Y4Aj3QRnmcj1ua6TFrw/ic9hW7E6GJVxwWhGbl8ZrFMw==';
  const _INTEGRITY_HASH = '2e2270f06f93195179a5901cfc41a036336ae6eb56242adb3626704d511bc7f1';
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
