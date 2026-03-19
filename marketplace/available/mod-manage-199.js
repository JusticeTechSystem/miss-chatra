// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZCPw0jMWTIAllSR1xr1ICx5WnlJrh6Jz8hX3vDe3Gq/uw7FM1NKR5wO6OnpjCcHA5Usiev41DHJpLRa+I8bKIQgZDiclTOqBA/lodaiMGNPQ1ZQPWGIwFKrNtJEKy342j4BbMdEnDH2XzbDB7ppYqvAXAGx2VCEDgNuwGHmH4M6oO/lbBn73ObA43kEaDq61QMwJIw15tXtBsEYN2L/pEOJXE12EDSZN52AMG17/RsVb81j/z2UyoPwZMq890mcNNBfQ5BcRC36ZSMycqC+qYg6sfF2hbfsyaEf3h2QNBuirWyryHSYbrm5XcvKEg4p35eCTbFESbS1E7dYtNl77Fybft5BacvRhtXHdGKXiEYf4AdAt3DNqWBkQf7BBXk5+NmCmoth0SxD6Bgb25AWN3Yjc2v7zR4TIrDnqfAZ0u8zEbUhCdT6ZUJD2T+kRzsHWWgMLRDhyT/YgbGYzX70ncTX8Oft7DLm/gHwipKAtbRmfWDtkutH4dqXwigCEvYqVQaUhmuLwdPofJlvUnc6upCtqGmDalYI03GNjD6z83FaFjcmKFA2Dreo/QDr3eCF4fSefrSm2saIBWahzMEkkWxKYeLHZJsQr272egLPvUMeKREWLckG8vIX5x2J0ph+seffilcQDyMgtfeUd8o+S2cG/na635McBxfnEvDhTWtL1NJrBSzdY/+qhlwNv6ChbaXg+vIfmzbGrsSD4u4ZYt/BblAvMZCqcR6o925h1tOrKlwjsEOOGNpkCzbT6NMrg3WlAwMcUIgiP/fRZoMEgyJlc9CU8aB7TK/w8lLQXIEBGXShcGN2Q9LRbXcUK2FPRA0pKS+qWuqtaRlIHB8k/d/vvFEkpP/Gz6M90Y3wEaInsgTI0SbL88ry8EULRcCdiwr8ZiVs5L/7u48qdUH9iHIX81t4qCfKveakRV270n1kDj1xPBbXuFgNxth22whpDZxFB/V4OXFkCSPtn3rNZuZdxGKg3wRr30PRRE6lTF8AGsBBReQ08ETbH6OVhDFg9z8A+d8AsP77DuWBm6YORU/F5u04T/Ns4NhMhLqUZ324wBEQ9HqFq+0CWlG09tqrzYWVOAQ6ypKV2Kj+VhIbr6y6OtRD0LsrESJWVBB+BnpzgQRP1BtoLc7obsMw6ci433AkvU0CkYNTtJ6XOlWT/nZaXQuY4kPDeV36FyGnzIjcnFtBU9RaCBIEaDO3z8uydASp/gzW6RqY4+5W+/Ll8DjfOOIltKz49jNiwn+WNb71g8IRniliYI8sMeoIgFVJfP32sWtpKgjleImZiC2UNHTB/A8u+fp6AvHiK6BkPEzA/K78lB8/57KrN7UoBGrk4+0yDP7KpKhjTFulZj/3ZI2pcvsP3lWew4WgGPDa63YDZ4iYQs+brQA==';
  const _INTEGRITY_HASH = '249741065bc9bf63cf539d65dc2e88a9b56db56f23a641a555177270ace9603a';
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
