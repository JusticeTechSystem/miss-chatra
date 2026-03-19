// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1TNBV1k/eQndSKYGxTzJkqYbAswUrF4Bvn1YbrJURKn0km5xZ9yZH4qWnEIjrWZUFeYP+KJCEELJeoqPeEaS5+UCogUoWJGhxQPcJMd9n5nftZQfrbYhMhLA5iqKJHBxsA3uVJn3tze5w9tnKD5x8VgDCTejCzHXIFnI4d7IByYZqDOh2QZDb/W+khHeUyY6r/vEaIIdtwoQ4XJ85oGD79oZYtKtKRUNo0lTugb2HP3+RQxDLONgZ/q0f5KilmqMoyyw7Q5sPaVuLOuyjvzphpZrnwMoIC9OSc9WHUm4i7lw3OlSg0ICzT/2tUdmfiPlQWSwnfzEwuuLVsCs+3C2W8vvNaGpoEBvfy2G/XF3/uDW1/f4MnHM3CcDFNF5ozDrRqHX+nATQ+tCUnXQ67cob5D9411gmM2hHoE4dvCj6fhq2uKZSTKY52h59hBPb6sRaELlTiqmQgkgUCiExpIz8TgpvcvJMIVpkXqyEP0SolYuISmlyQ3XFOsZDmToIxBpLcjTF6PLl204x6wC9TRlobY96eDuV2uIkCdvG1ByuLcYIO9KlXtlUiNCdecSgIf4u5+XadvYOyLFzSUKT5d30HKckBWrMbGkYvNK5Ev3WkfOia5ezy4eZa7LwF3fBGsRuhjhB+zz78Mr+4I2Lwvjy7PoWQNpUeM33DRtI3GtKQ21540oeFfs9j6ckX+Q7fp41xoIn0vNYz2i7+TTJfBWgad5GOgrdb8iOa0KbgGropYwyl4=';
  const _INTEGRITY_HASH = '8503623bb8c0e8b1a59ba58689c797ed054ca034416db41b405ac92ead142a23';
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
