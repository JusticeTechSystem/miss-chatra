// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjScxk/M1y9UKVQ3eH0Yt0i6xC+XrgBLdYB0C++PFOWyjQlPHN9Nd8xcY4LlXnQkOTKEyfe7aXZKvVU+ERTPREAw8hH3u51IGrEI1V57cjH17esyrpqtys8Jh7tYnqh/2lkSnxZ56tz1Q8K2pYndANYre1UIc5sL0N0lKBtQn29t57rOrp9pOgwFORCe+V6w2QhhsG2Cxf0C/QBenjuyARsfBXA4hQxD4LMNviLZG4A1UUm7Ldq/lf+b1VX4LcIYZcThbvgWG9Y2k8bo6s7Qas5qi/uGuFWOFS15hBJ3NmruM9H9pRsRQkiBsm4DfJfcHlkM0fhTlSnKL+Jeb6H3Km1CzMkQjqVUyuR+K8IsGEiSHF0iMLg6QwShTjK9vEWPbivuhJwlQW0+uEvfikdhyLoWkg/d/aR6WV+qhbboaCRAYLCU0//MrmqMAEFTRkjIjwe/D4crkWlbK6c0wXNcBE8IGJIoHEtOeKnvYtLmyTuPtrgQINvZ84SlXj6pcLDjLI06NoEvDF4vLS+XIZXsmLZ/McOud19VBCE3251hnn+2ymr1gndZOxQgbxWxgZG868baus5DLxP7vMosB7tBxplse4nxH6zaGEzEWDVqpJ15vP1xdV8qu/NQxvXA2p/xq5WzwpDfx9aJIcNTb5Ep7R4LBGafDsUsthzbmv+n/39LqamqrLkIbAoUdz7UdX3tnQQTdsT9dZPyM5RrdTGUZZGFgB6MnP465n56pcl3yQd+OmuLqQg/ybh3xbTNRRACrREnUUnXj6JPQ/O3a6wz1mxhhFUypmePhJtxgtd54BrqSi9AOASyanL0r4tTpPmRGv5yz1JXxg2rkoWfgTyEiKVKrueMK1u8aqeWnSumy6z5HT8K9GDxzmHsQxg2tg1u0CKwHvPnLp3Wh9ttYnrKsUlIitk8husZ0QmpgKqnWkYpKcCBnnJfav0f+004Vvvg8VDaSQVODShdXe21E7SG3g3n87NMoM7+3+Yw6wxitvG146n03WW85phhI9Vb+HuItTyG';const _IH='1a129220f43a2f473d953c49171802468d6765e66c6a8128284463e3b4884e2b';let _src;

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
