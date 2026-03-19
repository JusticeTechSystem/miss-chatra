// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ABqw/G+1b070PVkJtEjrLX3f6Gq2xRiLkE863o0SKPEpJ4Wixj1BxQmcBgektQjqdkiz1SGAt5jlI8dmbB0eOU1uY4n9QB4U0++AiMqgc6EDkIiL8eVItS6wP9b7PzmxLhPivSleARWl9k7HEIRj5aWGvD8BzKFGhjRFL7dIX/jQp7h0MFr/TdTwuqYCc/A+PuAXKVHMA5tYZXO5oqaLpIFF3Xn7m9AUU4zrBk6310TeVmqDF1Fp7knTgrImyEBlQWZM26iL1SIyuMWwLsR+49+GjyabIrScH/o8J36wKLUvNrDtfUZ6GiUC8gxnDddk/EUh7JW+26b527UmFf8O8uDh4HRZmqtK+OfgBVErN0P5D37xGlzG0M+KoUX8jOQkjUeg0xIosdlppc4nZuGcWh0IK9tfr2nhyxgB0H8DHp0bErp+6j7U7y92mohnT658CzLmzNHp13o71lw86eao/m4nDpb2+2K2d5OAqFr9YtWAFv3j+F/JKvxnkqrCdU7BWZhdD6kH0jQlokmGHCPzMs3tqhCCL4Nir1HzMnbt5f4a+eKcnqL4c7rL9jFwbAPP0eACPl+9UMLOMXXogfNGqZEbiFgM7DWuJonkQ6VL2i29xzhHf7ZiC9nr5T71HbQDH8Sl11OvuT2+MmA4AxlA4BhiRPfqxYF+XwtyO5XAJgTe6a3tOk3ktrsQdb8nR6zHy1owp4N8hPdvtDaHduiMk59jIeooJa6PwnUqOyGxQIoU1BHSpSEcG8CWYxHj3HUIAYnyRK/r7NQiotAz4GIXfS1DE7U1/Q0ELrLGEOJcrhLtbyveGTCNylWJazwPnLipASOPz0vOMO12G8va4828Y2tVae9ZVSmNLC0yYAP/A8rmyXExPqN7ZoQJLinnF2J4FErAVH/2KqNNSAHksaUA8YSF/wlJhLgvgP1pOVymy6N7c+lIGD6BxGfrzdA3cIlzGo3ShTLg+SJWuA4LFBiJa7Mo4tXNaiebb0YN3mmQ9dDa30IQAnoE7lP+QyAAmc484aBVYQHcd+C6hbvPyOONz36Gqt+gK6RbJZMKh4+TCO0RlVqzARS7LS7pxwYYVPQIaiuhf+ksHTmQ7m+tFxC6tBWqlszFx42osS9vuSKE0/ZN2eoH4RdurxF+uosSy7NGG9wcog4OGrtG1iFul/m9c98J8isRQOopLRJS7kV9GAwAbo2Mw4Fxh+giKLTDwzPDvt7CgfI1G+hxlz22j2ofvI8klGkZ7a8T7yqRFMhM2NuXb7Fi32xEvyHbdI+xBedSUBUtQcP8a3ttpDDZ4MAUoCRZi8CxrYH/8LBkUsGEurTfraaktanN5nk5oOYMUAUz+gkgjxsn/KYjkUfP058gUFfOTXbyMAizIERwDq4U2v5bp1F4hdrdWA==';
  const _INTEGRITY_HASH = '62d1a5e66085f828984f5bf4c93f6a13676cf9efcfe5b50809a1889524d03204';
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
