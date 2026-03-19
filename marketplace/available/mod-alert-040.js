// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vHwxfjJgw2kJ9XDvQMIfVaTD62+aZWDi7K6vOmOV8C32jmW2mEPUkUvmtnIYMKnQTjWs8j05pK25sE7l1V4ixmDy/eLY185LxmY0oi7Pi31NsBm6kAajrmloQf23VuAktPEWV5GvCYGTk/aya7eQVaOz1c0atU97H9BQvRQiGsGFL/zHWjZ5W6fl1tSXrwDJx5jLqnXj6yXdRIDiyymB76gHetYUFO3RdRj5n/O8qwMGSaRN+eATdKDYT3pp1m39QdPxHtiywRo/hzs0Mypo04FgTKitHfJvG6e0gtZuRg4JdhqvQOk8GaxlO+9qYnLonyK9COPUTJzP260iEInKaKiqgkdauwO46kEnl2MuFpK3iacuoumYS4lCUGkOsvZHcB0OZvf5gNNdlia6CYtdsZ1ZIBbcrCzPQGrJ29e+4zLOCVOzTYOCmbtHLjQDyD2OBYH7uGDQhYMVBdmxNb+QpjIhYpq0h8QlSEDoLsfMQ+4MY2Mn99o+gpCcxQ0Rj0qCR1nGJqGHfVL3O/15C0Nk1SlJ43p7XPj7TSz0xHV3fsyLPxjdFdJtraZsBpET3Jq79ECoR3dui9WRdQowgPP2hsQDsUtMUSPiH+5+TmOeY/zoEBy9sFXW8tSfBNpwnEpDH1pjHky2CH3jSBrwtWWHMCquFpQH//nwIkcBxPT3V9z8IFAIDl3KgKLFRkuND/VCAOjDbFuUNDYnw31imEONe3dZOhd7fGpr2gCE9NSG4F7pmcYPvp3q4BC/FpbPYNBiHtrL6G5kx7tNm2+yLgrnOtxBfstbmoaiGz8Q7dpxEjgz7IIFIl4xHIomaYjElocuAPGOcWjMIxtXWtl2FP+pX5nVXBMi8KqrFVoerjpN8drrHHNfW0RgA1q7rLMTEulXRcoTLhcEJzTE4PZ2r60wD7W2j+0JTgQMFmBaeOvl1NHkHtYmSmRgiLrfqICfLiH6OSjYaMjLwLxT16H4bV2t+2dzTyU2G0LnVQ9x8dUzliNmKY6OKHtdJkYxod/8/RRsIrVuwZaqakgXdwzAdAk4Ybt2lFq55AUIHUM9aN7zT2uMYFvQeN5jtGSEibNovKZrXUfZNFw0yNL6A3OoySY2/WJ2ATbKoSRAPf9nSN4/LoIQdU9gP5oFW/CMj18OeEHYRAoHEP/tz87xGdJQwTU8VMLZe+oOy+xd/AoTTeIR4t0BxnUmJSqHi4QSYjxe/fsUbNeOt8nMhpHkZK1Qx4Ktr5n1qJFfLJvJhznHFNQALmhENA+eKOG4X+JymMUnqIVyUK75jCUG42Vq8SK2DACpIocIKiiBCx8vBA1XcbkiFArmgbfKj3MaRwMfyuJXeTwtBTYtpad7CVaL5LNxvnDRLUR7Cq5T1hJpMw==';
  const _INTEGRITY_HASH = '947395fe5460bfe5e47a0c2fb9fb9c9beb855682055199457bbe050b16e8df54';
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
