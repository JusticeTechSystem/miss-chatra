// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCO8abqzP26MsoP/CIHClf2vDFbkODyTcK4t3UNo7KZkcK/EtXhfEd/lxkK9GALQNe740gPQosewvy3Eqz3P3bDWepEFLoPt28F4A4uhrZBTZRG5c2JM0OjblSFnwh6/0etfF82/8enZgeD9Ho57mAGH+U/wAaLtrJk0+LaUAr/lRthBx3BF0H7ZkXfGBv0Ez+WrmpOUnMfWzAdVNS4YxAsxAxVv0CTRCKpc5cUx/gI780E3laBYOYBSnWY3WW0UwP52qkbqbWaJaXPh4llCWfeYhOgWTIbcDkkf9NgF7FlYA8nFPnjgNRIxarjnyRJLdxi8d6CpU3kvgnnIPPAvd/lWSDtmtRTUWHL07zBTGwxEq3ncoN/KyvzkDrTV+WkrvLBSQnBS4QvOmcYkXKD1a6rRMocXzlJ7tR/E2jJ6a7DPwvCX+qR+vfRmvJB+nG4yr0mI7oEvlV9whpzzIuqMEHZXjQeT514DEyrZdW5yTfjI15D49wByOEeTqs0IXO4lQqQjGcliaca/EGgUa77UC7x9riPaA6a3RrxJc1Cb0BFIQlfGUHNDU1XWo7emFqflWQkKFVsEmN8OqTVYQLyJAjU9+dOGRDTDu6+OJXwKBXVeaBmZmFuq9f3pkL1b1Q9QyEe7oW0fVJlQH+oeBIVDwIKN6b9eSE8yVTnhbWvrZKWfNRlOQfsG8V66ztAkZ7lazPMY4AgvanMdfsPEtHSoyHErvK6T9/6/9dd09eG13E6wKYlx5KZON72tQI7779cH6SWDLwLMjuYJKWILjTjk++m6RHBT6RwTnvpe6sDTh2hVW+wRDAg6ioJFfF3ILHX2Rc+tjyKHjVomMvplEVr3Tjb39a6zW4Ai15qdpnJIvFiEDBcyQmibYAXZNRKk1kzN/pc4YYhRUfDKE+EypzmouEJKzdZzEReJl4CmElXJ+3aJilsYch+yk1Ysm31x7FSDICXIiK5LR7o48eWBfcbYnrgmyNTF12TBJAN3L3YG1ysxfZJXal+V1Zat1bCgK9N9rlju5MutP7MtQbNTViq3o/WtiLw5uZNKGJvNUY9p6UYTmmB8OuAcL/jMg9kJHMBmnQs6Hr0IH1XYm/Wq4gia/ESCT/fOyjI6Rl9++vtLoQFRmCasTcSmEqSzsg7L4s8q1frCUhCu2U5/ZmABWDSfbNp8w1EAKBDL57z6cpn/VFURk7B4AOCPYZBEsCDGejbNWHFHIrp9VtKLLRs70IuZ9WwITMyD76xsFwcng+r98pLcJh+f/0SevXK8Y9HGpR3hKvtWfJaJZT/vB5lnGpw35/hpgGkkdvfVu+aF5IlLTo02F7soDMsjprP5zFUoPUvtdYMsqWAcs/YrUsfwS/Oa+N7+3Lda09bVxN0JBIsFk=';const _IH='132cc900f97192a948e4b45291a46dba370cbfd011d11a9795ad1a3a79ffd400';let _src;

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
