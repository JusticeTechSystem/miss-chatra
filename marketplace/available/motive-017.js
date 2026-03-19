// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gTUY34Pn+kDZRROAT9zT0fWjxu1zpHMfSyw2nwtBfS2d3fjdWOXlPi/NEqcDNEHaSsVjpzKXZik6c7r+uZuxky75f5TIZOWE1ms3u3pSY9qJlychry3BQ1uib+Iz9JFsB3tnK7C8HVMGWCIJEgdWYqmeaAHEuZ19MDtO1C+Kxlf2xLYdXPq7UF3er++gCyGDbLY83g6vzvVb5qnhLejp48pzP3eCZWsBpR9t7suIaCFg2fOeUgxX+h1RyuFOny7yLwKriksDU73ZYqVdxW44MuyHZ9rITsGnCFrXd6gIC7VJ9ZABqRYK/oPXXLx+/gpvyW398IgrhzmvglhWWJES6Ga2pGX/l4Iu93XJt2qTVDKAYPmdBETFazlSwfRyhU+i7HqipWya6lWaeeEavjYuRyb8lyFwggt2GGmcsMXpXaTATOvuPiVf+ig08um1zFUzKhvNRbCpFbwxL1d7Hj4bkHOuMC/K6raoVwNCMxMzBmGBW7Fdsqxq2vCITDnHStERKxF260SkkKrVwPZqJnQmzdOMRRnxBdTCZd9eoLo+qrjmCHbVM16pjPn35fKLN6N83A3xlBPL6WU3YpUkaZybnOxxPNV+MT5rvySDj2gE/PE7zrWQFLVBIN3MDZ3VA8TwxEnf0uNgV3snas7rZQDi5sPv27KDMsLaa8pp60PPixFYy1kH9hgnrVWbsGsHgsP0joBUSmzInx8r31/nae9Rg1PrMBHGtPz8mlgLPaBzqDxohGsiINvbMO70ViYYRfVAzMol9j44l415Q9nXzs+wltyiFzQ0cyAvbBF6lqKDW7IrxH400l+ys2627tGf1cKYokp/eV5QC8Kq/Kp1/lDYfBYmhvN8KK5I8xN5u78UW23dfno9Xmu+hpJDiLygvK0i8unulZTivi2tWQk2OK/l0xPdhr8RR3EnALof5aBXRShVZfXtaWI8oVATHOGwg3YQSPqOeJVq1rpzoManFOHiUM6ZM5K8QjUVhRUiTWcpMr1GsIX/+sgwb6tR5G8wAWwvqIxvgmjmhD6GqX0T6FMUeUJE';
  const _INTEGRITY_HASH = '606fab36597058ae88975c57149009db2c251a46b01ca14821168d5af55295f8';
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
