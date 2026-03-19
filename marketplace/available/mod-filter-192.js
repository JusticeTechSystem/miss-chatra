// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SsKE7O3UZHccjTbGIDz9G5THmxANu+RfzBDznwKZfumrQrAn+Qu7+Kyl0Hbwu2PdViqOuPBkBUpAQrUJqqyrBb8vsyQZ2k+niWxEGB5ew2AO6ZPgJA4O/TWWzkGMtiZLLifDll0fT6F3icaaBIV908Kd2v6vEH55VT2+L8k9HbBrIJZwTQhCKObdd4OQi1TB9Z/vdNvhzbB34QMkuqiM3Z8TBxroAjGCZnNQie+ZItcKIylZZ56YfLVSCh02OivXVNlMfcKNC0iRHE4/seMbWUPGkeyAAkeneKNtAOIC/WTYyJSxZ6+Ys9hmjCfs/+XdLFdkkcKmy2KjZZeXqWl4pGzuTTP17YjpYAU5qte5sVPbgXRLm25Lg0LcAydi2oWGx10qfBK605Xpdh6OXA5weoyDggBLTJa1Aouj7oUMBaBek/3uWPuE2LkbCLIcXgmY1zZhqXC9bux8544TOV2Ab9esXOf2iP5BWjtMetP9R1hQ0aORE5OzCBeRQ/Hnpvl5QY4KgWDTV+Ze9OVT+KdpWHCrRBdjleLihD8TyxcqibwpZzc1AlIukpOUk82ueHjsOsAS40nfGuY6/dcMIUC9fusL1q7DwE6X53SSUlWZMcVJ7vNGoQjABaW6dOs5XFxMd0OWdz1jGsR/due4Owzw7jD2nh0ZSsgASSCF/J/jmQenHMBx5+3Uqo1TcLRx2siB/QKRHXVLWt84GqQxIyGQQHtvA72BnLX5nw2b10OBt4QgffhbspfXx+eG/8wR+aJQxbDoelPDHvhyJXdySa6awBzsGq5ZzRwd8tsyM+GjQwMWqrJJNW0GkNx4eciB8Ba0OtWU9ZRWkmhR/Ms5pYHHjg/Xs8yW9tGtvvQT8k0yZFfYw2ySu4F7jOudsHV4eOtVydkEUUyrOhv5rB1KSjV5aD6oiFT83YytmDN6+x5sSz7EGwofq89dm0ICjiQX+adnjmlB82qdzELkOlJ/Dwe5t59b5UQJEt1691YlXX8KCFcW2hNa57esYrC0F9mh9L73hKtIW/k/4tF4EkI0gsdpe935j3zvsnwUqmd6LO6ZSIbXw4xpXDQsZG7JDFR6xbnQ6rUCW7V7xWOjr1RclPCecXSiVyg+IsfN7vBnwJK9tAhP6a0YYI95EijG33U6eNauykgRVhdYDAk5DO8zU/3fe9kZu1SIRlbxrY8AngVTMwJ8i5K+xxAuEY48bPABMm8CTxN/oowV4Ik3uCRwvid5e9MNBQ2NKVzbkb8qsVA0FGlvCEApLQzB/iWyTs2KLa7ALN734MuXZw8G21sSMJNc29i3gw0G9G9rxFlxkFbok3hK+CsvkeCtN+GRFMizOOHK568vaIz2Bv8QTvZ/7slErV7ze2sg+2FZPIhQ0FpdzMeIPHRWkMp3lQ==';
  const _INTEGRITY_HASH = '0462b45f7ed60c896971e1b5d6db531dbd813d2d08a22d5ce41ce01c90dc282d';
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
