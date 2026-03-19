// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CEM3ZM86h/QIPfMw2c4NcxKAj2o5qUYrb/KRXXf3dmxTPeYYdF6kEqJr2l+P4RDRVcI00ORlBNunwSWIGYxbKD2hHGH61c3bHIhBLaWhuX6mg8P2oursFhBsisAuk+TtL/lWeBCZ7yKssyWSwxIXSUYXWO2uf9MsSlm5oPZRfOn7rz+YGbTZluA1x0xkS4XU6kGMDBA/kmJ7TY/JRRo0lnXNjlPcRQ6/OrMgUi40ZvSrb0IoEVZf2h3FbZP3tYbydAbRJizWsLwjMMWGprxp+mxw/vWei30NwGKiQdh7KXPi2jBBY8DnBrbi83IPm3ZieZRyzdLsDJfr0+6ZzC6w1ewQS9QddXowjIJ0uf3HP5bLBGwoW/Nr1g+CtsXbvYDvPdR4Lu/wSM4OuQiJhqOMJkf8juTxK2xr3oGYg1u6WjEqOV9ULQfJpTqY6LVgQc38l01DPdoEiCYmV39b5uWO4n3d78JDT/5fW6+Jug+bC8W2TFfaXr5IZeWf6aKhKUn26EqoFRHVHeamY4+uYT0Js5BTILRSy+oPMHjXhVhosFK5W3ixeFZsxr6pygc1C9uj81UTiA5FlChXm85ciBuMOXuYYal62rluDdwAuHO4XQqD32SBOhU/VHYj8Z+zQD1CkxHX2Bvq4r09nMJMEA5iJk02RuT2LTc53YUV7n2soDKKfXO6nen5Yf6Dj9PidrBzhEXtDpXn7+u3HfuvKt4gvmwdxBJUwfQ591roMI6FFDMpX7g4z7Q3Jot30UxM8PnGRiahzpxf8cWbnZSRpHMTH6d3MsxgROomsJL6wd02BclIzxgVeWOqFfjRknWMvco5brE1kt19dsgdIIDyIOwRGcNRjb0czbhc/lP9lQ7INrPpt3qpqh2OluP41xzRqqTD1xwaPKb81ZULQpNtLg1v+zQOWuuAkUleaPZqbgjDg5W5ZgQrW8ikbvjcJ88ordsr2GrbDbrVAV7kB6jNMWEvQN3YvlxSTQaaS4Mimeoy08KjeGOZQ0y/wooEtPSB';
  const _INTEGRITY_HASH = 'baf99d135cd3bb98db064899c769133148e4f4b5a6311d0f46497d2639f28dd1';
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
