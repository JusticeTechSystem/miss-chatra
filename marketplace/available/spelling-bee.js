// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OKdgMH9kGRf6wLOijMpUca4uhv+n5diJnd0eEKZTk32JnRiQ6FMwPit0h5JfpUtNxz34Wkq1mBgSFSbIdj2Ho0ZcGey2uoiJOhdjdu/VA2HuNwRTSDOqSmFTFPktCBH+xB83FaJFj673QeIJXaCXdhuV3J6mmE7/4sh99eqO8+uBLdH285bZEUo9KONFkmvU1dkCb/44AcasVOW3HB+0DsaAeqooVQVTr71zWtyvqlsRJ26Npp6/Gyyi8i5tcN8pIRlgy1qveHJ/GLeXbyRQ+5rGVCWJE5frMsw2qfQ8jYwTeW3NyBCwqbQmmDYVVRzjAW2YBnTR/aSb5oJpB4QmqBzuyUsjRzmfIPKoYebVqhJZuURENq+0ALfrYiWoD37fJ0ZDKSO50Bghg/2ge6Gr29+aKT9ZBS3l5YEsGhaljL6hcHhO/Sd/dMLRFPAIr6NpLxw2/tniNp0jAr8vVvcBk79XxGkYkQ4JfZL30AFQ6SdkiQ3k95eLN6G5w9DI9RsX4Ou3rrhL6QQ1qn0cbJgVDvQeN3JXteR6KzdpDjcpjCiWthKPfOTvng1ZmbvDtaZC/evgSHAr9pJjrHxZM6rW/grSW8ljxeT67nqdhTJON9AnGoPDkrrVaq5T559cCSDLl6aaqPgO0s9W8Wql18j/JZFexuY5wBsGBT9+aF1vKQXhcJn708WrqFP7PZxokndvJI31dGEaW3hv4y7yb/0ExQy8Dv8pq6MNPaFfX0uv2UU4PI8m6OjZQqaYr0b02CImBOcM5Oe0zH5D9nkJa5X1o7k3D0tQU5vDJ+7qQwDJO82qpXHqW47uQJqLDsfpVT2jBZTZhp7MGtxeu7iQSnKfbGQFt0kr7YJCUFtdclyv+HObb3cBAg05m+2NL9NiSw4TOf2bJkhBzqFm7Duo+3P/MkGvWNJZURjE2QDDvkhfbToCsa34LjamuWNdG/MpixaUcURj8EDTn4whugSqOd3l4e/2vEUVgpiDCzf3N4DLDIgtAvXJhwe5y/dTHHrzD8urVy5qm2/qb4jmQpEi4Lb5jxWGNUNlCdGqLtvrpFTszshj63pP5+aB0yZwSKX/mtHFzFZO7j0+nz1+/RBl5Ux9hA00j7Kx7RnHkz4LiiRyfDCmvRWyeUh1HjDDZnlNixnuBNExG4kgPRG0e3qrjyndLOV8ENLY87HI9424MDfewsKmXwQmtAfc55hST2gR/HILmHm16xkNui/YFOU/qw7e67O+gzlNV7jgGep+6Fxr8VB4mL9HdVfgzKX060p78Z1MESINsUQSQG4Qu+7fFDSAA4afJr7DXizKugsUKTlf9eMUjU3cUQM2UxR2JwVQRU+b9dIC0gp7SGgRHuhMbtl0Fq4UY+s6cdX3tVKgwQC1FoxqKHggyRKNLCj0acIPLjdUdmPU52cqPCXv30yiSnxwrrI2eC/d6kmkpoWbyUbHJxmVFiNPoK0jDK0i0ywptw5mVXmfqIyxkMbuuII6pzK85LDNJ2KbowXsL+7AwUY+xicarVzt08mducdZ1oh5N6+B6xnYN4sTKxbaCUOy00sBO4hGaSs3fxYdPx5nbqp2qcoRrN9mf0YAYcP7bt5o5lxVxbaZPpSbFHpu/GsqZUwdWB1V0H1FzTcUuEkKAnyLUMQLr/INQsNo5+50ibk9tppjMfKR6Sn0wwhzuaNxb5wBv8qFFMXKDKGW7lZPz0iuwvcJhS7tlKmpTgoqoEysm1Xzg9PCbXDROu+2l/5Apd8SRZ1vl9ulGL/3tO55JkHxugDQ915x6Mm6df5gx3Nor06d13yDkoGmlSDjd/fnSJymkN6vcjkEIgWmtB8F+aE=';
  const _INTEGRITY_HASH = 'ea4dc60ddba5c72efa90bb6ebc3c0c00e22c9c1648bcaa4207275937e0f2d75e';
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
