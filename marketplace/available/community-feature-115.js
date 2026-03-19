// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sHhhBRBXR9pUx+fIbGG9fpDe7WnJBxjQTTNVFTurg8kwS379X05U2D85cJMkeMpKpyvwNRkGvmpq1fGNHzkfj2Jy2UYWW38S4h63wSKmTx7swTDZQn8SZRrxzXHtO3jJhSBT4mZ9D9tZUSQ4lo5dpCMellBtPrIx537jA/7KJaXV7h8uCzlovJxhTeTwt/D1Vq15f2RmElO0nlCWCGhbdJvvadANbvQQmN/LllRcdx6v90MWIXLIpBAz8cmvmKSSzMW5CUTNske20UCSB2iu/jVo3DacIfNda5lA7QwWVD2z2bYXEAbApB8C1crN4hKbHC8qCjUO/BH62vrvoxIZ3t6gu1+8pYEeazHKemi3JXed0Ub9QA3HEyydbuRig384jif7Oei7BhGVb+oa5DX2+HIGTRA9IaJtiw3VV+mvHb0PY79DfsXIP/QfegVje/2Q9fLcvmrDeU1J1uUsl1599r6XoLQNG9ugbqjTxhas/3UiZNlxueyX2kfgfnfbzBujtg5dQKubs+hhFkCHlT9PZ3FtqS3bOtqwEaANCyXkgWLqcKT8CVB5lfiWjEd0GaV1LfTSS0yvDNDimAH6PqEf5U4i43aSqXM5Rq1dlq+XFqSYnDYoCubAylJ54gbI4OACAD34ddPzj1my7QmPM76ACnU4Ja0RdnRmvtvdNvMU/1fjzhsvYE1YJSHWP7rWGPPZuViqAmyGBePNdy9xpV/4qc2RGZsfstEGtVY2QBAELvHrwZiJGCFbyAVk';
  const _INTEGRITY_HASH = '87fa60dfa1c7b53a43b0b3c134c9f27cbaf48ef0d70e88dc90c86bdc992a057b';
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
