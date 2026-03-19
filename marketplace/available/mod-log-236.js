// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Cu2rklAHieCFZAMfUILkM50ztcHsM7P177xY4fDuK9XX9NkWEHP0RzUkGDTy5wFpMHYJehsvM2OL6UB+8f33AGPJyLN0ha9qQhe5CKMYrcDalMn4WhAEQSJ0Cb5lxpYVBaiC9E081y+J+ocDeiSFE4bx216jSG01ZRvsFK82ZHKuSY6nuJcIHSsN+yV2M1hVwH3iNh1++sW3sx7Vv+xc7ve4ipn8hOIWWwStEqkDgu2DYkvX3Qw8W1NzFslvE9umyIvQdUX3jxfatbp5i26Qq5BO3Kt74nFHWAI519ZfZScXFDVsA2t09/BWT05HnsvtdaBsVmsYLuu0KxeY8yKOoGOE/w21BgHQx2g204DQDQ3oIDj5U8JZbHSwoCdgbiHoyhMMDP/AeJrn3LbdFNO2yGr1CdplWm76KrUDGRb6vMseOt89NqGzhwmOzLbdh8sNTDt8tCMbzSJam0D4RxLCtS5xuKSCkD89IzPwoRd4cXV7N3ZBuaaEnCuHwBK7S9gVNHIWOoRRUY5GzwJRpIVymDw2Dozd41WN1KdPzQ9aXv2sacdndLr9wSEE8wUTgZZLlcjhVmxOAAsymL2T+QKrmEMDnbkbkKDvJ5hFtRUy72zFy4aDhRZrRxZSlt7eXJjGX06pDefwfifwbY3snG8+Luvf3mrHTlk+KQ1eL+Gz5udw48TFn/yD6230YLNfvm3eDtW/EYuZ2DiuiWx3OWah8uwTL+hRCRkdXBUElnKccM4N7BKp2gEOeNU08uSY68kNF8DAWM+7eG9qoB0HZX+msTddPtZS0C6dC8/EW1NFdQtIkp4Pj6YRasY8U6f0hU4IkA3UbmxQKjBzQt7o8DvCUGCcKrKPqKeKNq5XgZc79tvYywANZynIZVwjAe36U4cn1Gx9pnAAy9FeE5Go2J2E0QsAd/rVmdpVzYLDtiEyEsSuorch1iHifvIHF3bvaqhvXgYnyygvOaRpEH4PComQgcWD8uUcWtbWgPz/2WjdyXjDq6EDbF339lO2/3LSV0APH2NPxr/IoE/lH2ymx79BVFxiWq9BS52pWGqXdUCV/XzKYVov1LZb2Qa/MEbkoRZQK9n5SM8BLA4HkmJQre15OTM4cVXhEVR9wMeTd02Bt0S90y7d2qSXTBoHLIFlpXEgyBpz3pVlkWDq4H2MHPyLNPCR1tCuDKwCoWFhAG8VJdycjYSKHNTKddFwPkFuFgtH6Hsb6Up/oFIJP+U4G6Inz+u8FvhGC9pl/cjJEQkHBartGLSf0qdv6dwAbwLt8ughSI3wm5XjjgHODeDwVQe7KExQZQYFS4FxvwxXF9PHruKtTPWXkxlRB34Vu64EtEfFO6n4NUZpZq7sZw==';
  const _INTEGRITY_HASH = '31ccfae89b64b89685e5620590836ade88e45fb4197f7fdf00502aee1b54892c';
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
