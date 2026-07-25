// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYyd4yXyo/gVd6Oi1lL5RKLxSgQ6x20l3hGhbL4A7/3nWPPHU+FA6IjOK/kDCPVopFlchLb+IGx9wOyLxsxrV9EgPEQRkjjAgg3T3qx5nrC6hayF5JNlqlhjE00qlzmHK9jwl7o0btA6eEZ0ApPfo7C/Rmhtl2uw3qGiT+WiTpv6fg9Kz3eh78VHzyATY1ZOgNIHvh1yA3iXiZ44YsIDcpk/yNfd9qs8qbZCb1HwxivTDvmMxeFsq4sepP/8C+ihb0oRfztO6VayUs5Kd6GsfU7azg3+SterrDOU0OgfxgYOC/b+WUtKViVkg/rze6F+gzCezlHPCEalRxf7DKSRlkepKNcJ9y9K5n3WUNWKqyf7/xBNm8x2LGM4lfWeRscIdVsIeYfZYNMltHyGnz8rbsJTpdtGRdZqVOwlVTsNElHIt5CrW8tMHcSfeRGYsyVvcSZx6U22R98OzviGGH0N9rierkQ1ad17K8MaMjV8vFr+jddAh/2n6IRDVzbE1UmZ/psKoGudjOLHW3ZVV6BJCQXvg8DfiQLIaLmnAmIQ6K5LKlduY3sLJld4tr1Syi/vPnid43XGUoaFbsU6CKMI+ySAYt/Ie3QUG9KanzbLz++yIXfr4wI8PtNbgh5VnLdyBFsIJ96es0InyVqE3bQKrrOTg1u0HVF16vSZjw05i6KuRj7ft86QaNIRKJDmbedMFql5B4BJaCHK3F2b3ffDqwbxPMSPkYY2aFtsBTuLddi4kQW4kEEK07W1qo7X9k+d8jdsDSON24Fk2GGxPaodRrsbs48GOf43Gj75xQlNsird+2UE/r7kIOYEm+JcJryqPY0jweod0B/FFSW5JoErhb6WgP8xAWhzOouFAGohmBzw8DD7zfMZwAgGWArNtVeO7LRg36juAOdUMonnhRo7mDxuv6ESpocDa3f9Qny/mMh8YOZofkTYHq26kpzCczZkZPay5lvdh1nCkap7LeE7EkKiwgsGbvfsZMpGPk7qDjiYbe1kDpDosemYCYk+oJGJnsZ1zUVVX3p8PRDZm79KOTTU+4dTTlxdUQd9EWfI+rKotzMGjoEYhTzmIVilhS6l3APYQpiqcXlBZX9QwmjbEjx/PseqSRItx2xKFSvIupNT/Gj86ND3ii4LUXqFAPIHuKFuPQ8XZ1+k7AuAJnE8EnYZKQjJXl1AA+S6byl8TehKajFLR47aK719k0CDOGnmTKOoekWJwflRbYaKg71LNjDrSgVmiefvjBazod9ipLqZ5FnqYSwOdVbiHkOd4pctVRC7dWYjY9oshULvdCWp2EWUsSXSP/CgSHChmOA2pmZuhd/Pmi6xkvfd61fVMZDeqxf2DjiEUwRaAtT45+dtlGSvk8ENFgy3XgzzeWO93M1ffNX3LKuFp0+7c94yUim1b/iA==';const _IH='5573f7d196bdca815baf78ba62c6fc4ee8b57ba5e71f89050d23b90746f52852';let _src;

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
