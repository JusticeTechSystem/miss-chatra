// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J8QQqrXJNcrgedFXaW0/pAEGjBa33kEhhBSWv7I0uBx7HJ/S/f/pJKSN392+wVoNDFH8srQf+MnlgD+mO2IGLqcAvlkA5VfoloEh7r+ciWUK4vE3/l/at3JSjF4rBwZoTMBkfyNj2zV0AC9K7y8InrH1ZMHX+5e5N7vaLCg9NaldfldoEAhyLUyUTNm49+zwNhgc5fAFrQWRCVEnObweSD7tMnCtauEPAOmK4w7/+D+Oqy/WHlvptU5pEkjofhUewIB/0q9nN1d7Ff6isxIzLtvQUPIKJOgxdTaTgocp9tQ9SJ+aMkiJJnZvHHCiwil7tC1I+YkMaIrTz5nDTX8i8Gx3DadIXrh3+KbeWMDbd3/8XlF1r/GCMsfMdxhMxp13c4hZ5E8l90jgV7huuWGm0UVD+Frki9ZS+GM5yHktl4GZCmRovEfhCX65ZRzIVkbHkpL2vL1w1FxbFo6ltqvdSz7IvezxVfCYjlhRgHZKr1ue0k9pAoWfZFS1ZcmF6irzCNji3VA1jRtdMAXMftPYTGGH97DTuYKDQ3a9/+qQ2J/xW12tFgf7At+PldpsMEs4zAvlTEvCFTi8fzAf8pG8n3/hpQGj3oSXGxSkN2X3isQ6tMmckspudwBxRkhZBXbRmZNLR9b6+2Gy6F0IvGMr5BnV0FASsoX8zvAf4WJA63Cbv7gqG1xra4D45ymDXdMdf3UNXQ2HCjL2b67DAMZnihA5LXNDswhyznQAj0aUeF74mA==';
  const _INTEGRITY_HASH = 'eb9cefa8a2a6414455a04bd7505d6de2b361bcd7f2c9a803f6eac321a763b6d6';
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
