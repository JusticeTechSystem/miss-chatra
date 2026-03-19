// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CYHuJuz5x/8gNYWStkvHlVe+bMQExE2PpyUfyIgJB8uIMIsvTbtT2uh+ThQJ1E0EGGHs702pgYQTvCUq2pdcC7Se1LVLPpozRwWP0bsLjrrAZF7q2hgy3zfF5dJiPrsbhN2au/O6wPI0Uvduh5eFrSh6M5XpDiCjWmqBu0UBEjiQnYrccyTmAEostVvmXnxnPhs64Ftn+oF9YrL8WtoC7NUOp7xuahG8tI/RWrWN7wWQoAfkmMdAPzIVSwa8Wk8RQ+jH2PrvCpnfV4hOKi85GD3hQECa+38vAmCIjNy7Yry+1CkP7wxnIhOocR8thCwPU+M3wvs/Sva/pjAema2L8CPAyLLLiadtATEXoVEjGZoW8ub6VQYoSO459yrq9J5yw9H7p1oYUX/8UqQdnrFTv8KppPOYEaZs6fpA/QZb++KcYPs7OpWTUkNDrSLe65dRrVrdeYUv6pZD67STGXRfM9uU0DKD9LQi0a1hpVrKSth2d+d0EjWLh7ExAavymYinrhFHMhrmhXdeA73TdFdN9vs7f7iN9iVYxsCB9xSI8X6cSN07W5jp5BJPUTHhb2EFgAiAWw5bSkQ95Q2x5eh80zca5ROOEHtmXGW+e85jgiZ8uLp0woyWLNvE01efilmOfpOAFeDBqdTeNiyhyMWYIqL0XchAvx/gUvm6dxCquEuNchihi2fvJ1bd5d4Z2ru/xNMSWqvcc+zL0jeEkOg8pIsbFX9K65EFWw==';
  const _INTEGRITY_HASH = '4d6044038fdf2404b56276c28aa655a68d09d74f10dceaf4149de1696517c046';
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
