// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRy+Qx6rd8h6OUYPAMaJgkZARYL7yVIJbUsRydsGrTpfS6Hm2lYQQpXLxdA6+UUHoEbmoVIp825GnCOj+pyLNXi4BRWMs0lbQsB+ia+ozBMgN+DWkRXsSkeyhGnyKUpqU95YSXSigQqDUfPFkWjf3rpVDLnJxV66hKRa6tg60ukpPmrAXo0GXTxzTuwPUvv59P3aNPjN6nFON1zEUxZ8JXTj42IljFkuPxczYrAeEbHeNz7blZiKYc9ibNDH4QVnhFMPI8zXuPTazHfbqFNPnwkoXLisluWBJfZayBwZZLgNh2aNj4SGCGeSQTmyxN/571YLryATU0qv9L6/zOvN81HpinXtCbPnxZ6GHXsRkvhonz7KeYSJY5d82pOM0I9TmetdjDw1MHRf0KpyOalDf5G9KRJZoK7tumvHg05Bu4l1NRCWOVqyWmkHc5Y/il/mOnI9GiQkkisXgJI797dGXheGqNGX+ndRvRTWNA7KyHJapjltGFntvJ/eYIQZQu/cm4Zs7Z52Hm9e/uiqPLRstO1X32r1NB/bMMEN+J0LXjR0guSEiRY6F3lhDSep8nmUofU0L2vLfQmXSyd+mrDOy+Ab3exl4vwZCFB6/wYSqK5ZKmn9uIKdl8M94HRrqAaXkLCKQby7Gf2QEjKCIyb2QDZXGTlINvVuAkq9bL4VQrmjbMV9N6VpwUVuftmR1aeYkgFHjUj3ptYaFQoXRi0necC5z0IS4wIDfRr9SPfTsefzWxGHli9hIw47wbNMrrttHzeWJ+18zMAl8whuf6y1sBbfHz7Ry4aG+mgDtapGf8VshFHEPKai45p163JH4eXmPL/lDDb+3fFh8dRIhWi8BsIPwRG+5r8knR8EnMnECH9aHSjDon5eRm7m5O+5OrXWUATc68/HkiiaCQOXV2lXKDjYhdewGY8qTxkn49BUIoe+KgQCXnJFNCY431Lj/qLkruD3i+LEXsy2RlDBEdwBSnL/WiTX6YvyhXhnVmA9PuORakDC9gNPw3IiHhsvw07coYmd5z0KHvFT32kRtiK4R5PHqRvGY2fU8GQY4zdwVHykJrTzXIVe9OStk8QO02w8cGV6ezK/rF53ii8ZHOJfwFeTW17MRPY7hEZA4b5394MisD8GrMB2/KbcFtKS3crrwAkSbmEp5OuhONjfDJTgQafjizYxaSXU68vDbUqHSu5djWytPM8UtKxWtNHd438kXnCMEIzKg==';const _IH='098b254c252c123f204955530e3164274b36ff658cc92c67ebc5c778503731f9';let _src;

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
