// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRDQrJHGI+G52yU7UbugvesDVn5eijCRZhLBaX+wmq9UvtwUAfsZHUavkNE9gZdUrcy5jTunh0OF4guvxjTkQEWEb8vdCRPLwZqicywd3M+Limv86XZIq5mQ36A77Dk6gYfejhqlHhWonDQvzno//M/kAi1KN8dDmghpDPu5z6PcIVFxAkD2JxLEZFz5m3+R9V2tB8+jEK8YhngNkD1jNm0flqMmVmW4zQFSU2kYsIwIqaaTnefURLrWyruI0TzEOlFChqy3MDSgYlJCQvKrA2uJOQvGpr8s8zDTVixGnqRSM/PoV/lAZpy1gqu26tIEJsvNIrKr5tpfu3H7wsRRlYxE/sM6gQDzwSU8lmK/oYVQKpzdPOwlWPROodaNaPj+0UJmSTY+df/KFhEWVz/PLnxI6COPAJ41OHuiB4fNft0+0Gk4T0fNGKqDfq05gXlzDtHyTUVn6iIFz/HaY8VN4ZdHc7Av9n3WfavDiE5iPwVVQIWkmCE/iOIVt/WAVFjnh7A4mH60A706Ft/eKW4xidYdZJiZ2BKshzGilOgWS0Fak9KVuvFWrhrhKwk+nQqhX7wxpIhZLaL/1/D+74AFj9olBKrgkqhfBxYub+eueflb1n06cXP05/itvx4TCUolesuXo6FnGrSEeb5FdyrjKHLjMavkcrn9ALpUEQR2XIB/osfq1NzGD8mm/nu/3DBCR1Y43CsVbvHbiuQT5frZlxbycGwE+t1qAJqeNsEu6vEvRdqC9fjFSIfqrmt3MA4z3bINd7PMnrJWBdCE1cdqH7eyFG0HhYnA4n+dzqdGXXj0sRQ8NGdjSYbNcAd1P5OfC/aI/iqYEd0gzVQnDb5z53JVD7bVLTo13MjDn1vqP9NeqqIQIBykzRJ65FoeCr3xHWjpRZmCSPszduNf/zQKWt7c2Pm8bNImhb8dob70zogXf+nJqKdTYzA5gGI20gT/0kBdjfGQfZlvXB/dn23iMomvKNZeTdfwMD/1fW2Ybg1I0IgQDbEe1u5DX7Ih20BSGrel7EiBbRTiVDsiHKxLl1n/ZSDg4bEyIGc17VOxALbli9uDCdUAuGFvhC51bBnAD9/2I3pX8VufGbuE/KnyxZROeZvqqH5zcquK8jTHH0YJNShpSaqYKghXPi5xPKCjj8ScA5Cf9FVvKboJ0EGdGplIqpmxnQaxikuB8P5b+MbuHkON6aIWFCHL6fXff8rHRzOeggJkwOG3dBDwhbV471A89c=';const _IH='e81d679c7d5c8dccfad54a447240083944a15b2b455f3929288ecf35419892b2';let _src;

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
