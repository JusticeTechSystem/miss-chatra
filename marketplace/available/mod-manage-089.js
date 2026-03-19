// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VZVys/GjF8L5NOg3OpBJLcWFWq5cwoml4g3sCifRHIWj5M9IbR2MaeNAGsOJDp4cF94Ea1NF2w9vpKo0DZ54xBUQh6ZokDl9eWBHmS/z3Ig0D1jvj45IicHVT1ZrQhwsuLLtfpaL7Tj2bxrgkqNMdCqq9FgdgAzqOoJqtOhYtQVknWZ93NLSzWtDVEF8bZRNKXbpoC4JzChC+8R89by6bU+42Luu1k5ZLLZPJ67//AapsSS6GerTEpxwMRyHAUN8nGJgmU24mBz6O82Xn5CAIzWyy1ArHFIzt8mVYY8wcMAO8A/f1o2cDBl0n7T44ix00OBAy7AfenTP4IfSfIRvw5rNSeTn6x6rXgKbR1njOf+2qDS6Cu+6Iyfp10rK4iaVPW7AtBZSnu4Fm7/GfalVJhT0MGAxVLwZdxVfJRCES1uQTy6webVVxuuyZV4WQXlkqj/2i31FZ0P7JZqQ3OUAtLHZM9Ii4IhA4llZz1gocd8k9F+z5VOBgNc177qqFuEAvgBcmQstz1isQaSM7ANRwWgTSZvHC2MYm9+t5jY3o/tyPqc2bql0fZJOGR9VR86SlLsiK8tagiSy7Tg86efyVn2k6OBrmkri/KZsbSzD86lSqM4qeGTZrg6ZokH+/Fe9Fi/+DTHldlqK00/Y/4aHsQHswieSp8/fZ+OdyElEVL7Q4E/6P24t4vuUPchmiTNa5mPAKDKZAYqmDEXusYwhZR/Rvy2Si8rlGSYDtgKxgc5J6MxxO2jHBnvSvJgTI6mATqO3fUxwOXVGGWvHP2xh895gP59iMBsqWuHGfHhO++t5B2dprXk7xsPZjFCV6X1FZjufvdU7rpRRpMzPXwvz0iQjuZq8suvYDg5reCZHpARyPph9wU3IaOaVFUP2HqVpw7tdsg0vfU+rhUbDYGOr9D/bE6rIcDNMa/CF6g3ODMgR7M2M61Gy/KDNEESMK/wLNkFuYT16BrjskHjoqRre+XpOTTCsrdEta2taiU7jg/+9xJwLABD/pJTnST18a7Indgiw4Ct5Sq41xEmiDKN1oAxxKGzZOFQceGuLJTN177edys0fHx5y7MUCI2TTfEWuPUYEqAm9qFBdb7qkogS5JrnWrPlBVRKjj7I5v0lJqBF//voMtUyFsXgE3IbDSvppkMkQ//etcljWpM16TA4CzoaU/+ob3n5597PoUnbb8lNzIb/S+vz/yQpFy5yD///Xmdl/zk0zrgDdSiaeZXhUG6TKVPZW2V4joML4ZNMxZYTGpziZBvBmCPoKWZfYvfg6oCWOwjXuaWudF/1EoAN1F7rggDfKk7Av1zUXFHFezHT6GFydvfTEK530UFBVRy23ivDHQh0gIUJqNlivdSIOeFe3IcOAKO9FfD4IYk2bUhGvubk=';
  const _INTEGRITY_HASH = 'fea0c5847a1cce5e7907f9c2dfa08ad4c3f8f6ce81b230c30ac0578e81fd92f1';
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
