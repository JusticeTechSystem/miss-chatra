// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QWXz+p5+B0e3Wbzb5gMDiaAeVo9KHTFAemJQ5wJNq1+uSjljGmIRcgNHYHgRAZGTQ1HuNZZtjlhrNLFPyZXM1u7IvF2dI9jey1X8ng5Jx0RWZFbPKv2FRxwsbm5FSKd9Prcgt+5bslqE6CfP7CMXOkp3bhimX0tnI/Bao5MmA4A4mekoFLyNcZk/Kic/JWKR55gHDjW06AZ4/Nf0mbqb3NoikNKFhfQmI/YmbX/bfS4BAliQDIKJ2p3FiF8WbBgZd5ugEvlH3HHplfelVGZ1HuC11NilzczuSJsNmxmSBv4TWQ8eoD00OrKt1OqCdurJS4M/HGAkyV3v0dxN4ixUgLoTX9YuVhnoRgfs8V2WSKXe9FmImp2ct4rzA1zcZGrvyI4CoOmgTOtsbSXtp/vFXY6nxBIx7DVhidUvQ2GRoqSbeiKz88giY8ShKvvmR/hMIKuvbJVGdGQnlKRoD2Pq5H0+uetrlSbxGGAas13Aiy4nJepkiafc67IuSQodOVV7vUt2Uc3tLdzlzOsVWJylnXNCc7Oay6CSYVwEE4v68aggFknjT9dHkw/YpCgAfJGsn/LvjWVT77kHx3hgfqOd1vG1zpisDReLITL1isV6dCJcQ+xYz41ofRO+3jLHRsT50kbzMT7JQGczeJ38WvF+fEFWUH006qquxZFO6HgaW0hQ7ngYzxWifyGGDBB/iXH5rBVfCCXeTKURdl9JR1shi+q2Q677cWyn+AeEcQnpUu4kjqLrdgYLLQ8UUDaVCtL4UeTrgT5xO3t2zpZJHDfbc3wkAXSCQ3WSD8/fFMHXdD94sDHp2SvjWl7bJYM9wjzUGabc1gLVVMm+KCiYJ1stGtag/PNqgfxhcW9UXcLPAJZa52HTagbn7ONPLwFbyFAjYC4I9MHnAcoEEGJHP9DfGv4RXLHGMO1DO7F+BqZIt2mMvpxz92BKaj7fR7SkMGET7OWbLvDNzI6MGJNFBHnngTjFiQvzAVZ32bldUC/cwqxgRlxK49ufgWDW5/82';
  const _INTEGRITY_HASH = '5a0d62def2d3128c75a4441315c0059006f1a001b30b486f311472c785c27e28';
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
