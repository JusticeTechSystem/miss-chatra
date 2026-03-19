// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JRdj6qnYzZLIL+1wUXSR8KVpeBIXH5yNkRUKFOea5qfzn1oDSMjtT10KALX7m7ZqnSz1WaUT/d5a8//mxyIcGg4BU/osXvvS4ngXg7uvifA8V2Jrn9QsSQ7vZJZRR7QD5sdSp85oStNWuTEz8DKk6BzE2gWwHNtkWjQX6vw3wxwBGWYp90FJUcnw9kaNXd4kQJtN78DbjV3mH743gH0a4Bdnsodttg0lXOVlv50UvUluZsSb3lHbGcasVYdU/XHIqvq1s5bRuftqy8wWBtefI/u3Qn/4HEMCaoJ3qX3pRJBoCoWGFuOlfUoQzdd0wgC0hXfzl9LuxHQ15QwJRpYuxuS88YNL5tmZuUFfp31iUxDfweB9ECZRSQ9NSX+UnYLWcpImOEnAw3J9srEwJqD00cIy9nZZ6+hWI8BKOLINGi66SpVQl9UyDlJGQPCuDEhvU6C4nn/Ygc16zgL3iZ9QlJzFa7LGXYpDhdO9jtd6/HJjNry1yVkPF5znU0Lz/Z8MGJph03JWO1U5urAPfECnHEcXAXVrobEwbIKlqBHvs/cSKi1nUL6lzGH4PhKuEgiwJprrxGDPtOxARBKo8YdscM/YcWWYOlFumOluIbyQ6J0AhyU0r2vW0gcvFU+3P9asatLc9tmzDvfUgbmO0jVjYV6kceg/UgdquL/2r03e4ZG7DNNh4GFrmB+lr2wb+3cD3h4MOGGaqJypfpb+DZ2u8fkVhK5S1Gc7OLudqcc4sX8TLJuMYUydhNBFngb7sNTDJ5OMfDHapiUBSygGJznfbXfJkEWC96wzjig+laP0HDKVdvhfDFFn7JZ18sus1O9CXhWOS3SsiClWvuwFQDsOj5gkJHjUvYvfEw3k87+YGPi/WHLsGpmWUhZeP81QYCUwZwnWQCp5sfsM0Am+/y2Vwy6UTWNlgVS48d/bbackkkwggyeubc4CmUgresjI+5lA83i7XV0f5T8hoZ8l/ATvdH+uc0iiTcNnALUfFKtb/mzVHM6s2EFgzyioJp9p/ASmL3s092Myg7lh31GM/ihX7wGQKb1TR5+BrbwL2dh2MPO4CQ==';
  const _INTEGRITY_HASH = 'bd8b524dcdf7387ff5afe7db22ada65b2fb78276347f93b4a2496e9c0ad6dac3';
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
