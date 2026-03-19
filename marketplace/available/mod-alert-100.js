// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6dazcsC3uELwAQAtJalA0L2Fj0PBcBbZRH6NJv+DhG4LbloHpI5wRvaP66YNGsVTnaO1Ytqb4MrxOW/9FtgGjxbb7h8AjYUuujUUur4404pPzngr5hKjHL+irkeq7SJBIZmd3b6yy+DU8D27BF7ne1+dTUeFKq6VfNekxg3zc2mPbmS1jlK+siz+HKY+1tyfZ0oteGaEstz2Zq21PLARDVdbCXVNt2bvlQUIQjdQy/3YO+b+TA55z1+9NO4LHESSJtwM0TzEH90DOHc/ZFtq+QMWQ8yz1Er1dVHrDBWDwZNPugs62bT+otY7ThSkHv7aKzYkfw10apMF9Dz0RhYgDwW29iZ8JlVCdaeixYUe2fUG1W9SHMLG4C4H/P7gDIsdWRw8AVjorxDPFfDLbOIMt3zxLef2H4bYhXhf9AhtygANUCynnx6Mk/EUwA2+8W8IRjZjeaVv7PufmSe1svv83CaR6BF7GVjR5lQdsfgoquSEdaUOcz1/idk9fe3oNigL5VwSAzI6PSPAYxEFOfLkgssuS8qlUkaCynG1BOat/ZVob9/8KkAXl484nWqNXg+w+bT6VUcENeCzJUGqbXFW7ovfP1aeBBzUn01LOLl8mZV3LYdAY3PrJMEyrPGqrlTDU6fhU2EKCc3ke+AyJFvmJJEOvNwEHyRHQBfEkp27PxAOkVVkLt08x2NOb39Uk4cPxXMeCiJUCnRGKud/64zDuR1bY+khxoBMWxVgT1s1hQWJ1Rogu0KJjvVxSZ+lTMQZQLhvt7wbqwO4DE+tjPQugQ4ONmOKgLDAK8j9gR99I1h0jYHhp4K3fZAgAeM/NwpnGMFZxVhQYAoxV35gDRF0Y5G8PqQrIy9dOHbaCeLEmkbC2PzvtLsbjtwuHnS406zqnlnc/jvweEhU3SSDCjDLKgSOREv9AGzatRhYbGmsIe6ybfMB+ZBYZNvHoy2Ri8OstZacM5g2oOMqxOgyGYxTNwRxJA+JRqDWrthLe0mjoYOkkSgETTaN8EhKCIZqtmLQHd3kUooKQchnwRmKtmOs5RHE4zp24gaA8VbKZ/soSAIJWzWIl++OwJyAi09oAe/4uW++KGvRDnUqLqXs8gbWq4cH3tjrDvak96lyP0qOLJum3Lnv7P7hoRYboqYZmc0dy8O0uJbjcF9Uz4qZginKAYZ6c0rAf/AYYW22gIaRFIerEAv0LmNxDOLnGvltDf5MVIfeRuSXV/Uajg80jvd/ncwBzno9rx8IeyJ6I9Ij+CApXHgkWzCaNJ6cda9lxjcAiRvIl03HAbwm3OazmQBbjF6AaKIjai9spF34SRMAZY8uilCZqfUn8wgJwjkuiO270MByz1xsUlvzGbfFXvy7IhBdTQJ+h53ANnymrmWI';
  const _INTEGRITY_HASH = 'ce05f2c5ebcc22fff318c88057986c01082a62e42a078b91c93e81f5141c87bb';
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
