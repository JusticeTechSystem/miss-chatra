// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vOcBeMN9JckipG/nX59iHPKyUJTXN+f5KtcFdMmdJ1VDTlPv1K+Y67Mrtjmm4KZEk67xKnSBVmVK3bGecpe5SDAd6jSBHv957mXPQte/5fc50MsfBOxpWtWUoHyA/yNiind4rqe9P0B34SnnqqaOEhD2jeFmVf7o0N1MfQ+L6KGDTfcq8Wp3jne6owOeq3q/AVBPpMj9nEomuq85BypiWSiJD5bKL4ZjpYUHlOICabR50lXTNwikssiCBSV93al505wlLaWgsVz+8eGldOC9yXb/88hnTD8Tbp5EvDVRMX4ZPB+tAWHVl+AxwDWhh+4SWmnjuUAjDUK9eYSAu1DR59m9z9nhruR0Slv6LOf/5WZ6VTtMAjerFmTfzj8Y+VmeNtcCo+DdPhv5s48a8QxyAwM1f3tFUsz02eeD/3i2Q/iuIzcgGZtZG/trCWqcdQtSfcED4Pl0BiAInaI+BQB4ljGs91G+uCSJI9lf/DIWE/z3aCVSHVICwg5cQEgoiU/h+UzGMO1qPq9V9UlAXhCcE3DSMX4ENcmNWF9wL30wLiDlwPtVgwpNPYt/TZZ36i3UJTb/GEtMUr8a2AmcIsp+JPZFNKRtH7rWlY2wy4YcY36xZlVw1PbXtHYD/f+2Isyt01/XYZ0O4nHoYtcXG1bTYKAKshkILpczZ+fnxZmxuW6BAje9mM+aUByyDUapNUkzHlQBt/6tND7A/+nETn5iwcxFqD/R04mtCP1nthZyPCjswR0ihMBhTRIU0hp/4o3t35KQgnmGnFUbNerij4BJIjPBn+db+kClSCqzrzLYhagDK+Qz07e9DDxkzlvGXCtMD01HnRn3SoISQ+pc9LCHZxaw6RIZxPeW9DiBxW15WlLlXv++rykw3+b7Hh3fIAOzcwxQgoQ508RSLpQU4EKhq2sIoFLaP+s/QM9lxGLA7C0EbQ2FEuDpPZOyZk/UFdbreJIesHJ1ek9ntTFBLbnQsO9upmxcIaUmkS4TFoMDN+wqmFsxpDVA2bGiGc3ze89eZw==';
  const _INTEGRITY_HASH = '6377304096498f60c02940e2364e92dff4c1edfd9b3a25cc958d70fbb8a31a2d';
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
