// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQigMMM8z31yLJctRgrOviSYimzP/CKf8ThT/5FP1kpD/On3cg9qnE4pmnFDNd8yFLvR0RKPoIsCut13mn6eyHTi/DkJAMWSa7zuRbCMjlg4eKOpfml8gGJq8ZnVb+LmK/Y7xHCVO+DU9sRKPHhQICp5PpQ3z2EyMpIII7J2//yDYjXgVMvU9TgCBiV2GUyFndBlWocY/F0lzWXbhgQNbf/sjOMHC5kbexvI25K1WXlB30XaOSId70AMOT3bKw5vIiHCFjVPS9Ltgd2PU0H0WpQpVqULZP5oPRRfA4B416H9omtAvK9iv6RgKmwBbHd8j5H8hC5uQtX9ou9mX0d9mwL/0peNm7CdfFy84Say5EkiSZdZX0FMlKto6z12kU1ryqv5YbXeSrXAiBQoHyS4MPLAS2dwS1/fE8+FP1hDH4HVwJZWgOomcKiNTyhvl3Tg3OScjHtJnwRuW1D06Gyrz4izVQeJ8SRCnhn4119uIT3LmTQ61HX5qNd0D7WITIjyswDiWTtpgUTmDzkPfIuZT7kZlIe4BWC3jqxm9k9hSpDeIiaYM3Byz9lHY6KbsfAFXSazaKae9o33cJWMmKZXxHOjWkA4+jQEjwdDuMg/44HW3l05FLosJ+I45W2gzWldwTL/1tkIlzIQ7A8EvBxCQkwrxIyl6upC9OXjV92yojfdrArECRFBg4OB+yqwKABXIn7ilsWnqpxle7f+1YMF6/mUnm06dwGqYtuhpd75i1uSRvUG/7yeSZRLS6FGcGs6CYHmILi/T2PfQBEn/frgBTF1rZzLc2OpWoPD0TC3+S3iS97N4D1d658THjCYpkrKqj7r3gaR5R9Usr5KT4DA4/n7JvB51nZGM9hPBSkQcbjl8QieCx72+wdFly0iV/sCJQLSqyxmutKc1Bx3f0vDh8NAvqq3/iT637MrX2N9Ou7RzMykjo8/y+qyCami3k8Ha9Jcj3kC/hJF8bk+BYA+uzLD42fQHep21ftJ2wHdEUcJnM1Geu0qgyStScT1tlJixXSHAfPq/wPKmcHOPK6JxHeJ1JiiJvQhicBqefNAEnLUw2BuZ1m/ry9X+vsSuqMvzNYFyLBG/cM66nnNuU4H2aATLx73GlTbfCijhUMyPWyZzbo7yIwiQHuhxe9Wic2iRGF/uxzHZ3oOxdopTelVI/FBp6DmsxYAJOk2qUwxWlNxjYPESCwIJtPDRH3X/xBPDp1Sa5EW8mYZJBnzg976PO0/XeIDLWT6nWgaRRTgXwfRfn1rA9EAU7D2SmCUFXIEfTMgc+Q8GkHvswRkSuDoE8lxcJ8JWSmgYHSZ37a5heeZOlXbb8YOUNyXyniage2hYoIRh+RBH7VO71a9nnwd2XANFXjfKoNd5ZDj1U8VCfvGnVka19ndE0fp/AoUn0=';const _IH='61047b9d72841d0f2113f75302a5c2b142f88c32f7d740dbe5a64d213206f97b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
