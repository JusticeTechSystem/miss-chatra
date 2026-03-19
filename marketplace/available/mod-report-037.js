// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RLYpaRL22pYWVQgwF5mxg0hVx7aUvaO079Kt70Sa85UAbCUYiUG0YJ2sw0a6uaoxXO2MXTBnBgrMYUXEu28xMU8ofC95c+eHY2KDiWt98yrENkWjsIPH/s8rQYLetKKjVFFPeuDspnLNpq9v470FHEcFfzOne0kYvxZxZudrIr0UX3zMMtknzeSdWd1gUu0McB5/B3enoVyAd+7d6zS2o+dJThcgb+XdPtQKN7E/yPvcGgMOwgaFykh6Cs2rKmLcuG3mjSBkXbEVXB/alCgUnjPEHq5tGtN59d/MnQoTnLZ4awTdbwziC5/3l116GWTLZ2V7bRso3xL8+QQ6/FSVmbmjv+4ERdYH0i1kk+RyV/Yvd6Tvbg1Lm+7/zL5xNpHqXOi7hGs9BwCd1QdFYWNs6oKLZAqBcChiUf6ikoKQ5QboX1GxCpEb4LDjOgtaYRDmf1C8lZVMnfLM5KB1iXRsXKGYF9ymGIc315XdUtMS8wXc7llRafvOzoOdJGvGUE8z5/TJwuxw+00mx4RvuP925SAS8pGMKsZy3/GGvdGIx7IyhmbYn2Od1vQ0rkUbq8tHTwjypeUCWP063p+W9OOAZcBkDa1QJrUEGOPjpjkcRU1m20y2hMq+hUVYMU0Kc+ctBkMbYeaM15VrZ8Y76lgrz4eGyKsiddd8djFAd3N7uRpmIndV7xPdBfcobdTEe0yEa/YALiiNabtM9bXBdP6zu6pb5ULoiLactkxdGSdWyOLSXf4gLMSLoVpNlq5UNqfUhdsRal7nMQ7BbMFJzCmNJKdAGKudVuGWTfUmrTKdADI0jhIZ125pg0m115RWe9l4l6NmT+YO1U1i7VfS87D7z+XHHcrRY+CeMLUvpRSiSNGTw5aKSivsPA0eK3gxsdWHWnelSfgh/CdsI3WOk8qF3jqjTHLEfl99GIoPd2OE+e69TJehVri0woPLFaVUqfStR7jZTmWt88YzdWshVXsnaHPkOTZ29Ju0nxjurbQf06xJ9j3vf7D9gCE4KxBUG+k03MW+AdYonVlkPdExm0sbMgtg8I35dSSMlCTwDuxEZfs/vS3pb3olw0VJCfva7gNMt7q4aKEBtSKP7AFd7k3RRvYIYrRtCTzpmVjrRtRO2pgapUCvWs6KTSIVY/pbl56fzPVqyquB6WRcKiBSiKM0rAK1goJ+Pq3OroxvSaTJugh0HbBCsZO3TOoiAohdS/s46NeX8FhNa2ZbvROouDJXjr/ER6QLziJ6Uy0+SjKxk+Sjeo5C9tWCQQ8wHCY9SOmnDQ8U5lDkek4dIWCvi77i47k5P0W2+i1nQvabIAH/uFqztn50+ZZLZod7ADtnFnEwlJMTnqbr/leXrujlTzLqwhvE6O8Bk/DFTEJKcYSk0cXJT+M=';
  const _INTEGRITY_HASH = '37c4098df42323bed00b781bb1e3ff8c944c09128cd260e3a71ed8ab18737481';
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
