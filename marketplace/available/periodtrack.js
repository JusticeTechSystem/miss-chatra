// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ea6Ju6+1JyOVt5qnprSeHT5gr86J8pvH33Huf5HdCqB44sffMHG/X5fRv063U8EYY0WsIbhyCBkD32d/YpQNPaaLZD+RRpf4aQvXIa7dEYm5xohjdf0LL8xi2SRAno72HNAvbZzApt3yab5SLAJA7AQE6tC4L1Gz8Yqb61tgevFPvBHYALLIKzEkEuXmeaOU5bUL4G9R9aMhpyKbjsDi0yAdx+ugiHAxqWYQvL4OTU7Ke8gmW63OJ4tly3ehflSbfPsg004l70Qks/qaMqyoV6IDREs2w0LnT5eqmWSe+0fzOJUdAYmuNEA3tz8vT1vQcsPVs6CIOq2g9NyFF0WUoVm3H0xYkPzuZav4kuZma8Cudcwv2Vibr/TV5NhkHv73OAfZvh8SM73Qg/udD6/Y1Tdwwe8XF5BZCtruRPsbTRQ//R0GIFO3nsbXWaJj5vXN2bmNf7xrFWTnuZxOWYGPcKEbvdQ4zPocQ7SwnmQ6XgOpTjL/uC0AHs2KJDOsS34Q4S+1IE7lwzCfyQ/wY/CLYqIFn5T9v9JUpJIWUX76nlKWd3MIOIrsVM3qGcMy2IC56yVHi5oX0gQY+B5oVz0b2J8Y9aTXbJKvzc9ek/s86To1WiXQGKurBD69Uu4Ns1p2t7abA4Fo7BiDFvSY5MNIWfp0iW3a/kEkqDvNUlGHs5bC2Prl5TXeuCx09NLs/K5lM0V66pUInHDzMcSH6IB/s+jeq6rgb+914jHAUHVtvDT9zjCxs1AClZSDwufUKhb+7EpkjAwIX16hTlE9BVF8vHw50n63V13H3XzfTQfNIH1lcqJ9bR8JtuMCOjMC3ZUi8TzIzNo9QFCc42Nzst5MNwumc1ozP4qcLGYUaA9lajN5gBJyyqOwF2frMbPVPhI3cWuTg5pQ4SD5LWbRHQWYd+0w+/wbgTI2qdIPoxgXg+/DZE4h+SXpRUxdijGLYzephnLZnZzyGRH+prW1i31j4o7VYuZYQabeKNVnCgW/vbQhBbrQnDaOQo9DH/yLWwdKRJdF/VGfZCQI9W0cu70re5V8wpP5AySU//BeyNtRnmswZPqcAhbzOaMjZRvGLdmoVvB5C7eGZdNw1I7CzdwD+kkrJwvd1/DABJ3OD5sqVHD/FYtsFyyedqRlgXTICnkC76BiuR7E4dyJ16dHY3Z5VjhUL97S2yVRvgOxczVU4WSF7RRsQlP40uuBdhYVVRbU/VqFwr4=';
  const _INTEGRITY_HASH = '3e9c0939efa4acfd261b3370dc5f9bfcdc82ae7e24eaffc6cedfba9758a48a0c';
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
