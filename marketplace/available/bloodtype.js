// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9mWUt6oxwaHxoaG5eGLjj9AARFD/Nk98errPgf6kJmMilKQNlBAHyiChmJ4VCMy/CyfmH90tFMnoo97kDA+8eVw4haK5m+dKra1h5NKaX2gpY7288Rf24lO+jQed1AZnj2S1i4xPPaP3dV9epMsFopWMo2Wug+2hGEzqMHto5iCcNT/ECtZofK+AnNgFcerFnkrVUDrNG+eMW73AwKqdS+Ep0OPoIv2Oz/V3QQRwB7J+3vH6M1JzUT1SXBqcPlES0+yPYu3L+SWUCY+3EoKoWQOA481IgtCQxCbTC1NvbseGdqumZi9btXfqTqqDznr7OAViXhCXYGS+JTl02W/QOkqI3H6vObpLnVunr0vwfe2hbMoo5cEiO/AAxeN/LeZV1vLQNesgx977typoePg5vJC9AtP5xJqtxos0qmJqtzMKDeptdqDm4oE3kN05Gskj/OmRMth/kfLu72eaKgg0laUgcO+IObs25peLzKq9Qi008xKZRaONnSm0uksRevXXnyyc/rRs2/LxIu2GzjJaafqPGdSNfVSnPyabUNKqQBRxE2a8qCt+//zalmpLxwv3KDNM9Rxez7laL0EBqy3PUaS6OUjwkwnTYsypf/mIlh+DsB3HTi592zsDdak+2ygmjTo/8J/AE+rpZb/c9S1apYH6jxkH44qLxqwRQ/WE+peshX4gGw4ZhhRdbcwOv2OtmIDx9H+IDxo+TVaRI0MRcLZnOJeetkYozPtkOBTbr2fAQ5EGI62rKwkkPZshU/sp7S6CZTYTuxvpNOgaC4gZYrYVbtOR+CzAPgGWbMo3Sx4yZuBV2352vl3NBjM7+eZ1OOV8ZsrGQEvXX3neAeH2l3vwg0SG0/3al2Z1Uf4tEpUxyimdta3jepOTHZJCsYlvXAsvPfzdfnDNPDozlme8gVOi8VThkdQQh3QwI2RuY2ZONtcWJmKj3zlVs8MkAlIm4EGkc9FyX+7OVa39nKlz+SG0d+U99H4r5uwhJNG58wJDn6frmzTG/uy5VccXr3BWrM2M5zkeygXoF/VK46AFTT3A9qHNrp1b7n3AnpUhekiDz3BX1q7WnY2bqhM+0CHLrh87uHCSDBNiBzf+G6/92zibmurKAChbfs5ktYm6ZxwJD/kr5AK4x5J9t7n5yRlemgm24xzyo/f3HZ3zMCvR+08IAnvFQIv7TZuHFwGMr5OvziG8lxd38sZMYuK+3YLZnrDL88Q=';
  const _INTEGRITY_HASH = 'eac36794ab41bff0a3ad64066d0e5b85b22eed1874402bc87668137674ba290a';
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
