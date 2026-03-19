// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/MJ+aoKh1KJMQyTKqX4B5f/frkhRPGKO9EruLHYzOz/zgR1gti+dxlJwfScXwCGXOtX8RTO7sqjGFoGIi95ck0V/+IFp38iIZgm8KrePiceORApIc7wDN/EIVShaaE8oZl9SpcGdEafYLQ9Yvz78tLmQBG5CQUIPN0OWsCxxqL0IrA2beOi/YPn9yD+UI5PetTsrlP6CL4LnyPfjKGUgg7ephsKJiHSpIr4mwn4pcOTYh8oQTDPpiHzDKJ0OB5nWX7EVJVG58I6EW28EnvIQ911M0tTqyqFfnlwrNdWbMVxi7JqpSaJwXWzKKPNLwvi352izeMsIzzROHfvTjHD7mgIZFKDz2rxOuPgh6fInH7stnSQm4kr0xxnEDVHNdTP+/WxJJHvu8Fx0OEL12WfSqM9NzFGgMP2lN746BGL+qwpR62BNGbviBhoxzWfCONBZyEByflLhWr9mRo6diLqZRfh4nNlnufK4Sso+i1TQ74slUmjcErLFfq9P1e8q11/ZfagXqgah8VzAbUy3lB/TZ6i7XwpC4IC0s3iF/ktqFMrzfZyWEaZ/ymb/0w9M71XwykeJ8Z88uD/JApMrEkWFqT+Aflzf2aAfT5+H4iJON6PY7ETIAzARd+mby/a9v3Tl2fSxe4mTHC6oLpcmnQR/U6WVTRKzqpW/VR5JidvKgB0jMMPX48eGHhN6qSXjR6NwIbVUhwV7GAc9nbCG2vBKSiyctaZSMTCdWdigoWb/wtSCEDUEiZ7RI284NWzsLiMkzaAlUgASs6ObNSU4JxGtdPbuCnYlrU9qcpgbUoTU03sV0emV/j8RJHciiYh+oZpk314pdjsCD1IYpcvD3VefSigW+n7sUqZ2KHUyNkmS0JzPU1P7ymPr9C+AomqRoEbmgULmB4j3np6AWkQTGzWSIu3d+MMrgkUHKOg6Xwq6q/J1nl4fM3jnkkkLmkuNOGDubGEyh3aScqtEUWj0wJfpqYa8C59mMW/bBdMdT7OwUvhdAzIqJUZaljVqLrHLhTM4GUc2PUKJ408=';
  const _INTEGRITY_HASH = '3bbf6ddda283bb33366175127081322efe163883e94ec2a22f464fb0352e2d31';
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
