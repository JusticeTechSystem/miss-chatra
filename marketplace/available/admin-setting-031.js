// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'r/jVtBqYqb5R2nEbGvF+1RlJDYbXVz8BtP2Yi/xYzs4VEUH5O9f+2BV/A7ICaAUhvr+RJqgQt+TyDRdDS+z00/RG+YqxOIZQKaSZvidpLtKuKHvp5NqMO2n+JEj0hN8X6BfB2T2MUhaSg+VzC5pgtKRHkPhKjg6lCIq3fKOrV3tIt5erVOWa3yrNPJteUr+JMYT7rNRZu8+Xp4OKUeDEL8rkkyfxbey/fZjY4IpXM4L/slfcaPdflffUmaxn1tnEtbYUXdV+cgvYt7CDxuctdK2Y+EAENOV6T6n4ePBXn0Dp8PjJLphE4EL3CcO2SQFiNnHLL0/fG7bf8EhMwQsir/Y8el6NfOuWucTDOr9SI0ThSUK/jmxP2j8LCYu3+qkaSxfx4oNddp+OKBDHpb+PQBy4Q4i1JzEzdtLV0j3Cn4M+3ocyB771PWz/3QfzZp1jWnO+F1Q5TjJ+ADTDnQyuwQNyLIYEzMrPuDodRzKRdCWNQclvGjPQnRP5+rHQh3lm45Kz/PkgFdx5fW4apUbQab4xIaLREtTct3AHQ6OnGJO3mZNgZ5HvlLYMlGjFUkAfqMKtR+OyXEMzYUdUI0oYOUnd2ZCCGZ2IPZyuhD4Pi4GRPfbTp2LpyYh0SD9C7U/fmuDuCmvW1+E+G0kbrG2K22RRNCrvdlXwvyFTmBI9MCXsKTBDxTiGVWDvqNEpGoG1s0ZhPrWVovugeHhd4Cq4EOscwrb2pDPfwI21VH6L87kum8pmSxhz3IiNJxpeFG4/dNjZM2dm7U1c+LVGwgKW2yk+TzIhXO8qShECnlqySXcmAJ1Wx8wWyOeO3ZwsRq/c2eZVdNr5ps5kygh5LP5mGE8coNBElRqtWH6BGbTUHSDXJlpR3TIKJd7npcuriBZQ575o0wPeIPIFmi4POs6ir8XUnxbMeQefjNlxGBKiJyx+U0P9+L8lMCtO98wyj/ae6cbBTXwYiZ4alGXdpTWJLBGu9vnYL+sopsxZnC0MNmH2ufE2gFg5g4VDf6nq6PJx0ZnPZg==';
  const _INTEGRITY_HASH = '96c3bbbfbd90965d5eeaa22f20e0ecb900b02d856ab61c3d24a5225f41b4d999';
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
