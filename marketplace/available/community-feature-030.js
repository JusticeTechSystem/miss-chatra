// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VdlaNGXgOM1T9rgZnixzMQArQpxLVts1e8LS4eLTAKk80mt2rMDB8UmwlP7fUpcmZv3QT0NDMlkk6bjplFGITid1fq61qthHycc0l0UADdFErKFi1Se+cBpYoSUhIFBQ6hvYnDpa+ZgkT4H/6M9ZhfdXbYN2yfey9/vgzG1LF//jMgHdXYmwJmeVpj2lAcJWjB32GQ2eLpE2RRsw/Pon5bOUEWGtuqgPEmtdGUW5eKZ111+xywfRtanETQhp/C+8ySd+9fBgXdxHQeJuP/USGSngp95jFUX0Q1KDeJXvL8/sZ4pwVlgGzHHMgGK991S39fYpru+I4zCxmwT7ah8nPRpwnszaEQ/H7DapcAXsSKwXXFLXSlkeHtpHW24bbDazXY4ym0ViYInGBmQUTvNiYQqFgx0ZgPkfeGJPRQ5DMmQM39dDgbmrLPci2KTab1Rx9lzWmY3glq6L4wsSLRMuxtQW6IIZ3ElaQmstYMzIEvds9vDmIEu7JLvFQMcJtTJvI8hM2b6DSHM8Mv0WYcHs2kmxXSJlJNvp2d0HaivxoTauWJrxnDC7k9FjSqVl2ke7FCanpsizgrwKSWUE5Dnoie+h2VA1qbz+S+WEsFuEFOsNReo3axzb99GxNL+zoj291Yvwro+wTI0KsB3snrkADhbtqF9UPC84n0WhhvcY142S1mHI8fSVdUvmRDIJ0z8EY9wnzFmSMVUHqJnUT/Uql2RjnQn/kyG0iOZv0TnADXmCQ2jPQic=';
  const _INTEGRITY_HASH = '19913ea433519e8ef4ad35123aac738f7f14f53e908cf05ad32e5030962953fd';
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
