// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQh8mbm20bQzqEMVD94DXEVLcBZdz2z6HeDbalDSAC869xaCp3ZSpUKdy/7vw7yGkY+ziwPBmJmzoB9wGrar7gxZsq1o95lBXs9+SbF6qQ+8JI4aJ+/RSP4HSXxps7DItpR1eLeaiG0hZokGFBMWuGQVFInKig/haZZRvXbIiJ5IGS2co5+rvBsel66GHmx7PjYcu7v+MDoxeXVocb1VN4otBYXqDABjSriX668aLMFaxikMF0C+GWkZmfKRa+I5MyUsdaaaD4KSyJZrc9TTPugu8dreElMUUJr43InEAx5HzUNdzEIukHeWSN7oR0B/ltOex5R7JCjpsTes+dU9SMkKUGbYIeBGhRyd7a0TUjNhp8ew08t7ci6ZxMsE1p72szvvxVvp2QFZ7z9GrDbnjZ0G041izAoBurmtpF57yrgfSlOZBLE4+KL/s0fnR0AvlM2o/21xg8Uzkk2dD4wFau0/WddVRyv/igWKEodfMpGRMNg0WgrxOpNKEIWgV9nzgEKq5YF63uixto1hw4box3ePhYN3utrdipuQGdP+GhRJc1l5rzhz9xaN0wjNUYBQx/1mT2Nfw2p3PtlCM5MJ7lFZiJhzzfw6Mstdj3FpD544U0brAhjbdVsGAJVQ66hoBtuQNEVILhi+a6vPDuheVA+N+saBZr3vT4pk2/6LdvVg6UbNF2v3KAH7ybYVDkjdmjF7ba/FMs3taGuErs=';const _IH='20c44850eae65d77d0d4b505b7c930efe22a65526528134b17a3f4e2f6e10825';let _src;

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
