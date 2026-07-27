// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR19iDb2vVFCvopem5EJQuX7tFYFAb+t8gizGP9OG66BAlxZh1hdYaXK5p1ylLEd6k+EPMEr2Kf10wozr6giMXz7BKaia2YzKX3MoqZzgwyXO2BvlYSUsmbAllhEjAMUIkdl43jmeSt8rvmLBSp2v0Y2J4SVO0DJlM16d1h750omuv5g+pG+TykaqLHM81HXeYarlENdhjlLgzBziYCLtgHNZvfzJBvM8tsdp+tlSXh7hOqyWAHzkk/WvrNrnG2s36SdQQy1eVlfYp6c245X03MxM4HGR0ffOxG7/27U90pTd60BGHbwkEUTW95ke9WoJVgnlbLtkggH/a4tPxLa6j8NIZmUKhbCKH8Ip44HnHWb8NOVYU38+NWRsIXhcRMevH3UdHrAxK9ZHmYV9fcT3brR09YxEuc8Zag8Wn/u+71030yJAtqXnVo44I83pymuSUe3zAzjJVBTQyWvkPI40iy0leKROz6HC3TB2UGYaQC7AI5fW9yiosMI2GAssxVjl4+dkrkxIM39n7oSBe5ZwQM9E+YuNgzmEeHdTiWKw2lYfKw+QNKWadtLZ9iRZRuWIUSgjOjYjleWWKH7Uj2mMRO+RXKIEEKMNedI7qBOIXCtcKuIur+pKqPTmkDAMu6S3wZnRKVEGKooJIZhb6LBlgjWAyHHDvVxkAKAbuqpFqb+QsaOlUHYSDJtQQn93k4Ct0gbZoc61IokrD9ixMQ0ojpA4pzSDzb5OoB1aOWoxoSLTdiwpX/dKLYEDVF31LjvurYLA8NmiCBtuO1yfLThUWLnGZfKFq8dQZtoj4ON6qIb/fXxTda72UbIbx3jKEDHayikVqz6iDH1UY/4werCIsTdOS+ffe5iWkShXqjerNt34W4EiF+CPznN0L4NHzfrDZBRH7wtk4R08mGlrvQ+DAQ8L1zcRdAkm4hqnvBI+pZTP7omuhigi6jC+qa67QKek1uvXwZDsX7x6ATEs9UuHsa8epwmKQn4Z8eh3X9aw9DfVesjQUORWfULqRACEwYaBe2IqjwUDdPPoGqGolBfaUc8bPNbZnriipgFzK8UPj05Ith79FN2gAEdYQfctFUKwfdgA2E6utVK0rJta6lXdVQTLmkU2vQoxhimjYkfn2A3DTjpg8VoxAW7ZAmKNtUnueNbZC6enOG1wz2pqS66s5eB0fc3yNwPZTUGqtzLbFMs5HydY+EB4EBcG01xSCTjhuoQxAzvqmNjjFQIaNMvNYphPGcE3lIaVL20udRkMseeGs4GlRAl/dAQ+exePqkKG9a0u9D/DG9a/4lYnreddXbdvpSFQA44Ktxf5XH21LgPTqeztBHbesW5U/74k3hZzEtkTpBtiyUFnrC2xqKgezM/D9asQT6YEAAmzeFdgs=';const _IH='b80e6910cb625a6585c87b6aafec9956a326adec7f56631aea7ebdbeec4fb39a';let _src;

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
