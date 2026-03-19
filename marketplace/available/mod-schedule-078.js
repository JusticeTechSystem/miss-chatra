// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CPodsCltHaGj/EASA7aQQkiWoBq7jQ0aM80Aqgut6RjgQKf32FQkvpnOAKIq6kKMwfkThtacYLKrxstxHYOpsUdeKmI/7vvr6dwzFQb5PHODwAvVjsKeR1/obsVNpVeE+CJOWfb4CPZE02n1hJFzE9QCVOCLFuQBfqTjruZp73W3YKqOajK4ryBHSCd5mkyYC6HaZp6UL7WvgsvMAvwhwD4nPF01yk36WKr4RR8GNX33QeSe+X5sHxMGPQqWju29VdSVb6ugvzXVKrSOkJycI6fFrcWF2f1rot3O6Wbc4eqg25h2ZEXOTttiehwCm5yg8dZNfMDhpFqNggw4iz/ZWmRJb+KiCFucTBrVX506vIs1F82jA5Nyn/zQnKo4W3KS0D14/8wfS3g/BY5LTeFUez8ZbYqV+95n3M7cr47ziPqk9OlIe0zvXxVZ31IHXajNcWsOshP93c+uN+PpVXGdRIgR6zk3ytY6NW1eMQTrWcxPoNk85Q6UwxkyR00VfNJw7U0WIl2VQ9GcYzjGF1GzqLdnWcgR0M/SwsIvGuDSxLBtozEPkNTU7eaKnuglmGYXeAT/LLBKHLxCPcyEgL91JaSZUAbsZPmb9nUEl6sKEcFBgl8hCiNgkuaTCjN/QPyL7xLFk2pxBN1d/P3r26i3FOg6MzkfGGm7sItLG3gY+u6+rAsiAc0pArGYWTCNOF6M4y/N+WMciQKZAvgftvv8nEvTOvsyQB1E5dN6rT2amKqSO6GgmXZkgpKvh5tnmG0PAEWuJAZcA/+eyZAxgdnflervJBQ3Gh9EZUJOt0SKjrCpnOP0sYnu7rOp/lnafVrzv8YdFa8v8iWtA4exCO/BTUiELAyrnrvbRSocl+lBTLzOyObSNM18eHcTNZvYq8JG4T+ik0oUIRPWN1o7I3+1zMyizJG16vsajTLsmTOQlHgWe5AnLmHpbQd/9uozAFrSFph9ZijjL+OLtuSDuyPKzt/jkFTmYTkevWf8llCC1eb408J/gpqzd5ftGIxF30SD7l7F4MlTkb0+V5q0TERN8br+KMJQwBZ0hg1gIV4N3UqBJ8r5B30HU4YbTPjkZBS0BsaagHq8Ig086FqhLwfktFcerGvv7glqsTxU/OYyA/Hg3XbzQCt/QObyYm/9CHvHtWq/vFp+QHXbbGgyWOCW7qgfwfFKB8muJKd22RyFpWiaxwxW/GtfJNUn11dlY65xIgtU6vT0br9GvNtuV6OZXH9Ffo6tmpvLxJee71NcqHtJbkAGTTSVAdmCcY7IEuz/YV2j6CYdsvdfDmoAWn3q28b3vcl6244xuUJCh2qo7296U2hO5wc/Q3HeNU+lkoatyQt9O6sn83naw5kAoVwN4fKDT0WF9oMCizXQ8E1Ds3dujaPWYMozd70kzEUJy9abTmSGOu0NRA==';
  const _INTEGRITY_HASH = 'cba71dce0d7831c9e10658bc31c4b347092eac06857e5a9cf2fb308db33692ba';
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
