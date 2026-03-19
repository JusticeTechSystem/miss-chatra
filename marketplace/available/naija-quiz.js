// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Gyq7x9xJib+/cUsT1wHuPJsbkUdHqKxoy0GH7sDujmtbhrv96/IyT92+qPQmNZ5r9qlbrSEj5P8T3mK5ROq/2Pvg/OfLywMRyQkCzgQ2D4EBargbamKmcUnTMQuo7FYhFFUbYPsLnMWMlWXF4w7HMUWsEqEU1u4iXAZZLGKhVMCSMaRYJnVHAq3jzDy+M4j7e1fB+zzs8yx13mGnJ2lrjLo+PNmRnyOg4V5bEuS3LXLlGrPjeuEgKF0jGExpmw2alMnptlEBeaJuwIPyLA7TCDfUcM+gemhWU0avaZqXzOI4hmH97SOkC1Aar22SGCAngmLxxyo4FIcxMtV4au8rLHwYobLh4oLQvemcCq7+RIPhGyI9POkoXOXlK7FHuTItWcjg3GUPSGQgloCk8GgLV0FGb8h0UJglTgy+J0xdIMzVlq2/t6qyRIwo3dQRO11BKUf4koyzDuAlPFQUS2/V/D5eZ8hPaOJCWZfnf8gPFPb5hz8EZvnMiRFNUYzNLhm6m4EmoBSrKOt8qwX69sJrDg5Ptk2f6NGzqL4dVeE7AQ9Rd+tedHasapZP7r3jRqMPQfSL+709iDc9nTc=';
  const _INTEGRITY_HASH = '83fbf1868d7e6180218a60cc5a3c558baf405e63d6486c125e5b09ed58e80c03';
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
