// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DGeSx1fxL8s6omHinqktEy4Ccjr3zGleK0EZDCXO0H04CsYk75M5e9/n/WxRcQt3vc78gFkkKWWuTI4ENj81S/62p/X0HNZwj72kj9gcP3mcwZ8q899CsLqqIbBgi0g8oKIMR7aMTnYaNvZTBiteZ0FXAqHjT7/Ue7IN9DEl9dNHGFfu32Xvm49U+Olcn9TR9VOov4A/983zlyFBUeWzTigLAp7npWv6lQTrSuai1wDsoWrfuN0ee03gAFJaRhzFKYqFx0tK8jzSogX43wP5zZhwql0V9+DBI11m3LWdGnqirs5Nf/mNXeOzMJqS/qK3tqItRnmuKWdw3lhJAah/fiEeQD8GRCs6514lw3wZzhYyOJ8zqupQnpcDD2n2l7pwqBc+3ANcSNSSRVb+CaiHrN260NCLnbpRuN3qvnFlsnLpGcMCZEb5oGU6aDW/VwrSuRxemcS6jDka+LbS4Nb7n/luCfa6DbwCs3VIHD+vnrZPesw7In45LWuvTOxX1rdF/WjY/iNDuc7JMg6AswsEWC557GH96yKN2mHgNp/m3ID7Akdx1All43q6PugfVfKvhKfomo/Ez7Ix0MjCDgtq/xMmeWjH0sVQ91qNBbWfGyg0NWisPD8bOtC1XC56ykLr+zfcJDmSytZWKwLBpupjPfZrit1DsS7dqeJU1Z8xAEG8ZhhXofJpIumqJ7rnto1UErwLCCT2r0wUEVGtu2ycp8EUDY9HScEUCPxwKwexc+yDf5tCaion06wpx5JdY9YdILi8PaonWLKAE0Vtr/qqJxAtP13WZDl7Sl147j9fk195vsOnb7y6q4C0ZSf06kito+/FIuJJe6gQynbhetBaij2fdBCd7+tjRkqwaL6qxHzMCOYkgugy5zz9KcMbvzkTLmQbnWmDIoZkHlyoBiAkiH3X01DYsNI5+8leGIahECYECv6JVk33CxnIywQnU7Kf+KPAyyXFyd0RNPxQ+mWgCx4gBkWjGE+O5vlInTCe8rEtKrldMXaGsIDfr+exzJqCM0/jEL9gyaWoVlDx3ltSQb6a467OFqPAtZel3U1nStJi3aC13FcMPG4VsSvH2EvN5ziiwaa9uQJp2yMwxKfYeEhYlh6EtwP8PNMIZPz3vpEuKxP+rV+uWtTJxg7pQVqFx9xVa4DTbyLLH1Wn7+HC3grlapaQ/qRz4AKdGaqlrbdNZA2RuyV2jiM+HjVjKyYieObedIdT7Ww95QcwYjDnAkKAoDmMcX5GK/q69vFkluB7dj0ng+kUseEJhLtZR2z1voV5VI1lH8w1QuaqeIMilIJMStyulKhMLQI5oQ+fgFGpWWc22dyQ3J5tflPT2jwpShlUX1akl+nXtScAeZA3ZQxCDTVefj4/B67RgoMr';
  const _INTEGRITY_HASH = 'c86f83c8c517d989db23660365c66c1ab5552c6e4a4810d1277169c074a9da8b';
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
