// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4EJIlXASNMGPomkjKiqyUOwNpteTh5OF9Csnm8fEFyMSJAsZLwN4v4V4THL0iOUyrA5E+oHsWGmuFzH6w3SDxuHAK/ZltZsCnPKBRAXdXmunGAha0s7KCW/9i9t1+iLa8xMgt6eH0lcdqJsObiPQ17h6+9z9r/J7F5WkO3LoT1gmyKLXOrXW9YlqRaJjh/SzbzVY0uFraRbrAuC4EmUQ0+TV2LdkMSLAMGizUhFF1CWpPL/9A8cSDv+/RP29g2sjWdRj0YIpkSrtbflgW0tAqmrGebTFLbPbSzEaf6ha0abLAQtTb6laYWKFZGlOOM2smANJNZ9UhZpjciqS03sOpn9wU5bHafdJoWA17nyjDK8mIWtIO2f9ArHG69fjaqePidF/Rd4B9D6HOxzFk1cngRkHHQh5G64X4kCYOssJtyn9KnhlmH8e3K8xvHHPBr4UGAAkOX2A/W03Uy1aphtX7n5gj2oTX6ZQw/t0n2HYwFDlLD6H51tpjGb/+ICNw5G127kq+HIay4N7AYHvCRauP+93sGtGYBZSnhgeAdd4WjCn8COP7ehvCjxJtmv6L/nBmeqtUIEKm0euMhnfya9Unm4nI9/3SIgvl/JEPrbDcG4KZOguS4IgoBqPqs24I3/9I3O2khePSTA+0ofC704kIy812pLyBzln35xWrZg7M5xqmBKqUa5vQMXzf7FF9q/8NqkJZ2qES1BYkjJWdrB/22IXvP6QiAX0bklozFMePF5iSEzohiShRW4Oooaq/RMYhvs8m4lCOOJbFgnVxXhY+fIQL8TnfeHLP7c213SPuWeZ8PimtV2lvTgijI6a75IOQrzqzS8vx0xjNQWoN3AHHjxIizVI6LEoHopqF3+3+WUwjK1cHwG2mSFFTgxrHEmlcCi3uSUtwIVWE6DDRD+wnTCr3qqAUErojeJNXcmLZJsbZAXbG4iy6LiNOLt5ZrWcnuJYI9W1Cezmk9Uej/+c8PUyoPqvzGQnT11NZp0ff5mGQTKTiQUJA9LEB6Js3cpLgG9TCHfxYxsWEEiZklByxB8pOJooan9kIzsi5gm+58VRDeRKCpmphH5lks8ZCD4bNLrsIpeHQyO1w1U=';
  const _INTEGRITY_HASH = '9a5e8fb0e79f8c2cd38b5c18f63e5f0200e991cd809d14e44eab975344b9b549';
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
