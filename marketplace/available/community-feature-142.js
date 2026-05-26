// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jzJ1XSW/qT4iYG4a/DCDS5pXULiNSn+TzZ8bXcKXzdZ2oC6GFLis5hp8aXpyYBsgye9/tLd8zE4lUKUHBhfZAHAW4Wyp2eMw2Mq1J/WuxQod/NfY4zPhetrJnaPc5qv7/kHBwXDw9/0E2nrI9OmAXvmEMrj1gmh3qBBofyuRmzEXJRjpV7oC5TjMv1AD5uA4YhrMQqZbLEO5ZYyBHhWaPi9GMFlx8aNUD4XdBmvD6IuH667r9N/5lzmCDuL3SYJLxL77BEQQF7XjTePKZ3xhKgNHhAtX12qOBFtzAlAOsWLeuw+67mYuSRhqVwV5XBC7Bbqs52V9Mh6m9hZC920pk+MWSHV2LG+YGhlzQpqNdN9DRkMIkhPz3EhL35JZy+v51lpTKy1HFxnzrIdcZ8DsDrgxlyTTJtnVjVey55lSj5kkw0b1FFAgHtsI7P2wN+iJooyvhyqdraONZT0CaeRga6cetGfQqmPrGfJga31DTVebI+h9JSUzbT6ljs3JKCyx2GetG7hIPBJoz8pgB1ww9RMTajS+O06Y/8hMbaHRElzGT3SmGZacy74Jdc67q6L/3/yuh0o+X5v63jKTkJNzIlXfXlu0SD4Xd8Wxb48cxL3/3hRQjSUfJ5+xorQdk0vEBhGKXVW3kbh+tid8Ljsjxs0YIyMDj+y2CV5r0EH9hEbuGq3pHBxAd1lJPDJn/ID23YyN5oVCp11FXcmfROf4V7cXE05E+qYapGu8RrxI/QVagpE=';const _IH='5d3522879384206ed74c6bf62975c644f4541814187b557d92cd6b4e11881996';let _src;

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
