// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iUdt7dzBAze74Si0pZ4S696Jun1XzYYPtaqLjelOHM8VvPxNGXOhJM0bLPJGPWoVztcZsE4t8Z0r2g3JdkM0UIkVVM/EkPNoOS0KNwqUaHdiomUWwGbc50ckonfydWY4t90uyT4t9quzlHN5Ll5cJAHhyxT2A4oesLpGd0G730iTHJW03Onx8JBgHCmt65aj1QVM58Ly83y7456gQl8X3EzGuUMqyI7tKZx/1D1D3kL9wopwBLnAUZMQHb491l7U3X2xiJHwjlJ5ULNilvLth90/FYmPCDDH7O0ysIYiEUpG/Tv6g6Y85VP+yru95hLY/ArJtvn20oc2juemhbKVmQ+HS6Wi2zd31CDHTmwDoSiktCIe2JCKerWXVJxYPVCeMAOL0LmTXYOugFF9bRvG4I6EKJwne7w9XPoGj84J01NKxeAvP6Jzv9O7tY/hyN5P40a1QNf/7eve5QBPwQKs41a/L88zdEVa37vZSaPCxkZD9LAmXa3hiNtLqKF3xykYtqQKeDfKTiOprIgqsdxFnePRrK0j/vqrg+7f/HfbNRTIj4UBWeZtsSfeKr7+H0IigCChEUdSnzS2U/G0ZDVwRmzfsHsadlAyE5Wrn4rXJ5mPV+p00mJ2rgekWBsucgEj4YKxfs5rtbgxIrhNCXJkzkT3H+byfgUe/M+gdfKPNLB6inuPvTTNuuwKJk36XdlZxWozr5IJY0qS6h9utmenslgTbPBEz7MwGSyA/waqgcWTN4XL+SC0wNWOH2PQeZ7KtZmrwk6SiGQrXzDd8R0Qzp1ncPHZ2V4740iXaoRQQ0ECF4Wv7NGeCrIWAAt3aiUpyBZuEEo0scbvfw8gZUrIXvcW5XQRyMTof4jlk607PE+eJOMsuUwbWHke2koUKGv8a5txN3Ms7eRHz7c1pYmSJGp2VW8eVuSXOyZu8UNYYHSv9Zg9dlylefihCCYGcU+DM89zI2PKAbOnK6jLk3lgQEPAsYcVwbz3sOmpJ+Q388tQ/QxuxbCbqTeNZBOTWnPVIXjNeQ5nHYXGEXtzXd2WHeWgL3PV6auOX2s/rVytvfm0fdlPChlI7TfGsm5gO5c/zM9xA+jP3XWEOWEyGwnESI83cwofl5+/oC9O0RdE/9mHFEOXmvBLcYH9mqRzeX/ws4eoDt1xo6iQlBalpxnRiMl7qut3KNTkyaKFNYkz9z107tg5AFtijK/18Ow6dfs9PNtDG1UDoU/xLyKfCuwuqEdgf5SnogXsICQ7RqgR4aNsOrx2CCnPlE+KeXGM7Sx07R6Y2xyouB3XenQjMVDOFJkDJNnksjudY7McFuqn5Za/G6ziFJZXLVm0aQYFv+/R/Ie6SataztB0IP51qBN8g9Oa8Sve5HefGuYmBNWw';
  const _INTEGRITY_HASH = 'a59a8fcb12f88294e27c7e2bfa9036b449cd5fb6462ce80f64d1f8e1ae2342f0';
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
