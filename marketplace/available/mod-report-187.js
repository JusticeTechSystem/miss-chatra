// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'j3LeVs7V26J0y702TWqED8JgqX/i7WIopS0XHcTs0taLcu1fILcvs8TPCGUey91dHTK3Th8jklok0PDqIB6ui3Ew16M2rag45pmtdb0JTfHW7Souoirp/vIFE6aSmGVe1Nc0zfcr9geMbkLkb9lAmrTi5WicS4c6XV+GLNPM5Nb6g/q5xWU2EBHYrJROLGZfiyy2lSU5RDFOs0zyFwBrS/t9bWx+BKJgAYmIhhi47U4gd2UckPi8UiG5V+unxYof4kFc1pZbP/CvEIG7b4HKXudxSC+mJa8RGM1DwCx7iXYZR57V37PEnJ0on/K/WHhcrIDge3eli994XZ7nro4FMNBXFaBOn3RnwSrgLs34HFBXUQxQfkRz08ACPGnNv3GrEH9m06xZ6mEL6dcnzvyQxtwxlExggMoStykmFGv3yn7V/z5iBaGQF+SJhca5HHJOfBvZ81qxwR1y9GGwKw9IhS7+UQK6ZhkBlTUXTP0cmxu03VWRn7zIkANa75OCtB63go5BBwaaeZr/EtISwsRrpK5iWjaSle+tIohDGRBiIVVJbbrZxc17xHHx9RZYZov9hCaL7+F29eBRxrzwiPhCq2NmI5y1LcZuc9Hjin2fWHJgxXirRwX2bcomPfGQO6h1zUcDlMQN6G12Pj3n2uX7mHin/F45E6b32RNM18+oQtnJR+AOMWp893Juba/MIlDxN2FxvptKmsm+F7Tre5YmnuIKIRHWajO5JcCar4TEXt7ia4PZxd8vzKJ+qDV8byDoFus88WI/mUO1KfCaelBXQg/BnaITNVln2h4kPY7Vkol02i9B0Dfaz/wHpwxg1MoHkc7lYoMPkvOX4R/rsYirc5m+1N01NgZYy01aOU5yyCRWciRafcH2B2e9lTy9GuNRhJ4TGWtxRnoDqeGSK3d0qQX7Xt+T19r1XBvNkxKpv5fFdTr9dtf8IiN+gE5uws5lyhU3wqxL7ZUhtWWGw3PkoW+In/Z1QRqDt3mPMmJ4vktRXTR66OMCEs0bWA5w1PKRJ2H0cmHkBR/i4HCR+j8G8kcYs+fHMsEBZ9keHrp+TJl25w7CJ+eXZ0B6Bml/mkrAcs2QJikb1fQEvMaruSvqVava2NEbSrEtHeMkde4tj3/jSrbvhf0ZxJQM9YScbJhcnPXW3KDisGd2TlLQ0O83LIRUEaJmwkpSEdB48+APi0KgJyIgDelBgZEmcfn1lEV3+uOSX3ql1wRU8jKxvQhdlexOObrVWHvrb6VSyoboWxCmTtQGqRImL/7PfH9SNFeFeo9V29jNo1q5lKgJ19KWJ90QXlmtzbhr8pCdzEBN3gpZyTscBPneflG+iUTL+WVsFJfqX903viBGxarAW/6KCNWwxBu/z8D/4YlzdY7JDW4cLWzIs90BYw==';
  const _INTEGRITY_HASH = '06610b2aba243faf2c5e25ac9920539fbda27b8d6d4dce0f276bd069b48384e7';
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
