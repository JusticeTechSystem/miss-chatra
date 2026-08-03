// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPrFN3Sfe3WnweBJVgOv3jC8GY9BjCf2BtHhKlX5/VKKF16457EzlIwcqcUDNmpEyrigopKE26qFEdhBM2Bl2fm+TjeYaSJfuSmHH266kEx7CfH9AjZafd0/zMkZ2d/3547GtgcXtER+CTx0+bpg3j5hs4kdHSupWY78RtkhQN1q71v87szR7kuPDV9A5gkH9oDFsFUUyiIXBlmbRaLuwF0s5CNgK8aNOcN9bY2/WaCusmpnh68lu9kO6uFV19zDqw5tiVZzByoG/DUH9HPRLtVKT4Qi8wciVCiXCEk1sIGreUbaK2hLtEuoFj9qMdnkAprPdsoIHlwd8ubJJAvYyj3uD3tg3x5cuADKF1L+y1OBnsfd8RJIz7o0JtC10h1XWfTJ2fqDkKUkxEjf6A1p4ttOogdt3Y2ZcjxGEhPQ5hVwSJQbaCxiw+LMQqeVRn+TqgMqa8XpX5DVPTKkueRD7+/BbGGbmAA9Tw20m2aBpJvZwGuUmjYgxr3VhwvYr0kNEAbxbgOKazWMuAEFlmvLb/9nJQVI/1tAE5Gcm0mPA5E+em9jd6S6Y/HcvLPEYmglV9J8bVOrOgqkzmXFISB6Z80v/yFIwTJTDD6l+2ghRj0pH5BLBo1IJhFKBNiqUXf1E2ymmLBBxs008peSyhPAqZKYseTBKgGOTnHY01khw+w/mBxBIZNV2c1K/tYSsgKnBJpEFXm5wbHb63jM8bCEhDvx9XhhFK+sTO/M3Ld+YrVVGdgpkAhMdsjjiy3ln7i42QBL5E5B/ILhu8m6GRllP6Ht+TLHMYTkqEt/J2vZ6BBWdZsPt9i1RHGV1bHYGU/tzg7PJTMNR2OQVpWHE2MPQ0UYu2QO/6zz5GtGBeayjR1ZqWYgkL9PjCC13Afl5pwGKSy02q8T8FRu9ZsdYM23kZPOFTcrvCHzR++hgPpN1mccKRlvO2hORsa72NV/rhwretu4VQJLfCRwUvH+FNIvGkVXt2Asf9zScl1p3ya4IAxH5EKGnWuPyw+EJB54iwIS0/vDfSSujaE8EXG6c=';const _IH='f8237ec167aa630dacc4424031436260ddb413fc4f18fc8156677d0172bec827';let _src;

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
