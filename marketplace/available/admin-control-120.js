// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cKE2Oa3X4ARS+/WcxJLm+FT8sma/u74FQtSNYnsbCC+6kkBoWMlY0G1vrXBnseV2VC6uuk3mGoxZP5ofgM88WcOjRryCIRoN0jqJcQIE1K7aJUkx0Mtub6+fgRNmprTuLYShrwCCM/kz+2d4tTYv2GSju1/BH/KFLWkoxzLZBjKZvQgWyhDFNCSycEwi79CTFv+cUXQloF9uTp0A7GSmXgOSokiDv12APUT1Vh6vmJlzcRjX3kR8ArrXul5U3I/+lhripvhaIyWP/+mrMnfoRDT7rQfvVJkD4YKdw5rtXkqcb9kGtm/qA0B84J6JFDMQ80pr25nGFogHZYRVOcd+qTXVTXtrHVuk3cjqFu9BZ6vWbvSV0FqgmfPFAj9do7gTfdLV3tFwKmC5fo6+nDMLHPEl+VLIDAazXZSZVnv6m8mhUEkUwrpp6O7TjyrKQRav2ifKr/U//P0KUjz7n1+uXEyyc4hb+h1xQ9f1XEmJi8935ckz7x++mGQImcJBktKBZjQLaK055kwQZQuRWaSCdZ7aLG7nSd5Gdf7yapLmBQfMaLQKFQnbQQdt/V3R+FTdCRB6y07vLITKEB/E7660bbF+q96KclhFd7x/wDCNY6o4inkkP6quS1jg9DGZucxS6/JqJKC0ip+kkUCKouM/M39btAsQ6aW3+jU2cIt7reB+bFzVH6GcdnXo7dU4Ml32lTW5B7Wt9AsGUJlI2qvBcUIoHBp8fTHzFITNf/bSLKz7tZ6WjIHIIj7wtnYpaE5INyVXFFaSyN5ply9dZYNB4mJlmtz965ekSmONJRiJ98IzE/9KETL90146xCtbwsu275f5BmRUTw8NhHD2/b8mKX0bEoFH+J3lPMjok/PqySwYOt/TyVFJ8Oc+QSBbVKUMIPrCljMkhToubO+j0KuuaBDzSREvyR0myIsjMquNeHiKfF2a47YpNi2kw1B/iRnzsaQqjzKWYu0Hp8jM9SXDYFwVdnu5aCO/bDbt9A4z+x9aYKJNrpO8D2a6SYUiML4TiVQz9jh8Q4E=';const _IH='24607bac14f0f3f0bf9288d5cff45d220ced2c426523b95d71256d2099f19cf7';let _src;

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
