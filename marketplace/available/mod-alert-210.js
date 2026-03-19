// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HgZEoO2JebbRVbJAl30Lli9h9H2eSD/K/Woq8XbO4AvuAB7tdWzZVT1rKej/dYS7tt8M7zNB2vBqyOSruHznoUQhH/L/6ICupva/ucxMJ/tLSYcuPFOMBLInG9Cttvt4jx6TbzFVCzAniRojI+13+Ob89Ln2mh8i/SoKwRVrKwTN8H6TeAeCYB9xwNf9gr0gBKBF2blw6As9gvL6fTnCgDOkzw5TKcZZtk1PVNT1iq7i57094X7oWEXnFcu32gfGk+9+jwkp3eoAyj5azGQmCNt6KTkjHX6sJ4TwwJnLaOhi+lnulcXQlE9gi8A/fNIdgXUCRIaNhdOId1++npRZoVuteOvfbFg6R5lEIDZnQ8+Zv2QL/DSIKQzWhXna8EQBpJoRS+XLgQ7EizMjF6j7qFwBWh9B9dCa0mdwR5UBXjhMEm4wi6yPbww2tVOJDSuzNK9ULlo2ZrP6D/0LX+ChkNLQX0Mlhpcc/olqWeP2uzXA42zCeuLLV8VZl8PFw041FA+TfjPZXjxUDUtGVuCggnPT44RJp8qcOk7B8eyxAToYElJKklWSa04CtJcu57PdC8qWh7QZnzOIKpr4haG5vOxoVK3SoGEFQ0NIA8XP4HImC1QRf7QoWGNZQfIcFbrtTPwxS9CH2Cp/W2y+sBWIXkq70ElItcBdmd8HvCcZxElX7GvmW2n3b4TX1xe6Kiw04u3hajd2vKPQuN1MXySm7JYpHpjZIhURG+jzryl6KUQx0Jbf7SPb96PyRF2S0RCOTOYtx9sfXe7JNn8yGX9ddOy9dz5kd5g5NLHe8MDjgp1xMsEmpySjCeCr54+d5K6izU0fMY7DSrZ84l945aQUqDvrrcBI0L8Zk0aIExuHywDZZrkK6nJzfuBhTijmhcQPyviKMsuNy02ypyJnYGzXTChDgzlqbvGzLV3dN1uexrE4d8bbHjZ/rsX57Xn0vqMfxcu67EPCEAXVLwUYKVbVQT83usgZaYVtraPUJtajFbNpUqOO9EyRPs+NEuwdIUiFOlqQCrqwIpdisqlsMCQneeaDjBBDRu0Br9ytfmfX9nNnS+i1iUXbVED5PwboSj3K/WpVAcrOi8RUPw3eUruh/OZkur0+7S6QZUQKzGPAEqMivv27wp5Z6QBbwkrHb8djsG8IuXmIL1ii3CJF0/SsWsUMqGwChEbO4CiHuyWIQIGzoYzYD2EUZjViDMD4xD65m1pJdBn0DWqM8UsfE1CFm0Nj4G/ZmjS/vIQkx8jymkPrEFcDzFbg5c3KXMpuluSvro7dHQa/h/oHi1YhaL5dlEv5vlnX0nXZVGbLWSWup4T2GBNXNHAPwvcZKY5W+IZTvojhdx8OD4lCo0/7ImlxuEk2iPryF7HmwVJd/Wgi';
  const _INTEGRITY_HASH = '155ab918b564c5c037d2c6f8be88aa2c81f633a6d620e21359633f0b480cc4dc';
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
