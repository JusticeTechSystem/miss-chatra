// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2LVXptjZAzRnSWcEN/o9b1uHXOwr0DlQ5hWmDYWv4I3qHmCNXnbk1/4ESHTeA7TxvR0wqMUXldybxJ47OhaKZuGAQejr6b8KGI7LiD8sDBI4CfsG0iMOolETGEmvTHWuNCDVaXx07Vh/3/Q4xrLxUXKDZzyC+nBzJEB3Wy6SwL1qU5PATkZMNquhrMth8fyhY0bWBwJ14Y+039fR7XG2xCgTfG0Ntc10xwY8Y7q7lJQXah0NVRpMQ9jgFCu6mkoQNrpXg2HNUUUxyojszoOkMBJFEpTI/wQw3nQnLrSuvSLugMCjT7t0JZ12h/V6Pd2AwwPuVoEvwCeLnbk15zJDw6FqC0KesClCFQV8P4dEeIVRj3t8PxXHxs/6Ez81DHxA8hTWc58XUwcR477o3jCRXyvPncvwvb9dAo8wHPQbt4TNF6cpVc/lCb48YiSGbUhNg8dPUMuf0TIt+9RaKhMT2TLhcyeI3r69yxfd6nfU9mO4bukxHk9K9z2eciPd78l0YS0HkDa0OmUj3pW6CcORSfhQ7nLRuo/7t5Gdhy5Zt4vHx2Re/28680sDxfBUb7/8poAoscBZBQqeOXa6ty4wfprp50M2ZiVPls43Vw0Yx7Jav1t4zAoUiys4sK78IaokFF+pyoMbdIjeJI4dN1b155JrIzVVnFK9YF8itkITYVXTTWpYEEGUGRWtfbRMrF/0MOzuV9TXHMDEjxg2lSJnUQCWLNY+UO0Sk3jBqMqCgDQXmJbv34GsIExC1V+wcjwXc6Eo10WOvHPcx/+KI6/Ij7RKgN5UTfc0e42yWSqb0e5T1DxfK09Rjwt7166LTXpYJoJItqmQWdrKTGcZgzLbb9HZij2mkru7emAW1GHtxiAQsbK7QCY5c0D0ZpJ2UkPkqgM6+Wa70PzJ+UnW8R2ADBMka3okRUTpYOcxtdGgLwfV37/Ow19vnrFkEWoNYxPB6+TCR8BIXjx3PcaBRiWdeUIQaluo52YnO0ndCYtVjPFNZrxAdedZrB1UjmXf6C0DN4Q8e5liCe0XQkXrYJ6CtwA1Wdrt6x8wcMjPVz+sTfmaZ3JgZXLlMSSpxl7XQTNPvbD40yE1sXiP+vDZAAFRpmNPjDaWFHLCare15MbIpVz2dGQn/nvrOWh3JuImCZx0zwB9F3rT8rKVALTdV+cz3D5zQaLv/SVXNG9O6JkJt/KwzXI0DZkjFvVnwzcOP00IfRMU5SyZgtsxzVDrGeMj0uw+w655iZYosQUvmAwyCcyScV6oacxsqs4C5qDLADgb65psbsmFOCAWdboXOUwVHpDe/fKIksBEEYcNsFUbKRTAM1r+W6JDbcllt24bRz7njru3dkuAo+HFUsJxL+NiYyCoVqvkhrJMG+iQgoYzlKD4C2qm7azSPQwosrEKKqmPiTY9dBPvOZQ0M4zG9psW1FLx7oGtwn9Vaes2vkQezBmQMUFE+YLxpQAUH4rCQcWdLOfYRnESpcMSUVNJWSLJpn3kmgcaN3iT0dgtuYtpGfsE9ZAwBiAx7j/e6RaB40MmVWIWjH7/G580qXJPYKNoiv3Ns1XoE5GKlKBOtUW5Q5h/AyEJcynvrEX2AsJpR61mc0oregxvcBtZ8OEo/bnxaYQZf9CGT0kL4jDybgGPLCweuYuxTorId0sBUIlaB6uqTYgHwDjF1WYKWiLrQ32IYsRALNfgCQlUmeTP6996f449iQ==';
  const _INTEGRITY_HASH = '5d89d9ef8702487d6d0e57eb800217062bce438087418defdc0471fb4865b625';
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
