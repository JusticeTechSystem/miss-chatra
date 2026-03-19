// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XXO7sSpstNcKtqho/c/nCXsKesc5V/h8mlch65NXyNCT96wYNMmT+qoqru1y1/R5vvZGLC/cZfwBWR36/iT9j92ufMGl4h5/9pZSgtAT0ShLhZpYBZQEN7tmuK3p6lUnPgClVaB4AfzYoqayjMAVjf5BXJuRjPR5lPw4lnXnIxQGItl7dUArJSoh16SrtBdlxJQXvLyQeHFUopeoJey02RM6O3XzW0qX+5yW8ilPPa34qqbQwekQnfbAt/MBtiLBG3cs4I7DTbwLqgRPA7hISmnY0TZ4PvazXpzApZQwg0FZ+LIDcadhLU7II7Gh5K38Ya23isRfaSyKXvja7aHMwA1TV/+BNWQD9pOiuyuz23O90RcdHFIvRIAkK8Pt+IXIfnZx+q1/ajZmlED2SlzmBpMMeOB05igMUVai6kVMLr1eG8eJsnERC20yvQXBCUSsYdt4NT8qiJqDYO8sSvhC2lpOS5swixuKRLSyPDm7hejlAn56V8rqwRmsXsnBpbapvOkwXnSD4X/OutkHI69xfAEAAbBnKPW5Hpl/sXRBtQ9JVMrya1+f7aMygPIHPLrtvHBdUO+44uolwOi9gJDaC6vu8TwhhUxwf4Ui6iIHkkUHND5KV6fTdx5scJ9NB2k8r4+aXcKZGp3+G96DBMkGwaoK2x6FPWww4N2kdkQvduD4cn0/Eb0Vp0lFZZ4NAMDY6oGocWiIXFVw0kZOIS2ObvMNLoOcd74CKV+3u3GFfsALXEdIpEhsTPunm8KtOJK4XDnu5rq7jTaopf9KA4LFwfnV6a/i2Q9apeQW6MzIae6p+Lu3TtrhLxzuzKJlam3DXpx+U+8JzxBEdnyKXA6Gr2+sJ4iSADqIe3O+RTYLK6TLb+mfLos3dxKko0wnbJQn2ZS73NPteJ9BYS6jybbII34E2ky0W1N2yZCv/Xdq3TXhj4XPV4V4sz0pOn+ZzwoeGzRKV+fJtr18Tlm/vfob3zB60HsUjzAgaWCrdw==';
  const _INTEGRITY_HASH = '2409076a322a09fb77fa4c8e1fbda014aaa1934f2d1e312191192997073bcdd8';
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
