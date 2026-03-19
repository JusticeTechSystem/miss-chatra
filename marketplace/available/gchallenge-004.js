// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'z5Kt43UA4m7l73W1z77/NymjTiO+x7Gt5y8a8JhfLLto0aMEsiwkLL1ToesC/j4Dsv/CTPzvFw6cQiqV9WaGgIN1slfzMf2krs+/6k3Tn6jpiwIFtfTGl3G3MX0Q/2RXiNS34rXjehqlvDEjB2BPTpsl8TRWG4c0pKumI3WG2F9eBawaUYVVCGJRKyGdhrBdpkOqedNj/QlDbN4FbUVrZ9k/3ANsRSPuTJfisN5wrIaBEJHMDvvDGW9k1temly1M+rTPvqFdF2+Uve0Gb2HAsqpNXYjUT57Aql/t2LWLNpzjk9Ywg63fxQPb0Kq5HcMuEzFc61+GVBBdlxfhLeoHkw3qgSw13eebGy4Pi+7doNS6svpgrV5KkztMS6AGAbdeNhBgDuonwKzGzC5PZJ70cRC18Z/779464ZSKpgGeJpjFvJOSk8YAbUjt8VeQJ/dVm8NhuTM7MT0VkKdH+M5hp6VQ3mLMR7JR1VJRgaXTTw0j7DvdxTGLOf7AGWU+HzoM+nTt5h6XDMdUGF9qa1Uup4/lbJe4gKS8MiWCw/7ppbWQyl8KefoK/q8uEjdJrWGkO9M9+Iv4c4IJpCqOXg8XC2Y676ECICO1zDDpqBqmmorKvbfivcOtwMTiHlb1sxk=';
  const _INTEGRITY_HASH = '303a635fcc940c010489ea61b2a9660c255185df6ba28fa59ebfeb3d9adaedfe';
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
