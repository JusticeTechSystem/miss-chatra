// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KOAbh3eeTdsWZNlfZZWlFbEdEaYkWsp9COBC1vv90uem2qXynJlX00GMR+RLQSBCRHNwZEZzPgCdsMh7Hc0BdbOwyQz1vDcwUI/b0ZwoDIlp1Jz07DMHU3+MtY9O8V3p0T45i4huur4l6xT6hO/SzVWlloD3oYuLmCU4bjwonQUfyZPBNLRWbkrsG+6LWV3GpolAKHYbPzdZt32St2jGWsf1Lz6qFbYsRAI57O3DbGdPzqIUUVWyGqjS3e5qL57yvvXTOmn9907LBUF0EOFsqUsC2VIDchAa6Pua/WqwIDy3rHjKlQgpWiaChYRnjmZEzZXhUdnmZlWSgppS/lZ2xzsd8f7DqC4lFWDXvO6BPy1ekeLVuIX5noCxm0RkqcpaON3k3zJ6dSZ0LTL3Osau9bmzvzo2DEnznoNxoI2eIXvJtYjFhETYY8k6fOPXsUA0469KR2NXlAdGhqbP/PovzEhJeFGd96yC8M4GE0NxvEVT+PSLlqTdPITO5RYDdTsnW9Exw1ooIOdtoJ+xLK//1G72ztPtvjQ8n6tDPgqwiLwRn5rxcE19ng1PMKQg9u7w3ItlXybwZ/VL6g8uz/WrAQKsGetWiXwillJrtrAaFNqoonVbHWl8e6N8vGD71n0Jxs3CMkTl9BhGPo0dfN9S';
  const _INTEGRITY_HASH = '1dd27c900b0c9371ccdc903cd4e801bf4056bc0444c6153a4171dfcdaabd5359';
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
