// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hlm5nVierZcEoRkv6fMxXcjmL66iddHzYaW1QvWXwEXSDiadO+OR0iL9HjzBUbBmddLuoGGHcZycV4RH0BqtBRQp2ZmM7dQc0zQmKAcbDj+RY6Zm59GUrEgJYBeX4itTjLBhdg8kzoVpcPWeJZt2qDQqh6+hinp5JkOPbxtZpvhk+tpszVW3SNBiChDzv3ICQmISXTZc2cUDGjeoEQljRZB++BtEC7SfJRGhn+fnHQDgOhSQUjohtE/EWZsDaCl98VP1DFH7tp/xazj/Bsu8DrnNH7jbNwaxb2KB8G3OY446DzZxObXSelTRp+xj0jVXnbNwxNtKvcK9kWEJSYZh8AoHNAFBjDowzd7/WpwiXz31UJQMG7nzJIG5U66k6/tBHJkR3FJiOmzP4azaOUfLSI2Yo7QXYcTVOVqZqNswh3gPHqBMp8n+JDI0ht4Uzk6FituNoDa/AkN+kEH4Gm+nw0qOI5DT7/3wDHASl+KLjpp9kV3+asMUV1xtlvc5l8/uJeYKtbIPYkV1AVQYW3ZIwBL0n7EB59myQnq9ZLe3CROzJ62mSfxb89HdBFMrbHgn5odQJSso2L1TtHrYdlspP+MFhqPLnNGLCRc+7WPDmmD5uSSTkNasZulU/m2s2o7o0u/0m95BJWIFW2hXI5t2GL07g+GP0tDyxviKXT3AAkT/eqUZrrKIk5yz8Msu/Zr/DHyFOzymWRMf0W/wpkLBSZQ8CvwOI3Qt6TsD9k0OZnXe/eNrAhMJRZX9R1tPknyu1nBylUnnWNkj2MCS6n/CLPKi755G0r/IpKeN6JsLxvJ7uZ+DNfUYPfeS+jQUrLBsIfWkM4UoSRWlVleanXPSrIfS73pk+XSTiUF5bUiIu6ZQGEBC92Y6UZVfW4RDOiupgVBJFIoBwiRg4BWocgkotlUzsgnvaQagLRBP5TR35amfE5mQ69Zcj5Y73exoalvqYoCv9IrrmVxB2sydK2+KLhH8/xQrmtS6APySRhYcijMbYuQ=';
  const _INTEGRITY_HASH = '869f8e1a50313d40985003c365287989061d67fd2136d33fec1fee9c35c9fcb1';
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
