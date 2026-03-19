// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Wpb663+pqal9Ef5z5c0yJxMZNfsVeB5EGtAQg8tw3hugvFnfI/e5z8Mm31ZZxLfCs+g7tGZt+4/3S802t3xQ1mOS3NhtmMF9rWWDPONzxmPwIjcprvjAA0mmW49Nc6QMsSs3xJEEirx5uxeNs1iN36UXSXvEzODrZJPR28B1CEDvqAKApIi7UBHB5fel59iGkLLGnZmSCLwfK2giZpGlqmjKMf9o6kVp2BDDo1mHnKZN1cW1W/g+oZB4DTTCyXx1pap8lthpXFK3rVTjUm0roPe5C4ryyYXbNjfh0M9lJUlTzy3KbzG9wOGr+WxBagm/5ETRR6Pa8S0lDRr0ZLo912+oDHUs3Ycj2yrgjYsoU/It+Po9M7Jgu1WYLwH5zb4iAjpEZuBZeT8X5oT4ICKAOkZzxNHHDcXK1D7XdORp2J3ARwYmzV2XKnhPiV+1ufIZ7hvIFCFyiLjWDJy8gEIFcYHZjFEwXzJajVg0R8G9Vbb4DEgevNS7yY/4Z6Mje/CTm8zXAVweR7CLM95e7VVH1wJN1tu88iE9KgpXi95NvMe/LHk8BlSs3RDi9ImWDJCJWsNfoQKsO3qX4AIodJOj1WZklf0jQrcVB9oAO6LKwpwFR2JCug/nCmzosowWmw3dBGCFvbA3OZReh1t5RZIgM7vzmEwbWlWpJfLzXVyvv8qU6VP7j9Ka9eQKprgL/6I55Vv8rE/9WA4W2ZtAsW5kxFKFa/6WtB1vMJl4FEqNbLQYBwu7BxaZ9tHvYQ1JevRhCNRsJIYgfGxJR0N5OOq/F5JE65RDGgxVFYzdVtoFwmvbwKXWSe7b3yddegyLBG/ZErcIg1u+WaBrkZ5FpwnZI8dbz8joN5h1+yjdZzgnSuldzYr8KS/MkKWrq5HYXf84Z2x3q49sINqyNIZpxlIt9xVXvSINo+jclEB43JSjyHqYoTb6gpwC6BZrJtj/7JRF8f+EQaOL/GCFESI9HOttLJNdkIewUgOk02h+8mF7I8T0vcE=';
  const _INTEGRITY_HASH = '4cf5fc4b0c283e13f1042ef7cdee55517edf5d37e175e6ee823a81f4ff8a1b6a';
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
