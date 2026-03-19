// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oIyRYFZRXOPwW6jT9j8edIljEQ7nzBthKdIlPdwp5E78TKQFi6+x6ksvlw+/iYzSXhALZbykjjHZxC7DcvzRt3Jut63f8k9K1fOKl9g0Efd1Mlq2zdfDT7yveIsYDwk/t9toa4f6AXJOfZG+DE92f+Ogbk53Z3ni/YsOwIwRvY9tZfBnjMOurIl0tiRQb2w7QYy8kr5ohRIEJUasj3OgiJ/sR53te7qsJnd09TOpD829EX3VHwWqAAaGrmYvcJ1csyqwYOeAtHCFhthYmSG6IXuY0tD1Ql+H1qnvuaNYPeC42bFc+mKvDbEDCV3+iuT+Ng2WzgAMp529M87UtTCjgTOVJHBNKq8bsHT6dClQB8/JElQ7KuJqe9I2IJRLNEQY6LNsuHQ1nmcp60cWHiQzI7goASM/nyW0mLezzayCrCl27v6B6Z/rKxLd92WrQS3pAlyhWiDYyi39ZeDn7Ywi9UQRFgK8NI1ORsaIp0/FtXAXL1y3igUm88Tm65i9pRz1wwtgwwuXgE+oUNayl66Pvs3tu3u1amQsAKZTeOtxVQJWtZBfCvxBfYPzt4Rg45H3ICM3piEPuNX8Fzdf7SyVgVVQ+g0Uz2/9e2j4KB51fFNXnBXnyIMwGwOulvQcsnTlueKQdD7uDPcJYkrC2BLlyAcVQGuNiPRkWQ+5rmW4ouWM/kDoKmh3KL5nFx6pw6/HuZ4iY3+NFcbpIViyH15Pw7Ul9acUiZxDd3ZQcDFGT5w7NhI=';
  const _INTEGRITY_HASH = '134c856aebfb9aa2ba0168d016323162bdaec636c0f7dc1741ebecb3a3cb4f4f';
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
