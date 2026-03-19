// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'djwLJ0HD4OXXX2TzZRJWBDlFb2a6AM12ChVT0Xz/9xtbJVfa4cqqxPqaPySdek00ANRqPdE4rVx2iJJqbuiwmeqKAmAWtKT1jIjbDlftUVVLFB8M37mdgfiG6ynupqZq8I67XCNx9Cs0FcKXpJbTuAEVHPtFrQXAAbBI/hVJTHXF3g/eKfM5/GKFAzD/xROaFLixqEPU22w4746hjYrcFXM4rqVMnEU2e6Ic8EbBelkwWmKc/o5wJDEkAIfhQBJ8h8LwVIsn+cpud7eTOuPN/LUzL11rU0If2TfsvydYI1lQZerA8bP69QrwzOGdLjiSzsw3kIiki9GCqopClDqtj/MKpnBWQOpuusLqLFxZkW2IFyHszrHG43VaFC8KbRI53jsl/FNyyW+yMYFzHTaMVAMf6+SNs/o2Zw+fOa46yZVEyuG27b0Cf51ePcJGVMOOH0Ok7+pD5PCf+MjAd9zvt/ihVUG6n4KOxoI2TBfw+CTtfqTeNho2SlCOX9S1jfTRnTrD+ymOC87cYMfoibKO8RarK0FDIHg5wsvk4fnoIbVGxXpfPEDxSWiD0nGyqQz98AQbt1D8DVw1xR6CP+9aljqPgqqZGV+HLBR8teh3Kn3a0SNBgCUaTZNNoGhLHR6DYevodgaRhBIheAwlpIJhL38+6FOSmtiww5Q8dM6c+6XbsRhXDeBtDTSwNbcXaAYi/HBQo0SYyhUreC5zHX7x4EcnBjOg3tcyl3KcZvqgoDlT8Fk5u80hOvBgdekoRYPEH7gQseQoJxsIl+czf+hKkE0LN6ZmJcY3810M2lwA5gHueLfF5m8k/U/vQqzOpVXHhGXpo2NtJoXrHvCAf8eOyQowA891gSULOHBSiRR7SM6E3Lo++e53cde925EJr4JUplaGzFu8scrVxxeX4Nh9yOZ7POjd0mlB8toZ5j5j1TiBECraWVC9vDNbcZC1fBZaNI7FTLsYKTkm57S6OheI6lcUfuQxIJcJ1Sfu9gSlijctfsFC/gj6HjAh8Mv3T2elQzbmO9ZAm+dQ4yBcE5sSJh8CP2EGd/fdj3ly66XgFjlUc11tg5x1q5Zy28x98GN/5vf7jxdBLgNaG6wYleFgD8l+xcyFHJlGtVg8OrEtYVv2CtUcVuqNBJYUZ8vMfJQSp40PzSBnE0T6qkd3AK6zj2NJaMdvjO2R3ONe0pjwnDXDWurysZEg4/A34QU/MDdTSmUBpmBzgPb3mXg0pgtAdzNp73LLAXMD8sUVmkqC1gctsc0YHRu2g4UNErbbs6WfaHepYrMzgLtXH+lX5k/IAcnAlJhGVYGypns297N+R2DC+H2m6ZbamBh1a+HIV8glRqvVXrQ7VDuVyIilOpEHWQdTYX1rK5U38ZYk7b9EZWPtzMKoPDd6i4NqHrXkB0JNt6D2xM4M5yhf4lg87hmLsA6xcYwTuv1Na+y1dxzpXVHoSsI8as8z/5v7gVBOQPhnz40YJu7uHonj6tPSbVq8LwJfYgrwbUZp3HxsATLIlK2T2r48QQV+r+FOOGGYExp9SzQoCs4Z/AfJzjt/qCfK5S7LJvkHAijbtNro82Ez10Xie65VHTo0HeKL9IvA/m7zwxkU5wAO4/mbhXwpSplI6VNXieoX1KqlHJInDPvd1Tlw9ZfMPtdyzDZU90mavzpJqG9Olre56dFjO5jzDaqrihSaj0unpJ0wnzeJBVmgl4vc';
  const _INTEGRITY_HASH = 'd85e41ed2fc0ea648aadcb4c2736c905bcb3177dcee3c730ea86d55179857525';
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
