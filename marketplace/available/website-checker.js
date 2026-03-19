// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BjhWrOwhW1aRhW7AJNkkZcQdg8AiqFs5J+B0ixBf10GwLBVzxubpz9QnJtSDC0yIxu1AvBu2RcBc0SXG8j5VN5HB7e+jxY3ubvxlZoeEKR6exAmOYHxD5lS+xBUQEWnW3ESInfmmEw0MxQoHMNZslZI4qmnw9lC/fBoza/hqQ1y1AINc5YJxtus2uUOLrls2cyXNN7g8Zlf8x+9odw2+0KX0y460a5XyWQeLrGx31dq6FIwR4taO0oFCNaSV5DSv5vtOt48kl/3Nd6xPyji2bcMbW+Rjua4DWwU8Pjg8dG4BSI0mYwcvbfGR2o4yQcnhsD0tbdtgiNzMNvHd27dGR2aAuHSidczVAMm705pui0yLJJ2NBssYeP+iIxFZYjiW+8VJ8nCPGRbSHG+i8gsy+0PPdtXZsmqy1NYBYVnIVlR2HaoTCFLp2OXu3mq3cdTR+/NTadqz2jBRf5FdTtKykRYWWSLvTrVCv4b2k14e+/Gqyi9zcjOOG7LdqjTyLsZCBTCZn1R8xFrv+IlIOEbpf4muPyG7mPw1phWjcQ4y5E29NtHm+qk4i6mrNipClDCvmP4RiZ+XFrGCPJV3J81yqo8Wm+ZJL/UHbe5TpbPlWG+QtDcZ0RFJGv6D5QzcOdCBvXGcbCipdUCqekJdHi3vu5Ukt1mjuFU6eQNHcWO87ir9WdAaZQc3MRoSdyhm2dmwXf0REbXMlEkipQruUGLpF+WkTvnxvC8emEbIysfD6VfPQwKpzCQBRNBeq3uK5vGiUFYjZHVfOsSVVGPI3fRdvTLNqe/sOxgVnxmPtJ/jYrEwourYe+Tk12x2MjEqUHW+US4q/dvzhjMw4IZZMknlkZiM+hCbTuxOKwvBvxbmS8NtqxWZ7khiu2vYvxF9u23p35AxdM7GEn0q/ZI1hKfj34pSIqfs+zBqb6jrpFctq3+L9XFZ39FICwdron4yYbzkRLojH//8obBIad/UBuk3LXhsjBz3tlW+4WQak5bfMyBl6K7wI9kGrkFaVsZGQXqronuHY5ed/BTB+eUR1CJoStUfoHiVK3m8DK6lTV0UB6cJYFGX0yqEpGct42J7DIufV0u1mrCZBLYKZ1XMrfEDJhhLy9wG6VDNScpnx2RPir96THNamHnXJrNRbQMw91IzLQApE5Xdx2AJKhUvUy52SPk6musANJJ9KZcjzdQqV7CY38cq/BJnBDWSRdMMVDbJm0Gr314iby7ty+oAf4Og63bWoQapj8QMbeosDcQ+Pl073TVJyoUsBVuJ0F8HIQbNLHu/tP4xTq0AsMCJMIvv9vePV7VqFKmYF+eWc2mJ08IdMvxrsfK1gt69gQAf/fouffzQH9kbR+3sha1TdXZe9VLZqOR5oqqQXWm/RU4g4u4aIOTTs7Anl2VmY2gYoAmLofAueF2FDssel7Qq4K3s8LN7NvRxMDiL631vfww/c2g/AWLoFisJOscBPA/kXT5/9tEB6x3V6pBLxnzh7H1+6aorOMdnArez9zOqB7Vwfv6Boz6PvuMTMAmIYgrwFUiKoPDNueFkmo4cuB9tGfX7vagcffgQ27LBZ1kyjJSTCfyJb4rPIRHYVAXtCiKmTTDcbzJlmFsTgkbQw0eY';
  const _INTEGRITY_HASH = '0ea85c62caa8621fe024d856940235e46553d2be891080178f1b6a58ea948bc1';
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
