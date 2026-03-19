// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gUqlmHOY0aCQMEIS4lEUOpZHdX3EYz9JqXRyklQ0k76hhahK/zgRHXfbkmS8mwi+cWayhzx00eSfdq5NJfNA+tLYySzteBA0KiwA1lrsqCcv5wtLu0ShPXzjhiaoA2+s4v3mWsyMPlnVPe9FAEAZMRcuISuJ881lyNpwCdqG4JA6pZnIrKPBQjdk/qdoiI7S4wiTOMBdAECikVinU2HpZ3SylpIUaB3VzPNUu2sAhN2yl7lrtc88YQyqQy9mnlkoubhR0h7ohzbI7GW0ciB86bhOxBetzlMqpxsu4TwqFWxee65ZU2hu+C30NV5kiIFMm6tokP7nXNxXEIML7wuWQdvwtbm55wzNw5XK9ni9Z85uUitbp1oQmySSneaITzGoNsieX5o8Gt1vsEC2BOh1dYZkyhnJnzjNVT7Vs0/8DwrnJSgErkOgzCJIQQz78f1AuqPxWT8OKC27hHvHd1qsx6O5VkbyHEkq+hpET0NGUAhWTpaZUJ+misK/Ti2/lVnqjKSs+iilCG4Gf782UBrM6lYuo+PbZGnqum7g7TXK7hqLQp8sEUt4q8srzxviJkUVRhDqBeG63f6PW+7TQcFcPVYcFImsR7zT7CqBKw2kahnxv+cUc9emMfFbiPuqZOwPQWlJoJLf/5ONrT81O/b+mGUbjnGch/NWJqWEgHo9u2ZM/ZF6VQ49CNTx3E7wDi90joRQ0qzxS6sG9znQ9KwQ+VryDjq6YLohdBVerDs=';
  const _INTEGRITY_HASH = '951fc29aa16944ab0f31550a2175398e15fbfc1004bb6e04ce9952faf646e9f5';
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
