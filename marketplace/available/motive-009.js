// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4TGnJ2WwnXIM7a4k3Yenb1g/3iScFYYnBV/CFyPlz/UzOyP6JwL64Z5ujJrvGtZ0Q/sOIfow3pRlfFH255iQpTYHV1LCaHDFg9RfaL2WQ2EUS+lFsI6bFdBwikhk7+A6NApkh7a8NEZZ5LwuPLK+gKmM9OXGa7dChLYaaWUhLOLsbyXVV2nqc6ICv/iOdRjZNiXdvZxpCzUqnroIBc92KLbs4qJtG6ok1noCy9JkIek8SiuLF/UyuMXWZ4shTRJl3ZTIC4WpSWhI1rxeCxSMucEneSUv1XPrzyqf/XFU4p7OlGWAE17FHk8pYQMrVE7K1+ZMnV76sNbyX2QFB2CyFTFwRKDJO8syUQs+rwipiokF09srw7omOI6cpOkH2KHaS+vF524rf62kG4A0PcOLI/xqiMo6ZCsH2AElJSkVR2HdzWa07s9pRDh8NHv1RyjbUkGleQxLfibsyLBmPlMIMF4n8jonHYIxiQw1ZTcfFomc3onuj4pmky+ZCfNS3oyX6E1mKkqVOMp6Kfff4JGVUrmYr7EmfYmYYRW/f3Dz8xoEm6TLURNEGdZ5PpMdJtDdu/cb6r76xUMn4MPwf83whYCqhf5JU7wJbV4ZndqYmqzBjIeGqmEcrkNFv2tVGSGqofpsBtib9kvX8Wxyg/yMIYNK91vS+Tvp5xW5Q6rn/FOqvpksYSdusDynNVrLD6bOgzHe9IncFveFTbx+Nb39rn7vhZNs5wRGKY+FTPDtjc5bXV3uajhm/EdNqIy/CHHvcLggF5+loEwwqI4u5mSwzoEsN8JIth52+ihpzCotPnPOOHsOYe13bbyxnPSMbLNcsZ7yEyybEDy4sLVDlZSutyAZxKg2rAQ9mqH6KYllyZPHvScl5wTy0QqXUI3T9WeHeJBbQtpw82hyVfDWeZqjXjvKpFstQo34f21DDhEKML5Nu6yy5OCz8wLno/BxP34T+J5GZwiCxed0q5BSVu1dElN0CGnsjiSQbo+xGY9NAne7oJ/qk2gqWnRELpx2Z77bEzLmvHQFd+shvNx3hVk=';
  const _INTEGRITY_HASH = 'a9695c5680010a3c789b378d6e23c7ce36c9b6613d4139a4b5989791aba60370';
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
