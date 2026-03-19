// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'G3PsXGkdboOYv/heveStPRlbCCB9kNfXXs7aj+9JgNnscnGufkEfy0/mIvmybieePsUh4OSgclhuSwm+rAFGjI6kvS6Pz22yu/fX/4NW+q1v9KDO2CcRuAyZJgLB4XhTQstq8a9DoqZxQYVqqzo57F4C3NiZQnCozJ75NCgdAqx3FwL7W8WDeC5lBzjsSNtkn77xpLI5zW4DUFd+q68dp3wV0FzVcTkZyHmK0xOO6LSF3QlZ6ShAwLZZi6PGbEz8XqZo2xqi6Fkhpzok0NPog5lZ9qcklqsbB2DesmjoNg41gMrLg+QfI3zsOBYjtyG5xZLLPUG0PJStifSm21IfA85Bl+5bCTHhBJghhSZ+boXMvaRSTOfYKUIdjg7YB/kFHhRhBklpvOz6a19GBH8fudItObqax2TKYpkKIhYIXax4xlFB4BCHCb0nMuspx2Xew9n/IHfkPrGWUblxXsUZpxN9iI1xGl83JUZQlCB/i58hpDqmf52NS4mWR9xu6AvHu13quetNQt99A9sOKh3+PcVFb72a+WfahS3nyTF3BhOVcZWsWcmVFM6bhlYTLqZHAiID/AgziPWvKZWo8UiRWv345yl7Ye5mVKdyvHkR/J0MWDOSO5e3/7CvhgGhqq3rg67LAkx00W/SRza+yYfXyYeJFeAADuE1dnZqMslg5Rt80/BMAams15eMQfXQEf3vBlj7sZRwinN7oi4sAu6OakZ2f/ATVDmh+CEu0GrQq7epz81c/3aMEpbSoW2erxjDO5NB3GcyplPBHbnjLzCklMD9U096fcRdMmO5L/nIGFZkFH39rXaklVHuZVfQXHpBXxOw2Stjjuz7+34VtnbJbEDM71yyc0Dc/c0ekBbci4b1zYDYcnNpNXOIiDQZkyc468uWTZkL/RR1cetf7Q92tXctSNzovoVtZCjAFsWGKMwe2qpGVUobOU/RW/jt+eaXO8jtB1pTedh1mJYwezdEPXC0Vvy7ZYsQlkvX4QDAd1QgdrahMfHZqY585A7uwkG5ir4sc0/ishI1POtTDAtOLuG0OQu7y+mKH/nQqYZXj3ij1esB7Nxwo9FhsbCrsgbzISbMYhTUsTLlZ+4sKww1gy/gXyn9JBXnQbTPPw5bFS+fmKLbwEm2co/nX2xVp2LrikT7ULkdjcy8e4yzWXoi0MvYXq9wKaX8FJ/zjedtqhqfIlMOcR3U3NuSwMHDspyWNBsLPn37vYnYqZAU2SyJoyvqrLYj6BpbzZXf6XsBKXKIY6Q/QnNHeAb/VfIHYdZIHzGgqq7+X+8zX1qub4pR7+JVqZcTcGVZ6sMj1SGZw5RHW09jXbgobGaD5J1E9aDN0fKI1Pj9q99Op/z0kGT3r6sraSlxCY1n3oNh0djdz4S+CTb3KzDX7A==';
  const _INTEGRITY_HASH = 'd0e45a69ae975fa25a779c9ed5fce520be7245f5ce95c8c602227bbc59e924d8';
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
