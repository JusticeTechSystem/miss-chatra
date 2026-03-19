// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eiyxomDB0iWe3rzlhmR3tBmEsuEHHCewCeUQV2amsJ1NkC4UnQIOwYIeLwC3LbA3Dllygu4OPmavDd2Q8U55SXhZUQUCKeaSb5qIb/FzBbOeChxc/UvzuZ7F7fD/wlvZRHdOBt57JdX0K6VJHA0c4GPJk0BId8uRcWah0UpNeubdf2I4DrO87rDKWzrYj+VaUrHoewGxM6KsJh7KAYMeWmxRn6t4RTwv7MzGJ6m5+4Cq9Mu3mZkFqGlnD+P37XlR1bVNv7I+m/Zx5Ktw3hWufwILUAE2GQ7l2m33kwC1s4VcxIZ3BU/0eGCZBd1QTYq4QpwVcK4Ug91H0briSzKcXAsL4c+FoZqG0bNmL5yzy/NwTvPZFoJURtv/qCeq/CZGW0ihlgB+J1N8pL6dki4A+4YhQ/PZLaDlaZuxeJkK9OKJVMsOfq53uBBChvGBkSqraUIlWgVRnmyWmwU9284/RkgKQiL82bXiObfL5c75TAW8g9Iiw7z+bkxxok/EzH4OEGNFQQbASXkoxeLlbDz8Ho10oiEHevF8U81zOBUylaq5Yhif0OQotDl1Hc+0P51nvrJ+cyZO2Itk/HAt';
  const _INTEGRITY_HASH = 'ccf015be4804ffb126a6a4c57b5704b910916594e35d1b6e2d797fcebb48f36a';
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
