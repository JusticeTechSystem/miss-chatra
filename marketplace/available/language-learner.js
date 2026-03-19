// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jMj2DnAU8+4qkk027gMQaTe5+611+GlecFQd4OKVrjgIt8LqXg8HD+IJyuFgWm/tbZ9ugcwnfLjEGRu+ALt1mR3xRC8AlcO1JTlumV1N6f342AMulBj+YLO7vrF4VcUHGunYShNcas+LJTa4Jujm4zI5HSls16Y6VtCVFaPK1Mg6l+ouhIXoa18fkZOnre5AD4cQho1xHgL1WFjK3zZIc7j2jHNDNQzdmf704MGdNbMZ3ZBfYi0nLyz6eNpvS86BAOM2ueRl5LHEQ4sX8I785uEUKEygNvgNHOCvt5htVGd16rqkXwG4L8+UQrSq1oCPZJnA/4gqNJzw1I9HkiBni8olFXbi5Dn/hCrlPLaVP/0EQk3vYUNk8DesE2HDOTFvUNqpYcBXXNBCLtc0s0LRcIRfX+GHgkVnLLLP5Ge7o+ZPm7gYdy8TnhUDpcNlZoszz1yIoLuJp6ekY8PLOCAdnvxu9I1PQj22QvSHKQXV8Ob0sSW5j+jCkHB444zRKib7W7Z6saJuqZShAbnaAxL3RVbDYtLNYi6otW60CqpBAkZpxhNo2RSqWrvDU/cCZrCffGWDmc5ZQmHiGnE1q0Xb47TTT6K03bLn70hxh1Jgg0TXZnkf';
  const _INTEGRITY_HASH = 'bec95e4ad7c35d6782b0506fe57da9487ac7ceda82105456b8e8108f2a15bcfc';
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
