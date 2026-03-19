// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2iYhwr5QSH0JcZ+K+k1UesxMRswrqInp/jlBHIcZwyZB4A/7ALXuDtlZSm8Y721iHxyDEjRSm28Fj/4FMldnaZ+2HX0XerBBWw37kK4oK9xKkIMCZUZL4gj+bFTgTODrPC8Pc4jHmfK8dcOCsue+5KVq7a3clIO2FY6/wLCA6bYooUz0O5VH1jm4/62xqLW8HYvX8QTtlzWSgfqEjp4vRC4uSVNXOC5POTHUZ2hS7+Lk8bUFAiEPvA04fqQdmUTy1HA/FgsZPya/PikMv+PFixumRuoTaJzdi8PNJPQEa7MLWShJQoq2lulZwg/67Dy+SxXHp0y53I7/+PT/s4T0J6pMFSfXeTDWytJy4Rwg5IVJZ+D1vMVTks7XjdiGByl7jjpHxmiUxRDMe+NQDlOkG0MrvybDAJrIS2kafuTRIL5YKAy1/+y2ybh5Lm+O2VKkDi96CHRYdV4Ihq/wf4JvL4YEf7Aj69pCQ5e/nnVC7sekfVpgbr75RzuqfZ+Br6g1lYDsUpk5Sp+n5khk/cYSxe5Ltqab8kruVtGAbisGFzj17ykRTmzOKc1zL432V4Vg4frHCzimcQCWQ8ceBArdYobaRvO+4L+1brp/GpHwL/SC6zMNgDOL941L59v/RsUPdJysR56ftsI3DGvRhCKl7JwJ0b6p4e/xt7XZK5/1HmwAxZZGt0XWLeCE6rnXvx/bLzSOmil6WpP7ND/ef/zhSKHbvY5PPWbm2B0U/tnKs+FXg4mWpEU=';
  const _INTEGRITY_HASH = '543136b58ce27a18700d42536eabc0ac5e15e85712ea49d666ffbb00095a2fde';
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
