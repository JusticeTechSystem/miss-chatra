// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NoSyx/fabyst6PLIdJZSn4HfZo5WXP/AblJ1ZEDx9G/NI9nqzqag2yLptc8mXMIifoElcVpAz7WbVbR5Q2yxnrRdt6hR52IhY/me2euAXwhKpSy6r5xNdHk/4qvwZ3gtVyV7hQ+NqZvKa8x2so4//K9i1DbMXsn1JTm3dIK1ZL8Gmw9zAvk1hwvWuXmGapn4+v+CkN2UTJC/S1C9IGuMsFJjISDj/lhwW5pD9j1BxV5OnX5EdBwvjBaG2ebyqcfoZKrbgh6XFi5aGQFUbuHw40C495yboqc3z3TMjEdLEbft7QIajyF528RTdKApQo+dP7DHl13qaRUMU1J7FJxWXtXMTRVqR5g8D2RK1S3MVX5rN18l4XT3hTxYXlM9aAods86vPfNYcR8PtioZs7CoxIXvglzP43DCtYYEF8p3z/Sb6FIGAxR4o3tcW7t/o6brXzchrYMDUApzPzfiRaRyI0fVGozyOwa6KIf0l4ZR+tZKfOVbymwD64EjiXGTX17Q5U/1mhHOMNx/Zm+lkhxYkN7Zb4JS1x1ygxa4K+YWvNs1eoZAaek3GyUiw/dSxZhos41V68A4XuHrtcppY2zJwtsoV0Qja2q2RaVqMJal0CwjF3UAXloDk2wVE/0LEG0zs+N4HvlSiDURUWHa9dQD/Fl3pNSR52Nux/iDg542WoItQ3Hd9gb6gy2SPCu+kkLA0YD2+Bi1FuTUTZn3Oh3T8veu7bR6SAOQHn+r/rhyoi5MBHr4GOln7KL0cWpfQzs6IiptFvc2xfQ1NG9v8Z6/FSgEG9faQsSuR1O1ElKU6HYPNUPHoG8jLgInFHPcwK/TItWjCdJdt276sNlTv7jcJfPuYGAa/17et6+PabMw97oYKyZTRMMfK20ukMkrvzwfe4NmZ4SfjG9EIwSOaJhoO6zPw9QnZIlpAm9uEL6tiCKXpUAiVm74KJ9n4fpssTevq1yy7RiLdPVnD85m+qHHN9MT6R+mBD+R2SdrRxovO6o7CIFdB+vLCmP/OL3ReprOH7IRSbl3fv0fgXzXNJB5fXyIDLcWJw1TxWPsz2t1hRRzcLupbKr8OINBBCy6U4EbW9s8qdwpjEz/gqSc6ibhrY9ER1nzU49C4IwkNMEc7eT93dX7LWzxUtpO4VQvq+r1PbSwlbodAjf0P5rWWhEVXqEeVBGQeCN5PpoDe1pdQ6ArTBq2nuLDW9Fh';
  const _INTEGRITY_HASH = '93669f6f115182858736413ea9301d83a786969669756a662fbf63c429eeb593';
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
