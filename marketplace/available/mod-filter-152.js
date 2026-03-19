// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6ap6YgF1DTPO3Z+5MZ5dpFE/fwTqr48XcpxLQRUH8dezQ6WmL/aPNqutQBstXOem3pV4GTw8X6cJi+Dzfdool4Cu7hhUnTGT9VP0p0/sSLz9D69R9E7ZZKS/pWZUMB40Y+665g50PMh5cfLO67bG1jsB5KJKO19aFZfP8ERyB2sy0V/x2w5Bd2QtGNIlx6XKpoQYVZkKB3m1Ob2ingmb0j+qiIDN6zxPfvcm4AQoRJMSAq9O+1Iq4GHFlWIE2uc+hMRESTj80YxAtLC6tpTkdxr3B3B/JlCpuPSKRDzJIQh4PkRc+o0J046sMC1j2sB857r5rmHDfgaA0bwPgll+dHYrQm1kw83rDi3ajpJ33hvpFM/2gzf/+qKcSH4yGmzgiBEbHjvCjROjMsr8dOBNq2bvoExhHnKELBKePHDikdfKX9jxaYeF08MbwmfjlezrQ2txaE6QGeA5xR38AQJGGMEz1rtg4OkaoXK7uGyBCPVJPkVFOSl/4OxUs6pDnQx/wo6sr/wfZt4lXo1JMin+x8iwt3zeuAOK+qt1C5Sn15uPU6jTm1ehmrDJri9TNjw2N1huH/hyVUVIQwq97lxrPAB4pweiiGjQt6JKyV1wQ9GV+lBNLkBTdssz82oRrUdXfyij1/KToy6jonC+4/Cb3dxDCKS7wgyMV8Ngae9yJi6kEdA2TSx2ZQpQrnTpet65vp8w4+MY58b+jkhq12DRKs9cBW5huTsrxkKecQ7QgWwrqyhr6Uc/UzKetTltHDReqkzIJ3Cpyyqgam+RK6plzMVGy8yc7HvshOtN5ZAl8GFUa06k7HmnRpmpAK+iYUdN0XRC3bUPke3e6LDTyCA09ITGDB9EMw5OsgtOVTNKxdCKG8JhGKI0+OlxCcGge5cdVcIRioCGdfCZU8OBrvrXbW5TEvuH08tEBFKJwahZvHWq89aLE0jjG3x3Xs+Mgo8r5lxyfXdAZJkptprbv7MEUezIRQ+nXyeLBnvjY+TJ9c21ag4fxPGiZp9ySA2ukyH9gjHQg6msNenrAYX1zy72BLRmrAuQO1TocD55SNZo+vktYou3FDLjtXqJUaZSsAIV7ugpY2MIt5Eb9au0hvs6+YMIwTAJKujwFecJaAUc3L3RtdFJ4xStP+aWIJnlz+muyFFNIqFfmVD7zuT9J4OKOCehZ+kNVffdP+I2OJdj60uIZGwJrU6DWLZt03aJVrlu3EqMcmyalhH2PpTvyLfaIZjSK5xyu+mjD825o/wucEAQlVcJlq7Yr+oTb/xzRgYKTE15XnHad6qmqPU9CKh2x8LFYcJ3ypqhq5Q1zoqEEl/5aVeW8OQL0/ES772n8uVDqnvk+BGGUvbHLIeYnlWyrE4dMOheurqm1QSd0LJmmblAV9jkz12iZg==';
  const _INTEGRITY_HASH = 'dd410d2ef4311fb341f5cb4ff94447036d68f7bcdbb2f9374f07facdf5c060c6';
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
