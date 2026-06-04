// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KyiSfxlh5mKEtNQLImrHILZH+4eq2ge31QK+X2SWH+o1kIa/8RRVYVepCks0X/wz3MP4kSZKEv9i/6JrDbZ0Gd1AqDPwlxlec7RZLn6vLX7qjWm3d6vWQGihUJAHrwUqsZP/a9yH4o7XwPPAlI9qRwGSL6imiyChN22vpuCaa40RyjIcvY3oCOF4aafwh0iDFMMO/VR6ZqtV+wkNJZjisGj3FssPoY9llH1/wHeYo3sA77nU6JHGNxvMpPuFtlSD9DBK+YqfTsI1Dj4VJ1xWCPbsJsl0JzSpJLJss40GPb+ViWJy4uH1ZjUa5Q1z+O0Tfn/cjB4tS1hoPIv2HfOM3aQC4swUmEfKT5KeXfKq7EkZ+I9NFMn6gxj+cc617rChobJVpB/v8/viQFOFORMFIO0iv8vrJuYyI52WGZl8rYtYjbcl7sM6Gky1UKBBGGd8cdA8+mD67UM+rrtfm4ac14wECal8ZNP43go7cjT5vz/FuSKU3X2tFWI0/8XxJnffbJxOLlRhNbNGSweOfswaIyAxm49tG6i0IPgZA762srLnMvi7kKtV5ZRucseXuBCf72PoHhlX0m8tI8SzgTABdZ0oLZdPNh03aL0w0pPocaU8EexG+H7LjR1pEHizynK9wHaZuVZP4GWW0wYUkr9SXmzV58AA1AjkaVVIWqx6nzuEBHW+Dp9yKzDloNVLcetul7VOG463SBmRawZ6WRTL5yVX7RZTepG2IA==';const _IH='cb6ff9ca7bc318fb5befec6d4291768b0d9823916ed7cb3fd27536fcadb587ac';let _src;

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
