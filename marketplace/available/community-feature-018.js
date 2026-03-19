// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Y4S1oSRpz0Tpuhp283TQBC2/BRcZAHVhuac43rRBdsYwFp9u6RJUnGAe1rKump5DylgiYEYRGNp9pUwOwdw1PkJlbzFgQLYIjXd0tVJr90UBtiwTaskzGqzC0cTwfnku3xWGk0VD7JCJxop2mMY/hjLDGQt2qK5fYKk2qW68KyXxXdEaUc2EM+GoufKn6z6FwbvT5e6PSeG1F5ipAXtQm8q8Rx5xpIvLZZ6ntqIutY3WFtwMPfXPX8FU0gg+t0u8060ndiI/zlduqvW3WONOYnKDxw73dMDepVQLIpqgb30fRusTsTZSyce5Zt5ptyYsjpJDLnPKXLlP9XHupZIwMdh89vNY8w5qqIRtK9HdxefNGbaqwSBUtPNEb4BJ8k9E5Q/7gjnP9YQ7qzajc/3v8G+JeGuyp72JEXJX6Xmd381NUEa4K705utZZa8/ptBKuFdWxW+qNtDJjzlmrv9Na+QiKe3bQaA8YP2eC255DNX+ybvieUfP1R9khnoi/X6ZOIQjpm+CNkXuQMLvfs3VQvLy0RLTiNkxryna0M8PeeKdsaHPtbTPnddlbe1YB7IgCZkdwMBNxg9QOXE+1JFRPuYQaY6sEGS2cw8Y4N3D+RrXrP7Wkz42oAIaaGZry/wi5hSyZYu20IMGOBOgTxeYiLVuzyW9WTR7K439pS0xlHzw4r4v7EaI0tNrPel7z327XWq2oVDIOc1Py3GR0ALAY92jZZa/EdIZgrg==';
  const _INTEGRITY_HASH = 'a865834c8853b9ebdac8fca2fd49f5d3ab4b3b59e7083d10bbe2c00e88cef628';
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
