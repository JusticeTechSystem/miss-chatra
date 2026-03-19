// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'X+vv3CQeSIAnwHxVp7EZo7H4GoKcWZ/EX2lbz1ZPsESNtnHn/5IX7rxJ4lJddEAPtCceVQDfMcYm4E1C30aBf7QZg5YAw5FLwN8JZXwyYgJljNLjGKtNKNwem+GIWZYU1az6nMIN5vCRi7KBccC/p/hLlZOHvMo6AX7P5sCZhSuJT25/goqZ6XVxeYw1FDKmcGIsbTMrriR+tSzNsZ0BPKMy6DVoO1NnTpXCvQWWsKbmIaw2BIVNDI2+gyw6i33HOzxLiasbdy/5i+R9dK+HdRNYIflKsGrkOhSap+BAojeXqaUwaD0hbCRh2yF63DFlrQ7XExTqEvwkIADhZdoK1AvtD22VxJAHV3HdDyL+OcRvJMqLzK2HUkuC2KGCzQjMzJjUCvuaZ+zfxRikuvcFygUp5FsH3aqAqAHzXivuWsHmuBo4kMDqtLBbQxlzBElZ8esro6yCtyqxAGZy8CyG+0vzw4V2dbr8089RNiFavwIBjZ3yvU0KJzMJJhK656oDIMT24ijySeS65kXhGISkLxIMtXeE8Zo2xz1jKOgzbmxaYDnYniyquXYCU8nouRp8k2OSghOqVCQ8z2u1XdQn+iHiTqJSAdiwZdUEjmUgyY809G1mjiYl2/cwIUqgL7GzKHD3FCIpUS79k0OzD3L6Xbj0zkvX9nGcp1oNtwKjtIuduXgP3TjmBeBeSrzIwuOu893d43Qw+cZtRBmIOXOkKARIGAMAQ3JbYutyqonvWgd9BqWIdr6+DToUL2qwSUDF5r4+yh6oeRONHazNSIovMUg6gV2lVlnsjscNL4Fre+Z9j5fuQabUHTH5uz9DRw0NBngW5LkCThpPbNgQYiqVD6DMlQ1ns+2q4wNPtHvpU+CRBQUaJ2x6KHsYIKijZVRixRa2yyISnnU+79GiD4GN2umeuqx7iR4TBau+h/iswt17EbJF90LcTynCEDseXAIwi99btSRtSANBax+MruA+0yywls6vAatYc8TvDrTY4CRzgwgmpK9EhmbIS/un5mBGnTNt0R1Le70HkmCgMKghRTVYpWxO83TSD0vU1jPWBEmBYZMg8ptS1tdXv9lvg47cFe/ri/aprJcn9Bekwx8f80+By4QWBevRkZcc/baEn92SfWvi/a1VBcZn8HKZbUlFJZQx+82hmjvIjUSZfh/OaftbM9AkDwD+nYAoL7DuiYiQbA9QkS6XSOwzhPW8MGkxXpWgYZjK1iucJng0snJj4L7bNkmaZky5ltTM2qsQcwK/ba/tkSMnFFXwAQogsnzlvIl6yWNHCDtZQ6DkUXW8M2lV0wgzTOiY0C82AtIlvz0oFHTEECxxXKKMnTemLYU9mFUf+15erQpheYJ/u29q5Xp/Jp28mDX7t08wlcSO';
  const _INTEGRITY_HASH = '0c63c386205dd4c5a20d31878ac173b34e0ed1a2bea59f60b4df900a869f6abe';
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
