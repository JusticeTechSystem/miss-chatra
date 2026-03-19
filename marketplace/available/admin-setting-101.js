// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3AjgQul/6CNXIyth26YGayV3n/lV4UnCZCncRGp7PnBNr0f5CoCNnGLDI5NvmHc63Ng9hZ0kr5wrkcjtBS4Kn0NEGoMrvw8ziiQHw9URcyRr/xKYCd6w2JlZb6rnDpHuwXS092A+MDUbHepC/2o4NX+9ej3wSK4wKZyZldMqlnrp1K9jdtZCt4fha4Fid0uVX6XvuJVaKFGnQL/RS8W125kvTxOq0xLvJYhKKcZAl+zBJ+MTAZsXANUtfiO3YEkj2f3kzxXoLpp2Il20vuGj17hp9GsE3NLXbTPBUgjCTK87AxxvF2eiQQ+c6YHDryYPe9H79A/TOEGrrvmlZorR2p+oUCYrZ+kPs408uyrzQOybnVBjrAJbI54wZTp+8vs5E5N2syU6SvEkTt9yoM9oMAfyvvShoJnLSoE+SDKzV46+FsflgIMR/eDUWqxHeT/JkuMsiMER/Y7H0YoQSy4N0ei3UuT5Dvnp8jGEr/O6g0ouE55keMhPb+iVO37IhgqSfeJ1zDzBZMzNsBqHlc9JGcU+VKB1oDP7dyYeX/dHPwe3tBvjdcrgn9D1x9X01oRfnu6zYnQpremb9/htVWJMZM4Ol79MBlOM2R1Y4jf6ZPVwwe0D1KoE0GBk5hAT0jAe+q0MapDTcpX93TCXxRnr8ZnUC/tnO11ujz2xQRAsAhizUyFFaNFVMnphlX/c8xIKJoT8kuonAcAkS1LEsuCvXJnWjnRqsgKh9q/Dwy/SMm3RNSsWVL2/6BbuMPPqvU9Eslj6wq765xFMOAwTE/mplTEwdoZaimMrNmgFFGJbZg+qz9cpe+ymuhjFabG+NaKjX+nnaBwaIgGnpIxiQGYCjg2ULHzhUmjbwhuCCVeNZnSocU0VvIzfTeJWHJ2BgrY+/48Go41BxPlPXcdGxFTN0nD5meHtaFBcrNLvRNVK25T1Cu6n5xXB7bsBU/HRqK4zICK/ta9kMEjybWZc21wm9/F67ZCxYFovVjZcu93EW2aUIbC6WX3zQ4n8UH5E8vn58sz1GOCkcnA=';
  const _INTEGRITY_HASH = 'e36be68c635a6300443e85d723aa2b665f3132b432a17487015339c6c56f2e60';
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
