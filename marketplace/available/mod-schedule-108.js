// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vkwQPIsdlrvHpUJq2Zq/PjRRriBIRpUFmB1lGGv1hrlcyVquGVWbTJ9BlOx4BYekpS91v59gsLEKDi45lBUcdeAWmGOxg7CQ0PARtFpttTv8ZJo75ALq81uQu9YOlnUovGJN4pbR1Rxdimbx5C/fYGR5gg8a8nyHmZpFn2QeAk6/7oq34zWLIa9Wg+2mfPE2aSguEz4OQUJ6eTH2IyLJKJiWdpeZUFEEBRcYOTGAnOOSVRS7XkRzRA6fJ29IVYR/EdrOKJWzPaC/NvT7evanaaq1t7TN6gsvJGqgGrBMNZe6Avb1c685ixq/h9RS1Qsu+bqKS5KAdN6vVK318hbANWXUQpSITT9eiMiufzsJuiN5F+bcZ+aFIKM210OseFNjP5xbVLHxgWdHK2MgwySV8YW8tOba/dwPiN0YMToYVjXcT5S2s0LBisAp9JoeY/stt3NVcpOypxV4tpoYPBLG7iQ+ohZ2IEXkoY0jozSjVNBdr7XIe21N1SM82RpBvtTIDtPhJmogRq0USNFbl1/wpf/5oINRGBUkqmnT4hFxIR4d52PDRc0KfCM7uStYTIaJrd/duyvpF617YNJVYGBsz1XVQjSJjVMxf7R+5rFoY7w5xE0Cf9UK6ADz17T6Bo0kUOIngZpuHAkj6KWEInUa5Oa90DSWiruXZathCXN1mYaloU1kMLijINedBsD77NJfWx2nGMJY70Z+EGIIQfN6j9FZowpZw/iLQ8aFNJEl+Q8H7d9s82/jweKE9hFHPj+xB9y6Zhy+MBhbSHm4AHVsq9DXFy3skkgVRW1mTlmmxiVepJoFinFdYQzMewkilqfhD82Vw2IHCty9yfmoxHjQHTqZIXw/+3nA5bfHnWlxFpMVZ9fSrz51nfyEOzQ8fE+mAmMqJjFIBPc5odvLv3Swlvko+H4nkksjeQk9vBo7rqVKKxorG4HRHYnuiEeinagfL2pu2zKQML/SHsVltWq/yhD1qI+U+qdQSLkHNFSJ2ubqXrQNtr11U6K6WhH73gLfRTNL4/9mcZlDHbceoJ4pq5BDsfMeA6fBt+pFGkaH+VPd0hL7UeaUpXn19dxTc8r+Jni6OSYJK4qH2nDUdOsub6MDFQCkj8UHK3xJFiK7QN7oNDQgC9Nu1dikXJsORbgCSr7lFtrsioVF2OWW+CTGH++xqifefqqRe31I2tbDbwvD4XsKWkCvguB/XzkLbZnsUjIGoVaRDLTD2rlGXJdwCFRPyLP31WDmCqTB4fHTB7owwZNTgKmWwqYUmcz3W6cyColHHpLl5fIZ4z4Qjm4jy0j0onUAca20m/Yow31tImDJKUm4Of8RZjFoUZUrIKogelJjhPYFaeJFwJlNAYBjaMxIVJ7b3hf/sFcyy9vqGM+L0YYsUJfcmt+54u+cM9BL5lqcKHmoiHY97Ftn';
  const _INTEGRITY_HASH = '5612651abd6f3d271a0e2e2eb4dc25cecc8e44ae266a0fabf3bc76ffa1bd1c59';
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
