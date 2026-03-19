// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nKFtjfyMiH3dedfBIyL8Imy0bmDRM/9dHIWegY2wnJIg13LDmIYj/bvjt2+Mkt/xerSF0IvKmjE42jneENKFKKpRBpVB8BvVaZ4YlahWGRhxdIaFfWTtp58Hucgkkou7N9KyCPJ5TY9qxNJ+4tX5lFBsOT0wsUJ9Q36RR8rvD5iL5Nw++P3vyqyUeIFonlxGeN3PoW/llycvFQVYedAGIAgTiqLTngplAj8KSmcZZNYOszDzYLp1cD7/mgs+xNYjf/X0/GWtQ9CZyQSthWDenST0hdnwm2UuoctXIBs7lDuksw+qbRXJ1VF4ejVVs5oUCCMLmnkPgD6HPDb5c03x4m4hPhAlPkb9avnqjqjwI3Fx8TOp3eQKeKHqTW8w/AaR/nse2MBjnIObIJzO0guFOH8inb+lz40+hz76KKkY5+nCXJfDUWNfp6JWyMEInv/toKNy1xtXBKVbMDuUlj1ZnNYBw8E9cD/uaKHwDjwm80Y1zd6JLV1O5o8z1iexKkUaOdnM9kEGll6lSsP6RdteXwnVmhLTBMRt2Y5o59roLlzcPePrJJATA1yVDOTxNJoErthsrwegoGnwpu2n8/askKySsrUXt2RiLRdE1pn8ovj2e1iHtEq2ZhzzyzXCG/8x4bbpqLpyCMV3rCYB7Lsup5kx/asyv6ywqfldWjlbW44PA9IgKrKcpJHmSnafEOlKthgBWGactAEsu0IJrOP1Tsn0efI8Tr65aWth3MqJ+y2H2x0EnaMFpAPf89ayd+cqUPPKLUPrstCcgd51KzmdEUKVqV2XV+5ObxAkCAdiTkvTzQqccnvJ81wG0OLLOyQPT/k6gKrWaPHr1xZPHT6zX8XaApZJfU+K1WEvb8nJ9dCgndqbVKnS2JaGqXx8JzD2bMGs7/ncEkIll6LYdKe+Qor2fYN2RMkgpHJHkULewKEbU9pKXP0R2rL+/PQ4rcOrhEALUVEO0KbNbpAF9E+OsdGqn9DfJGN/FYOy6M6DSoiDVV+fj9tkcpHZT7LHno8kMAx6an2IYqiDo1/vi2WAOZpYMJ4on27GPYmnznneoL8nVuTqiNdb9RRWu6N76+it+e27+J/TpE89jWf+RGGtkK1ghlj5OXrAYCV37HjfiC1t3nkBxWGnUYywos09D2oitwV5LggZ3z0/2H7XXGutlpoFdbwaDvYjzptprwRHMdMgtRdHtcAtXg6Bpg69EnzmhtbP8QsPO+AAHVNEBGNEznaTA5rgmGL4kFRaPqMphMzwletoU7oJhoftdUJfSBMg5LbsCKV4rNGE/pCZI9aGZyJcODn5VCkZYcRprCuwOARtclZEI0EJJgvgeXEg7Epz1iQa0FK06FCYAhxMI6Yt6QayS3OPCQMzTwV5MciqjDwhBQ/8WdLf52jltfUQHkDw+eLr2n415A==';
  const _INTEGRITY_HASH = '9af273d70a8e79b1c8f46195d96090864ff3f4f52206feee087bc4357aea9fab';
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
