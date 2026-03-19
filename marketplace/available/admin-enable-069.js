// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6nCoJD7eJ0q/3bFajesF1Vp97ppDQ/nKEyhbs1V2I1dtaOOBn6In9pxBP6pifLWh4skY/n0HnhMh6vaptw1KlcSvEvkouzOnXUUBsCguYuQXwQJwPWakX3Ixfn11CM/D5Mv+nAwpHw9BXTk5IpY85ln5gswAC5y8ejklcJPWLZw6xp6Yf2+iTwcYxl/LU1k7tskSmKmMQLssoDhMzqjg2U1Jn9orwCByV3RtzXkZEbAjw7J6j+NH7llw+SRWEsRghSui6UkbrSPayIwhQvRc7zEFYQ+H5XolhIRwb/zRgpOpIJS0D+mU76UbYGOQX4uZ3ZvlmpySeoWL++18CI6srPrTDm6cCsMJcqUEJy+eJFmf/nllrjdii8QoDhOZWTN76UPVbIcsnQt2OJUqF7xBtncLZTnFUfsLcrzGxB+aQJLQSgg0VTOCq2xFHtxQHwO9K/ENiMyUBLGlXNDqA0n6KaLyAqgMBZ6mkS/gxoBJf5iBbZTruHwVdWOwF6yO022xebLCV8owfHfpxgA7LgI+06hqfqKiQBoPtNd3n+at4szgNYDKrKfhi6x9BwzOb4YsptqzLA7E82OjAQik+P6Ja/k5TBBC1X2yl9C1XgYb0pSdqvyBa8Oo4Sx/s++rJ2RySr249Xua6RnkglOuSSbUufbyPT2dLNOM3b29cmtW+glJ1qe89YeleWKlCXgcQ+mRd9bVpTR8kZ+9YGhLww14o0jf7UqIMEJqit7c5Y5n6qzDnipGXeTuLN3eXLDM9991hfcVvSYRT4q0HnsBr31gc8dpOx/ALsxoO8IJYn/CTIpSve3Efv3JYeRfHcUE4EtXkQEbCtkLC0YyJ0pg+Q2geXRFTQE4ep7VkvIgNp9aCjn6LP1lBIf1vNCNLMV6Hc/fP57tWUXj4PVdVKOEVKbcER0k7JH+ZhsuUsABoHONrVmV7Y9srbdvrVbVTU6gQoRaQqhXWvk3LsjHePO9axRovZ9ZRe0IT4hM7vTDR1oCSSaj6Y+rIE7RaVFpYHV/';
  const _INTEGRITY_HASH = '0b41694cf64f21360f3057b6d40523cd28cf933ad80154afa8ed28a07b98c8f0';
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
