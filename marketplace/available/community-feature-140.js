// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WQn/um5uJQzg0iVPYfmHF7gox6x5pec0gbjIsaZrarxrRvA8HSsQx/b4im1uhzd92wqYRdxvEcebqK+iJdBSM3Gg+ICRP6fe4sp1Iz2E8LhtWHF3v4FQHt/0SeAO2ZZYA1wavBR26H4BqBkeM3TTqPJhBq37nlKLLLtIRlLGXJDgn4rOsMUM4vdlWzfR9lj/z9nsriFzRtkUstCkwixkTLzK+FV51YwjAm6fCWc6SQuIS1OaqK2Ob/z78PKcHQZYGTbCtFLRP8ViIW9lp4VRpHeETPTc2iSjxBkJXFUsDmfDewENMQGdHP/0cSEHgfJlXPiTNbXvN/PW6cmQXDUbswhev1NscVnzgAz3cVJzRMcO5y1fe7VeafswxKuSJSjasTFTIO/Rg/jVCvtrAOxJHjtIWDC9ddyscF7i5zYU9yjYlE9KlodnfQrTpVBrCoM/DyscRvh59kxZ838jymWUWjocP4HBPa8CutttoycWMZdRpsye172OovNoCswOK6bmdZGKAnITXFoIF+uua8+9677tDMcDtRZLp5NkfFx7kLF31vRtdGHfE49nZ6rCAbK9JJlLJBGMkhjVzqz9Dchz4ZsOe6YGTmRdb1vfTXfvJ5STgQjyxjKJS3OW5mpxLw5tqMobmRBt1R4m3vN0En404xC6ZOKBsaG/bn/nmfl6HWkdusZZFwFagSpI1XZvmYEAX9SpTW0N0/XlIxu9rz8QEIYswMpSu6P+0U/XnAg3nPfu9ApPEA5/aLeD';
  const _INTEGRITY_HASH = 'a4e811ff5cd16fa31e1b5c0fa3cddb04fd1bea39beca60d44cddaeafb151411c';
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
