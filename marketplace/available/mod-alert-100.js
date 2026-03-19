// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K86gYLb8uZykf6TniUDU4bplKt4/tQJ7jU5RpMb56gVeKokAiK8cv77GXjLg+dttKJQP8M9dnfnOUMnOg16nkwG2q8KVxMJA0RrY4rm6SwUihHoY1XDaIkDLmqle/V+hiipN4kmKKw/QQvowQqslVZZyAB5w88CsgVa5FZqFC/RhYA02Cax0O6FFyzcyE/glh1ox2myONG/p+daRzlHfCGBsXhKfuAZW9mMJVRDAIzT+glVVE3Q+hvxeWzkSdv4PmwgZmB9oJp64GR/9xp5IMeEG7mvLxcrBj8xOp3XYFmgYOtMObQq8b5V/58asCGumhcGOGaG3MNNAWitszVzuaym5GiYCcB2MxzONcNtJOZbpolkt1NITiexchT6BoG49F78uuGcJAeTu6mXocU8eFmCKFgGATNKb86H79N8o9RmzCB7cg2M6MZgtLSWAFW7AYQdGfVmfYiJXizCatjWE7GwpjZQ2H3lllDlE7o9f4UbolVYEFt59BNcqSiUrHcUtoAWLqUoE0wO3gtWaPycpOcW1kD4TprTf+sPF3E2bNfqG1ENvDNP20+kC3TFM6JoYbgT00dqGULu8Mzli7Ese2Ea9MPEfKRQu7SHaD/LhrtDAFs+tBpmtxFdQ1dPy0vPU9E+SiVIuo4P3ApWKffWKe++8YGK31ovWkTWBDFuTDVX/x3Df5epmU5sthEnbsIKdCcHVdRw9cmhV22d8Sh/pY2kKOFPVs2OkcPQq/7fc94QRLTWgBO6M34tPmebcNT9Jz09oBlW+bC36Qm7duN8rZ4vGCXpe4SIwew2je9Gn+Mn0Krr1TwJRffaC5h/lPQQ9GW5KD6LmwHZX2KxKobBKKM1i+MQudt0qlz8LdOiECJy+hSgZS5wJ20A9QcihKRJx9fFCLl7RN+lw343dC0zj5phuZqngnjNsJLw5+9Q5bK8uua/ZNPeox50pEsLnW5+X68AXQiXgXw4m4Gm9FicLJdR1dzO0Eny1ZtVqfgjFY8K4h8owajjdCz9qBiwB+2xwfX6MEV2p1TPItfYUzd5C4KI71AIeXu7Yk/XdVLdDElwxK+XxeGju6QSdOZvMCa6Rty5kuf2rM3eZNcXqZB922QO8FrCBGkCmHKs2h/L7L3EzNC5gwHxgHjxP1bMHcAlD37rjB2+05B1I2OCUb8aqRORbQ8L+66w9SDkK7p6My/L8oDDqhTpczZum6GoJJuepCCOXjOOKpdXYiVqO/CqSbdj4r2KehFuo2f8BBLYEqmm+oUPdXYu7ZSP4GXZ3pmzHsdyQThkeLb86feMaPEWNg3CZEpMmrwuxOtMxr0bXIV1D3B4oYAp4OZApsrx9O5tDNkciKNsuF0o+QJcDEFnEQplAmw6USM8ynsr0v42I';
  const _INTEGRITY_HASH = '97b81295f0a9454cfb3fd41e729c8baf158c575d471ff1d11829674067357193';
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
