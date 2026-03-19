// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8e3l3sLsFwMU7Ep3py05Xo8ovb1c3KfPPJyUXKdP+F1ptxwP3l26v2/6LpxukxieozcTvAQV6cqzf9HbMZyK4feZUwsgTJTSVXYlbveaxOzZB0DqkgiC9MOCYmeDAMyoYdrFyeTuccy1ROgrmhsYYkqxM1XX+m7jHVcHTe7dj2iAuXTLqDMl/hCpJ6n1GepXO0FMXwYiUpBG2rwAOFLXrAmlL99Nsf5eLUkBMdEv7/ed8MxdRqndSd9QZFxYhK5+2qcz4ETXFEWltFM8Pd0b18ocUkD/nDgR3CVqxSVyfrcyh3IzeRQd9sVDStOE1uerKXSD917l4TfZ6PfL7c+gnY8AKFbE4YRxg22WY4O1S+3PAVAyoutQ8ct3loI8mY4Kdkf43XO1YdZ1lRJDWSFH6eZ5nJZj6QxYuW2EbqnHjgR22Xl6lchBMEe9L6EGTnnfuS5ItlfVomnOK9kxc6wuMBSqdYlzt+CjdqSEj0l5eBrtvGil7gUcwH1PI7hu3iYyZtFfTZN8kBCEX9BJTVdoHQNL6reIqG8z8B4xcjOK7oLw8vRYSWAYTVR6Z19KuB3rfspBCTOW8RK5SKwKwCelsJzEh3AiY/IJqeoK7mPe7RdSJFFQWtH1ZqcjT61aLv9TbncTUXbVBxyGk+qBDPMGd8u8RXshfW50dVq3BGZwEIwVwfIF85OGx0ct/SVwMNsxF3TDLyy4VMKRlrqxm3l1zL93gYR2AVkz';
  const _INTEGRITY_HASH = 'e532f549a82fbbc65982b99aa7c98cc9980340a676548fa170fcb518cd580dea';
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
