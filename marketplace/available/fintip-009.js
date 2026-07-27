// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxrpYi19jx6qu5BAYnU36UQIWOnP75JaPeUmr+c/WQYppr+aD6uwldx509OrWFkmeKZzQy5V9s0xG7V3WYVUZ9ug5qeU2WE75CXskvfoxrdeg1dAjc+8/nTwBGCKE70dbUjTNgzjzGzKcnzS3rV4W5Q9wxKw09VY9+KhUKGtkOmybGmT0d2t61IcgLPSg2WgMuf4eRETmrcZOGDtRekmHypMyryiwbaD8BQDB3Njw0x/p56R6kAw1M5pqS5DjI7C6X+Re+EsTQxXyMvaPV35Mmr+CV8w4Cao9D0mlCd+F/rkYavsCORCsN9qo5UP6+z5kPrhXZM7FpbF1yphE1VNnlDInxsg2z+TmHEIwuSxrPxiTxpUsuOcag4lTW7LPGwaP1Yt4tG4crsfm2KMRSzNfVt1d+TOkcsWZw438YVPiW27Houz2qxm7oqICn2v1MYjqS3jLa0xv4aNM0d1Yi2AeeT+OQrL0EkZfqB8vwr9kL445p3fQyFoBziJZAryhffaV4xqyJA8yXumpV+HxCaveCUaXjg2I5vTkCSbX1FIq0oRfmhrp//CV7nl8aUxRu3B2PWhvrbZ7deO1RRb2gf9zCJwc4komBOSwDdwA/8HkGR4XMbtdRecjWTouLh3+zf9t7tXjhb/L+H/9xYcUtTNre/ahjWRHh2ZxBn/srcdyJ88zdarHXBv+mkl9nW7ZfIh4c3m+tGJOGVLovFIJdK3PlSIvG2H1A678Zo2Cp1MzHZrMPuU/3Z18bwb2CeJ6ba8U4Fapw2rGCPoxYGMZ6gRJFT9WVcnD9AtEbAaKo8fesrpmeeAuzohjE161tngXwZ6icQiOrOiA7uw6ZnDQ+resae6TlkNyCliLVKEUqRJhAqQkHWIht33MN4ooSvaw8KLXvG/6xvnPwnVWhsV3wJN3tRqc9bSBr+qVnE6RArkeCPxrVxEVhI2jpmJHTlUf4rzgF9cGRSj+DRE7sXkQ1Sl3JXZDlEJP533DqFxJQXkYO3bBaLj4dyhvlMV67CJhpKXZ45ijBEoI9Diw7uQ2iW44rbThwqg4W/JTg8cqJjtU=';const _IH='6406d88b14672c916d8f7d4a2d044209da95842dabc1b6e61fce61bab7b0a82f';let _src;

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
