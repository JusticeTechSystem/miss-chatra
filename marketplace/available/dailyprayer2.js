// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iXhhLLmb8rSkEiXrxE3XO48lQD7HweznHEi8uxTrXg1wlhUMYUxpnbWc15TMNWsf3mr5eR9qHmGGJvG2NO/j8MIR745aFR+3YZHHeRtA0iMOIdEk2SFM5vfGjt+NhPca7B8/DvgWlAbzz3BjaIUFGK32Pkp/oWJxJ7RbhixoUEfgaCDToepCe7ZyNKxJoXZnV6+kAZgNXq1cExRJLeCbFKNFRA2b1WoTZqxS0C5dcVNwe6hZis9stplv5wLII5pj43Vht/L9erqZtrydv9dmFifCsjh425wDn5WykCKUmAkzbrh9QnVVVlDxBQDxgT6CjFkelad0HCbN1HESYA0ItfV10QUwy8fO5uYam5ilviY3L/YnCo0wDz95z7KD8xAbRofjpF3vXYTBjTMuE0/gyU7IooCaCPXa1nUHlyrs4SS+rYhtbW8Zt96RjkJRc1fWm9ZrWGR9U8GGA0/ZxkQe6yKUbChM70Glnb8mlsaVDTcQDJEasUQwBvm/1dQiDjQR01/drkV79gKMrjSfBUDb3V9U6cdQMBJN/bc7pZ7vQW8WxCAnQl3qz2JcgWGXpDYtCABcG9BonIsH+vzXiJza1nnZJDM/FZX+1P6r8UbrGSK8/W3MTINHYTThPBNzkYeUC4rBC/0w8mpuf6UgYMYyfflOZ9eJeE0bs/KqMEUHr1yiLF5ZRH+MkSaizquSX7C+EkcMQCysbENuQTbAZo7jnmnBWAWkK66WuzaZ7bd3ZYUI/NcwSk0Tr3KqzBWoKp00Mg6+JCWZRYyfIx1POFd+J2/BuVsry6CeAYeF0+EpTWy2FHnHBBkcNyxUrQOhEsMiq/PFlj/OQeRn4pJk2xCmewlI1q1ZKgZMkuf7CUlz8mzgD8Hq9/oW8dxRpjt86hCwdOSBlvlwfd0VJUe/upvDpLklW2TRJyyLFnACLBr1BwkngUfeD1N6IMYH+Mc/C2x5I5RghtlvYgVKPw2yj3PSgu/vm7+syzSAbE++7GEKyTLZKfOqFebg8xT4nlgBhp9Gqryz3vupc6gAkkt5mouuMXSmzCiPntC7Z/42aEBklwkrrjHUJJ27f3TUCYSykYDZG5Kx3N7izR1KjK0kRulC0s5Q5qHwddCTMrjmUau1a3e6B+HW0ReHeRzqCDyo0N4c2l/KIGKgY8sj+5uU+CJBKakI/SUyf1qr+Dg1gXU+wZA3T74n/eeeC5+bWgEVVMNfaT+rjznwtBw=';
  const _INTEGRITY_HASH = 'bf7b60d6e5b15f5bcdd966aaa29701fe56aecc9885f8f83af71e5775d1171fff';
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
