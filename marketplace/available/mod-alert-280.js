// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jiA5bxFMVPTFlCjexQbyrx7QirQD8oNGu5MJRcAa8Ke/R/E7CHtgJ/0FsANdu1+u9BX60GTxRKVKETwd76u0+iNlEkfeKiUfu1yHckho6GPOhXz8izOZyxqGGit/VJ+ue8eMFDYVZX64PFxhlAE/mlKAjKcqbYBitaQZ4m6k83sFszkWYml7s3GoIzBG65gukX+6pv2tDC1IecENmelngWAI7FlreCDMd9YvsekB+kyLqG8/K7nyJoSVp0Vs0uF9Hj7KeOBZ81XgIQvCdhOH61NdOCjJ4Rxdpqgxz9erIHcP+bBg+aHttZfIxXX7w+rvHLsmN6eu73BC37wIi8H4w8CGsYLo4bPNNN1zhDWCd0MV2Zxz5rCaFz+sdJ3WyYyOYrS4UGeXBYKfEc9XkUecjfxoadPDkQjZxrvQo3/OdEMjkByUa0YCNMqX9GWATz3LqBjd7fmQAeyFKOYTrtvktcUFyg5QBlFg5HEQjL6frJZhel2wRGyTmFakXA/EREXsKiHjRC9Kiid6fGiGb2DNFso1m3klbh+8GFt6o5hbp7y3Q+z5oiCIF1JOsWnzGNqH7XXLfm7aEQt8K/lmmq9fLrB4b6wsQgcWoRf3qFKtqyDO1fGY0UQwHPMa2UhXrRPyB87FqO0i9MmrNEKqrusPW0hpcUEKvoHFgYDF0gD80qKehmcaHruCF2hIrhMeYoqm4fqPm1iqotkE/yTgbNTeH0MCpiFlsiynTrPhsAR+iFZBgOxlqtIXp9yF00srPuqxbgN8SH6CC2NWyM1UcOPqCSDd3xU7HpKKIqWC33PEmK3brdNp/EBgNQx/OPeWcmLW2JF/qXxTfvofzxdbzAuG9706MQCkN7DlRM0uhyN7dAAwjycTPvwXnojv34PLwXd7F6rGIOYnGEJogQVYnjGKXYf10wYhHJMmcWk/yo3QoI+cTQ+nvmlukQ1OuXV8aagg3/lg6TAAHgSucUOnNJzxP5IfZUYPZ2FQQxudjJWtNMTcH9vooQ0LutAhMMuVZVALPrON1mpUcULWaBvBQRK5bB0c+v/UvwmoH873+bEDHjD76LM61gLNs77gmYu+/w8g1U8Nw/sdJ6y/UQGGHApPZtqgBpZP9jv/G4of1ZAdgIryldZPAIdfMy4rnc9N4tB4DyKB9nAxMSjQC3rUmGYtNmRht+tp59sHiGzAjtWMh4n/iiU7xZ6hJAR7CUKfE9A2rlx9G24w4u7kQ327KaqI1I6H2vBkBV16FycIKmUoyk60bLjmD9pGE3arAkofBYdhE9+NDwQXH3HA1QsinqfajpK0sv4zPHFg1YLMiO4NKr4bIB9oTAP4uAM6K3ekE3YxBiRTTWrYXkT6t8s7ZSYvHtPHcPhEmDRaf5+r3u1m';
  const _INTEGRITY_HASH = '2f9953aea8e56fb2f6d9a362ffcf8495726f6fc7e3c60f75a1de6bd783a61b9a';
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
