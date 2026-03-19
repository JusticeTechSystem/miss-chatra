// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VGTAbjk3tw86t4cP2xwB60jLeOahn2iKt0swJK17t+Tso3jVfvnjLb26iWo3zHf505zeGVziBbzrAAnr0B0WkXRpEUiOvtZTKJ+kQ7rL/PwOHo/LvLWnpdFFOJE8Z+RMM/wJJiZod5hd/v+wX+nHFTbK8Pl4em5U/yfDJxRw32k4JZaj0WRRYzD1xz/MMzWkXJiuQ/PdSWIHdZFOpnVVoXW4UNU13mD/tmhM0rwqmJNxMM3+O/eKc7gfwldda+LpMOwolq161AW/A9hEOeMJ0iie2OpPMR8eGs7sAZJfx0pjdthcby+mfbC5689GWkeNm9L+2EiSEx3nWGS9HvUesyV92Ia9putnT/5STZDIZMm7PYWSu5WSvxUQmdDa3JoRrf0IcJ9jmPcOoHLKXxqChwbK9/G9m94jsCR330eiKnHQsDv3bs9iBMYoEizveKX0QEd9163jkfxZz7GSr8PvClWRulDwVpNaTEtZTduY9/9uDKZpd6D1uLBqDs+UEMV4H8UDZD7GQDYH57k3DdV7pheNVNyqAdcrwyVdazpDEsQvYkGK5Z2HdRoNPlrf/HUUCQsxfk17lzI2QwEa2aHYu5zth6GU3hog7dCPbkvVHrwD3FShEfJiuE+YwpCG7qGnnBaSmFtP7965g7wXD8RUXAbQobi+Wq+7POrI2JuKKP8UG7ge1JF/riePWU9crmwxfY6HlKne4pRYx0Z7z8k1eZNJB1fDuC0BMX6TzzWksBwkfQQ=';
  const _INTEGRITY_HASH = 'dc65303492271a437fbb7b108ab680af6f9768070d269822c85294182819024e';
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
