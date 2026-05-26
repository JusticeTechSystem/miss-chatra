// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RAJ3iMAusgSoWWftQjxfSExuajYOnv84OXNZs8e2OLGF8DfWdZH6S3oCfpfQ4nZJNDVzyvv2jSv+S0jD1GXHlPtyWnJWSqGEICbQXc4S3wbSzV7RMvHWlabcWYh/EvzJatx6YkfPgn3EYvWDJO0aHMBJcQUuXXB+9hU4SoD5Fd9cbO6bBO7To3EsmOZYauBIC5t8QhZn0V1/+UpxsgY7nZXttDvjFSvdew5ROFAvvvIGG9Ah61NFlMLEG5U4sYb8BWDRKLnLpEHqxpSRoP4R56qPD2MD6aITx/tMnmRE/TdVPsf3n+LEhHVXmdqzJzI4tAqFkGMRrI0H5tz4lB4saLExENgep1F9BDEG7phDUA3O4F7SokyXW5DA3JLcFdUaIWziPyAMnXuj7fDu9BU1VEhTltuNkqhEm08Jy+yVGYT3xUxNn4bcz8mk4DfM3v5HITijLYA20mSAEiEyodzgKJ3v1UtKirKs6T26r3w5r0P7e9nCM11zbbCZgoRe70chcxBcaQOn+/fRYpN97nyl4HyIpPDmWSILoTx9ga/rypDXWtfTYG5Id9VPUbvR94Z7NI3XT+Up+7GfhCKxgvoPG0WI04DJIN4J+kRYFmFEhOfLUsOP9mDRrPx9zHrqvfny82u8eLc8D57kBYmRsxm8LIfOnEoQdw2aBnqnL6rdnGC6EkTLddFLDg2fBk8P6DAT1oB2d5lrFEfMMzUWvn/dCz/086Ce/bWIJt7G0LydqayzhGix5EHsYOUmOWugVlgGM26SZEGKEIZnVcaO43U/5Xwor90uDcUEFloCwoybCB8sp1RaIPgRX1Hx5xFJOdUtBTmjTMsWZRHarVTUqHEXXe3B7jOhXJkODLyX9+xVO6BXYFkg5wCoPnC8w3VBWhSf6l1OtCtxqjUSaOTyUEEc0xFoG6ViQgfxRNsnZToemu2SoTiCxdA6uPwIpHh+gSoMNI4YSN3AsT/1frU8S4tPOtTYx3TFcARPbXokDLLE2JOeP1lw9KLLxP5IH1BTn9yLhbeGD8R/5AjMjHGrj+aRgaFsXtI5myOT7laYHKLo0GnQtYzzBlk8GZCxhS4Gd6kM90EewMnJktw0BDJCfizobhMlySumO72D2PPN2FmTRkuxomOL7I0lkhrwjguoaVGOUCPD4jsYpf+I1+81SVmdxf1pVYwSLilAlPW84VcLm0QSddNrZSp3P7AHLLh1chIeyxOc9TF9k/vSKB9e61RTZRHMn+8RblQESxqmXRUorE/BJkbvHiSGYwU9hZmcdoB3ZcdvzKNRDqdvoSNIgvlS+0+39xnh6GQqarKW7HETw5+zUSAkpWme3hV0SiIquySYaOn+4lRiZs0/v5nzeDkjLIWqufJh3SMl7CPZXvzGGlAkd9SprIQvnQDlYmHQPrCFCks=';const _IH='b07e2512e8ba010b0475c0e1488d564865a20713867a4f63a761682c52d87afa';let _src;

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
