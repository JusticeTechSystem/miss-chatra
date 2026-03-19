// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zdR7nN/0FHznpDl+WDZ6BVoPiRQkZ7m1jY/J713swZacyvZgzuYlgsCzBPsEBBNZHxCiF2U4El+1bTXKthehDyCFkqIuvbPjScUXM5UuKgnAMBF+3Esq0KGd+280opPjlhN12XJb/WqX1T9CLhuJoXH0vnz9rE8mOJ+uDliY3Rja+5FO0clzlYIfoxremUpk8mmxPNDzCdXmhiIq0yPyC43Lh8pSEPeVVCEO6uUgtI7h4UmBmQcxyvtQ/2dkqP8SdJZ/GBeZt02YNzPUrlOzdQ7ZHLxbxSs0s9bghNzzLg7H9m2XQvyvrZ2UUuCM0ARcSMzn34wqTTShyNsltYr7085MfjpdqxFvuj8OrCcEfQ3Vs+sQliCRIxx9mrugwUJtXayjqfHC+h7hgYoLt4kY6aR2yyyZmAPdENlrfkhFUG20tZsufJuEhhkQmW9XeNfyzn441eaQ8hh93YUaW1+HPGf9JG+xI81HPQYQD73E6W7Pt6LapoBkV1q66q/xy6ErUyOw06rNhNFT1pZtBIl2FWkzN0xxEeANzJCQlwl+/cRVCOnAstmLKqQW4SGyprDcyEZtJVA7tdEP1GlQkGvMxVv7sLbVEDHb7TzJYPFDl83L8BR65EVI48mY7ydygxOItOTDJnjlHOISI8zOu2jc+ypVGo22TrtziYm4kD8UsfGOfkMGE5NLuqF7g0+N6G9ioink0PIzMKjZyS+8AU42kaDxGidyG85rMVAAeFpctmTY0A==';
  const _INTEGRITY_HASH = 'dbca1857189ef78ec7bab7dbd8fe496c90bcb831f8112934355e3b862273a6e8';
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
