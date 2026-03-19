// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EWX42Aebiuwc5UBX8zD7Ux5w4QmI5EYK+A0oiLsmUvo/lmXVYcB4Xs4Cki+6x/GeZfXVgltSQtG8bBc7+Q56I9Dy25ZKeOB3WzYC+7dezbV+w2uObgP6dkeIUQ8IWoeaUXORDDtdcyMWlnb8o2xh5W0feLz8PDje3ffFn467wwDvJkW5013KYSLRLz3D3L5MDya/jBaWl6oDfNgCC+OYk2GeidBcJn1FwZTREs0ATt8Zmp4cgYU7HTZ9AsJuuMqppJV1qx5PebxLC5aU+D8AA2onCTxtddNQDorPfM/XZi2Yk2Oqs9FwH6HPRTKxGfBSLqsvs9q7hBRBVCa5PTUcq0Yg3M3HaLvmknQLFJ37FyHH6kCStPtWsD525wHo9FjZqs3bnj3RkxFZgMSgJH/ffF1tGTuzfiJtzZLzgCm/y1fjIj3qDQ9riMwI7ju2OiCfl4BDBPpwNt2NJXYW7o3OXWne+MdepedBChLpi20q/OIj80/8NHAb2wsuL5oGC4ldnJBhO8XAB+MA0bpEmdqrefSjCxvwzcY3HWYRjNjDUdkXy9LoVe0apidhX4IXUI7HPBreRDb3VhS1HtuYpxPFKSBO8phwMsWZdJmbWwWTV0cwXwk1j15vCb+kvFUCanmxkcVnztcWQpDm/svAjiVje5PPQKnkWinUl9WBnwWkhVC5v1XAisjDQDedb4pN+zI76NrtKewUhX+DEsn0DKLJ6h/kOg9dfsGC43gRUDjGsB6zN5AKzxcai4M4vibEizuBgX6NhTqet73ZzLBVkG5R8J4XS1s1t1b9ENkgJX3t4P2GnupwW1rSzvwZ3RyWqPgljI9LYW1vhz91JyzU0LMB6J5QyFt2etYxnikWobRJK4F23DBaNM1TsGwuzUtbGPWBYvnHc0OwTzsH/97qfHkl5dMfXk4ujrMTAn69Ba1VI7VNUGEkmf3RvG5xBQyVclqi/Rg9ahdfzRVhfoHujEnGnS+jS+ZQUEpEW6C73PpBrdr9uc/E0wZ62+b1f1HfZdQ6Q3BEhMpGDrgCKcaV/iUbHTZT';
  const _INTEGRITY_HASH = 'c2df40800a1d0089dedd9b9527982b5f6c3542ad264b99208ad977d12ede0294';
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
