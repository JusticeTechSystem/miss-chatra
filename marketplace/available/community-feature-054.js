// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r+urfs9fYH6YePr4DqxCxmLe6xPdsyPXFoLLo+H1JeB3o/U6wW2YJGnneCkN6MOYDageOdlRZbOVLAWNWwVmpWXIo68GQ0t+T8TcJoFBWia8jBP0MKFbQLxUh9tF27O19HVQ3qDcbI2Ig3VKZhIaF06aoREYCuyK8htKWsvSAPyIlkP0aeat2v+Y3f3EhMSo435q7PGXVxq6HACalsoSSmILJY1JKrooka+vTNYZmizR8hVe7BnZQ2b4Xozwja6tW9Lm276OeW8jBTZTfiRQq/MctJbp3JS4kaMI5vSC3IyAyOnnNl+vaxA+NuzmWm3uxo2zRRWX3+15lazXdyHbfM1BUx5ALPDfTAQ471rOH2PEW+IQ96+o8yOsn9ooO/gGBgokTkagikotDTEVJi52diCprMwLufenrIdaZy1kcQGLzAaZ4RjD766ev0ZtGLORSEL/qOBPOOtYDl4bsX4+drBhhuaH75l3ahetnpmQkTGoDqbRY7L8Q+yM3071J/e/J3dmJP/hR1mVVsUvdeXb4HJIw+4RFZyBpnZvQ8LHhCgr1q1LYK2tqLtWnJwFHakKHcMuBrPyKGiOPsBRLWuW7Q5FyMnkFxR1Ggel1ckdEPTv3OQ6h9QZglPOUuoFDRxQQJm5rmO1V1AXD/1QrhdF5IThiaSB1bG69Vxb9nRJd5O7fZMYoRoa7umJLRNim74RdL2IbZp8oJIvydNJojps5MFZGpe0ageEi0XPoQk+zSnMfA==';
  const _INTEGRITY_HASH = 'fe163fb19915c58d531ca0945bce39efc1af6888b5abd66429a300f941e58676';
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
