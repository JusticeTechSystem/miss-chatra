// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jQsbZxnqd9TirvCV8NrJQUX9S/BN3iNpoEVkN36twuMEFDh4Vqdiwjh/oGvlpLqsnQyRCYfuiBkXqTgF2YhgNQ05ENl0peKeSlg4IHuWJcoOurkMjIoDeTm4ErLpW1Yyk9Jnn/NEnIgoPPquHezX0qMsLB4FszcxZwi05SEqClgRG33KEdAF2wBvOs5USuzn0TKGwo+0WGjzFoJXIHDTqxzWHvF8NviLqJA8esVs+w1asKWhzbgIo3wr0xkZHTMhHDGbViKVPsBynU7Kbt8AneFvvNiLKwk6hdzg99b8eoWGQ7wPb/Ex3tHhH14HdfiUYFScIsQKyovASv+W8rlSHNFUJ/lc8n7cDoxIKX8LoW0WQQsDrn8OeM3vrviidRRNeuStReg4ZiZ+fbLCZH8F+ACeznUPXOUqSYexVLgPyKsJf3yLTYibj868I1gBzcUoGG1OzqzusMcAYXkHa2Hi042waE4pr3c7YtW5nqGoCtBxH0/lFjSmi7uv9iJIY5jjnjQC4hLWzhFaUmLZVGBsIzk37HqdcLR/4YLkZkR46+gxg5SeCUmenMt+EE3YpvPL0BaXXBuh32BnGvh5Mmn8AceTlleHQYOaEsVx2vSvdOlysK3e42YHtjmGG/5F9LHyqW6kDgcyu90cs9SPR4bQPOw64RgdKOBZL+bwihczVunL0X1YoeXbeF+t0v3/qBFMtwwSQMxKdSE3o3Fw6K2LLSJsJrw=';
  const _INTEGRITY_HASH = '3507ece334208b5452d06b496d7243fe05bc847a02875ec936221b13148a5d88';
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
