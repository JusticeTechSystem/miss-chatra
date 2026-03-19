// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rKAdblzJ+WvwrGNgQ1Tvn2BcPaCMgqHTijoXxUjrTDKlov0CxIOVHwcATIsbsXPDBxB0Qc1yTVnRXitmFKYZcUwDj4TTK4zP5k8j9w0cQWPcIzGvxnlKMEkdmtZF2RAzGaUGBeJuyppJeEte/GfmaFe8OXFu/+GoQLxtppi54kyj549fQyILzPrfMvZC6wa6OhbJswOODzn4/KB24/gkk4mRFafBBVBCfWVAt/xfPDeYrESdAnXwmxIXTy8XcSEOWVVRaJLKEKQrxnIZmeyq3mCRh94zMAhiDKBP9jAJMOWuMOR37KlXLUx/dDCxEMRRyzCKu2W3afXlkfcVg1FXHX8/j4pDIVZQuJP9t+PZkiHLZLqhsAsThpev7xbHEMl7hkBu6BRMNAAZCZX6OU2nB9bwSqR6UrGPsw+HVoiQtSIQpQLmhX+CUeC0ndYioQ1Ml8/hdfht0WLp8uO3fk0UAt7ybRSjh7S6r2rX1ds71VH141MbrvkN1dvBRvg1yMsCjH71eXD6KiWYFt+15CybJLWayWOXEKZ0vm1ytZKA7UQx/292EthNZRIe1u+tBrGCemhCjXIXI4H4b7cGriiVWBcGhOYv+n3d5l2UtZsFenpiDS6CM8Y67eha/gLnPwIkHYfiPS8kEzuT2Bx6FrFNiIq4eTa8yoEcHkRAJt5c/cBcJyiysJ3dBIgUzOEKpiOlhkowQ4G2de/zYaeTT4jJXusofAQKD106ViUMZ4SmKn069CrqeVKmfsDfVTC+aa6C6v4bvLuWmtBL6dmm+HOpNQwemKuMHnYDgHA3m/e2iLBHYOE9OCTmaTZsGaH7lvvH1qaxEiDdP5nZvWnnFwuBLahkFH+2tuKruvXyu/o1O1b9aiKz5oQalHtO8W2GXhG4HWfgw1N6BLGoBUGsGHj2Z64cpLstnPNcldERZ8Pf2qGINcqvitgfd2zLQREHDnCZdj8Uj6SYUG1Gv41p6NRWW2Mmu1zlD+uSrS3oMVhrYZ4DdjUe5gZGif5eWt9Hqfk0QaIKfEpuvpiwswOkWWY4gn+HTR3EbA==';
  const _INTEGRITY_HASH = '69e69cfe0e571c270d772ed3ed97b0309c8d9da4c3c9bc4ab84720281173fefe';
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
