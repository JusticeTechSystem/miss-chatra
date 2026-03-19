// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iJAF53pUFtUfGECofUdCsVRdQTaYCj3ccqMlesQ//MKnBMmaHdH9oXWzY80Cynw5+smJj3tJ8vwg1ogomKsqmkLDLDFud3NlVoIaLeipHmq/YR6S1Dqkyupo41+sMNagcmXqCWKhtg6Ov/BYFcO0zO96StQ8IS01Ys3Y/vqbPDNXqZOtQzzWkoCDoN/Ttk+bSXwxx/cSrmxUD4DrJIdudxuhuOJSHc5U8/Pc9jhteycbKOaw29xYgNjWC3Fjf68ileqq1rFmv+xQzgewCx3N9SrlmheO0U8ezDPJbG2N3kGcWdW53odWEFa+PE9HpqQ9+dj2iadW+/Hmgc/DE167vdOi0tiEGVRrp5Eo8aeYbMHOvD8M8ypG8/1bOW5ooE2+dmgbFuacfPia64uPzFaXGBywlEo0jtMNi+VQyksVlA0/96eHoeK873JSeGYreuZ6tJGmdaWNj7gq0b4UvAsYtN68pdab+jyDOGXcfKp0R6D9ACLK7AJvnfl/2wEYuSCMEDmWMmxVbbJERVug5NG6ha5kCM8NZOS4pBKcuURvs90UWEIxGZaIwORCtKRCdQnd+FxPEcwOuNLeyaNMOt5ZqqyrX43lHLRmVMMTRVHKyT0bbFGpkTK1+FDrQ1E0Vk8Pr6mQwmpczremy8KwoNoXuKw3Ud5cu3VnioOJD4o9WIpP9UGq/Y4DuSsm4ryXtpjSDXpbBNdn5IIywOUZW0ItfT24+OiW30DFfuNp1Ct4EPoM1rpJvUnC8Gxe60yJSNMst1Ohtmr74CYv3//bLh580TZGVw3bw/KL3qWlnsslailefbw/PT89k6wbg66bnx2YSqMSf+gjirjzV0DUfK1ZoPzIK6aGj8pQM3GD6gS+ddUZoWFGXMHoUWxYjVvhzT4C0o+TEDoC/j/FEww/jIUqpuxKWoZjyKKIAve8IBeSJZ1ui2/s4O3Qh3ud2nYE06Uvt8FsGOH3oSrjBj5BWpUk4jZjop+6rqcymorMfOiGB/K1jPz1hgHWvytxUUtboFQILAV3zZXq3V+4nbQAw0tdHOyiowb15sJQ7H9Pgsbhb1epkLdyKCGkpOV2Wm5QT+mGqutwpeSj4oPj+RDgNbi0+5znXw1FtWt9gGdpi0rQ43pCwBkgbIUCxVkNFTKspm9ChjxIskYmC3ngri0m3/iz6ZnHgWhHhFdzAREnEzg+IwrI+b6Nu/HFl1btOtFRURc8PpS7bDksYY3KLj0D3F/x7O1Mae00EXSyrbBXhKINDU7AaYkYGTgl/4r7p0wrL0UKlC4MnPyqlxToi94e/QjRCooS8eOo+Z1uLGK9cSdKPyD7OFgIx5TteSo60q2P5wuD4X4Tn8bQKbewn8kYXprNCVqO97VvHFPhQDBxBLcQ';
  const _INTEGRITY_HASH = 'f18ea67646725703f1475427720c84f73ca8b26affb49c09b988d19229025bc6';
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
