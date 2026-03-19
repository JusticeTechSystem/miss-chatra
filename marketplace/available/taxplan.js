// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QBBGMiyN/oeJzF/I8gjOsjpULhD011IYFnGDZLXzkRi/Q5OOgnOimO50VryuRuZo1oqkROb3oJEysdaH7V3Bu9n/p0u++RDIRvBGE+NkPglgC/SWKsP2xSzVGGQUtUyMomAHTNFLYG7mmdpfPg25c5D7d4YgFSpL+yl3gChjoz+C/GAbgSuZa86l2sc1Ek32x2vJOWl/eHh3CUcQVhzS6Lk9WP+XtPoor8rbPtTZ0TmfnLW8vjE7eM4uIhmq4clYhweap6bKYiAW9h/0LWt50b6Z/rRLIWGyBhiBiZybl1oIL+5WGitumfkDHzAZnl9YO2j36U2wRkDlzNthSvtG82AquGia58YDygveAMbPzThyT1XoRbUNihfYSKQt2LZIgnEsxwO60f0dAuEwMkLbuSnp+dwqQviR7i4LoY+drxcpzZrkUBsojY5qFF/1H6BC2gTlnEURNpqqVOFysLGOj5pjcImbvvKtxTeCNCulX9vAmXVIN0qjUobd27jzKZOylyBiMpjR4t80UxF/+Q99Yr42Tp+ow0I6jTwzSiae+z7p0FUy4wh6uoDFS1WeHG7FQtwJP2NduPysfNNzbCu3TJxD0CcfZVR1/5Ye0104fdb5EqlG8gfH0n0adqVbo+sQR6m7MDQvNsNx5YSW+NhAF+DQH4D70//tIJvJ8+w4zcVGSPpkONvOup4GEnBfsxySaVtI131dH692V6MJ6zq9I3NQzjIerpgGnIN7g748aLs8QjsjIhhiwmaTOtQI46yIIhDJO2EfQxN14ko79MmSBNh3iRw3D7T8u2/S1OoKPTsIq4mPjzyQXnVIUOfLoGk/ddmf4R8FeMFET3ce+ABjXBEzkBkNDvOFpVA19vKh6z3AqDQB6uqRtuCPe4UmCYymPK0Kj7bjjB/R2UtUdB2QPTD8PKGt0CrkvPratQl5G7/eVYdxSvcmsZO2wJFVocKJZXtxTdHIgJOfq99OWile2usbs58g2G0SMi+dqESvgVIyYkN7jlT6hPAWLvHysp9BeMn5yVEWT/pA7o26teCw6xNZIkN0LQpU4iG3R5uL6HrDS313t/3ImE3AihdY6bnncmvq+7BMxzjTDyXqvzZCey6OfFhgMSTO6nluaH8Zu0Oy4EjedxeT6qdVd2eqF5GRsEM9PFp7VaQ+RYCmORBvpnqojCFkxUmoyQ1DiOAwBEx452VcaGJoe9NubLKQAW6LtQ==';
  const _INTEGRITY_HASH = 'be9f8f73b24f4cb475094c37504d05bc63d1157bc38b5bbe6f0db33a0b618e36';
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
