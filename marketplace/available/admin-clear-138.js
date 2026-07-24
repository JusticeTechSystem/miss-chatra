// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeer4pQlWjhjby1QnZPSXIyPeRLhVOcs4gaGBkOFB87PpNOI02LqFa++cpqyFp+1QxTMlzUeMak/AY8FccHi5q4etCnBKkVbWXpXRLk6iiAkZfE/dBtUM5p1gqWDIYzWRKkxfyFijzVteVKXWFEKt35Eb22AEkeifOckRzSnMHQN2RFUluUUqvbGEs1XSwus6CPVP42nZTVrHihV52EZr6WCfXBI3+falxDLi+GRCeMgOZfkHflZWPlq/3ZuqoVXGJi/k+KeIJ699JWbs5+j+DbMFx172wT8Bx21Hn5jKHkeWXmrLApLUUIKdpQx5DZpo0s6j72twfsycFZE7TAaB+zbz3lVRyqU1N42KwNM7JpzgZOWrAkoTUcrPmcmVNwBH5qKEz1U8IzZlt4Q9goZO2PffJprvaj8qMs0aMkIlFFsMm2WotU8T7DlMyr1YSVc/p1aGmOaTNwCSXxLphxNH0fHshNUpX1WirvxItKhuEVIqPxy99J6FSgCuwovM0SqdOZSomOMeKOcbH0yeIe4z6Fa7cPxi9JCtcpp02arHTsNL1cdDWJDjo/TgOyVC3J86bzwIRrQ0oNUiW9L2k18qsHDKGjbWXHq0hp8LTfm9SpAu8SKOhl81q2yKrUAzlVaOy3Qybj26GGN1nxzApzDjMmBOVpOIGXNkJ0CgsuOvdyIrKpF4PNtTcl4pkwgA04Rj40qDgdqa7JhQWW8y3Js1V2NLtJ+1R0CM9EaDwd2nnv/V7+3xhRmk36KjfVWAOLrP0ZRSuVgnlOzijXDB2WQvUjJ57ME0+0KjTLSZQhACGHBWglBKZbzWckeXvKRi9UzoR2u/dmH6fsYUwtGcc9HWOAZRiZ3zvR+hqjE313ZS6LU0I6j2/vN0fVReTaziA84JlN/9+a//Y6aLEvW5i4FRAC32OSxDz0QswLZxO4hdpLmGqcRnyP5ySmPwWyKCw8ozRHYh1xRnwSWGeKkRLh2FTotL7dbBfO9+m0VZlMOYrLIF+NE+AqetwXhw=';const _IH='b8c060707e17d01d328b0e17471270b4c216fd1b9513eb757d98e5f9ad4464fd';let _src;

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
