// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'O2KExG5/uJYosafvSVtu8+8ey5A1wlXb+/ay2WAdlSpQXP7lzgTGv0t0hIKlRtnjoJrICOnBJcqsFMlDW6JukBsTr5qJ4SnpPDqRMIjaEnMM0bB6HnBgp6ntfHPr4ax1/qcHzTLm1nVzdYv5uqvgane09RDu/KIFOYNStb4Pa1GhUUb4MluZ21WuXSJ7mMuWtOYZkik6V0sRY0+Am9nZoiox6GPvMh7FFohzpHxfLTrWSvswezOAltBEc+0Xu0/sAeL3ZcALY8Yl34pNFUpyeuoihmZST22RfSm99VhvfNEisjKSY/eTqwHuov1iVKdOdn9rnzfVLlWkqJfQHOcLRmjSM2mdF4AujX6MneeuEgZV+c4K0Bz3yB2fpAgmBoh09fXBRdWbd3H4P/fKNDFePbEayE77Z1HM+ofOfiNZJU2wRp9lLvXzHDxA82xERbZkfHtYPcswXslhOvyXNwuVwv3lQBIRQm/KJYdii61Fgu+f7Yos8PUFept/6DGCGY7TpA+Kw1uQzqnLfOXvO1H7EU2eq/55XexUaiherv0jT+aDD3Y0UHYZ1EDVTqgptAMWDc/2R7kXv7rFxYiC7r0NNxnXlvOnO0EsCz1tB1i0ZXK8aB0kiFz3c/c+mLClL51EKlsSgfm0IcUgMWOKdJnOYCaWSjg5Zy1a8SeFEJsAG6UJuxlbMdSSD1PRK75iCAW5XAZEB/reID6+LfFWId+ihyrgzV0UACFa9q5VYlKthhyruA==';
  const _INTEGRITY_HASH = '8395200c89dc6e9be4ecce58fa1feee0005f705206fe0ff9dab4bbbdbee41d6f';
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
