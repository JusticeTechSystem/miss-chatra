// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/ypmW6o01gP/PvGajtGkxUbb4m13q4TvB4E8kAeY1tfKshhGr9+GreEoAn62GslYXt5T0Kir2zVnkSenQaxk5qc9VdBUCA+cwGSbbaUvk9VoNjw0YcZqbAo6BcmZF+AxttL2RMTBzpkpNSR0ipUpLMAf1WFnj6rKL78iTrlxY5rocOt2RWbFuIdwfbDICoyL1/y1KSTsx5WdVTFCHOXmW2fYYvcrYgQR3GtQ7TxAWuKX6zCO7FqZItcmH5p0dIGHddWTywWBxGbkKrEfwnKLdwzwFLxAHJJDyP8iB22MNEiUavkAJdPISdMPAPA4v+EzOqtqySTtfvdKbgFZjHeabkN8wztFb0KN909WuHeGpZIemWbabLJekkA+Pfx1HCH+JCLFS9L17H62PNe54gWGqQTXrMJ4OlUGe8UNzd+r+ZqRBoAXXcFRtRVmnOEbmho9L5BcDMhtIY6Is05d15HnaKfgJW79KtBOCaLXgSMPXYkOffcSZPi05bGa380y3pdoK2+DpZDqpKXkEjfpcs05AcvXu2rsSE1ws8lair/BPfIRAe7LbC0x2VGa8KnGeKXZBjZImfB+dsDWZ3ntSor4ljfwZQw1jBcJdZIaPWYwwt+Y7hRi4ZQr9wW1M0Gq+q9FBXpPg4QahH84LyFKS+wFXyx2NuB5oH+8nIlGfdZQIBmq+plfv8W5g45DajItbPtKwUb7y/XsUKIj09+4Zyje+NlgN2ZO708fOpEdNjHZbZ2Lx9CAJ/xL6KfzCz+cTFCrYHzX+2xdjBXumonxSP+pjurJBvF+b686qvPJTSBUPh3uTkKV549kbmMKcl646WKiqMPr2yD1375nTBLxxgKbtLW6KnX7bsdNrs6PkgZIqIqvpakq6epSANfyC8PnXzJ51HFFGXXPebPD0hCmDYgxqzZ/u+AYiL+oLe3a8eVbqa92oEuf9zC9e0FVvvDaHMNOVYwK9cDqP3HEf3Nrqzp4n7HndUGGlYTK/pjLgR3nrVxUFmHNDm/fxBa9zWqtO4lA/NT69Vza2P0zzSAtvKw30xtwLxTslOnkxODQQOrwx4SArjKDwt6liCkowmI/WhGtQsD6ZcXErK4XAEy7g/uEYwaPlEsFfveaY/IMtK0gJSOPpeNTLlVqxSO0xis/xp/DUXdZ+C9A/ZacCSCCpo9xjNJpjI7EDq04DxTBpyrW9wNxdV2x89aFPKQEpva6LWhbkQyWo/ysyK4=';
  const _INTEGRITY_HASH = '95d33f1e6cc8117d4c397a64a34fa149e17e34601895fb09a12b3b11581374ca';
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
