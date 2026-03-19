// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MTxTsJW9Y/xOQanu/TYa+Wv5v9+kB9bKsBKRttIdOP+uJeluL9L/fu65TFqv1fzY6YcZS+A1pcx0lKtHhUM2gDpp/+HuyHej2r0087CNCse9zJtXIKf6hWszh9dINIfcjMsiYIaPDJrFqEeP3fByo7WBhZgNOPFfu9DGfwHIPxevYOuyCIal0jNtzaBcqGVdY5cND20Tr2JghfmVsp3g+m5dN5hrlCPK0M8gWxBlNnDKC5fm5qgmfqu5FBYmaT5otrJbQWjSu831khevij1sRu8VynzgPKTJGlTfWm82MIPNhMgvA1xkW9VwGaEF/Y9IoZjEAuddOJBuxgyMRa4EotYFC0gl8hOsGWA5iTRXnyitJZS+RWq7119W4qINKZ8ChNtjUpzqnOZZdyDxELD5pxIJ+wwWL7fhe7hVUOkj12cDtRcVmodrCIiHnMJsUqQzkohW2bpYO/z4xZA45HI8nPv8OwyQHOMzClbgieXDGv9EIK4mzT0redsrMEvXpW5jVeVhgqzAl2S2j4+u/TfP2DnWmHuLVfgm8mVXXGUZRwXB7+VYQjtbu9jvh96jwBpeVAmvS3LG2yYGmxuqj0LDys3xvaOFRZaomwi5bOaqfNrIyfP8xjdh3udYZvWipD5AncfOQat5tVE4WxraAsNYYJf/e7//46jv6ZLMgBC3Hh6BwYuPWbu2MU4eTLd8VJvw0w==';
  const _INTEGRITY_HASH = '20cb3fcde6555904877868f3fdaa09d29a16471872b52b66b2c6fe316a4d22cb';
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
