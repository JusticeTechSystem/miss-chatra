// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gnhvGzo91928ADdxP6PoBsbI4aINoGhvAO7lJa8ht1ugefzIh12FlQU8gnHGBgaHkgALN2FN9cP9MzcZ0RAGp4W14YYscd1sx9CLu38HAjhzMs6jfFyk74VvwEPYCI/+QqtMAYB4U5knIc5ZiuuxwPFrS6L848U/HxGsUqRkT6DyyYY86W/8ztCfj9HxiQoKNLZPI5Z9jg89PJVAa9mfsuAo59bQNi3Dpi8y/XLVkJ1w6qhG7Am+YpDLuyL5ZtfDWxpFLbLh5BcXz2MM5Dpdt65fivMl6yzfwMNycWcfDznZ93XW1Yu7FFWKPDn9kwPwIZV210Ui+YwXiBuosoaRgcaPWvslbP+fbcE7bsBEhSrvlgO5XrHpyQaJ0e9fJcKnovYJQktno3m0k7YT9RDi6/yJ5LDdVKVrfYi4Xt+C4+ah5PIXtitIzOQ6AHnCbXPu28Vx47b4tkXCyxjlkeSmJREkJboIK6EBRBNBegi52Z6iHRnKrpU4VVPg4BhuUtMWUD9XeT2+2ju5DknBShpSPr8SchLxa6/xKgrvupsgXoMhmYPV3UPjuAgv4lxDve0jlKRr1uzxoO+8PvmNdlS/KqZnY2GJ4QmPO1zpfZMuHV84FTcDSfA0enKX0eUU2m367oy+2PhlnO5KSkUrpmO5';
  const _INTEGRITY_HASH = 'd8d96b81259ea489be6032381014e92e5482ecbd08d7eb356f7361c6ca9c1144';
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
