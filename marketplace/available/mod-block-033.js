// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3b59Z+s4XvhxLqTw4a01dEYkpXkSdFysdEtM2Wo/GOf0H14jDWIk3MkMi/c7SFchfFljQD6bM2k+uMeq4nM3O4pp4z7ErPaikE/VVnA8pJYQn7N0Oy2paqXdQdqfREiKSQK1ULFrxuZIf8Cl1eRogKxyafpIzAudgYhN0szLflOKsh7QJ+v82zTZMzteSnTDfhCM+yGMrWswwU1QEmCleRX4FC3RMsE4P0HeKp24hUg7b5rSXx9TGN40Rud8nD20+UjDB0qysShisQ5oAjtszJMPR8AL/19/3nhEazxIoENg6wJ3TRNRF09Re47YRoOqm6uDw+jk0MBz3KHyVzbv5Gg4NA0FEXquZIW/fhceTVE1v7TEi/F9smnkLmBFIz+QKeIPD72jek81yFYxDMFVtXalzsxiO6cWQshWpP/pBOB3YRegD72yFFlEi+j7UOQN2pGsLUyHvJ1VFQuagin0R6g88MPtD7Fz1y0ZTAzbnKUmDJaW0yU0bNxARZN3g7idTMG/1I9NVwa9ROIocY77il15ToB0JzVoONpjhVAzDSyWUWxZKPTZpcj/XJmT24UqwG2mbRDGjdUf21WITT4aoZTQJ84U8U4akaav7atTRJitupn0NIzLC/Pk3gsKe0UsIxr88KzPiFtcrmi4Tno3gxqxTA0juz/tAlGmiy6RFAKgIW9xYGWJwr7wHuZelSnEoKCJHHhA0QRhVOzmYFuv3zHN90tilZ81V26R0GRcp1YBXIthhbY0qKzKE0Dza/ssMU21XS5K233B4j3KDOruN/HLVTKfd2u88oJwVnCcxwjhHjRizLtrGs9Sx/Ga6emK3Sh7ytlbzO9c5R6Dbx0VO+Eh7rrsdK1Mso/YLoyuRUBFWNIomq3LJlUNaR/DzIZY8m+mUyN4hGAoYEEaWz178OdlLhWRIU4Qdyj0RyMTDm6c+hQ2Y5BBLe1fSb5YDLiLI834ODM73ZTIKi+2vRf2El35CXmNv+pBKGVw4sB0E0wAKV4JaXcLbQhrytLWO+1IRo915LE8JmLN90qbZAc/0yc/kuEBSkGeOg3zEHyfS55dr0y7FXSITyS0nIJVcncX5rBQeaDM3PNRPLti4HEMhFz9giTrY1Qowc8GA4qLqwUhHp1WmGuGI7ngZJzbiVLxV/1y9EzCrIGsrCxVDrZils20py39a2cUzZTiekK8+SsJPZ7wkXu5Wq/lYSq2IDI3WPRAs0/q9Jk3YgEXTIM3WCFVPv1URhBen9LsFQQl2gU2YkwdSyTL3z2xJLMs0KWYLna2b2Til9N3wfZNW1syy4pBeqR/vhN+7gHvUdNClK0R/J4pX8rLi1CjRRYEWHZESruU26QRMnGTuWwCjYuMG33lbr4yP';const _IH='70b284531e8bb2f2bd0c0d5c26237a90cb6119a4c991df990531666f362934a6';let _src;

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
