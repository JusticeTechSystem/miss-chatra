// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 't0rwOS6ijh/aT7mL45OKxj17V0b/xfLYVlsx1R54FKcn4HedtsZMJoXiVuFa1mvYC8Ci1ooWDRBOGF+4a3As8d/CnK2ZML5J177wOeWQDxdlIV81z/pY+IHoOroNW6H6zQe6i9v79/BhH15+pU/8HI/RMUNfhCxnGYVOfl0xACYp91yDrsKOGZngwF1ncltgDGuk6uZ7RLjDvmxnxCI70dXQSwOU27bGfMsbCF9w/GhI88oSN7KgvVAJptTJ9QxmInf+9/oh64M7+w8wB0Wym8TZU2QgA75KlnlPTDcGqpkaHpFRnb6TYzmp473Pog6jhA9q9VbKf6qti6WtwrqRedYnDSFidMEe8JWiwAhLtxo5HjzNMoBoexOmu3GtNYJobNAjZrzH7qa0ptY9+JZgnpxVbCOSP2mZjOezyPgCKiNI/D4J3e8nVqky2O4p+3mbE4BRJXUIIcyyPAiWWiiFWpKzQ8v5e9cNYRVpMZMVlI12ew5czVyp7a/v5UM2rubdPMy1sbZlxvUWJS4pi443ZwDO9kTrhr6I/yBfzs44IBwiEsiAVEZJbuGLKBbiTwFCj+Yy0klHuoAkaI8sdw36YeR++qNNjOMk9IsF2tgh+hTqHNhI+Du+g6jL3cCd74mOBG93JhAKZSdWJmIHjZ95zjB8mgZwYDj4vEsaPB8nnCv9i7gOMmsAnmbkQMQKNpTJ04o+e9wRgVZh7k3G/KlaN2IouLteWrnzQqtcuuMkwLdP9sNh6tecLJnSr/6vZBLeMA2Tsn1yKoAcMFFaiamYCgWIYcclDqSifXTjJ99SBSrbGc/AzDhb/gpbJDoHbw0+MkPfF4FlLq5Bs/xsgHdey0gxZPkuU8nAYMkFnyUy0p0ClzbF06pEjG7y2oS2h9vb8SlwXKWxF8+VHHWYzUkgYMdbTa3n3+ouNCiv3hgM1m/26c07SBvNjHRzqG67HM/gMD9Nxzu6hcVKyR/VkZvtDLfGo5ckVQ12w5U7zelznyho2F1rCVHYe1h2CXJhvWwYcH27c/KURCnmT4ne3SmQyCVBZW3uJWhpUH5dGxfZgxo055JLO8Eluj7EpxxbQ30QuQ/ML7nnoF5yhAR7jH9V37Qn5KBLbMjM8gOk3U+JUAb508gHXfAvsyaeLDtdXXCjrNVRMqPKxSToH0oOsX5WqPXdnHl3EtBKvufuonpNJyPFP30ZbxxHkJQLF2/+fRocJVJkudB5CMZUaz7kgMcUfHZj/ifXCOe55G6ZnkynUdK6Atj2IDJyxE1++ToZIPCHhf0CG9hFspm89AYvewj2l1GAqp6oBGO1pB+RC3TL+zwXlkvBQzX0iWE6B09zRm6YekHP05pJj1LTm12+ali/UPk4dKks7FXKFA==';
  const _INTEGRITY_HASH = '9387fa2afceb75427452e5c0d498c4210eab9b043f3ba52ad4031767b979ab72';
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
