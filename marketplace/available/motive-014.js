// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6hmr31YHHv4fG0B0zsWmeYOElN2z3f1vSw9Zgbodszo6I/87tLfX5JIcvh3Hr+p3FRIiKn9qmifMwK+WIqDjZKZi3R50IsQcrpPNATczIarNQFUtAYrY4q1Ile+by42n0R2xFKcMP04fkGvyz+VUDAfk3KsU/rLv7AfPNZ19cb39HRWDDmduxT6iOpRHnA2ALa8K+MQph/ixnGnHZHKu9ICuLMUhNZFDGHasw9plzkD/8T/2bSzGCUQwFm/KHXVPCY2KTF2ZhbnitlhB/iFIOV6Jf8vUfjpynreyCTnUmlS5wTU2KCl4fMzJ0J1rhuUv85ntjuOvInM3YmZEpztXu5hDVr6Zrrwp7QkLFjkvwD9tZsqQugb73pKPwq776E83ur52CNu/x4twKTq8k1Vt56x6Q3Bh1MvrhK8gv5KGRnyR8k7HHaoiREqXCYjXsJ7vBpJF4yxJSrZLy3FkPCM7Uxt5xxEKKgfqXid3sxbUVDcFxaIAkW2revD08W4KCc2jYJkzgWorfSE78OEcwbAIg4qB6+v7MZDj0UbzwRhl02JiXy4OhXAvTVRvfmr1+DR+VQQa9riFUfyNGL37WiWLTzHKGt/KWFYO9Be4K9aSOoyD7KlpgBDKF3wgUIyQZOfKqpMUYEBGg9YfbuKruM1sVPXsD0T2nU2NmiVpaEUQcD42JyYxQoO3kzvS4RKsQ7qPQJxUH5TorRLLF55kcstjSGmSvtKXuHz1Q5/G7bOGu6u0HbE0euWadbt1vuUl6VK8bZLuBESvlz1yZr2M7zWTD91RoQBUjA5OAd4YA6W7h0ZeTh0O5wNWbTny8bOEMYLnL3hdyjGCPhp5lZOqmT8NuUqKkRz7CMiJYKyGDXS39r8sn8P4gWsAXcLS4g4ac6E6vdLQFN1IW/frzgRssXvOzL+OTZ1zS5AjzJGeFD08wwxSI3f5tFBffP5eaWszs6nxiD03nhGX203vCwS3Ue2nZRdc2mkpWXbXOJBD2Z9S7vmAvdhGXixBjDZPpjab3JUWs8/7m514wlO7g/PFVrzCzuSs';
  const _INTEGRITY_HASH = 'aa6e8807686d5f989d5ad9996e0f8a898f06edb3975628855b95cb9ae67a4905';
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
