// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXgnFXJBBRu/7dvjQFr5BDBFibp+J8d3tuOTjA2eo1cP0Oa5WZxYcLzil6MxiqbZBJQByKawanxaGI8wI7oiBgiHI83AWvlNyos9HJjJRxuXqj3VSVgj4Tcj7TUInU6pJU3geQFXRiQ+yXu+6n5U5akK08e6Gu0pzrQv0wLYbgVb+NM2XQRvo07py14rmNiLTFvQZiPB4mQjS4ErJ99kSolgsosV3QK8389MiwkMI5uLLp25cMsEUyh0xVAKMxtibSjm2Ydg67fKlHmcc9/Njxk686UroV0IdU+YM3lQl9N0F73zrzTId37oqTLlhZ27yYl4YnmvHPwUlpI1+NueSxHaaa37tK5xZYyb8qGJqHJJM1trPjWXmmLoagK9zNRF3WqQJQgPsFfasIswM++DrEDzsoL3y1Qn/HTZBgjwxz78MSpUzBKNO7TO6z/ZXRIpWUQLZYciyFZHFGOlrYjqudhFD/F4mMTacmPq2c6qOIU/nH++kS/lALkmMxVIRb/LAg0o2kiroDfRCglXVlfDrEsI9BstPWVvXQd3bAYvjY3VlN5Ha/gn6KsGqzF/l8PCEGXzAxS/rsS9/ZIy6wIUgGAdGsnaTWYQ4EpogdKEuMW6Q0A4CzljFh5UtnKtH1bKD8+LUKmjZYQDfsj4ibSYQeJy0NaaRpvAqlNVwM7kC+GiepgWY/2cTyyIbue21ffCtRK8Yuiz3d1mBMbi64E6/7BSE3N95a2fsXsLMtxOj8';const _IH='e6a871b8f7dba2523f65152575d94cd0959c32fbc255e33542b37240f984e75e';let _src;

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
