// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KLizLACsQ857lykaorVTs7EijZTZpSN/i+OK2hCZmRqXyt8g1M13USTA2CfS8aWjZfWgOzv3FBTxddGG9DvD4rBAQfJs5vTNwusJb4l86DR96sIvwRlypdv6SyvGHQ25xV+X7j4EQMBA+NYeFPLE++GKkMvjSgtfnInI614dgiSzF3L/ErQZP8cIDx0ZQLMCilKPEsNuyGa2UJhJKM7hWN0jOwAjQWY8ZDnEFjafLI9uSacm0RWAdH/rajWQrSwdhafOPbafUSADEXIx2xgebYjzsobnVjtiq2SxLwDaUUpFD/sRowIHAjSU40/H9eaHtNLNCpgRUD23gWlKI84rQTZp+Qwvaq0V0kT5bTtSDZ7SNJ0tb6ddEySsm2wALaIC28f4gh+PjQ4foyJBMajFUwVw+deM+5+yc4FCOxNAFlwXmZHT3xDQAsoc1nD+lekcs4sYWm8aFNpV3DCRJfFmGu/2HajMSeagseZ/h7gSn2HR1Ajxny12NZ1qbujODrOSKz9VmlIyTPqSdaXv4FkFgt4VuV9FrHTCMk8omfSml0cxnCXMS4rji2lj6N8RBiI6pBXBRFCYi36XuV4GqsWs6VXJzRLEjawZvRYfsMuqqr1JOh0pW6vNwY2hztlV4ZvsApd9fuGokqy4hPhOApDPIK8gZmsszKcQWGyodvNhMuo+072BygnhOudcu9JppRfF8BUPqxjNMq1Ef86pxwJHQgqVKwGxN4Wk2id/zzmcNzoU0uSA0tVTFv3OphBUanEljUVKGW03Vrfvmx2VTpX/E3Uofs32u5HOlPOZX4KZjmu+S3M3XdY/fFVv3mdE45QyY0Ng9MXvpobczZht+cIm9utSwFMDemMPyeD8+NVr8X6np7RDfI6UBpEWnx+shX9IfqQ2h93caRlDlpIgMrJzDk5Gjtz+8vz3+iZwo1XAUfiUkz4JqaeGY+XD5jcBcdfr9ncM2rRKAGpVxDGE77mVoAnnQSuoNTYvXL5CSJ6RPy/nCah+ucKV+tlS0rliy1aHBgBO0rmwMGqqQLyTCO6NwI4eTMpmswvhOTIaj+jMwELv7HVxPOf8Fyc8l7kGlrfMN4UNCU6Te2b/Bc3kUBbYhN+ZvUtANTERMVZ4+5123qOxuOBT+3MMbowcjVEFnVgXHNn6sH1TTlPZe3cSVTaOMQ6/VmuTB1WkUEm3Y79OoH1X1DV0GEDHGhrQvpFZGe81CyOpj/pnhq3hnCiU6YfRMGd1arRlLpjl37IJU0yBSJw4cB20sYqLC/NjUAzQlH+ZXpOdB+KFawNGrw1s6CzMS8CxK6+p4S5LyPvQrsAyHrrzncuSMHAloq0gi7oXPKP9TudSknaGl2iAseOVlsWyf8eIqnbGkGYMKEPc3b0tQBhgy6N845PIvyv/s8//mDPHzLA=';
  const _INTEGRITY_HASH = '2d3b85a9771afa0dc46386b488f1dd489c7cce49d926dd913bc02486ff7e8942';
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
