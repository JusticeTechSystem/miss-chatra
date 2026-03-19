// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SjZmtyIaIfkCdtY+QMV8m0Ibj8xsXjhyx8i3AjR+Rt0M2ubqg75G6L6/bs16XUsZ+LmJx2bhao1L69Zbv4uFqByUAIkgZjF718U1thIxkbKknhuWFaevHjzfpg+4gxrR9YhP4FTkdM9iP3qCf4zr8iKA9+oCP2y9v9LGzt8wSLZI3BQMwigPPwl99CbYOn+M0tEI/h3WsHXWQLeOyk52OfCxftyKUDHRItqpIwlYD/izr31Clq+ZgnDHkBzlcWXgXTTV63jIg80t+IJEJYAUJPQyJtPL/n1zdKZxirge331whmobe/0nSurq7nBohIDHJN7QhKgYnQWDJLzgACKGGtYBMot46gZ4M4tIbrA2A0ErZlHBoP+Oj3MIxGJLNz9NC7Gf9XcnhHxY8AfrG5TLlU8iP5efEBWDrdbUgclOtufMhr8kXkL3IdxI7UWj1BMaR6ygmUhiHe4PAjeVKWMNn9a99bdXY6m6vD9GKQteDeGpvAsage2uSMfEfd0jRoyW1yKpEq5STNxfmWnbUFrpouHEIh8OjoUC5c2p8vtGN6T0n3cHFb722fmwdW89zbTJ+dzrBpqiMSjqtBZjz7r3pdmgNdn5E/YrYIZEYv7OPc7IQztKqV07A6adpkMGA6Y+gOn+ZmtuJGWnvNZbeaJtN2xVX5keLQeF4dGjYFI2Np2ORfoFfPFHf6rTgxZqjn+TSGu4zKoDf1TcRtpQr99mzzvTzP9aqkTBGfNm9zUUPlkplMdFxULB+HKUnu+GBSRsc0nB3u8ZJVnn5jyISlAyO67vqG4k+zW80haAkTC0Y2Q4IFMpC0SoqAwzTIlZaETZXcHfnd0C3bAm8urgRRpFUkdGdxZhEVhQ43gyoY0LwmWkZKzo4NkmPlbCwMSLPPL+iH6lvUzZgEl8nK56ZEm4DTSv4d7QdX5ULnernQ3Yxjof+MjJ8OARfiB2etQy6Po1g4a8plD4JiD5heuntR6vQhmKKqUL1w0XRW2g';
  const _INTEGRITY_HASH = '8a3fa257320f1bf6e3a14610a08feca629f98c665b0f61b31e5fa9345dcb9711';
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
