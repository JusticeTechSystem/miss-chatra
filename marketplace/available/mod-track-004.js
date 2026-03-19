// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rb3wqZv+c5HUsa3gMyB+Q/O0ba+T6s/1HobMBKZWGIaT8gIm/EFHA6QwYAszEQ0tSf5n59pVLCJfmtz8c6OM726HJmqZmrLIO3DHLCXv4YUi6aJ5I5WgG2nVcdzCX7ZazNz4+E2qBEyXPHyNXdK220pPUCLRuxIsV42fWicER56iYCCEg8AUxv5xy/n1FSQmacil2YnlvhwT6gN7tG3TpkNh4BONWxYAbYk/4kzj2bqX7TVArdJh1RjgptJqLZqp+roe9wOru8062ZzdF8i7Rj87hO8CVNzduQS8UMvgaimcK45gtHKBluEjHZcSgffxwTTyLb6lhkj7rpO8ZoQgVzJNHUDPziXRTAQnOhHSQu/7isd8btNzpQEOy635MpbsPKsn1t/HI33xVo27q/e7Tfkaxty+Id0/nEURBDc/Yljq/zXfvTQ8t5I1nq92O9B9SsgJ5DWvAnePas/53+8hXyaxoLGkUZSdgOl+a36y+/KAqCMaP96FUYI0Tz8yK5r1wPTJF2dMrORd5dV8AMsNglNr9KtP7y0S3NncMJzeHu2SChqUwWDpJf6ydul/Z5D6+EqN5UfBwCTvuhoAMFyi6YQ83KxSuGkLT7HvcvaK0b6xScuws4YkKc3oBk3f7Id+g5fjPDg2jjcBzjQ2o8v1/NR5XQc+CIXAb2OL0OA5oOHAj9pmvf6igECUM4UTSYEfBeNUqR4YEFkReYzRJ/OQicfNXiz3Frc1JqmliqQKf24VvcnMUWUs9jM0Cl3tVvOvGrwyBRTh1UBKbWwBOo9NBH/cRe8/GdOnFaa8qdQcPB5BkBCZrZNuOesPBrdYEHDC3kxHoPapRkmNjn/9jVuI8IcsZ7QJ5SFxJxL+n2TaUtAbAYSeNb0QcbUbBQI4sIoGiTLD4Z/vtZ8jTrlPk8uf17Bnpdujugg7fHzrXn2An9Opmi11XkxaTrU8sZxiDCi1lLNWgmoxMs/w78eBMxepcajHYZoLs3ivARKBg0SLGtN4AB23cr1aB5osuebG6PUu7s5TkIywTO+Ap/fZzN15KpG9u3qHy9nUo2A0CxurUFDwWJ7IxaCJ94VoIyGNxZUQ7rgN84U86zoZy1s4nLJ61bGInDqGN6izU9rh/V7SefLN/y1zfzqPaBVPQjWs0rPERxFoxFrRtXqgE3/DzIQcNc9F2UxtCsjGLYUWNCxp4gVj03NQRAAVmJcvLgoy1MVM6iL+A0B+H4NfCiaP3tMhhWW3u/zSJ/GN6KpuanohwBiBMQdgIWO/BSAUDP985o/I65kntH0DRnHK95l2xYV4kXfYeL2QTvF6zmrei1pt7cDSdXaJgGRWZpIUzZceGLUIHhWrNmTrKCyz9BVBXRM8CpTZ8Ts=';
  const _INTEGRITY_HASH = 'b45eedd57789beffa69c8bbc7f35ddf378788d9eae853f1c147d614edd445cbb';
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
