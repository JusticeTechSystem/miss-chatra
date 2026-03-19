// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Cs9fnUCPfTbYIn+4y3F4avH2gk88yhtOfuU7ppOJY8yYE48as4QXC7oiglFwcMcTbG6qZzVH2CCOf1D0zgpXpkPlASpXr/7F+yTKrA73iU5nBFC0xl1e9Tz4gfLWbyMuwfD04JzpRqX7JNzKP2Y8dT/yLnb9XOeNc0GsgWpiKlyFVJ5v2Hx2szuDKrNK9FM8aS9KjtMasQbRyT2ckBKcCVehqFnSFt4xpJkJh2hGxo8WpyGTAm+eIcELKJ6KN63Sj4Cud0mS/JICaqBdnIdEIMoEe0yBBZ3Nug1jsu2xpx4k9+nRXsjG2x1+cJG8B0xCe6HP3S62ftTPnlEumSfYCS3Q9wJe8BwSijhjDQK8vwaTaObS6/la0SuCQ7VAytTDsCm18pdYVkmI93psICgZZuxqVwYGyYdyMRbjatFF59J5ienK4u1diuZhyhFn5XOkgyuI2A2R9rTBEiDPFCxmqo/3oCocLbUJ/OxzhzuTHTkMGEjx3Lv9alfaux+VBK1VoOLCjQfAWM6UePmQvMymOkW9FqntF8pQgmVvqguBPYxj3AqmjIrck1LkxLh60b953VNQWAFC6aPYu0Ji5bY4WVosR9P1041y3YJkQdELG7HqTBDlXzdyud5vJZVpns1PzGdw3LiQH4Kh4arLoclMQM6P6KS+GT5twm+380QCmHi+Cw7fz8rihZBs5HRcLUEA5nTG2B7g+87yU5EqCYo5pgsHOCzBDe9G1Zn+z8OPtMFkBHXuanubTFxUI/p0nPwOcYiZMsp2mTSUNqZKOAiienbf8/rQeqMudwF4Q94n53g3cIT3EXVRrSWC+fBSprnRRqTXRCNM6UHvXSfm8hjOG555I6nlTn4/bl6oczPnN/AU1c11aHxLZq3uxUWd19dekXCRTI8G18Dn8S/5NuJ19aByV1HXf4dAhNjEYOGTNo/rsAEJNBQ7SYbXW3gZP1vlnUhI+B7pa87Tg0P98j45Jo5qiO2AtlLmJA7yJKwPqXQvEM3zpW5CqvOnJHThYnRK9A==';
  const _INTEGRITY_HASH = '5e9d5dc00ea9eb02c8de5d1559679a8ce24f33b6148fb3e079c1a8b2c0886fe7';
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
