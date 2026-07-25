// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5X8w+RPcjC2aS5JSyPom9lUWv9UyJFVjCwpG7+PCixN4mZLgTqoeJ0t2Fgu9Jl6fxKEATQaDAmNNm3viKVgyl1m9bCy3NmiGNDkX3YRAuT558Fz3gB1ADyWMBCnnADVF5hIzJUyS5NOfTromKqCIrMl+P2TZIe/Ch5O6Oq+dlCzCvVnoqBzeSBdVv/i5X10x15h1//EDs29/h+FcdSmxgj7B3Jra4fhhdQLfW3Y3gFIeuRqaKr5lF3BTKhmtlJiAXzHgzRuf0WbKOfyBBglWOBO4b15hDibYBhnWKUAt04AC+PzHQ4FRMOuRV/dbpe/2Sm9Chqj15V20xJwY1JxSqQDfw5vu/nm7PSdzd2w3JUesVQLsIxohRELlbETd0X3GhX47wLh/jomMIMrQNZxpqfrUDsrGn7RiCg2AI/DPK9PF7tod82+s0lnDks6pifbKTZeLG/ovbVhzzlOax5ay5e0NEaypfN4miqXFSnm4qrW+msgSjzHz1a7ohvK4YfpSbCQrss2Mo4NPfFto+WCUDlb1YiXAAHVXUG/raf55s3i2bqZqvqKI03CkUTg/CeWBKm+fIPtJyTEatap3dISwZ29Obby3hu7vbGyjPihOm1BFi0Kar00nnfeb6CS9v01YlVpTMKsCkE37AJuKUPByw7D0DZkTPh+c9OX+eUUz0FOZ2Ouu4jB8vGw7ev3VyntV6UGILS+V2fjLRxRvBDGHtPNI8dXFooIKmguS3nDvtOQD1TkAd5pc956ChqcUtKR5u6Om6Z3OJLygDQRbvNZYwoComFV+WXcNiO0WaldUyske8uGOaKQhtCH2j7rhPdZ5fNzoAtJvzqyvLGKcfpzPpAgvtxLc+5NV1LhpXWNsTG1fWxaoCjSdXN4bjOeTl+32Qjtbo63eFykI2y9c4D+t0gJTNA27+6e6hsNDICDHFAXrMCK53Sg4EnOR+2JQZMNdg3XWaw84nF4y+eD9vh8HHtV8Zvz3gr6Db1TuxJy1g1qjsO+a28g==';const _IH='3eed93ac5fe19fce0c16b948fa5982f5a4849427a057a85ab8c0078e93e558dd';let _src;

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
