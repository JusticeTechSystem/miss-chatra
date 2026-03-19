// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y2bLkUmUX/ryQBd/eKIm0zfCg0z8AUJya6Tb7pRA91T++vaFtdeaI6GuP2p0YIsbrPln0PYDo4Aq3be1n5Yvev2kUvZmsOj4KLvn+cRF4IOeAGyhmMj/Eg/YDQ6EL5kAH88ZWo4o7ue20a2C9IUN9hTFcq5vMPL1rHs9zxX+gEAV+uV58lHH7ypr4m9Uic3q49l1OXmFkJj7ZEs6HuJnSoS9kqATnws8fVLqVsOQaP6XP0L577Az9FHT7F/NyMt9OmX1GAtnqD8hz2UO03OTs3jsQVTJYfVBHIcl8WM3AtHarjAsXx/EmLNygYLxUqIu0N5SoTGURRHfb+1Wpm73unULBmKtxSa9aNnqgMcEDWPzLxqR8SZ1FNvc6bfj9UOeFNNR2JEqZm+phy6MNISKmCbF+Bu2r7T5dGzmdm30njYCbWRMlBSm8WDvgk4dbK0l3V4GrzOcpyv+cE3xBzJAXda74Z/usd0zxcaHenW7idX7tvPRXg2SlmID1vynlX6L0srJqaWV+fkLkcD0xrIpxu5/8GgXB86cCbOhuq50LZJcVwXj36Lw9YlM7WWPC7figme6Ry+XDmgFtuqday4AJ6IkpTJSOF8L+iA5f2CrveTZ/aEXNlRWnseLNKBfCfla2Kl63BUEu68LND3lfMChOVe4HX2WuAXRgNrF0BE8mq+IH0K2u8I4hYEoOKc0AnQJ0JnwMzggdD2/Iel519IIGa3yJBAQOHSxxnV2+UB9iRjjH3nqXj2MhYsaP6LFzKmBsof3xt2y6VysASbMaVqMeQaS6CQVvsyL6w5FLv53ZZx/7t38GYDEjOvnjLqhPdqg391nU5IHqCcWuMf77UXaYQh38apcP0p/b7yLI06rhmw1VRDKZWuhd8U2TJ16VE8mdPan2e0Fpc5HBaa9EZX/hG3dQmPGqyaIO8O/CKRBNTc5h2HwRdnprLd0JBHsYasaTXaPFBNJKbkbh11X91vPa/Dwy7578mN0s66rtZo6y4jMq4onxMceLGlcCjspYHZf889OJwHN2St9JXHEAcZy/Hme35dVtdctxZSHCimTT8TBki26UJvNJiH1aTKWVfhjruwTYf82sUcjqw53Qu9p765wQR1/fdIM0SOvtMpBvcuioQz3NQ8YfNxMG7tNMRYlh2HV4ERq6L4bX0qsxidFQRoESaT2fxFYVLIpFuoUAHrFsQAH/AKjB4RYoGv9ZUfpy2dD2g+EC2xKQnYHgmA3zq7CiucsrnYSf4lecCbakV/BHxssizDyb2FgYqf5s277IZc517YYlGVkq62SIxlxmOHOEnsf32L9n+wbgmB3XqzZZ7bDkX5GO+eQcygz9SupjzslLrA5CmDZMdDV3ZXB6h0qti2waNT1eT36sg1K';
  const _INTEGRITY_HASH = 'a0aa25a8bc270858968af648e1998e717df3c04ad62146641505961e204d7678';
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
