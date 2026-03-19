// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L2AHVO7Ju93Fnmk47OmazlIjX8B8ZGRwtsrSABoMoDk+oJB3O415tJ+3O6wYhIfmsJFRHflQ+ChAforrfqRYaflMQhx0laZ6PFqCKmfEVFpQeX8v7ACWE9idqqkdV1pqsUUAt8brA2qxLP2l0PP7/ZCP+xU6foU6qLhmJFcXSuUTfL1MCsUqakAnlXycapLE/aJpU3oHlUeJl8tNyM7nLvQNcVsYjvPXIxSLNSOJi4jtQHiGz3C3VW1q9h6O6s1umK5nehoENVN40taJidXJVEam/zqwusxDQaGC7yagvcYqSRkwkZeLDdQSoJX4pzaGFX2Wc3B0inoLuQfAUG1zyIxAVaB9CrZJpVtYerPxlWc8LMqCx0jMTTX2qO9QCGX8h41USEMjRGlcrdOUgxyNvfBjuS29Si2Ys7RUJDJnH0F5PdRucgIRSCuK7ttaEaUdyZBsBdi+yMxSj2hoGfb7vFySckgNiqmvk2rI6XO+8Ca1uemch/yswcvERmi19NPAlaAPrqUqNPDxXjQI2LELSQn4uM5HI+i9UtyZdOjL5vOnJ+udjId4gqMaypF8xtRqsZUCXkOyMhcDO99yhw91aa1bBAcO6xCrlDEhygsHFjYekK+e+ilnY0b7p8vPPmtb9Hta6PWHFHgzQGQG8odVFQhQdaXBDXNWQzR+Rq6QyNE1YHjq2Qg+j+Pqgl+rCdwVXsBSqFKT+Bn62okP3FPd9fWI5GZEDKspRuAbnFUZOiFbJBL0E7c=';
  const _INTEGRITY_HASH = 'd26812ce434a64cc4482fd8af88c2ef79ff0580776e94855d7ec26bd7294e4d8';
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
