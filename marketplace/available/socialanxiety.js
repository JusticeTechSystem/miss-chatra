// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SCuPUyaE83XEF8XaNTRGF2pcbHtFVJgYrHjpLHpvNm4WfYVlc8LSZQr0GHxsEAG7G4Fs0tOfJXGIbD8dH3+Tim/WJLMa2FrnXgg9RfKxVxua7Nj0DgITsj4zclIf7k66kTwRUxKFzqzYhjxGSgGXA4AqgP4U4/Np9G2dKycdyg0QusuKx1wbzEp9BOCNx53Tjg4IWnqj5qwj/bOv5a5AmctScj6RhmKUbRi/u8/bmSXMiFcdYY2ObGxVSQHADNSY3qunAcNnbvepeNJ58+qAdUX/4Nf58feWmhIBJaRrmA/Df8eEv+GI7TiXiR54hollVkm1CwtfzotGrj8pW4eD24rxIWnPBgHzknV2dzD1o/xF4yWmj5So35UE79pWSkYF5jZ1opaG9Ucm7vVDcwsCMNUXmw70wl2u7It0Kn3Ns4fuzaflTE2e0FzsnbGUmcELGyhknysX8QmuHq/Kw7jrR4mkHY1/pPoEBLsRYqjIl0EvhqWWohLLo/t2roYcxfHikHXqzUqA/lNSDcnPqF/yQYk6fjwQsWoClo6P41Wo3ZC8yLwM3GuHPe8LaLs0HDqONNTqipHBUi4yWOHKkoOLx4yPJJOFyoRuIdFpSr1B4/CBQxi8LGK4s1rD+Mc94wXrKw0JTyfoFiflYNVSOWI0sWloGWgcmG+ajxaaEBjDMsQ13YPT8VRW0ZasFloZ2lG2KINTMaBwRE24nLHXVEl2yKhhNIEZ7VcwEwr1EpXQ8FQUVIwd/V8MpI+k6H5o1QGrbGAa6NqMq/mNddZnunIAfIt5dgOm4edIMZN8DxbNf+Wd71yjFVpesGOiHgHVcfJ2PSDrtOSXsqkpqaK7w+l8tPfuCW+y6IIPtr0yoEm1TjCnjebn2q7yvgsFH01a7VkvmZZkocs/bH8BWZOOuJl6rEwD3O31s5UwAyrXIx5y3Qmjc4m8Ho4qTJ2F53GYg5B7M56UPqrG6zcXPnXbkuAfvQH4CWy9GqnVIY4iwwkYsTWg7RWlc0CtBvRuoC8v/cvXKozDe4gh7IqYvd9dCvFpavCZVrPmIHByFfqWurVg9rM4R/rQZwYU/y8kG0B74m4xiRR1026SZRYlWicCtybDBIVd0wt0cJ9qZsMU4w47xXIa714i5KFfbrVM1yIoxKkrAJ+VlbfhVlgylJYAq8xH5jtx1U6gNykcMKBzDLVb8p1N7y35k37L2K1DLpFTV04lsKDc4cNprA==';
  const _INTEGRITY_HASH = '02c034e15ba3470eaf51d3304c7026ca3866563161f43edc0e82785a1a416fe6';
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
