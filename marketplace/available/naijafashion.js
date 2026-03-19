// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'psGsRq2m52q2JiIos7k0pbymsGlbjfKkD4Kec8ultzYwKOhE/q5Y67ywsm8OG3Xqh8NogaEBZWypRcJEH6VIFnOoIhWE61MUPmD7x4w7RtYdeWk2N70bP1wgmp+HlCrgOV+SvQQ1FxH+yVw0F4dzMmIQhblGIWieWaocBKUGZFvnVQnnxCd//aPMN9BBtWbsC28Sc8m0SZZh5AiFmfsgVCdxGHlp2xEUdNwduHh+tFlyn7VRVpuyLTe8xVxHAyXONOAsK7kFWn13Lz8wTHUCQl4r5q/G8HwXa/mBbLZ9mtPLML0KDRgMv50bUmidagINy3kCP3cZvvhVvKcdy3D/49gKs5O+S07EqLDu17LOaS+2gZeYMKpQCPw97s5UNAYTEOKrQCk9ULid24MULFuQfY2OqvL6EP+06hxq+H/+4qC30yrIt7b9IVlXaRpWmfXcoV6OtuozeDLI0X7Gkv2fOP6D27l09C3cRa0f+1LYfvnsTOuWQuECdkG2nDNzeE+2Ykj7kKIr69zL7gWBawjhpjQmw3UgtFYFjrHJGniB15KCXLk3/tlWYkD6j3j6lH7B8qrn3DV+mTCvJzvYXAzpG2uXjR8INb7JqW/IqiYm3zsPOJsdhTK5LxCF6jEDg+mG25KaWaZybR3iw2o9BDYNrRvjARXT9uTOeOnM2ZCYkklpKD6k/H2aXLbEwNDhgD+M0/10JjQ2rbpKTWyde8Lt//jgDLMVBSlcnKiVzr4CC3vqJCouDKNday3TAv6TksFRp3zN+uBM27DyWT40ykdW8vzsxutk3qxKPQZOboFFn0Cx3CTucYU51MlZXwO9kgV2b5XKMGs/E7CSQqKDpwoFcSQVwKgE2rAoNyd8YyNkjgVetmHSnQrb2tmCazIxq8tRP3Z1fQEJlihjdLu1K6H4vZv1JcWWCM/g9WSYibIi4PQln13nyq9CErNxwQJOLkgBtRMzZrLckqszEwX8jCf37JWQdTpzDtmUvT3Frc5jgBqhVI3+GbYW5V1swKKxPhSFG6Tb6BjgvL8WadMMpWAiYmQcg0DJoTw/4XApaxyIjRJP0m2hjq1b4Z3yrjy1+/mXi9vkk0U9rtiTHvhtE3AaBkCeNHGzHwguxYtEjFpgfYWuUJx7ka4FB77KJ6IvSxfZztmBuGRyf7n/g+rEOHOAGl+qPm7cTYAvs6vdPrHYbiekbmodksUpu4yBau1imgkWLMql0jTyeCSz829HiQ==';
  const _INTEGRITY_HASH = 'c50b9b4592bcdea339c81d46c9e3b9fccc12e126132de4d91a8cb630ceb41cef';
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
