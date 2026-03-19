// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l3HEFsb6LsbgekRr7tAGwKOhEyRjkzKB/YWKo39S+EOnYPTqzheF5cARjmiKRwuaxed+Ox50drvnijFC5WDjAWe45LqImzMlfyD04afo9znOQCvXqr8Ogv1m219yD7mJYqq7JMgjR+PiRO+OeaWd4fOOIGxjjJr4KW4cg9WJXUxGmt0ODgUPQyXi/a5oGTh9mRy9hZ03d7Da5MaYxbU7raQ83SycgJhY+pAyth27v82QYGRHCOkaqb1aMTxTUvuLGdCtDHDQB3zUmQuRMOfkYagzL3fY8sA21ch1LxXvaxkmCWSoJ62j455/7UwjBDJQTOrMi+g/MFRT7yHHbMtXzQxMpTHZxLG5Trk1VDISGpM6wby4oS/vbL3QAKHkYEjXj/Jg2TsgN1q2K40jX62OI9LpOqXOfd0/oMASk/jKroP0iFnIjocheGhERWC4mV6dJ93nNiJGNBYOugYCA6SH1cS1BrroMEROz9bQ1MXUfUCxI8I0/Xo1wDXCOq2DaNS2ItNKTyTu9xt+9/nX4CLLYDCyrz9KZ8N8E/+eRYdHjl1qHr8dn5PYPpra+Ttx+uY7kPg9+gFJxdgUf3eLxDOQenIob4KiT/XTVnOWuAgRpsDILPnI+uW5JGMqtgY0jvrKsY7OHmwH3KbE6BrFYyG7PRcGTB2alPs+2QytfCeoZ7DiuwasTYUJeHxi/DG3SxqIjwE9lL1sgCuue/IGut0v2CjG4BMbrNIx54FTPhBIlCFi4P5Uq7AAXTtNc6Z9G7DRbrBtaw1f3IYKzwpMjeYG+EPQ6a9CM5SN1wIfX9Ykh9AmZKdd0vctw9UgzGMgbY+/ItUAs9VFLx1dUPcfc1RxnsH/E06tUDRbaly+KUYpdaAp9uD3fT9hm6zcfoM19gWPijI6wjaIqhcfe13eXzmorq21HUkREFR5xWngxcx8ehXq6UF/jW/6YoR7gqKJxxNSgEu+nI/uOCs4WSF/enZyeokCndR/QrJYSIRl+SJxHDV6HzupuwQRT6LBX0NJ03gCQiPJg9sn0HoO0QC9fQpxS60NJatk65AmU6/9M2IxvjvupI8O2FyyJGZdg5aQ2MzG3JqdiVjF7iK/K1pdbXvbsBtvjEbcBaaHslPb25bf9iKN69K9mSUhtwmoZIYvPZvizuCLFRkBHRaxTJ+I+w7NJBevUnq+g1H1sFDvDwqDWg2FuA2f3hPznN3TK2zFwxHbkxJsIEpk3r3OGpXs3w0Z1FEOEw==';
  const _INTEGRITY_HASH = '571a20f4e28ba4496df83dc57dc184bee8d89b7f0dac4c58e7356802030ff3e9';
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
