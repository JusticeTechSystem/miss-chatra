// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OtcMqQQ6tFzVfLM7ytsa8eGzexCpuAhSL6M4a+CnN9Z11xLGityO4K1cE0/reuh14uEyqyG4uk429LjgJ2LvmV6rFLCtoJ06Xl3Yu4hmIkl7PIfI8VS2ImGub46rWGndOtBmk9jJE0rBxEb/yD/kVgaWxd4rF16iF5lm4PlDMYSBATbU7RbAQGpxDM1ORxoPnobrvUOZ01I4qYzBvaSBZ8dwXAr4JUeiYe8EniTe1Wap+f+bBTzWqJZCJy3nGXwZJ3e4ta5yLbjYFbsyFOELJGKWSLi0/R+8RmvBXicLBWd+RrU3OVadp/KlPdQghfO6GGJ7jH7L9efc8I740Ei5SaZSb1nSzMOxCkA+uDgFQOdtC7Rc//fKsI0My55YLH5Ba68yGom/3KPrzSss3wOQhtEv7nP6IbIfkmUo5Zp0dLEx+y/z+WDtdumkB8Le852s2ApH7Gq21Qz94ivs4+0y8Wi5Hn2J5Jc7ANQquBqqJhBGlf4jl0cBNDrprHEcQpwMoASEfAtOnm0VIfuT5PsIdZSA/yqfSJVJCdMaDxKzO0qUQQxBkFkqwP+vJwu4FPFhP/zcMBIf9p8tipmNSXiM6OuM/B1WDlWBfGjjwvk5KCVuKfJ0vW93/NIXMzrgCIvRs3r8X0w0Fr9qVhabRy8CBz+ewvlPBqGlWgr/J73kMeiFFmJjyQHAd2MLjh5lzqvO0hcuNShHVeOH/IXtuTw0NqMSq/HvOSBYhQq2lCBwbj4pGPQpSE8COBL08TWDSdVKb0UpvFO6Yp8bMHZ3BdCxgW3CY/hXSWofpQbJwN6/c4xx4o9r1cZz9hW2wpMUmyQZLA5XQbTlBgkUM0dx91IcF9hOy1/hlrPzjLEkfjoSoJS/BeWRC7vKpC7ivo3cHPdePDYx2iBvgIYgXHlXcd9N5qnhdvxEAj1wbC4uZPD+gw5sskJZFIST/SiCfiSrEDaJjxOamQch21ARd0GjRwxdWydQ0qNaGhYzAqsuJQsy+Qd4sI1j1PM47JxYEsVTIeuwv+xumeF5RwhpAxi9sefHFvKJtE0d8k4gG5crc5faD+l4oi8oXE+XF3iUICZJLyhjpJCJAFTUXHGcnpx0LQNpftN16XZTBiMs64coBaDBLfsf93qerfb5YqOEYVB1QKJSvuH0qZ0I3kmTTXUtY28f7XcZkT39yLxHN9Qb/G2IfNnQiyiFtFIaTHXpLhQY2zOBsI6s2leU5ahiCFXHQmhe8rpl6lW4';
  const _INTEGRITY_HASH = '3477911765331e3df7c0c14015997fb67f05a18e97ad86568fbed4276cbc737e';
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
