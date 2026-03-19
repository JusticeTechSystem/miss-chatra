// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sMK5NwaxLgnEwz0Is6Bx9Nj/RiADXRoto/u+a7eiNP9FINbzmGF3Za/zAxz6kVPUTpECNLssxaXezMtzeu+Z8oXlkORJObc8lFsOYs4FV20VSqhds+krWu3u1rxQh2lHyS4xZQb7W6JFzJ+Mh9N60j3vkiwaYcFwfSpsrFUnzRsygn+EqHnBHqJQPiIJCwaCIq21AFZRuxCAY0MO6oS5t0uHs7YN623lMVutmD7Kjg392shiL1kvjE+Tx2J7ySMCfBhabGr3g1n4eFfDmIx1qCAMVTx++ohGNIWWp3CGiMX1MMv9F4iz5y95LCGx7hvEvlfMjXoo/x4bIQP7KHYTPE0AiModuqeL07FfjPDs/g4wMADfT3QnzTZSy9vboWWNR3ZHuG+JuqCIwrPIm+UriSsYTHz2RrZZ3JTa/4t0lgDI4WZ7239UuKNeY9OH6YiBQ2BsGPU82SMu3C3DVR3YVzOWQJDOdJwVI9yxw+nJSjWQ8v4GCYSztEsCTxFvcS5pHvQzy2QoH+OBiBuBkqIOMHSH/Wj7itOyKBuaDODZ4TKCxrlzWfK+3giWUXD+73K7lOZL7Voagy7o1pAB9SuDVvKYF1B/dixoUjaoOeW4o1O0tga0WDgjSNNV2lX1DB6R+UYpMeeOuhfTVuWGR2M/0hoQmSwAVX0aiRnFMfq37KNaE8Aq3KUD8KeHaWWijPiy5sOuawUjo3KbWV/XQcMFTB9pf1qz4k7Qz0yI5gx6AOClWhmwEX1mM8bKsEP9lG2i2TwdlzIbdXb2DtLZ4nBVFaXKt7S5Z9/2hem/O7lgeGjNoOxlgUccnUDfwucaqYol4RnjlNudX0f+KAJc14QveJ8a0wTUt72QcB4j8PCwybvg1K0RBFVm4YGFgdFFRoJCwS5wThtTuLzMHEDbMneOjKsye2rOKSaGe4xMQNyxtuesDJX9T5gwHyyi9FQFOJN3YiKZGNdhRXu06WaPWNLLn+Qq3MSQEux1dLFfjBON18aeFB5YOz/6V1Z4nQCFLosPeGYlTlKkJ24=';
  const _INTEGRITY_HASH = '074c1422bb05a2969d5cae5d7590baedaca90951bf7b1992d52e98546cb75e19';
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
