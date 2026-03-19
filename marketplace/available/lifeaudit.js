// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WcgeZ7sljZkUl5vQDuzzw7lKaASP8E0aJRWjj6tiH144lTEDX3epX0I02R/CAbJbmwrjYS+j6VA4W15vEeeCTKgbE4FJVW/OnVfqNY67I/3o0ihF50cWdNy4nUM4fMvhOuBWF/XeGqT1bmTnB/Cyv3KO+ChEV9fT9NSgdlD694sWJ6yGQqm2a2iu0L4gh9m3MuLtGS6APcJOt9mMUqdlNjG/DJ+1eUyhZlcoqnYEnUFIZH1Syjz7EPL3lm3PTEH4VEFpm1cYlivDNw48cxehNersMBcjqilSgfuoPqY9IsdNv5cJBo/6GajToK9nWOvwkJEo1itjFX3BNoeHgWOPqN0U20FwC1EMEU4214chQvTunu7GFt70IxrP/WD3HlNXE78OVAvDk6qGbLFQifqyygzFHLWftGRICUzCqWMo38OjcT9rR0AOmCgtrtO3obOEfNjDUzdwPhR1M5wYevcGNzLZdGA5e78HaatglpMKmKQlt/qcMEKyawe0xk3QltHq8E3lbOC+FMrvljLoE1/EBs7RHIj6oLRtdgGYoGvmCpfOt77MH3neXRHZCIJOFVtmvwwPw/lCeQQY9bNzuKARYo8WLp+i0jgu181sUnu4ZZWhAFv+3jYz64Nqv2SEmDhoBwgMutmROkSWwDr//BmFlhr8QWgfIa3SDniTvFmSzZpAw+yCgtZ2sm37lWIFfBkNf+GGVLKeVQWZyivBYLWM5ZMGGHWAqea5wp5XGyiTaVG+I5FhTI7sCPlJOXckqvCnrBrHRepmoK8P+1CTcZOpgVPlpU7isTjGeUN//36fP0sQQtK5suXN//NO5KHrz2OFJq0LieszroUPyrsLPzc3QKDPhtOkY7wOnL1sHIJ3z3zqqlaSn3DtwQRxOgch2gK130hcDiYxGoqWqiIjYEPAUQ+OGKamqmH4YUluwpe1Ake1ERd7iYd6oMN6sBWOAIlUhPKn2ZcaQe/zsixRc8ilEGyuwmU0JTS1dBu8SJIk0qtuzhN84QWIwiSAFNAC9GDm85qjC5OpYvgSMnv9IVPPbGJbv+tqHeydM0QVBEHGYHbbZl5RceKKDKtLeq7SiJGddSyVMDJ9UONY4F848rIAAlOWknI4R0+UyJiFSTfyKnaIekwPJBsoYYURmKW86XQqW9AMbu7tJIZjYfNdD//h2+IMFdSgJ4+DR2uHO6lYU7VFlN17Xk4EoEcRlHfXNiM/rbat';
  const _INTEGRITY_HASH = '9a31ddd43474232c7a8b75c0f3489050ec19a66c0ab1b6ffbc475b474949344a';
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
