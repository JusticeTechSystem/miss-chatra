// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2OHo8KooawlkfM9WCXHZV1apOqgyJYWANh/yOJhdALHPZ0O3oC5jsmqkgA0Of0VEhTcASelVldJcPOZQOEhzPSRZu0YCFcq/AvCcdhV8jzwEPtkQbwXIyjjAxvLpq/ZPlcj4OZrXxSYcL1QTJrIqSR++mluUmM7U3fe7wV/HAfyOd22poy/yH8a613Zb9UNoOtjX+Oyn0dHBj4eG5rBFSdmdL2mCuL598vmNvikeTP9DjMrgOZ85EsHhAIJwgAUb7mFd2iurHhwh6ooMcUS/WuZanp3XXx+S49n3oHXgQnlUbKm2NHvmhZG/TOSfb7lRDqJxWC5KiIg4fRhqxhbOnYeyobExnNwWPrlSe03xwY8km+6yu23KHs0YG5H7efVvuX3aFccIkkckERw5FnB5QUDGObsS4XgoNxBtCOeZ5KkSCtgiVKtmkOs43zCNb5vGzAJzqqe3Dygkzz+M/jeTRcG6IGejaPWDoqHCDbI3nKgKpRWhEDJNXGmXkPtjTCENYNAvDFqcyU0IX11c+1DE2mqjwvSq70n6XTLLQh0jJdVLiHKjCORWrZi3pU2GdknRCKZR6kCTH8Ptd5wqE9vtQnWvYdXvxo6svEquxPKcvpI6vtkVmux6Oz07CmskGJN3lOYOIJvPygFb76m7jhT/ZBr3pno/4zIzKoxuPWkrZcQ5icMYtN7leV995WH9ZtE7bwndX2xrt+ZvNGVzfG25qqUuzrzG3spu7PP/2nTzcWDn7PwHpwwp+A6RIVug91LoDXO+A1pMYgJxgBbFgliHNng54cIBYO6Ce5q/+xFz8seHyOkn1Qj3js5fnn/n61TOmzKOaG6pCDDEM4fBQ53A9TqSvi0+pjdAPiShoBal3gYGAQipDUtzoZhfLqsJzvT09R9Ry+MOjxs7PkV8EnXu0Oxqj3VrkojQ4TqfV4LdfyXC9UE3RKHcuN/GmZny/OdgRe7BTCpAMtoT2QFTTg97hT3Ho2psGNA+GQ0B08FILRDSdng45ceP9juTxkbQyU83wHSkdudUA8JpxxKjDnMXegrvMc/hmvYjjcSW1dLNiKYSqtGnXYGIpnHs3fkAxnjiTpDGjFOSdEjlHzBwitSS+AbXNyfjOBlsAz6HZ8ZHYVSYgoxTiNjKkQAhSYWp+B1RndPgzPKD5xf+DoUVXlf2Rl7/BGB3ycj736ptww27QvtT9dn8wJPY+76xDXgmvmBu84UDgWzJwtgzBxUUe57hT54Xq3nk9Q7y5cx/M8DOuO07kFsx/TdjM/zyeCgsUuSompxUyNyHtKg8QvqTsNerrfu20L8W2WuZIWlDcSMxuiLYN119Awqtll3ikbqdB7wg+9GVT2ppx6nNnjHAnY4qaXdyaAeYj9e03oHQEEmTSapgoSBxdQoQDE=';const _IH='86732aec4381fbcaa972544e6fa0b44eff06ce6d0328f90db92dc497959f9f8a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
