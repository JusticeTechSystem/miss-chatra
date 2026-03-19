// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u36zLJUir6v4qMZaB7IMv5eBsxkN0f7oBWNjlmnVW77E4Em5iNC2yvGncu8U4AiqCCbssu6lii4xEpPRUbMtu2PDZc2pdEMLkBH2b3FCPIQcjHC2IoKsTKt35/DXB3jfSARpsHQ1EsoJHumv12fbf8rytwmNBwF29t3oD9oZRf7lnHrxStWewP/zcRnWKTIFWULIagiDtSu1+plyXLT7nGLbwfwYPGVlqQ26BnchDzWlhXAbwOKGXMd9wR2zDw0qmcV858MFq9vHng0u6wtuJ6jQuO1w2sYffTUijNAKYX+gtO+HTO+vaqU+GRXo69aQ7lJIjTMGbbI9jS/rXE+apkQQpe6/+Di6zgylsu3zVgWIuFg+jIPgyjnvPhYdt/hSLnLCSqwIHM0qd76Wc9wuOs1KMRP6HaTW22qT68uFbu2ipXVqvy7AkbJStjPRT56r3RMd/NAc0PEr0DjJ/8f373OjPLNs6PMc5iKmQ9TWGuyuc/xIu/ohLbO4GzmC0gCpC0KHR98d+6DsgBWLFmkkWtjcDJI3J+ZaCC/MYKS4eHx6V7ZgOg+6Oz5pbW5zq7u4jS1GHeCDh6/ch6PAz6BBoWCqN8+XHG23J3Dnsk0UklG86x5XBhKhm0W84VPqFg4zL0lzIno9TuibXaYnXV3iVI8Dx6KN48ST8XjReJrp/EGo3KW9JtZiXuf69z5Fas855lV7oFW7nWZMnq7g4u7nMYVy8z92EPoTj4HJUs2GUAlNRgywhUE17BLr9p7vpdqFR7EXXsSr+tCHRgXbwlAH3KAo37F8X9A30/NTlWVdWln/MMthvglsjbJD2aSzwt00UIgLOfhtUAGU7NEW9RFlncIuqM/YOlDmkzCywy0OW4UWMvCRiAbV1345FSlfhsUWuPQYQRgvcyrcXueJbbhox1KLxqKTHzrK9FRiKbVo+RUMT5zQczby40InyF1GrQAWzuivWpZkdKm3HrPF9Ds8MYZy/h27sGt3FhzRzifZbfwZ4Ml9ZZXChAH5MU+U+JEcH6pE24TDEah6aOg+fELS5NcXeFQD2J3H9sQO8uoDDaFIS28MiWe+TCz9OToQrEmk//iVhw8odITBiqPpKgOb0dlt6OZaJrH4s3t9HH40Xg4CrGbgo+tbcIDaSr0Nt9lhot0BIXSAUOeHagtv6bTv0hB2eTxV2uLtrGHGrpak0e+shYyuZSpTeYzdWIjXzC/mxufv';
  const _INTEGRITY_HASH = 'c95cfb76724bb45f069f5a82495cf193683f66445cfbefece1efd24da822d885';
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
