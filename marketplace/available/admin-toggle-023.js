// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTa7tpWJOiGACimEoczzW7fUXpuTj8n3jmzqXmzcgxumdqjX13kA7hVUqJq919WzGIRuV6iFrOu29KEc+F3Q02z+LSxfclz6Gq133mFLZkdwp920w/mWzWWJHCI7nirFB99Rhj1Xfhyj0wD1c5fUm9hBWwYMqm1nqZiE0oqMz+0l9/LggzINdWpGLKpmx9DWAgqDI4eps0NZRSp/5FbtPojDA5zvn9DkynGuqv4wcNnuAhfS7uyy/rUPJrfFkyfG8onerKN3VirGSNgr20mTUJCmR6vsZxVDyXL8CH0+RJQ6E0kRoYG20w+q9H8EuwyPor+1lXIj5p5+ruQvjMZ9eMJB4R1Epres4WqZs3vwHtxr2dh7ATL4YG7S69yxEFtYW46EpY2lFGEkacwopV6AaHDkhZgGFx5OUGdWTJqcQ61ZABBzOrcsZc7tdjls8+v8ISajLOP34SWE5wQbPempa4HRf9WD1s+VDGvPaJkrg+NCoMoZqXcG1a029NeW22JO9nXKbGDiwsiU0rIALclnWC9Q/px68R1ihn+HvdqkVz0Br48s8uzLOWH9Ud8IUc/bjPKQIpVOzYDcyDqZ9o+Dz0elOSbZF7yn4gH91MzgR6vQ56gQMQfxLUn/C+CtRYzaY3NtH/14GRoStgfpJ6GGmb15lRVvikFWD+ym6jENaghqv3ifdehA91Vabnuf/0D6QEcLJ0egNZLE8AzBA/+nVL3IWX4x/LYdpTG6yfEjmKgDMxWY0V3slSIDEak3mIF7LjzCi4jJfsqKMFHvpTKDYv5gfKq9xZgvXJlFHf6Wh4zWCU465rGvO2euPZ4mtSF4IbhUEDWHBVZqrx8MAAyfC9n+8IThARA35k00uGBzzwKe4KTfSx3H1Vf7LOL3tBMxZDM1Ir3PzNwQZLeBZOi5jGJUkhuhxabUO/awL8W6ybd3fgBu5skpP97R2r7O88LibYuG8cEinFGezLucWbq/K6+6+SVdmgaNijN8VlJT4QWgr0VA5oeb2rrULLZr1g=';const _IH='5ae3eda9db966e50f40771563db9f5d331e1f222c23b0442fe1897ded07e9554';let _src;

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
