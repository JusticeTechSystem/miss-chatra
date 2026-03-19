// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xCSZm20gDEqe+4OwEzxrzTwdPS5mGg/0Yr4HHA2XZlQVopbZGvZVJ5+zyY/9CZPsDWmvmTR41aeCreMpVixro+tRyZpeEYIux2ppG0Tm97tsqymdgLV3f502ukgAsUctpT0owArR/xXUqwJYegwKUKctuDnEiPi4j1+4YoxBnEe9pAxILCokuVDQ4fTZssdNXN1j0Fs1cHlOLyNWz2LhCIIqQQeNJU1Tp2DIxMVGiN5e8uIeU4TZnk5WRdNpfZFJwAjjmVbJosOolzkvx3n1lrRNvZId00MFZDRg7FCxJBFqdURwqCqT1RQCE+sbAeZpKxQCkjFQ5wb0E9zNONNg2PKPuD/egM/brU78kj0yIgfd8OnSOdAatfjLLvjtKQGU68ytDgPfUMaRfSYoGban4mjLuTq6dNwMKmivvR4jLsXU7zZZsiKtbxZLQ4v0T+wiWfzheglDiGd5oEdcCMG1gISlDoo0GtFAdKZi/3xUR4cmh2a/Ml1Vh8AdHmKr58DFosbPR7lhB++SCfTFPyEy0HnQMnQXtMKDYduG54EzPCmij1zFh2ohF1UFwiPZCz+WrK4WIsKkL9bWluQHE7n/fifKUl2kKNEGPFSfE8Lj/acqT0OEbUsX4DE/5Y/ftw4D00AJyxbQelCMKHoAFtOwXQ7cFwFKNMoZLx15dlTC7njz+Ug95vU+mX3kU3zyQ/CAr/Eh79WkZfelzUZkLKVB0kFZfWInbOV4CJ3ROl0Uk7IkFIZwK5jFIr8U/67v6T3N8CHqS6RhGEWk4gowavAVEQ0ScqEAYIoaL1DNY3iWQBbnp+/Z+nBlVAV5mHQO7Mu/lsfUnBtug7HS+5gu1WfEVbrH3W3QqsgB7h4cLnryxiFRQh1K0/lYm1KbTWsaomgvqB/nvKp9Gx2CXHyqs5XnJsIPakecrx4VmBrYMfTiiuEM1aTbghxIzNuPBQsf6/LMPBzTcwmHWIk0FZ/h5oJ0uj95V0ND/co0owQByOsZ71EfshRyOJFpMOdYXcpEe0jrLjtJqZpFmIHbfrue2eRxbpIRczlsXCBShZcGxNmRPOgZxiLrJNz9KPAqv0jNPPh9rBvGrl6vC9ZN9jw6V4X7QnaV7B7ImHTqh+QpUY4ZascMPwk4Swxv0q0AbXFdawt8js+yOPld/Ba3CqV1QIQF5MURMTmH4xomJlZrUOmR59Mu/TlG4WnVVFvz5wADPWHGclrhYmJAGkKGZAzvIA==';
  const _INTEGRITY_HASH = '74c5aaf9b4f45cdb379e6e1dc8a786a6aa489d625ce56e75bf2dfaf16260a1d8';
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
