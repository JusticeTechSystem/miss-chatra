// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4L7ojtva2YWv6asVukIcVHknrk4kzMe4059gPBJ+gNJt8E1EeBJfp197ADr9XxM5Qi5raTRjkC2bNfg2l5E5b7MR4hoyb7N0KuwFtf/xkVapXWOiKeh7va43OhesTvi8Wo0eluyNxHqGeGxjjHrrJ5NrFlU7LqT9nvxzeyJThCH5gg3poRyorK+AzQ8rwoV4KEce5KJYO4BSCI2peuvzZINmmAiM+/uTELgEMBa56ShCvSlkg765Ltdo1AfrVIppHMWTJdFwdfsmmeXc4+L/+qbwBiDFiRyq0+0flxbAicfmGkcqry/p36khAcb0OoBHtspnlVVOxVxqsJeB0hFH3RHKF2A8vOxslPYcwxSL87kXvRzQcwvGhfELpeYnjdmKVPakMXsqaGqX90jyRVkD7vBbFbj/+/1Z/ihAYnUDtkYTK75veo4KOqr0FLzasWixa1x1aqXIc9RHGUFooL2CNue/PzJc1hpnv5y0FpIsdf4EDsTWxQhS4YnJ2/Woh8uFJxT5Nb09krxcZkEv1zIC8TtR4HgvDk52IV7LoirYnM4vIZ6wAe3yvV4p//XZEa4QOQEMwbrEHp22/Lv1IlSBb/Qn5+TF1OWlGrvPpwuyr3cBKyBq8ItXTouyYKsqCyeVlYR9xWnVf13fv+RN3IsXFWTOTViG8+SM8QXR2j6DBfeOM4aB0FT0G06+bTUzOnF/G8IITKtqctZOmBbMiziUZdFS40amBDphtdFywQTHgZF8/pYSxETkShJS3MYibDWS5QyLNps4VgvA0mSH9z25PjqEafQGqACRBwzQyGWmwaIvUkQu6wGbz9H36HVzZOcMQKNsfp7ho43dXp4FKYkYMRRmdcNwMTh70T0gwON0uah0gOV6b3wC8E0y7tVcgKe53Ds/V954BaepA9xC0NQnZ998n/BnmcGtXhIiqBJ91WXAIQ55r2UXXISSRli628YFb9H1iyneXoVxNYBTno9yHZSNF/ec93cacI94TxhNU86jf9TVriymnG75';
  const _INTEGRITY_HASH = '0510a5229fd1dd508c1bf4ae64ed7fd23a175f9c0ff121275625851397752470';
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
