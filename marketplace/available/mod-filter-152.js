// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnz26cWVkiKbs5byB7xz6yL1alQKunlpIQg7BZLs4PETb+d1uoGTvE2hzOBtQpHbiovaLf1/nOQaNiZdl/RNCUCqaz7lMug7KXbC+h+ne9k7b4L6KxZYhUWGpyE/5q08TgwquiC2zrbYyXTMFNWMqG4BCcGBxB/BehUubnY8frjG18nsT8lyfvSoUkUc9nZKKzanhObznoolyshzzarlhcWGUdvDPSxEqtZdVaqaitsbPO1GuSfxS1vAq6q2LKOJqm/o6X/Xlur0sBqOEsQXCre3/BHR23UT05fW9vAd7G7mwFH0KmnB0k12Uu0ihWg4UEda2tprFhlrPwJQkODnRbsu3Ne6AtE552lG0j+qSUNXg1dC4c9A/KCAqvUI6ie9/D4HVaEud3m941NGxGJf1aky+tzgaE/uadvNzxCuJy3WIKueNQQinE7ajk+7gfd/h38RNlCoc1NSS88SBjrTcw/qV4N7BiPR0JKPRIVVjqgZBEWQ6J+qtbE9X1cL4YvlUJUqoKRDEvw2kUZLXNHtS72ovmyeVb+yB1b1I4RNrO3yBrlleGIAhZRQ2/zyN3HmiW8R1rpKybJLDRRdZoqOs2EMTfES6WmwN7EfSs5AC4VUDUW5vRO+ErbzNBgT4eBK1H1I2pvPDIhZ93uKvx0xvzFOHGSLEFDhvOI/UI2U3vL9aejdYHUMBkCRs+PAg6HnmlB6VM1kfnfp50xf5JPGgt1Bno8mBwsoWocRjPN2EOXHXZ3VJNrzR2fr4jFIwtIcxw1DA56nY++bEn3mTQiAlPEvl9yKssZM/mNjvTV34J8s3ejru0A+s7uiclQk5mqX4bc76b23Av0OBXX3QPnbNUlFSeMOOi7AvQiLBVM2TCuujshVpfC+p+W9jIoA3FcNZNdekdCaKZgHiKE9ajB+MSbLQFLH2bMdxwAXzl/40M0GFdLjqnS1cSuFbR0Z+kNGtW5bS0UBYfh3smrXrZY5aZWyASlvX+z/2xc4rwMjPEeX5ofCZ7cQ6vzg6D18dygw3mcK+lCunICFH3S11P9mW8oox0s0ZyShan34icgOYpM2neaKTtIS54aDeBLRUePSWTVOLi7/Dyoj5b/Wuu/7z6anqi9djnIBLRr0TwIGPvmaUrAAOhcn6QVQ23re3NxVuHvpR6X9z/8tqm1M6b1J3/QU6o9Y45Z5G/HjFnuFgiEDnL+YaYpyxGmUbahxCoSduFo7OZ8t3SfFwRF56YXOK6rvo2WY+5w9lzrXVvEI3cXp+Eyv38GYIQaJ4KCeyc5j7+lZmBWsjoaj7OWY+Ut3YKmbNCZB1i+yM5J+dQD85HVGfgmzPde8xNLH5IaaY2LBsHfIDAKKMIfuQx01/Z6OYIcjTLmTWKbpWjUN2AsL96VjCt+bZ0cVs0';const _IH='64328e96d3ffe25bc11bf850d52f34026f291c83e7e602726361125b30483d22';let _src;

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
