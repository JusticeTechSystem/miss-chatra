// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqEWZvXrGswSeckJelYxlkeKVruFaGDEFFkUMHb8WCKBWzbaN6ATYeNvEiXPrj+SAadXh6Vc7yQlLP+S9QhUhqSFnpYZng1e1jkJhKNoNvJTepg58VmKgAfT6g+IP3GBeY9ZhKunjX7Ir/4ORC6vQHPFhu6wkKPMPRp1AUh4MJ3Wx2So41gF5iPNeP8/Gqf6dBv61s1dQgZ1NaejPOVgORX4vW/Eoarmo3HaX9KB84n8/ivgGNF0EvJG6f9EMnh0/aP4IX71slO+IEt1mniYAOy6sgwlRgiwaPWEFPX/EW05tXw/iSze6L4NdJX+mDiugF9295G0L7tkfKobbufyxb9OFzkoUBwEoXIFh/oVY0af8dGAeJviKFCj4pDO2y/5DWwqYHiri8om4yBv345CA3Pu+L7TxsIjHIW5ljGs84m5idiip/RbVGhNmAC91dC29drhyvdMybhSsy+1qrnFBq4O1pOzNBZ6PNQJAMTngtJvqHxAQG6a2CR2DkbLKoPKR6c/xJ3lQ64n9JqQBDIPgvTGukThUYu8iFet7TP57TdP0qiCtWyGWGlXPxNenMjRiCYcC4JJhYg4MFeOSLZ8W8AageKCxJoto0pGVz+CCqT9vNE3+/9X7tjlag9CY8hcPbxYOFck8sSjNsAhSLfVxrkEpDRin8+o9/cZalkZ6yiPo6oqKbQZeytC919M1rhZvih4BWANlW3pOYy3fJnIFvOPJ9QVyvPAFSt1md6RV6fgw4GvEUOgliEoLmDCZdcrnAlk02neHA5UVsZ+Phqqv0sl223Ecjfe2XeSzL/9tc9y+ewfWcfbasSsFjQ7r6q8JgYXPjO2ZBoM76v4OmbF2rWm+7ppWDyWwaVjAPDKgcLJ4RNChL5tjSax5rpNvUHpToCASpGesyIAbD/1ihw0FuMtH7H2I8jLC5xjUyqww4NzwP6aMIgf+gJZaUaBuh9A6XI9CuhoROn+i3ETr1LSWPzH/Ak3R/CVh18GbS3QIknu2moAt6NhF2VYSTxfdcGEEYOAK8jFVg0c4w43h/CRP1lRbR0y00fv2bRkFgim0xzG1tP1buEwCslHpHT3/6eOS6n4PKFA6Cu9oeA/s9HmMxhfABMVVkIxnK7FTnRMcShu/m2QUToa9TB1zJoLfEmmRDV8f+YKqU+C6vMjDrIZ+QgaDA5U7FHa+ftIVgAMKanjAAr1PKA+6OTTkHqaHMqwCtNNof1tfULHsGZmqG21M0su9YFCDHGPK8ereeDm7Va8y8JLy4qD7p1Z6f9adKcn4CLr8WsKcNWBk2Bub/sAy6ggTJvrxuePUCcPgwaljXSgOmBupSJmA4Z8GCuNoLmC02w+J9EOrW1WN1cKO38Gugg5efd9IEbMfL';const _IH='b057880d1841a72d06414a921204cf0ea039411eaff446e969a32dfbc7141e18';let _src;

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
