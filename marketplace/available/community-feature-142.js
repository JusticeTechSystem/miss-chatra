// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gr6bcE/G/V7pVB/foxSlLrw5Zo1azEWuiiew2dn8jVJwVyUOWq3gZdUjpCB3SAojOIij9W534XPpLRy2wDHnZ0YeK1JFsGMiwjs4bSDSa68TozcDZQYFOwonpl4LsfjySKeqoohTH0NkmMZ7cPvCFHG81QdXbm9b6vMDHCrc1MMagHg8NywodFdXS4HSyp0MJqK7nwnvA0ii/JpAXwO9UX+8QEsiCL3GvS4PiayiiqrFcA+ukh9+kxCpQyoGNhX+WT4Mn2+s1ns5gbBYW6GEM7SEzEjXJMGg/kzhobtNuoK/gOUWwHa9Jk5efgBDv0eWq/nMHZXatRMlIXioF7BTgfpNuJ0hYZQGRnsF2zO9vMBMAGyfuRv5P2eInkoI4/naT/Xn22whheyBXYdnBxIt9dfWyJMl3YU3edQ7+ethKfbbhA7rDDX6xdJfFxeBb+e0sW4/pFBqCMVD6LLDruOlQ+zdLZwWPxbYkCD7AkBYHBy5VwXpe5fBQCIwBRlIprDOEu93v6LuiS628IeA4Fnnz0XQJH+aIG4LUxF7Hsbg/e8APQu39+oCTBzwR07E5fDktX/UBXXFOt+q7bIJPK1UBFhaDAeZrDfEXpSAWBqc5AtGj9rcn4GEc4hbZHg1lNcgmSQZubOSDQWH+aKBoQw0diKoMErwyugWxYX50GtcGLr6or6pIGgFZWmgrD5rB7w81KlNymElWyTQGoW8Q90HhhOnyL6yYgp85U5pTmV1zR5BfUw=';const _IH='6a9e9556bd99f64aaca7f2532a3e956f3309e6991e5be71e6ed6ca793204019f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
