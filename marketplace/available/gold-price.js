// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TdLLzi8qDI9JaIK7zPFWMw2PFa74uwZ7ps28ou2IW3n2SZ7ocJ0mUPRqh4meNkmnoEA3hM/BZKjZc1Givl7jdeCJOJQBxBB9NZhdAPA2v4vOkk9fzlnDEcGo7mgzryRLJOVTjicUudUluvUCyZ6+3OLY0qFbmIiugSI4VCQFqUpB94/+yea0GINH6qhhCR9ez1o0FN13br832Ia5+aYMFeoAs1Hydcvq3w6TNaxleDlObEYX0ozhuVWrklLcOfnZkAxqz3TGEksdNzTU20scSyom/NEN8U1q/41/O/mUpO9O6nsgi6ob2n7KlFbcMMKRw7Dzh6GrM48sZWzneLKrhD7v3L05FA1kfCRJgXoH/5aET8loumGtHsPyT3uvJEHb63d/2r9SfnyTsmxkroLPzhsQXUDYPSIzi4XHYeU9Y7WXueOI+bTBesmf69hCVQZ6iyeQSdpzWsxosnkU4nJpSUva/kGuAXizsImRcCt+29uj25bS81q6fLUJ+UPYf+8YtxEk1ScJZiMgXU50cchXt7AZELVqcdRyPqLNyQLMlCmYL+iEMRYKJevsnjkJKB1znj8=';
  const _INTEGRITY_HASH = 'b698ef7b352bc4c22802815b140d3c021c4589c2afebc02950b8e8b741d1913a';
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
