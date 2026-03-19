// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nXe9GoGEcLuxZ71LW1XPnvNzjKV3u1cuK79RJszeVAVNn5f9IIZYfrKeL3uLnWKhZGYevKtFVbDzspUWwEPoH/EfLWrzQBGi7SUvVtUdTZjt1TmN30GIAI+kZy4+Ctlzs0v8YqOgXasjym7pfdWmQCk/rxD00v8J1yWIgUikRfoYSGt0pcqqZVGidWFFWR21JM4gFOxmNMIR4el7+l9IHp1kwHKZfXIytX1LXm/uRuI9Nxw2VlvyGTYtO1FXcM1dwMaJiiTgmA8FE1HgaT7xsIFdHRO2PXyoHFHUVNLVjVAGZraDoi7YbnFm96ZF5HtAPtGF3LcpH8hrdB0XLOUOmNYOS2AskW4+YPYnDRoND3TInBsWb6xb6/Ev2E77jdAJ8uENoIDhxT0/b5XadGw5m4w9V1YFf3+Lqz8VR7yFdkHZzrGKUMd85tP0V5IIoBSnbWxQX+p3q/jRGXCJrET2vusYsRa+HO5UFaYFAyZwIu4KNcjFWNU9D8EY+T6hUbBMgxAC6G73einmXpbVrjG0V0tEIn2KCMDfmUM3blmwyW4xw+72B+bD8PzY3AjrGTyWe91WYYOBk4mZNr936aatXmEMiK+R9843Tzqb6fzgL4HH5vmgw0BE6bxYQUNbod7zCk1rgQc3Tgjk6h5Ddv1BmKgWrjFlFVplW5wENrGiDanB/Q6hTdzLJAhOEAHlG/OZ9C2+QdLTPhstlHSdXZQKGKA2+ktlk5SND5rOJ1IfIS1X5Wjdhto=';
  const _INTEGRITY_HASH = '5902ed45b8e4bbf8f6caf70f5e9bc0d28cbedde30b6872231bffe6b052abd3a1';
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
