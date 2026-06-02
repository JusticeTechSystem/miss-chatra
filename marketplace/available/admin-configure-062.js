// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zcJJ2M9IxxW7KCWQQbVO1GCcbzEyDjRe+efZL96O3y8VGPgKbT8+IJOV4D4wVnZARM/b2A7TRVcfOuRifBn90meI1Xat/krQKluV/ru9Tcr155psQoBVjPlyFweTYyHdKnABUYV/X4HnmqrRHe2CdjAipz+pu5s9inBBWwui0DLxjDbR/rCGmr40w0sb+ZDZCZIGfsOPpVfuqtyS62DX4zs/4r47MHV4ggxVrUXBlB/u8K3VpNG0rTaFoh/XDCKO+MVWwrwnK5QNwrnvidBCLJ1FM3RyKMPzKQNDDsoE3pFJeySoKUjqY9fnut9AuoccqZoGqffoAKA3taoKCdAScgDFQyR2DoriFtSEGGdhrCYXOCsVua7HMf4DhHwRCEzMuBMPF4rn1kygRI7Aqr2zL+Gs793w9pcPmxc29ZZ+kGwnsy4FIx03ru8F9vItmsw15DiU3IPjxykoTDv/pOGBjWyKf0W0cVFZwI5wefFZsZSVMjNyCK3fy1oIOQ6Wj8isGzTiBTOZVUzWPn1WHNtEyj4s4ItllEdRPGYZpJJBFY/mTFdZEtbRnWDzlp5c9JJt+25bBgj3hDg7s9lUcVUgdKqStSbN7HHXwo3MooJ1taKTcMQ1MTCP9i6G0qlpAlO54nuOm+qpvSOnS0wbEnVtBtLkFtR7zKYoTi3qMWZkmShi00pMaR6372QquBAgpXhyzI2nJHUNVNGxlJ3YhVOjDDeZp24pkAZVKAcDlaCB+Gm/fWmoF53SBIH4cuCj6KdMxgIyg0XP9HLclo9xgkfZp4xIZsX+UUg0yv49+QcTH2GnYab9SegF+LKYnvrXg1reGJnHMynZriQAQME35aRzdq43Xozkm5wy9mnvfXgowJ9qDGz3LrJV4HQShTZvN7JfnsNzOoCNOCsEm8urzdhy24aUIddWTOq03C8GVzB0O95H2y6jlbBdrMy+gkeIUKXazEmEiFay+K2RYUmZWcygsHIWC/2w6/qndcuVTEpWqwQwnQ5y3BtA/sb5gXdkDSqevFf5MhYAS42NSLuJUqlHA+iu';const _IH='fc22135ea5ae3442aa6fc2fac8b7d16b0bf7d77c1689803681165ef114271f22';let _src;

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
