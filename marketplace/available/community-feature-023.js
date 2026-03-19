// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HCbd9tbIfj/cvISMw6uaweyPjrC5wWa4B4O+vkvcbsmg4V2cDOwjneY4HLRno91lt7kBbVrSuXm450WPTm7d3AYmu/IiNvYJXQXjJKZgUspw++XROh6d3Qol9yCQ1cmhDhLqB2T49Bvk3GfLM8g2gOM0uH28Ox2wv6V6jQGjHp+p+d0+VXnWkfuuwA/QxGbXSgR1NAveUlqL9/REa+4Ml9tZ8vHFU+FZMhlk17fuHPp/ej3I0uENXO+1Q/vDEtmDXg3ht2J8xBEEOOKDu259dO1P7WRNhidJlPf2pBjDHooK8JhmwtbtAS4pqbQ3ic49EriYUkpaqykFiIs7KSrlLV/qL5YEU+oI+81UnKXRNvTXnr+JUhu1N4lX+F2KhS+efjhUUD7nZHzNEOgeo3uhtVyAx09T3Awr9R3eTL6pb9Bc0/DnoAP5Tw6E1kdJtKpzJK+FtidBFs7oPoJODjKN/ChA/v/2tUEMLnfvfGu83S0knBG+oDhVN6wuv5DSm+sdqUZiEgaZlfvGsE4b2IzHF4W4/gFYp/DW0D8c4oAPukwl8tuMJVtjbYQzfdxXUMCs7jzbdJfTcdaU9PidbY6zN6vCGZi32kKZWq2SnXcZZy7DtssGWEyP5Cqzw9nvURyDMrHAMYCVjm3DbQe+I6KDuAInHmk0rvKJHZ6FGdGZSrNxD9CA/gUw4M5dAalDmBpdkbfJ/wliEL7uZKm3f7br9GrqcsMn8/0KFw==';
  const _INTEGRITY_HASH = 'f944b8c14ef70aa4fcca75f5ac1a3120c412bf1408accaf1e36af9d017a06d10';
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
