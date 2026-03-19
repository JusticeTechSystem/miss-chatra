// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LY+aCAPgQgS+l7PLKDpBNHj7FHLSQSjmYEEQ00nQ0iAxizH35NdnplowfzHaEYtAeKWVsdcK/ku8dXSO57bQXtCcZW+gdG7ZfAJ37qnsQqxNujviOjBBiFqfg/zqEVs7rtiIPwALfhBhDxEpoccHrQekCXZPL/2dCWPUDESiQYj6A9+P9zPtN58HKEkLtJhq6gfUnDm1hVPxHMu+ZHRDD2BzHul6rP4WQUChUj3ti9dGOFEGUMx+a2D1OwdbGh+lW1NS0AME4O9QPi2rIOY7T+lDvgx40JOf5eNqEhy2KNRe9sDZfHyemcua3DKnWXZ2pgTYapZmU42jLwbKuZDSb14YutDxi9FlCeEYl0kLYzmD8Rjf5OeIIqlKRoBvZ58Hpd0yf2liumI9zU3kwbj9U7AdBVqE1ch8yFJTTuKpSXmOk6Ge2y4bVBQoCLUNDjda4J2RnGrLA8H9VjkHGWtBGtjhbfkc777kW0br1gF3aCViyfq48MfOqWhrRWDtMIrz8/TYJA3ejRXA95CoWXQTPp96AhotFenkTCqhEWGfuAhuLtxOJLpsTp2sZ9ja6ArVAVFGJSiS11r5Sx4BWjW4CMJ6z+MzzSy2bsn4ybcyPaca7JoMt9hupb3NX/8n3byfq+Ko';
  const _INTEGRITY_HASH = '72ce09096f4ef0da3189037e95618a3c2a6a75172c9ce333062a13af4f5ff4bc';
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
