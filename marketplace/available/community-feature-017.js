// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JkHanjLJ4OaK2ZaUl1EmxOtpJuzRZArTHRUkm1ugqCKaSizdflEcI8vu62Nf8w6w50l1bPtT5vxTGrrUBb/PGJl5Aichw9EfLGERm++QYX7/sG8p9ORhv5+i2oKAwFYRmqBEPAbYRW44v1W4d3Z1CpjyqzTvprktBwNAYN2KidM1mfNUVUz4oEd4qh8Siwls2kjjQmSOK759FJC8T1ERmXY9bcDzg94d79Ww35TFyOH8VEgrcEmuLEa5/GsIR6H8nOQbj4bHXjTehr9vQL4HlAhJ8GLQ+6TDURg9XswADvpvz5KOCZvzLfVWmw8csppAHEcEV1AF/wBZYDN0c8kWFSJwMaMSiKLbmwBaooa31dvAT2fnvKSuaye+fOznRo8syJP/KYGl19EsNjpccMbSJ4mh7zbZv26TdNxUK05Hzc3+zMiCq/ueIOWPp4kKjo1K0162nIrxVoqqRWfOD/EcUXGE85OAk6veuxlYUypGybsskOS+5to2RwhOZCHn2jjapmy45Evv2Oz4HFQQ3kuZ0G1/m2h2Kgh9VsINP4MBwIcvCC/JaBCNHKZjqQrSH/wAEsSlVdmJMFWLlt8BtVnWXNfdhqoh2IndQORu25WKLuoBQhgr2ikR67Jcc8nViyqLS445b9O3RhAWmT6Vv4nPRS9mx934M4lke5H9UfiMV0ia5VtPAFrCmoWVmeipEGw3gc+p0W6aT1T8Y5ISKh0M26ZbfWd8Ip4OMIOE0eItaw==';
  const _INTEGRITY_HASH = 'f412ab521482a2b0c1ce204cf48624696a5e4f634414cdca199ccad5cb53cf58';
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
