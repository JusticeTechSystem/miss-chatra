// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'f1Zr4Apl1nJ0MkEGEWhrnpUmP8he764JnxIxJ+TrZxArNhoyUOygALdQKXt1nZrtnzHo2RGxIYD7LoECmDd+3qUXw8JZLSVsVzVdIMbVUQOLdrnY9eGlnpi228glrI+c2OaJXxz2qxp0mL6C+/C5kUuJEcwQSVf869Xg1p8GBFyseoVG5r1ZoMgIKWhcVUfDQ3gNl6zTiWCReILkS8P3FoNBt5gbc14oNpKxTMbSFoVYcemRl5PTld3HzPSTPimB0dKbEQkoVJTxf73z6NoKw8bjQzHn118Nl2nv01CjXAmwIvD7iNm5LR9zdHfdLpSWDGVzf5WdRoVVndZuxxKzPcQTht215NMseJPZ81Y29SCrMJbSxDlj9z9joxY+UIiMN2msUomIohD5hYhVStltKr4gj6xAHe68x0zh8eVYzbMMwLACejtgpF8Y9hm96dfPn0HFyJuEN32mJk653RyCpMYuMQkUd7iLenOMXTJXgBwaQJSvdpGi0HWz5n4B48kwWVtXu7vgEJNVDVd/iNu0PZRljf3lu7ocrDRt+kYR5ZLJX0vGcNLR+PX9pGU1Utx/JLR7PeTzTBX9Nl4/4ArvxN1o14NFcUmQVcvJB1IH2EBCTIyIHUMVXPrXHZPytAXrlrc0peia6bKbFgZtzOFyJwuHV9jfLeWhcZTdbrxcaA3+lD0YVMhSDAi8LKWARD1z/ilPul9jHA/bX8gMUkLJt/ippZvQkGbc1RGtZy7M+r5ADucZS7A=';
  const _INTEGRITY_HASH = '504879cceb52ee8d9f725d6aeabff87a744019c24f051bdd8043839a2794f401';
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
