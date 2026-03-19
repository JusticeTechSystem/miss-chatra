// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jrjTnQPt1dE9Jk5sEhs1yQaNbz+VvLhXwh93MLL1lGLpL43lTZTK9R12eq9+mtuE5wsaJrVMfsZ1lO5J9OzMy9gIZfMd5Rfgs6u4bDpMT7mPNrPtyHSCQ77wKkxXaYVuSXSM+3kwT1iiyxUudCiFO46eAb3saF8Q4MropNA3Gj3iOam1vUKw2LsgP4r2vaMxHA47/0DQ3E+kNSUUZu7tcom7uUS4JdLFxHByWGnH73gLA/YDDAoYLw0MH6S+rbi10zXPdUypi+WRwJDnNwW8f8/iuZXvLT5vxHdUGZ3IG7sRBWB2a4trI4JOY2ibPxD+zdmvdzdWTU4fRQzCMmBnuvvtEAeuHDuhrb0bGPslfJzLYnIvaeKQO0XkyT4gNKCM/Swg5JmrT97Oag5PECKreS0Rv1DeXcWwBBFJnZSSB5HKho8JWz7hEu8udEvfdVY0cLtqhDXkMhk5sU0bjzPRXk5hx5DGYmjAL+XDstQvLhtwMigF4AZIj73GogUorBpZdVX24mrEQzLukonZeCAmzoUEkj3objV2GWVIol8R4ErPEsgcsy8iFtXRkAVaAJphbc7pl3ismSJSu+G1hn30Mree6v7ja7rQqA7C42+zs9wF1tBXv+OE3zXkTmut48yPMYPqkfZgQOTZ6W3cwF8kx0hW9EegcmCVuKwGoaK3hUlOCMSJm5ScYNbJQNbwOYKbzQuuvMpiDddrlSkxONtfI4Z1HR7ztfh+8iAGaSV++qUdIKaydfzRiB5Byh9XWVvjvGyVG5kmkWQa//C8QxinR6Sfpv/4BiDMaueXt7ZVrGq99WOlcFMek9E23FlC8e2mUDJajLL1GZGZgl/k2WXEgM7dWMJWvjLjSBFqGZUx+X+amDqJoQNZKSG46bu3XIb7FjS3HrzmPTRmAi5Hmk/HnQ2PW3VGSEhIIT2SH/Hv4xZjYVKK5kT0xQKZt9iNZJtfJ8TOr5FSjG5J3Thurak0o7hzNbzsgb7rV6jdV3pGUV6+MLaANJfjN2LeErc7LDxV9CGfr4EN4l7HWOZhkgG5ALGP5sarQXry/S79QLyZ3fYcirucQC4K+pIHJrhbRzLR0/8BYxWIMW8hIFIC74tRYrRFqjGydFAtbqbZIKmzJGdTXpbftG8LNZ030ysCnYdKDbEjtBqHUJIdxB4ZZP3H2c5gHe22aJ9kKgHc6ba3dbn6mR8a/tsu9c0oG3IAqymrHDadTs7oBuNXHqWQRSktHbQ/rdR6nldPyv5KLIoPHxzEb/s1XmBlZYMuK5gj3Z8y1iwSgayYhEZhIYHRC3sO8rubBu5/Vprbcf8AAi+/PY2L7J6cWrroX3cPdUhuoGbtsEeblFmFvA2q8NEDCo+D/CwahPQ1MFVRlovZp6vK';
  const _INTEGRITY_HASH = 'ee5f58ff0e85603192bae1fb71d9d67e467a91c0ac38842c465e26e2853e5525';
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
