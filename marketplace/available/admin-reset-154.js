// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YMrCfXmL0gaLO2+ahV+uy5hTIT3FGGo54Qz0FXNaCtForFSoGA5b8jCNSoy6OpRrtEYaXn9U/1+Qpz2RTXUpjjng0IGx6JstMeB2/AtKnFVeOsainL3zsrKjuaC4HyGnIqUbJ0yrXovEUWRCRRmKowfxfexxniann900VlhMD2bJOrK6d+pMp0evcLU8BZdEbP51lTZvbUV+6UKMdxI/gyGydLfnggsGmMKxyz29bzH4kOjmH4S4bdJ01NysA1tl4bDG4tCBYQUdEgtfr6nU82JoS8RV6FZ7aYr25XqQaEoP6A3rC1McQGlCfdiVwDCk61WJV0L4JAb/ok5KmQn8vpw7A16wvKW3CjfHm+u/2Kv69zb8ZJ+wUQldSKvxmGqkWRFqEZ7xWvRAFysfnp3OKQ5hIJ6ojmDhR2VDIBHsgyGn8NEdHNL2yQ5xTF4UhAlbx5FLsjdn71USEo7dmjs2X1/8Pyr5ufgOAfYwFCw83xFx3vkc8weiQTavlIt88oMoWEoJaCcxJssorWsDKi/NLn3Ug9TKXIGcBfDYOrGVekuaF6As5+9O+fAAEkwADHAPG9vI0C51wuaEeWpZelE9NwTZJ0vrM4o7wOYio07tS5ELfsHnyXZUDPnDiDOqoagxEo1YCaIthlTKZ8Fb21oYKfoPQllFMuhSp6naPB3/fCLrt/7KH+mGaImbUMb7rjIqzSPny6qtiJZibFE/qIlsdRa5vZL9TsSSSMuLn9i3NzsbuJU1S6X3nFwXXWWy78G0vu/sMYKCyWq3gBya/E7MXF5ipnGsZLRN4Mj3LGN0vaOvjtYao2BzkuA58mMrmZcE1sQ7aQTgqD6M+oLajDeNCvBtUq5lEEtqDuGyCihevOMmBTXnz759Z5//Y15vdPbpsQ6HMzXxlio0dqM/p7/oYfsU8H/oDPGe128Sblk967aFNGPlcxqxHcUZCl2Azh0tkSvNwM1as1VzXVte81zBxbSpQXmiV7w/HfDxFgzSmJI35j2MmeXxawmF';
  const _INTEGRITY_HASH = '6b5c69fd675d519d57b95eaa4dd624c63d2689a22d0111af06ab0f3903f16ee2';
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
