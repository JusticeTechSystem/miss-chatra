// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uycaJoa+XtFlYWM7XI8i7tAgwpeFyjsDKMhonufcPY4IYbXzfFGLT8ASe8bI0e7xiJmUpd1w6dlGRP+fMiG414fiM5qJeUG01InCP003YxagGPngJ+/zjfsY/hXmuQ9P4cTRjF6Mk9xYIogcFaCGxYVMTSqGsdX+Ua3BAZJlvCLl9n3dUMEcNwUA70np6x7piw3ER4gh4N4nSXwufR2uEwxIkjNdY9CZSVVzATNro/9bqow+N/g1iDS0RF6iA1f/1yn4HvxOWe43bR4ObVkeTQHrX1AsnF7zvY/tA/L/LezGZqI9jxx/FE+G+H9yocqvLVJxes6p+Y5F8UfXfzOAu/kbb7M9sWZjQhrTVX51fJ6DUFqs5YkmFeLLG62f0T/SpEFVoXSf9Ad1z6Tc9Ww3VyR5DxzZ8bdRA8oJ47KQck4c/fHUZLcJciKHYEAW5nzXi660hnYVXNxsGMfQd0NBmJojnkSwrHzzQ26S6aM/WQZYsfcdIDPvcuOg2ZOxpKw1IewRFiZm1bi70gajLVya9wqvhOya1byO9USQ6G1BO6B8CRnS2t9JdUtmiKfOabVUBo+C6ex+7/niPszpXnHrgqnpPZFFfo/TnQ0X9l5ShioE5nr8MDiPSbGu7+kfCkzG34xYAbCgXhMObgCGRexB5KSsgsx46grloWOX5SJcL4euAmY/jZAkkJTLj+4V8e8QPIDV3VfGkX2DZBhBTYJjIWK2wnzfE1OjQYDvba2ehQ66DrZmAKY=';
  const _INTEGRITY_HASH = '3aae8816bf6033021230ace6f7b78d0062b818e0233dfffaafd3f98c30afa3e5';
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
