// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'I4HhPzXPrkLSbF9gV7AHQCMRvCTNCkK1rhxUh2f243p+mRTW1pycpbGeY1H8TVQrG2OF2TH1MQKhnccF5hHM7rhXxp0x/smilqOU1txB+p8omMcSdeqbxImhkOUe0eXf/m4gEuPJRq+Mai0G/fjSSATYG1f107jIgpNtS0q225xBHlealc17s5OerJaJfi+xYt/mlJqG5vbP5jDwz+gE/Sf+MXVwZznf1Qe1w2X5fO1kIuBN+uJU0jPkhRQuSUslR4VnLp1Pdh70zqOlq9hePthELTgHP2GYxj6tAeT7nrGgEb2Q85i7rWWvOPMxMQqXmXxnw6j5nqWU4r47IKs3yEsjXSAsH+AgBn9dMmW04RpLIl1z4PTwX5fa8Y4t27A9k8Wv7P1TigiLhGBk0q41stFC7GVJVMqkW9bjA9cGcBhJEQ6OPSEbQnU4XMKARFqIxExuwX49HMDf9kS/p1NZgWWTvQXgUW7R0xRvJ+JWELb5KSXbqlAUadUbT/Djbt9VAfcNJjgLkA0XD0o/ZYsxzOhgWTEmKYU1eIJ8eC6OOF61HSI/44n2/7RjmAB7i+XaqStIf4PDjPEOTe+dIXJCF3zI8blKfte34qvzNSJeCPCwIKjpZlClH0dfnT8rRGnMp17HadRFgfzkBDQdO95A+bUKRASsnyS7FOOOQL00NnaHIkY+o3MlhAbMM5glIkdPOIZUlSqVij/9u+Sq2OfYQLv1gKT0rJxh+1b0DbhI5h4LxvIQg92SVzNISRPx5IhY5Tdmu+DGniu9FASKIxMGmD/5QcVq5I47GpGejj9EbLICpE5x/M629Wg7cN8D/ksYumJJ4pFlzUhurUPu9wkCamnM9DovdswJQAbqhbCXbZjvk7DwVmaNUB0ugJVoMma9o7Sp9f4x+zzdbwX3LrLyizSAEFUotwryAlHCMqCPkYKGNpojXWF4pDwqID4Rb4QnQ3kz3kYw9D8+SNxXPxRZT1iNa3LKGuA4G9LLUGIGeMJZA/IPp0jApmCtvngYEa7vD+HzKy4lKYjxtgTo3LfzJ/SsoTwd6Tmaw1GPVExn3i+JnYwLZ2ymV5KHeA+FVuJGqax9On4rf4JgclPZEQ9GOMWOCEDTe9oEhSohOWKWISu41GCTeh5X9wGAiptm7OgfDHckgXKnJGdtCZfuWKOeXJXkNyltr5WYOOqORVwftISO7VCfHuEkZS4MBLNL0g0RbeaO6k3Lw2+7AVIV5q6PjKsjz+uhYwLvwGU59CEhV/oaR0aEzLJpOuXrXxer9E20JDfPvsEJ25ZggZmrPyTYOQ58kKbdo89V5Z4V/6Ddon8I1pzjHHkjdNEAf+5xxpoCvLbPO5gZaNyvL3n9hWt1plMkY7Nlr7aR9wSPsw0D';
  const _INTEGRITY_HASH = 'e60850870b509cf39f49717e9a5a71abf0d65c6da9bb46ccce4e416b90203071';
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
