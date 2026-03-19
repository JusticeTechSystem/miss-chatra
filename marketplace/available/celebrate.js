// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ImCsTqPGM3CF+CwaB8WG5mOXq5PfbpZ6zSei7f2IivoyfAK/9LFRjfFoB3NrvoRe/KCGlZDuJ5eU9mGS9EGZJx0tQUuzEo62cSOhWpdTdJGX7tYXV9cgS+hVVJ8oKfCK9MMPd5nQyOmMV46iL3rw/8ZE5ym6300eS11gted9jQwRFVyOm/pFnSY5NjnVq/2NC9H2D4gOUeybReIaoEXtPUgIES50Mr7sFG7bgt63p8O7Qt03R+0qp2hdENi/CmvMnR7o54tLqU7C61Y35mNSPGu/UcsnD9AyofrM812pHTVopBLD6BKguJo2GiUVng0aoIOLPcSAvZyaGVW59uZfLrgQGW8uS0tELoJhrTbH162VqPvSQmnY9+fbo08NdRC4HQLFA5R7a+CJMPuXKVvFoDVXRw8Mh03CPsZAsUotOonpVLeGs1iqZJOm7RBFhUlTfw2FHvZn8bjUq85yHeyGuO43JiVtnaHvq/QTLl+wBSJji1aONTtNkqhf8RtoDIoNjP381DrDjf/IEllZA1VS96SVpHnfGynsGzQ0lAxqOk4YIBJwG3LHdxaFPlwjBJ3gDGANJXlFQ/x2zbrlFL+hOq/ihvBM3qafsjqXoqTYAfSyJg8GiG7VVT5XXT+Mnnf3rliwEKQZKrmDMYDN7boTXYszlm1ZhDb3Le35NRcSG+qL87c+CLGtF7xsAZfmpHrYGhdB7zglZlIzqX8BfwLJQUeL/QhvxbM/9i6LdrcROHvKursGRA8WBanUdlnlJlHRDZo7TfQDQf89cVxFiDmGGkJBTz1KQAEJW3Fr+5HxUAXSmDcKPt3FR6f6+uwLxZLRr/NHpZ7h9BnH0tMv0kkTmTe8AaJd+SK9Bq8lHAEIt0kw8JGb6WcKDU865g35zAQq0Glw3PIW9C55wzQmI+4CDa5Xh4e+e1N0KqHyqW/4G5nNRR0gRvSsEXyT52HUVFTX6tazKhyZTS3GjwHI0GE8OoUYliZbb48oVCc6vWm4+/+WUqZp3TAbqs4JLzbmYEWu3EhYXj9hgUc+LRa02CnApqmLWZ27n+MH7xQ/KK9WodaGX/pUxjMsDpvNOUvy96OqZzYlz2pzjCSypFlpPhnCgkoLjLRDABCTzGlV6pl3yVcC16QP0189bXDsGocmrNbmPIOa1RUUwYPEY01Yx3JXMTzdglltoS9kToi5AOXC2+tN8F4S7aMxKAs=';
  const _INTEGRITY_HASH = 'e4fc99f4c8f182a98e7695ff195ece8111bc15b19f940662f9e3ffb02a6730ea';
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
