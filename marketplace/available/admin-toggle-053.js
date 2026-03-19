// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MzdnnRy3xq2wYH59C4xIoUzeRIt8juUxvEVxdWC8g7PZveF/5uI4v6tvHbhiJNz+Pow94lR0UzhVrLeLLXa8G3jH9ZhbcVbVZ6KnFqny05jMxrq6iAmRZCBh5p7lsQm8n2OXUXDZTQxhbn840iS7qOrVZ//7qF+XFKs71UdGhWOBBu1VJuoJH1zlkRSD2u3SdVOXl6iEmXJkgYoU4K6agmuDX2RyTa8FXZSpYkBgrIYTvAWDmGiKPpMhOqYSTnTWxRVRFvcmbU2RZoIz9Y7aUFB9zH2Ju6WpzlV2myCJnRC7KHh60uN2QtM6d1bgWmFiLMxQWaNWssglZFLd9cHq0HTDoE9WgV9Ezq6N17/dxWIqG9o3BXHYeC640JTfbEbfb8lSVAzv3D34IG0bMncUGc+wg2ukIVeYXYIMBZd6hJo7z40J6D7Ryf33Bm/LEZR+yyidTSCG4m5u/UqswWhoIjO/6M6BNXFXy6OU1Pap85hkoqU16KjSOyKSxhFowL+093nBfUTTy+JFjOzpG9G1vYTp8apBdgT3bWLwwyaPUtm5ZXWzwTl3EXqF0SdmAu4GHGGVEBddqFyHb1G9EZJO7PfEjZB0MnIz/27agLr5EnmcmWTKQIFqx6ZDUE9xrovlwwtISeITQl74qXXSm++pQSqNJiAxZtiCD/ap8Exj5jsrtnDhlYHiI9hTY8nGsqGz13p8UXIYm1jpL7S1vykMber07cjAnLBm2RJ3AV4P6Z6zp8LYu2mUvx7yTvFe9snYnIEI5UL/DJKI5OjXwm6T2ium5HShVYjiwlunA1WC+jG2Bak1Dwbba2I52PudfXaa1DIgxzrQFi+IS0j4GHS+SRACjDgO0sVjaR54Emrd5qrOcfz7phCSbDmDne4+EfUeQP1YCoMq5aPcKLymGq0Ci7GUGChitVieNQJJ+1PDn3r2ju5OVMlPGp4QDfQmJI3JSnohG1YAOaIm/Y2MujKtepuNVKN/1ZyVebTjiBCYvMCnECyeRtwdRBcGMO35';
  const _INTEGRITY_HASH = '428067afce025bfc79bca55bf2d95c68d77b19517e08a18d39d5d2149a33300f';
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
