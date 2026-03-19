// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2CB7qmlDV01rexAg1uqBOnJQBmyYe3TsQcgBvVTGfyyjaa2r0RVau+n34+b1YLBK9dQy9Zh/vmMqwpKpvnhYd08qolVwiYVn+Q80C2vG2wZ45+xcf8jFLXxNJ7pVbBfC0aQjoxhxL8tjBWq1bgkVUFVaFgHz4mUpl0lvDEh7fpPODKaHytL+/cV2eKqPyZYGRL/0OYX+EIMIbMQryE18qITRpS02jHwo1ubWyH6usPLnnYXyXYcxY9X0xThrTJSPsBYHIdbQyL9VAThTcXM9bsIKJunOe8rhy5z6C27ElEWceeAuyjHI4iBhRQQBA2XiVPPHw/fzPM+DCtxcLsW1g1kjSxdqeISF2jsj5cva/WOn3sulEAeGzOXcR3us5aRlPeeRumFdzsQ+rXHqCy0rrfhrULYEXXZl+WF/ylGx/hbpF0kP96ph9blkU8SkOmDmKAslD/nF8a5EnUiMLeSp6fZYsEluoChKoLX97CeFN2BUf5sG97CYhEYYSzJY68mpPs0th6VcVZJ2PcvU6NJ+bfRRF03hSMxg4suOpc+knOUMjmEKqklHvdbY4Xe3fVg7r1YFJj1QuHT3QW1y79NKcKmOONl53rJ15R8RVjciulkJM/ki/oxHXxajnBDdxw0/4kEUU3tqY8GyuruJ/j56W+OiAS2JLri6IY28TNMhbZXX5V59D2OEDRt6qYK90vwXakyEHX4EQuZJAZTeud4WVlbMB911GLkIAKWfMGrw6Nr9jfduK4nv9RsFeGuEm/O2Gg4KahXan/1U3ZVA8WaUEQwfSbEOO7p/huIqOyupbmOcUczZTYvhgDb/wrczoHd7oN2YuW9dYKe6rEVjXL63DnDpljbmSQnUDxQnKSPjCMlzwqX4Sl6Cv3KyrjzGt65WkNHC+yXl+afGtBuYC5invR9ASLHPn7WV6Zv78SPbw/nEw8QilBeWY6vwm65AtqeWaLw3RW9Q4wLOWY64AF4Z3HChjv7XaRkWYM/l+Sz+gA==';
  const _INTEGRITY_HASH = '60862033d8d75edda68719baa7082d9ecdbae3ac14d97cb3776e8d2240a5400f';
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
