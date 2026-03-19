// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hM5xjGqhTHc2sNdD2Y2Bw1xDiBk8oEGk4Hs3B++ZU9ilmIwXMClADAZYKMapSJ6m1OfgDy/4uh9TK7XknLCjiAkTtXw4to/8E/H5kW3H/MBHUAkUd4kjwY96zQwsKRbcEukUUNJZ0rP+iCupv3Gmd3sXUjLMlBzQX1Ch4ndOwdGvD2b7LoCwiluJexmTcr1yy22rY6D6kRgMpMvXIgx1ipxFrFIbo0G45wIfOBxu25+A8gs4KjYShdNsCv2CXzZM0KHClGm4oMq2VR1iCCMhtkVIpK63I4d8NOU5OFEwaiOODf5ea8kLBe1MvyaO4T3iBjOTb+LIqw6pUZei5YGvnhh3i8GAo9jRePCZKknbXL63gGH04s2ZiR4EDlfDxbBxRQb/jHblrEEDT1u/QUFi1afD2Vcmhxtbw/PnGmUpGzwuXDIuuIVGvtJ3Z7Dl0hZECmrOm0CjLoznBvYICMyLSpsrT6zd0eROvBQJEj8tPPMupKi2dC0V5W/LvEuB73rV6UZAPuoXiwNylH9BiLZpivs7joUeiF0UkdeBj3lyMcU6D+zC5ztlK0xTC/7qJwhYnvDX15mnLHxINOltMHIQVdwOoooCZCPozS+3Q04eyBbytIYmJsvOkDKaoq2+8efYCQ/VHiT5kAYYbnUO1YrlI/twE6bf4tGvrxYXkvFjPolO8nslK6yKaWYo+rEFQE5eQZmhqE6hzh8WLxzQegwK+zSluCiKp6BFtHPG45lYNfuSAtRvZYYEA9LGNIgbKQ4Z9s8vsEJtfkkIPzWATpz7FKCMG5wYSDMhiU5a+NKnUNMYtkdVVFYfZqXrHPfxyKWHNFxM/w53V2HA5PDzgylyiJkv/Ku6fOWKQfDjKvaNEy65n/1BQ/PA8wBjzYzIiZA+7vIryDetdehKyT/COF24F7I/nYVRtWSQzSYHRAetpih0oj2cVHo0YlaMnpMkkOHY3i9cJWiLaxDQMxVeFk7vHoGcx7paOKeJeqhcIAWqm+aj70hPwYFJJ9B9rAHZzkYXwgC+WxdP4J7dAL7nh/ybxpZ7l3Ep5Hq6yt7X6Fu7ZM67fD2X4iD1t8YwoSQPlauXrfzxKzZFwel/elbmbqIxOyTH9whq3RfffqvLnUTPIDKOKodBZ9UQ90uc4lo7E/ueqHGC8GhkqPzLWZu6O6JhFmp+jCjuG02DraogYJrRcEtDlNuqV9mELz4BmE11bna8XkDBiTMoCUZCTHgiwcs0Z8Y/88Kb20fdzCi1Si42YyXwk+yUKO4FOGz3EJCdM7BdwtvcCh6kIDAHHLszNmLA98QiJbKurLSnRgDUySiLUGYqAXqxoBfyYIZspoHqPVvG/evndtPfJI+zfrMny0QqqfPfEkHHEKR/GEzLcJI54fN1iSaGhKGrjk8CTTaTZqFe3shRemDqv7vTp18ad4rZ7HPaaR1naH2LQlqjRZyjWXKyXdWuO+mYlSGU/+lnXtDCT+JyLzbLTIPS3muDD8UUpbssGJRUAHZv9g3KU7WJrotJlZzz9Qf4E52zvx699VtQKVTEc1Ic+jQYgGbz6eTsKzGDzUP6piyH2ZleRcVi5ICpvBBxnMUJp0t6Sl34ybUn2btbmwWYlOOJ3sl+huqTdENGbmvHuULopVopSsjtqmNc/vZ9TZuNCOauEmmhYBQfhrQduywR9FlC50oSKVgyxn1AqKbuztLLmzEMfz9nkGWw8IPk+g==';
  const _INTEGRITY_HASH = 'd993b4f781182a0905e720baf07d1be20c37d25289069f0db0e8a86d6f737a1c';
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
