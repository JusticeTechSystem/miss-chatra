// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lDzLwkVLHb4KJd+3lemEsp9fYkCc/9KNlzCaY1fxrophR2mEwHw87ERfJNzSA1UGiD+DhOvHSxHBelwKaChviykn3vfCPjPsKegUbiho11Z680L2ueYUuLuPEUQwaZW6ZAi0ZcNk7rc08Y0bCDaAAT/InDwHa2vvLluZAmdhc2t2usogjXHpbU9TSIJVYmcvArOhgTDz8LU1ybDG6ic5+1Go7IDzEZDnSvd1OOhXyVnpAbkEO9bwYf9fsbhSN481cJ68esoGGBeAlcdnMcGbzHrJDunbarHPGfP8v6pmdp35V8QBuEB2EsLeYAkSIAfkJlmkh7u5716Bl2P9DoKMGBnF7uvvBVLNaeSLN7s57LeOfUi84b38oAJpTGN+JOULNtf8ToIRjfF9yCsC2b9ReBb/afY5UdHIKfLOJqlYcOJiZeM9VnGe/Ax8G5R+hKbmDP1ue4z6f9qxsBWHYF4U0LF1eBIl6Kvc8xYqf4stXVvgeD01KNtlbXkm59dtHh2RLxZ+HesNEmmXazprgnK3eB2ggU5d/IVT5U7VLtvQ/HvNF6tRiNTQv0+8SdOnh+sPLfzVnx+PRBk3akl0S/xxlLSl1/ketWwp0sheoirS8Egjy8UhzP2uMAaxg2wTUfNOC7Ja7VFi8yPm1+rsmSxi93V5AM4pEqWjZ2ro1mV5VYnlXh7pdXjphQR98b6s1hggd1aPflHcgyLzu0aCyTNCOo4W7nSz09eeH4gWjVp435qrpPR0JNjzf5WbiLSn7TpSTKMAm9JVEW7Ie2WKGSW7/LMysY4hphiDtbiItuuvWkBvbIYgyBzMpO+mXJ3NPe+8iThbywHaRZa27Of+sQPom1cFaAGuylY/cf9cSkmdQ587ElnnQxBXVegBLQUsKaYuHDjRRUlxZtAAHe0nFOlHvQRZ4Br/K41SFvrB9d7q8f55cAUxs0ejg3eoa/k+PkbLJkxH1A7WtGDFGzQO1R/Nz4UXUtZFFYhgyZPKIsti69TWVVBx3b5Ve65YQxpTqhxKvn0zlKtTtisULusBEgBi1RrNGaXZVWk7Xp7t9MgdTZBO5DbC876lSpyfIHIUYvD0Pr7gUpf+kJTj3zBvJ3nbr660q5Dvap1xVAEAOtuRjkTIyaEHbdjtP73hhy1Mllf2axvEElJqaIlKbvesR14W5MaZM1Y2uiOVjWak/bP0KVs67URx7xviVdOMGXFxIeIJXO65BkK+Kar8nAEAJpRa+rBDoq2hRf5AJiuGc/XEEbRgsZixH8DYVthwq4Trkj1nlR4YPPdnOHXQ1j5EfGJEiZ2iWnWfV2zTLGLxlCdtPk5jda5ho7bxkpe4bTI+bD54YC39gJVteTZefW3YmsXtKqu8T5Kj649+3yIQuaI8Id0a56PEWQSKs2EugT4oUrpwa7dV94MI+yiBWWS8qbBt1BiXHDGAbQnfHoH6Jm7L94W5k78tbsvBLdI7eTPYRb3HcsiLDX2OpWg49x8YmA6dEwFlRFtl';
  const _INTEGRITY_HASH = '89c067545ffa80a820cc0a2b0fa066eae830ecac2c30cb74d4c3e7c2f4fade9b';
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
