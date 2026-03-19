// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DsgH8lF1xhQAqGhk19aLv5ON4GFT25E4VcMwHAF3Mhv2N9uKxeiuHIx4DEIvEAnBitj1BkccrjyBEiswAYeOA8Kt252cx8Gl8ixCOHUzQ6KKbZQBjiNMoIAMfEdyPo0sqdkH+oVYygaqjSpxTwNA4Ek/JgCr88F1Nei+rxIrsBWSIG9Spivs6r1pbjWFGCwWmAsWxebMSjnqGSs7gh+GYJi8iV13g9rSwJF26TzhVdKRcZd+7ge5eTG6r/SKHIpcCoJVdsrflG/0Q3anv0b4pUNGj0k20E4TjW82QZLhO/P2i4Xo+MyPonW8rljtFOIs4cE3WP2B+SN84+Ff7jPs3NCjUJU/jIPhAaaSjqo03gT31uMlEfNHmDHOUGjQpXrFkDUIJmWSwgH+9fqCD1TjnUUWEfUvPVvxIl37tVjUGMdN4k5nxGvhdUDBsR6RhqIP1dlaHsLDQPKB1oGbBRIhCVz3yuGdSoPkj5uejJe35SggD0kDvIuoU+ELwZ36FryKvUNQUHh46R9oNZYWc0eDYre6yrQfclUWC3GMWILkV7qs99hKCExM9XHMlcLmWJvTYw1zi8GKQCkSbisQw4OOD7RKB7XupTBFz0czn2nMbkK0vsgLxSTKaLwV+6zEBBLsNopNL8YXYMGow5siXyADJJ3nIl0VHO/puZHdPIGEmLSkr1SYuRD0SAkzrklgltnFIHUGYY7iRCxsyJTkQRB4djA4y/BlARz/RO6Vjp1Lg91IL6eVFRI0fg9Mfb6FxtK+SejD/0ZsNMnV4QbjXUwPhsavaGgDlVYej9HBGOuAQlrMbS26gw1MaDw5YI3kU21OUyHTr792AVazSeGpvAxCrF+CWFZaXo8Zq49srw2B8N5KfmA2eq2mpLETvvPtjSQCc9shpfgVyQFXaIRHNTjIdx12bdO6536ocFMhUnwuGpJJ3JUe/IKI/flJIXzBwIU57cRt4w3FxgNPJlq4AGE69NxEWI8EhWe3NB20Z7NQkyWJZOoifMPjQ+UvsQsf4CKb3hzV+/hOAMYmb8VQxsA7xIOecUQXJxnsezPzfPrPrPBMbzXNlXgKqJ2w9k809hBC6Bn0Jld3UgbKbYsFMTvJG1ReOiONdcIExHE1UZEaxD0Iw1L+0Qphz+qH+Xa6DqtsDwmuwFus7GCT4jZp9OSBoaW5bWrBbFhV3ula4fadIZejgVNQRO7O/Ddy+gR7WNYQMNBxBGFIP70=';
  const _INTEGRITY_HASH = '55dfc1882e84d66898f5b493c53dc50bc8d33d7cecd6ffed4d466075ad330cdf';
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
