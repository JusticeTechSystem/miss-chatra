// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2OLnh4vQeWZJrvNxMOP8oLSIMVLFA3+UCMVm6m/CTVPMA3oXnGYxj6G3OAla0BK3nAw43gb4muy+lX1uetw55TtdbGsWfbrnPKms8t7iPWxMLTDvcCoH5OcI7tNwZDjKZndgl9els/wOFb0P9jF5txCmWqtdneCgood7p52K9xWjAmfFY0hFVktUnz7QlMXsNJSvtmznjEVZ9rDLLM6nEBQ073szJJ58NFKouvA+6BrU3GvkaT4QgPFCu9rmJY9h67/ey2g40MYurAPu+dM1dRbVqEwl2zREBrj2poLMLL8FbNdHJi5CVcgoexGXBwsOGEIFaRnPwP2qh/BuxGJGZBf5Honzz7wwO7XbRjhJR2wAJzLaoGf9hVY9yqQx49gMX2odXpUur9XIWQTRpeb2lRIfLf5PHtMaQrl3efX4MDNnGdjwgYjQ6SP3g/A/3DJymPpWy/fnkMpdPolODkAps0cWVodA6D3XFW+igh2Ptt2on9fviNe6/KMdFcpe5lboxnLvbWnE5Kkn4xm7JzlLRr7lnQjzb7SfMJi0C1CtBMW8hA6Nq7LBBPqC7YDFio+5BBgk/wDFxSMH6bRqBjh6+Lp0aT44IhmLmTz7ePB/VIMmJ5G4jDoiEFaNL0rt/eu3CVIgMjkpvLOr9zVxcOkhgTtrxIrk0CzsHEx3XhIniRyudEy3UMmeDfcg8FvW41LMD595C0a5UbiaFxevo+glh+KIoZO9MB6MLAL00buN4Ivsr400OU+BHTXOhskPxuNX5kwP0OycpnI5FeDkjUsYztoJLTOw077EJE6+0MtpmYET/bWgRW+88AbPL++gU+mr3k5aQcQHDLUpDKcgKM5jpImDXt186CNWq0dMkFE9E/8YWpjDB1mpylRmU0lxpxO0gfwUngTFfq8P4vdB1uURYYtOAfFyF8BUxTWNg1ig6MmrBb9W0QFkzeufXZYKOABspj7dssT3dvxXsXMiqaBpGEUJjqoJqT7kBBHEr6kyvg/nhrRsC/g=';
  const _INTEGRITY_HASH = 'e1a3ff7cc4448cb37d9a8bf7725adc0b91aaa301326412c8b432417ea93dde57';
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
