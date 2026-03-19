// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 't/JK3llmBgY2QVNWIBt+sNoFhC+weSfGVu40w4/fc4OpO+ye2by4AlJ4VK9T6tkSX+HnqeNUrZ51i+tgiJYgFezailCiLdtB2gZsjTT4OI6j7oMBc13t1SfvDbHMZzpnR4s79S3vl/eTQR2SbIY65czS7mYfLJq6Fv5QHEU3hoIag2JvyXr9KULGWSW0+uKO2nIw+M5Z0oiG/5R4zFlrCN56jGD4eBVUv/q3Z1WMJQVCrJG7cC0fpYJyPxVY+JHCnclbF/MFGHLGWPwtP/1rEsiNEN1W5LmIOLK/QVcQ63lNXhfAZ0HwSUsrMELVM+eZOx14eJEUQn/IbnweM2R3SseE98kmK4icEd35rk73TGdEgByjX7y8cjSM+XLVxC4TjrutccUQUVFCX3giHIxk+oEr/hUf4K5+Po8pOC/vjPrq8lgjHubtiO6V/ZSq74kXgLiuN9W8V4BjM+iRqnfUiwsnWQ4w2yhlQZzzukUe0Xrk8VP42/pLkvtWjhC52HsP1s13X4typgH9d5Z5PB+8wlTiVVyXUoDdaedGSa66/EsPxhEvKNkyP4SLP4SgqeyUVuLUZfMpP99XMNvmqEncjIlhz+/isw6GpOv5IqdFjYLqAPKjRVLNDEm2J75qsyqkxGgXC2fKOPsO9nc1obPluc0fhkou3buMp1Um7+IWfKnej/Zt0ED/pQ/bR+00Q6rWa7aTiTwsKUnyrHQaDNDzLaTecXl/+CxwKpWqYvwPaKtLqYfCjx2ueG2O4vAQNvPBZUCPOxD5S8pOeb8Swv4vEbHCEYGpW3vQVKRBoNl9F9+uRhmmfwbnlzGV/wEEQt+Eu1tIAr+XRFhfwEUb+ILzG/WnfXWgzj5AIolMRMsrQ3uhL84XCiCPxgXZHgseDUrrK978Q5PfQ4IBQ0hVxWC9e/qWo/36be56wcvf3L2NNrK5kILPQyJZ+05JyHqPu2M4yBGTtIdUdfseha3qzOdPWq3Qwdaohv8Pur5J6ADWVk5xWHqYX17C/DyExi4jHOpFWoT5vaynUAgmxeqlI0v7vRhjsvqNUBVJAKoMWAnRJjmUD3GxwWG/DJA1Tm9VAhPg3cuHWyppEJOLG7WQvDxLmFHzEGcEdnX7PTdYGJ8Nj4xerxdLfTpzHKJxR1wobYWLE3aig1OnVVTqoY6HgYi4YaMDJva0l00qOLWvstoRXzLV8WWXorWHcHxIbg94gh9ctdsupgQdB4j+Oq06hPXdGa5F6O5Br5EMVykk36NhUPX5FcRF0Z1WS8dZO3F0RHA5o41bROI5P0TifiLWjg+0bMVbFT21j1hKaKk9eB5X5VwCYTvfs6b7GG0pgVJAD3eXSNKDsDoCHJEURP81fOju+snmrYUcVNVchGUhkWNG167U8TcnKQHW1LA+QO0vrPZMIrc=';
  const _INTEGRITY_HASH = '27fcffa76e703e625ac0a386d6feb16eb316b2c283d887003b57bd069a546fbb';
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
