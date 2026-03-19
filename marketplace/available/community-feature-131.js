// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nX2IJEBBDG3GrGv+GUTezNIjPRLre9qIe6kb7zzfvHnQ7aYUfp/odi/cEe5W9XN15xPplcuUSkeYE5JMQ/s9+Knz54VaJSD6m0zja9qTOdqsO2UrCDk6rWi92Rc/9ADaxBJVMMoFyzUoahwwq9AdbJRIQjlmoNgOso8B2WIvLQnbFgHp33SxsbARpVJsFgyzfHBZYvnMebGmRufD9FGo7BC0amy50Pw76vDqBN0KJhEwvtus63rcjrIKue8JvQdEkAFXZjBOEsgCsiIgcPFAa7q/nbrc0ffYGeaeM+Rmhf5ojJr8+WWRoLFdBou4UUXbF4qHMs/KvFTJgsDVBbc9RtwjHdS18rfI9V1y2UkoMS5dNZ+evdwChPH78TLtx5dnRbVTE3S1HPcBnEReekq35eat7rl9fvZYsrZczqN+mdPptcU7w5XjoKvgUHvmbO9GQmP+sXaAee4nnFaTCHQQ0SctBwVVYt0uu84k0JnhZpl+8medmKeg4zDs3COBEPjPts6y23Nsle92xg+UNvyCXnCKUAy/rO9mjv4H7PrWsmkJRmnYv6xscf61Gium12PAcgCEIjBYN+/CwlByLTrCSEk+WHvEe9JVBSqV4PHo/8I5kz0uVqLt3nPYVgSteITTvJKDFItqMkckfOJu9ti5/c9oM4dzWl4i0k2AAyXiqM64i1JhyIug4Rm2YoyBj1y3CmZPeKMkg63vmvXunHU8QBt/Lqh119MH';
  const _INTEGRITY_HASH = 'c7bb90e54c7789a016835176cfe78d2fee3c512ec250c955f0436ab4e0174bc1';
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
