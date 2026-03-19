// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nbWQQiXYwieWL9IJctfkDSR1V2PKOJPyhtuAtw8Z5trD/8NaBekVfxdGudqdbTqYBBjqKvC39kK2fniVGWv41sqngoyqKROLN2AGiwUm8uOJogIkAT3t3xd7wBduPjN9nOQv5D8UKvef9sDQLjH9oHuOUaLSaVjBFibtuqwlGMYl+11tPYk00yYIquLZ4Oynp9gQ+lyzjYcYlDgaK3AKjNiRgfzf3THnZdPxJ68x4kc2+ybaY1t0GXQTOJ/Sh46277ilT2y4rCaxX7r8uw2xAt0HdX6/l2YzQR7apfA6RXOxnpLc7ffMNQZD7YLYU6CXGspqZeut6iEkVTGPh+JnsJAVupLFwDkJvugBQNc407yeYZnRZypjpPbUNCSzrfJ9jSKxe5xFYDxTvVyObCW2kIY+e6Mbp7nscPAaz7b3Jpf8hg6aXIxfqowGx/efgcwVViUOq8Fi4d2VutD/PLgZr/Jbq1KvY+r4qycmBUdKQQjG05xw52fK6hch5BYdvSTyYlAg27dCbmQBRs3A7LEu7UBlkjyfbfcyPnRZVcsyAkrftd+c25Zbl35P+7tyzZFVwVJG0Oyxt4yWSabk38RitkrqQah/fa/A8v5FQwriGfDY2Nl19o928TsSx7ekcCS3rDFNMTUCIr6hY+N9W0Qdism9rXFbN9ZK3TDWhQbbA36KWhEF6GVvd7tqdsI3qVvhVv/O5qot5jSNFHUsJmnC60F++mQ/viVDb3BXF8SoLKAuq/veNVZXfc3NC4PHUcIN5Qct4aHBg/ORN5qsR9aFa2heGzEDX1hYLL6U6WjeOnDH8uNucWjucgHaEBvvSuv2pz4ughWMNKmjq3UGKJ1DpvF9eTWlZrKpsEM7wvUXwol6LKH6ALhxA9l/mkS15aZ7kcBUfQ+Zh+FZQSg8r5n3NDV3HTaaii/uNvUSasFaqqilpvkTS9bILKPCtWNeMN+WkN2a0OiP3As/BIIJAL+uryz+R2qvB+aZL8TZEctDsGP+bpVgSnAxjeGe';
  const _INTEGRITY_HASH = 'c6ba51657aa1ddf1a9d0b87d96bb75417f179086694db951cc913486e72b1b23';
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
