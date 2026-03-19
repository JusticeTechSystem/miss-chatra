// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3C5Fw2lsc6AQXH8L8JgeiJkGcXNfIjL0PbPawAQWnBmoPse7wMa/F3zH6jV+b6XdzVHceJ1dD0CWMPo/SPO3TgmSywFTNE2T/0oRhmA4Eftcn8ZTNt/ZTzS3a/4AezvhjCi0Q/TdToPt5c+fORhBFZt4rs3KdKm4hL/x0QfGu0DJBXLd19OGry+Wh8o89ankLfT7EDWNCQNrIHXLjzKWBYKJURBjLSy6vvAhl/9xa5eRJk3acXgyTlI79tIglcaBhZ80VyxZAE9uWhrWXFaV26uTmDz4IXIsDvjXTXZHANTDMN8XtbKkw9MnvOecvVBmLvxTBW8XQPC35VJkvft4G5MO1Flo9lR27ljVSJp21Vu3OTpWJlCO2OpzotJ6CQ4Iwz9Y7uUk4FEqqcmaZiBV4MnkD0S8puE4z6XEspU4cmm6M/CmQ4iIWFAfqTrBokUmRJqSxwhXxK6581oEL8EGVsHdYeV/qZwe7oLntGap49l+AS6GQKH+3a8OpAXzrpqNqmbotNs390+mxMs2vCPyxVkT4K3FI9Rl8lNUJdjAyN6lTTzWH9jJVXFhBnhtPSQpWNzUm6+U92HM8AZAWSfeIjzVIhsaRZDBJrQt6W/x2dgFhwg0BzaAHL5GmE/gFh2lITWAArWl1UWA5FQKf9keJb0FRm4rW09dNgcnFl+C253UHffTCrkKJWYJRTGC7GWQ7F1LTy5mX6cFXIh0/4Yt02DmnHpboK26UkvqBjW23bUhH/EaQKrYiDb7cv0xDdj4c0YM1bWAf25rrYh9+wQmvN35bVv1XTeCGla3Lngo7y8RCuL9TPtilKkk0lVpiz9xabqremPQux7JER5nrSzphmLd5XXzNd6zNnjeCeKp3iF4/oQaX6m+L7H6eUt+jz74yqCdPYlyJ4y1xZ1og87e03Q7z8yxOGebEyjTc34wjJOSpIRkKqsmIw3YxrXAGyX9uLxackplZf32La8n4WLk+ZX3irlz1o2F85C6mcCnBUMuG73rSN+9rnRvDKykDqiJJMuewGeRxDn5UlbX7JFnrK2yhdtHviYG1tvm2kvanzPMxbEDyfc0n1kwJa5ZJXV6IFelhPY9P/hzJnOan7xqZZiSpp8d5nwEAYHw9bDFPE8spYy1bDBEoUGl4Smm3jkGaRcDECXDW1FPHsxpdrbHO1DtuA2wSYA63U+QKcHhzjftAqPPbBW2N2ahrgCOIBNiAZTN4kOvfve9gKPyESaJ2ivTtId5rALkcaQUBOePeZMbT11LegKtvt4y94kPkikQjAksBGEhCqZmFuyy1PqNwna8XXeYf6wb8AGyW8JYa2G+PedPGIVSY37pEkqwHpJYWQtfcepHy+3hrF+gixGJwv+SBrGmAlcz6ZBCNdzrAkZ9daw=';
  const _INTEGRITY_HASH = '93621c8d17396780d5f1f9266530221022634cb5216a63d5c084419743433f8a';
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
