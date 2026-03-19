// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QfirE0F1apiALmDbvZGLZEmTPanKBunRh9OJu9huadnvbboUosu2d/Xz+EGPaJzE7wPBlguPR9dU9NFxX2xwySPlW7dfoRZYzHV5Yh/onrxlGPPEVajj2UnjrNGd+v7jsw9oXsht8JXebXB1QyqVpoT7wYwbl4F4VZ+Xoot6SG6dAKLsWNNOHnHmuAmYX6aiMPp7wAkfhqPfIVoeO5W4R+Zu7Ophc8Jp7mm2knzrJ62OBBkKvHGi6to5v5AUL+Wf+HbfEl3Rrr2GbDv498heqdltoUyVQ4ngdZL8pS+87oDv7zDt/fzBphX4P1BT53tD9vdGLwEOijHaeY1x91PLhcUDbbJIX9+oX3S18y96p4AYHZd3wilQoqOGRlVZaEZoqc3lC3RpY4/SDARnQEoNXkfYSQ/IQJiFBcJ0FYSCHNNteU7hGElx0TsaN7IKhfkmY0+4UIJX9CkEhTn7t1BoxGS/l8hKWu7OYnrtyTjA9b+SMd/0K/5bYlUBy0RuP7PHGJjkfMAhvyn9pE0UkbE7zn1eXLnngmzD8uLjq/PHjhIKMGrYSpJK8ARf9BcBfNJLQa3ZXhzCsR37pDzj0bXQjRB4NnxLlk2Fg//sQu5f9H5aoVch60EYCtQMyNxlpwfPe6TafhOGm7Be50Qe00QTqPmKFg8Xv+Sed0hxzskiBdbeGOJ9We5XlErRYJwYDpjz2ljLeYhmVLNwNAX5FWzo1i8YRDKt+b1q04/YTm5YOCZlhCDxnz1oZydXBRRKDJidT4mHjCYDKv0Ljl8GNVeQbA0srxD9ZxrsfVQdD1yKmuY0OL5wgPXYEV4S2W0b5iyoiPnMQNx9lg9MX5ejsjTn19Ursgdd7nEyg1Iv44nI0ER2bdyuEYWD/COlwlRICbjAxjxntenWM95a071BEO5XzN2uy82H8+AEmKctdRd7U0Ile8vNKDjyy2ggvdEd/1oE4st4pweXJ7+ULrmeixFc7PnEzRLuWfEj+YWxqsoqiO8ZPYPX7092kKEVtoDansD1ijX9ZcQgcNrwojdvFLA3DCtTG8nU0g==';
  const _INTEGRITY_HASH = '6c3b974e0f7914c37cd5f85c4e4e8e4d417b545322471210c1a2493f8d9d0f66';
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
