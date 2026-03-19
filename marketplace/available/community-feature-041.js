// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jwML1Ukr4sla0oxvI9gsnuTtlIA2IKFQpRdJtgduTz7B2oPy++WSL5ESb+azwQThrITYCTrdPYLhLJbyPm8veRzjBZsRFedXJOaeMrEGEn6Y427ds/8uW9PQvrykHiSZGFb9kOyi8N+0LR48YnKhXu/W44IboAKC7hoi6LmIp/U1rPvT63zn5pecZ0Gcbvo5j8D3HMNaGZb4fsWvVUauQycrWESI4iji5i3a9epfCb8JwgB/X06Af761BFLP6o+rb0pXGxWwpAL4YjZkypXbPAzfI5DtdBGMUPK+uQ2IxmRdJwFUea6f1x1aD+/lfFUZgBUKTmwT0Gr6XtIYb8BJwngDbK7ZhT9I5L3b6HaunZYpiLOjwPmTSlQO62plewKCoqpLAHV/urz62hUNGgzv0WVwx+MzCQ0tnPRC2aGovO9AGnbo+opB73RGdp+J8VREV7vXkbDL9sg32TZSPvHZK+SGeDXHTsh4rjhVjNxjw3RtppvIFzu9b/Sr2XpqseS3Iv6RV47XwLBEQjMEe0+NV2quARowYZghOFIEhzawSItbV4X2fCso6eBhvpfD98xdpwIvStwbtjz2Myel7K1OSh4ApZXqZQgWi9rjB1GP5BW/JcMas5D+uPpQBqz1SphXVz2qo2XMK5xNdxSvn0G1Px/YaI8tAEUza+PpsD8hGF4UuUHL9fEXtda/FYedQe5t93zTaEak4r2crOp9WBZryOkOUfI=';
  const _INTEGRITY_HASH = 'ed5af54152409ec111acb94c7438079c98033d2b70933cce25e8cf4fdff06523';
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
