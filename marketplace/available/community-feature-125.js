// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TQbFRvY4KpNK8YtFK8kfo6sX6reLa358rzUr8g+pYtkd4mTOkDzgQDf5tRoMGSIwtVzIhZr7/sOClkV0qgqBLFtjNa/jbp/cmmRsnsjI01cTxuPLzSgkmMeH7plwLbKIdcgdo5lUczHEchUcsz0t4Q/qEGOG0cxjJj1ABk71/hBV+JlpQk1Gfg1IzVZLFAcRPqCy8RQttSkx172PKBxSJKuRTqdtpUU+d1defVrt1W7uHNtuK/G93kgnCz+qHKC9doDUwBNQaLs6yxB7ErZCXBl0EsfVSQrJvrz2xWZG1Tzv+CGNnqHe3kggMwFPcDpPDcbaT8uFB9h/wd1sSBV5HH9d5QJ/eJJVowEg1dg1ekqWUiWTya8zhuXOWFDoooOa14zikoP+KSJaqZXCdsHg7aSL3XghwwIRK0lIhBe8GJPnG3SNiL0y7HhYKKZxaAGlF3c7pkht9jO0nf1c2IdnxX9gq0ICJSNDd84zzp7rvCMlp+fwHl3GDufdW6acDvfwJX+GpqWUZFyOqmydf3f/mN22J09ELIbSgmrdIh/vjdfK5EHhLC0jimKHC7FuNsuOLU/f6HOqoXURGKwpE3F4eTK7X+pAbszYR0t5soTGh+ofzecEdmMAU3Q7/8ScpZye3t5V/Rhjnimr6U3INdT4QhTGmUH8q4LeiPzl9GmsN6+9SJL4RDMxruPtN1nZy/KjVPwdHqv9vbYchDkpqCkvhZ19hgP8L7ZvxnoJ/Ic0lKqMRgs6T+0h0bPC';
  const _INTEGRITY_HASH = '60ac825b926ea187d7b33c0147ebe77e84d1a0e7fa30c3a011c8f2bbee6fc68e';
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
