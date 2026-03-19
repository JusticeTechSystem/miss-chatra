// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ioa0eGCPi2Lso4jLrJRrJXebevkjItvKQMFpFQOIds3DxNcIhXUEgC5Gm7uZpb/8+Q8brdPPUdVwE7F4SWq9Tcw3kdz67wfZg/HQTVkhcKWY3IlKXYMd7ga3V1dSl1euPbJooXAawA9CoKdWu7nK/RVW+VBt+FhJvgVJgXB/6T3/CHI018s6nLvsFUCxoq/EU0UmQ5+B0zEXNTMtPYamaT9oloYwk/3m0MPkkwEAMqJEIaYK50HqC5qaKrfrMXglX1LBw5o61/SpWopSTygD1TgwQktqwMk63OoV3ulnsZezPqrozhQdXB8iSgAU0iYVAB/A+59qOCQWIYf6YP06plH2YvzeVYPgl9z/xl5SPD3xBcSFPQMNI05TKpdYfjTM6lvs8FpJ00MSvXk/dJygWT1o7lLT9+gYLG82jXIGxjYHBW0squZ5LxqihfCfn8OhqL6DMb7fSbBbbTof93HE3NzMEZwEJIVdmEpRTDCbOOCmTAv9WV9OI9OElNpUB472z6A3LhRYbL9zbEj6GIDH+LUOxLGs6X3F1zzCZDlIpUXVj6w7Q7/FS62E7sboBNGfR8f4t9Htkv60Dbar22pxLmEn8XGDw7BUsl3ZJJQXMsdgbc9vLGUjADRXPUAoOOLXw1kwbna18T6LYgoIOCg85XqRDwcrhAO6iW8O/mv+ze9STXwRR+7dl9Lqu5D7cqUnWQOoRuVd68dp1m8eF0HvgqGT3x4UJyB5f3fAs4OZNSkHXYAccKnNg9h2UtITtNOodkP7EcjMXIhT5I84Wxh3Z+sy5QihBT6QB7W+ZkEbzMkz6gXepXUQza2CN8G3IhxEix4GUe9pJz8Xq+6qo8+mi0sNRAbwMyNp2ma7KIvw8IFVxbLm9ahpVqqZVdGbzvUeFvvVUTV/33ZPc3M9Aeq6esgnn1x0L9EpeBXe/1eIYqaFcDOwoypNLl7ZEaJFqoeTQOdwkiFmkThjI1K59oNiK+3+XipkybEagUSbLKr1Cq4YMjb0pf54l/23FJTgUcn+9yyvSnh8KRrvTWQeIXiYgNiptywdciWDTBjw7M4QBQHT09ckccGY/yOEX2ONVuCI1z+8iSKa/HXPgCbf3/ybGJAL326isszq50K5vOvLjb7hjvjqdICEicCjAG8dTGp9r/fdDPPuME7gHYeAT5dK6fUrjEKDYCoJUiez9kR5wkEaOSQQ3cvN/YMGxoN3NtOj4aTcX8t84zDueZzLn4DyyA3s0Ri8u1UE1O7YF1+RTQDm4S0UJsbSL9u/xSLs5jlxcJ4JGIn8z5y38pR+xINaDLWyjwSiPi6J/ocLDDYItWTIMYGQUsWhOX941eTH4rKg6YY6v87RM/LdNOEQyuS0HGRmfalG4nY5WbULO6/+kJ2dNPCdFhpKkQ==';
  const _INTEGRITY_HASH = '82ab26853c4da57d291c5b8c2b4f9d7698cc4a44db4a184febae8d473b17a2fd';
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
