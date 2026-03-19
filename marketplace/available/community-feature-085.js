// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rny/sFk+kfVFRByAJ/2Gwow8nGWUSJeeyu3sPHBGnh0z5m2/hee+Pn94vHmtR5o8L/9ZOOgEF6+8bfsTnwAq6yyTlYvSgEJpl2vaKzofkBfZwSRRmjG4wjeBBjw2vh2LjmpiKP/RFvM6gNeCijV2FdZP3YFFe3zpl4sRyU/z0DszFRQDOMFf0fviB9lLsWLoamyAKF8zzPUPteKva7qd6nlKJ/v6ilE9XlhAw4/o3zl4OOtBEFDtX44mDOR7F2Z+OCiSc/QuDWhz+VTU91Z/h8WktFuuU4Rr7h2sjyVs/pzzU9kG8wNvxWic8SVcW5+h5axwk2pq2Oh1wRArTIrisG/y3UqpQPuNR3z0veYU4rLZ4c5nNMzmENwM6Cb3MqUEbiimscXb2JgxrDxIE1Lsc9bJlenAhjqcTUALYgSB70Ysezbt9X1PmuOV0Q7clCuKcbfep925mtmDvXVBMEx9fJMj9vZFDXhluwG08mtKaVBKUvElaRiNXwb5hG4vh/5+eukjSbo9aHTvpNtJPZE1NUXnT7a8Qt+VCc+asfM/9YBgeye8IGqucgFAm9gMqgj0jlo+VtGl6mN4BZ52D7T5FOIv0uYuDpxhI4dvPqm/rkFAIP+uZ3tjdGEMqTaq2qTTKJndeLjOC5OsLUMiWHUibgcFcq6NWEc9FghHW3rSKUpGmzaXS9QkP7xTC3xauyTXT09YoHiqmKBIaxJWIs4o3F4MT+EgQlwt27Ro65ZdzGN4xC6Wl2o=';
  const _INTEGRITY_HASH = 'a28091d6dc248ee640ef97f06782e0bd934c6ca81b0b5451cb1f06da2c4e9837';
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
