// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kaDtcSjfZjU0F0daVSR4FQpyrrUL6DipI18wTHen8/mY1HEGbXSpS851JRUEWUbw9JfHvRLSl9smYeJ7bwxIh+4v87EpGyq27iqqGAeKvD2Y+arJ/gSXGNaduKrVnEVezjIqNQSmHmdylbkl5l1Ajr5WDzamn2C6B9yWsEPU+rlQLJdPByaa5pLfBPGn5/zEv7FDGAbZHZ+1Iu2/dJyYPGWyl7xiNN6V6ZZvjpEPoXtppZ58TgNSHEFS9Que0L14DMkb8Xq0Aa2PGWwXTHFZo1Ts8+Dp8hulZanfDC6KX9OR/sjf20b8UP4jw9zsy5461bCixv4XAKd/nPHlP6pjrQqgFp8uLxa0pIEe+3LyqrfpKlChSyxuQdsS1I/Y+tWXoI+Yf6NgFAp3IrX8Sg44OX93WZtl1t03bFXhn7x2rFounCm5PjLNXsd8f+poMmL4fqindoewTMCMrBF6InBCB3/a+42futPE7rZbr5yyTxiJWpo2txzNz3Indxwa8chs7C+B1Stee+ta1YuBArFgls0SsxvIEkYQPc/z/4glzCH/oF1CWOGxJjmkY3SE69JWNEHvzXnoFkHUPeMgJqX0UJyqe67elqTKz1QW7na4u1cpSOAJXvyoedNebH/zkdx5s5Xu31m3uy05VBfWDR8X0VU0qQ015eV559BvDVJhYSDBhrp/Jdw8WJT5sbP6dIp3fyB21KtQ7SAzYRvRXpIwC+Lh5vgo0NDL0tmv2aTKLFNPym/JNrXqiUdd4QIXoFj5YabscbTxJl0s5nqbO4Ch8ZWji/pBw3sPC/Ro0q0b3dKobSNYFQk7+CTUEPWLsDmCjX/1AC5BnzIyvGVxf/GVxoMipn27XoeMA0gVhNIw/C/SZAz9OU5sV9ZgsX+5ZXg3PUgOwCh8LoIUeyYz/sGUrpFN7UTY2eaLS2AaXBNq7ofidQzFXHwDimyu9+Dn6pJrKNeMPWfsF/YxEE2cxaT6NvJffYXiv/07gmEl/b14EF5s1csWuXJHy0G/4jmom+6mprN8T+c1ChHZmoFg+az7Ph10YcDxPb9hymsObLaanTTlgBg1JdwR9zKbctlCqnbq0Fg3zsrDTmGDluTKdtQVV8VLEjK7YbA9rNsWsDF51KGPlhmJFJG5UVZspnvURZNTPMDTyL3pQ1Grf0zkK4mmXsZWTZqUGjLLeTBgr6eASIJSFHQ/CybIqMsqKAmP5e88HwAywTNOkvUWWVz1fJ/F/S3oO9Q5uzA1oLU2KVQI9DzGkI67MxZgmdJGsWbl1wKFr1l5w5glng1K62Y64DBfDMuSSYAHOpKKIaEwvMUlrU+75zZw0JwPL+Lja596lHvDoTQQNiJeFjWq21Ey6H5WLOmT8TvSeiU0O3Wi89ogbH7yyJ4=';
  const _INTEGRITY_HASH = 'e713be2fceb6e4e67e73cdca160b80290b181229181eb38f7bf447da6c79f338';
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
