// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WQS1iZE+zH/2mzmHWWJ9j6N/CSFDigvEFmEY4fA3zgfZS9jFZd5qEy9j7jXKAr+OsAn1quvI8/ybDqcqYd79iHIKr6SxoodfnuooCyP9RRIxQAeCQ9h4FNFDGt2YH7J9wqFA2Sfc+EBmX8ABzIRxxrGAk5yYf0JzcgGMBpQ/nvt74vUyF2odig76x47NNLOlWaSfuHE2ykCVeqYudXO3JGFy8Go+mYe8jnA4Ag+ng4fNOo5CHjnc+cJ2MeFvLe6TMgixoXZTEAL2N9oYdIDWLctS46MkyfCa0ExznMRiAPOud5f5cQHW8XoMfl8X6wxEAGAozJPsA8sDxMG2xOGu+dBVxQfDfP/jB3A6aT6opldDMW00ndevRHvnq0MFSEleIlzQu4XH41TgnVwM6qIi2MMTzhe2Of1zkqLdspdIP0b0BbjUOu5Zri7BqcsrK7P0XLEMR+ONDixfMCFqgjkDD5OsRZyl7D/TFp6zIRg2jPC5PEm6Iptt7vDqhSv2HzM+fHBCeInsVetfujPfbDm2P8j/EzcDhprGxX9yjdfcHrA6dQQ9pTHPuESXucZIhGP3jZoAewOq5FnX/tZQi9hys64BOsCXpvTFEW01+y3m4TBpRgJYD5M2vM3+EI18eErOh/flmPKM4MynrJemyg0QA0lkXnkVkOQAKnymfj6bHL/e6n+Q1rgjCi3AXp1REElsDGoWeqCvr2irEJYPTeh/v4gu7gtC5ITYDvl/uoWNZXlzbWQz3+1IhApwTVoHlotN0co/MBxG253rx4zX0J0vUFIABrc8LgUN9lsWU05TizRWbB9P1Nkk9MzzYGp1H3Xju4/NAWc1XUykY8wYIfEaha7NpLAg/nvd5TyoAgps/0iIGI2T4oERr4dNopCVNamHnrub5SgDc9Wj0UKvs64LKxlUhu5zEw0vdQIYtxUubENEFZpjobFjhkavNw==';const _IH='c374ef4de1bd409c7702a7873a4ab76da74a25a1dfd360fce25e653aeef3cdea';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
