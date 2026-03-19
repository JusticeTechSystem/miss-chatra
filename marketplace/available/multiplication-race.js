// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D+t4WhOQs76cI4GXOzAtNCG1gDCMk0v2yXhhdkh26ie3cQ600Fp1XBbLZ+CK17FUd7Z8WSrv7/2fKJTA2dfinw0I7DuxxMx51OfvNpIklN1ZxHBQTUfEm6BdtdqCNqc3R4eFHilHyWCh1s0xG+V9Dh2YtBTfcC7S41VNwOvLytTemCvC+Z/Klx6ex9C3hBjNqwjN5njk7pQJzECElo+HmOgUYravz74iYCVjGDjUVyjcrhYIahUpfwuV1N+utUFFg7/8rD+UjRbY/mPb0ayOoZ/gxQ+1K3zCYgwazwrYAORIfouAjPIUAqE5gLoetxoHr/O9RrBmHK1pOrI9HM30xeLHGvwBs5HJbpUintlpCH1VucvZp0juO3JoJ/U3a1YcuoeQsXRyg0hHL5u50Jg6+UFPdcNlbl41ReqpQ7RQgfUp8UxYC3QWzSkS7MW2xRpvdG9wLhI9hTaoMO2eWmAoD7QvHGeo6rMTxX/f2DNNGo52weDX1qWMA+zBdleQd0VFN0UR5N8oPiV6dkgpXNsS7LbH+eieBrxQGbwvJD3lcdVFnwafOWteCMBp+KxhRspqITNkXl4bnyJsYn00xHqHI/9iniLcCKIpy2o9kYyXYFIbFRK2xUC8kBhTO3bYLKY24kpYDVDeQGN4syhvFfo8UFYdZ0fcCFsyDtrkD0jcBdCGaV568a00vcFQ8HASwgyhx+EoamLzMSr85z1u/KTmlSwp/0a88oWVJYZMV7p19089g8Koh5hyovO8td5wXXaJEAcqq9URROCfgi9gYtzIV8dICcm9AO1lMtM6dCgPu/3DrAh/mHc/uR02t5p5Z/FgACgsXlgZh8Z5e8VRozf0cACJx0Bcy2dhL0xGvE3Li7thrYYMRvu75kIAAWjdZ1V/ZM16EKO/7WClbuV+BjGVE0ZwUJU45A6xVHqFGP48Te993KNtErfPdcVcl8trP0x7DC3+ngbKn9Vkn4RO+6e2txpwXg6oTuJnGgyw4YfiTp8qz1aLV4rx4km6Z8+GvJG/Svp54QR1Ar9GhXtMeETfbCBu8jAROXgiG+mV4lIhy+PLl00weOqRHpVeuQISO7pun/7NMV6GnXyLAYRKi77ZZ2ZfZrGjCqv3ylQQ1Lbv59qKVTdgMh/m7mWuI16hne4ofsNC2q/bOZIxwdotMDGA1Zq/IzzpiVzpFPkkWDQqIX68dgwty/thMtbpP5MaWtDI4SP0v163xipBQ0u1Qaf0FAxr6rt0Xf8zaL7iAnKlZGDS0oC/GExMZRivr3nBYo893U5krXkLMJX1VUe54x3iLsZaOsrFXPaUb8DwGqVjKhTqEINFn+gSWdbjwuz7A48aMpL+KqR02PiqM+47hVZg6yHkmhdXKHIGewpUoo+vAxksK1+d8vZC9qv/Ro6b+y5jqFxrmHK1wto/lZD7hOZ0Lo9IOtvw2zs2qmMq2wZEcozQaf+INquQtPtjXqsQ1AePmdYbDPVRkfwxl/yRIEMVgygwTiH9+4np39UqA5dGx0elPFZ0aXxw1+buNohgf/2iB5J7FMZRBKjUJPjjcJ0/XcaiRt4CLlao4s2XahHCiTCcr2Ey8HY9Lw==';
  const _INTEGRITY_HASH = 'c5141e8d1289f86a1e9ac8219b3adbdffda1c2d2f76594789bc735c7e73499df';
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
