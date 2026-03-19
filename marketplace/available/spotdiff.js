// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L40d34WdHC/jtf2hi5ujB3jz4oeoDaAJjayBibI5FHwv5YMzGIShzvosXDwrIBuzlDPg7Em2ro7ZSpTnAZSSvfv5q79a2IiheHXvhE0NhifZy1lmmb/XFqDgEaKVsfkUhqoJQJBIZsgZC/eK1h2wKSqMwfsJvUbqR4NZ4cSlB9IsJrAiuq4WDXAELV4cVdhX+r6JXsZ+RZq7Q9XMwkLKIUDCXlU44lKsTHO43cvKQnGFMA2sAebrZA8knMoESsu51rinmKhUn65jwEb9Zrw9Pa1R18JjxCjnerUEmqqmojX3fst+FZKj9iMhdzBtCmqDFWlJ+LX11pCZC6ClEw9q+ZWM65OkmfdRMZKRWaPdIeZssxxQIZuPs46qMojEyWkMcJ8RPKRsDXp+TeNFRNsHvaVuGlOpkb1/oCe1GydMiOaprQOMSWZf0WmQEBQTeJQX0ZOuh7zpvAphHeP0qgKooa17JEV6WG+7rD+5uh7OvDc3hrley7GmWmFY7TNrEitXYtPqfN6+YpKbHA25l18jjajsUCH7GcesIhYiQJ1gWszTnlGe8sLuwolnkcKIJ+zF1WANSM1rDW8ToHIApLWiyUFBHN0hCOLqGs5tOVzQBIEaTjHl+3V5Gu15TGdR3F0fHtLh0OnCTEXNhcXAgKECwDUMAOItFF7zcBE1sg9wIPPtRz8lyaIBkOy2bwf0p7OLg/GBPS930dyNuuZUSIIFPJtLXr2cYzO39395xMwH2C2cAeo5WadhDaUaZzAFzlLuH+KCc0eYc5bCb8LZr0LeEx18D00RUOCJ882ZpEDZ2nv6z4qKxi1RWGHGIFqBG72+pxJvAXmvmL1NSO1LPwPX+z8DLvw4zjO7hpzOsR5+GIXeBDUPyQcLo3/eOolO8st2+RBLKsTUhjFTmfvw/egERy626imJ8J3W7Pk3GCRvXBFeBBDgK2jHp0SyTweNGxXeMbsxA87FcvgdpjVT9dOOiqD6Uf//XMM0ECZsYgfFjaLHvI2uSwdoNUepp5F3otopxkThtMUG04IRmEWr9zN9MKFWo6RKjUhl1DTOv6qmWqUxj8HmYLSeTHiFykmGSx0FAqpB/vH6By+jnrSEqHnZ+O3JsvZf5HT1W/G+MU5OruFXi7y0ZN3iQ19Bbb+hVRv8/dTT7g1xOldDz0alD8RLYxm0njsEK/fr893kUnxRzXe4F8F3+/4pgloApqfyXnupU1/MoPw=';
  const _INTEGRITY_HASH = '7c49c8c11b1a116775576568e978915fa868f1f1b357f00dccc12e4cea281513';
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
