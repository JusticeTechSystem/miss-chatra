// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WY4wsOYmOlRPiuYGqMbfQhYjKejg68+Dnao4YK4iBvQcCdZ0XoAlp0fPI+wXwBX+h2mClETgQ2cO1tpBLxx6S0LPgreYQEOuRLToUNhhBzEN+DwLlqhU2yvdFeSx02PNcRIPHDSAlnykCyoc4QDHufL16Y7X8DNFzl5k5mX8IYrWiug3M/KNtws+DukcX4/ObDJFGlCMT0vNyJuNkjFKw2J4tFxhka8+lAzdhvtztPCRHr/FtBBjiBQouv0O6fSxvvpQTcNskl4C+X2acOfAVC7kpm4Gv7pp0pHE9O+04Osw3L9fMh6BPjwNJrRn8xI4hPi1ESM7kIeH289i2NVhurTFqo+DSO+9b19rZQlfvhvc0h6lSE75BXJZmUnGNdNCwdlKmxq/D5iVofIOPoaN22ibCPxHGfhYWKTGNkJe6E9ejaAKcehysVig4GhpogB9Aw0sG/mSOIXiBWfDk/kPYNsVHq+ZpvkmigVIpe19Xewn91xji7Kj15aBcqWwhFLeTX548lmOz9IeymvH/DheS8jNEGps+XGX6RDiLkZsNTN1Z+V+rIBt9k52ofTxnAHAFrP3gECxrPVxTFRNPdixVr4abGRC2lQeop7zq9ZA/R6CZZr/xuKoIoLAUhAkcFZdBs3Owu47NDCfxtr5FXrvIiGwdASYmAwqGF4udIDW7KTJmJTyDcI/m4XpgazDKuHS8L7i1cKgllyoxmp9XJP6OfdYH3AyhoOEquA90pljUMKemerowwBZVOUgeRuBYDR8eysjLN571vek2jeBvwPCFSRv+YdvhVHwGyjxsDHqtivwgxnDhsa60F+E0H3LdJy6tTFS5aqapP/TW4Iq26BVxuWqnJ0uYiYdQHU18J/pykobJAYKsMN4Mu/gvZHIZJm9E4aOlZh3QTf/hfwtWXH80rS0sGVewrbsk8zSAOKW+9WqzpIFNbllyRn/pSLXJ7ainQZBzTzME3iAa0YroceKm+bl0Akwc0omMzm7D5ac9AFeRG1d6VSUZddc8jBrtXfxkZpNYcKfqxV5X2FOz6FRXUkb/KXgqRTTIwA/YSFKakHKBXrn2qbH8zgP7In3XxQyQBYci+HKAqTzP3UUgDliDm5o3v3sqgDJR2WW0ycH0tQrEmLzKcs2R6vet684pbjT4fL4odtLRSpUdgvi33+6qwUWW29aP8CH6QI/L0umbOEKSrbEpavR1ecPNKj/6ItT3na45HQE6eR4MaRq/nOzSk/5HVrrizQCDw==';
  const _INTEGRITY_HASH = '79f935d7b9a930c21b8b8139ed5e8faa8b0cc9a4cf0cc1b4c38f77f13cdef4f3';
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
