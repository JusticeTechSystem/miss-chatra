// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lxbIkHnebmPqMaRhvNEvIqdeQz1lFq6UNQPmyh82KxS5cQgKlI5o5ZRM1MFHXS7Srh32z9hNtEGfWBoXJOMEyLz4kd/dsOEU6FmneBUf5D9s59eQA24h345xgrmWJQdnP+eO4uqZFPdXFPkL+hqIH2rSOoZuVFyyx6y0CFtCffFwremfMscdahiokT1ZeLcm2/WVGn8Y4h6MxkL6Nfu82d5uzKvrTB/pdnJHEchfsERO8iXQYf+Ld786B+Bv0+qLQQWdHDLlBXiI+V+BVdSk/go1uNl6MDWXe8xq4X+DDMbeR8TstWGzujIAphr7qFWEj1wl7sHgDfNQfVmhBrc0E1shDjD3qqdz/jOhbZrqh5v+oI27ODpVEkLVOfd13vf1dmwy06+1zKwpOauYWG+I+p3gYsL6+4kBxkBJ+ll4HFheEvY790gugF13mp9C48OWNyPoj2jkkDkCgFLOkHiWQlh0P4vq72Orht5oTr4/fHksbBXNwtRE1U/oTtn9ikyiphe16+c1WjeU45D+iwYfqeT2c7V87JwjJn+lc/lFpvVGvExeKd4kFQ06o2mx+RDRo6kLfKQvhuHsso7B2f37DV9UuReHHAaLYemeLBmZiYzWABej7XQeZLlCMh7svjeDouy2G1v2514Mya3SkXKnt+nHfNxpMqjAbsAVBPlADkCj50om8HrtKM5AcZ5Mn99b8VT/rODTAynenpkXlWxZEzQIo3ZHRSSYKxXQO59//V0w1cqFW04wnnniGxLWLKUb6kHpWFs6tqjqumqkypXyqUojaeYeslaYx+QSaTJD4n1Mr2qlfxtlvWxp5a3JgwxEWnD96nkpMmawopUR8SpP11EIccCKyXqQiiBuG4FhD1ef7tys12CnYzmArX85w/Gioebsv2iGJO0TT41nuDapN+u2P8PiSgZWeHk2v6f1VJtdhDxQNQ/k70Y6nyzckIE31FNS6iozWgq1INGsfG1EwTI7q+4d2p/CJAaQ7RBAL0azS2A6Xbyiinmd8y45BGNYoXNS7Fx+JQtmKg8fY+kTLDf6CUpHFE3G9dEtn0NgFPCmvaeafF5UWsFcB6r86AXrBXdeuY2XWn95Ug1mixNqKcP9MYeMgxBoxfBg9re/2AkSHDqFWtNEaVv/Y3LZ35Sq4rEzjL18ZGpOYDCyeS5Gq/Qyvg/lAjVVIblVJqjYeIz9Swu1ZzyCFw2FUIBvPfNhEwJVbylwGmrJIu3flPZD4jFSnu5qg0x9+PSrvzIs4hhl/8eL5RBt8GwP1phRkROdVEu5K2m3XZ4nb8RYjUJN/MQ4kk4qLo/L8Hly1+WPK2T8O3FCG+tsOK3KC0xHGIDneeFVscPL9egoydMnASBpztfzskOHlYbQGnObOQWRxNZ+MAqZ7iPLEw==';
  const _INTEGRITY_HASH = '7e0433be495f7ba964c95cdc70c5e3450c627044e0809e962b69e2ea1e7cf133';
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
