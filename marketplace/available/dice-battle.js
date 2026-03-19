// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FF1IfUbxQd/ZZICh/fGsNdtjhc7p9oecHlmOUY6vPe9CLmghVO6F3aG14W0h4as4zB7ZqkzsxqbrkJHWfcNveGjJy7Y37n2pzAZtYJktNueQzNsWh+laF8WH8N+derBvwLkNUvxhmqKwIidc5xIpNG6hM2Hsi84vaAMbahXWpKCsTxzkFpRkfgmazB04yk13zjNrSokI1SE3IhQlMO6dy+DxXbMtLkPMKmF2WjWjv/kyZYMoF3DnQT7N56iyEav7QR06xOcjV12nKkVQOx/bpb5dHtu+SNiwASXMb8aNw5IcRtnlaCpcgZ30EedK1UbLg+TTJhCiaNrGceCkqoDlJeZSqpmAQDWL/3KUczO++yJORQf3AQ0yTrr8emNDRFHWgXooLnxUHYf06uXYnkAgs50Q1N/tqrJzAVAeZwNX3sXWw9ACQN1RX8/KPW+r4JsbfSw+RH7fcGnL01Mk8YFchSoVHKlYbODMHqB/StDbqKeyHJZFieoghLlGuJHl2OTr1tNyCIIunV9bzeVYsG/ikIkllU4ejVueImYZ5Y5G5XoxU7xEIhFps0aoa6sLypCCx3MeeEwiEvoI4H5qnT5YisDxLiBpln67sWTRWUoeuRq2w7s2F31mVigU7fmX4dw2/FG1RraSBJFPbui9p/t648nef+/Mt+1nOgPE/Iu24V6p+0NKCra3ASWMLwFjnXFLhgxwDoE8M3zKiImoBQKux+NWFhV/s02BdmrAqigJNA3+h60cc03/73VTbh4vKPorqBttdI0ekrDn9IW6iHNcKaXtAsuYlkafTYTQmRPsq/NJvSXplvEY9dh1grNzA7OgZk8KuJqATAYTpv6qF3X1S7Q6TQsb5grSQyMv7jN/FotaDBcrY0TUS3RNYCDpRAnR+OonTpLS/VZzr0jGtXDgfx40OiNzEnMTTWnEXDSl4SvoUK6aTivDQ2PfUMSLfctJDLixi3ChlyeWhZlTiLHs1pUAF3VtyVjqm78bRsIxL7vZcN/eAQ7P0B3jgtl0uqYFB2plr1YMqSUHPvWWu8Hq+kR9nlzDBlRmMzI+a8FVhRGHeZdhYXeiNTAmqu2UbFKtEhCB3CD/zDmAb2ujefE=';
  const _INTEGRITY_HASH = 'd08c29bf7cd3b7ccd7d3e2451ec0a8ee8087dddb15a9c51710b96b732057fd70';
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
