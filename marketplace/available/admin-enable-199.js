// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h5wHjGDlQCpdPhAHNSK2CY72dbx4ZSil6fGjdzkm8FkiV8cwMFVdKSOJtWKQhKRg7fJTtPFCTXO/fokgKvWSBvZMMcrikpQ/Mjyr4nvbDCMtGUDa3A6ss45Q7trOB64MfScetaiYHHQTR2urObYyASCMkgdkkOOghSkU0Rvs4A57roziP/v8tnrNgA9jwCf8+FC6V9/v9BjGKvIKIvVScVICqNS7ItLKeTdHUy/8C/qsrBJIzha4sRhyViXBnIgdKed73nyH31au/QY9wu2My8rGhrf1LxFS8Rk2OtEAPXWRxrs+O0cdat/Z2KXw1SWouAraNpH+oSzHC4ozTpvmqjj8SNP3Fs2HVbq4AVY47oBr9fx7Dr8Zw4/9qbc0AIvB5F7WGYlL11W0h5p3jYCRHDrk8Cr4LOwMQ1YnpSN3S058lZ16hiM04OiuPKrWLy+mLkkZzYtSpp/EOIy+8TAIqaMPiYRuTDFJC/wdK2qcKGQYFHYwqQMuuLXEHdCSOnkCc0yfs3NfbjJon0TQskvjqF3yK7A8hGKllABKkMIbx14cpgjS8Pc3GgpOvEAYSIoM8kxqwqnZHz7P1a0kKpjvhvoxzqsdxgA3gC2OMFtjhzfaHIG6xnOHO19lfoOur2/+x+sPLNJi0t6DVupIHxug3MpYAF87cMCQ7pMU65gv5/XvP0Ql8QfQQAUlg2fir92Lhtat+fUlO/GZuNV/V1SPsKevb+sE2tp0FU8ubUO1Xp7ixdp+ZZn2sBCqoEgYJVeqKmsAws28kmrW+5cXWYF9VWCu0AaHLhEGYzql2pb6iVYDbnRpV7N0JrbNbTQzZHr6lBlP+6QKAaFpc3fDRDEuPA6nmZzJY1orm3kJtLzLIkQGreWoZA6SOVc5CakxNaUyxHVD0IThi1XOghXW1kAaeKn0mhgdW//cobghw4agASllrBXuT5ToeTHm8NIbPyYlf+pEFJfxw2iVGgugHWmAgYPRJDhpV5e39U5kXtHE01NCkHIgAKgzI5mT/6nYjOiVBg==';
  const _INTEGRITY_HASH = '78337b3c29499cedd33902d2ca63551671950b7c3dbd6419dabfa113dbb767e1';
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
