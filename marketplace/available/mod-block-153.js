// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6JbGFRVVXNKjZ4NyXh1fgMQdVbjmza8A0OZKTAhWui5E4ldPcMu+CYxmaJar+exeJhhrRbfiaRBDA9U5weWZV1ehCTg0s/J7NO7JJdY6uSaisrc7asVm2KKX9IvK6RK3WqKWRiX0Twi25ykYLophUsv1wqpoYpiAtzZRxtOPPDwKTPeXpnFDpsWi1imBVcHaIHnP1fOcl+PMVJe6VXsfa3QXMjIQpQh7LK0aEDI5ZKAyq3Zh8rIceuD85DcWNPotA+1zJDim8IdAWNkhHhyDba6MqDXntjnLcUggjg2Ly8mLqSw7TUFTfIRg1t9bKtnBevl6P4Ng6ahaiKBMSjAQFQtiJ1KMzOmy/48YhZboGmrLDqu5dKlYHc9kdXD2hMVV9YOgxOACa61U/i6XDinMN35OPd4Rc1C8MBHh1K2WsSJoXsv0AQ90GG08QCqRYoU2gGjGKAcEVsVEy3H1l14Q1DjmoQozPGveKVPlUtUjpx/zgxND8/eWMGlTwnx/S5sYRg9iBHUSLxsv+KMRaCJzLbnnBxQ50chFVNIjOGtGVDYN9BvzICA7imqXvPVytsKpYvkuQix7JmP7YLGaaGYYbYzzjQ75EVKVe9T5HcbANu0W6xTG4p9W0xWYIcsdxzVZ16c9Z1oMfVwJq46jbtCi209jLU3AoLn+BBi1hi0UvO30MkU+y7JDlPSq/d7INZ7ulqOkjOCZ600DHxuFsPo9lrG6jsFAw5+h8EqdDXbzS4cr6irSm4HwCJqtTDWXfFwfeynbCBOtW9uCiLs+IUWxdquSJbdYXMe95ArwCwo2IfM8Xj75CeirCxaB0ASY6AuscIZknoK654C87IYrtSTu0awjlsPrA/rE/C5WVK3r8apI56yYPS4Augwa94/R1lCy8/1P1hafZURhrJHKFBEOr88aOjzI2pRYaTLUJTgnnESXt+vFw5pxLGFXifvtuClfzuZ8RJpDQ0kHvFS8QmZo9mf00GES7B1UYXEwfmIHxOLu2ihhb+BGdeDigcI5ByvLYTmqIZvWPv0cnUwmuaRQJ45V3YjN2rmAFKUaODU6MfCfpuR46cbVDjFURZ+TS+9BXVnX6SHBjkmtxvGK0jRLWVb8cpGZTP65LcPW61VW7eZbd8A/mktmc37Vuhuks3EY2zaPiQbZNwvg7aHomXhOQSQKoauYvvNF26x0ZiSrMPIgsz3vhrBuh+MyKi2URtDRfmZgxL9dB8biRYEFkz819CVlnhtdkfbih3LGT/0cvBmQMFbu4Gb3bBfyd7EwMywtEk+N1XeO6U7mPHGQZUB8q8sw/6OlND4GPwB5qGw36NU5/Bgjeqh0nFHS8MckhZp3jXsDRkK7h0R1HixWDlBgr3NcFiXR56FkqlEZCobR';
  const _INTEGRITY_HASH = 'd71933fd308b860e0c7d3bb8e5c561473d8929047f701e65c6f2981805cd1e36';
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
