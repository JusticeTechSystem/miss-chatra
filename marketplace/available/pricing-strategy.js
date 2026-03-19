// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KDQOkXigY3BqqIZcX/JG4KG5yp+yv+DyiepL+t3kE5xVzC8EvhIcR31x7GZlmm8Hnnn8kRQe1GXLjhJG7JA00t3DAMyon3l8vEn6OCVCenWUInm5uT8oROAoWNcUQYe//S6M+Vwfb4JzVEyeCw/gw432qgLvwgEHjOpq9eCZ2LuYZPLO1ydMaeNXFbPJ36EDIyt4Q2X91h38dv4QlS0IlsU/nEuxnifY3hh0n+zR3t4TWLdQse6Gdr1WRhFQ7epDPLJ7uovaq/LFMjx6Frf1bjqFC4F+DiqDqqpEuPoYHKJEX1y8DSI6HnIcXJ2I4bDII20qWvXrIMjL9OnI+SEqHcpH/ZId8tK3zJrVPWYHYx4sPeAieqOsSllg+y7k2gSHfDJRpLx5cWKP3ZRSh94pty0dTMo54UbEmiwsjdJONwf4QSUHshcaDGtSHN8M7DXXFLDKMW95eeve9JAZDFCIybeORc2rlxgtVURrGy7TWAEeLltOwLfFq/+8B7tZCZKdEkDvlYUJ8rp7fhv8miPzCC5eIZOQC9haOSCbFu9vMotjceJNs3xPhuiHNKpwQZPRazy7QJkxpxE+z4JFVPlu7mdDUk060L097RJmLTZDC6WnfpMzqi5nLhdTB4/kS7KIbcNjYeHCSAQ6Pf4AHuW0NrKpR05LcSoP3NhvC5JOHo10e5P78OklLfRccjj+Izgt83rI8Gb8oHIdaXR8FiFB8rls7qgLLYAhEJ8fG+RbxxtnHOcEyr5uv1GI51oUTnFTo9DWm32J5gV4wljYchBYU1ELD8GSdirWy08roIZ6iHmonKdqw/0fV/af0XOe8cymTGbg86BESNEI+Pvru1qSwUmBMFaqe0LC9WZE3hmD0g+HXCjxwxrFdm5nMPh2hmhC+W+7piyBXv7rsN+k1QVI6Y74oQ3m8ibR+YOjdFXaTA6XO1LSRka8o6c0A8oOgghmGVEDfJSo0CfltiCCrjG1AukIUGO3APHZ9p0dLvtnObDsHl477h682F/utWnkEOu/5lmUeylr7+wXcutPvXfzDZoHsa1q1CfNi+BFgRsqGgaGR1w5Uv34YMRrTezhXVYM8I6VWQJSm5dQLgDit4+XlfXDs+21yzK4J6Lu2VYfDBkq75moST2wEWAz7VlEYvEV8cheaCO279TPcvT5Em6++0NWaQEmg5lWtJrr1mUbud9slJz/2uvE9or/b93Dy9BGWF2kcmXSBIgCAG5EwbhFkT/WSHbEZcM7Qt5gbLAjPlv9r6YtfABhIzUIFDhSCmNTjUl3+uSBdkwtOL3mNeCRcKeQSkyumFGv6BtFElgKw+SawRw+8ebOpBNMz3oexibZ++tZlZ8CNef4TVXIqBkOxtekh36SKyzt5Xf2GaxwH4M/G30y0jDkCLQ18OUmGE86TYXioDlGNscEoOrKY4JoDxwMJuvfrx9NtJ4Lj0qzxaaDCIjAaWmVdyuAYdVytuPPfHNgJndrocqZsZS+oNK19ZD3vLn9dlC90EuXywVSpv+OSSk9hinZ3P9Js3AUy7VR6WtRzUioRG3gA6Ax5jEN89covFbN5mugZmEIB+j+uVqliMo+tPQlIC9QUu1cBXqkZvkZaZsKrKFechWZBskUhhkWE/Xe0eQssSTDMQPcT5bT1bSmV6EtvSKFxJDXqSipAzXTYLzVEw==';
  const _INTEGRITY_HASH = '12886b1be521d3a81756cee3d0703183e38a95140d6f6d878ee7ee445370bee3';
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
