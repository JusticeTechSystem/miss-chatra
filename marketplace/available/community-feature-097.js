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

  const _b64            = 'IkYrTl2Dx3uet++qtMO+MX7tdgp+0mLsR9276jRNXKu/umFIn0obj9LS8FcAiRziIYRmH+7zd7kF3uTafq3E4OI28wAj6z2xWUa8ir8thf4PV1PRpfut3Ve8va6LbCZQ0Jt7C7yLXYfZZ8SP/Kp+Y2SB9rC779BXWIZV/loNmei1wxyRThlYIfrE4nVqQQcQokfV7bsF+lmlyGkL9/PizjABz7LbI5YuK+eK3T359PCBMx4aDtCnZVieTaGYMP1va3JQfKbNHn0DlrVoKsH8GP2s7K4BEBCXOvEMZJ0ZBKOOUw8bYhKtIA21sluWxQ5yQc/y3WCf4QknIAOP5JcFBz7h+fC7RVlbk7XiMD6FObOSYOMNnN4+pJo+bNLtlXcN+T+mHWr5Fp11RR/la6pg2wLea8iJ3V1H32eREwMXOQX4fVS47rIPh/ZaOzlh4Hl2jD5D5Tpp04/MGQu6UpT2YtYswxD4zuI5rUtWbv1RxuNDjCAr2uODECgWZhuRY3pcFMuKy16FxkGC8JVf1tyxKO64n4PfQS+TDdQ11e3AZLPnuRhTybtWLUdEII8f/b96ANfRh+wBysVKq7ISYQ6MehNPB51WUdLy045cFfWAg2D9KWot7NaM5jP8PXju3+xexbGvtM8CpLftTJ39eUudnQ8+1mGI2qtGZJlPQx5kIj1sJheVGnm8IDWywwolp8Yz0e8krsRSDNiODKbgGt+69XdFxoI9ac06tDiLT3jGaA==';
  const _INTEGRITY_HASH = '0751f388dadf03558d143656c71331bf152af30ac3bd03077afcaecb13bde4c7';
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
