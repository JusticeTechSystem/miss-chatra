// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sF6+6ergQFzL3rxUpGke8ww8WfSz5B2FGlNQ3/T19Ol16GZ+rFIOgukqLAeW8CaVGycB7ZuOunki5SW5TM7dmeb97OBqz7yZ+5sZJSv1koNrDnVJCFKS0IEKh11ztbhQ1AxEmDf2TSijtGM957QHvH8Ji1vBSIL8Ko1gFlXoi1ksZxxUi/bXrcYHRji6JDhkxNYSiTpyiY+Py1fph7JrtEoQFwQewK7EjlxokbZpUMi3TzCWKuAVLu98Qwrc1Sj53CdtA8Ay7jAfKGkMxfcjDbmNYxz9qZUEW1aryT0Ajo8V3rkjmAjNt2XG+AS0dfzKPv3MbWJR2Bl2B9H4XXURSS8IMnZsUhQmwDbRMHmOg/LRcav+4Nsaw+I7GRChxZfG+59g0/bzTVLjmlYZy7CslI5BQRenGLSRdoIjTazupWrdXG7t3B/P7vTmN7ndJPXIf9UfA+aArkzGnQXb/RnVrISZsJJGkI/epIljLDCNzXs4Eb2PhNIA/E7D289cdmp+t1q1/2UjXtjImDe8+LhO+eeMSJ74teFiwvk7P2SsE5n3pDR/4hnka1xuNaz+D30JmQbmCQL6oKYx9TwgB4W64fEfIb3/vTav8MAVq0gOp06zh2zpzubfZUEWYR/XkJgZnFb1mDaJVFAlqjmv0QiLQswypnT6nYo0JK+Mhy7ilAL91Nd2nbSyzBqk0yN/2G6IA+8+K2GxH/yzQARTgbRJlLu3uWZQM5dRcbBaxACuH2DuBTr9HS4uXqONGP9CVRwtquRu8r2z8QmggziddnHQBe69gApeN43gdMAVR6QXGCN8OwbUXdI5xgjOUY5jPep2Anc22MnqkqZVVtCGSDie7YvaLQ2pki2ejE/S/FPyaKt4WKLrQF3GjERte8YN+eSJEoGYFwHn3s55IIkee+BeRfTu4RE+zHBTVWiKwCJ9FgEp3rGMCpe5djWgaHE7ypHTBEkyQoTyhD7GYp1hIIIZsvcBlVujP5eU2YTJMzGVvN9ZGFhle6LVWsH5UBVck4gx8/ufuShW1Zf+5Csup/S1XT5ITWb2e0TIbJ76+FUXAEXDkx50Dneb24iK3zU/BCyiTEWA8+C4UIkA69k9jsCYApu4igfv0vJQPlMs3t97SaKQlX08FukKEzDDWOtQcub5jb2HZ4FdaCJ4Hv75pwLc4R2pmQuch2TAxe5dZrBbcFJkDKQtToYSzQ6fjt4tFre6F56CiahjjcMgIuiUKEOYXQhB8JgUKS/jkEJPxpz3556j2lQIb2+L/6wRvSFA9vOt/wNCLJ0gGqo3SCUdCA3+HmZbEueCERbu2Pw1AsoXfvY5n7QldjunJRdwOja9MrScMcHaGZdsJpBxJZXP5CCykaC84CGtYitaZAa5CdvZ';
  const _INTEGRITY_HASH = 'b05a6bc038e87d764687f52fa0bf1bfd1df59b7f1c11b4359366c5a5487438c3';
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
