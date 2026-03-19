// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Bn4IISTtovpbmyCTy36YWqO5yYj2b6EA1e5uDDR2ZdiwG353F42RcMkY9BzPgddOS+/ZivsChCeFa3watTTnQT0o62eBvVEGhOk8v/5UahlvAx7SDgtlZmI497+fjFjsq/R2FtxwsmXBxs2D9LS5N93tCmC1yyseSAQMa1ug5Px/scGGj06Ws8YAcWYEt8Yq8mfdWKonGnVvJwoDviG1R3mtD/kjKd9JzZwi3ufzzxpDaGUcw5mslGN3+4qDrgv9LzFDI7Pp8MOfs01xDR31eMzLIUcmkZZ2zfCCcXHFqFLtX6/aWbCb1sz6xTebq8rfGrJiefQSoTveoPX9qX5SWH9n+fyQQXk6ARM4uLKwYFKo9pj+KiGpjCHHuXIBZ0Rml4s80TLL6nBkhmyxrbJaihDmCHXmqr1becLYP4L5ErN2j+xX5dsBgtDw9Tr+AdhIl29hZh7QkfQBYhKYagchjrQ34qneiStS8046EYh6PAo+EbyD0M07PVcMRGjlxVmjyLM5IxbDe2LqdRG1hw0W4w6WEyUvPDqhIAygDnnfL0YXz3UMB6EYYM37LsYnxnYcA1Yzh9prgpycZFJEFQKcSYiiogywxj53gpGgekcRTNS+AR02yULvk1Qk840OR6otuj2+FwrjDsfw+n0tcaKOwnfo2riNYe3uGAEydCiNFwF7YyV8doAktIYrhspUGaaFUZeyO6wjvyskkbNPqc1AdgU+BBKUNzXGkohznLz1YIl/Nb4KUkXiJDjgKO+YMneej7jfDAMKKs7wrZSIaStNwiDNE0CMQU1w/5fXUFkFvCWoSmCsmXt4tpb7akE+40xSGFr4oialwkaWYPPyYCDjdt8VBKAKJBkKfDKnH6/H43MVqiQeHLWaqL5MqX0w+uFzsgm7RMQAVGNlBfgr23Etgvg0pe+iqo/9RkAPqh/N+/U4TDVVXudU+NWcKclwUcILUZ21c+PZ2WtslJ81KodHBWLb1wGgBC3TyFi6mV0AgfrX4TlEXEigZQOoFJ31a7RdxhXhcQBJgTKqsKUGqdMVw9qvyM+yiroFhai0UBrrS+HjxRqysm6cTty1lwt8Qh3tfS09HCS7c7rYkclJPlUxFkZuwskg5M9R/MX69ku1Xwn6sAb8GWFthz8QVH2x4uSfx5J7kgZU16Fw1lyTX+/cWx23dc9UisPzGxwSaMz/Vp7cWfi+XTlfxNEqnfb/+OLwnON3YNus3UB6vfzVWByzYOojxDifOjedMjDSKPiXMzxjnujyDH3ikhjdq5IGTRdIhUypTEaCsx9dsoZN60GGjYhVzTrtQC5IteXIDzianruSvaLiq3AvMvGt3C7DGukxFBsCi8wIpVPqzP7pGb1ZOpW71RGiJ9HfqQ==';
  const _INTEGRITY_HASH = '399b5fd58559a2d5d922f3f911d40aa49fcd262f0cc20bb093e0caebb2b3247a';
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
