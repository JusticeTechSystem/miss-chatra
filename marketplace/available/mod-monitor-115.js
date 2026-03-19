// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EvYkeV7oDda+uMY/o5zSHypC2H8QCvHgNDPsQOOFwT39uxzRki5pdRxmpY4BBKUObN2enzy505PB+ndQAuivye7tyb44Ho89wbl1oXDlXNI08rEgIHEtiYkMbZY7WN06b7jf+5F0EuEF1Ik2bdgua7mhwUW9CrOR0ZZ5Z8evttA4WgaVMShy1FESRHcIsAuR757oDsjLhAMP/VXXEsSSBhqL5xRw+hcu3FyMBEl0Yy9uTAYqTSE+0l6Qls1bHPiIufk1LT2ESTqyg96KyD482nVOE0VgrOQ1a8HKp+BeX46H5twvJw/NBtktdmNwnw+fvi4YX5bUOv0PSCB6lj6O/7ypWgPX5ugV6VUmtC/rArrfSG6mMTzR/LMUoQmFwDq8SdeOfuDlApnqsdieKawI8XGIQty1afXLgd4HVkDC+OudXIBp3Vm81SmWPVVvdcnQ3HUhOA1GbPls1cz8pq7xy7m+6Q/ONnaWdbwLjtqdiNoOSQGWhF7TigsU0ouLcjVXnJPdgoCWv/0CBzvhlCdpykblUxF2DWphDVqFyAHCtO2UnudmBa04E19lvTBNYGgF8fRO74BqwVnmb52ZUtjAB2vkfJC0pchfvB08Uz4WzT+PslP2EqRim1LtCdyHB1C5qzWKuehnWJJfSDN6ESMFA62zqMZ1k7J3XXMa3chbTJD1rFcVf2UFXh7xPlqU0elwW/rVnEFFdrX0NMF8/21uW7U63ndzVFWBNo8UBka33C7TNNNu3lYX3aeC2Ddazq9SCjK0l5kSmmdbXX2phNIShNJ9mZDgfhFNXCZI3H0oyYjRG6EGSJaFWGRSy824HrmAWDo/mWdEE8cIfmHat675UBiXXIDiIDYLMbzQFt76JYSy9JgIN1Su+SFxg2waRSA3KAkBfBL/rEbSbaIteq1QQtWLDiyTVXu4urlv/dgCGbBHlqkeLk+Wjxrb2qVHyOeb/p9Z3sxCjl7FSCqYDv4s/T5WLjdVXvSPVwuWW0Hk5yShXW5M32zJD9CuSHfHeWcK9Noil8r0ULMP3Y3eiMXFG350Lwd6ek8eVohbAgBInN26v9rJ76F+5GfA4Qq9HGFd2FLdT3Ll9hXGrskrhkxh7xzr1y3oxYVNVJABlVI3sf17xwAHpaF1GLhwMarDAMvpUBhj1NAenfnZ/n8181du43dErvJ08e2M5CA/uT/p+4BXeUfj8QlKGtJobND6Ni7WNbB0qvZaxUpm4WbGjYfdXnPTSruZk+6GEmttOiyDgiwo9PjV9kh7ZjyFFfe/umnNYbNr7Ayfr3Atnmw4YYDGcO16i/p1m0E+Gxd4GjtEFiO42cWEB+LUj4XCek8lQCWkIdZNyd+PkUVFh9vS4au84bycIPFWJ+zTln3MB3/8WuTIQZAfUZrH7VTRaspoy6eGCJw=';
  const _INTEGRITY_HASH = '3e9770ca0cca4a839adae22226de0042f5317ae5b1cfdc9a46564ea839a28363';
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
