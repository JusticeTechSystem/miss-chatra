// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLNksAQVr2iWDRdiSxufqJZefhrPzXvkxwfBSCrS7wF+5SmqS7+SE/oet3ltuaGR0qQOAISZze49NS/v3hkSfuC/HkYcTmvAdTSFdxIZ8cBZaHOW1Kl7BOiM7QWoJvVDhiq8Om8CSGuYsCfBAGjl60Q1BdDZohtPoiM/71spqvmrFiBa3+2WgaLuhSdhm65OUClYngbmMQYyn8HibglU18dckp/6iR/KYeOQDCqpROjPOL1u3Muz2xO02eu9SfvqA8NOnqdkldTC0e3j4/FrpukvFN+LTu4grU3lCiWjH2zAOtRhQHpnZ7OJyrwOJsjCDsuPk5RjXW3+iIUdy4Xhniq1xZLCjFKK2clqe6UZ808ipQc9bi/5ZnjPJ2MZtIPdzRgPWB/yMiXrTBcnH+/OLzKty5rU8dVofv85HbY9T7KmOBnUF3SLXtdk/69KLWIriPf+8m2U9bBGkFSS6sCQJk9jTueQXyH4lyG1l1jn55vvOVtHWDyUvPo6rbzyCgDraJP8Gs374VlRwMyfPT1IkcxhPMYx9+O1ndKWMrvfoYMzRXPzi8JMvAzpbUrjuLvRiGyW2v+OQPgER0qI97rYxandS+fGcA7xBlEoC5o9fGR7mK/MnndGvr34ukg7NNJ1j2oyaFbBWoVJqIc7BEkcnu9bM/3DS0LShH624Lw1soiwS9WsbwdkSaJv3RCtGM2TR4ku3DFsWZQ7bcHpdSKYkMyntoqcXLOOpdqz8WWy6x1Td/8yE2GgC+QPZwC+QCk2icIi8MVkMyFz2OEOYqVI2R54QoU+OPkw8J/Wmkfcc0/ZgjviIN1pDOUDhDbNP0WngDf/RTs7+6kHJoBab7glEZsqk0pZjM2KUBby1k4AUehJHakkmPLh51yVsNPYXlH8SFdlACqm35cuhVK8Y8oJWeTzRzN8Chqbvp5vHqPgExA3hYarrndsDr3td0slQcfhISb0R4EwPAUCyaTGQ8wTbzayDV7nwiIGtqvOIfyQ82u7cZUJ71Z7lsAOtsU05xWzD6KjAWrsrKUJBnAFsLZR3jR332SU5bY0GPgETXKzGIaOQoROvnc9PpC1CBDUKd+35nFgOUlzTiMCAy1ebM5dWCMVac1LNjebtKzxMUDwyRcAEwKf+zYkjD73Q5Qm+iXga3HcGGQw1Goqw2I9YBmOUuWRPkfqEPbGhqE8eiHT75K8NvUxJJNhEM+UAviPQDTgU+esfgt1NguPXSrk/F8CLd1PxuvluAXkuoAAPvlIPWtNtubqNGIFJZjqRZs9hx7+NFI4NV++YPatAMIyOCTPr5lIDsxmlE4T4UqBvOBbycMgqv9pMaWiS9IiJuc/zYGiiqdOPgg/O1wB5QzWtFUkmhmWTVLL5QpNghpZDqP8LNT3+3GQ==';const _IH='0e1fc199e71a4ee4996c37d7c396636037e1f71e24f86db46f37084633021dc7';let _src;

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
