// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+7tgkiRvitwjlmi/G6qajF/ofqTtm+pLMzVGewUEbxJJ/CF+K3Us76pk8xYO3LKQD1TfTsZx2ouKz1HNnQu+CV3LWDtxOsvDptreIV2GNiISqJ/7rgIrh5/0Xga7BhG9qLM+mY3+l/WvCXB92CkM6MM2AOXZj4oiStiJHUwKlOwsw9Dc6duYNmXBQNQEP5o6fgVkoP9BqDznwtwaQNga1z7kXRU8U3gzMHY6oy4VRualpvQCTVA+Jlmqlnui43gp6cMEOqnEQ+QZVpLxs2dzsagrPRD1nLHq1y96IkCBDg04CPZfUPnlR6qTKmg3ehKB/MMWZIYHHARCVpJa2oLeXQqpOVmXTMz5Zvv6xca9EYjYv5Ih6nHD1/OUxdgPEuHmW2jsIBvx3cRWwRv9CJJqzPH4fgAdPsYR7oHbLEYNtJM0t9l8/njuaFBRIkythjoia+ILR5kjryr7obO8tqG1XXD8pIAAPqZze2/JdBDWxczAc0hMhItKpl3wKQdXUzN1p7ic+e8XLpTSYU6IrwIm5O3nh3S6SptXqm2Ha31WjmUurAZVteS4eZUs/x42Pns5kNvb+OaXpt+cYYLsbrXiMJQZwuwcCTHae3BJPybEm4F18wgLk8mBPSIZ1JIZ6+wPKhuYrhbdoOdRaw0RvitBHsJ0z+Q7M3Bh3NjVmeAzf4EX5Tc3iDs/OKBTc7e+Ge+KIn+G1+nmormbiPGiDDZ7/9liyHcnHFQQMpcA3s+8hVx6U2bXB+I=';
  const _INTEGRITY_HASH = 'ca04b87b04e29da3deb5a28a28856bb56b5dc1e717db0b2ccc11acdcfde3cae3';
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
