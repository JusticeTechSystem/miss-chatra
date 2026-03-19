// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i4A7SZE+3xt8hH1PNiAb9o6pr4rf84AZf7lUzpow7DVvmU4wvjS+i2g/0D6ted7TDonzYEDHEHLEc1WgZjwLGX8szQyHgwldinDWdUV7KR5O2KeJXKI56TE7Dx/1bZtryagFv9s6zGjs+tVygqCJvqATKBmyiZusCV/GT3Q5aqM75eIc/2PjN0LnE2bjttJElXGoTRC5GaaqWl5JbY6hnuGPp7jxee+sDvG7QAjnfts2hzyi85EzPoSdWtm6tmWhFVuqDl5jjf+1flXJRDi5oyJ0bR5f18kEihodE9u6ygHOwr8vbzgoe+TvfzQXAFyBLYOARiyCg/VS5NeSjRFvRzS09eJepaE1+Fa/aDMR91X1v0QRWNIuvekGEqGwNxwzPCLbPjFuZBFBbLSL9kGGxyBgsiTD/Okc+kbDDhdLPM4cJkY7FsaTZoT61+Akpe0yV1gopGeRJxS7gEYW82zb/w8sihTKz0pINfvZyhuAYFrNFFo/uIm725bHNG77RdrNJUuBZuEboBpO2bsko4SWpVE+PyHoxpBe1xNvcejKsx1FSIEwEi2G5Wuv6X1d/uNx0jdljLCQHPRh1B5bLWp5CpcFEod2emlz8HEJi2Dwxc1OtIYwXfw/Dj5urnA28+tF97Lr5NdYrKjw8CPHAUDxmt9Q7+iWod3C8dlx5LyK3r88ml1T0tsjHXHLcVg2aVia6lrKXnao5fUXhm8GwAGWL5pblPvX5Z5qi+OLkeONok6f9ij7ZUdXCKEwNFFXmCV4PpdfBe/hUtd0Nz4XYfepTw8Z7ryHzpRupba8o8TUn6iecDF01ZF8E6EgH7LFQQ9VoFawJnHPqHFE6hz1T4hTc8rFp/+aUg2JFhdhWUTIly2LmOSPiz6BYMjGLMyOhoF5dMknduKID34++5yj6LyXZUZzIWdtXIa/qXLcUaTDrlvg5X00laX8yoLUQBUy2ZLZKEQSy0v6pTQiQbUt0+rOR4apvIkdlGVU0ToT+OnilzX2PaK1b/cQQXxV1QXT3ncdTNaiPprYtY6AWPpICrO0nMcyfS5HlLBU//K3g57EqYzmYov5IypfwriX0wckIzzNUnu+SomJ2dFGdgvp5XJUPWbbV3wAWF/Os1liZQ1QjSsZ9rKwRvbmUY6q5T8u/LRW1UR4XNu9hjooGgUkT45dGPA4EpHlszmN4Exs92+YCmU1jMCvUi+mv9Xrh7cJveDGJfXIbsOBoZaXchwgg2rtSSiDjs4b/NgZqekmQmcwGaztQdeh/jvjXdxqnjSwNUISszi6jxyVX9a7qdi3Nb5VeWH3CnHyMX1aBbItV9DG/37iFwGnCMHVmPVSQolx7/EXkDazw0t7mU5yTRkv0s/RpcdjuClusxE4c7xe4leW';
  const _INTEGRITY_HASH = 'f997d6741a6a2d1cc8259da31e33dadca1ad076eb1f9132e4fd6d5728069e142';
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
