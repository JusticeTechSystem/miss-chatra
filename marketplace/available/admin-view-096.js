// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7O9LU45LwY6XQ9Qx9oEa0DiQOHV7O3unu+BX3kSVXxmp6WWz3l0Kp5PKU4mnCg3RDQ5KlYdkU73uyRoNnjNpSG2jtA5dgg4tYwWKg+QCXQlc01MLALQ8iDzoF93ECGdBT81VQIXYrKPdCE0BpWiD99s3V5NNeeponWSvxUDaQr7U0ASN7f3RANtWC+doYJY9/5hSouEekyx0bQYIRNDZpqtsqf42H3ad4BaT67S1KLLpqzaHXQNq/jk6AphWQ+PSxqljJ0GASyCyxoUukilhmQEWi0nOKdyv2l/HtN++klEQaixc5HutrSMUGYnfmlyllt8T6yxK9nrYnnGy0AiJCuAYyDeRMu2nu71MJaNIql4xYHX8Kfl3ibrIkenJavW3TCIfg7kYLxlwfXBPyCTmGFAexw+9oFrUvQrOYqiD0lMHm6W5wEoZs7iRwdOXR2FTElUipnPD9gAkMRGI5vRJdlxRTi8si8st7XdcigU28/lRKHrqezISwKNUfpA2xRiAD812F6/HRlNh6MlNeixfS8ILh8po/jcT6/XYN39N76dt9mQbtHRph3ODOSbZJTQ25OJ1d3xLlIoAtUzxhyPbTTDycO7sfKa4yvQ77o7GdpwO+BVT55gYjUy1hbPxg3S4+zsjJiMVwmvF7ATBK6/SVlMA6Sjiyzukb0vaPa78As6v2Ea1SjKVtJTCUoaz+nQGa+tZTp8a/JIi4z1ZFZIJ+zEoHko2PabEcQ9mFYOWmfnLcuRxv+MNc5PeS1tdNGS/xXMgDvY5heWPnsvqHJMvuDSqDjgg/F46GS3waZw/SxePqffRU8iIXYK4iFKsCX+n3E58+o2xXFe0ytXiYkmPRiYM2jpQzO5iBzs/g//j0lC6+Y2qO0F+gqaHQ32axwfZEaLUQeqVEixQy9gXs1MKpzO+JcS8web3EBcW75D/VWOpR/cKK9KgkYGB6ls4tcGQdVgzKH0EYTJ3kWRBlOLp459PurZJZDY+J8N9vbwkqg==';
  const _INTEGRITY_HASH = '1deda98280fbfed68a2a6fb773e1812bb4cb7191508e5c39f74cc1b77e0ef7c5';
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
