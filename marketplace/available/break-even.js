// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Nk4H9dE2fk6KSAL2yK+jjSolCXwITkVXAXovYx6ICAA7XpPudFWp0vtcDVmZaRd0FimPymzGLNEAzzPsrM+IHpxGzJ+vZWIqa0/90O1KpN4IgoGV86wr8+C4Sq03KW+ZdeIzhp1Ls6bUjHPVLwG42dg9RZ9kf2V3V1Jo4nCuzdECDY1HAjlvLWsqKlM2MFbh2SpxywXNO9Vl6hhyRKHbqgGyhURB7qyVMIDnkBc5U9mp+b84WoXko7HXVmZQcK9gA1Zaev2UI5KfEXKFfWyCzjcPLBSWzmMHQpP24mhq3TH2E9y741y9nKpRvV2IQO59xKQ8q8R5hmtGHIDDBHUEBhshQVMFzA0xXE5HukG0Md+xAKk9cuj9+MSc3hb4++w9G0rdGpw8LNAmBtowK7yQNOMhaTYN1ynYgpuGBlpAh4oHtteIx46dXXJOOF6JLmazu1kzjOb0wio6VscAQBPiexDqU0kihByXDPCLev9Pf0MRUzfejRuymEY8dKwOHyI5bZs2kDS2HYwNjryrXWkD0iSkdHNkn4T/vHh/8/alCM2e5rXTKIcga+dpbY0k5elZLd+PnoGx9M7n3TvJODHU42yrngYhBUtoSmS0VJHdu7AIcHJz41jvuzsmLc4NsJTbPDqQBmVb+P659P0SDK8sqb0kAlLcddGXpRrxrPiNEp0hMYwND9cXVCoQ1Fh5bmP/HATlVPVmeZr2OeHVSqx7LwOOGXyDMhM4L46zjQeuXWGDs5uEFO7hnG8y/hccO1y4eIr7/ksYFqCZhJZAzcgsnl0hkcWWZ8i2utXvuWa+lGsqmyJu0tlIZaDk3Gg92CtDr6rV+4V4W90H5RtwGBuyyg9AjMSHZk/2gmjCeBEvA/58Ldw4R4xej50NOLfWu/Xnzp3HPoN/38yHvRgONkQOnqOeu353uW17swrTGL9dZrlkYtssgsUJABIQvy+/l1kCkiwwyYxpdMY+qPqHXGpoak659Jpk5iWsy4y8hdgsNSo6TGf824bztLUj5euw4pxBGwwrkSlTdCUDSOrkg0SOeB+gQkFro7soHtL9/dCwqziAzUcaK6vxSvpm4Uno9oiwniMKGUtzC5Eie7E70NaliD3+9OBvESmR4+M+byhDD6o7RuhoxzlvKILWwJFko15TPnEMgfne3LmQJIJi/5dZ8UVFxEcumes0kW2AS77d1F9n8pvmv+9MKbHheBN9q7cf8qGndzOSAHFxIK3sdEJyBwAZPRRqKdr2BqGK1JdZmHQOnxIPA8qEXPJ+FR2RZfIZYjFpo1EIvN4M97XCQ5HK4J/X/LNUEkyD1E2h9HTwiZkXqtgv3z8vadi8eHiSTcDlu2ZVT1WDKoiKjJTN4dCyDFi1/38mZ6wI9JgtCw696bDS4qiARCFCbzJ5gQOrosn4lx1LegGtHqM4EQ426ii1RPQoAHmonzhlP/juEw9pPtoYZCxINIUPrORwFhvqZXSxMuGaaXPS/ClTO5OPs7DozKpcaqjJUOQniblQMVPckRQNbY/yDNIi3IyEpNlNxUw6Kktx5N9dT3oGA06FRSjkXS8LEOJkLFzgfCoq';
  const _INTEGRITY_HASH = '0a331bca922262f66a8134888a24d7d791725298c728a11bbf746ae50b639728';
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
