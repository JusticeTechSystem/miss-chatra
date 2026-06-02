// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SjJG8fFVMLHKghLqr8/QIOVVQRjMUmZRmotHxjEWlWypKzOGTXGS7p+5vG8f2oA9DCQyS6EoHLhl3w0srWctD91vpEPztazhaXdIBfJyniw63l66PPBdLy3QFXx3+CnA7KXxnqIVHlTz222kK9gQlUvWydAkl9OxncUvWjssVbpPPapsjow0HapWd9hTMaRLUviKvQKaCDdJWnK1EeeYPi7FyouudQohcmAr7TGZ/m0KA3/gI3cOkchw2mCQg6ur7DVwO1jOiOZv+AG84kznd11I5S7GeHqR2V1DbHDQClpdf52LYqJ4EGjAiYfiyPC3CljnZQQok3tKvWDXjeDgC+k7p5lYp9sjn0mKH3qfqCVAQPthIrIodHrlBF0NrTlanjoUBDjDBu023eIlM8wqEcLdlHu1BWoJeHlplm90DW3tb3G0P3DVgHttre/fpn2TOdW3c4l0KSsWnWlQPz1nxJwLxTizLZMAze9kPEggWCUyZ8yWmXr/TY8jbZl3oJXGaK2m3NkMEIth8Jez5CkIIRo2BQFj4AeJYjpQpkotUoDOxmafCeKPPWfYhpEJ5V4K7s+G8xuMsWmVJ4oPJgJHmQ5FZY/oRCZCr1KV41D7zKl7rKtyzbYuR4FFP79HVboTuwwnOvC0uETQWztHhvbR763UpXPjqewX5lQ7LYpFbTIhQKV9c3bZRrDpUd09dFbrezBK+iWOg4Vpp/OSSE9sFuAzcE9296oSvg6LJQ7VicnbVttGFUJE7hUYmCB8R+BiUKCd5eioJ2SwP1KHCzAPclhRdR8J2KBgrLmPNbbWkcVPavQb3Xc+usgH/3jpJC5qmXWrpnvIGJ8lhFirrHA1Io2N4+e/mPBDx8g+aaLjEPdVNZU6gI94Ytmf2BDBDxHDnRPBbTt0LziXRcT5ky9CcdMpHNxz3Kz88s1f4K/zcBT4woHttO/kfYn3yVHroI8+goJWyf8SNlDOO3lDyEZ9HzvH+BGhKB43+Gu7zMLwoyTaqo3WUTm4e7eWTXB8fBEOSuPg9h7TjB2J+WE92DhV2YVm7yM6VQ==';const _IH='efb1729513f4e87671acba54bf7486360cf729bfdaa863002d2428ae24e47a11';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
