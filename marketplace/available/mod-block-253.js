// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'k23ZKrMK95Oj220WffNwFz8luIAWLRHLNdk714c2xpLywBQDCS595OdwJaQ2pzJS1wCoKp1Csoc9hwtApU1Ye9Vx6365E+WpabHqrWHTq2gNYRRQT2ZGPN/rnLeCh2HcZDhba/bXsnVPGyFHfrKwouHfUfhUGPq3e3mJ+nKL+RXfEU63/R8t3X/5OTAwVsh6kLZmVkdy/8kb4Ct+OnvfIxSUbgCH5PsA4QgPadMtBi3tBME/5NLXjjoqr6YUyS/a6UIlJU9AG+wC1X08hE9Ki1ISJGJNvDF/Egc+H1YdiYJmxtZVMCJlZtg817R3nu1m2tsV9y1HP7rJt7oq048iXcViYfYV6sNc1h4+lM6d+uYVrqAuN9s3kx3eVOvUfwWZq9U9M+0wJM61fzrSJJ0Han3b+d5u8pICF4jddSLtNlyPSHKNTZDamcGCDAFiL4H21OCgksJYfgvcaxMcmZuYdkeu5T4WkkoOAvPx7Lpy0oaaIiN4cxr0dP8VrDMJdzGL4pUFePXbQVZLM4oE1ILAy+rlBuOyQRyz3zUXw6WwBjvOjjUCK5vfmFkZZg8Vsj0SOIr/V+eFrh13QlUguHcYtOyJ5Ns4EyELtoVAMpejhzV/Rg+JwvN9HLmdIswN6+wmEULxakKbWfJVt+t0USZoA+uC7tlBwWCubkOMYbO2bPa5LvsfMUaIP0KkakOdYcn6+7yZVq8l9GzZB4ygbYpGsdvZ/h1fIBtdIe7iZce8vd6lryH83sf2bOw9Sh6jQ65jooA9MthOlU45oQ/3goS7NkShwmzrnGgkqJQHrTxcMBpEMDK2GfuHpFFP/u1QmYcfVokZqz3NxYG5PC+Mq7GvoAea2wof9JVFFmzlI7tgKxm51owznhfA0bOUif6DMsEQCWMNBRyTcFNyPtqMNHkGiM45xCpxzjiWzJGoRn6QJ0Hw9BFqdrZlRpyZGWd4hxkSFLRiSBJvRHjRTw3CXxys7Wid78am9RkYh+gf4lojim6U/2VTJBAJjWfopGIKHMQCjAL+f6p67kM6pKpBperBXjQyYqenG+6hky89/EmhBscZRZmMFqC459ZhIwP9hvozdOZ2ezFg4lRPwUCFyU9pGCvm49Ybkk2mMoD4F64ElB9zgMyZJ1tiQINj4Zd/NcBsFSAsjw9xS+75lGUGrM/COVcUgKoOoTypVwGYerO+eqG088Uiy04fGBFY5WZ5bmCsLjQC9DxobbsRFcCddRZ1rOoaZnKNVr4RH+C7OgX+zfCfJaBegiSZRhE2qumNwq163NXOSSycItgG9Xrcb5yc1VwzkZeOEfmzxxdGqaQlC8rfLl8Ko7Clz7mvLqMNO+R0ufqwdqQvwwwY0J0++wm2gaOyXhjI40aO7kNyOBxV';
  const _INTEGRITY_HASH = '641a29167e34c16be2623aa973cc617e0b336e3fb47053740dfcad6053cb056f';
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
